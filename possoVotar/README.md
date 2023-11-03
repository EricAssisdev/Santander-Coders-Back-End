# Verificador de Elegibilidade para Voto

Um simples programa em JavaScript que verifica a elegibilidade para votar com base na idade fornecida.

## Como Usar

1. Clone o repositório ou copie o código para um arquivo JavaScript local.
2. Edite o valor da variável `idade` na última linha do código para a idade que deseja verificar.
3. Abra o arquivo JavaScript em um navegador ou em um ambiente de execução de código JavaScript (como um IDE ou console de navegador).
4. O programa verificará a elegibilidade com base na idade fornecida e exibirá uma mensagem no console do navegador.

## Funcionalidades

O programa possui as seguintes funcionalidades:

- Verifica a idade fornecida e informa se o usuário é elegível para votar.
- Exibe mensagens personalizadas com base na idade.
- Cobertura para idades menores que 16 anos, idades entre 16 e 69 anos (idade padrão para votar) e idades maiores que 69 anos.

## Exemplo

```javascript
function possoVotar(idade) {
  if (idade < 16) {
    console.log(`Você tem ${idade} anos. Você precisa ser maior de 16 anos para poder votar.`);
  } else if (idade > 16 && idade < 70) {
    console.log("Você pode votar. Informe seu título de eleitor.");
  } else {
    console.log(`Você tem ${idade} anos, não tem mais a obrigação de votar.`);
  }
}

let idade = 18;
possoVotar(idade);
// Neste exemplo, a função possoVotar é usada para verificar a elegibilidade para votar com base na idade fornecida (18 anos neste caso). A mensagem apropriada será exibida no console.
````

## Contribuições

Contribuições são bem-vindas! Sinta-se à vontade para melhorar o código, adicionar recursos ou resolver problemas.
