function calcularimc() {
    const peso = (document.getElementById('peso').value);
    const altura = (document.getElementById('altura').value / 100);
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
} else {
    classificacao = "Obesidade grau III";
}
resultado.textContent = `Seu IMC é ${imc.toFixed(2)} (${classificacao})`;
}
function idade () {
const idade = (document.getElementById('idade').value) 
    let faixaetaria = "";
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
        const linhaidade = document.getElementById("linhaidade");
linhaidade.textContent = `faixa etaria: ${faixaetaria}`;
    
}

