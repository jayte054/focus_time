import React, {useState} from "react"
import { Text,View, SafeAreaView, StyleSheet, Platform, StatusBar } from 'react-native';
// import Constants from "expo-constants"
import {Colors} from "./src/utils/colors";
import { Focus } from "./src/features/focus"
import {Timer} from "./src/features/timer"
import {FocusHistory} from "./src/components/focusHistory"


export default function App() {
const [currentSubject, setCurrentSubject] = useState(null)
const [history, setHistory] = useState([])

  return (
    <SafeAreaView style={styles.container}>
    <View style={styles.heading}>
      <Text style={styles.headingText}> Jayte's Focus Apppp</Text>
    </View>
     { !currentSubject ? (
       <View>
       <Text>
       <Focus addSubject={setCurrentSubject}/>
       <FocusHistory history={history}/>
       </Text>
       </View>
       ) : (
         <Timer 
            focusSubject={currentSubject}
            onTimerEnd={(subject) => {
              setHistory([...history, subject])
            }}
            clearSubject={() => {setCurrentSubject(null)}}
            
         />
       ) }

       
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0 ,  
    backgroundColor: Colors.darkblue
  },
  heading: {
    paddingTop: 10,
    alignItems: "center",
  },
  headingText: {
    fontSize: 20,
    color: Colors.white,
    fontWeight: "bold"
  }
});
