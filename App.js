import React from 'react';
import {View,Text,StyleSheet, SafeAreaView, FlatList, ScrollView,Image, ImageBackground} from 'react-native';
import {Button} from 'react-native';
import {Dimensions} from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const App = () => {
 const onPressLearnMore = () =>
 {

 };
  return(
    
    <ImageBackground 
    resizeMode="stretch"
    source = {{uri:"https://upload.wikimedia.org/wikipedia/en/9/9e/IOS_11_Homescreen_iPhone_7_Plus.png"}}
    style = {{width:'100%' , height:'100%'}}>

    
    <SafeAreaView>
      <ScrollView alwaysBounceVertical = {true}>
      <View>
      <Text>
       The Component Application 
      </Text>
      
                           

        <Image style ={styles.flatliststyle}
        source = {{uri:"https://s3.amazonaws.com/gv2016wp/wp-content/uploads/20181107225306/WALLPAPERWEDNESDAY_story_110718Artboard-1.jpg"}}
        />

<FlatList
        style={styles.flatliststyle}
        data={[{key: 'Apple '}, {key: 'Samsung'},{key: 'Blackberry '}, 
        {key: 'OPPO'},{key: 'Vivo '}, {key: 'Mi'},{key: 'Xiaomi '}, 
        {key: 'OPPO'},{key: 'OPPO'},{key: 'Ios '}, {key: 'Mi'},{key: 'Android '}, 
        {key: 'Lenovo'}]}
        renderItem={({item}) => <Text style= {{color:"black",borderColor:"red",borderWidth:1,textAlign:"center"}}>{item.key}</Text>}
        />  

<Button
      onPress={onPressLearnMore}
        title = "Button"
        color = "#841584"/>

        
    </View>
      </ScrollView>
      </SafeAreaView> 
      </ImageBackground>
   );
  }
   const styles = StyleSheet.create ({
    flatliststyle:{width:windowWidth<500?"60%":"90%",
    height:windowHeight<1200?200:600,
    borderColor:"black",borderWidth:1,
    margin:16},
   }) ;
   export default App;
