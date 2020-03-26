import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';


 const AppStack = createStackNavigator();

 export default function Routes(){
     return(
         <NavigationContainer>
             <AppStack.Navigator>
                 <AppStack.Screen component={} />
             </AppStack.Navigator>
         </NavigationContainer>
     )

 };