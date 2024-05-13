import { TestBed, waitForAsync } from '@angular/core/testing';
import {FriendsComponent} from './friends.component';
import { MockComponent, MockModule } from 'ng-mocks';
import { MatButtonModule } from '@angular/material/button';
import { FriendGroupComponent } from '../friend-group/friend-group.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';

describe('FriendsComponent', () => {
  beforeEach(waitForAsync(() => {
     TestBed.configureTestingModule({
      imports: [MockModule(MatButtonModule), MockModule(ReactiveFormsModule), MockModule(RouterTestingModule)],
      declarations: [FriendsComponent, MockComponent(FriendGroupComponent)],
    }).compileComponents();
  }));
});
