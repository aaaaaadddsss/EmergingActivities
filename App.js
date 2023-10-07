import React, { useState } from "react";
import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  FlatList,
  Modal,
  Pressable,
} from "react-native";
import GoalInput from "./Components/GoalInput";
import GoalItem from "./Components/GoalItem";
import TitleText from "./components/TitleText";

export default function App() {
  const [modalVisible, setModalVisible] = useState(false);
  const [courseGoals, setCourseGoals] = useState([]);
  const image = {
    uri: "https://images.pexels.com/photos/5214413/pexels-photo-5214413.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  };

  function addGoalHandler(enteredGoalText) {
    const updatedCourseGoals = [
      ...courseGoals,
      { text: enteredGoalText, key: Math.random().toString() },
    ];
    setCourseGoals(updatedCourseGoals);

    if (updatedCourseGoals.length >= 5) {
      setModalVisible(true);
    }
  }

  function deleteGoalHandler(goalKey) {
    const updatedGoals = courseGoals.filter((goal) => goal.key !== goalKey);
    setCourseGoals(updatedGoals);
  }

  function closeModal() {
    setModalVisible(false);
  }

  return (
    <View style={styles.appContainer}>
      <ImageBackground source={image} style={styles.image}>
        <GoalInput onAddGoal={addGoalHandler} goalCount={courseGoals.length} />
        <View style={styles.goalsContainer}>
          <TitleText text={"MY COMPONENT GOALS"} />
          <Modal
            animationType="fade"
            transparent={true}
            visible={modalVisible}
            onRequestClose={closeModal}
          >
            <ImageBackground source={image} style={styles.image}>
              <View style={styles.modalContainer}>
                <View style={styles.goalListContainer}>
                  <Pressable style={[styles.button]} onPress={closeModal}>
                    <Text style={styles.textStyle}>HIDE LIST</Text>
                  </Pressable>
                  <FlatList
                    data={courseGoals}
                    style={styles.goalList}
                    renderItem={(itemData) => (
                      <GoalItem
                        text={itemData.item.text}
                        onDelete={() => deleteGoalHandler(itemData.item.key)}
                      />
                    )}
                  />
                </View>
              </View>
            </ImageBackground>
          </Modal>
          <Pressable
            style={[styles.button]}
            onPress={() => setModalVisible(true)}
          >
            <Text style={styles.textStyle}>SHOW LIST</Text>
          </Pressable>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
  },
  goalsContainer: {
    flex: 5,
    marginHorizontal: 16,
    paddingHorizontal: 10,
    paddingBottom: 10,
    alignItems: "center",
  },
  goalListContainer: {
    flex: 5,
    borderWidth: 2,
    alignItems: "center",
    padding: 20,
  },
  goalList: {
    marginTop: 10,
    alignSelf: "stretch",
    borderWidth: 2,
  },
  image: {
    flex: 1,
    resizeMode: "contain",
  },
  modalContainer: {
    flex: 1,
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
  },
  button: {
    height: 30,
    width: 100,
    backgroundColor: "#CE0E2D",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
  },
});
