import react from 'react';
import {view, keyboardAvoidingview, image, TextInput, Touchable, TouchableOpacity, StyleSheet,text} from 'react-native';

export default function App(){
  return (
    <keyboardAvoidingview style={Styles.background}>
      <view style={Styles.containerlogo}>
        <image
        source={require('img.jpeg')}   
       />
      </view>


      <view style={styles.container}>
        <textInput
        style={styles.input}
        placeholder="email"
        autocorrect={false}
        onChangeText={()=>()}
        />

      <TextInput
      style={styles.input}      
      placeholder="senha"
      autoCorrect={false}
      onchangetext={() => ()}
      />

      <TouchableOpacity style={styles.btnsubmit}>
        <text style={styles.submitText}>Acessar</text>
      </TouchableOpacity>

      </view>   
    </keyboardAvoidingview>
  );
}

const style = StyleSheet.create ({
  background:{
    flex:1,
    alignItems:'center',
    justifycontent:'center',
    backgroundcolor: '#191919'
  },

  containerlogo:{
    flex:1,
    justifycontent:'center',
    backgroundcolor:'red',
  },

  container:{
    flex:1,
    alignitems:'center',
    justifycontent:'center',


  },

  input:{
    backgroundcolor:'#FFF',
    width:'90%',
    marginBottom:15,
    color:'#222',
    fontsize:17,
    borderRadius:7,
    padding:10,

  },

  btnsubmit:{
    color:'#35AAFF',
    width:'90%',
    height:45,
    alignItems:'center',
    justifycontent:'center',
    borderRadius:7,

  },

  submitText:{
    
  }

  
});