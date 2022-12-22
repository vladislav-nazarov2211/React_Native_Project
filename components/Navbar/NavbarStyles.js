import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    header: {
        backgroundColor: '#333333',
        height: 50,
        padding: 5,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },

    logo: {
        color: "#ffffff",
        fontSize: 18
    },

    btn: {
        color: "#ffffff",
        fontSize: 18,
        padding: 5,
        borderWidth: 1,
        borderColor: "#ffffff",
        borderRadius: 10,
    },

    activeBtn: {
        color: "#f9595f",
        fontSize: 18,
        padding: 6,
        borderWidth: 1,
        borderColor: "#f9595f",
        borderRadius: 10,
    }
});