import React, {useState, useEffect}  from 'react';
import { useHistory } from 'react-router-dom';
import {IonPage, IonContent, IonItemDivider,
  IonList, IonItem, IonLabel, 
  IonCard, IonCardHeader, IonCardTitle, IonCardContent,
  IonInput, IonButton, IonText, IonIcon, IonRow, IonCol
} from '@ionic/react';
import PageFooter from '../../components/PageFooter';
import PageHeader from '../../components/PageHeader';
import  User  from '../../models/User';
import { login, getUsers } from '../../services/Http';

const EditUserPage: React.FC = () => {
  const history = useHistory();
  const [values, setValues] = useState({ username: '', password: '' });
  const [validation, setValidation] = useState({ username: false, password: false });

  const handleInputChange = (e: any) => {
    const { name, value } = e.target
    let validUsername = false;
    let validPassword = false;

    if (values.username && values.username.length > 0) {
      validUsername = true;
    }
    else {
      validUsername = false;
    }
    if (values.password && values.password.length > 0) {
      validPassword = true;
    }
    else {
      validPassword = false;
    }

    setValues({ ...values, [name]: value });
    setValidation({ ...validation, 'username': validUsername, 'password': validPassword });
    // console.log({ name: name, value: value, validation: validation });
  }

  const navigateLogin = () => {
    const path = 'users';
    const response = login(values.username, values.password);
    response.then((result) => {
      if(result.authenticated){
        console.log({ "Login Result": result.auth_token });
        history.push(path);
      }
    })
    .catch((err) => console.log('Login Error:', err.message));
  }
  const navigateSignup = () => {
    //const path = `regisster`;
    //history.push(path);
    console.log({ 'register button clicked.': values });
  }

  return (
    <IonPage>

      <PageHeader authenticated={false}  handleLogout={(null)} > </PageHeader>
      <IonContent fullscreen color="medium">

          <IonList>
            <IonItemDivider><IonLabel className="ion-text-center">Edit User</IonLabel></IonItemDivider>
            <IonRow>
                <IonCol size-xs="12" class="padding page-content">
                  <div>
                    <IonList>
                      <IonItem>
                        <IonLabel position="stacked" color="primary">Username</IonLabel>
                        <IonInput required name="username" type="text"
                          autocapitalize="off"
                          placeholder="*username is required"
                          onIonChange={handleInputChange}
                          value={values.username}
                        >
                        </IonInput>
                      </IonItem>

                      <IonText color="danger">
                        <div className="ion-padding-start" style={{visibility: validation.username ? 'hidden' : 'visible' }}>
                          Username is required
                    </div>
                      </IonText>

                      <IonItem>
                        <IonLabel position="stacked" color="primary">Password</IonLabel>
                        <IonInput required name="password" type="password"
                          placeholder="*password is required"
                          onIonChange={handleInputChange}
                          value={values.password}
                        >
                        </IonInput>
                      </IonItem>

                        <IonText color="danger">
                          <div className="ion-padding-start"  style={{visibility: validation.password ? 'hidden' : 'visible' }}>
                            Password is required
                    </div>
                        </IonText>
            
                    </IonList>

                    <IonRow>
                      <IonCol>
                        <IonButton type="submit" expand="block" onClick={navigateLogin}
                        disabled={!validation.username || !validation.password}>Save</IonButton>
                      </IonCol>
                      <IonCol>
                        <IonButton color="light" expand="block" onClick={navigateSignup}>Cancel</IonButton>
                      </IonCol>
                    </IonRow>
                  </div>
                </IonCol>
              </IonRow>
          </IonList>

      </IonContent>
      <PageFooter></PageFooter>
    </IonPage>
  );
};

export default EditUserPage;


