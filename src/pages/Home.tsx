import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React, { useState }  from 'react';
import HomeContainer from '../components/HomeContainer';
import PageFooter from '../components/PageFooter';
import PageHeader from '../components/PageHeader';
import './Home.css';
import Toast from '../components/utilities/Toast';

const Home: React.FC = () => {
  const [authenticated, setKey] = useState(false);
  const handleLogin = (authenticated:boolean) => {
    authenticated = true;
    setKey(authenticated);
    showToast(true);
    console.log({'login ...' : authenticated });
  }
  const handleLogout = (authenticated:boolean) => {
    authenticated = false;
    setKey(authenticated);
    console.log({'logout ...' : authenticated });
  }

  const [openToast, showToast] = useState(false);
  
  return (
    <IonPage>

      <PageHeader authenticated={authenticated}  handleLogout={handleLogout} handleLogin={handleLogin}> </PageHeader>
      <IonContent fullscreen color="medium">
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large" className="ion-text-center">React CMS</IonTitle>
          </IonToolbar>
        </IonHeader>

        <Toast
        isOpen={openToast}
        position = 'top'
        onDidDismiss={() => showToast(false)}
        message="Login is not implemented."
        duration={6000}
      />
        <HomeContainer />
      </IonContent>
      <PageFooter></PageFooter>
    </IonPage>
  );
};

export default Home;


