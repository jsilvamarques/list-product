import React, { useState } from 'react';
import { styles } from './styles';
import {Text, View, TouchableOpacity, ActivityIndicator, Alert } from 'react-native';

import { login } from '../../service/ecommerce-service';

import Input from '../../components/Input';



export default function LoginPage({ navigation }: any) {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    function openRegistration(): void {
        navigation.reset({
            index: 0,
            routes: [{ name: 'Registration' }],
        });
    }

    async function loginHandle(): Promise<any> {
      setIsLoading(true);

      login(email, password).then((result) => {
        setIsLoading(false);
        if (!result) {
            setIsLoading(false);
                Alert.alert('Erro!', 'E-mail ou Senha Inválidos!\nTente novamente.');
                return;
            }

            navigation.reset({
                index: 0,
                routes: [{ name: 'ListProducts' }],
            });
            
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
                        color="#FFFFFF"
                    />
                </View>
            )}
        </View>
    );
}
