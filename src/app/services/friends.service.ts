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

  public get friendsData() {
    return this._friendData();
  }

  public async getFriends(): Promise<IFriendsGroupData> {
    await this.sleep(1000);
    return this.friendsData;
  }

  public async sleep(ms: number) {
    return new Promise(resolve =>
      setTimeout(resolve, ms));
  }
}
