# Entrada e Saída

Neste módulo, vamos aprender sobre entrada e saída de dados em Ruby, ou seja, como interagir com o usuário através de mensagens impressas na tela e lendo respostas fornecidas pelo usuário.

## Saída (Output)

A função `puts` é utilizada para imprimir uma mensagem na tela. Como por exemplo:

```ruby
puts "Hello World"
```

Nós podemos "_dar puts_" em qualquer lugar do código. E com quase todos os [tipos de dados](./2-tipos-de-dados.md). Por exemplo:

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

Para ler uma entrada do usuário, podemos usar a função `gets`. No entanto, é importante notar que o `gets` também inclui o caractere de nova linha (`\n`) ao final da entrada, o que pode não ser desejado em muitos casos. Para evitar isso, usamos o método `chomp` para remover o caractere de nova linha.

Aqui está um exemplo de como ler uma entrada do usuário e exibir o que foi digitado:

```ruby
puts "Digite algo: "
text = gets
puts "Você digitou: #{text}"
```

No exemplo acima, o programa solicita que o usuário digite algo. Em seguida, ele lê a entrada e a atribui à variável text. Por fim, imprime a mensagem "Você digitou:" seguida do que o usuário digitou.

Podemos combinar a leitura de entrada com a interpolação de strings para criar interações mais ricas com o usuário:

```ruby
puts "Qual é o seu nome? "
nome = gets.chomp
puts "Qual é a sua idade? "
idade = gets.chomp
puts "Seu nome é #{nome} e você tem #{idade} anos."
```

No exemplo acima, o programa solicita ao usuário que digite seu nome e idade, lê as entradas e, em seguida, usa a interpolação para exibir uma mensagem personalizada com as informações fornecidas pelo usuário.

Continue praticando a saída e entrada de dados para criar interações interessantes em seus programas Ruby.

[Próximo](9-metodos.md)
