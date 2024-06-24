import React, {useState} from "react";
import {View, Text, StyleSheet} from "react-native"
import {TextInput} from "react-native-paper"
import {spacing} from "../utils/sizes"
import {RoundedButton} from "../components/RoundedButton"

export const Focus = ({
  addSubject, 
  addTask}) => {
  const [subject, setSubject] = useState(null);
  console.log(subject)

  return(
  <View style={styles.container}>
    <View style={styles.inputContainer}>
    <TextInput label="what would you like to focus on"
               style={styles.textInput}
               onChangeText={setSubject}
    />
    <View style={styles.button}>
    <RoundedButton title="+" 
                   size={50}
                   onPress={() => {
                     addSubject(subject)
                    //  addTask(subject)
                     }
                   }/>
    </View>
    </View>
  </View>
)}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  textInput: {
    flex: 1,
    marginRight: spacing.sm,
    width: 280
  },
  inputContainer: {
    padding: spacing.lg,
    justifyContent: "top",
    flexDirection: "row"
  },
  button: {
    justifyContent: "center"
  }
 
})