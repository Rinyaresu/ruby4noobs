# Operadores Relacionais - Comparando Valores em Ruby

Neste capítulo, vamos explorar os operadores relacionais em Ruby, que nos permitem fazer comparações entre valores. Os operadores relacionais são utilizados para verificar se uma relação específica entre os valores é verdadeira ou falsa. Veremos como utilizar esses operadores para comparar valores e obter resultados booleanos.

Os operadores relacionais padrões são:

| Tipo           | Símbolo | Exemplo | Ação                                                                |
| -------------- | ------- | ------- | ------------------------------------------------------------------- |
| Igualdade      | ==      | y == x  | Verifica se dois valores são iguais.                                |
| Diferença      | !=      | y != x  | Verifica se dois valores são diferentes.                            |
| Maior          | >       | y > x   | Verifica se o valor à esquerda é maior que o valor à direita.       |
| Menor          | <       | y < x   | Verifica se o valor à esquerda é menor que o valor à direita.       |
| Maior ou igual | >=      | y >= x  | Verifica se o valor à esquerda é maior ou igual ao valor à direita. |
| Menor ou igual | <=      | y <= x  | Verifica se o valor à esquerda é menor ou igual ao valor à direita. |

Exemplos:

```ruby
10 == 5 # false
10 != 5 # true
10 > 5 # true
10 < 5 # false
10 >= 5 # true
10 <= 5 # false
```

### Utilizando Operadores Relacionais

```ruby
x = 1
y = 5

if x > y
  puts "x é maior que y"
else
  puts "x não é maior que y"
end
```

Neste capítulo, aprendemos sobre os operadores relacionais em Ruby e como utilizá-los para comparar valores e obter resultados booleanos. Os operadores relacionais são fundamentais para criar lógicas e estruturas condicionais em nossos programas.

No próximo capítulo, vamos explorar as estruturas condicionais em Ruby, como o `if`, `else` e `elsif`, para tomar decisões em nossos programas.
[Próximo](6-condicionais.md)
