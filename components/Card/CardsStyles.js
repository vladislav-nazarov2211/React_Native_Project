import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    item: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,
        backgroundColor: "#d0d0d0",
        height: 80,
        borderRadius: 10,
        marginBottom: 10
    },
    imgWrapper: {
        height: 60,
        width: 60,
    },
    img: {
        width: "100%",
        height: "100%",
        borderRadius: 10
    },
    description: {
        fontSize: 15
    },
    btns: {
        flexDirection: 'column', 
    },
    heartWrapper: {
        marginBottom: 15
    }

  
});