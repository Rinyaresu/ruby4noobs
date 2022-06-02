# Tipos de dados

## Tipagem dinâmica

Ruby é uma linguagem de tipagem dinâmica, ou seja, o tipo de dado é definido ao momento da execução do código. Tipagem dinâmica é uma característica de determinadas linguagens de programação, que não exigem declarações de tipos de dados, pois são capazes de escolher que tipo utilizar dinamicamente para cada variável, podendo alterá-lo durante a compilação ou a execução do programa.

Algumas das linguagens mais conhecidas a utilizarem tipagem dinâmica são: [Python](https://github.com/wendrewdevelop/python4noobs), [Ruby](https://github.com/rinyaresu/ruby4noobs), [PHP](https://github.com/DanielHe4rt/php4noobs).

Na prática, tipagem dinâmica significa:

```ruby
k = "teste"

k.class
=> String

k = 1

k.class
=> Integer
```

Pudemos ver que a variável `k` pode assumir como valor tanto uma String como um número (que nesse caso, é um Integer), e em uma linguagem de tipagem estática, como [Java](https://github.com/paulorievrs/java4noobs) isso não seria possível, com o compilador já não nos deixando prosseguir.

## Tipagem Forte

Ruby também tem tipagem forte. Linguagens implementadas com tipos de dados fortes, tais como [Java](https://github.com/paulorievrs/java4noobs), exigem que o tipo de dado de um valor seja do mesmo tipo da variável ao qual este valor será atribuído. O significado disso é que, se você tentar atribuir um valor de um tipo diferente a uma variável, o compilador irá gerar um erro. Como por exemplo:

```ruby
x = 10
y = "Ruby"

puts x + y 

=> TypeError: String can't be coerced into Integer
```

## Objetos

Ruby não tem tipos primitivos, ou seja, não tem tipos primitivos como inteiros, floats, strings, etc. Tudo é um objeto. Por exemplo:

### Integer

```ruby
k = 77
=> 77

k.class # Podemos descobrir o tipo de objeto que uma variável aponta utilizando o método class.
=> Integer
```

### Bignum

```ruby
k = 12345678901234567890
=> 12345678901234567890
```

### Float

```ruby
k = 3.14
=> 3.14
```

### Boolean

```ruby
k = true
=> true

1 == 2
=> false
```

### Nil

```ruby
k = 1
=> 1

k.nil? # Podemos verificar se um objeto é nil utilizando o método nil?
=> false
```

### String

```ruby
k = "Ruby"
=> "Ruby"
```

### Array

```ruby
k = [1, 2, 3]
=> [1, 2, 3]
```

### Hash

```ruby
k = {a: 1, b: 2, c: 3}
=> {a: 1, b: 2, c: 3}
```

### Regexp

```ruby
k = /Ruby/
=> /Ruby/
```

### Symbols

```ruby
k = :Ruby
=> :Ruby
```

### Range
  
```ruby
k = (1..10)
=> 1..10
```

## O que podemos fazer com esses objetos?

### Concatenar

```ruby
r = "Ruby"
p = "PHP"

r + p # Concatenar strings
=> "RubyPHP"
```

### Comparar

```ruby
r = "Ruby"
p = "PHP"
r == p # Comparar strings
=> false
```

### Encontrar o tamanho

```ruby
r = "Ruby"
r.size # Encontrar o tamanho de uma string
=> 5
```

### Encontrar o tipo

```ruby
r = "Ruby"
r.class # Encontrar o tipo de um objeto
=> String
```

## Conversões

### Converter uma string para um inteiro

```ruby
r = "10"
r.to_i 
=> 10
```

### Converter uma string para um float

```ruby
r = "10"
r.to_f
=> 10.0
```

### Converter uma string para um símbolo

```ruby
r = "Ruby"
r.to_sym
=> :Ruby
```

### Converter um símbolo para uma string

```ruby
r = :Ruby
r.to_s
=> "Ruby"
```

### Converter uma string para um array

```ruby
r = "Ruby"
r.to_a
=> ["R", "u", "b", "y"]
```

### Converter um range para array

```ruby
r = (1..10)
r.to_a
=> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
```

### Converter um array para uma string separada por vírgula

```ruby
r = [7, 7, 7]
r.join(",")
=> "7,7,7"
```

[Próximo](3-variaveis.md)
