import { FlatList, SafeAreaView, StatusBar , Text, TextInput, View} from "react-native";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Dispatcher, TodosType } from "../../globalstate/store/TodoStore";
import {  Toggle_Item } from "../../globalstate/slice/TodoSlice";
import CheckBox from "@react-native-community/checkbox";
import { useNavigation } from "@react-navigation/native";
import { FloatingAction } from "react-native-floating-action";
import { RouteConstants } from "../../route/RouteConstants";
import style from "./style";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { StackRouteParams } from "../../route/RouteConstants";

type TodoScreenParam = NativeStackNavigationProp<StackRouteParams, 'TodoScreen'>
const TodoScreen = (): React.JSX.Element => {
       const items = useSelector((state: TodosType) => state.items)
       const navigation = useNavigation<TodoScreenParam>()
       const dispatcher = useDispatch<Dispatcher>()
       return <SafeAreaView style={style.container}>
       <View style={style.container}>
       <StatusBar/>
       <FlatList 
  data={items} 
  renderItem={({ item }) => (
       <View style={style.FlatListItemContainer}>
        <CheckBox style={style.CheckBoxStyle} value={item.completed} animationDuration={0.1} onValueChange={() => dispatcher(Toggle_Item(item.id))}></CheckBox>
         <Text style={style.TaskText} onPress={() => navigation.navigate(RouteConstants.addOrUpdateTasks, {id: item.id , text: item.text, completed: item.completed})}>{item.text}</Text>
       </View> 
       )} />
       <FloatingAction
                position="right"
                onPressMain={() => navigation.navigate(RouteConstants.addOrUpdateTasks)}
                showBackground={false}
                floatingIcon={require('../../assets/images/plus.png')}
            />
       </View>       
       </SafeAreaView>
}

export default TodoScreen