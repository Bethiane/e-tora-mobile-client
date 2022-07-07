import { StyleSheet,StatusBar } from "react-native";

export const styles = StyleSheet.create({
    container: {
        paddingTop: StatusBar.currentHeight,
    },
    form:{
        marginTop: 40,
        padding:25
    },
    title: {
        fontWeight: 'bold',
        fontSize: 25,
        marginBottom: 20,
        color: '#000',
        // textAlign: 'center',
    },
    splash: {
        height: '100%',
        backgroundColor: '#0B9E8D',
    },
    logo:{
        marginTop: '90%',
        marginLeft: '40%',
        width: '20%',
        height: '10%',
    },
    input: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: '5%',
        borderRadius: 5,
        height: 50,
        padding: '4%',
        borderWidth: 1,
        borderColor: '#ccc',      
    },
    button:{
        alignItems: "center",
        backgroundColor: "#0B9E8D",
        padding: 8,
        borderRadius: 5,
        color: '#fff',
        fontSize: 15,
        fontWeight: 'bold',
    }
});