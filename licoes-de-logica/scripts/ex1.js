function verifica(valor) {
    if (valor.substring(0, 2) == 'q1') {
        if (valor.substring(2, 3) == 'a') {
            if (valor.substring(3) == 'true') {
                document.getElementById('feedback1a').innerText = "Você acertou. É uma proposição, pois a oração declarativa apresenta predicado, e somente um valor lógico (Verdadeiro ou Falso)."
            } else {
                document.getElementById('feedback1a').innerText = "Você errou. É uma proposição, pois a oração declarativa apresenta predicado, e somente um valor lógico (Verdadeiro ou Falso)."
            }
        } else if (valor.substring(2, 3) == 'b') {
            if (valor.substring(3) == 'true') {
                document.getElementById('feedback1b').innerText = "Você acertou. É uma proposição, pois a oração declarativa apresenta predicado, e somente um valor lógico (Verdadeiro ou Falso)."
            } else {
                document.getElementById('feedback1b').innerText = "Você errou. É uma proposição, pois a oração declarativa apresenta predicado, e somente um valor lógico (Verdadeiro ou Falso)."
            }
        } else if (valor.substring(2, 3) == 'c') {
            if (valor.substring(3) == 'true') {
                document.getElementById('feedback1c').innerText = "Você acertou. É uma proposição, pois a oração declarativa apresenta predicado, e somente um valor lógico (Verdadeiro ou Falso)."
            } else {
                document.getElementById('feedback1c').innerText = "Você errou. É uma proposição, pois a oração declarativa apresenta predicado, e somente um valor lógico (Verdadeiro ou Falso)."
            }
        } else if (valor.substring(2, 3) == 'd') {
            if (valor.substring(3) == 'true') {
                document.getElementById('feedback1d').innerText = "Você errou. Não é uma proposição, pois não apresenta predicado."
            } else {
                document.getElementById('feedback1d').innerText = "Você acertou. Não é uma proposição, pois não apresenta predicado."
            }
        } else if (valor.substring(2, 3) == 'e') {
            if (valor.substring(3) == 'true') {
                document.getElementById('feedback1e').innerText = "Você errou. Não é uma proposição, pois não podemos definir como verdadeira ou falsa."
            } else {
                document.getElementById('feedback1e').innerText = "Você acertou. Não é uma proposição, pois não podemos definir como verdadeira ou falsa."
            }
        } else if (valor.substring(2, 3) == 'f') {
            if (valor.substring(3) == 'true') {
                document.getElementById('feedback1f').innerText = "Você errou. Não é uma proposição, pois não é uma oração declarativa, e sim uma oração interrogativa."
            } else {
                document.getElementById('feedback1f').innerText = "Você acertou. Não é uma proposição, pois não é uma oração declarativa, e sim uma oração interrogativa."
            }
        } else if (valor.substring(2, 3) == 'g') {
            if (valor.substring(3) == 'true') {
                document.getElementById('feedback1g').innerText = "Você errou. Não é uma proposição, pois não podemos definir como verdadeira ou falsa. Apesar de ser uma oração declarativa, com predicado e estruturalmente correta, o seu conteúdo não pode ser definido como verdadeiro ou como falso. A sentença é uma contradição. Ao afirmar que 'Esta frase é falsa' é uma verdade, o seu conteúdo afirma que ela é falsa. Ao afimar que 'Esta frase é falsa' é uma falsidade, o seu conteúdo é provado como verdadeiro."
            } else {
                document.getElementById('feedback1g').innerText = "Você acertou. Não é uma proposição, pois não podemos definir como verdadeira ou falsa."
            }
        }
    } else {
        if (valor.substring(2, 3) == 'a') {
            if (valor.substring(3) == 'true') {
                document.getElementById('feedback2a').innerText = "Você errou. 10 não é igual a 11."
            } else {
                document.getElementById('feedback2a').innerText = "Você acertou. 10 é diferente de 11."
            }
        } else if (valor.substring(2, 3) == 'b') {
            if (valor.substring(3) == 'true') {
                document.getElementById('feedback2b').innerText = "Você acertou. 10 é diferente de 11."
            } else {
                document.getElementById('feedback2b').innerText = "Você errou. 10 é diferente de 11."
            }
        } else if (valor.substring(2, 3) == 'c') {
            if (valor.substring(3) == 'true') {
                document.getElementById('feedback2c').innerText = "Você acertou. 5 é maior que 2."
            } else {
                document.getElementById('feedback2c').innerText = "Você errou. 5 é maior que 2."
            }
        } else if (valor.substring(2, 3) == 'd') {
            if (valor.substring(3) == 'true') {
                document.getElementById('feedback2d').innerText = "Você acertou. 3 é menor que 4."
            } else {
                document.getElementById('feedback2d').innerText = "Você errou. 3 é menor que 4."
            }
        } else if (valor.substring(2, 3) == 'e') {
            if (valor.substring(3) == 'true') {
                document.getElementById('feedback2e').innerText = "Você acertou. Brasília é a capital do Brasil."
            } else {
                document.getElementById('feedback2e').innerText = "Você errou. Brasília é a capital do Brasil."
            }
        } else if (valor.substring(2, 3) == 'f') {
            if (valor.substring(3) == 'true') {
                document.getElementById('feedback2f').innerText = "Você acertou. 2 vezes 6 é igual a 12."
            } else {
                document.getElementById('feedback2f').innerText = "Você errou. 2 vezes 6 é igual a 12."
            }
        }
    }
}