export const PROFILE_UPDATE = 'PROFILE_UPDATE';

export interface Profile {
  username : string
  recipes :  IRecipes[]
  calories : number
  protein : number
}

export interface IRecipes {
  title : string
  protein : number
  calories : number
}

export type ProfileState = null | Profile;

interface UpdateAction {
  type: typeof PROFILE_UPDATE;
  payload: Profile;
}

export type ProfileActionTypes = UpdateAction;
