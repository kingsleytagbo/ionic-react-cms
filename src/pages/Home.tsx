import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import * as React from 'react';
import ExploreContainer from '../components/ExploreContainer';
import PageFooter from '../components/PageFooter';
import PageHeader from '../components/PageHeader';
import './Home.css';


const Home: React.FC = () => {
  return (
    <IonPage>
      <PageHeader authenticated={false}> </PageHeader>
      <IonContent fullscreen color="medium">
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">React CMS</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer />
      </IonContent>
      <PageFooter></PageFooter>
    </IonPage>
  );
};

export default Home;


