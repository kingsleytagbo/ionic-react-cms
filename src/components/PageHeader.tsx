import React from 'react';
import { IonHeader, IonTitle, IonToolbar, IonButtons, IonButton, IonIcon } from '@ionic/react';

interface ContainerProps { authenticated:string }
type props = {
    authenticated: boolean;
    handleLogin: any;
    handleLogout: any;
  }
const PageHeader: React.FC<props> = ({ ...props }) => {
    let authenticated = props.authenticated;
    let handleLogin = props.handleLogin;
    let handleLogout = props.handleLogout;
  return (
<IonHeader className="ion-text-center">
<IonToolbar>
    <IonTitle>
            <IonIcon name="beer-sharp"></IonIcon>
           React LMS 
    </IonTitle>
    <IonButtons slot="primary">
        {authenticated &&
                      <IonButton onClick={handleLogout}>
                          <IonIcon slot="start" name="lock-closed"></IonIcon>
                          <span>Logout </span>
                      </IonButton>
                  }
        {!authenticated &&
        <IonButton onClick={handleLogin}>
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
