import {styleShesst, View, Text, Pressable} from "react-native"

function Goaltem({itemData, OnDeLeteItem, id}){

function deleteGoalHandler(){
    onDeleteItem(id)
    console.log('Delete Goal Handler')
}
    return(
        <Pressable onPress={deleteGoalHandler}>
            <View style={ styles.goalsItem}>
            <Text style={styles.goalText} >{ itemData.item} </Text> 
            </View>
        </Pressable>
    )
}

export default Goaltem


const styles= StyleSheet.create ({
    goalsItem:{
        margin:8,
        padding:8,
        borderRadius:6,
        backgroundColor: 'skyblue',
        Colors: 'white'
    },
    goalText:{
        color:'white'
    }
})