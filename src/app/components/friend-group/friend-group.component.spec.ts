import { TestBed, waitForAsync } from '@angular/core/testing';
import { MockComponents, MockModule } from 'ng-mocks';
import { MatButtonModule } from '@angular/material/button';
import { FriendGroupComponent } from '../friend-group/friend-group.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FriendsFormComponent } from '../friends-form/friends-form.component';
import { AddFriendButtonsComponent } from '../add-friend-buttons/add-friend-buttons.component';

describe('FriendGroupComponent', () => {
  beforeEach(waitForAsync(() => {
     TestBed.configureTestingModule({
      imports: [MockModule(MatButtonModule), MockModule(ReactiveFormsModule)],
      declarations: [FriendGroupComponent, MockComponents(FriendsFormComponent, AddFriendButtonsComponent)]
    }).compileComponents();
  }));
});
