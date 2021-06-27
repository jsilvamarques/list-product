import React, { useState } from 'react';
import { styles } from './styles';
import {Text, View, TouchableOpacity, Alert } from 'react-native';
import { ActivityIndicator, Colors } from 'react-native-paper';

import { login } from '../../service/ecommerce-service';

import Input from '../../components/Input';

import { useNavigation } from '@react-navigation/core';

import { isEmailValid, validateField } from '../../util/validations';


export default function LoginPage() {

    const navigation = useNavigation();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    function openRegistration(): void {
        navigation.navigate('Registration');
    }

    async function loginHandle(): Promise<any> {
        setIsLoading(true);

        if (!isEmailValid(email)) {
            Alert.alert(
                'E-mail inválido',
                'E-mail informado não é válido'
            );
            setIsLoading(false);

            return;
        }

        if (!validateField(password, 'Informe a senha')) {
            setIsLoading(false);
            return;
        }

        login(email, password).then((result) => {
            setIsLoading(false);
            if (!result) {
                setIsLoading(false);
                Alert.alert('Erro!', 'E-mail ou Senha Inválidos!\nTente novamente.');
                return;
            }

            navigation.navigate('ListProducts');
                
            }).catch((error) => {
                console.error(error);
                Alert.alert('Error authentication:', 'Erro ao tentar logar.');
            });   
        }

    return (
        <View style={styles.container}>
            <Input
                label="E-mail"
                value={email}
                onChange={setEmail}
                keyboardType="email-address"
            />

            <Input
                label="Senha"
                value={password}
                onChange={setPassword}
                isPassword
            />

            {!isLoading ? (
                <View>
                    <TouchableOpacity style={styles.appButtonContainer} onPress={loginHandle} >
                        <Text style={styles.appButtonText}>Login</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.appButtonContainer} onPress={openRegistration} >
                        <Text style={styles.appButtonText}>Registrar</Text>
                    </TouchableOpacity>
                </View>
            ) : (
                <View>
                    <ActivityIndicator
                        animating={isLoading}
                        size="large"
                        color="#CCFFFF"
                    />
                </View>
            )}
        </View>
    );
}
