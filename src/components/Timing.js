import React from "react"
import {View, StyleSheet} from "react-native";
import {RoundedButton} from "./RoundedButton"

export const Timing = ({onChangeTime}) => {

return (
  <>
  <View style={styles.timingButton}>
    <RoundedButton title={"10"}
                   style={styles.button}
                   onPress={() => onChangeTime(10)}
    />
  </View>
  <View style={styles.timingButton}>
    <RoundedButton title={"15"}
                   style={styles.button}
                   onPress={() => onChangeTime(15)}
    />
  </View>
  <View style={styles.timingButton}>
    <RoundedButton title={"20"}
                   style={styles.button}
                   onPress={() => onChangeTime(20)}
    />
  </View>
  </>
)
}

const styles = StyleSheet.create({
  timingButton: {
    flex: 1,
    alignItems: "center"
  },
  button: {
    size: 75,
    height: 65,
    width: 85
  }
})