import React, {useState} from 'react';
import {
  Text,
  View,
  KeyboardAvoidingView,
  SafeAreaView,
  FlatList,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';
import {Input} from './components/Input';
import {Button} from './components/Button';
const ListExample = () => {
  //function base comp.
  const [title, setTitle] = useState('');
  const [dsc, setDsc] = useState('');
  // const [data, setData] = useState([]);
  const [number, setNumber] = useState(0);
  const [data, setData] = useState([
    {
      id: 0,
      title: 'Sabah öğünü',
      dsc: 'yumurta, portakal suyu, zeytin',
     // img: require('./src/assets/sabah.png'),
    },
    {
      id: 1,
      title: 'Öğle Öğünü',
      dsc: 'tavuk, salata',
     // img: require('./src/assets/ogle.jpg'),
    },
    {
      id: 2,
      title: 'Akşam Öğünü',
      dsc: 'et, sos, pirinç',
     // img: require('./src/assets/aksam.jpg'),
    },
    {
      id: 2,
      title: 'Akşam Öğünü',
      dsc: 'et, sos, pirinç',
    // img: require('./src/assets/aksam.jpg'),
    },
    {
      id: 2,
      title: 'Akşam Öğünü',
      dsc: 'et, sos, pirinç',
   //   img: require('./src/assets/aksam.jpg'),
    }
  ]);
  const renderItem = ({item}) => (
    <View style={[styles.item, {flexDirection:'row'}]}>
      {/* <Image style={{width: 80, height: 80}} source={item.img} />*/}
      <View style={[styles.item, {borderWidth:0}]}>
      <Text style={{color: 'black'}}>{item.id+1+":"+ item.title}</Text>
      <Text style={{color: 'black'}}>{item.dsc}</Text>
      </View>
    </View>
  );
  return (
    <SafeAreaView style={{flex:1}}>
      <KeyboardAvoidingView style={{flex:1}}>
        <FlatList
        style={{flex:1}}
          data={data}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
        <View style={{alignItems: 'center', marginTop: '0.5%', flex:1}}>
          <Input placeholder="Title" value={title} onChangeText={(value)=>setTitle(value)}/>
          <Input placeholder="Desc" style={{marginTop:10}} value={dsc} onChangeText={(value)=>setDsc(value)}/>
          <Button onPress={()=>{
            console.log("value1:",title)
            console.log("value2:", dsc)
            let arr = data;
            let obj = {
              id: data.length,
              title,
              dsc,
            //  img,
            }
            arr.push(obj)
            setData(arr)
          }}
          />
        </View>
        
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};
export default ListExample;
const styles = {
  headerImage: {width: 110, height: 30, marginTop: 15},
  textStyle: {
    color: 'black',
    fontWeight: 'bold',
  },
  flexCenter: {
    flex: 0.1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  touchanbleButtonStyle: {
    width: 20,
    height: 20,
    borderColor: 'grey',
    borderWidth: 1.5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputTextStyle: {
    backgroundColor: '#D09E88',
    color: 'white',
    width: '99%',
    height: '20%',
    borderRadius: 5,
    borderWidth: 0.5,
    borderColor: '#333333',
    textDecorationColor: 'white',
    paddingLeft: 20,
    fontSize: 15,
  },
  buttonStyle: {
    backgroundColor: '#9B8281',
    width: '30%',
    height: '15%',
    alignItems: 'center',
    borderWidth: 0.5,
    borderColor: '#333333',
    justifyContent: 'center',
    borderRadius: 5,
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
  },
  item: {
    padding: 0,
    marginVertical: 8,
    marginHorizontal: 10,
    borderWidth: 0.5,
    borderRadius: 10,
    borderColor: 'gray',
  },
};
