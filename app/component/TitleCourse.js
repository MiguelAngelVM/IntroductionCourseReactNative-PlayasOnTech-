import React from "react";
import { StyleSheet, Text, View } from "react-native";

const TitleCourse = ({ title = "" , course = "" }) => {
  return (
    <View>
        <Text style={styles.sectionTitle}>
            {title}
        </Text>
        <Text style={styles.sectionDescription}>
            {course}
        </Text>
    </View>
  );
};

const styles = StyleSheet.create({  
    sectionTitle: {
        fontSize: 24,
        fontWeight: '600',
        color: '#fff',
      },
      sectionDescription: {
        marginTop: 8,
        fontSize: 18,
        fontWeight: '400',
        color: '#fff',  
      },
});
export default TitleCourse;