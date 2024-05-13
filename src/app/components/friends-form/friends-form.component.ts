import { ChangeDetectionStrategy, Component, Input, KeyValueDiffers, OnDestroy, OnInit, forwardRef, output } from '@angular/core';
import {
  ControlValueAccessor,
  FormGroup,
  NG_VALUE_ACCESSOR,
  ReactiveFormsModule,
} from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { IFriendsForm, IFriendsFormData, IFriendsGroupForm } from '../../models/friends-form.interface';

import { Subject, takeUntil } from 'rxjs';

@Component({
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule
],
  selector: 'secureworks-friends-form',
  templateUrl: './friends-form.component.html',
  styleUrl: './friends-form.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => FriendsFormComponent),
      multi: true
    }
  ]
})
export class FriendsFormComponent implements ControlValueAccessor, OnDestroy, OnInit {
  @Input() public myfriendsForm!: FormGroup<IFriendsGroupForm>;
  public friendsForm!: FormGroup<IFriendsForm>;
  private _destroy$: Subject<void> = new Subject<void>();
  public remove = output<void>();

  private _onChange!: (
    value: IFriendsFormData
  ) => void;

  constructor() {}

  public ngOnInit(): void {
   this._createFriendsForm();
   this._setupObservables();
  }

  private _createFriendsForm() : void {
    this.friendsForm = this.myfriendsForm.controls['friends'];
  }


  writeValue(value: IFriendsFormData | null): void {
    if (!value) {
      return;
    }

    this.friendsForm.patchValue(value);
  }

  registerOnChange(
    fn: (value: IFriendsFormData | null) => void
  ): void {
    this._onChange = fn;
  }

  registerOnTouched(fn: any): void {}

  setDisabledState(isDisabled: boolean): void {}

  private _setupObservables() {
    this.friendsForm.valueChanges.pipe(takeUntil(this._destroy$)).subscribe(value => {
      if (this._onChange) {
        console.log(KeyValueDiffers)
        this._onChange(value as IFriendsFormData);
      }
    });
  }

  ngOnDestroy() {
    if (this._destroy$ && !this._destroy$.closed) {
      this._destroy$.next();
      this._destroy$.complete();
    }
  }
}
