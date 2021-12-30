export interface ErrorMessage {
  message: string;
  field?: string;
}

export interface IUser {
  id?: string;
  email?: string;
  name?: string;
  password?: string;
  newPassword?: string;
}
