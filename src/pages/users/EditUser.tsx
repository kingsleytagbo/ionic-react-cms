import React, {useState, useEffect}  from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import {IonPage, IonHeader, IonTitle, IonContent, IonItemDivider,
  IonList, IonItem, IonLabel, 
  IonCard, IonCardHeader, IonToolbar, IonCardTitle, IonCardContent,
  IonInput, IonButton, IonText, IonIcon, IonRow, IonCol
} from '@ionic/react';
import PageFooter from '../../components/PageFooter';
import PageHeader from '../../components/PageHeader';
import  User  from '../../models/User';
import { updateUser } from '../../services/Http';

const EditUserPage: React.FC = () => {
  const history = useHistory();
  const location = useLocation();

  const [values, setValues] = useState(new User('',''));
  const [validation, setValidation] = useState({ user_nicename: false, user_pass: false });

  const handleInputChange = (e: any) => {
    const { name, value } = e.target
    let validuser_nicename = false;
    let validuser_pass = false;

    if (values.user_nicename && values.user_nicename.length > 0) {
      validuser_nicename = true;
    }
    else {
      validuser_nicename = false;
    }
    if (values.user_pass && values.user_pass.length > 0) {
      validuser_pass = true;
    }
    else {
      validuser_pass = false;
    }

    setValues({ ...values, [name]: value });
    setValidation({ ...validation, 'user_nicename': validuser_nicename, 'user_pass': validuser_pass });
    // console.log({ name: name, value: value, validation: validation });
  }

  const navigateLogin = () => {
    const path = '/users';
    const response = updateUser(values, true);
    response.then((result) => {
      // console.log({ "UpdateUser Result": result });
      history.push({
        pathname: path,
        state: { user: values }
      })
    })
      .catch((err) => console.log('UpdateUser Error:', err.message));
  }

  const navigateCancel = () => {
    const path = `/users`;
    history.push(path);
    //console.log({ 'register button clicked.': values });
  }

  useEffect(() => {
    const state:any = location.state;
    if(state && state.user){
    const user = state.user;
    setValues(user);
    }
 }, [location]);

  return (
    <IonPage>

      <PageHeader authenticated={false}  handleLogout={(null)} > </PageHeader>
      <IonContent fullscreen color="medium">

      <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="small" className="ion-text-center">React UI Dev Kit</IonTitle>
          </IonToolbar>
        </IonHeader>

        <IonItemDivider><IonLabel className="ion-text-center">Edit User</IonLabel></IonItemDivider>

          <IonList>
            <IonRow>
                <IonCol size-xs="12" class="padding page-content">
                  <div>
                    <IonList>
                      <IonItem>
                        <IonLabel position="stacked" color="primary">Username</IonLabel>
                        <IonInput required name="user_nicename" type="text"
                          autocapitalize="off"
                          placeholder="Enter your Username"
                          onIonChange={handleInputChange}
                          value={values.user_nicename}
                        >
                        </IonInput>
                      </IonItem>

                      <IonText color="danger">
                        <div className="ion-padding-start" style={{visibility: validation.user_nicename ? 'hidden' : 'visible' }}>
                          *Username is required
                    </div>
                      </IonText>

                      <IonItem>
                        <IonLabel position="stacked" color="primary">Password</IonLabel>
                        <IonInput required name="user_pass" type="password"
                          placeholder="Type your Password"
                          onIonChange={handleInputChange}
                          value={values.user_pass}
                        >
                        </IonInput>
                      </IonItem>

                        <IonText color="danger">
                          <div className="ion-padding-start"  style={{visibility: validation.user_pass ? 'hidden' : 'visible' }}>
                            *Password is required
                    </div>
                        </IonText>
            
                    </IonList>

                    <IonRow>
                      <IonCol>
                        <IonButton type="submit" expand="block" onClick={navigateLogin}
                        disabled={!validation.user_nicename || !validation.user_pass}>Save</IonButton>
                      </IonCol>
                      <IonCol>
                        <IonButton color="light" expand="block" onClick={navigateCancel}>Cancel</IonButton>
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


