import React, { useState } from "react";
import {
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  Text,
  Modal,
  Pressable,
} from "react-native";
import PersonIcon from "@mui/icons-material/Person";

function GoalInput(props) {
  const [enteredGoalText, setEnteredGoalText] = useState("");
  const [iconModalVisible, setIconModalVisible] = useState(false);
  const [tooMuchInputModalVisible, setTooMuchInputModalVisible] =
    useState(false);

  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText);
  }

  function addGoalHandler() {
    if (props.goalCount >= 5) {
      setTooMuchInputModalVisible(true); // Display the "Too much input" modal when there are 5 or more inputs.
    } else {
      props.onAddGoal(enteredGoalText);
      setEnteredGoalText("");
    }
  }

  function welcomeUser() {
    setIconModalVisible(true);
  }

  function closeModal() {
    setIconModalVisible(false);
    setTooMuchInputModalVisible(false);
  }

  return (
    <View style={styles.inputContainer}>
      <TouchableOpacity onPress={welcomeUser}>
        <PersonIcon style={styles.icon}> </PersonIcon>
      </TouchableOpacity>
      <TextInput
        placeholder="Your Course Goal."
        style={styles.textInput}
        onChangeText={goalInputHandler}
        value={enteredGoalText}
      />
      <TouchableOpacity onPress={addGoalHandler} style={styles.addButton}>
        <Text style={styles.textStyle}>Add Goal</Text>
      </TouchableOpacity>
      <Modal
        animationType="fade"
        transparent={true}
        visible={iconModalVisible}
        onRequestClose={closeModal}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalText}>Welcome to the app!</Text>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={closeModal}
            >
              <Text style={styles.textStyle}>Close</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <Modal
        animationType="fade"
        transparent={true}
        visible={tooMuchInputModalVisible}
        onRequestClose={closeModal}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalText}>Too much input!</Text>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={closeModal}
            >
              <Text style={styles.textStyle}>Close</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    height: 100,
    marginTop: 30,
    marginHorizontal: 16,
    marginBottom: 20,
    borderBottomWidth: 3,
    borderColor: "#005CB9",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  textInput: {
    borderWidth: 2,
    borderRadius: 5,
    borderColor: "#CE0E2D",
    color: "black",
    backgroundColor: "white",
    width: "85%",
    height: "35%",
    marginRight: 8,
    padding: 13,
  },
  icon: {
    width: 50,
    height: 50,
    color: "white",
  },
  addButton: {
    padding: 10,
  },
  textStyle: {
    fontSize: 15,
    color: "white",
    backgroundColor: "#CE0E2D",
    borderRadius: 5,
    padding: 5,
    margin: 5,
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalContent: {
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonClose: {
    backgroundColor: "#CE0E2D",
  },
});

export default GoalInput;
