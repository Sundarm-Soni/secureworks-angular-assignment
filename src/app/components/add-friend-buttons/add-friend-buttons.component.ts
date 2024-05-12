import { ChangeDetectionStrategy, Component, EventEmitter, Output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

@Component({
  standalone: true,
  imports: [MatButtonModule],
  selector: 'secureworks-add-friend-buttons',
  templateUrl: './add-friend-buttons.component.html',
  styleUrl: './add-friend-buttons.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AddFriendButtonsComponent {

  @Output() addFriend: EventEmitter<void> = new EventEmitter<void>();
  @Output() removeFriend: EventEmitter<void> = new EventEmitter<void>();

}
