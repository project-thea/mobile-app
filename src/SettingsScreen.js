import React from 'react';
import { connect } from 'react-redux';
import {
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
	//Image
} from 'react-native-elements';
//import Icon from 'react-native-vector-icons/FontAwesome5';
import { Icon } from 'react-native-elements';
import Colors from './Colors';

class SettingsScreen extends React.Component {
	static navigationOptions = {
		title: 'Settings',
	};
	
	render(){
		
		return (
			<ScrollView>
				<ListItem
					title="Token"
					chevron={true}
					leftIcon={{
						type:'font-awesome',
						name: 'user',
						iconStyle:{color: Colors.primary}
					}}
					subtitle={this.props.uuid}
				/>
				
				
				<ListItem
					title="Upload server"
					chevron={true}
					leftIcon={{
						type:'font-awesome-5',
						name: 'upload',
						iconStyle:{color: Colors.primary}
					}}
					subtitle={this.props.uploadURL}
				/>
				
				<ListItem
					title="GPS Status"
					//chevron={true}
					leftIcon={{
						type:'font-awesome-5',
						name: 'map-marker',
						iconStyle:{color: Colors.primary}
					}}
					subtitle="OFF"
					switch
				/>
				
				<ListItem
					title="SMS Collection"
					chevron={true}
					leftIcon={{
						type:'font-awesome-5',
						name: 'sms',
						iconStyle:{color: Colors.primary}
					}}
					subtitle="+257779089303"
				/>
				
					<View
					  style={{
						borderBottomColor: 'lightgrey',
						borderBottomWidth: 1,
					  }}
					/>
					
				<ListItem
					title="Status"
					chevron={true}
					leftIcon={{
						type:'font-awesome-5',
						name: 'question-circle',
						iconStyle:{color: Colors.primary}
					}}
					subtitle="Last upload was 5 minutes ago"
				/>
				

					
				<ListItem
					title="Sampling Frequency"
					chevron={true}
					leftIcon={{
						type:'font-awesome-5',
						name: 'clock',
						iconStyle:{color: Colors.primary}
					}}
					subtitle="30 minutes"
				/>

				
					<ListItem
						title="About"
						chevron={true}
						leftIcon={{
							type:'font-awesome-5',
							name: 'info-circle',
							iconStyle:{color: Colors.primary}
						}}
						onPress={() => this.props.navigation.navigate('About')}
						subtitle="About Project-THEA"
					/>
					
			</ScrollView>);
	}
}


function mapStateToProps(state) { 
	return {
		uuid: state.settings.uuid,
		uploadURL: state.settings.uploadURL
	}
}

export default connect(mapStateToProps)(SettingsScreen);
