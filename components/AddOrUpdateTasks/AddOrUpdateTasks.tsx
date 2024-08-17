import { SafeAreaView, StatusBar, TextInput, Text, Button, View, Alert } from "react-native";
import style from "./style";
import React, { useState} from "react";
import { Add_Item, Delete_Item, Update_Item } from "../../globalstate/slice/TodoSlice";
import { Dispatcher, TodosType } from "../../globalstate/store/TodoStore";
import CheckBox from "@react-native-community/checkbox";
import { useDispatch, useSelector } from "react-redux";
import 'react-native-get-random-values'
import { nanoid } from "nanoid";
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { StackRouteParams } from "../../route/RouteConstants";

type AddScreenParam = NativeStackNavigationProp<StackRouteParams, 'AddOrUpdateTask'>
type AddScreenRouteParam = RouteProp<StackRouteParams, 'AddOrUpdateTask'>

const AddOrUpdateTasks = (): React.JSX.Element => {
    const route = useRoute<AddScreenRouteParam>()
    const navigation = useNavigation<AddScreenParam>()
    const items = useSelector((state: TodosType) => state.items)
    const dispatcher = useDispatch<Dispatcher>()
    const [task, setTask] = useState(route?.params?.text ? route.params.text : "")
    const [completed, setCompleted] = useState(route?.params?.completed ? route.params.completed : false)
    // TODO: Uncomment with talk expert react native guy
    //navigation.setOptions({title: route?.params?.id?"Update Task" : "Add Task"})
return <SafeAreaView style={style.container}>
   <StatusBar></StatusBar>
    <View>
        <TextInput
        multiline = {true}
         style={style.textInput} 
         placeholder="Enter Task Details"
         onChangeText={(value) => setTask(value)}>
            {task}
        </TextInput>
        <View style={style.CheckBoxContainer}>
            <Text>Done </Text>
            <CheckBox value={completed} animationDuration={0.1} onValueChange={() => setCompleted(!completed)}></CheckBox>
        </View>
        <View style={style.BtnMargins}>
      <Button title={route?.params?.id? "Update" : "Save"} onPress={() => {
            if(task.trim() === "") {
                Alert.alert("Please Enter task")
                return
            }
            if(route?.params?.id) {
                dispatcher(Update_Item({id: route.params.id, text: task, completed: completed }))
            } else {
                dispatcher(Add_Item({id: nanoid(10), text: task, completed: completed}))
            }
            navigation.goBack()
        }}></Button>
         </View>
        {route?.params?.id? <View style={[style.BtnMargins, style.DeleteBtn]}><Button title="Delete" onPress={() => {
           dispatcher(Delete_Item(route?.params?.id? route.params.id : ""))
           navigation.goBack()
        }}>

        </Button></View> : null}
    </View>
</SafeAreaView>
}

export default AddOrUpdateTasks