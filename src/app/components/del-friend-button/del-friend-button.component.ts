import { Component, output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { ICellRendererAngularComp } from '@ag-grid-community/angular';
import { GridApi, ICellRendererParams } from '@ag-grid-community/core';

@Component({
  selector: 'secureworks-del-friend-button',
  standalone: true,
  imports: [MatButtonModule],
  templateUrl: './del-friend-button.component.html',
  styleUrl: './del-friend-button.component.scss',
})
export class DelFriendButtonComponent implements ICellRendererAngularComp {
  private _cellValue: any;
  public deleteRow = output<string>();
  agInit(params: ICellRendererParams): void {
    this._cellValue = params;
  }
  refresh(params: ICellRendererParams): boolean {
    return true;
  }
  deleteFriend(event: Event): void {
    event.stopPropagation();
      this._cellValue.api.applyTransaction({
        remove: [this._cellValue.node.data]
      });
  }
}
