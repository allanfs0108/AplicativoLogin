import React from "react";
import { useState } from "react";
import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  View,
  KeyboardAvoidingView,
  Platform
} from 'react-native';

type CadastroProps = {
    voltarParaLogin: () => void;
};

function Cadastro({ voltarParaLogin }: CadastroProps) {

    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [mensagemSucesso, setMensagemSucesso] = useState('');

    const cadastrar = () => {
        console.log('Dados cadastrados:', { nome, email, senha });
        setMensagemSucesso('Cadastro realizado com sucesso!');
        setNome('');
        setEmail('');
        setSenha('');
    };

    return (
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <View style={styles.container}>

            <Text style={styles.titulo}>Cadastro</Text>

            <TextInput
                style={styles.input}
                placeholder="Nome"
                value={nome}
                onChangeText={setNome}
            />

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
                <Button title="Cadastrar" onPress={cadastrar} color="#3b82f6" />
            </View>

            <View style={styles.botao}>
                <Button title="Voltar para login" onPress={voltarParaLogin} color="#94a3b8" />
            </View>

            {mensagemSucesso ? (
                <Text style={styles.mensagemSucesso}>{mensagemSucesso}</Text>
            ) : null}

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
        backgroundColor: '#f8fafc',
    },
    titulo: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        color: '#1e293b',
    },
    input: {
        width: '100%',
        maxWidth: 320,
        borderWidth: 1,
        borderColor: '#e2e8f0',
        borderRadius: 14,
        padding: 14,
        marginBottom: 12,
        backgroundColor: '#ffffff',
    },
    botao: {
        width: '100%',
        maxWidth: 320,
        marginTop: 6,
        borderRadius: 14,
        overflow: 'hidden',
    },
    mensagemSucesso: {
        marginTop: 16,
        color: '#16a34a',
        fontWeight: '600',
    },
});

export default Cadastro;