# Classes e Objetos

Tudo em ruby é um **objeto**. Então vamos aprender a criar os nossos próprios. Para isso, vamos começar criando uma classe chamada `Pessoa`.

```ruby
class Pessoa
  def initialize(nome, idade)
    @nome = nome
    @idade = idade
  end
end

pessoa = Pessoa.new("Mc Poze do Rodo", 23)
p pessoa
puts pessoa
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

Vamos fazer um método novo na classe para mostrar as informações de uma maneira mais bonita. Se lembra que em [tipos de dados](../3-Basico%20da%20Linguagem/2-tipos-de-dados.md) utilizamos um método chamado `to_s`, que converte o objeto em uma `String`? Vamos usar ele.

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

pessoa = Pessoa.new("Mc Poze do Rodo", 23)
p pessoa
puts pessoa
```

Executando o código acima, você vai ver que a classe `Pessoa` foi criada como um objeto, e como o método `to_s` foi criado, ele foi chamado automaticamente.

```txt
=> #<Pessoa:0x00007f533fb23178 @nome="Mc Poze do Rodo", @idade=23>
=> Nome: Mc Poze do Rodo Idade: 23
```

## attr_reader

Anteriormente vimos como criar nossos **objetos** e suas propriedades usando variáveis de instância, mas nos podemos lê-las?

Vamos acessá-las usando as nossas variáveis de instância:

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

pessoa = Pessoa.new("Mc Poze do Rodo", 23)
puts pessoa.nome
puts pessoa.idade
```

Ops..

Executando o código acima, você vai ver que a recebemos um **erro**.

```txt
=> undefined method 'nome' for #<Pessoa:0x00007f533fa44888 @nome="Mc Poze do Rodo", @idade=23> (NoMethodError)

=> undefined method 'idade' for #<Pessoa:0x00007f533fa44888 @nome="Mc Poze do Rodo", @idade=23> (NoMethodError)
```

Essas variáveis são privadas do **objeto**, e não podem ser lidas sem um método de acesso. Então nos podemos resolver isso usando `attr_reader`:

```ruby
class Pessoa
  attr_reader :nome, :idade
  
  def initialize(nome, idade)
    @nome = nome
    @idade = idade
  end

  def to_s
  "Nome: #{@nome} Idade: #{@idade}"
  end
end

pessoa = Pessoa.new("Mc Poze do Rodo", 23)
puts pessoa.nome
puts pessoa.idade
```

Executando o código agora nos vamos ter a resposta esperada:

```txt
=> Mc Poze do Rodo
=> 23
```

## attr_writer

E se agora nos quisermos trocar o nome ou a idade usando as variáveis?

```ruby
class Pessoa
  attr_reader :nome, :idade
  
  def initialize(nome, idade)
    @nome = nome
    @idade = idade
  end

  def to_s
  "Nome: #{@nome} Idade: #{@idade}"
  end
end

pessoa = Pessoa.new("Mc Poze do Rodo", 23)
pessoa.idade = 24
```

Executando o código acima, você vai ver que recebemos um erro de `undefined method`:

```irb
=> undefined method `idade=' for #<Pessoa:0x00007f548af5c7c0 @nome="Mc Poze do Rodo", @idade=23> (NoMethodError)
```

No exemplo do `attr_reader` criamos **atributos de leitura**, que nos permitem a leitura da propriedade. Se precisarmos de algum **atributo de escrita**, para trocarmos a `idade` ou `nome` da `Pessoa`, podemos usar:

```ruby
class Pessoa
  attr_reader :nome, :idade
  attr_writer :idade 
  
  def initialize(nome, idade)
    @nome = nome
    @idade = idade
  end

  def to_s
  "Nome: #{@nome} Idade: #{@idade}"
  end
end

pessoa = Pessoa.new("Mc Poze do Rodo", 23)
pessoa.idade = 24
puts pessoa
```

Executando o código agora nos vamos ter a resposta esperada:

```txt
=> Nome: Mc Poze do Rodo Idade: 24
```

## attr_accessor

`attr_accessor` é um método que nos ajuda a fazer o que foi ensinado acima de uma forma mais fácil e menos repetitiva. Como por exemplo:

```ruby
class Pessoa
  attr_accessor :nome, :idade
  
  def initialize(nome, idade)
    @nome = nome
    @idade = idade
  end

  def to_s
  "Nome: #{@nome} Idade: #{@idade}"
  end
end

pessoa = Pessoa.new("Mc Poze do Rodo", 23)
pessoa.idade = 21
pessoa.nome = "MC Poze Pitbull do Funk"
puts pessoa
```

Executando o código agora nos vamos ter a resposta esperada:

```txt
=> Nome: MC Poze Pitbull do Funk Idade: 21
```

## Variáveis de Classe

Também podemos criar [variáveis de classe](../3-Basico%20da%20Linguagem/3-variaveis.md), que são variáveis que são compartilhadas por todos os objetos da classe.

```ruby
class Pessoa
  attr_accessor :nome, :idade
  @@contador = 0
  
  def initialize(nome, idade)
    @nome = nome
    @idade = idade
    @@contador += 1
  end

  def to_s
  "Nome: #{@nome} Idade: #{@idade}"
  end
  
  def self.contador # utilizando self para não precisar de um objeto para acessar a variável de classe. Sem o self iriamos precisar usar o objeto Poze.contador para acessar a variável de classe.
    @@contador
  end
end

pessoa = Pessoa.new("Mc Poze do Rodo", 23)

puts Pessoa.contador
```

Executando o código nos vamos ter a resposta esperada:

```txt
=> 1
```

## Herança

Em Ruby, temos *herança única*, que significa que uma classe pode apenas ser criada herdando de apenas outra classe, reduzindo a complexidade do código.
Dessa forma, podemos ao invés de repetir a definição de métodos por classes similares, pode realizar essa operação em uma única classe (também chamada de **superclasse**) e as outras que possuem métodos comuns (chamadas de **subclasses**) herdam essas funcionalidades da sua superclasse. **A herança ajuda a reduzir substancialmente a duplicação de código.** Como por exemplo:

```ruby
class Pessoa
  attr_accessor :nome, :idade
  @@contador = 0
  
  def initialize(nome, idade)
    @nome = nome
    @idade = idade
    @@contador += 1
  end

  def to_s
  "Nome: #{@nome} Idade: #{@idade}"
  end
  
  def self.contador
    @@contador
  end
end

class OutraPessoa < Pessoa
  def to_s
    "Outra pessoa: #{super}"
  end
end

pessoa = Pessoa.new("Mc Poze do Rodo", 23)
pessoa2 = OutraPessoa.new("Beethoven", 56)

puts pessoa
puts pessoa2
```

Executando o código nos vamos ter a resposta esperada:

```txt
=> Nome: Mc Poze do Rodo Idade: 23
=> Outra pessoa: Nome: Beethoven Idade: 56
```

Espero que tenha entendido como funcionam classes e objetos em ruby. Isso não é tudo desse tema, mas é o suficiente para que você possa começar a aprender a programar usando classes e objetos. 😉

[Próximo](2-dependencias.md)
