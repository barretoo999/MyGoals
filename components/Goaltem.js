import {styleShesst, View, Text, Pressable} from "react-native"

function GoalItem({itemData, OnDeLeteItem}){
    return(
        <Pressable>
            <View style={ styles.goalsItem}>
            <Text style={styles.goalText} >{ itemData.item} </Text> 
            </View>
        </Pressable>
    )
}

export default GoalItem


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