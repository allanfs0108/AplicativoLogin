import React from "react";
import { useState } from "react";
import { SafeAreaView } from "react-native";
import Login from "./Login";
import Cadastro from "./Cadasto";

function App() {

  const [telaAtual, setTelaAtual] = useState<'login' | 'cadastro'>('login');

  const irParaCadastro = () => {
    setTelaAtual('cadastro');
  };

  const voltarParaLogin = () => {
    setTelaAtual('login');
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      {telaAtual === 'login' ? (
        <Login irParaCadastro={irParaCadastro} />
      ) : (
        <Cadastro voltarParaLogin={voltarParaLogin} />
      )}
    </SafeAreaView>
  );
}

export default App;