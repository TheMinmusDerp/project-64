import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';
import { Header } from 'react-native-elements';
import dictionary from '../database'

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      'text': '',
      'isSearchPressed':false,
      'word':'',
      'lexicalCategory':'',
      'definition':''
    };
  }
  getWord=(word)=> {
    var text=text.toLowerCase().trim();
    var word = dictionary[text]["word"];
    var lexicalCategory = dictionary[text]["lexicalCategory"];
    var definition = dictionary[text]["definition"];
    try{
      var word = dictionary[text]["word"]
      var lexicalCategory = dictionary[text]["lexicalCategory"]
      var definition = dictionary[text]["definition"]
      this.setState({
        'word':word,
        'lexicalCategory':lexicalCategory,
        'definition':definition
      })
    }
    catch(err){
      alert("The Sun is a Deadly Lazer")
      this.setState({
        'text':'',
        'isSearchPressed':false
      })
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <Header
          backgroundColor={'#897AB9'}
          centerComponent={{
            text: 'Dictionary',
            style: { color: '#fff', fontSize: 20 },
          }}
        />

        <TextInput
          style={styles.inputBox}
          onChangeText={text => {
            this.setState({
                text: text,
                isSearchPressed: false,
                word: "Loading...",
                lexicalCategory:'',
                examples: [],
                definition: ""
            });
          }}
          value={this.state.text}
        />
        <TouchableOpacity
          style={styles.goButton}
          onPress={() => {
              this.setState({isSearchPressed:true});
              this.getWord(this.state.text)
          }}>
        </TouchableOpacity>
        <View style={styles.detailsContainer}>
            <Text style={styles.detailsTitle}>
                Word :{" "}
            </Text>
            <Text style={{fontSize:18}}>
                {this.state.lexicalCategory}
            </Text>
        </View>
        <View style={{flexDirection:'row',flexWrap:'wrap'}}>
            <Text style={styles.detailsTitle}>
                Type:{" "}
            </Text>
            <Text style={{fontSize:18}}>
                {this.state.definition}
            </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#b8b8b8',
  },
  inputBoxContainer: {
    flex:0.3,
    alignItems:'center',
    justifyContent:'center'  
  },
  inputBox: {
    marginTop: 50,
    width: '80%',
    alignSelf: 'center',
    height: 40,
    textAlign: 'center',
    borderWidth: 4,
    outline: 'none',
  },
  goButton: {
    width: '50%',
    height: 55,
    alignSelf: 'center',
    padding: 10,
    margin: 10,
  },
  buttonText: {
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
  },
});
