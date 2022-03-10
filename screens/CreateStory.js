import React, { Component } from "react";
import { Text, View, Image, StyleSheet, SafeAreaView, Platform, StatusBar, Dimensions, ScrollView } from "react-native";

import AppLoading from "expo-app-loading";
import * as Font from "expo-font";
import { RFValue } from "react-native-responsive-fontsize";
import DropDownPicker from "react-native-dropdown-picker"

let customFonts = {
	"Bubblegum-Sans": require("../assets/fonts/BubblegumSans-Regular.ttf")
};

export default class CreateStory extends Component {
	constructor(props) {
		super(props);
		this.state = {
			fontsLoaded: false,
			previewImage:"Image_1",
			dropDownHeight:40
		};
	}

	async _loadFontsAsync() {
		await Font.loadAsync(customFonts);
		this.setState({ fontsLoaded: true });
	}

	componentDidMount() {
		this._loadFontsAsync();
	}

	render() {
		if (!this.state.fontsLoaded) {
			return <AppLoading />
		} else {
			let preview_Images={
				"Image_1":require("../assets/story_image_1.png"),
				"Image_2":require("../assets/story_image_2.png"),
				"Image_3":require("../assets/story_image_3.png"),
				"Image_4":require("../assets/story_image_4.png"),
				"Image_5":require("../assets/story_image_5.png"),
			}
			return(
			<View style={styles.container}>
				<SafeAreaView style={styles.droidSafeArea} />
				<View style={styles.appTitle}>
					<View style={styles.appIcon}>
						<Image
							source={require("../assets/logo.png")}
							style={styles.iconImage}
						></Image>
					</View>
					<View style={styles.appTitleTextContainer}>
						<Text style={styles.appTitleText}>New Story</Text>
					</View>

				</View>

				<View style={styles.fieldsContainer}>
                  <ScrollView>
					  <Image
					  source={preview_Images[this.state.previewImage]}
					  style={styles.previewImage}
					  >
					  </Image>
					  <View style={{height:RFValue(this.state.dropDownHeight)}}>
                       <DropDownPicker
					   items={[
						   {label:"Image-1",value:"Image_1"},
						   {label:"Image-2",value:"Image_2"},
						   {label:"Image-3",value:"Image_3"},
						   {label:"Image-4",value:"Image_4"},
						   {label:"Image-5",value:"Image_5"}
					   ]}
					   defaultValue={this.state.previewImage}
					   containerStyle={{height:40,borderRadius:20}}
					   onOpen={()=>{
						   this.setState({dropDownHeight:170})
					   }}
					   onClose={()=>{
						this.setState({dropDownHeight:40})
					}}
					   >

					   </DropDownPicker>
					  </View>
				  </ScrollView>
				</View>

			</View>)
		}
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#15193c"
	},
	droidSafeArea: {
		marginTop: Platform.OS === "android" ? StatusBar.currentHeight : RFValue(35)
	},
	appTitle: {
		flex: 0.07,
		flexDirection: "row"
	},
	appIcon: {
		flex: 0.3,
		justifyContent: "center",
		alignItems: "center"
	},
	iconImage: {
		width: "100%",
		height: "100%",
		resizeMode: "contain"
	},
	appTitleTextContainer: {
		flex: 0.7,
		justifyContent: "center"
	},
	appTitleText: {
		color: "white",
		fontSize: RFValue(28),
		fontFamily: "Bubblegum-Sans"
	},
	fieldsContainer: {
		flex: 0.85
	  },
	  previewImage: {
		width: "93%",
		height: RFValue(250),
		alignSelf: "center",
		borderRadius: RFValue(10),
		marginVertical: RFValue(10),
		resizeMode: "contain"
	  },
	  inputFont: {
		height: RFValue(40),
		borderColor: "white",
		borderWidth: RFValue(1),
		borderRadius: RFValue(10),
		paddingLeft: RFValue(10),
		color: "white",
		fontFamily: "Bubblegum-Sans"
	  },
	  inputFontExtra: {
		marginTop: RFValue(15)
	  },
	  inputTextBig: {
		textAlignVertical: "top",
		padding: RFValue(5)
	  }
	
})