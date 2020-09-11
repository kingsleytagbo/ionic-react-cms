import React from 'react';
import { IonHeader, IonTitle, IonToolbar, IonButtons, IonButton, IonIcon } from '@ionic/react';
import './ExploreContainer.css';

interface ContainerProps { authenticated:string }
type props = {
    authenticated: boolean;
  }
const PageHeader: React.FC<props> = ({ ...props }) => {
    const authenticated = props.authenticated;
  return (
<IonHeader>
<IonToolbar>
    <IonTitle>
            <IonIcon name="beer-sharp"></IonIcon>
           React LMS 
    </IonTitle>
    <IonButtons slot="primary">
        {authenticated &&
                      <IonButton>
                          <IonIcon slot="start" name="lock-closed"></IonIcon>
                          <span>Logout </span>
                      </IonButton>
                  }
        {!    authenticated &&
        <IonButton>
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
