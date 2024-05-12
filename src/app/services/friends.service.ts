import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FriendsService {
  friendsData: any;

  constructor() { }

  public setfriendsData(data: any): void {
    this.friendsData = data;
  }

  public async getFriends() {
    await this.sleep(1000);
    return this.friendsData;
  }

  public async sleep(ms: number) {
    return new Promise(resolve =>
      setTimeout(resolve, ms));
  }
}
