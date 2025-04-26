// App.js
import React from 'react';
import { Name } from './redux/Name';
import { Email } from './redux/email';
import { Age } from './redux/age';
import { store } from './redux/store';
import { Provider, useSelector } from 'react-redux';


const Form = () => {
  const userDetails = useSelector((state) => state.userDetails);

  return (
    <div>
      <Name /><br /><br />
      <Email /><br /><br />
      <Age /><br /><br />

    
      <h3>Summary</h3>
      <p>Name: {userDetails.name}</p>
      <p>Email: {userDetails.email}</p>
      <p>Age: {userDetails.age}</p>
    </div>
  );
};

const App = () => {
  return (
    <Provider store={store}>
      <Form />
    </Provider>
  );
};

export default App;
