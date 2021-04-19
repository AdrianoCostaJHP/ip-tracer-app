import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        padding: 16,
        backgroundColor: '#f9fafc',
        borderBottomWidth: 1,
        borderColor: '#dde3f0',

        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },

    darkContainer: {
        padding: 16,
        backgroundColor: '#212121',
        borderBottomWidth: 1,
        borderColor: '#dde3f0',

        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    title: {
        fontFamily: 'Nunito_600SemiBold',
        color: '#363636',
        fontSize: 16,
    },
    darkTitle: {
        fontFamily: 'Nunito_600SemiBold',
        color: '#fff',
        fontSize: 16,
    }


});