import { Injectable, signal } from '@angular/core';
import { IFriendsGroupData } from '../models/friends-form.interface';

@Injectable({
  providedIn: 'root'
})
export class FriendsService {
  private _friendData = signal<IFriendsGroupData>({} as IFriendsGroupData);

  constructor() { }

  public set friendsData(data: IFriendsGroupData) {
    this._friendData.set(data);
  }

  public set friendsDataToSessionStorage(data: IFriendsGroupData) {
    sessionStorage.setItem(
      'friendsState',
      JSON.stringify(data)
    );
  }

  public get friendsData() {
    return this._friendData();
  }

  public get friendsSessionStorage() {
    return sessionStorage.getItem("friendsState");
  }

  public async getFriends(): Promise<IFriendsGroupData> {
    await this.sleep(1000);
    return this.friendsData;
  }

  public async deleteFriend(id: string) {
    await this.sleep(500);
  }

  public async sleep(ms: number) {
    return new Promise(resolve =>
      setTimeout(resolve, ms));
  }
}
