# Alterações a fazer

```
Observação: As alterações serão separadas por fase e arquivos de cada fase.
```

## 🚀 Fase 1

### Alteração 1

* No arquivo [index.html](index.html) existe a tag form, o form só é usado em páginas que fazem ações mais complexas, não é necessário utilizar form em todos os arquivos html. Nesse caso pode ser excluido.

Motivo da alteração
```
Após clicar no botão Calcular, por conta da função calculaimc estar dentro de um form, toda vez que ela é acionada a página é reiniciada, isso é um comportamento padrão de uma tag form, porém no caso do nosso desafio deixando dessa forma toda vez que for executar o resultado em tela é reiniciada, e não fica mantido para que o usuário consiga ver. O uso do form é costumeiramente usado em páginas maiores, que precisam levar as informações para outro lugar.
```

#### Como está
```
<form action="/" id="formulario">
        <label for="peso"> Peso: </label>
        <input type="text" id="peso" name="peso">
        <label for="altura"> Altura: </label>
        <input type="text" id="altura" name="altura">
        <button type="submit" onclick="calcularIMC()">Calcular</button>
    </form>
```

#### Como deve ficar
```
  <label for="peso"> Peso: </label>
  <input type="text" id="peso" name="peso">
  <label for="altura"> Altura: </label>
  <input type="text" id="altura" name="altura">
  <button type="submit" onclick="calcularIMC()">Calcular</button>
```

### Alteração 2

* Para facilitar a leitura e como boa prática, o ideal é sempre identar seu código e separar seus objetos html (h1, form, button, input...) com espaço, para facilitar a leitura e manutenção. E a tag 'script' sempre deve ficar por ultimo no código, logo acima do fechamento do 'body', como mostra no exemplo abaixo.

#### Como está
```
<body>
    <h1> Calcule seu IMC</h1>

        <label for="peso"> Peso: </label>
        <input type="text" id="peso" name="peso">
        <label for="altura"> Altura: </label>
        <input type="text" id="altura" name="altura">
        <button type="submit" onclick="calcularIMC()">Calcular</button>

    <script src="index.js"></script>
    <p id="resultado"></p>
    <br>
    <br>
    <br>
    <p>Classificação de faixa etária:</p>
    <label for="idade"> Digite sua idade: </label>
    <input type="text" id="idade" name="idade">
    <button type="submit" onclick="idade()">Enviar</button>
    <p id="linhaidade">
    </p>

</body>
```

#### Como deve ficar
```
<body>
    <h1> Calcule seu IMC</h1>

    <label for="peso"> Peso: </label>
    <input type="text" id="peso" name="peso">

    <label for="altura"> Altura: </label>
    <input type="text" id="altura" name="altura">

    <button type="submit" onclick="calcularIMC()">Calcular</button>

    <p id="resultado"></p>

    <br>
    <br>
    <br>

    <p>Classificação de faixa etária:</p>

      <label for="idade"> Digite sua idade: </label>
      <input type="text" id="idade" name="idade">

      <button type="submit" onclick="idade()">Enviar</button>

    <p id="linhaidade"></p>

    <script src="index.js"></script>
</body>
```

### Alteração 3

* No arquivo [index.html](index.html) na linha 18 é necessário alterar o nome da função calcularimc que é chamada no onclick dentro do arquivo [index.js](index.js). Lembrando que para usar funções em arquivos .js é necessário que no html o nome seja igual!

Motivo da alteração
```
Quando o botão Calcular era clicado a aplicação não encontrava a função para executar o código de forma correta.
```

#### Como está
```
<button type="submit" onclick="calcularIMC()">Calcular</button>
```

#### Como deve ficar
```
<button type="submit" onclick="calcularimc()">Calcular</button>
```

### Alteração 4

* No arquivo [index.js](index.js) na linha 1 existe a função calcularimc() com 3 const que armazenam os valores de peso, altura e resultado. No entanto, os restante do código está fora da função, fazendo com que todos os valores utilizados em código sejam perdidos. Para que a função funione de forma correta e os valores das variaveis sejam realmente utilizados, tudo que ela faz deve ficar dentro dela, e não fora. (Isso é estritamente necessario!!!).

#### Como está
```
function calcularimc() {
    const peso = (document.getElementById('peso').value);
    const altura = (document.getElementById('altura').value);
    const resultado = document.getElementById('resultado');
}

const imc = peso / (altura * altura);
let classificacao = "";

if (imc < 18.5) {
    classificacao = "Abaixo do peso";
} else if (imc < 24.9) {
    classificacao = "Peso normal";
} else if (imc < 29.9) {
    classificacao = "Sobrepeso";
} else if (imc < 34.9) {
    classificacao = "Obesidade grau I";
} else if (imc < 39.9) {
    classificacao = "Obesidade grau II";
} else (imc < 40); {
    classificacao = "Obesidade grau III";
}
resultado.textContent = "Seu IMC é ${imc.toFixed(2)} (${classificacao})";
```

#### Como deve ficar
```
function calcularimc() {
    const peso = (document.getElementById('peso').value);
    const altura = (document.getElementById('altura').value);
    const resultado = document.getElementById('resultado');

    const imc = peso / (altura * altura);
    let classificacao = "";

    if (imc < 18.5) {
        classificacao = "Abaixo do peso";
    } else if (imc < 24.9) {
        classificacao = "Peso normal";
    } else if (imc < 29.9) {
        classificacao = "Sobrepeso";
    } else if (imc < 34.9) {
        classificacao = "Obesidade grau I";
    } else if (imc < 39.9) {
        classificacao = "Obesidade grau II";
    } else (imc < 40); {
        classificacao = "Obesidade grau III";
    }
    resultado.textContent = "Seu IMC é ${imc.toFixed(2)} (${classificacao})";
}
```

### Alteração 5

* No arquivo [index.js](index.js) na linha 23 é onde o resultado da fase 1 será exibido, porém da forma que está nenhum valor é capturado, sendo necessário fazer uma alteração.

Motivo da alteração
```
Sempre que houver variaveis com valores a serem utilizados com $() é obrigatorio usar ` ao invés de "
```

#### Como está
```
resultado.textContent = "Seu IMC é ${imc.toFixed(2)} (${classificacao})";
```

#### Como deve ficar
```
resultado.textContent = `Seu IMC é ${imc.toFixed(2)} (${classificacao})`;
```

### Alteração 6

* No arquivo [index.js](index.js) na linha 20 tem a ultima clausula de if, porém da forma que está ele ignora as outras validações e vai direto para ultima sempre mantendo o resulto final que é de IMC < 40. Para que funciona corretamente é necessário fazer a alteração abaixo.

#### Como está
```
} else (imc < 40); {
```

#### Como deve ficar
```
} else if (imc < 40) {
```

### Alteração 7

* No arquivo [index.js](index.js) na linha 3, para o calculo de IMC é recbido como valor a altura e o peso, no entando, quando o javascript recebe um valor de altura = 180 (Seria 1 metro e 80) ele converte esse valor para metros, ou seja, ele entende que a pessoa tem cento e oitenta metros. Tento isso em visto é necessário dividir o valor da altura por 100 antes de fazer o calculo. Isso fará com que o resultado do IMC seja calculado corretamente.

#### Como está
```
const altura = (document.getElementById('altura').value);
```

#### Como deve ficar
```
const altura = (document.getElementById('altura').value / 100);
```

* ATENÇÃO: Após efetuar todas as alterações da Fase 1 faça um teste para garantir que está tudo de acordo!

## 🚀 Fase 2

### Alteração 1

* No arquivo [index.html](index.html) na linha 28 tem um botão que faz a chamada da função ao clicar que irá calcular a faixa etaria do usuário, porém da forma que está o resultado esperado não é obtido porque no arquivo [index.js](index.js) na linha 25 a função idade foi declarada de forma incorreta, e não existe uma variavel declada para o resultado que seria a faixaetaria. Nesse ponte será necessário fazer alterações nos dois arquivos.

#### Como está o HTML
```
<button type="submit" onclick="idade()">Enviar</button>
```

#### Como deve ficar o HTML
```
<button onclick="idade()">Enviar</button>
```

#### Como está o JavaScript
```
const idade = (document.getElementById('idade').value); {
```

#### Como deve ficar o JavaScript
```
function idade() {

    const idade = (document.getElementById('idade').value);
    let faixaetaria = "";
```

### Alteração 2

* No arquivo [index.js](index.js) nas linhas 26 - 37 da forma que foi escrito os if a validação está incorreta. Lembrando que sempre que for feito uma comparação o sinal de = vem sempre depois do < ou >.

#### Como está
```
if (idade <= 12) {
        faixaetaria = "Criança";
    }
    else if (idade => 13 && idade <= 17) {
        faixaetaria = "Adolescente";
    }
    else if (idade => 18 && idade <= 59) {
        faixaetaria = "Adulto";
    }
    else if (idade => 60 && idade <= 99) {
        faixaetaria = "Idoso";
    }
```

#### Como deve ficar

```
if (idade <= 12) {
        faixaetaria = "Criança";
    }
    else if (idade >= 13 && idade <= 17) {
        faixaetaria = "Adolescente";
    }
    else if (idade >= 18 && idade <= 59) {
        faixaetaria = "Adulto";
    }
    else if (idade >= 60 && idade <= 99) {
        faixaetaria = "Idoso";
    }
```

### Alteração 3

* No arquivo [index.js](index.js) nas linhas 39 - 41 da forma que está escrito não irá mostrar nenhum resultado em tela, e acaba causando um erro no appendChild pois o objeto não é encontrado. Para que o resultado da faixa etaria funcione é nesseário fazer algumas alterações.

#### Como está
```
const linhaidade = document.createElement("p");
linhaidade.textContent = `${idade}`;
document.getElementById('linhaidade').appendChild(idade);
```

#### Como deve ficar

Atenção a alteração atual, pois ela deve ficar dentro da função idade() que foi corrigida na Alteração 1 da Fase 2.

```
  const linhaidade = document.getElementById("linhaidade");
  linhaidade.textContent = `Faixa etaria: ${faixaetaria}`;
```

* ATENÇÃO: Após efetuar todas as alterações da Fase 2 faça um teste para garantir que está tudo de acordo!

## 🚀 Fase 3

### Alteração 1

* Conforme comentado na alteração 2 da Fase 2, para facilitar a leitura e como boa prática, o ideal é sempre identar seu código e separar seus objetos html (h1, form, button, input...) com espaço, para facilitar a leitura e manutenção.

#### Como está
```
<body>
  <input type="number" name="numeroa" id="numeroa" placeholder="Digite o primeiro número">
    <input type="number" name="numerob" id="numerob" placeholder="Digite o segundo número">
    <button type="button" onclick="verificarNumeros()">Verificar</button>
    <br>
    <br>
    <br>
    <input id="resultado" placeholder="resposta">
    <script> function verificarNumeros() {
            const numeroa = parseFloat(document.getElementById(numeroa).value);
            const numerob = parseFloat(document.getElementById(numerob).value);
            const resultado = (document.getElementById(resultado).value);
            if (numeroa > numerob) {
                resultado.textContent = `O número ${numeroa} é maior que o ${numeroB}.`;
            }
            else (numerob > numeroa)
            { resultado.textContent = `O número ${numerob} é maior que o ${numeroa}.`; }

            document.getElementById(verificarNumeros).value = resultado;
        }



    </script>
</body>
```

#### Como deve ficar
```
<body>
    <input type="number" name="numeroa" id="numeroa" placeholder="Digite o primeiro número">
    <input type="number" name="numerob" id="numerob" placeholder="Digite o segundo número">

    <button type="button" onclick="verificarNumeros()">Verificar</button>

    <br>
    <br>
    <br>

    <input id="resultado" placeholder="resposta">

    <script> 
        function verificarNumeros() {
            const numeroa = parseFloat(document.getElementById(numeroa).value);
            const numerob = parseFloat(document.getElementById(numerob).value);
            const resultado = (document.getElementById(resultado).value);

            if (numeroa > numerob) {
                resultado.textContent = `O número ${numeroa} é maior que o ${numeroB}.`;
            } else if (numerob > numeroa) {
                 resultado.textContent = `O número ${numerob} é maior que o ${numeroa}.`; 
            }

            document.getElementById(verificarNumeros).value = resultado;
        }
    </script>
</body>
```

### Alteração 2

* No arquivo [fase3.html](fase3.html) nas linhas 19 - 21 da forma que está o código não consegue obter o valor das variaveis, pois o metodo getElementById precisa que o ID seja escrito entre 'ID_AQUI_DENTRO'.

#### Como está
```
const numeroa = parseFloat(document.getElementById(numeroa).value);
const numerob = parseFloat(document.getElementById(numerob).value);
const resultado = (document.getElementById(resultado).value);
```

#### Como deve ficar

```
const numeroa = parseFloat(document.getElementById('numeroa').value);
const numerob = parseFloat(document.getElementById('numerob').value);
const resultado = document.getElementById('resultado').value;
```

### Alteração 3

* No arquivo [fase3.html](fase3.html) na linha 23 da forma que está o código não consegue obter o valor da variavel, pois o nome da variavel precisa ser identico ao que foi declarado, respeitado também letras maiusculas e minusculas.

#### Como está
```
resultado.textContent = `O número ${numeroa} é maior que o ${numeroB}.`;
```

#### Como deve ficar

```
resultado.textContent = `O número ${numeroa} é maior que o ${numerob}.`;
```

### Alteração 4

* No arquivo [fase3.html](fase3.html) ainda na linha 23 e 31 ha uma tentativa de inserir um novo valor na variavel, como é uma variavel ela não utiliza o .textContent, por tanto é necessário remove-lo. O textContent só é utilizado em objetos do HTML.

#### Como está
```
Linha 23: resultado.textContent = `O número ${numeroa} é maior que o ${numerob}.`;

Linha 31: resultado.textContent = `O número ${numerob} é maior que o ${numeroa}.`; 
```

#### Como deve ficar

```
Linha 23: resultado = `O número ${numeroa} é maior que o ${numerob}.`;

Linha 31: resultado = `O número ${numerob} é maior que o ${numeroa}.`; 
```

### Alteração 5

* No arquivo [fase3.html](fase3.html) na linha 34 o getElementById está recendo o nome da função principal no código, e isso está errado. Para que ele consiga colocar o resultado no campo precisa ser inserido o nome do campo real, como mostra abaixo.

#### Como está
```
document.getElementById(verificarNumeros).value = resultado;
```

#### Como deve ficar

```
document.getElementById('resultado').value = resultado;
```

### Alteração 6

* No arquivo [fase3.html](fase3.html) na linha 21 é declarada a variavel resultado, no entando ela é declarada com o tipo const, o tipo const é para valores imutavies, ou seja, no momento em que for atribuido o resultado a ela não será permitido por conta do seu tipo que não permite alteração de valores para esse tipo de variavel. Será necesário mudar o tipo dela.

#### Como está
```
const resultado = (document.getElementById('resultado').value);
```

#### Como deve ficar

```
let resultado = (document.getElementById('resultado').value);
```

* Observação: A declaração das variaveis de entrada (numeroa e numerob) foram criadas utilizando o metodo parseFloat(). Esse método é utilizado para numeros que contem . ou , ou seja, somente para valor monetario ou altura, não sendo necessário no caso atual.

```
const numeroa = parseFloat(document.getElementById(numeroa).value);
const numerob = parseFloat(document.getElementById(numerob).value);
```

* ATENÇÃO: Após efetuar todas as alterações da Fase 3 faça um teste para garantir que está tudo de acordo!

## 🚀 Fase 4

```
Observação: Gostaria de te parabenizar pois a fase 4 foi a unica que funcionou de forma correta sem nenhuma alteração necessária. Sendo preciso somente ajustar a identação!
```

### Alteração 1

* Conforme comentado na alteração 2 da Fase 2, para facilitar a leitura e como boa prática, o ideal é sempre identar seu código e separar seus objetos html (h1, form, button, input...) com espaço, para facilitar a leitura e manutenção.

#### Como está
```
<body>
    <h1 id="titulo"> Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
    <input type="text" name="novoTexto" id="novotexto">
    <button type="button" onclick="mudarTexto()">Atualizar</button>
    <script>

        function mudarTexto() {
const texto = document.getElementById("novotexto").value;
const h1 = document.getElementById("titulo");
h1.textContent = texto;
        }
    </script>
</body>
```

#### Como deve ficar
```
<body>
    <h1 id="titulo"> Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>

    <input type="text" name="novoTexto" id="novotexto">

    <button type="button" onclick="mudarTexto()">Atualizar</button>

    <script>
        function mudarTexto() {
            const texto = document.getElementById("novotexto").value;
            const h1 = document.getElementById("titulo");
            h1.textContent = texto;
        }
    </script>
</body>
```

* ATENÇÃO: Após efetuar todas as alterações da Fase 4 faça um teste para garantir que está tudo de acordo!

## 🚀 Fase 5

### Alteração 1

* Conforme comentado na alteração 2 da Fase 2, para facilitar a leitura e como boa prática, o ideal é sempre identar seu código e separar seus objetos html (h1, form, button, input...) com espaço, para facilitar a leitura e manutenção.

#### Como está
```
<body>
    <h1>Crie uma frase abaixo</h1>
    <input type="text" name="frase 1" id="frase1">
    <br>
    <br>
    <br>
    <input type="text" name="resultado" id="resultado" placeholder="resultado">
    <button type="button" onclick="analisarFrase()">Analisar</button>
<script> 
    function analisarFrase () {
        const frase = document.getElementById('resultado').value;
        const totalcaracteres = frase.lenght;
         const vogais = frase.match(/[aeiouáéíóúâêîôûãõàäëïöü]/gi) || [];
      const consoantes = frase.match(/[bcdfghjklmnpqrstvwxyz]/gi) || [];
      const espacos = frase.match(/ /g) || []; 

      const resultado = `
        <p>Total de caracteres: ${totalcaracteres}</p>
        <p>Vogais: ${vogais.length}</p>
        <p>Consoantes: ${consoantes.length}</p>
        <p>Espaços: ${espacos.length}</p> 
        `;
              document.getElementById('resultado').innerHTML = resultado;

    }
</script>
</body>
```

#### Como deve ficar
```
<body>
    <h1>Crie uma frase abaixo</h1>

    <input type="text" name="frase 1" id="frase1">

    <br>
    <br>
    <br>

    <input type="text" name="resultado" id="resultado" placeholder="resultado">

    <button type="button" onclick="analisarFrase()">Analisar</button>

    <script> 
        function analisarFrase () {
            const frase = document.getElementById('resultado').value;
            const totalcaracteres = frase.lenght;
            const vogais = frase.match(/[aeiouáéíóúâêîôûãõàäëïöü]/gi) || [];
            const consoantes = frase.match(/[bcdfghjklmnpqrstvwxyz]/gi) || [];
            const espacos = frase.match(/ /g) || []; 

            const resultado = `
                <p>Total de caracteres: ${totalcaracteres}</p>
                <p>Vogais: ${vogais.length}</p>
                <p>Consoantes: ${consoantes.length}</p>
                <p>Espaços: ${espacos.length}</p>`;

            document.getElementById('resultado').innerHTML = resultado;
        }
    </script>
</body>
```

### Alteração 2

* O primeiro campo de entrada foi declarado com um name contendo espaços, e isso não é uma boa pratica, será necessário altera-lo.

#### Como está
```
<input type="text" name="frase 1" id="frase1">
```

#### Como deve ficar
```
<input type="text" name="frase1" id="frase1">
```

### Alteração 3

* O campo resultado foi declarado com o tipo input, e isso atrapalha na hora de mostrar o resultado, para facilitar a visualização é necessário altera-lo para o tipo p (paragrafo).

#### Como está
```
<input type="text" name="resultado" id="resultado" placeholder="resultado">
```

#### Como deve ficar
```
<p id="resultado"></p>
```

### Alteração 4

* A variavel frase foi declarada utilizando o metodo getElementById porém com o ID de elemento errado, é necessário altera-lo.

#### Como está
```
const frase = document.getElementById('resultado').value;
```

#### Como deve ficar
```
const frase = document.getElementById('frase1').value;
```

### Alteração 5

* A variavel totalcaracteres está tentando pegar a quantidade de caracteres (ou seja o comprimento da frase) inserida pelo usuário, porém comprimento em inglês é length, na declaração está escrito lenght. Será necessário fazer uma alteração.

#### Como está
```
const totalcaracteres = frase.lenght;
```

#### Como deve ficar
```
const totalcaracteres = frase.length;
```

* ATENÇÃO: Após efetuar todas as alterações da Fase 5 faça um teste para garantir que está tudo de acordo!