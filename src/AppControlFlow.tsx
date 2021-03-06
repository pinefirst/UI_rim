import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Text} from 'react-native';
import AppNavigator from './AppNavigator'

import Toast from './components/Toast';
import {toastRef} from './util/action';

const AppControlFlow : React.FC = ()  =>{
    return(
      <>
          <NavigationContainer>
              <AppNavigator/>
              <Toast {...{ref : toastRef}} />
          </NavigationContainer>
      </>
    );
};

export default AppControlFlow;
