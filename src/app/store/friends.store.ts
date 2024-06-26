import { patchState, signalStore, withMethods, withState } from '@ngrx/signals';
import { IFriendsGroupData, IFriendsState } from '../models/friends-form.interface';
import { FriendsService } from '../services/friends.service';
import { inject } from '@angular/core';

const initialState: IFriendsState = {
  allfriends: { friends: { name: '', age: null, weight: null }, groups: [] },
  loading: false,
  error: false,
};

export const FriendsStore = signalStore(
  { providedIn: 'root' },
  withState(initialState),
  withMethods((store, friendsService = inject(FriendsService)) => ({
    async loadAll() {
      patchState(store, {
        loading: true,
      });

      if(friendsService.friendsSessionStorage) {
        patchState(store, { allfriends: JSON.parse(friendsService.friendsSessionStorage), loading: false, error: false });
      } else {
        const allfriends = await friendsService
        .getFriends()
        .catch((err) => {
          if (err) {
            patchState(store, {
              error: true,
            });
          }
        }) as IFriendsGroupData;

      patchState(store, { allfriends, loading: false, error: false });
      }
    },
    // async deleteFriend(id: string) {
    //   await friendsService.deleteFriend(id);

    //   patchState(store, (state) => {
    //     friends: state.allfriends.groups.filter(friend => friend.id !== id)
    //   });
    // }
  }))
);
