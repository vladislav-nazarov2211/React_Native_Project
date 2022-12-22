import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    item: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,
        backgroundColor: "#d0d0d0",
        height: 160,
        borderRadius: 10,
        marginBottom: 10,
        marginTop: 10,
        marginLeft: 5,
        marginRight: 5
    },

    imgWrapper: {
        height: 100,
        width: 100,
    },

    img: {
        width: "100%",
        height: "100%",
        borderRadius: 10
    },

    description: {
        fontSize: 15
    },
    
    loader: {
        flex: 1,
        justifyContent: "center"
    },

    image: {
        flex: 1,
    },
});