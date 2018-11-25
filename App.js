/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TextInput, Button} from 'react-native';

const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
    android:
        'Double tap R on your keyboard to reload,\n' +
        'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
    constructor(props) {
        super(props);
        this.state = {
            num1: 0,
            num2: 0,
            result: 0
        }
    }

    render() {
        return (
            <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center', height: '100%'}}>
                <View stylw={{flex: 1}}>
                    <TextInput
                        style={{height: 40, width: '100%'}}
                        onChangeText={(text) => {
                            this.state.num1 = parseInt(text);
                        }}
                        placeholder='number 1'
                    />
                    <TextInput
                        style={{height: 40, width: '100%'}}
                        onChangeText={(text) => {
                            this.state.num2 = parseInt(text);
                        }}
                        placeholder='number 2'/>
                </View>
                <View stylw={{flex: 1}}>
                    <Button title='+'
                            onPress={() => {
                                let temp = this.state.num1 + this.state.num2;
                                this.setState({result: temp});
                            }}/>
                    <Button title='-'
                            onPress={() => {
                                let temp = this.state.num1 - this.state.num2;
                                this.setState({result: temp});
                            }}/>
                    <Button title='*'
                            onPress={() => {
                                let temp = this.state.num1 * this.state.num2;
                                this.setState({result: temp});
                            }}/>
                    <Button title='/'
                            onPress={() => {
                                let temp = this.state.num1 / this.state.num2;
                                this.setState({result: temp});
                            }}/>
                </View>
                <View stylw={{flex: 1}}>
                    <Text>
                        {this.state.result}
                    </Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});
