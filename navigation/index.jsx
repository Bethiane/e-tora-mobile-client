import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import  SignUpScreen  from '../screens/Auth/SignUpScreen';
import  SignInScreen  from '../screens/Auth/SignInScreen';
import SplashScreen from '../screens/SplashScreen';
import ViewCandidates from '../screens/Candidates/ViewCandidates';

const Stack = createNativeStackNavigator();

export default function Navigation() {
    return (
        <NavigationContainer>
          <Stack.Navigator initialRouteName="SignIn">
            <Stack.Screen name="Splash" component={SplashScreen} options={{headerShown: false}}/>
            <Stack.Screen name="SignUp" component={SignUpScreen} options={{headerShown: false}}/>
            <Stack.Screen name="SignIn" component={SignInScreen} options={{headerShown: false}}/>
            <Stack.Screen name="ViewCandidates" component={ViewCandidates} options={{headerShown: false}}/>
          </Stack.Navigator>
        </NavigationContainer>
  
    );
  }