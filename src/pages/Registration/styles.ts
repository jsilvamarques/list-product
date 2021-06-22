import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    input: {
        width: 350,
        height: 55,
        backgroundColor: '#ff66c4',
        margin: 10,
        padding: 8,
        color: 'white',
        borderRadius: 14,
        fontSize: 18,
        fontWeight: '500',
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
    },
    appButtonContainer: {
        width: 120,
        backgroundColor: '#23238E',
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 12,
        marginBottom: 12,
    },
    appButtonText: {
        fontSize: 14,
        color: '#FFFFFF',
        fontWeight: 'bold',
        alignSelf: 'center',
        textTransform: 'uppercase',
    },
});
