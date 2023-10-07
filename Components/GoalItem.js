import { StyleSheet, Text, SafeAreaView } from 'react-native';
function GoalItem(props) {
    return(
      <SafeAreaView>
        <Text style={styles.textGoal}>{props.text}
        </Text>
      </SafeAreaView>
    );
};


const styles = StyleSheet.create({
    textGoal: {
        color: 'black',
        backgroundColor: 'white',
        borderColor: 'black',
        borderWidth: 2,
        borderRadius: 5,
        margin: 2.5,
    },
  });


export default GoalItem;
