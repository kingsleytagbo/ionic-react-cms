import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React, { useState }  from 'react';
import LoginLayout from '../components/LoginLayout';
import PageFooter from '../components/PageFooter';
import PageHeader from '../components/PageHeader';
import './Home.css';


const Login: React.FC = () => {
  
  return (
    <IonPage>

      <PageHeader authenticated={false}  handleLogout={null} > </PageHeader>
      <IonContent fullscreen color="medium">
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large" className="ion-text-center">React CMS</IonTitle>
          </IonToolbar>
        </IonHeader>

        <LoginLayout />
      </IonContent>
      <PageFooter></PageFooter>
    </IonPage>
  );
};

export default Login;


