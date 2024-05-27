function verifica(valor) {
    if (valor.substring(0, 2) == 'q1') {
        if (valor.substring(2, 3) == 'a') {
            if (valor.substring(3) == 'true') {
                document.getElementById('feedback1a').innerText = "Você acertou. Em uma negação de proposição simples utilizamos o 'não' para negar a oração declarativa."
            } else {
                document.getElementById('feedback1a').innerText = "Você errou. Afirmar 'O céu é vermelho' cria uma condições específica. Imagine que a pergunta seja 'O céu é azul?', e você só pode responder com sim ou não. Ao afirmar 'O céu é vermelho', você não engloba todas as possibilidades. Em uma negação, devemos englobar todas as possibilidades. Se a proposição é 'O céu é azul' e a negação é 'O céu não é azul', você aceita todas as possibilidades, exceto que o céu seja azul."
            }
        } else if (valor.substring(2, 3) == 'b') {
            if (valor.substring(3) == 'true') {
                document.getElementById('feedback1b').innerText = "Você acertou. As duas alternativas estão corretas, você pode dizer '2 não é um número par', pois de fato essa é a negação mais simples para a proposição, ou '2 é um número ímpar', pois só existe duas condições possíveis: ser par ou ímpar, ao afirmar que a proposição é ímpar você excluí todas as outras possibilidades (ser par)."
            } else {
                document.getElementById('feedback1b').innerText = "Você acertou. As duas alternativas estão corretas, você pode dizer '2 não é um número par', pois de fato essa é a negação mais simples para a proposição, ou '2 é um número ímpar', pois só existe duas condições possíveis: ser par ou ímpar, ao afirmar que a proposição é ímpar você excluí todas as outras possibilidades (ser par)."
            }
        } else if (valor.substring(2, 3) == 'c') {
            if (valor.substring(3) == 'true') {
                document.getElementById('feedback1c').innerText = "Você errou. A proposição 10 > 7, ao ser negada, pode ser analisada assim: X > 7, então estamos analisando todos os números a partir de 8. Pois 7 não é maior que 7, e todos os números abaixo de 7 são menores. Por isso, a negação da proposição deve incluir todos os valores menores ou iguais a 7 (7, 6, 5, 4, ...). Ao negar 10 > 7, o resultado deve ser 10 ≤ 7. Explicação mais aprofundada: A negação precisa inverter o valor lógico da proposição. 10 > 7 = V. A negação: 10 ≤ 7 = F, pois todas as possibilidades existentes são: 10 ser um número menor que 7 (o que é falso) e 10 ser igual a 7 (o que também é falso)."
            } else {
                document.getElementById('feedback1c').innerText = "Você acertou. A negação do símbolo > é ≤."
            }
        } else if (valor.substring(2, 3) == 'd') {
            if (valor.substring(3) == 'true') {
                document.getElementById('feedback1d').innerText = "Você errou. 2 + 2 = 4 realmente inverte o valor lógico da proposição, porém cria uma situação específica, e a negação precisa envolver todos os casos. Portanto, a negação do símbolo = é ≠."
            } else {
                document.getElementById('feedback1d').innerText = "Você acertou. A negação do símbolo = é ≠."
            }
        }
    }
}