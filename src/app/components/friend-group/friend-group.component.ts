import {
  Component,
  forwardRef,
  OnDestroy,
  OnInit,
  output,
  input
} from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  FormArray,
  ControlValueAccessor,
  NG_VALUE_ACCESSOR,
  ReactiveFormsModule,
  FormsModule,
  FormControl,
  Validators,
} from '@angular/forms';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { IFriendsGroupData } from '../../models/friends-form.interface';
import { AddFriendButtonsComponent } from '../add-friend-buttons/add-friend-buttons.component';
import { FriendsFormComponent } from '../friends-form/friends-form.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'secureworks-friend-group',
  templateUrl: './friend-group.component.html',
  styleUrls: ['./friend-group.component.scss'],
  standalone: true,
  imports: [
    ReactiveFormsModule,
    FormsModule,
    AddFriendButtonsComponent,
    FriendsFormComponent,
    CommonModule,
  ],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => FriendGroupComponent),
      multi: true,
    },
  ],
})
export class FriendGroupComponent
  implements ControlValueAccessor, OnDestroy, OnInit
{

 public formLabel = input<string | number>('Friend');

  public remove = output<void>();

  public friendGroup!: FormGroup;

  private _onChange!: (value: IFriendsGroupData | null | undefined) => void;

  private _destroy$: Subject<void> = new Subject<void>();

  constructor(private _fb: FormBuilder) {}

  ngOnInit() {
    this.friendGroup = this._createFormGroup();

    this._setupFormControlValues();
  }

  public writeValue(value: IFriendsGroupData | null | undefined): void {
    if (!value) {
      return;
    }

    this.friendGroup.patchValue(value);
  }

  public registerOnChange(
    fn: (value: IFriendsGroupData | null | undefined) => void
  ): void {
    this._onChange = fn;
  }

  public registerOnTouched(fn: any): void {}

  public setDisabledState(isDisabled: boolean): void {}

  public deleteFriendGroupFromArray(index: number) {
    this._groupsFormArray.removeAt(index);
  }

  public addFriendGroup(): void {
    this._groupsFormArray.push(
      this._fb.control({
        friends: { name: '', age: null, weight: null },
        groups: [],
      })
    );
  }

  get _groupsFormArray(): FormArray {
    return this.friendGroup.get('groups') as FormArray;
  }

  private _createFormGroup(): FormGroup<any> {
    return this._fb.group({
      friends: this._fb.group({
        name: new FormControl('', [Validators.required]),
        age: new FormControl(null, [Validators.required, Validators.min(10), Validators.max(150)]),
        weight: new FormControl(null, [Validators.required, Validators.min(30), Validators.max(200)]),
      }),
      groups: this._fb.array([]),
    });
  }

  private _setupFormControlValues(): void {
    this.friendGroup.valueChanges
      .pipe(takeUntil(this._destroy$))
      .subscribe((value) => {
        if (this._onChange) {
          this._onChange(value);
        }
      });
  }

  public ngOnDestroy(): void {
    if (this._destroy$ && !this._destroy$.closed) {
      this._destroy$.next();
      this._destroy$.complete();
    }
  }
}
