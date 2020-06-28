import React from 'react';
import { connect } from 'react-redux';
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
	ListItem,
	Button, 
	Input
} from 'react-native-elements';
import { Icon } from 'react-native-elements';
import Colors from './Colors';

class ServerSettingsScreen extends React.Component {
	static navigationOptions = {
		title: 'Server Settings'
	};
	
	render(){
		
		return (
			<ScrollView>
				<Input
				  label="Collection server"
				  placeholder='Enter your  data collection server'
				  //leftIcon={{ type: 'font-awesome-5', name='upload'}}
					containerStyle={{
						marginTop: 10
					}} 
					value={this.props.uploadURL}
					onChangeText={(title) => {}}
				/>				
				
				<Button 
				title="Update"
					 buttonStyle={{
						marginHorizontal: 10,
						marginBottom: 10,
						marginTop: 10,
						backgroundColor: Colors.primary
					}}
				//onPress={() => this.props.dispatch(submitMessage(this.state))}
				/>
			
			</ScrollView>);
	}
}

function mapStateToProps(state) { 
	return {
		uploadURL: state.settings.uploadURL
	}
}

export default connect(mapStateToProps)(ServerSettingsScreen);