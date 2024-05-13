import { TestBed, waitForAsync } from '@angular/core/testing';
import { MockModule } from 'ng-mocks';
import { AddFriendButtonsComponent } from './add-friend-buttons.component';
import { MatButtonModule } from '@angular/material/button';

describe('AddFriendButtonsComponent', () => {
  beforeEach(waitForAsync(() => {
     TestBed.configureTestingModule({
      imports: [MockModule(MatButtonModule)],
      declarations: [AddFriendButtonsComponent],
    }).compileComponents();
  }));
});
