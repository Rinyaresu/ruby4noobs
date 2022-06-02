# Operadores Aritméticos

Os operadores aritméticos padrões são:

- os de soma (+),
- subtração (-),
- multiplicação (*),
- divisão (/),
- módulo (%),
- potência (**).

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

No capítulo sobre as [Variáveis](3-variaveis.md) mostramos como declarar variáveis e você também pode usar esses operadores com as variáveis ensinadas anteriormente. Como por exemplo:

```ruby
x = 10
y = 20

x + y # 30
x - y # -10
x * y # 200
x / y # 0
x % y # 10
x ** y # 1000000
```

[Próximo](5-operadores-relacionais.md)
