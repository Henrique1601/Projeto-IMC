// // Ids usadas
// // Form-container
// // Altura
// // Peso
// //btn = calcular
// // btn =  limpar
// //generater-table
// //imc-info
// //sit-info
// //class-info

// // Seleção de elementos
// const alturaInput = document.getElementById('altura');
// const pesoInput = document.getElementById('peso');
// const calcButton = document.getElementById('calcular');
// const limpButton = document.getElementById('limpar');
// const voltarButton = document.getElementById('voltar');
// const titulostable = document.getElementById('Titulos-table');
// const resultado = document.getElementById('resultado-container');
// const calculadora = document.getElementById('calculadora-container')


// // Função para calcular IMC
// document.getElementById('calcular').addEventListener('click','enter' , function (){

//   const peso = parseFloat(pesoInput.value.replace(' ,', '.'));
//   const altura = parseFloat(alturaInput.value.replace(' ,', '.'));

//   //Verificador de valores
//   if(isNaN(peso) || isNaN(altura) || peso <= 0 || altura <= 0) {
//     alert('Por favor, inserir valores válidos')    
//       return;
//     }

//     //Calcular o IMC
//     const imc = peso / (altura * altura);

//     ///Exibir os resultados
//     document.getElementById('imc-info').querySelector('span').textContent = imc.toFixed(2)
//     document.getElementById('class-info').querySelector('span').textContent = getClassificationIMC(imc)

//     //Mostra a seção de resultado
//     TitulosTable.style.display = "block" ;
//     resultadoContainer.style.display = "block" ;
//     calculadoraContainer.style.display = "none";

//   })

//   //Função para classificar o IMC
//   function getClassificationIMC(imc) {
//     if (imc < 18.5) return "Magreza"
//     if (imc < 24.9) return "Peso normal";
//     if (imc < 29.9) return "Sobrepeso";
//     if (imc < 34.9) return "Obesidade Grau 1";
//     if (imc < 39.9) return "Obesidade Grau 2";
//     return "Obesidade Grau 3";
//   }


//   //Função para limpar os campos
//   document.getElementById('limpar').addEventListener('click','delete', function (e){
//     e.preventDefault();
//     limpar();
//     document.getElementById('form-container').style.display = 'block'
//     document.getElementById('Titulos-table').style.display = "none"
//     document.getElementById('resultado-container').style.display = "none"
//     document.getElementById('calculadora-container').style.display = "block"
//     document.getElementById('sit-info').querySelector('span').textContent = ''
//     document.getElementById('calculadora-container').style.display = 'block'
//     document.getElementById('sit-info').querySelector('span').textContent = ''
//     document.getElementById('calculadora-container').style.display = 'block'

//   })

//   // função para voltar
//   document.getElementById('voltar').addEventListener('click', function(a) {
//     a.preventDefault();
//     limpar();
//     document.getElementById('form-container').style.display = 'block'
//     document.getElementById('resultado-container').style.display = 'none'
//   })


//   // Adicionar eventos
//   calcularButton.addEventListener('click', calcularIMC);  
//   limparButton.addEventListener('click', limpar);     
//   voltarButton.addEventListener('click', voltar);


// // Capturar evento "Enter" nos campos de input
// alturaInput.addEventListener('keypress', function (e) {
//   if (e.key === 'Enter') {
//       calcularIMC();
//   }
// });

// pesoInput.addEventListener('keypress', function (e) {
//   if (e.key === 'Enter') {
//       calcularIMC();
//   }
// });










  
//   // function limpar() {
//   //   document.getElementById('peso').value = ''
//   //   document.getElementById('altura').value = ''
//   //   document.getElementById('imc-info').querySelector('span').textContent = ''
//   //   document.getElementById('class-info').querySelector('span').textContent = ''
//   //   document.getElementById('Titulos-table').style.display = "none"
//   //   document.getElementById('resultado-container').style.display = "none"
//   //   document.getElementById('calculadora-container').style.display = "block"
//   // }





//Ajuda com DeepSeek/ erros resolvidos por mim 
// Seleção de elementos
const alturaInput = document.getElementById('Altura');
const pesoInput = document.getElementById('Peso');
const calcularButton = document.getElementById('calcular');
const limparButton = document.getElementById('limpar');
const voltarButton = document.getElementById('voltar');
const titulosTable = document.getElementById('Titulos-table');
const resultadoContainer = document.getElementById('resultado-container');
const calculadoraContainer = document.getElementById('calculadora-container');
const tableresultados = document.getElementById('table-resultados');


const Obesidade = document.querySelector('#Obesidade-info span');
const ImcInfo = document.querySelector('#imc-info span');
const classInfoSpan = document.querySelector('#class-info span');

// Função para calcular IMC
function calcularIMC() {
    const peso = parseFloat(pesoInput.value.replace(',', '.'));
    const altura = parseFloat(alturaInput.value.replace(',', '.'));

    // Verificador de valores
    if (isNaN(peso) || isNaN(altura) || peso <= 0 || altura <= 0) {
        alert('Por favor, insira valores válidos para peso e altura.');
        return;
    }

    // Calcular o IMC
    const imc = peso / (altura * altura);


    // Exibir os resultados
    // document.getElementById('imc-info').querySelector('span').textContent = getClassificationIMC(imc);
    // document.getElementById('sit-info').querySelector('span').textContent = getClassificationIMC(imc);
    // document.getElementById('class-info').querySelector('span').textContent = getClassificationIMC(imc);
    document.getElementById('Imc-info').querySelector('span').textContent = imc.toFixed(2);
    document.getElementById('Sit-atual').querySelector('span').textContent = getClassificationIMC(imc);
    


    // Mostrar a seção de resultado
    // Exibir a classificação no #class-info (se o span existir)
  if (classInfoSpan) {
    //   classInfoSpan.textContent = getClassificationIMC(imc);
    classInfoSpan.textContent = `
    Magreza
    Peso normal
    Sobrepeso
    Obesidade Grau 1
    Obesidade Grau 2
    Obesidade Grau 3
    `
    ;
  }
  
    if (ImcInfo) {
        ImcInfo.innerHTML = `Menor que 18,5 
        <br>
        Entre 18,5 e 24,9
        <br>
        Entre 25 e 29,9
        <br>
        Entre 30 e 34,9
        <br>
        Maior que 35 `;
    }

    if (Obesidade) {
        Obesidade.innerHTML = "0<br>0<br>I<br>II<br>III";
        }

    // Mostrar a seção de resultado
    titulosTable.style.display = "block";
    tableresultados.style.display = "block";
    resultadoContainer.style.display = "block";
    calculadoraContainer.style.display = "none";
    ImcInfo.style.display = "block";
    Obesidade.style.display = "block";
    classInfoSpan.style.display = "block";
    resultadoContainer.style.height="350px"
    

}

    // Função para classificar o IMC
    function getClassificationIMC(imc) {
        if (imc < 18.5) return "Magreza";
        if (imc < 24.9) return "Peso normal";
        if (imc < 29.9) return "Sobrepeso";
        if (imc < 34.9) return "Obesidade Grau 1";
        if (imc < 39.9) return "Obesidade Grau 2";
        return "Obesidade Grau 3";
        
    }

// Função para limpar os campos
function limpar() {
    alturaInput.value = '';
    pesoInput.value = '';


    document.getElementById('Imc-info').querySelector('span').textContent = '';
    // document.getElementById('sit-info').querySelector('span').textContent = '';
    document.getElementById('class-info').querySelector('span').textContent = '';
    document.getElementById('imc-info').querySelector('span').textContent = '';
    document.getElementById('Sit-atual').querySelector('span').textContent = '';
    document.getElementById('Obesidade-info').querySelector('span').textContent = '';

   // Limpar a classificação no #class-info (se o span existir)
//    if (classInfoSpan) {
//        classInfoSpan.textContent = '';    
//     }
//     if(ImcInfo) {
//         ImcInfo.textContent = '';
//     }
//     if(Obesidade) {
//         Obesidade.textContent = '';
//     }
   
   Obesidade.style.display = 'none';
   ImcInfo.style.display = 'none';
   classInfoSpan.style.display = 'none';
   titulosTable.style.display = "none";
   resultadoContainer.style.display = "none";
   calculadoraContainer.style.display = "block";

  }

// Função para voltar à calculadora
function voltar() {
    limpar();
}

// Adicionar eventos
calcularButton.addEventListener('click', calcularIMC);
limparButton.addEventListener('click', limpar);
voltarButton.addEventListener('click', voltar);


// Capturar evento "Enter" nos campos de input
alturaInput.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        calcularIMC();
    }
});

pesoInput.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        calcularIMC();
    }
});
