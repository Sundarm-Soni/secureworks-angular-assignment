import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { FormGroupComponent } from '../friend-group/friend-group.component';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';

@Component({
  standalone: true,
  imports: [FormGroupComponent, ReactiveFormsModule, MatButtonModule, FormsModule, CommonModule],
  selector: 'secureworks-friends',
  templateUrl: './friends.component.html',
  styleUrl: './friends.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FriendsComponent {
  public _form!: FormGroup;

  constructor(private fb: FormBuilder) {
    this._createForm();
  }

  public addYourFriend(event: Event): void {
    event.stopPropagation();
    this._groupsFormArray.push(
      this.fb.control({
        groups: []
      })
    );
  }

 public _delete(index: number) {
    this._groupsFormArray.removeAt(index);
  }

  get _groupsFormArray(): FormArray {
    return this._form.get("groups") as FormArray;
  }

  public submitForm(): void {
    console.log(this._form.value);
  }

  private _createForm() {
    this._form = this.fb.group({
      groups: this.fb.array([])
    });
  }
}
