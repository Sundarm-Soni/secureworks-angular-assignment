import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { FriendsComponent } from './friends.component';
import { MockComponent, MockModule, MockProvider } from 'ng-mocks';
import { MatButtonModule } from '@angular/material/button';
import { FriendGroupComponent } from '../friend-group/friend-group.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { FriendsService } from '../../services/friends.service';
import { Router } from '@angular/router';
import { groupsFormsMock, groupsMock } from '../../mocks/friendsForm.mock';

describe('FriendsComponent', () => {
  let component: FriendsComponent;
  let fixture: ComponentFixture<FriendsComponent>;
  let router: Router;
  let friendsService: FriendsService;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        MockModule(MatButtonModule),
        MockModule(ReactiveFormsModule),
        MockModule(RouterTestingModule),
      ],
      declarations: [FriendsComponent, MockComponent(FriendGroupComponent)],
      providers: [
        {
          provide: FriendsService,
          useValue: {
            friendsData: jest.fn(),
            friendsDataToSessionStorage: jest.fn()
          },
        },
        {
          provide: Router,
          useValue: {
            navigate: jest.fn(),
          },
        },
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FriendsComponent);
    component = fixture.componentInstance;
    router = TestBed.inject(Router);
    friendsService = TestBed.inject(FriendsService);
  });

  it('should navigate to display page on form submit', () => {
    const path = 'friends-display';
    jest.spyOn(router, 'navigate');
    component.submitForm();
    fixture.detectChanges();
    expect(router.navigate).toHaveBeenCalledWith([path]);
  });

  it('should set form data in both service and session storage onSubmit', () => {
    const path = 'friends-display';
    component.submitForm();
    component.friendForm.patchValue(groupsFormsMock);
    fixture.detectChanges();
    friendsService.friendsData = component.friendForm.value;
    friendsService.friendsDataToSessionStorage = component.friendForm.value;
    expect(friendsService.friendsData).toEqual(component.friendForm.value);
    expect(friendsService.friendsDataToSessionStorage).toEqual(component.friendForm.value);
  });
});
