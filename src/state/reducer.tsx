export interface IState {
    isAuth: boolean;
    user: string;
  }
  
  interface ILogout {
    type: "LOGOUT";
  }
  
  interface ILogin {
    type: "LOGIN";
  }
  
  export type Actions = ILogin | ILogout;
  
  export const initialState: IState = {
    isAuth: false,
    user: ''
  };
  
  export const reducer = (state: IState, action: Actions) => {
    switch (action.type) {
      case "LOGOUT":
        return { ...state, isAuth: false, user: "" };
      case "LOGIN":
        return { ...state, isAuth: true, user: "" };
    }
  };
  