import { TestBed, waitForAsync } from '@angular/core/testing';
import {FriendsComponent} from './friends.component';

describe('FriendsComponent', () => {
  beforeEach(waitForAsync(() => {
     TestBed.configureTestingModule({
      imports: [FriendsComponent],
    }).compileComponents();
  }));
});
