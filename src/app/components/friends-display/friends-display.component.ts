import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  inject,
  signal,
} from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FriendsStore } from '../../store/friends.store';
import { JsonPipe } from '@angular/common';
import { FriendsTableComponent } from '../friends-table/friends-table.component';
import {
  IAgGridFriendsInterface,
  IFriendsGroupData,
} from '../../models/friends-form.interface';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { FriendChartComponent } from '../friend-chart/friend-chart.component';

@Component({
  standalone: true,
  imports: [
    ReactiveFormsModule,
    JsonPipe,
    FriendsTableComponent,
    MatProgressSpinnerModule,
    FriendChartComponent
  ],
  selector: 'secureworks-friends-display',
  templateUrl: './friends-display.component.html',
  styleUrl: './friends-display.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FriendsDisplayComponent implements OnInit {
  public store = inject(FriendsStore);
  public friendsDataTable = signal<IAgGridFriendsInterface[]>([]);
  private _prevVal!: string;
  private _currVal!: string;

  public ngOnInit(): void {
    this.loadFriends().then(() => {
      if (this.store.allfriends()) {
        this.transformData(this.store.allfriends());
      }
    });
  }

  public transformData(data: IFriendsGroupData): void {
    for (let value of Object.values(data)) {
      if (Array.isArray(value)) {
        this._currVal = this._prevVal;
        for (let val of value) {
          this.transformData(val);
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
