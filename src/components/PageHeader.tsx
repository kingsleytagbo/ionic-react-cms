import React, {  useContext }  from 'react';
import { useHistory } from 'react-router-dom';
import { IonHeader, IonTitle, IonToolbar, IonButtons, IonButton, IonIcon } from '@ionic/react';
//import Toast from '../components/utilities/Toast';
import { store } from '../state/store';

interface ContainerProps { authenticated:string }
type props = {
    authenticated: boolean;
    handleLogout: any;
  }
const PageHeader: React.FC<props> = ({ ...props }) => {
    const history = useHistory();
    const globalState = useContext(store);
    const { state, dispatch } = globalState;
    // console.log({state: state});
    const logout = (user:any) => dispatch({ type: "LOGOUT", payload: user });
    // const login = (user:any) => dispatch({ type: "LOGIN", payload: user });
    ///const [authenticated, setKey] = useState(false);
    
    /*
    const [openToast, showToast] = useState(false);
    const createToast = (message:string) => {
        return (
            <Toast
                isOpen={openToast}
                position='top'
                onDidDismiss={() => showToast(false)}
                message={message}
                duration={6000}
            />);
    }
    */

    const navigateLogin = () =>{ 
        const path = `login`; 
        history.push(path);
        //console.log({ 'login ...': authenticated });
    }

    const handleLogout = () => {
      //const authenticated = false;
      //setKey(authenticated);
      logout(null); //replace with the current user from storage
      navigateLogin();
    }

    
  return (
<IonHeader className="ion-text-center">
<IonToolbar>
    <IonTitle>
            <IonIcon icon="beer-sharp"></IonIcon>
            React UI Dev Kit
    </IonTitle>
    <IonButtons slot="primary">
    
        {state.isAuth &&
                      <IonButton onClick={handleLogout}>
                          <IonIcon slot="start" icon="lock-closed"></IonIcon>
                          <span>Logout </span>
                      </IonButton>
                  }
        {!state.isAuth &&
                      <IonButton onClick={navigateLogin}>
                          <IonIcon slot="start" icon="log-out"></IonIcon>
                          <span>Login</span>
                      </IonButton>
        }
    </IonButtons>
</IonToolbar>
</IonHeader>
  );
};

export default PageHeader;
