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

class PreventionScreen extends React.Component {
	static navigationOptions = {
		title: 'COVID-19 Preventive Measures',
	};
	
	render(){
		
		return (
			<ScrollView>
			<Card>
				<Text>To prevent the spread of COVID-19:</Text>
				<Text>1. Clean your hands often. Use soap and water, or an alcohol-based hand rub.</Text>
				<Text>2. Maintain a safe distance from anyone who is coughing or sneezing.</Text>
				<Text>3. Don’t touch your eyes, nose or mouth.</Text>
				<Text>4. Cover your nose and mouth with your bent elbow or a tissue when you cough or sneeze. </Text>
				<Text>5. Stay home if you feel unwell. </Text>
				<Text>5. If you have a fever, cough and difficulty breathing, seek medical attention. Call in advance. </Text>
				<Text>6. Stay home if you feel unwell. </Text>
				
				<Text style={{marginBottom: 10}}>
					Follow the directions of your local health authority.
				</Text>
			
				
			</Card>					
			</ScrollView>);
	}
}


export default PreventionScreen;