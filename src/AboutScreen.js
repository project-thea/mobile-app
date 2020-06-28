import React from 'react';
import {
  Linking,
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  Image
} from 'react-native';
import { 
	Card, 
	ListItem
} from 'react-native-elements';
//import Icon from 'react-native-vector-icons/FontAwesome5';
import { Icon } from 'react-native-elements';
import Colors from './Colors';

class AboutScreen extends React.Component {
	static navigationOptions = {
		title: 'About',
	};
	
	render(){
		
		return (
			<ScrollView>
			<Card>
				<Text style={{marginBottom: 10}}>
Project-THEA is a tracking platform using a mobile application akin to the one used in airline traffic tracking. We combine geo-location technology and COVID-19 test-history information through a mobile application called THEA-C19 to support public health preparedness and surveillance. This technology collates multiple COVID-test results of drivers and other occupants of haulage tracks along the transit routes together with geolocation in real-time to improve preparedness and case track and tracing within and between borders of East Africa.
				</Text>
				
				<ListItem
				  topDivider
				  roundAvatar
				  title={"Website"}
				  subtitle={"https://project-thea.org"}
				  leftElement={<Icon name="globe" type='font-awesome-5' size={30} style={{color: Colors.kukatale1}}/>}
				  onPress={() => Linking.openURL("https://project-thea.org")}
				/>
				
			</Card>					
			</ScrollView>);
	}
}


export default AboutScreen;