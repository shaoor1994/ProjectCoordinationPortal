import React, { Component } from 'react';
import {

    Text,
    TextInput,
    TouchableOpacity,
    View

} from 'react-native'

export default class UploadTask extends React.Component {


    state = {
        idea: ''
    }

    render() {
        return (

            <View style={{ flex: 1, justifyContent: 'space-between', alignItems: 'center' }}>

                <View
                    style={{ flex: 1, justifyContent: 'flex-start', alignItems: 'center' }}
                >
                    <TextInput
                        style={{
                            width: 350,
                            height: 350,
                            backgroundColor: 'rgba(255, 255,255,0.5)',
                            margin: 20,
                            //Text:'center',
                            // paddingRight: 20,
                            //paddingRight: 10,
                            borderWidth: 0.9,
                            color: 'white',
                            borderRadius: 20,
                            fontSize: 18,
                            fontWeight: '500',
                            textAlign: 'center',

                        }}
                        placeholder="Please Upload Task Here"
                        autoCapitalize="none"
                        placeholderTextColor='black'
                        onChangeText={val => this.onChangeText('idea', val)}
                    />


                </View>

                <View

                    style={{ flex: 1, justifyContent: 'space-around' }}
                >
                    <TouchableOpacity
                        style={{ alignItems: 'center' }}
                    >

                        <View style={{ height: 80, width: 300, borderRadius: 30, justifyContent: 'center', alignItems: 'center', backgroundColor: '#0099cc' }}>
                            <Text style={{ textAlign: "center", color: "white", fontSize: 30 }}>Assign</Text>
                        </View>

                    </TouchableOpacity>

                </View>

            </View>




        );
    }
}