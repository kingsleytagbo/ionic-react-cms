import User from '../models/User';
const API_URL = 'https://nodejsappapi.herokuapp.com';

export const login = (username: string, password: string, useApi: boolean = true) => {
  if (useApi) {
    if ((username && username !== '') && (password && password !== '')) {
      const body = {
        "login": {
          "username": username,
          "password": password
        }
      };
      return post('/login', body);
    }
    else {
      return mockFailure({ error: 500, message: 'Login Api - Failure' });
    }
  }
  else {
    return mockFailure({ error: 500, message: 'Login - Failure' });
  }
};

export const getUsers = (useApi: boolean = true) => {
  // console.log({'Login': {email: email, password:password, useApi: useApi}});
  if (useApi) {
    const body = {};
    return post('/users/getUsers', body);
  }
  else {
    return null;
  }
};

export const createUser = (email:string, password:string, useApi:boolean = true) => {
    // console.log({'Login': {email: email, password:password, useApi: useApi}});
    if (useApi) {
      if ((email && email !== '') && (password && password !== '')) {
        const body = {
          "user": {
            user_login:email, user_pass:password, user_nicename:password,user_email:email,display_name:email,
              user_status:1,user_registered:1,user_url:'',user_activation_key:'',spam:0,
              deleted:0,site_id:1
          }
        };
        return post('/users/createUser', body);
        //return mockSuccess({ auth_token: 'Login Api - Success!' });
      }
      else {
        return mockFailure({ error: 500, message: 'Login Api - Failure' });
      }
    }
    else{
      return mockFailure({ error: 500, message: 'Login - Failure' });
    }
  };

export const updateUser = (user: User, useApi: boolean = true) => {
  console.log({'updateUser': user, useApi: useApi});
  if (useApi) {
    const body = {
      "user": {
        user
      }
    };
    return post('/users/updateUser', body);
  }
  else {
    return mockFailure({ error: 500, message: 'updateUser - Failure' });
  }
};


const getAuthenticationToken = () => 'successful_fake_token';
export const getAuthenticatedUsers = (shouldSucceed = true) => {
  const token = getAuthenticationToken();

  if (!shouldSucceed) {
    return mockFailure({ error: 401, message: 'Invalid Request' });
  }

  return mockSuccess({
    users: [
      {
        email: 'test@test.ca',
      },
      {
        email: 'test2@test.ca',
      },
    ],
  });
};


export const post = async (destination:string, body:any) => {
  const headers = {
    Accept: 'application/json',
    'Content-Type': 'application/json; charset=utf-8',
  };
  const result = await fetch(`${API_URL}${destination}`, {
    method: 'POST',
    headers: headers,
    body: JSON.stringify(body),
  });

  // console.log({result:result, body: result.body});

  if (result.ok) {
    const response = result.json();
    return response;
  }
  throw new Error(result.statusText);
};



const mockSuccess = (value:any) => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(value), 2000);
  });
};

const mockFailure = (value:any) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => reject(value), 2000);
  });
};