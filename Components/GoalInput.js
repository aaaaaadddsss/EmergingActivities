import { StyleSheet, View, TextInput, TouchableOpacity, Text, Modal, Pressable } from 'react-native';
import { useState } from 'react';
import PersonIcon from '@mui/icons-material/Person';


function GoalInput(props) {
    const [enteredGoalText, setEnteredGoalText] = useState('');
    const [modalVisible, setModalVisible] = useState(false);


    function goalInputHandler(enteredText) {
        setEnteredGoalText(enteredText);
    };


    function addGoalHandler() {
        props.onAddGoal(enteredGoalText)
        setEnteredGoalText('');
    };


    function welcomeUser() {
        setModalVisible(true);
    }


    return(
        <View style={styles.inputContainer}>
            <TouchableOpacity onPress={welcomeUser}>
                <PersonIcon style={styles.Icon}> </PersonIcon>
            </TouchableOpacity>
            <TextInput placeholder='Your Course Goal.'
            style={styles.textInput}
            onChangeText={goalInputHandler}
            value={enteredGoalText}/>
            <TouchableOpacity
                onPress={addGoalHandler}
                styles={styles.button1}>
                <Text style={styles.textstyle}> Add Goal </Text>
            </TouchableOpacity>
            <Modal
                animationType="fade"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    setModalVisible(!modalVisible);
                }}>
                <View style={styles.modalContainer}>
                    <View style={styles.modalContent}>
                        <Text style={styles.modalText}>Welcome to the App!</Text>
                        <Pressable
                            style={[styles.button, styles.buttonClose]}
                            onPress={() => setModalVisible(!modalVisible)}>
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
        borderColor: '#005CB9',
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    textInput: {
        borderWidth: 2,
        borderRadius: 5,
        borderColor: '#CE0E2D',
        color: 'black',
        backgroundColor: 'white',
        width: '85%',
        height: '35%',
        marginRight: 8,
        padding: 13,
    },
    Icon: {
        width: 50,
        height: 50,
        color: 'white'
    },
    button1: {
        padding: 10,
    },
    textstyle: {
        fontSize: 15,
        color: 'white',
        backgroundColor: '#CE0E2D',
        borderRadius: 5,
        padding: 5,
        margin: 5,
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalContent: {
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
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
        textAlign: 'center',
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
    },
    buttonClose: {
        backgroundColor: '#CE0E2D',
    },
    textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },
});


export default GoalInput;