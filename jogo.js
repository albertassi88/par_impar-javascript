let palavra_vetor = [];
let palavra_igual = "";
for(let x=1; x<=2; x++){
    let palavra = prompt(`Escreva a ${x}ª palavra. Você escolhe "par" ou "impar"?`);  
  while(palavra != 'par' & palavra != 'impar'){
    palavra = prompt('Você escreveu errado! escreva "par" ou "impar".')
  }
  while (palavra === palavra_igual){
    palavra = prompt(`A primeira palavra foi ${palavra_igual}! Escolha a outra opção.`);
  while(palavra != 'par' & palavra != 'impar'){
    palavra = prompt('Você escreveu errado! escreva "par" ou "impar".')
  }
  } 
  palavra_vetor.unshift(palavra);
  palavra_igual = palavra;
}

let numero = Math.floor(Math.random()* 21);

for(let x=0; x<=palavra_vetor.length; x++){
  if(palavra_vetor[x] ==='par' & numero %2===0){
    alert(`${numero} é ${palavra_vetor[x]}!`)
  }else if (palavra_vetor[x] ==='impar' & numero %2===1){
    alert(`${numero} é ${palavra_vetor[x]}!`)
  }
}
