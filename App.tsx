import React, {useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen';
import AppNavigator from './src/navigation/AppNavigator';

const App = () => {
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      SplashScreen.hide();
    }, 1000);

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <>
      <AppNavigator />
    </>
  );
};

export default App;
