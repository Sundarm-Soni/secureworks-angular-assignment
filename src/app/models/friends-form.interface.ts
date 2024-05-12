import { FormArray, FormControl, FormGroup } from "@angular/forms";

export interface IFriendsForm {
    name: FormControl<string | null>;
    age: FormControl<number | null>;
    weight: FormControl<number | null>;
  }

export interface IFriendsFormData {
  name: string | null;
  age: number | null;
  weight: number | null;
}

export interface IFriendsGroupData {
  friends: IFriendsFormData,
  groups?: IFriendsGroupData[]
}

export interface IFriendsGroupForm {
  friends: FormGroup<IFriendsForm>,
  groups?: FormArray
}

export interface IFriendsState {
  allfriends: IFriendsGroupData,
  loading: boolean,
  error: boolean
}

export interface IAgGridFriendsInterface extends IFriendsFormData{
  friend?: string;
}
