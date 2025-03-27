import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const Button = ({onPress,navigation,text,style,certificate,neww}) => {
  return (
    <TouchableOpacity style={[styles.button,style]} onPress={onPress} navigation={navigation}>
      <Text style={{color:'white',justifyContent:'center',alignItems:'center',alignSelf:'center',top:12,fontWeight:400,fontSize:16,color:certificate?'blue':'white',marginBottom:neww?20:0}}>{text}</Text>
    </TouchableOpacity>

    
  )
}

export default Button

const styles = StyleSheet.create({
    button:{
        width:'85%',
        backgroundColor:'rgba(11, 87, 207, 1)',
        height:45,
        // borderWidth:1,
        borderRadius:10,
        marginTop:50
    }
})