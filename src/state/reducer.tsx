export interface IState {
    isAuth: boolean;
    user: string;
  }
  
  interface ILogout {
    type: "LOGOUT";
    payload: any;
  }
  
  interface ILogin {
    type: "LOGIN";
    payload: any;
  }
  
  export type Actions = ILogin | ILogout;
  
  export const initialState: IState = {
    isAuth: false,
    user: ''
  };
  
  export const reducer = (state: IState, action: Actions) => {
    console.log({state:state, action: action})
    switch (action.type) {
      case "LOGOUT":
        return { ...state, isAuth: false, user: action.payload };
      case "LOGIN":
        return { ...state, isAuth: true, user: action.payload };
    }
  };
  