# Desafio 1

Neste desafio será exigido funções simples de JavaScript em conjunto de uma tela em HTML.
```
Observação: Todos as fases podem ser criadas na mesma tela, e o arquivo HTML e JavaScript deveram ser commitados dentro da pasta desafio 1.
```

### Instruções para commit das atividades

* Passo 1: Faça o clone do repositorio para sua maquina antes de iniciar os desafios.
```
git clone https://github.com/gustavoPaulo/teste-js-murilo.git
```

* Passo 2: Após finalizar todas as fases do desafio será necessário fazer o commit das alterações dentro da pasta desafio 1.
```
git add .
```
```
git commit -m "Comentario"
```
```
git push -u origin master
```

Caso peça alguma senha ou usuário ao tentar efetuar commit, pode entrar em contato comigo.

## 🚀 Fase 1

Crie uma tela HTML com 2 campos (input) em que o usuário possa digitar seu peso e altura, e ao clicar em um botão seja exibido em tela o IMC do usuário.

### Exemplos de componente e operações usutilizadas na Fase 1
```
<input type="text" name="exemplo" id="exemplo" placeholder="Exemplo de input">
```
```
<button type="button" onclick="calcularIMC()">Calcular</button>
```
```
Formula para calculo do IMC -> imc = peso / (altura * altura)
```

## 🚀 Fase 2

Crie um campo em tela que permita que o usuário digite sua idade, e como resultado seja impresso em tela de acordo com a idade do usuário em que faixa etária ele se encaixa.

### Exemplos de componente e operações usutilizadas na Fase 2

Classificação de faixa etária

Criança: 0 a 12 anos;<br>
Adolescente: 13 a 17 anos;<br>
Adulto: 18 a 59 anos;<br>
Idoso: 60+ anos.
```
Observação: Faça a verificação utilizando if/else ou switch case.
```

## 🚀 Fase 3

Crie dois campos em tela que permitam que o usuário digite dois números, e como resultado imprima na tela se o primeiro é maior, menor ou igual ao segundo.

### Exemplos de componente e operações usutilizadas na Fase 3
```
<input type="number" name="numeroA" id="numeroA">
```
```
<input type="number" name="numeroB" id="numeroB">
```
```
<button type="button" onclick="verificarNumeros()">Verificar</button>
```
```
Observação: Faça a verificação utilizando if/else.
```

## 🚀 Fase 4

Na fase 4 será feito a manipulação do DOM. Para essa fase, você deve criar em um arquivo HTML uma tag h1 e um texto dentro dela. Usando JavaScript, você deve alterar o texto de h1.

### Exemplos de componente e operações usutilizadas na Fase 4

Para concluir essa fase é necessário criar um input do tipo text para armazenar o novo valor que será recebido no H1 e um outro campo do tipo button, que ao clicar irá chamar uma função no JavaScript e fará a alteração do texto do H1.

```
<h1>Texto sem alateração</h1>
```
```
<input type="text" name="novoTexto" id="novoTexto">
```
```
<button type="button" onclick="mudarTexto()">Atualizar</button>
```

## 🚀 Fase 5 (desafio extra com nivel um pouco elevado)

Crie um campo texto na tela HTML em que o usuário pode digitar uma frase, crie também um botão que irá chamar uma função no JavaScript e crie um campo de resultado abaixo, que irá imprimir para o usuário. A função no JavaScript tem como objetivo de mostrar em tela:

* Quantos caracteres tem na frase digitada pelo usuário
* Quantas vogais tem na frase
* Quantas consoante tem na frase
* Quantos espaços foram digitas

### Exemplos de componente e operações usutilizadas na Fase 5

```
<input type="text" name="frase1" id="frase1">
```
```
<input type="text" name="resultado" id="resultado">
```
```
<button type="button" onclick="analisarFrase()">Analisar</button>
```

Exemplo de função que verifica se o caracter é vogal: 
```
function isVogal() {
  // A expressão regular verifica se o caractere é uma vogal
  // A flag 'i' torna a verificação insensível a maiúsculas e minúsculas
  // Exemplo da expressão regular -> /[aeiou]/i.test(letra)

  // Recupera o valor do input
  var letra = document.getElementById('frase1').value;

  // Verifica se o caractere digitado é uma vogal e retorna true ou false
  return /[aeiou]/i.test(letra);
}
```
```
Observação: O método acima (isVogal) tem um retorno do tipo boolean, significa que se a letra é uma vogal, caso seja ele retorna true, se for consoante ele retorna false. A partir desse retorno é possível fazer a contagem de cada tipo de letra.
```

PS: Faça os desafios com calma e com atenção. Boa sorte!😊 