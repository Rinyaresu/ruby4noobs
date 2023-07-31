# Interpolação de String

A interpolação de strings em Ruby é uma técnica poderosa para combinar variáveis e outros valores dentro de uma string de forma mais conveniente. Para interpolar valores em uma string, usamos o símbolo `#{}` e colocamos a expressão que desejamos interpolar dentro desse bloco. É uma prática comum usar aspas duplas para definir as strings que serão interpoladas.

```ruby
nome = "Kaique"
puts "Olá, meu nome é #{nome}"
```

Executando:

```txt
=> Olá, meu nome é Kaique
```

Você também pode interpolar outros tipos de dados, como números e arrays:

```ruby
linguagem = "Ruby"
ano = 1995
criador = "Yukihiro 'Matz' Matsumoto"

puts "A linguagem #{linguagem} foi criada em #{ano} e o criador é #{criador}"
```

Executando:

```txt
=> A linguagem Ruby foi criada em 1995 e o criador é Yukihiro 'Matz' Matsumoto
```

Outro exemplo:

```ruby
nome = "John Doe"
idade = "23"
telefone = "21 96666-7777"
cidade = ["São Paulo", "Rio de Janeiro"]

puts "Olá, meu nome é #{nome} e tenho #{idade} anos, meu telefone é #{telefone} e moro em #{cidade[0]} e no #{cidade[1]}"
```

Executando:

```txt
=> Olá, meu nome é John Doe e tenho 23 anos, meu telefone é 21 96666-7777 e moro em São Paulo e no Rio de Janeiro
```

## Sequências de escape

Além disso, as strings em Ruby permitem o uso de sequências de escape, que são caracteres especiais que representam ações específicas na string. Alguns exemplos comuns são:

### Tabela de Códigos Especiais

| Código Especiais | Significado |
| ---------------- | ----------- |
| \n               | Nova linha  |
| \t               | Tabulação   |

`Strings` não precisam conter apenas texto. Eles também podem conter caracteres de controle. A diferença entre aspas simples ou duplas é que as aspas duplas permitem sequências de escape, enquanto as aspas simples não permitem. Exemplo:

```ruby
puts 'Ruby\nPHP'; # Aspas simples
puts "Ruby\nPHP"; # Aspas duplas + nova linha
puts "Ruby\tPHP"; # Aspas duplas + tabulação
```

Executando:

```txt
=> Ruby\nPHP
   Ruby
   PHP
   Ruby    PHP
```

No exemplo acima, a sequência de escape `\n` foi interpretada apenas quando a string foi definida com aspas duplas.

Agora que você já conhece a interpolação de strings e as sequências de escape, você pode criar strings mais dinâmicas e flexíveis em seus programas Ruby.

[Próximo](8-entrada-e-saida.md)
