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
                          <IonIcon name="eye-off-outline"></IonIcon>
                          <div>React: UI Dev. Kit</div>
                      </button>

                      <button>
                          <IonIcon name="copy-outline"></IonIcon>
                          <div>Copyright, 2020</div>
                      </button>
    
                      <button>
                          <IonIcon name="time-outline"></IonIcon>
                          <div>Kingsley Tagbo</div>
                      </button>
                  </IonCol>
              </IonRow>
          </IonToolbar>
      </IonFooter>
  );
};

export default PageFooter;
