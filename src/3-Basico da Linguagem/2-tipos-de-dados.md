# Tipos de dados em Ruby: Entendendo a Tipagem Dinâmica e Forte

## Introdução

Em Ruby, os tipos de dados desempenham um papel fundamental na manipulação e organização de informações. Neste capítulo, vamos explorar a tipagem dinâmica e forte de Ruby, bem como os principais tipos de dados disponíveis nesta linguagem. Vamos aprender como trabalhar com inteiros, floats, strings, booleans, hashes, arrays, símbolos e ranges, além de entender como realizar conversões entre eles.

## Tipagem Dinâmica

Ruby é uma linguagem de tipagem dinâmica, o que significa que o tipo de dado é definido em tempo de execução. Ao contrário das linguagens de tipagem estática, como Java, onde é necessário declarar o tipo das variáveis antecipadamente, Ruby é capaz de determinar dinamicamente o tipo de dado associado a cada variável durante a compilação ou execução do programa.

Em resumo, isso significa que uma mesma variável pode assumir diferentes tipos de dados ao longo da execução do código. Vamos ver um exemplo para ilustrar esse conceito:

```ruby
k = "teste"
k.class
=> String

k = 1
k.class
=> Integer
```

Observe que a variável `k` primeiro recebe uma string e, em seguida, um inteiro. Em uma linguagem de tipagem estática, isso não seria permitido e o compilador geraria um erro. Porém, em Ruby, a tipagem dinâmica permite essa flexibilidade.

## Os Principais Tipos de Dados em Ruby

### Integer

O tipo `Integer` representa números inteiros. Ele pode armazenar valores positivos e negativos, mas não aceita números decimais. Por exemplo:

```ruby
k = 77
k.class
=> Integer

k = -77
k.class
=> Integer
```

### Bignum

O tipo `Bignum` também representa números inteiros, mas é utilizado para valores muito grandes, que ultrapassam a capacidade do tipo `Integer`. Por exemplo:

```ruby
k = 12345678901234567890
k.class
=> Integer
```

### Float

O tipo `Float` representa números decimais, também conhecidos como ponto flutuante. Por exemplo:

```ruby
k = 3.14
k.class
=> Float
```

### Boolean

O tipo `Boolean` representa valores verdadeiros (`true`) ou falsos (`false`). Por exemplo:

```ruby
k = true
k.class
=> TrueClass

k = false
k.class
=> FalseClass
```

### Nil

O tipo `Nil` representa a ausência de valor ou vazio. É usado quando uma variável não possui um valor atribuído. Por exemplo:

```ruby
k = nil
k.class
=> NilClass
```

### String

O tipo `String` representa um conjunto de caracteres, como palavras ou frases. Strings são delimitadas por aspas simples ou duplas. Por exemplo:

```ruby
k = "Ruby"
k.class
=> String
```

### Array

O tipo `Array` representa uma lista ordenada de valores, que podem ser de diferentes tipos. Os elementos do array são separados por vírgulas e cercados por colchetes. Por exemplo:

```ruby
k = [1, 2, 3]
k.class
=> Array

k = [7, 7.7, "Ruby"]
k.class
=> Array
```

### Hash

O tipo `Hash` representa uma coleção de pares chave-valor, onde cada chave é única e associada a um valor específico. Por exemplo:

```ruby
k = { :Linguagem => "Ruby", :Ano => 1995, :Criador => ["Yukihiro", "Matz"] }
k.class
=> Hash
```

### Regexp

O tipo `Regexp` representa uma expressão regular, usada para verificar padrões em textos. Ela é delimitada por barras. Por exemplo:

```ruby
k = /Ruby/
k.class
=> Regexp
```

### Symbols

O tipo `Symbol` representa palavras ou identificadores, sempre começando com dois pontos. Eles são usados principalmente como chaves em hashes e também podem ser utilizados para identificação de recursos em um programa. Por exemplo:

```ruby
k = :Ruby
k.class
=> Symbol
```

### Range

O tipo `Range` representa um intervalo entre dois valores, delimitado por parênteses e reticências. Por exemplo:

```ruby
k = (1..10)
k.class
=> Range

k = (0...10)
k.class
=> Range
```

## Conversões entre Tipos

Em Ruby, é possível realizar conversões entre os tipos de dados utilizando métodos específicos. Vamos ver alguns exemplos:

### Convertendo uma String para um Integer

```ruby
r = "10"
r.to_i
=> 10
```

### Convertendo uma String para um Float

```ruby
r = "10"
r.to_f
=> 10.0
```

### Convertendo uma String para um Symbol

```ruby
r = "Ruby"
r.to_sym
=> :Ruby
```

### Convertendo um Symbol para uma String

```ruby
r = :Ruby
r.to_s
=> "Ruby"
```

### Convertendo uma String para um Array

```ruby
r = "Ruby"
r.chars
=> ["R", "u", "b", "y"]
```

### Convertendo um Range para um Array

```ruby
r = (1..10)
r.to_a
=> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
```

### Convertendo um Array para uma String separada por vírgula

```ruby
r = [7, 7, 7]
r.join(",")
=> "7,7,7"
```

## Conclusão

Neste capítulo, aprendemos sobre os principais tipos de dados em Ruby e como eles podem ser utilizados. A tipagem dinâmica torna Ruby uma linguagem flexível e amigável para desenvolvedores. Agora que você conhece os fundamentos dos tipos de dados, está pronto para prosseguir com o aprendizado. No próximo capítulo, vamos explorar variáveis e entender como armazenar e manipular dados em nossos programas Ruby.

[Próximo](3-variaveis.md)
