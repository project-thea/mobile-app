import React from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  Image
} from 'react-native';
//import Icon from 'react-native-vector-icons/FontAwesome5';
import { Icon } from 'react-native-elements';
import Colors from './Colors';
import Footer from './Footer';

//var uuid = require('react-native-uuid');
let width = Dimensions.get('window').width

class HomeScreen extends React.Component {
	static navigationOptions = {
		headerShown: false
	};
	
	render(){
		return (
			<>
		<View>
            <Image style={{ height: width, width: width, position: 'absolute', top:0, left:0 }} source={{ uri: 'http://i01.i.aliimg.com/wsphoto/v0/32297951629_5/5pcs-lot-The-Hollowan-Star-Nicolas-Cage-Stylish-Square-Pillowcase-Cushion-Pillow-Cover.jpg' }} />
        </View>
			<ScrollView>
				<View style={{
				}}>	
					<Text style={{textAlign: 'center', fontSize: 18, marginTop: 20}}>Tap button below to start and stop tracking</Text>
				</View>
				
			<TouchableOpacity
			   style={{
				   marginTop: '20%',
				   borderWidth:1,
				   borderColor:'rgba(0,0,0,0.2)',
				   alignItems:'center',
				   justifyContent:'center',
				   width:100,
				   //position: 'absolute',                                          
				   bottom: 10,
				   marginLeft: '35%',
				   
				   //right: 10,
				   height:100,
				   backgroundColor:'#fff',
				   borderRadius:100,
				   textAlign: 'center'
				 }}
				 
				 //onPress={() => this.props.navigation.navigate('MessageCreate')}
			 >
			   <Icon
					raised
					//name="play"  
					name="map-marker"
					size={40}  
					type='font-awesome-5' 
					//name='heartbeat'
					color={Colors.primary}
		
					/>

			  </TouchableOpacity>
			  
				<View style={{
				}}>	
					<Text style={{textAlign: 'center', fontSize: 14, marginTop: 10, marginBottom: 10}}>By pressing the above button, you concent to this app collecting your GPS location information</Text>
				</View>

				
				<View
				  style={{
					borderBottomColor: 'lightgrey',
					borderBottomWidth: 1,
				  }}
				/>
				
				
				<View style={{
				}}>	
					<Text style={{textAlign: 'left', fontSize: 18, marginTop: 10, marginHorizontal: 10}}>Current Status: NEGATIVE</Text>
				</View>
					
				
				<View style={{
				}}>	
					<Text style={{textAlign: 'left', fontSize: 18, marginTop: 10, marginHorizontal: 10}}>Next checkpoint: Checkpoint D</Text>
				</View>
					
				
			</ScrollView>
			<View style={styles.footerContainer}>
				<Footer/>
			</View>
			</>
		);
	}
}

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
	//paddingTop: 10,
	//paddingBottom: 10,
  },
  dashIconLeft:{
	  flex: 1,
	  marginLeft: 20,
	  marginRight: 10,
	  marginBottom: 10,
	  backgroundColor: Colors.white,
	  paddingLeft: 10,
	  paddingRight: 10,
	  paddingTop: 20,
	  paddingBottom: 20,
	  justifyContent: 'center',
	  alignItems:'center',
	  borderRadius: 5
  },
  dashIconRight:{
	  flex: 1,
	  marginLeft: 10,
	  marginRight: 20,
	  marginBottom: 10,
	  backgroundColor: Colors.white,
	  paddingLeft: 10,
	  paddingRight: 10,
	  paddingTop: 20,
	  paddingBottom: 20,
	  justifyContent: 'center',
	  alignItems:'center',
	  borderRadius: 5
  },
  dashIconText: {
	  marginTop: 5,
	  marginBottom: 5,
	  fontWeight: '700'
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
  container: {
	  color: Colors.lightishblue,
	  flex: 1,
	  flexDirection: "column"
  },
  footerContainer:{
	  marginTop: 10,
	  //flex: 1,
	  //justifyContent: 'flex-end',
  },

  shadow:{
	shadowColor: "#000",
	shadowOffset: {
		width: 0,
		height: 1,
	},
	shadowOpacity: 0.22,
	shadowRadius: 2.22,

	elevation: 3,
  },
  quantityCircle: {
		width: 28,
		height: 28,
		borderRadius: 100/2,
		backgroundColor: '#52c41a',
		paddingTop: 4,
		paddingLeft: 10
  },
  quantityFont: {
	  color: 'white',
  }
});


export default HomeScreen;