import { LoadingState } from "./loading/LoadingState";
import { LoginState } from "./login/LoginState";

export interface AppState{
  register: any;
  loading: LoadingState;
  login: LoginState;
}
