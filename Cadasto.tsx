import React from "react";
import { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

// Define o tipo de props recebidas pelo componente Cadastro.
type CadastroProps = {
    voltarParaLogin: () => void;
};

// Criar um componente Cadastro recebendo a prop voltaParaLogin
function Cadastro({ voltarParaLogin }: CadastroProps) {
    // Armazenar o nome digitado.
    const [nome, setNome] = useState('');
    // Armazenar o email digitado.
    const [email, setEmail] = useState('');
    //Armazenar a senha digitada.
    const [senha, setSenha] = useState('');
    //Opção de mostar mensagem de sucesso ao cadastrar
    const [mensagemSucesso, setMensagemSucesso] = useState('');

    const cadastrar = () => {
        // Simula o salvamento apenas com console.log (sem bd)
        console.log('Dados cadastrados:', { nome, email, senha });
        // Mostrar a mensagem de sucesso na tela
        setMensagemSucesso('Cadastro realizado com sucesso!');
        setNome('');
        setEmail('');
        setSenha('');
    };
    // Retorna a interace a tela de cadastro.
    return (
        // View principal - DIV PAI
        <View style={styles.container}>
            {/* Título da tela */}
            <Text style={styles.titulo}>Cadastro</Text>
            {/* Campo de nome. TxetInput é um componente de entrada de texto */}
            <TextInput
                style={styles.input}
                placeholder="Nome"
                value={nome}
                onChangeText={setNome}
            />
            {/* Email */}
            <TextInput
                style={styles.input}
                placeholder="Email"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
                autoCapitalize="none"
            />
            {/* Senha */}
            <TextInput
                style={styles.input}
                placeholder="Senha"
                value={senha}
                onChangeText={setSenha}
                secureTextEntry
            />
            {/* Botão para cadastrar */}
            <View style={styles.botao}>
                <Button title="Cadastrar" onPress={cadastrar} />
            </View>
            {/* Botão para voltar para o login */}
            <View style={styles.botao}>
                <Button title="Voltar para login" onPress={voltarParaLogin} />
            </View>
            {/* Mostrar mensagem de sucesso, somente quando houver texto */}
            {mensagemSucesso ? (
                <Text style={styles.mensagemSucesso}>{mensagemSucesso}</Text>
            ) : null}
        </View>

    );
}
const styles = StyleSheet.create({
    container: {
        //flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 24,
    },
    titulo: {
        fontSize: 28,
        fontWeight: 'bold',
        marginBottom: 24,
    },
    input: {
        width: '100%',
        borderWidth: 1,
        borderColor: '#cccccccc',
        borderRadius: 8,
        padding: 12,
        marginBottom: 12,

    },
    botao: {
        width: '100%',
        marginTop: 8,

    },
    mensagemSucesso: {
        marginTop: 16,
        color: '#1f7a1f',
        fontWeight: '600',
    },
});
export default Cadastro;