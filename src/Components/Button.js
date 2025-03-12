import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Button = () => {
  return (
    <View style={styles.main}>
      <Text>Button</Text>
    </View>
  )
}

export default Button

const styles = StyleSheet.create({
    main:{
        position:'absolute',
        width:'100%',
        height:45,
        borderWidth:1,
        top:10,
        backgroundColor:'blue'
    }
})