import { TestBed, waitForAsync } from '@angular/core/testing';
import { FriendsFormComponent } from './friends-form.component';
import { MockModule } from 'ng-mocks';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';

describe('FriendsForm', () => {
  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [MockModule(MatFormFieldModule), MockModule(ReactiveFormsModule)],
      declarations: [FriendsFormComponent],
    }).compileComponents();
  }));
});
