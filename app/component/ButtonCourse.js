import React from "react";
import { StyleSheet, Button, View } from "react-native";

const ButtonCourse = ({ onPress }) => {
  return (
    <View style={styles.viewButton}>
    <Button
      onPress={onPress}
      title="Hola Mundo"
      color="#00B0FF"
    />
  </View>
  );
};

const styles = StyleSheet.create({  
  viewButton:{
    marginTop:50
  }
});
export default ButtonCourse;