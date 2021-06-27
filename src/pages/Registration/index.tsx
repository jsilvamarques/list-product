import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Alert } from 'react-native';

import Input from '../../components/Input';
import { styles } from './styles';
import User from '../../model/User';
import { saveUser } from '../../service/ecommerce-service';
import LoginPage from '../Login';
import { useNavigation } from '@react-navigation/core';
import { isEmailValid, validateField, validateAge } from '../../util/validations';


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


        if (!validateField(name, 'Informe seu nome')) {
            return;
        }
        if (!validateField(age, 'Informe sua idade') || !validateAge(age, "Idade deve ser igual ou maior que 18") ) {
            return;
        }
          
        if (!validateField(email, 'Informe seu e-mail')) {
            return;
        }
        if (!isEmailValid(email)) {
            Alert.alert(
                'E-mail inválido',
                'O endereço de e-mail informado não é válido'
            );
            return;
        }
        
        if (!validateField(password, 'Escolha uma senha')) {
            return;
        }

        if (!validateField(address, 'Informe seu endereço')) {
            return;
        } 

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
            <Input label="Idade" value={age} onChange={setAge} keyboardType="number-pad"/>
            <Input label="E-mail" value={email} onChange={setEmail} keyboardType="email-address"/>
            <Input label="Senha" value={password} onChange={setPassword} isPassword/>
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