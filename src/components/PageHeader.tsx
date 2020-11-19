import React, { useState, useContext }  from 'react';
import { useHistory } from 'react-router-dom';
import { IonHeader, IonTitle, IonToolbar, IonButtons, IonButton, IonIcon } from '@ionic/react';
import Toast from '../components/utilities/Toast';
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
    const logout = () => dispatch({ type: "LOGOUT" });
    const login = () => dispatch({ type: "LOGIN" });
    const [authenticated, setKey] = useState(false);
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

    const navigateLogin = () =>{ 
        const path = `login`; 
        history.push(path);
        //console.log({ 'login ...': authenticated });
    }

    const handleLogout = () => {
      //const authenticated = false;
      //setKey(authenticated);
      logout();
      navigateLogin();
    }

    
  return (
<IonHeader className="ion-text-center">
<IonToolbar>
    <IonTitle>
            <IonIcon name="beer-sharp"></IonIcon>
            React UI Dev Kit
    </IonTitle>
    <IonButtons slot="primary">
    
        {state.isAuth &&
                      <IonButton onClick={handleLogout}>
                          <IonIcon slot="start" name="lock-closed"></IonIcon>
                          <span>Logout </span>
                      </IonButton>
                  }
        {!state.isAuth &&
                      <IonButton onClick={navigateLogin}>
                          <IonIcon slot="start" name="log-out"></IonIcon>
                          <span>Login</span>
                      </IonButton>
        }
    </IonButtons>
</IonToolbar>
</IonHeader>
  );
};

export default PageHeader;
