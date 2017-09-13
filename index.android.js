import React, {Component} from 'react';
import {View, Text, AppRegistry, StyleSheet, ScrollView} from 'react-native';

export default class AwesomeProject extends Component{
  render(){
    return(
      <View style={styles.tempat}>

       <View style={styles.kepala}>
        <Text style={{ color: 'white', fontWeight:'bold' }}>Welcome</Text>
       </View>

       <View style={styles.badan}>

       <ScrollView contentContainerStyle={styles.contentContainer}>
            <View style={styles.satuList}>
            <View style={styles.listSatu}>
            </View>
              <Text>Muhammad</Text>
            </View>

            <View style={styles.duaList}>
            <View style={styles.listDua}>
            </View>
              <Text>Rijal</Text>
            </View>

            <View style={styles.tigaList}>
            <View style={styles.listTiga}>
            </View>
              <Text>Fakhri</Text>
            </View>

            <View style={styles.empatList}>
            <View style={styles.listEmpat}>
            </View>
            <Text>Rahman</Text>
            </View>
      </ScrollView>

      </View>

    </View>
    )
  }
}

const styles=StyleSheet.create({
  tempat:{
    flex:1,
  },

  kepala:{
    flex:0.5,
    justifyContent:'center',
    flexDirection:'column',
    alignItems:'center',
    backgroundColor:'#2d6384',
  },

  badan:{
    flex:5,
    flexDirection:'column-reverse',
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#a4d4f2',
    paddingBottom:5
  },

  satuList:{
    flex:1,
    width:350,
    height:100,
    backgroundColor:'#ffefd5',
    marginBottom:5,
    flexDirection:'row',
    padding:5,
    borderRadius:5
  },

  duaList:{
    flex:1,
    width:350,
    height:100,
    backgroundColor:'#ffefd5',
    marginBottom:5,
    flexDirection:'row',
    padding:5,
    borderRadius:5
  },

  tigaList:{
    flex:1,
    width:350,
    height:100,
    backgroundColor:'#ffefd5',
    marginBottom:5,
    flexDirection:'row',
    padding:5,
    borderRadius:5
  },
  empatList:{
    flex:1,
    width:350,
    height:100,
    backgroundColor:'#ffefd5',
    marginBottom:5,
    flexDirection:'row',
    padding:5,
    borderRadius:5
  },

  contentContainer: {
    paddingVertical: 20,
  },

  listSatu:{
    width:100,
    height:90,
    backgroundColor:'#141a26',
    marginRight:5
  },
  listDua:{
    width:100,
    height:90,
    backgroundColor:'#141a26',
    marginRight:5
  },
  listTiga:{
    width:100,
    height:90,
    backgroundColor:'#516896',
    marginRight:5
  },
  listEmpat:{
    width:100,
    height:90,
    backgroundColor:'#7894cc',
    marginRight:5
  },
});

AppRegistry.registerComponent('AwesomeProject', ()=> AwesomeProject);
