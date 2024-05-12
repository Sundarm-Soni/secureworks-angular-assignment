import { FormArray, FormControl, FormGroup } from "@angular/forms";

export interface IFriendsForm {
    name: FormControl<string | null>;
    age: FormControl<string | null>;
    weight: FormControl<string | null>;
  }

export interface IFriendsFormData {
  name: string;
  age: string;
  weight: string;
}

export interface IFriendsGroupData {
  friends: IFriendsFormData,
  groups?: IFriendsGroupData[]
}

export interface IFriendsGroupForm {
  friends: FormGroup<IFriendsForm>,
  groups?: any
}

export interface IFriendsState {
  allfriends: IFriendsGroupData[],
  loading: boolean,
  error: boolean
}
