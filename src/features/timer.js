import React, {useState} from 'react';
import { View, Text, StyleSheet, Vibration } from 'react-native';
import {ProgressBar} from "react-native-paper"
import {useKeepAwake} from "expo-keep-awake"
import { Countdown } from '../components/Countdown';
import {RoundedButton} from "../components/RoundedButton"
import {spacing} from "../utils/sizes";
import {Colors} from "../utils/colors"
import {Timing} from "../components/Timing"

const ONE_SECOND_IN_MS = 1000;


const PATTERN = [
    1 * ONE_SECOND_IN_MS,
    1 * ONE_SECOND_IN_MS,
    1 * ONE_SECOND_IN_MS,
    1 * ONE_SECOND_IN_MS,
    1 * ONE_SECOND_IN_MS,
  ];

export const Timer = ({ focusSubject, clearSubject, onTimerEnd }) => {
  useKeepAwake();
  const [isStarted, setIsStarted] = useState(false)
  const [progress, setProgress] = useState(1)
  const [minutes, setMinutes] = useState(0.1)

  const onEnd = (reset) => {
        Vibration.vibrate(PATTERN)
        setIsStarted(false)
        setProgress(1)
        reset()
        onTimerEnd(focusSubject)
  }

  return(
  <View style={Styles.container}>
    <View style={Styles.countdown}>
      <Countdown
      minutes={minutes}
      isPaused = {!isStarted}
      // onProgress={(progress) => setProgress(progress)}
      onProgress={setProgress}
      onEnd={onEnd}
      /> 
      <View style = {Styles.textcontainer}>
      <Text style={Styles.text}> Focus on </Text>
      <Text style={Styles.task}>{focusSubject}</Text>
      </View>
      </View>
      <View style={Styles.progressContainer}>
        <ProgressBar progress={progress}
                     color={Colors.progressBar}
                     style={Styles.progressbar}

        />
      </View>
      <View style={Styles.timingWrapper}>
        <Timing onChangeTime={setMinutes} />
      </View>
      <View style={Styles.buttonWrapper}>
          {!isStarted ? (<RoundedButton title="start"
                        onPress= {() => setIsStarted(true)}
          />
          ) : (<RoundedButton title="pause"
                              onPress={() => setIsStarted(false)}
          />
          )} 
    </View>
    <View style={Styles.clearButton} >
      <RoundedButton title={"-"}
                     size={50}
                     onPress={clearSubject}
      />
    </View>
  </View>
)};

const Styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  countdown: {
    flex: 0.5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonWrapper:{
    flex: 0.3,
    flexDirection: "row",
    padding: 15,
    justifyContent: "center",
    alignItems: "center"
  },
   timingWrapper:{
    flex: 0.2,
    flexDirection: "row",
    padding: 15,
    justifyContent: "center",
    alignItems: "center"
  },
  textcontainer:{
    paddingTop: spacing.lg
  },
  text: {
    color: Colors.white,
    fontWeight: "bold",
    textAlign: "center"
  },
  task: {
    fontWeight: "bold",
    textAlign: "center",
    color: Colors.white
  },
  progressContainer: {
    paddingTop: spacing.lg,
  },
  progressbar: {
    height: spacing.sm,
  },
  clearButton: {
    paddingBottom: 20,
    flexDirection: "row",
    justifyContent: "center",
  }
});
