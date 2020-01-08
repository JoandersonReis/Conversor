import React, { Component } from "react"
import { View, Text, TextInput, TouchableOpacity } from "react-native"
import api from "../services/api"
import styles from "../styles/styles"

class Dolar extends Component {
    state = {
        text: "",
        dolar: "",
        result: ""
    }

    componentDidMount() {
        this.getApiInfo()
    }

    getApiInfo = async () => {
        const response = await api.get("all/USD-BRL,EUR-BRL")
        const dolar = response.data.USD.high

        this.setState({dolar})
    }
    render() {
        return (
            <View style={styles.container}>
                <TextInput
                    style={styles.input}
                    onChangeText = {(text) => this.setState({text})}
                    placeholder = "Digite um valor em Reais"
                    keyboardType = "numeric"
                />

                <TouchableOpacity
                    style={styles.btn}
                    onPress = {() => {
                        const result = (parseFloat(this.state.text) / parseFloat(this.state.dolar)).toFixed(2)
                        
                        this.setState({result})
                    }}
                >
                    <Text style={styles.btnTxt}>Calcular</Text>
                </TouchableOpacity>

                <Text style={styles.result}>{this.state.result} $</Text>
            </View>
        )
    }
}

export default Dolar