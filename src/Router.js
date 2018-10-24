import React from 'react';
import { Stack, Scene, Router, Actions } from 'react-native-router-flux';
import Login from './screens/Login';


const RouterComponent = () => {
  return (
    <Router>
      <Stack key="auth">
        <Scene key="login" initial component={Login} title="Login" />
      </Stack>
    </Router>
  );
}

export default RouterComponent;