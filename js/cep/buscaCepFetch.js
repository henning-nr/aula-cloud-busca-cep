// PEGANDO COM FETCH
    async function buscaCepFetch() {
      let cep = document.querySelector("input").value
      console.log("buscando cep", cep)
      
      let url = await "https://viacep.com.br/ws/" + cep + "/json/"
      let url2 = await `https://viacep.com.br/ws/${cep}/json/`

      // usando fetch

      fetch(url)
        .then((res) => {
          console.log('resposta aqui', res)
          return res.json()
        })
        .then((dados) => {
          console.log(dados.logradouro)
          
          // Verificar se houve erro na consulta
          if (dados.erro) {
            // Registrar erro no log
            salvarLog('CEP', { cep: cep }, 'CEP não encontrado', 'erro');
            alert('CEP não encontrado!');
            return;
          }
          
          // Atualizar interface
          document.querySelector("#dadoRua").innerText = dados.logradouro
          document.querySelector("#dadoBairro").innerText = dados.bairro
          document.querySelector("#dadoCidade").innerText = dados.localidade
          document.querySelector("#dadoEstado").innerText = dados.uf
          
          // Registrar sucesso no log
          salvarLog('CEP', { cep: cep }, {
            logradouro: dados.logradouro,
            bairro: dados.bairro,
            localidade: dados.localidade,
            uf: dados.uf
          }, 'sucesso');
        })
        .catch((error) => {
          console.error('Erro na consulta:', error);
          // Registrar erro no log
          salvarLog('CEP', { cep: cep }, 'Erro na consulta: ' + error.message, 'erro');
          alert('Erro ao buscar CEP. Verifique sua conexão.');
        })
    }