import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import {
  IonList, IonItem, IonLabel, 
  IonCard, IonCardHeader, IonCardTitle, IonCardContent,
  IonInput, IonButton, IonText, IonIcon, IonRow, IonCol
} from '@ionic/react';
import './HomeContainer.css';
import { login } from '../services/Http';

interface ContainerProps { }

const LoginLayout: React.FC<ContainerProps> = () => {
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
    const path = `home`;
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
    <div className="container">

      <IonRow class="ion-margin-top">
        <IonCol size-xs="1" size-sm="2" size-md="3"></IonCol>
        <IonCol size-xs="10" size-sm="8" size-md="6">

          <IonCard class="ion-margin-top">
            <IonCardHeader>
              <IonCardTitle>
                <IonRow>
                  <IonCol size-xs="12">
                    <h1 className="IonTextCapitalize IonTextCenter">
                      <IonIcon name="apps"></IonIcon>
                  Login
                </h1>
                  </IonCol>
                </IonRow>
              </IonCardTitle>
            </IonCardHeader>
            <IonCardContent>



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
                        disabled={!validation.username || !validation.password}>Login</IonButton>
                      </IonCol>
                      <IonCol>
                        <IonButton color="light" expand="block" onClick={navigateSignup}>Signup</IonButton>
                      </IonCol>
                    </IonRow>
                  </div>
                </IonCol>
              </IonRow>


            </IonCardContent>
          </IonCard>

        </IonCol>
        <IonCol size-xs="1" size-sm="2" size-md="3"></IonCol>
      </IonRow>


    </div>
  );
};

export default LoginLayout;
