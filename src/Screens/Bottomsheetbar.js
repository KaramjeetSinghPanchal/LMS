import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React, { useRef } from 'react';
import RBSheet from 'react-native-raw-bottom-sheet';

const Bottomsheetbar = ({ sheetRef }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Choose Language</Text>
      <TouchableOpacity onPress={() => {
        console.log('English selected');
        sheetRef.current.close();
      }}>
        <Text style={styles.buttonText}>English (US)</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => {
        console.log('Hindi selected');
        sheetRef.current.close();
      }}>
        <Text style={styles.buttonText}>Hindi</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => {
        console.log('Kannada selected');
        sheetRef.current.close();
      }}>
        <Text style={styles.buttonText}>Kannada</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => {
        console.log('Tamil selected');
        sheetRef.current.close();
      }}>
        <Text style={styles.buttonText}>Tamil</Text>
      </TouchableOpacity>
      <TouchableOpacity 
        style={styles.closeButton} 
        onPress={() => sheetRef.current.close()}
      >
        <Text style={styles.closeButtonText}>Close</Text>
      </TouchableOpacity>
    </View>
  );
};

const LanguageSelector = () => {
  const refRBSheet = useRef();

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <TouchableOpacity onPress={() => refRBSheet.current.open()}>
        <Text>Open Language Selector</Text>
      </TouchableOpacity>
      
      <RBSheet
        ref={refRBSheet}
        height={300}
        closeOnDragDown={true}
        closeOnPressMask={true}
        customStyles={{
          container: {
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
          },
          wrapper: {
            backgroundColor: 'rgba(0,0,0,0.5)',
          },
          draggableIcon: {
            backgroundColor: '#000',
          },
        }}
      >
        <Bottomsheetbar sheetRef={refRBSheet} />
      </RBSheet>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    // height:70,
    
  },
  title: {
    fontSize: 20,
    marginBottom: 0,
    textAlign: 'center',
    // backgroundColor:'blue',
    height:20,
    width:'90%'
  },
  buttonText: {
    fontSize: 16,
    textAlign: 'center',
    paddingVertical: 13, 
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
    // borderWidth:1,
    borderRadius:10,
    marginBottom:5,
    borderColor:'blue'
  },
  closeButton: {
    backgroundColor: '#ff4444',
    padding: 15,
    borderRadius: 10,
    marginTop: -3,
    width:'90%',
    justifyContent:'center',
    alignSelf:'center'
  },
  closeButtonText: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
  },
});

export default LanguageSelector;