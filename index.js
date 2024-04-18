


console.log("ABRIU A PAGINA")

function processarSoma(){
     console.log("....... PROCESSAR SOMA.....")

     // Entrada de dados
     // Pegar os valores dos inputs da tela, com DOM
     const numeroUm = Number(document.getElementById("inputNumeroUm").value)
     const numeroDois = Number(document.getElementById("inputNumeroDois").value)
    
     

     // Processamento
     // Chamar função que soma dois numeros
     const resultado = somaDoisNumeros(numeroUm, numeroDois)
     

     // Saída de dados
     // Mostrar o resultado na tela, com DOM
     document.getElementById("resultadoSoma").innerText = resultado
}

async function processarPokemon(){
    console.log("....... PROCESSAR POKEMON.....")

    // Entrada de dados
     // Pegar os valor dos input da tela, com DOM
     const idPokemon = document.getElementById("idPokemon").value
     
    
     

     // Processamento
     // Chamar função que busca os dados em uma API
     const baseURL = "https://pokeapi.co/api/v2/pokemon"
     const Pokemon = await buscarDados(baseURL, idPokemon)
     console.log(Pokemon)
     

     // Saída de dados
     // Mostrar o resultado na tela, com DOM
     
}