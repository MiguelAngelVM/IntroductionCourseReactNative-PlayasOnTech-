import React from 'react';
import { StyleSheet, View, Image, Text} from 'react-native';
import TitleCourse from './app/component/TitleCourse';
import ButtonCourse from './app/component/ButtonCourse';
import ImgCourse from './app/component/ImgCourse';

class App  extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      course: "",
      title: "",
      complete: false
    }
  } 
  
  componentDidMount() {
    this.setState({
      course:"Introducción: Crea aplicaciones nativa en Android y IOS usando React Native",
      title: "Playas On Tech", 

    });
  }

  componentWillReceiveProps(next_props){
  }

  fnComplete = () =>{
    this.setState({complete: !this.state.complete});
  }

  render() {
    return (
      <View style={styles.body}>
        <View style={styles.sectionContainer}>
          <TitleCourse
            title   = {this.state.title}
            course  = {this.state.course}
          />
          <ButtonCourse 
            onPress = { this.fnComplete }
          />
          {this.state.complete &&
            <ImgCourse/>
          }
        </View>
      </View>
    );
  }
};

const styles = StyleSheet.create({ 
  scrollView: {
    backgroundColor: '#61dafb',
  },
  body: {
    backgroundColor: '#61dafb',
    height: '100%',
    width: '100%'
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
 
});

export default App;
