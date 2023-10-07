import { StyleSheet, Text  } from 'react-native';


function TitleText(props) {
    return(
        <Text style={styles.textGoal}>{props.text}</Text>
    );
};


const styles = StyleSheet.create({
    textGoal: {
        color: 'white',
        margin: 10,
        fontWeight: 'bold',
        textAlign: 'center',
      },
});


export default TitleText;
