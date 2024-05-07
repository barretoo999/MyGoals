import { useState } from "react";
import { StyleSheet, View, FlatList } from "react-native";
import GoalItem from "./components/Goaltem";
import GoalInput from "./components/Goalinput";

export default function App() {
  const [goals, setGoals]= useState([])

  function handleAddGoal(enteredGoalText) {
    setGoals(() => [...goals,
                    {text: enteredGoalText,
                      key: Math.random(). toString}])
    console.log(goals)
  }

  function handleDeleteGoal(){
    console.log('DELETE')
  }

  return (
    <View style={styles.container}>

      <GoalInput
        onAddGoal={handleAddGoal}
      />
     
    <View style={styles.goalsContainer}>
      <FlatList
        data={goals}
        renderItem={ (itemData) => {
          return(
            <GoalItem
              itemData={itemData}
              OnDeLeteItem={handleDeleteGoal}
            />
          )
        }}
        keyExtractor={(item) => {
          return item.id
        }}
      />
    </View>
  </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop:50,
    paddingHorizontal:20,
  },

    goalsContainer:{
      flex:5
  },
});