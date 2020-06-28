import React from 'react';
import { connect } from 'react-redux';
import {Text, 
	View, 
	StyleSheet,
	TouchableOpacity} from 'react-native';
import { withNavigation } from 'react-navigation';
import Colors from './Colors';
import { Icon } from 'react-native-elements';

class Footer extends React.Component {
	render(){
		return (
		  <View style={styles.container}>
			<View style={styles.iconContainer}>
				<TouchableOpacity
					onPress={() => this.props.navigation.navigate('Home')}
				>
					<Icon 
						name="home" 
						type='font-awesome-5' 
						size={30} 
						color={Colors.primary} />
				</TouchableOpacity>
				<Text>Home</Text>
			</View>
			<View style={styles.iconContainer}>

			</View>
			<View style={styles.iconContainer}>

			</View>
			<View style={styles.iconContainer}>
				<TouchableOpacity
					onPress={() => this.props.navigation.navigate('Settings')}
				>
					<Icon 
						name="sliders-h" 
						type='font-awesome-5' 
						size={30} 
						color={Colors.primary} />
				</TouchableOpacity>
				<Text>Settings</Text>
			</View>
		  </View>
		);
	}
}


const styles = StyleSheet.create({
  container: {
	  flexDirection: "row",
	  borderTopColor: "#e1e1e1",
	  borderTopWidth: 1,
	  backgroundColor: '#ffffff'
  },
  iconContainer: {
	  justifyContent: 'center',
	  alignItems:'center',
	  flex: 1,
	  height: 65,
	  paddingTop: 10
  },
  icon:{
	  color: 'powderblue'
  },
  iconText: {
		fontSize: 12
  }
});

export default withNavigation(Footer)