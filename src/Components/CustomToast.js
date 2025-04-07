import React from 'react';
import { View, Text, StyleSheet, Platform } from 'react-native';

const CustomToast = ({ message }) => (
  <View style={styles.container}>
    <View style={styles.toastBody}>
      <Text style={styles.text}>{message}</Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: -140,
    left: 0,
    right: 0,
    alignItems: 'center',
    zIndex: 9999,
  },
  toastBody: {
    backgroundColor: 'rgb(71, 131, 228)',
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 10,
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 10, height: 10 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
      },
      android: {
        elevation: 7,
      },
    }),
  },
  text: {
    color: 'white',
    fontSize: 14,
    fontWeight: '500',
    textAlign: 'center',
  },
});

export default CustomToast;