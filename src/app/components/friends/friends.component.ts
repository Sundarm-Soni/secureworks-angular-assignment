import {
  ChangeDetectionStrategy,
  Component,
  HostListener,
} from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { FriendGroupComponent } from '../friend-group/friend-group.component';

import { MatButtonModule } from '@angular/material/button';
import { FriendsService } from '../../services/friends.service';
import { Router } from '@angular/router';

@Component({
  standalone: true,
  imports: [FriendGroupComponent, ReactiveFormsModule, MatButtonModule],
  selector: 'secureworks-friends',
  templateUrl: './friends.component.html',
  styleUrl: './friends.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FriendsComponent {
  public friendForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private _friendsService: FriendsService,
    private _router: Router
  ) {
    this._createFriendForm();
  }

  public addYourFriend(event: Event): void {
    event.stopPropagation();
    this.groupsFormArray.push(
      this.fb.control({
        groups: [],
      })
    );
  }

  public deleteFriendGroup(index: number): void {
    this.groupsFormArray.removeAt(index);
  }

  public get groupsFormArray(): FormArray {
    return this.friendForm.get('groups') as FormArray;
  }

  public submitForm(): void {
    if (this._friendsService.friendsSessionStorage) {
      this._friendsService.friendsData = {
        ...JSON.parse(this._friendsService.friendsSessionStorage),
        groups: [
          ...this.friendForm.value.groups,
          ...JSON.parse(this._friendsService.friendsSessionStorage).groups,
        ],
      };
      console.log(this._friendsService.friendsData);
      this._friendsService.friendsDataToSessionStorage = {
        ...JSON.parse(this._friendsService.friendsSessionStorage),
        groups: [
          ...this.friendForm.value.groups,
          ...JSON.parse(this._friendsService.friendsSessionStorage).groups,
        ],
      };
    } else {
      this._friendsService.friendsData = this.friendForm.value;
      this._friendsService.friendsDataToSessionStorage = this.friendForm.value;
    }
    this._router.navigate(['friends-display']);
  }

  private _createFriendForm(): void {
    this.friendForm = this.fb.group({
      groups: this.fb.array([]),
    });
  }
}
