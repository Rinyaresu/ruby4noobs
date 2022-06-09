# Classes e Objetos

Tudo em ruby é um **objeto**. Então vamos aprender a criar os nossos próprios. Para isso, vamos começar criando uma classe chamada `Pessoa`.

```ruby
class Pessoa
  def initialize(nome, idade)
    @nome = nome
    @idade = idade
  end
end

Poze = Pessoa.new("Mc Poze do Rodo", 23)
p Poze
puts Poze
```

Executando o código acima, você vai ver que a classe `Pessoa` foi criada como um objeto.

```txt
=> #<Pessoa:0x00007fcab271e1c8 @nome="Mc Poze do Rodo", @idade=23>
=> #<Pessoa:0x00007fcab271e1c8>
```

Como visto acima, Para criarmos uma classe, usamos a palavra-chave `class`, seguida pelo nome da classe.

Segundo as convenções de **Ruby**, nos nomes das classes é utilizado [camel case](https://pt.wikipedia.org/wiki/CamelCase), da mesma maneira que em [Java](https://github.com/paulorievrs/java4noobs/blob/master/4%20-%20Intermedi%C3%A1rio/04-PrimeiraClasse.md), com maiúsculas separando duas ou mais palavras no nome da classe. Temos então classes com nomes como `CachorroCaramelo`, `CarroPersonalizado`, `MeuComputador`.

As propriedades do nosso objeto são armazenadas no que já explicamos antes e chamamos de [variáveis de instância](../3-Basico%20da%20Linguagem/3-variaveis.md), que são variáveis dentro do objeto cujo nome se inicia com `@`. Se fizermos referência para alguma que ainda não foi criada, **ela será**.

Podemos inicializar várias dessas variáveis dentro do método `initialize`, que é o construtor do nosso objeto, chamado após o método `new`, que aloca espaço na memória para o objeto sendo criado.

## Transformando em string

Podemos ver acima que usando `puts` para verificar o nosso **objeto**, foi mostrada somente a referência dele na memória. Mas, para vermos o objeto completo, precisamos transformar o objeto em string.

Vamos fazer um método novo na classe para mostrar as informações de uma maneira mais bonita. Se lembra que em [tipos de dados](../3-Basico%20da%20Linguagem/2-tipos-de-dados.md) utilizamos um método chamado `to_s`, que converte o objeto em uma `String`? vamos usar ele.

Vamos criar um método para a nossa classe:

```ruby
class Pessoa
  def initialize(nome, idade)
    @nome = nome
    @idade = idade
  end

  def to_s
  "Nome: #{@nome} Idade: #{@idade}"
  end
end

Poze = Pessoa.new("Mc Poze do Rodo", 23)
p Poze
puts Poze
```

Executando o código acima, você vai ver que a classe `Pessoa` foi criada como um objeto, e como o método `to_s` foi criado, ele foi chamado automaticamente.

```txt
=> #<Pessoa:0x00007f533fb23178 @nome="Mc Poze do Rodo", @idade=23>
=> Nome: Mc Poze do Rodo Idade: 23
```
