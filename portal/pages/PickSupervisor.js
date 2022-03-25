import React, { Component } from 'react';
import {

    View,
    Text,
    Picker,
    StyleSheet,
    TouchableOpacity,
    

} from 'react-native';
export default class PickSupervisor extends React.Component {

    constructor(){
        super();
        this.state={
            pickervalue:'',
        }
    }

    render() {
        return (

            <View style={{ flex: 1, justifyContent: 'flex-start' }}>
                <View style={{ flex: 1, justifyContent: 'flex-start' }}>
                    <Picker selectedValue={this.state.pickervalue} onValueChange={(itemvalue,indexitem) =>
                    this.setstate({pickervalue:itemvalue})
                    }>

                        <Picker.Item label="Select Supervisor" />
                        <Picker.Item label="Saad" value="You Selected Saad" />
                        <Picker.Item label="Wasiq" value="wasiq" />
                        <Picker.Item label="Abullah" value="abdullah" />
                        <Picker.Item label="Zahid" value="zahid" />
                        <Picker.Item label="Ikram" value="ikram" />

                    </Picker>
                    <Text style={styles.text}>{this.state.user}</Text>
                    <TouchableOpacity onPress={()=>this.props.navigation.navigate("IdeaSharing")}
                    style={{justifyContent:'center',alignItems:'center'}}>

                        <View style={{ height: 80, width: 300, borderRadius: 30, justifyContent: 'center',alignItems:'center',backgroundColor:'#0099cc' }}>
                            <Text style={{ textAlign: "center", color: "white", fontSize: 30 }}>Select</Text>
                        </View>

                    </TouchableOpacity>
                </View>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    text: {
        fontSize: 30,
        alignSelf: 'center',
        color: 'red'
    }
})