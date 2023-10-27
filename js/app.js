$(function () {
  $('[data-toggle="tooltip"]').tooltip()
});

function buscarCEP() {
  const cep = document.getElementById('inputCEP')
  if (cep.value.length === 8) {
      const url = `https://viacep.com.br/ws/${cep.value}/json/`;
      
      fetch(url)
        .then(response => response.json())
        .then(data => {
          const inputs = getInputsAddress()
          inputs.rua.value = `${data.logradouro} ${data.complemento}, ${data.bairro}`
          inputs.cidade.value = data.localidade
          inputs.estado.value = data.uf
            console.log(data);
      })
      .catch(error => {
            console.error('Ocorreu um erro ao buscar o CEP: ' + error);
      });
  }
}
function getInputsAddress(){
  return({
    rua:document.getElementById('inputEndereco'),
    cidade:document.getElementById('inputCidade'),
    estado:document.getElementById('inputEstados')
  })
}
function formSubmit (form){
  form.eventPreventDefault()
  console.log(form)
}