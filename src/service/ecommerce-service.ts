import axios from "../config/axios";
import User from '../model/User';
import Product from '../model/Product';


export async function login(login: string, password: string): Promise<any> {
    try {
        const response = await axios.post('/user/login', { login, password });
        return response.data;
    } catch (error) {
        console.error(error);
        console.error('Error authentication');
        return null;
    }
}

export async function saveUser(user: User) : Promise<any> {
    try {
        const response = await axios.post('/user/customer/add', user);
        return response.data;
    } catch (error) {
        console.error(error);
        console.error('Error ao cadastrar o usuario');
        return null;
    }
}

export async function listProducts(): Promise<Product[]> {
    try {
        const response = await axios.get('/product/list');
        return response.data;
    } catch (error) {
        console.error(error);
        return [];
    }
}