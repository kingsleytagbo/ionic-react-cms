import React  from 'react';
import { IonCheckbox, IonList, IonItem, IonLabel, IonItemDivider, IonIcon } from '@ionic/react';
import './HomeContainer.css';

interface ContainerProps { }

const features = [
  { val: 'Components', isChecked: true ,color:'success' },
  { val: 'Authentication', isChecked: false ,color:'info' },
  { val: 'Data Access', isChecked: false ,color:'info' },
  { val: 'Filtering', isChecked: false ,color:'secondary' },
  { val: 'Searching', isChecked: false ,color:'secondary' },
  { val: 'Sorting', isChecked: false ,color:'dark' },
  { val: 'User Management', isChecked: false ,color:'dark' },
  { val: 'Roles & Permissions Management', isChecked: false ,color:'dark' },
];

const HomeContainer: React.FC<ContainerProps> = () => {

  return (
    <div className="container">
      <h1>Ionic + ReactJS LMS</h1>
      <h3><IonIcon icon="eye-off-outline"></IonIcon>DESKTOP + WEB + MOBILE APPS</h3>

      <IonList>
      <IonItemDivider><IonLabel className="ion-text-center">Features</IonLabel></IonItemDivider>
        {features.map(({ val, isChecked, color }, i) => (
          <IonItem key={i}>
            <IonLabel>{val}</IonLabel>
            <IonCheckbox slot="start" color={color} value={val} checked={isChecked} />
          </IonItem>
        ))}
      </IonList>

    </div>
  );
};

export default HomeContainer;
