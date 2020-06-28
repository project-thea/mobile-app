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
import { Icon, ListItem } from 'react-native-elements';
import Colors from './Colors';
import Footer from './Footer';
import BackgroundGeolocation from '@mauron85/react-native-background-geolocation';
import { startTracking, stopTracking } from './actions/TrackingActions';

const Pulse = require('react-native-pulse').default;

var uuid = require('react-native-uuid');
let width = Dimensions.get('window').width

class HomeScreen extends React.Component {
	static navigationOptions = {
		headerShown: false
	};
	
	constructor(props){
		super(props);
		
		this.beginTracking = this.beginTracking.bind(this);
		this.endTracking = this.endTracking.bind(this);
		this.toggleTracking = this.toggleTracking.bind(this);
		
		this.testUUID = uuid.v4();
	}

	
	//Configure tracking
	configureBgLocation(){
		BackgroundGeolocation.configure({
		  desiredAccuracy: BackgroundGeolocation.HIGH_ACCURACY,
		  stationaryRadius: 50,
		  distanceFilter: 50,
		  notificationTitle: 'THEA-C19',
		  notificationText: 'Collecting GPS location...',
		  debug: true,
		  startOnBoot: false,
		  stopOnTerminate: true,
		  locationProvider: BackgroundGeolocation.ACTIVITY_PROVIDER,
		  interval: 10000,
		  fastestInterval: 5000,
		  activitiesInterval: 10000,
		  stopOnStillActivity: false,
		  url: this.props.uploadURL,
		  httpHeaders: {
			'X-FOO': 'bar'
		  },
		  // customize post properties
		  postTemplate: {
			lat: '@latitude',
			lon: '@longitude',
			uuid: this.props.uuid 
		  }
		});

		BackgroundGeolocation.on('location', (location) => {
		  // handle your locations here
		  // to perform long running operation on iOS
		  // you need to create background task
		  BackgroundGeolocation.startTask(taskKey => {
			// execute long running task
			// eg. ajax post location
			// IMPORTANT: task has to be ended by endTask
			BackgroundGeolocation.endTask(taskKey);
		  });
		});

		BackgroundGeolocation.on('stationary', (stationaryLocation) => {
		  // handle stationary locations here
		  Actions.sendLocation(stationaryLocation);
		});

		BackgroundGeolocation.on('error', (error) => {
		  console.log('[ERROR] BackgroundGeolocation error:', error);
		});

		BackgroundGeolocation.on('start', () => {
		  console.log('[INFO] BackgroundGeolocation service has been started');
		});

		BackgroundGeolocation.on('stop', () => {
		  console.log('[INFO] BackgroundGeolocation service has been stopped');
		});

		BackgroundGeolocation.on('authorization', (status) => {
		  console.log('[INFO] BackgroundGeolocation authorization status: ' + status);
		  if (status !== BackgroundGeolocation.AUTHORIZED) {
			// we need to set delay or otherwise alert may not be shown
			setTimeout(() =>
			  Alert.alert('App requires location tracking permission', 'Would you like to open app settings?', [
				{ text: 'Yes', onPress: () => BackgroundGeolocation.showAppSettings() },
				{ text: 'No', onPress: () => console.log('No Pressed'), style: 'cancel' }
			  ]), 1000);
			  }
			});

			BackgroundGeolocation.on('background', () => {
			  console.log('[INFO] App is in background');
			});

			BackgroundGeolocation.on('foreground', () => {
			  console.log('[INFO] App is in foreground');
			});

			BackgroundGeolocation.on('abort_requested', () => {
			  console.log('[INFO] Server responded with 285 Updates Not Required');

			  // Here we can decide whether we want stop the updates or not.
			  // If you've configured the server to return 285, then it means the server does not require further update.
			  // So the normal thing to do here would be to `BackgroundGeolocation.stop()`.
			  // But you might be counting on it to receive location updates in the UI, so you could just reconfigure and set `url` to null.
			});

			BackgroundGeolocation.on('http_authorization', () => {
			  console.log('[INFO] App needs to authorize http requests');
			});

	}
	
	
	beginTracking(){
		BackgroundGeolocation.checkStatus(status => {
		  console.log('[INFO] BackgroundGeolocation service is running', status.isRunning);
		  console.log('[INFO] BackgroundGeolocation services enabled', status.locationServicesEnabled);
		  console.log('[INFO] BackgroundGeolocation auth status: ' + status.authorization);

		  // you don't need to check status before start (this is just the example)
		  if (!status.isRunning) {
			BackgroundGeolocation.start(); //triggers start on start event
			
			//this.props.dispatch(startTracking());
		  }
		  this.props.dispatch(startTracking());
		});
	}
	
	endTracking(){
		console.log('[INFO] endTracking');
		
		//BackgroundGeolocation.removeAllListeners();
		BackgroundGeolocation.stop();
		this.props.dispatch(stopTracking());
	}
	
	componentDidMount() {
		this.configureBgLocation();
	}
	
	//Toggle tracking
	toggleTracking(){
		
		console.log("[TOGGLETRACKING]:", this.props.tracking);
		if(!this.props.tracking){
			this.beginTracking();
			return;
		}
		
		this.endTracking();
	}
	
	render(){
		return (<>
			<ScrollView>
				<View style={{
				}}>	
					<Text style={{textAlign: 'center', fontSize: 18, marginTop: 20}}>Tap button below to start and stop tracking</Text>
				</View>
				
			<View style={{justifyContent: 'center',  alignItems:'center'}}>
			<TouchableOpacity
			   style={{
				   marginTop: '15%',
				   borderWidth:1,
				   borderColor:'rgba(0,0,0,0.2)',
				   alignItems:'center',
				   justifyContent:'center',
				   width:100,
				   //position: 'absolute',                                          
				   bottom: 10,
				   //marginLeft: '35%',
				   
				   //right: 10,
				   height:100,
				   backgroundColor:'#fff',
				   borderRadius:100,
				   textAlign: 'center'
				 }}
				 
				 onPress={() => this.toggleTracking()}
			 >
				{this.props.tracking ? (<Pulse color={Colors.primary} numPulses={3} diameter={200} speed={20} duration={2000}/>
				):(<Icon
					raised
					name={this.props.tracking ? "square-full" : "map-marker"}
					size={40}  
					type='font-awesome-5' 
					//name='heartbeat'
					color={this.props.tracking ? 'green' : Colors.primary }
					/>)}
			 
				
			  </TouchableOpacity>
			  </View>
			  
				<View style={{
				}}>	
					<Text style={{textAlign: 'center', fontSize: 14, marginTop: 10, marginBottom: 10}}>By pressing the above button, you concent to this app collecting your GPS location information</Text>
				</View>

				
				<View>
					
				</View>

					
				<ListItem
					title="UUID"
					leftIcon={{
						type:'font-awesome-5',
						name: 'id-card',
						iconStyle:{color: Colors.primary}
					}}
					//rightTitle={this.testUUID}
					subtitle={this.testUUID}
				/>
				
				<ListItem
					title="Test status"
					//subtitle="Result of last test"
					leftIcon={{
						type:'font-awesome-5',
						name: 'vial',
						iconStyle:{color: Colors.primary}
					}}
					rightTitle="NEGATIVE"
				/>

				
				<ListItem
					title="Collection server"
					chevron={true}
					leftIcon={{
						type:'font-awesome-5',
						name: 'upload',
						iconStyle:{color: Colors.primary}
					}}
					subtitle={this.props.uploadURL}
					onPress={() => this.props.navigation.navigate('ServerSettings')}
				/>
				
				<ListItem
					title="COVID-19 Preventive measures"
					chevron={true}
					leftIcon={{
						type:'font-awesome-5',
						name: 'bug',
						iconStyle:{color: Colors.primary}
					}}
					onPress={() => this.props.navigation.navigate('Prevention')}
				/>
				
					<ListItem
						title="About Project-THEA"
						chevron={true}
						leftIcon={{
							type:'font-awesome-5',
							name: 'info-circle',
							iconStyle:{color: Colors.primary}
						}}
						onPress={() => this.props.navigation.navigate('About')}
						//subtitle="About Project-THEA"
					/>
					
			</ScrollView>

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
  },
  pulse: {
	  position: 'absolute',
	  top: '50%'
  }
});


function mapStateToProps(state) { 
	return {
		tracking: state.tracking.tracking,
		uuid: state.settings.uuid,
		uploadURL: state.settings.uploadURL
	}
}

export default connect(mapStateToProps)(HomeScreen);

