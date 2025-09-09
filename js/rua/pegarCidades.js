 function pegarCidades() {
      uf = document.querySelector("#estado").value
      selectCidade = document.querySelector("#cidade")
      let urlCidade = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${uf}/municipios`

      fetch(urlCidade)
        .then((res) => {
          return res.json()
        })
        .then((cidades) => {
          console.log(cidades)

          let cidadesList = '<option value="" disabled selected>Escolha uma Cidade</option>'
          for (let i = 0; i < cidades.length; i++) {
            cidadesList += `<option value="${cidades[i].nome}">${cidades[i].nome}</option>`;
          }
          selectCidade.innerHTML = cidadesList
        })
    }