import { ColDef } from 'ag-grid-community';
import { DelFriendButtonComponent } from '../components/del-friend-button/del-friend-button.component';

// Column Definitions: Defines the columns to be displayed.
export const friendsColDefs: ColDef[] = [
  { field: "name"},
  { field: "age" },
  { field: "weight" },
  { field: "friend" },
  {
    field: "actions",
    headerName: "Actions",
    cellRenderer: DelFriendButtonComponent,
  },
];
