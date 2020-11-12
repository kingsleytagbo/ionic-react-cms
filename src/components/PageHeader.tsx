import React, { useState }  from 'react';
import { useHistory } from 'react-router-dom';
import { IonHeader, IonTitle, IonToolbar, IonButtons, IonButton, IonIcon } from '@ionic/react';
import Toast from '../components/utilities/Toast';

interface ContainerProps { authenticated:string }
type props = {
    authenticated: boolean;
    handleLogout: any;
  }
const PageHeader: React.FC<props> = ({ ...props }) => {
    // const authenticated = props.authenticated;
    // const handleLogout = props.handleLogout;
    const [authenticated, setKey] = useState(false);
    /*
    const handleLogin = (authenticated:boolean) => {
      authenticated = true;
      setKey(authenticated);
      // showToast(true);
      console.log({'login ...' : authenticated });
    }
    */
    const handleLogout = () => {
      const authenticated = false;
      setKey(authenticated);
      console.log({'logout ...' : authenticated });
    }
  
    const [openToast, showToast] = useState(false);

    const history = useHistory();
    const navigateLogin = () =>{ 
        const path = `login`; 
        history.push(path);
        console.log({ 'login ...': authenticated });
    }
    
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
