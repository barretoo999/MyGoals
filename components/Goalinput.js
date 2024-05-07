import{ useState} from "react"
import { View, TextInput, Button, StyleSheet} from "react-native"

function GoalInput({onAddGoal}){
    const[ enteredGoalText, setEnteredGoalText]= useState('')

    function handleInputGoal(enteredText){
    setEnteredGoalText(enteredText)
    }

    function addGoalHandler(){
    onAddGoal(enteredGoalText)
    setEnteredGoalText('')
    console.log('addGoalHandler')
    }

    return(

        <View style={ styleSheet.inputContainer}>
         <TextInput
            style={StyleSheet.textinput}
            placeholder="Your Goal"
            onChangeText={handleInputGoal}
            value={enteredGoalText}
            /> 
           <Button
                title="Add Goal"
                color={'#A3FFD6' }
                onPress={addGoalHandler}
            />   
        </View> 
    )
}

export default GoalInput

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        flexDirection:"row",
        justifyContent: "space-between",
        alignItems:"center",
        marginBottom:20,
        borderBottomWidth:1,
        borderBottomColor:"#7BC9FF"
        
    },
    TextInput:{
        borderWidth: 1,
        bordercolor:"#cccccc",
        Width:'80%',
        marginRight:3,
        padding:8,
        borderRadius:5

    },
})