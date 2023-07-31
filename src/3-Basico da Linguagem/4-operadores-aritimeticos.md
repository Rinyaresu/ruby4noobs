# Operadores Aritméticos - Realizando Cálculos em Ruby

Neste capítulo, vamos explorar os operadores aritméticos em Ruby, que nos permitem realizar cálculos matemáticos em nossos programas. Os operadores aritméticos são fundamentais para executar operações como soma, subtração, multiplicação, divisão e muito mais. Veremos como utilizar esses operadores de forma prática, tanto com valores fixos como com variáveis.

Os operadores aritméticos padrões são:

| Tipo          | Símbolo | Ação                                          |
| ------------- | ------- | --------------------------------------------- |
| Soma          | +       | Realiza a adição de dois valores              |
| Subtração     | -       | Realiza a subtração de dois valores           |
| Multiplicação | \*      | Realiza a multiplicação de dois valores       |
| Divisão       | /       | Realiza a divisão de dois valores             |
| Módulo        | %       | Retorna o resto da divisão entre dois valores |
| Potência      | \*\*    | Calcula a potência entre dois números         |

```ruby
10 + 5
=> 15

10 - 5
=> 5

10 * 5
=> 50

10 / 5
=> 2

10 % 5
=> 0

10 ** 5
=> 100000

10 / 0
=> ZeroDivisionError: divided by 0
```

## Operadores Aritméticos com Variáveis

Podemos utilizar os operadores aritméticos com as variáveis que aprendemos anteriormente:

```ruby
x = 10
y = 20

x + y # Soma: 10 + 20 = 30
x - y # Subtração: 10 - 20 = -10
x * y # Multiplicação: 10 * 20 = 200
x / y # Divisão: 10 / 20 = 0
x % y # Módulo (Resto da Divisão): 10 % 20 = 10
```

Neste capítulo, aprendemos sobre os operadores aritméticos em Ruby e como utilizá-los para realizar cálculos matemáticos. Os operadores aritméticos são uma parte fundamental da programação e são frequentemente utilizados em diversas situações.

No próximo capítulo, exploraremos os operadores relacionais e como utilizá-los para fazer comparações entre valores.

[Próximo](5-operadores-relacionais.md)
