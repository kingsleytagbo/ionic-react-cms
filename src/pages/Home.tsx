import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React  from 'react';
import HomeContainer from '../components/HomeContainer';
import PageFooter from '../components/PageFooter';
import PageHeader from '../components/PageHeader';
import './Home.css';

const Home: React.FC = () => {
  
  return (
    <IonPage>

      <PageHeader authenticated={false}  handleLogout={(null)} > </PageHeader>
      <IonContent fullscreen color="medium">

        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large" className="ion-text-center">React UI Dev Kit</IonTitle>
          </IonToolbar>
        </IonHeader>

        <HomeContainer />

      </IonContent>
      <PageFooter></PageFooter>
    </IonPage>
  );
};

export default Home;


