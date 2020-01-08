import React from "react"
import { StyleSheet } from "react-native"


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },

    input: {
        padding: 50,
        fontSize: 23,
        marginLeft: 0,
        color: "#999"
    },

    btn: {
        backgroundColor: "#2ecc71",
        padding: 20,
        borderRadius: 5,
        
    },

    btnTxt: {
        color: "#fff",
        fontWeight: "bold",
        fontSize: 20
    },

    result: {
        marginTop: 20,
        fontSize: 30
    }
})

export default styles
