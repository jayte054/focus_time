import React from "react"
import {View, Text, StyleSheet, FlatList} from "react-native";
import {Colors} from "../utils/colors"
import {spacing} from "../utils/sizes"

export const FocusHistory = ({history}) => {

  if(!history || !history.length) return <Text style={Style.empty}> We are yet to focus on anything yet </Text>

  const renderItem = ({item}) => {
    return(
      <Text style={Style.item}>
      - {item}
      </Text>
      )
    
    }

  return(
    <View style={Style.historyContainer}>
      <Text style={Style.historyText}>
        Items previously focused on: 
      </Text>
      <FlatList 
            data={history}
            renderItem={renderItem}
        />
    </View>
  )
}

const Style = StyleSheet.create({
  historyContainer: {
    padding: spacing.md,
    flex: 1,
  },
  historyText: {
    color: Colors.white,
    fontWeight: "bold"
  },
  item: {
    color: Colors.white,
    fontWeight: "bold",
    paddingTop: spacing.md
  },
  empty: {
    color: Colors.white,
    textAlign: "center",
    fontWeight: "bold",
    
  }
})