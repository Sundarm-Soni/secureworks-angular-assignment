import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  inject,
  signal,
} from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FriendsStore } from '../../store/friends.store';
import { AsyncPipe, JsonPipe } from '@angular/common';
import { FriendsTableComponent } from '../friends-table/friends-table.component';
import {
  IAgGridFriendsInterface,
  IFriendsGroupData,
} from '../../models/friends-form.interface';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { FriendChartComponent } from '../friend-chart/friend-chart.component';
import { toObservable } from '@angular/core/rxjs-interop';
import { Observable } from 'rxjs';

@Component({
  standalone: true,
  imports: [
    ReactiveFormsModule,
    JsonPipe,
    FriendsTableComponent,
    MatProgressSpinnerModule,
    FriendChartComponent,
    AsyncPipe
  ],
  selector: 'secureworks-friends-display',
  templateUrl: './friends-display.component.html',
  styleUrl: './friends-display.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FriendsDisplayComponent implements OnInit {
  public store = inject(FriendsStore);
  public friendsDataTable = signal<IAgGridFriendsInterface[]>([]);
  public friendsDT: Observable<IAgGridFriendsInterface[]> = toObservable(this.friendsDataTable);
  private _prevVal!: string;
  private _currVal!: string;

  constructor() {}

  public ngOnInit(): void {
    this.loadFriends().then(() => {
      if (this.store.allfriends()) {
        this._transformData(this.store.allfriends());
      }
    });
  }

  private _transformData(data: IFriendsGroupData): void {
    for (let value of Object.values(data)) {
      if (Array.isArray(value)) {
        this._currVal = this._prevVal;
        for (let val of value) {
          this._transformData(val);
        }
      } else {
        this.friendsDataTable.update((values: IAgGridFriendsInterface[]) => {
          const finalObj = { ...value, id: Math.random().toString(36).substring(2,9),  friend: this._currVal };
          this._prevVal = value.name;
          return [...values, finalObj];
        });
      }
    }
  }

  async loadFriends(): Promise<void> {
    await this.store.loadAll();
  }
}
