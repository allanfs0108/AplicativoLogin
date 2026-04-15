import React from "react";
import { useState } from "react";
import {
    Alert,
    Button,
    StyleSheet,
    Text,
    TextInput,
    View,
    KeyboardAvoidingView,
    Platform
} from "react-native";

type LoginProps = {
    irParaCadastro: () => void;
};

function Login({ irParaCadastro }: LoginProps) {

    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [mensagem, setMensagem] = useState('');

    const entrar = () => {
        if (!email || !senha) {
            setMensagem("Preencha todos os campos");
            return;
        }
        console.log('Tentando login com:', { email, senha });
        Alert.alert('Login', 'Botão entrar clicado com sucesso!');
        setMensagem(`Bem-vindo(a)! Email: ${email}`);
        // resto da lógica de login
    }

    return (
        <KeyboardAvoidingView
            style={{ flex: 1 }}
            behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
            <View style={styles.container}>

                <Text style={styles.titulo}>
                    Bem vindo ao <Text style={styles.tituloAzul}>LOGIN</Text>
                </Text>

                <TextInput
                    style={styles.input}
                    placeholder="Email"
                    value={email}
                    onChangeText={setEmail}
                />

                <TextInput
                    style={styles.input}
                    placeholder="Senha"
                    value={senha}
                    onChangeText={setSenha}
                    secureTextEntry
                />

                <View style={styles.botao}>
                    <Button title="ENTRAR" onPress={entrar} color="#3b82f6" />
                </View>

                <View style={styles.botao}>
                    <Button title="Ir para Cadastro" onPress={irParaCadastro} color="#94a3b8" />
                </View>

                {mensagem ? <Text style={styles.mensagem}>{mensagem}</Text> : null}
            </View>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 24,
        backgroundColor: '#eef2ff',
    },
    titulo: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 8,
        color: '#1e293b',
    },
    tituloAzul: {
        color: '#3b82f6',
    },
    subtitulo: {
        fontSize: 13,
        color: '#64748b',
        marginBottom: 24,
        textAlign: 'center',
    },
    input: {
        width: '100%',
        maxWidth: 320,
        borderWidth: 1,
        borderColor: '#e2e8f0',
        borderRadius: 14,
        padding: 14,
        marginBottom: 14,
        backgroundColor: '#ffffff',

    },
    botao: {
        width: '100%',
        maxWidth: 320,
        marginTop: 6,
        borderRadius: 14,
        overflow: 'hidden',
    },
    mensagem: {
        marginTop: 16,
        textAlign: 'center',
        color: '#16a34a',
    },
});

export default Login;