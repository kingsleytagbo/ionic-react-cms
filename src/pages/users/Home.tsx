import React, {useState, useEffect}  from 'react';
import { IonContent, IonPage, 
IonIcon, IonList, IonItemDivider, IonLabel, IonItem, IonCheckbox } from '@ionic/react';
import PageFooter from '../../components/PageFooter';
import PageHeader from '../../components/PageHeader';
import  User  from '../../models/User';
import { getUsers } from '../../services/Http';

const UsersHome: React.FC = () => {
  const [users, setUsers] = useState(Array<User>());
  const loadUsers = async () => {
    let users = await getUsers() || Array<User>();
    setUsers(users);
    console.log({ users });
  };

  useEffect(() => {
    console.log({ "useEffect": loadUsers })
    loadUsers();
  }, []);

  return (
    <IonPage>

      <PageHeader authenticated={false}  handleLogout={(null)} > </PageHeader>
      <IonContent fullscreen color="medium">

          <IonList>
            <IonItemDivider><IonLabel className="ion-text-center">User Admin</IonLabel></IonItemDivider>
            {users.map(({ user_nicename, user_pass }, i) => (
              <IonItem key={i}>
                <IonLabel>{user_nicename}</IonLabel>
                <IonCheckbox slot="start" value={user_pass} checked={false} />
              </IonItem>
            ))}
          </IonList>

      </IonContent>
      <PageFooter></PageFooter>
    </IonPage>
  );
};

export default UsersHome;


