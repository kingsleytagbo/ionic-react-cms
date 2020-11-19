import React from 'react';
import { IonToolbar, IonRow, IonCol, IonIcon, IonFooter } from '@ionic/react';

interface ContainerProps { }

const PageFooter: React.FC<ContainerProps> = () => {
  return (
      <IonFooter color="dark">
          <IonToolbar>
              <IonRow>
                  <IonCol className="ion-text-center">
                      <button>
                          <IonIcon icon="eye-off-outline"></IonIcon>
                          <div>React: UI Dev. Kit, Copyright, 2020</div>
                      </button>
    
                  </IonCol>
              </IonRow>
          </IonToolbar>
      </IonFooter>
  );
};

export default PageFooter;
