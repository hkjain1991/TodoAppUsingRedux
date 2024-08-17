import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { RouteConstants } from './RouteConstants';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TodoScreen from '../components/TodoScreen/TodoScreen';
import AddOrUpdateTasks from '../components/AddOrUpdateTasks/AddOrUpdateTasks';

const Stack = createNativeStackNavigator()
const Route = () => {
    return  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name={RouteConstants.TodoTasks} component={TodoScreen} options={{title: "Task List"}}></Stack.Screen>
      <Stack.Screen name={RouteConstants.addOrUpdateTasks} component={AddOrUpdateTasks} options={{title: "Task"}}></Stack.Screen>
    </Stack.Navigator>
  </NavigationContainer>
}

export default Route