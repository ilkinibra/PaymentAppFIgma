
import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Image,
  Text,
  useColorScheme,
  View,
} from 'react-native';




export const App = () => {
  return <SafeAreaView style={styles.area} >
    <ScrollView>
      <View style={styles.woman}>
    <Image source={require('./assets/images/woman.png')} />
      </View>
      <Text style={styles.h1}>{`Hey ILKIN,\nthere's a new course about \nFigma`}</Text>
      <Text style={styles.h2}>{`Find out how our new matching tool \ncan help you learn another way`}</Text>

    <View style={styles.headerButton}>
      <Text style={styles.footerText}>Discover the course</Text>
    </View>
    <Text style={styles.h3}>Not now</Text>

    <View style={styles.header}>
    <View style={styles.backButton}>
    <Image source={require('./assets/icons/back.png')} />
    </View>
    <Text style={styles.tittle}>Credit / Debit Card</Text>
    </View>

    <View style={styles.card}>
    <Image style={styles.mcSymbol} source={require('./assets/icons/mc_symbol.png')} />
    <Text style={styles.cardNumber}>4169 7388 7688 0794</Text>
    <View style={styles.cardFooter}>
    <Text style={styles.cardUser}>ILKIN IBRAHIMOV</Text>
    <Text style={styles.cardDate}>01/27</Text>
    </View>
    </View>

    <View>
    <Image style={styles.camera} source={require('./assets/icons/camera.png')} />
    </View>

    <View style={styles.registerView}>
    <Text style={styles.cardRegister}>Name on card</Text>
    <View style={styles.registerBorder}>
      <Text style={styles.registerName}>ILKIN IBRAHIMOV.</Text>
    </View>
    </View>

    <View style={styles.registerView}>
    <Text style={styles.cardRegister}>Card Number</Text>
    <View style={styles.registerBorder}>
      <Text style={styles.registerCard}>4169 7388 7688 0794</Text>
    </View>
    </View>

    <View style={styles.expiryCvc}>
    <Text style={styles.cardRegister}>Expiry Date</Text>
    <View style={styles.cardExpiry}>
      <Text style={styles.expiryDate}>04/22</Text>
    </View>
    </View>
    
    <View style={styles.footer}>
      <Text style={styles.footerText}>Use this card</Text>
    </View>
    
    </ScrollView>
    </SafeAreaView>
};

 const styles = StyleSheet.create({
  area:{
    flex:1,
    backgroundColor:'#FFFFFF',
  },
  woman:{
    alignSelf:'center',
    marginTop:3,
  },
  headerButton:{
    width:370,
    height:70,
    backgroundColor:'#07122A',
    left:28,
    marginTop:70,
    fontSize:15,
    fontWeight:'600',
    borderRadius:8,
  },
  h1:{
    textAlign:'center',
    fontSize:22,
    fontWeight:'600',
    marginTop:20,
  },
  h2:{
    fontSize:16,
    fontWeight:'300',
    textAlign:'center',
    marginTop:62,
  },
  h3:{
    color:'#07122A',
    fontSize:16,
    fontWeight:'300',
    textAlign:'center',
    marginTop:52,
  },
  backButton:{
    backgroundColor:'#E5E4E2',
    width:42,
    height:42,
    borderRadius:8,
    justifyContent:'center',
    alignItems:'center',
    position:'absolute',
    left:0,
  },
  tittle:{
    fontSize:22,
    color:'#07122A',
    fontWeight:'700',
    lineHeight:28,
  },
  header:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
    marginHorizontal:32,
    marginTop:60,
  },
  card:{
    backgroundColor:'#07122A',
    paddingVertical:28,
    paddingHorizontal:24,
    marginTop:70,
    marginHorizontal:24,
    borderRadius:8,
  },
  mcSymbol:{
    alignSelf:'flex-end',
    marginBottom:22,
  },
  cardNumber:{
    color:'white',
    fontSize:26,
    fontWeight:'500',
    textAlign:'center',
    marginBottom:45,
  },
  cardUser:{
    color:'white',
    fontSize:26,
    fontWeight:'500',
  },
  cardDate:{
    color:'white',
    fontSize:20,
    fontWeight:'500',
  },
  cardFooter:{
    flexDirection:'row',
    justifyContent:'space-between'
  },
  camera:{
    marginHorizontal:32,
    marginTop:50,
    alignSelf:'center',
    width:34,
    height:29,
  },
  cardRegister:{
    fontWeight:'400',
    fontSize:16,
    lineHeight:22,
    color:'#A9A9A9'
  },
  registerView:{
    left:29,
    marginTop:35,
  },
  registerBorder:{
    width:370,
    height:40,
    border:1,
    borderRadius:8,
    borderWidth:1,
    borderBlockColor:'#A9A9A9',
    marginTop:2,
  },
  registerName:{
    left:10,
    top:8,
    fontSize:15,
    fontWeight:'600',
  },
  registerCard:{
    left:10,
    top:8,
    fontSize:15,
    fontWeight:'600',
  },
  expiryCvc:{
    left:29,
    marginTop:24,
  },
  cardExpiry:{
    width:150,
    height:45,
    border:1,
    borderRadius:8,
    borderWidth:1,
    borderBlockColor:'#A9A9A9',
    marginTop:2,
  },
  expiryDate:{ 
    left:10,
    top:11,
    fontSize:16,
    fontWeight:'600',
  },
  footer:{
    width:370,
    height:70,
    backgroundColor:'#07122A',
    left:28,
    marginTop:30,
    fontSize:15,
    fontWeight:'600',
    borderRadius:8,
  },
  footerText:{
    color:'white',
    alignSelf:'center',
    marginTop:15,
    fontSize:25,
    fontWeight:'700',
  },

})