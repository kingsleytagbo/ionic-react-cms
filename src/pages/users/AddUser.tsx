import React, {useState, useEffect}  from 'react';
import { useHistory } from 'react-router-dom';
import {IonPage, IonHeader, IonTitle, IonContent, IonItemDivider,
  IonList, IonItem, IonLabel, 
  IonCard, IonCardHeader, IonToolbar, IonCardTitle, IonCardContent,
  IonInput, IonButton, IonText, IonIcon, IonRow, IonCol
} from '@ionic/react';
import PageFooter from '../../components/PageFooter';
import PageHeader from '../../components/PageHeader';
import  User  from '../../models/User';
import { createUser } from '../../services/Http';

const AddUserPage: React.FC = () => {
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

  const navigateSave = () => {
    const path = '/users';
   const user ={ 
     user_login:values.username, user_pass:values.password, 
    user_nicename:values.username,user_email:values.username,
    display_name:values.username,
    user_status:1,user_registered:1,user_url:'',user_activation_key:'',spam:0,
    deleted:0,site_id:1};

    const response = createUser(user, true);
    response.then((result:any) => {
      console.log({ "CreateUser Result": result });
      history.push({
        pathname: path,
        state: { user: values }
      })
    })
      .catch((err:any) => console.log('CreateUser Error:', err.message));
      
  }

  const navigateCancel = () => {
    const path = `/users`;
    history.push(path);
    //console.log({ 'register button clicked.': values });
  }
  return (
    <IonPage>

      <PageHeader authenticated={false}  handleLogout={(null)} > </PageHeader>
      <IonContent fullscreen color="medium">

      <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large" className="ion-text-center">React UI Dev Kit</IonTitle>
          </IonToolbar>
        </IonHeader>

        <IonItemDivider><IonLabel className="ion-text-center">Add User</IonLabel></IonItemDivider>

          <IonList>
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
                        <IonButton type="submit" expand="block" color="secondary" size="small"
                        onClick={navigateSave}
                        disabled={!validation.username || !validation.password}>Save</IonButton>
                      </IonCol>
                      <IonCol>
                        <IonButton color="light" expand="block" size="small" onClick={navigateCancel}>Cancel</IonButton>
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

export default AddUserPage;


