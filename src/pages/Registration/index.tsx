import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Alert } from 'react-native';

import Input from '../../components/Input';
import { styles } from './styles';
import User from '../../model/User';
import { saveUser } from '../../service/ecommerce-service';
import LoginPage from '../Login';
import { useNavigation } from '@react-navigation/core';

export default function Registration() {

    const navigation = useNavigation();

    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [address, setAddress] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    function openLogin(): void {
        navigation.navigate('Login');
    }

    function onSubmit(): void {

        let user: User = {
            name: name,
            age: parseInt(age),
            address: address,
            email: email,
            userPassword: password,
        };

        saveUser(user)
            .then((result) => {
                if (!result) {
                    Alert.alert('Erro!!','Erro ao cadastro.');
                    return;
                }
                Alert.alert('OK', 'Registro efetuado');
                openLogin();
            })
            .catch((error) => {
                Alert.alert('Erro','Erro ao cadastro.');
            });
    }
       

    return (
        <View style={styles.container}>
            <Input label="Nome Completo" value={name} onChange={setName} />
            <Input label="Idade" value={age} onChange={setAge} />
            <Input label="E-mail" value={email} onChange={setEmail} />
            <Input label="Senha" value={password} onChange={setPassword} />
            <Input label="Endereço" value={address} onChange={setAddress}/>

            <TouchableOpacity style={styles.appButtonContainer} onPress={onSubmit}>
                <Text style={styles.appButtonText}>Cadastrar</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.appButtonContainer} >
                <Text style={styles.appButtonText} onPress={openLogin}>Cancelar</Text>
            </TouchableOpacity>
        </View>
    );

}