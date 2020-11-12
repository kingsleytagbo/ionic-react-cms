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

    const handleLogout = () => {
      const authenticated = false;
      setKey(authenticated);
      console.log({'logout ...' : authenticated });
    }
  

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
            React UI Dev Kit
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
