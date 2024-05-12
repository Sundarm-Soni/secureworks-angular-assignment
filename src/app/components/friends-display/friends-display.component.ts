import { ChangeDetectionStrategy, Component, OnInit, inject } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FriendsStore } from '../../store/friends.store';
import { JsonPipe } from '@angular/common';

@Component({
  standalone: true,
  imports: [ReactiveFormsModule, JsonPipe],
  selector: 'secureworks-friends-display',
  templateUrl: './friends-display.component.html',
  styleUrl: './friends-display.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FriendsDisplayComponent implements OnInit {
  store = inject(FriendsStore);

  public ngOnInit(): void {
    this.loadFriends().then(() => console.log("Todos Loaded!"));
  }

  async loadFriends() {
    await this.store.loadAll();
  }
}
