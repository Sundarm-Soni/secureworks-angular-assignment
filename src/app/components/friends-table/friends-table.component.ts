import { Component, OnInit, input } from '@angular/core';
import { AgGridAngular } from 'ag-grid-angular';
import { friendsColDefs } from '../../mocks/ag-grid';
import { ColDef, GridReadyEvent } from 'ag-grid-community';
import { IAgGridFriendsInterface } from '../../models/friends-form.interface';
import { GridOptions } from '@ag-grid-community/core';

@Component({
  selector: 'secureworks-friends-table',
  standalone: true,
  imports: [AgGridAngular],
  templateUrl: './friends-table.component.html',
  styleUrl: './friends-table.component.scss',
})
export class FriendsTableComponent implements OnInit {
  public rowData = input<IAgGridFriendsInterface[]>();
  public themeClass = 'ag-theme-quartz';
  public colDefs!: ColDef[];
  public myGridOptions: any;
  public friendId!: string;

  constructor() {
    this.myGridOptions = {
      context: {
        componentParent: this,
      },
    };
  }

  public deleteFriend(id:any) {
    console.log(id)
  }

  public ngOnInit(): void {
    this.colDefs = friendsColDefs;
  }

  public onGridReady(event: GridReadyEvent): void {
    event.api.sizeColumnsToFit();
  }
}
