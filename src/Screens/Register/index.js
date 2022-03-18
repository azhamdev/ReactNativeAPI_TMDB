import { View, Text, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { Input, Button } from 'react-native-elements';
import axios from 'axios';
import { Base_Url_Fake } from '../../Helpers/ApiAccess';

export default function Register() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [phone, setPhone] = useState('');

    const postRegister = async () => {
        try
        {
            const body = {
                email: email,
                password: password,
                username: username,
                name: {
                    firstname: firstname,
                    lastname: lastname,
                },
                address: {
                    city: 'kilcoole',
                    street: '7835 new road',
                    number: 3,
                    zipcode: '12926-3874',
                    geolocation: {
                        lat: '-37.3159',
                        long: '81.1496'
                    }
                },
                phone: phone,
            }
            const result = await axios.post(`${Base_Url_Fake}/users`, body)
            console.log(result)
        } catch (error)
        {
            console.log(error)
        }
    }

    return (
        <ScrollView>

            <Input placeholder='Email' onChangeText={(text) => {
                setEmail(text)
            }} />

            <Input placeholder='Password' secureTextEntry={true} onChangeText={(text) => {
                setPassword(text)
            }} />

            <Input placeholder='Username' onChangeText={(text) => {
                setUsername(text)
            }} />

            <Input placeholder='Firstname' onChangeText={(text) => {
                setFirstname(text)
            }} />

            <Input placeholder='Lastname' onChangeText={(text) => {
                setLastname(text)
            }} />

            <Input placeholder='Phone' keyboardType='phone-pad' onChangeText={(text) => {
                setPhone(text)
            }} />


            <Button
                onPress={postRegister}
                title={'Sign Up'}
                containerStyle={{
                    width: 200,
                    marginHorizontal: 50,
                    marginVertical: 10,
                }}
            />
        </ScrollView>
    )
}