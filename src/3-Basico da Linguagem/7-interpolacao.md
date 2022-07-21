# Interpolação de String

Interpolação trata-se de combinar strings, mas não usando o operador `+`. Dessa vez utilizaremos o símbolo `#{}` para colocarmos o que queremos interpolar dentro de uma string. Em ruby é possível interpolar qualquer tipo de dado. E é uma boa prática utilizar aspas duplas `""` para interpolar strings. Como por exemplo:

```ruby
nome = "Kaique"

puts "Olá meu nome é #{nome}"
=> Olá meu nome é Kaique
```

Vamos usar todos os tipos de dados:

```ruby
linguagem = "Ruby"
ano = 1995
criador = "Yukihiro 'Matz' Matsumoto" # Usando aspas simples dentro de aspas duplas para conseguir usar aspas

puts "A linguagem #{linguagem} foi criada em #{ano} e o criador é #{criador}"

=> # A linguagem Ruby foi criada em 1995 e o criador é Yukihiro 'Matz' Matsumoto
```

Outro exemplo:

```ruby
nome = "Mc Poze do Rodo"
idade = "23"
telefone = "21 96666-7777"
cidade = ["São Paulo", "Rio de Janeiro"]

puts "Olá, meu nome é #{nome} e tenho #{idade} anos, meu telefone é #{telefone} e moro em #{cidade[0]} e no #{cidade[1]}"

=> # Olá, meu nome é Mc Poze do Rodo e tenho 23 anos, meu telefone é 21 96666-7777 e moro em São Paulo e no Rio de Janeiro
```

## Sequências de escape

### Tabela de Códigos Especiais

|Código Especiais | Significado |
|-----------------| ------------
| \n              |  Nova linha |
| \t              |  Tabulação  |

`Strings` não precisam conter apenas texto. Eles também podem conter caracteres de controle. A diferença entre aspas simples ou duplas é que as aspas duplas permitem sequências de escape, enquanto as aspas simples não permitem. Exemplo:

```ruby
puts 'Ruby\nPHP'; # Aspas simples

puts "Ruby\nPHP"; # Aspas duplas + nova linha

puts "Ruby\tPHP"; # Aspas duplas + tabulação

=> Ruby\nPHP
   Ruby
   PHP
   Ruby    PHP
```

No exemplo acima, `\n` é a sequência de escape que representa o caractere de “nova linha”.

Com esses exemplos espero que você tenha obtido um pouco conhecimento sobre interpolação e a quantidade de coisas que você pode fazer com isso juntado como tudo que ja aprendemos. 😁

[Próximo](8-entrada-e-saida.md)
