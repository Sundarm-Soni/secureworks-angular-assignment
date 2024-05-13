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
    },
  }))
);
