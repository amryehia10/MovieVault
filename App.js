import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import BottomTaps from './navigation/BottomTaps';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Provider } from 'react-redux';
import store from './Redux/store/store'
import StackNavigation from './navigation/StackNavigation';

const queryClient = new QueryClient();

export default function App() {
  return (
    <>
      <Provider store={store}>
          <NavigationContainer>
            <QueryClientProvider client={queryClient}>
              <StackNavigation>
                  {/* <StatusBar hidden={false}></StatusBar> */}
              </StackNavigation>
            </QueryClientProvider>
          </NavigationContainer>
      </Provider>
    </>
  );
}