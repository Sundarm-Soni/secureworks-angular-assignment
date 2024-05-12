import { TestBed, waitForAsync } from '@angular/core/testing';
import { FriendsFormComponent } from './friends-form.component';

describe('FriendsForm', () => {
  beforeEach(waitForAsync(() => {
     TestBed.configureTestingModule({
      imports: [FriendsFormComponent],
    }).compileComponents();
  }));
});
