import { Dimensions, StyleSheet } from "react-native";

export const styles = StyleSheet.create({
	container: {
		flex: 1,
		position: 'relative',
	},

	map: {
		width: Dimensions.get('window').width,
		height: Dimensions.get('window').height
	},

	calloutContainer: {
		width: 120,
		height: 60,
		paddingHorizontal: 16,
		backgroundColor: 'rgba(255, 255, 255, 0.8)',
		borderRadius: 16,
		justifyContent: 'center',

	},
	calloutText: {
		fontFamily: 'Nunito_700Bold',
		color: '#0089a5',
		fontSize: 14,
	},
	footer: {
		position: "absolute",
		left: 24,
		right: 24,
		bottom: 32,

		backgroundColor: '#fff',
		borderRadius: 20,
		height: 56,
		paddingLeft: 24,

		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",

		elevation: 3,

	},
	footerText: {
		fontFamily: 'Nunito_700Bold',
		color: '#363636'
	},
});