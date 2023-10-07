import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Modal,
  Pressable,
} from "react-native";
import DeleteIcon from "@mui/icons-material/Delete";

function GoalItem(props) {
  const [deleteConfirmationModalVisible, setDeleteConfirmationModalVisible] =
    useState(false);

  function onDeleteIconPress() {
    setDeleteConfirmationModalVisible(true);
  }

  function onDeleteConfirmed() {
    setDeleteConfirmationModalVisible(false);
    props.onDelete();
  }

  function onCancelDelete() {
    setDeleteConfirmationModalVisible(false);
  }

  return (
    <View style={styles.goalItem}>
      <Text style={styles.textGoal}>{props.text}</Text>
      <TouchableOpacity onPress={onDeleteIconPress}>
        <DeleteIcon styles={styles.icon}/>
      </TouchableOpacity>
      <Modal
        animationType="fade"
        transparent={true}
        visible={deleteConfirmationModalVisible}
        onRequestClose={onCancelDelete}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalText}>
              Are you sure you want to delete this goal?
            </Text>
            <Pressable
              style={[styles.button, styles.buttonDelete]}
              onPress={onDeleteConfirmed}
            >
              <Text style={styles.textStyle}>Delete</Text>
            </Pressable>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={onCancelDelete}
            >
              <Text style={styles.textStyle}>Cancel</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  goalItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "white",
    borderColor: "black",
    borderWidth: 2,
    borderRadius: 5,
    margin: 5,
    padding: 10,
  },
  textGoal: {
    color: "black",
  },
  icon: {
    width: 20,
    height: 20,
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
    marginVertical: 5,
    width: 100,
  },
  buttonDelete: {
    backgroundColor: "red",
  },
  buttonClose: {
    backgroundColor: "#CE0E2D",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default GoalItem;
