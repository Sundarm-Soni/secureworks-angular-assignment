import { TestBed, waitForAsync } from '@angular/core/testing';
import {FriendsComponent} from './friends.component';
import { MockComponent, MockModule } from 'ng-mocks';
import { MatButtonModule } from '@angular/material/button';
import { FriendGroupComponent } from '../friend-group/friend-group.component';
import { ReactiveFormsModule } from '@angular/forms';

describe('FriendsComponent', () => {
  beforeEach(waitForAsync(() => {
     TestBed.configureTestingModule({
      imports: [MockModule(MatButtonModule), MockModule(ReactiveFormsModule)],
      declarations: [FriendsComponent, MockComponent(FriendGroupComponent)],
    }).compileComponents();
  }));
});
