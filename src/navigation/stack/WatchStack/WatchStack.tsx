import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { WatchStackParamList } from './types';

import { AppHeader } from '~/components';
import {
  VideoPlayerScreen,
  WatchDashboardScreen,
  WatchMovieDetailScreen,
  WatchReserveSeatScreen,
  WatchSearchScreen,
  WatchSelectDateTimeScreen
} from '~/screens/Watch';

const Stack = createNativeStackNavigator<WatchStackParamList>();
export const WatchStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name='WatchDashboardScreen' component={WatchDashboardScreen} />
      <Stack.Screen
        name='WatchSearchScreen'
        component={WatchSearchScreen}
        options={{
          headerShown: false
        }}
      />
      <Stack.Screen
        name='WatchMovieDetailScreen'
        component={WatchMovieDetailScreen}
        options={{
          headerShown: false,
          header: ({ navigation }) => <AppHeader title='Watch' hideSearchButton navigation={navigation as any} />
        }}
      />
      <Stack.Screen
        name='VideoPlayerScreen'
        component={VideoPlayerScreen}
        options={{
          headerShown: false,
          presentation: 'fullScreenModal',
          gestureEnabled: false
        }}
      />
      <Stack.Screen
        name='WatchSelectDateTimeScreen'
        component={WatchSelectDateTimeScreen}
        options={{
          headerShown: false
        }}
      />
      <Stack.Screen
        name='WatchReserveSeatScreen'
        component={WatchReserveSeatScreen}
        options={{
          headerShown: false
        }}
      />
    </Stack.Navigator>
  );
};
