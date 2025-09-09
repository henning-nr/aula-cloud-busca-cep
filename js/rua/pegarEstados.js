function pegarEstados() {
      selectEstado = document.querySelector("#estado")
      let urlEstado = "https://servicodados.ibge.gov.br/api/v1/localidades/estados"

      fetch(urlEstado)
        .then((res) => {
          return res.json()
        })
        .then((estados) => {
          console.log(estados)

          let estadosList = '<option value="" disabled selected>Escolha um Estado</option>'
          for (let i = 0; i < estados.length; i++) {
            estadosList += `<option value="${estados[i].sigla}">${estados[i].nome}</option>`;
          }
          selectEstado.innerHTML = estadosList

          
        })
    }
    pegarEstados()
