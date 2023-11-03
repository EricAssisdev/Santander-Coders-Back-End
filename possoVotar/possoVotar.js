function possoVotar(idade) {
  
  if(idade < 16) {
    console.log(`Você tem ${idade} anos. Você precisa ser maior de 16 anos para poder votar`)
  } else if (idade > 16 && idade < 70) {
    console.log("Você pode votar. Informe seu titulo de eleitor") 
  } else 
    console.log(`Você tem ${idade} anos, não tem mais a obrigação de votar`)
}

let idade = 18
possoVotar(idade)