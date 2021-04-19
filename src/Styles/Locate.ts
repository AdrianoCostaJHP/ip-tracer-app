import { Dimensions, StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative'

    },
    logoImage: {
        width: 100,
        height: 100,
        borderRadius: 50,
        marginBottom: 35,
    },

    label: {
        color: '#FFF',
        fontSize: 16
    },
    inputIP: {
        backgroundColor: '#fff',
        color: 'black',
        borderRadius: 20,
        fontSize: 16,

        maxHeight: 80,
        maxWidth: 320,
        height: 40,
        width: Dimensions.get('window').width,

        paddingLeft: 24,
        textAlign: 'center',
        elevation: 3,
        margin: 20,
    },
    Button: {
        maxHeight: 80,
        maxWidth: 200,
        width: 130,
        height: 50,
        backgroundColor: "#CB0162",
        padding: 10,

        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10,
    },
    textButton: {
        color: "#FFF",
        fontSize: 18,
        fontFamily: 'Nunito_700Bold',
    },

    themeButton: {
        width: 50,
        height: 50,
        alignItems:"center",
        justifyContent: "center",
        borderRadius: 50,
        backgroundColor: "#000",
        borderWidth: 2,
        borderColor: "#FFF",

        position: 'absolute',
        top: 0,
        right: 0,
        marginTop: 100,
        marginRight: 20,
        
    }
});