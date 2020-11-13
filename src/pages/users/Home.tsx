import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import {
  IonContent, IonPage, IonHeader, IonToolbar, IonTitle, IonRow, IonCol, IonButton,
  IonIcon, IonList, IonItemDivider, IonLabel, IonItem, IonCheckbox
} from '@ionic/react';
import PageFooter from '../../components/PageFooter';
import PageHeader from '../../components/PageHeader';
import User from '../../models/User';
import { getUsers } from '../../services/Http';

const UsersHome: React.FC = () => {
  const history = useHistory();
  const [users, setUsers] = useState(Array<User>());
  const loadUsers = async () => {
    const users = await getUsers() || Array<User>();
    setUsers(users);
    console.log({ users });
  };

  useEffect(() => {
    console.log({ "useEffect": loadUsers })
    loadUsers();
  }, [history.location.state]);

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    const user = JSON.parse(value);
    history.push({
      pathname: '/users/edituser',
      state: { user: user }
    })
    console.log({ name: name, value: user });
  }

  const navigateAddUser = () => {
    const path = '/users/adduser';
    history.push({
      pathname: path,
      state: { user: {} }
    });
  }

  return (
    <IonPage>

      <PageHeader authenticated={false} handleLogout={(null)} > </PageHeader>
      <IonContent fullscreen color="light">

        <IonHeader >
          <IonToolbar>
            <IonTitle className="ion-text-center">User Admin</IonTitle>
          </IonToolbar>
        </IonHeader>

        <IonList>
          <IonRow>
            <IonCol size="12">
              <IonButton expand="block" color="secondary" onClick={navigateAddUser}>Add User</IonButton>
            </IonCol>
          </IonRow>

          {users.map((user: User, i) => (
            <IonItem key={i}>
              <IonLabel>id:{user.id} / {user.user_nicename}</IonLabel>
              <IonCheckbox slot="start" value={JSON.stringify(user)} checked={false}
                onIonChange={handleInputChange} />
            </IonItem>
          ))}
        </IonList>

      </IonContent>
      <PageFooter></PageFooter>
    </IonPage>
  );
};

export default UsersHome;


