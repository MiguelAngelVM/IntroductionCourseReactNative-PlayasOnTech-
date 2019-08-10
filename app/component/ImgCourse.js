import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

const ImgCourse = ({  }) => {
  return (
    <View style={styles.image}>
      <Image
        style={{width: 200, height: 200,}}
        source={{uri: 'https://www.inovex.de/blog/wp-content/uploads/2018/03/react-native.png' }}
      ></Image>
      <Text style={styles.sectionDescription}>
          Gracias
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({  
  image:{
    marginTop:20,
    alignItems:'center',
    height:'100%',
    width:'100%'
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: '#fff',  
  },
});
export default ImgCourse;