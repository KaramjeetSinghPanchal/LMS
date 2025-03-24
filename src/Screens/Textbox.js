import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'

const Textbox = ({name,color}) => {
  return (

    <Text style={{fontSize:13,color:color}}>{name}</Text>
  )
}

export default Textbox

const styles = StyleSheet.create({})