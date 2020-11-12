import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React, { useState }  from 'react';
import HomeContainer from '../components/HomeContainer';
import PageFooter from '../components/PageFooter';
import PageHeader from '../components/PageHeader';
import './Home.css';

const Home: React.FC = () => {
  const [authenticated, setKey] = useState(false);
  
  return (
    <IonPage>

      <PageHeader authenticated={authenticated}  handleLogout={(null)} > </PageHeader>
      <IonContent fullscreen color="medium">

        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large" className="ion-text-center">React CMS</IonTitle>
          </IonToolbar>
        </IonHeader>

        <HomeContainer />

      </IonContent>
      <PageFooter></PageFooter>
    </IonPage>
  );
};

export default Home;


