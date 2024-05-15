import {
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  Input,
  KeyValueDiffers,
  OnInit,
  forwardRef,
  inject,
  output,
} from '@angular/core';
import {
  ControlValueAccessor,
  FormGroup,
  NG_VALUE_ACCESSOR,
  ReactiveFormsModule,
} from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import {
  IFriendsForm,
  IFriendsFormData,
  IFriendsGroupForm,
} from '../../models/friends-form.interface';

import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
  ],
  selector: 'secureworks-friends-form',
  templateUrl: './friends-form.component.html',
  styleUrl: './friends-form.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => FriendsFormComponent),
      multi: true,
    },
  ],
})
export class FriendsFormComponent implements ControlValueAccessor, OnInit {
  @Input() public myfriendsForm!: FormGroup<IFriendsGroupForm>;
  public friendsForm!: FormGroup<IFriendsForm>;
  private _destroyRef = inject(DestroyRef);
  public remove = output<void>();

  private _onChange!: (value: IFriendsFormData) => void;

  constructor() {}

  public ngOnInit(): void {
    this._createFriendsForm();
    this._setupObservables();
  }

  private _createFriendsForm(): void {
    this.friendsForm = this.myfriendsForm.controls['friends'];
  }

  writeValue(value: IFriendsFormData | null): void {
    if (!value) {
      return;
    }

    this.friendsForm.patchValue(value);
  }

  registerOnChange(fn: (value: IFriendsFormData | null) => void): void {
    this._onChange = fn;
  }

  registerOnTouched(fn: any): void {}

  setDisabledState(isDisabled: boolean): void {}

  private _setupObservables() {
    this.friendsForm.valueChanges
      .pipe(takeUntilDestroyed(this._destroyRef))
      .subscribe((value) => {
        if (this._onChange) {
          console.log(KeyValueDiffers);
          this._onChange(value as IFriendsFormData);
        }
      });
  }
}
