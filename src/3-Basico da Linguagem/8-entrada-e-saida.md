# Entrada e Saída

Nesse módulo vamos aprender entrada e saída, no nosso [hello-world](../3-Basico%20da%20Linguagem/1-hello-world.md) nós vimos como utilizar o `puts` para imprimir uma mensagem na tela. Isso é um exemplo de saída. Agora vamos aprender como utilizar o `gets` para ler uma mensagem do usuário. E entender o conceito de entrada e saída.

## Saída (Output)

A função `puts` é utilizada para imprimir uma mensagem na tela. Como por exemplo:

```ruby
puts "Hello World"
```

Nós podemos "*dar puts*" em qualquer lugar do código. E com quase todos os [tipos de dados](./2-tipos-de-dados.md). Por exemplo:

```ruby
puts "Hello World"
puts 123
puts true
puts false
puts nil
puts [1, 2, 3]
puts :ruby
puts (1..10)
```

## Entrada (Input)

Agora vamos usar a interpolação que aprendemos anteriormente para imprimir uma mensagem e ler uma entrada do usuário.

A função `gets` é utilizada para ler uma mensagem do usuário. Como por exemplo:

```ruby
puts "Digite algo: "
text = gets
puts "Você digitou: #{text}"
```

Vamos tentar utilizar tudo que aprendermos como interpolação, variáveis e tipos de dados.

```ruby
puts "Qual é o seu nome? " # Imprime a mensagem
nome = gets.chomp # Lê a entrada do usuário e remove o \n do final
puts "Qual é a sua idade? " # Imprime a mensagem
idade = gets.chomp # Lê a entrada do usuário e remove o \n do final
puts "Seu nome é #{nome} e você tem #{idade} anos." # Imprime a mensagem com a interpolação
```

[Próximo](9-metodos.md)
