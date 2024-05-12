import { Component, Input, OnInit } from '@angular/core';
import { AgGridAngular } from 'ag-grid-angular';
import { friendsColDefs } from '../../mocks/ag-grid';
import { ColDef, GridApi, GridReadyEvent } from 'ag-grid-community';
import { IAgGridFriendsInterface } from '../../models/friends-form.interface';

@Component({
  selector: 'secureworks-friends-table',
  standalone: true,
  imports: [AgGridAngular],
  templateUrl: './friends-table.component.html',
  styleUrl: './friends-table.component.scss'
})
export class FriendsTableComponent implements OnInit {
 @Input() public rowData!: IAgGridFriendsInterface[];
 public themeClass = "ag-theme-quartz";
 public colDefs!: ColDef[];
 private api!: GridApi;

  public ngOnInit(): void {
    this.colDefs = friendsColDefs;
  }

  public onGridReady(event: GridReadyEvent): void {
    event.api.sizeColumnsToFit();
  }
}
