import { TestBed, waitForAsync } from '@angular/core/testing';
import {FriendsDisplayComponent} from './friends-display.component';
import { MockComponent, MockModule } from 'ng-mocks';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { FriendsTableComponent } from '../friends-table/friends-table.component';
import { ReactiveFormsModule } from '@angular/forms';

describe('FriendsDisplayComponent', () => {
  beforeEach(waitForAsync(() => {
     TestBed.configureTestingModule({
      imports: [MockModule(MatProgressSpinnerModule), MockModule(ReactiveFormsModule)],
      declarations: [FriendsDisplayComponent, MockComponent(FriendsTableComponent)],
    }).compileComponents();
  }));
});
