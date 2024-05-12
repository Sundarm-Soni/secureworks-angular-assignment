import { TestBed, waitForAsync } from '@angular/core/testing';
import {FriendsDisplayComponent} from './friends-display.component';

describe('FriendsDisplayComponent', () => {
  beforeEach(waitForAsync(() => {
     TestBed.configureTestingModule({
      imports: [FriendsDisplayComponent],
    }).compileComponents();
  }));
});
