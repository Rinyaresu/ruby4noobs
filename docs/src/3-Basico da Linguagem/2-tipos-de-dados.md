# Tipos de dados

## Tipagem dinâmica

Ruby é uma linguagem de tipagem dinâmica, ou seja, o tipo de dado é definido ao momento da execução do código. Tipagem dinâmica é uma característica de determinadas linguagens de programação, que não exigem declarações de tipos de dados, pois são capazes de escolher que tipo utilizar dinamicamente para cada variável, podendo alterá-lo durante a compilação ou a execução do programa.

Algumas das linguagens mais conhecidas a utilizarem tipagem dinâmica são: [Python](https://github.com/wendrewdevelop/python4noobs), [Ruby](https://github.com/rinyaresu/ruby4noobs), [PHP](https://github.com/DanielHe4rt/php4noobs).

Na prática, tipagem dinâmica significa:

> ps: esses códigos foram feitos usando o [irb](/src/2-Ambiente/2-configuracao-de-ambiente.md#dica)

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

Integer ou Inteiro (em português) é um objeto que representa os números mais convencionais que nos conhecemos. **Vírgulas não são permitidas, mas travessões são.**

```ruby
k = 77
=> 77

k = -77
=> -77

k.class # Podemos descobrir o tipo de objeto que uma variável aponta utilizando o método class.
=> Integer
```

### Bignum

Bignum também é um **integer** só que é um objeto que representa números maiores que o inteiro. Ou seja, **números com muitos dígitos**.

```ruby
k = 12345678901234567890
=> 12345678901234567890

k.class
=> Integer # Como dito acima Bignum é um Integer.
```

### Float

Números decimais são chamados de **float ou ponto flutuante**.

```ruby
k = 3.14
=> 3.14

k.class
=> Float
```

### Boolean

Literalmente, Boolean é um tipo de dado que representa um valor booleano. Ou seja, um valor que pode ser **verdadeiro ou falso.**

```ruby
k = true
=> true

k.class
=> TrueClass

k = false
=> false

k.class
=> FalseClass
```

### Nil

Em Ruby, o nil representa o **vazio**. Ele representa falta de valor. **Ele não é zero. Por que zero é um número.**

```ruby
k = 0
=> 0

k.nil? # Podemos verificar se um objeto é nil utilizando o método nil?
=> false

k = nil
=> nil

k.nil?
=> true

k.class
=> NilClass
```

### String

String é um objeto que representa um conjunto de caracteres. Strings são quaisquer tipos de caracteres (letras, dígitos, pontuação) **cercados por aspas. Aspas, simples ou duplas.**

```ruby
k = "Ruby"
=> "Ruby"

k.class
=> String
```

### Array

Array é um objeto que representa uma **lista de valores cercada por colchetes e separada por vírgulas.** Em Ruby os arrays são dinâmicos, portanto você não precisa definir seu tamanho inicial, mas se preferir definir você também pode. Caso tenha criado um array com 10 posições e precise guardar um novo dado no array, você poderá fazê-lo sem problemas pois o array será expandido automaticamente conforme a necessidade.

```ruby
k = [1, 2, 3]
=> [1, 2, 3]

k.class
=> Array
```

Em Ruby os Arrays podem conter tipos de dados diferentes também, como esse onde misturamos inteiros, flutuantes e strings:

```ruby
k = [7, 7.7, "Ruby"]
=> [7, 7.7, "Ruby"]

k.class
=> Array
```

### Hash

As hashes são arrays indexados, com **Chaves e Valores**, que podem ser **quaisquer tipos de objetos.**

```ruby
k = { :Linguagem => "Ruby", :Ano => 1995, :Criador => ["Yukihiro", "Matz"] }
=> {:Linguagem=>"Ruby", :Ano=>1995, :Criador=>["Yukihiro", "Matz"]}

k.class
=> Hash
```

### Regexp

Uma expressão regular (ou regexp), é uma série de caracteres **cercados por barras**.  É utilizada para verificar se um texto segue um padrão.

```ruby
k = /Ruby/
=> /Ruby/

k.class
=> Regexp
```

### Symbols

Símbolos são palavras que parecem variáveis. Novamente, elas podem conter letras, dígitos e travessões. **Mas elas começam com dois pontos**. Símbolos podem se parecer com um jeito engraçado de Strings, mas devemos pensar em símbolos como **significado
e não como conteúdo.**

```ruby
k = :Ruby
=> :Ruby

k.class
=> Symbol
```

### Range

Um range é formado por dois valores cercados por **parênteses** e separados por **reticências** (na forma de dois ou três pontos).

```ruby
k = (1..10)
=> 1..10

k.class
=> Range
```

Normalmente, apenas dois pontos são usados. Se um terceiro ponto for usado, o **último valor no range será excluído.**

```ruby
(0...10) # representa os números de zero até nove exceto o último como podemos ver logo abaixo.
=> 0...10

(0...10).to_a # to_a converte o objeto em um array
=> [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
```

## O que podemos fazer com esses objetos?

### Concatenar

```ruby
r = "Ruby"
p = "PHP"

r + " " + p # o + concatena as strings
=> "RubyPHP"
```

```ruby
r << " " # << também pode ser usado para concatena string
=> "Ruby "

r << p # concatena o valor de p
=> "Ruby PHP"
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

## Conversões com métodos

Aqui vamos aprender que conversão de um objeto para outro tipo de objeto é possível através de métodos.

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

Espero que com **toda** essa informação você tenha um pouco mais de conhecimento sobre os **tipos de dados** em *Ruby*. A maior dica é você tentar usar esses métodos na pratica em um projeto próprio. Se você não conseguir, não hesite em perguntar. 😊

[Próximo](3-variaveis.md)
