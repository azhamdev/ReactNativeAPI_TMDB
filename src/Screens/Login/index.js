import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { Input, Button } from 'react-native-elements';

export default function Login({ navigation }) {
    return (
        <View>
            <Input
                placeholder='Username'
            />
            <Input
                placeholder='Password'
            />
            <Button
                title={'Sign In'}
                containerStyle={{
                    width: 200,
                    marginHorizontal: 50,
                    marginVertical: 10,
                }}
            />
            <TouchableOpacity onPress={() => navigation.navigate("Register")}>
                <Text>
                    Don't have account yet ? Register Now
                </Text>
            </TouchableOpacity>
        </View>
    )
}