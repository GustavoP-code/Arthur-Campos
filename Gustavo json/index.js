function Salvar(){
    const nome = prompt("nome");
    const nota1Txt = prompt("nota1");
    const nota2Txt = prompt("nota2");
    const turma = prompt("turma");
    const periodo = prompt("periodo");
   
//VALIDACAO
//TRATAMNTO DE DADOS
    const nota1 = Number (nota1Txt);
    const nota2 = Number (nota2Txt);
    const media = Number (nota1+nota2)/2

let aluno = {
    "nome": nome,
    "nota1bim": nota1,
    "nota2bim": nota2,
    "turma": turma,
    "periodo": periodo,
    "media": media,
    "aprovado": true,

    
} ;

console.log (aluno);

}

function BuscarAlunos(){
    axios.get('/alunos.json')
  .then(function (response) {
    console.log(response.data);
    const alunos = response.data;
    console.log("--for");
    // FOR (INICIO;CONDIÇÃO;INCREMENTO)
    for(let i = 0;i<alunos.length;i++){
        console.log(alunos[i].nome);
        console.log((alunos[i].nota1bim+alunos[i].nota2bim)/2);
    }
    console.log("--forEach");
    alunos.forEach(aluno =>{
        console.log(aluno.nome);
        console.log((aluno.nota1bim+aluno.nota2bim)/2);
    });
  })
  .catch(function (error) {
    console.log(error);
  })
}

function BuscarCEP(){
    const cep = prompt("CEP");

    
    axios.get(`https://brasilapi.com.br/api/cep/v2/${cep}`)
    .then(function (response) {
    console.log(response.data);
      console.log(response.data);
      inputRua.value = response.data.street;
      const CEP = document.getElementById(CEP)
      


  })
  .catch(function (error) {
    console.log(error);
  })
}