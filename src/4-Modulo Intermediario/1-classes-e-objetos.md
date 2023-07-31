# Classes e Objetos

Neste módulo, vamos aprender sobre classes e objetos em Ruby. Em Ruby, tudo é um objeto, e podemos criar nossos próprios objetos usando classes. Vamos começar criando uma classe chamada `Pessoa`.

## Criando uma Classe

Para criar uma classe, usamos a palavra-chave `class`, seguida pelo nome da classe. Conforme as convenções de Ruby, os nomes das classes são escritos em CamelCase, com a primeira letra de cada palavra em maiúsculo. Por exemplo, podemos criar classes como `CachorroCaramelo`, `CarroPersonalizado` e `MeuComputador`.

Vamos criar a classe `Pessoa` com duas propriedades: `nome` e `idade`.

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

Ao executar o código acima, você verá que a classe `Pessoa` foi criada como um objeto. No entanto, ao imprimir o objeto com `puts`, apenas a referência na memória é mostrada, não os valores das propriedades.

```txt
=> #<Pessoa:0x00007fcab271e1c8 @nome="Mc Poze do Rodo", @idade=23>
=> #<Pessoa:0x00007fcab271e1c8>
```

### Método to_s

Para exibir o objeto de forma mais amigável, podemos definir o método to_s dentro da classe. Esse método é chamado quando tentamos exibir o objeto como uma string.

Vamos adicionar o método to_s à nossa classe Pessoa:

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

Agora, ao executar o código, o método to_s será chamado automaticamente e exibirá o objeto de uma forma mais legível.

```txt
=> #<Pessoa:0x00007f533fb23178 @nome="Mc Poze do Rodo", @idade=23>
=> Nome: Mc Poze do Rodo Idade: 23
```

## Atributos de Leitura e Escrita

No exemplo anterior, criamos objetos da classe `Pessoa` com duas propriedades: `nome` e `idade`. No entanto, atualmente não temos acesso a essas propriedades diretamente. Precisamos criar métodos de acesso para ler e escrever nessas propriedades.

## `attr_reader`

Para permitir apenas a leitura das propriedades, podemos usar `attr_reader`. Isso cria automaticamente métodos de leitura para as variáveis de instância que queremos expor.

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

Executando o código acima, você obterá a saída esperada:

```txt
=> Mc Poze do Rodo
=> 23
```

# `attr_writer`

Da mesma forma, para permitir apenas a escrita nas propriedades, podemos usar `attr_writer`. Isso cria automaticamente métodos de escrita para as variáveis de instância que queremos expor.

```ruby

class Pessoa
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

## `attr_accessor`

Para criar métodos de leitura e escrita automaticamente para nossas variáveis de instância, podemos usar `attr_accessor`. Isso combina as funcionalidades de `attr_reader` e `attr_writer` em uma única chamada.

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

## Variáveis de Classe

Podemos criar variáveis de classe que são compartilhadas por todos os objetos da classe. Essas variáveis podem ser usadas para contar o número de objetos criados daquela classe, por exemplo.

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

pessoa = Pessoa.new("Mc Poze do Rodo", 23)
puts Pessoa.contador
```

Executando o código nos vamos ter a resposta esperada:

```txt
=> 1
```

## Herança

Em Ruby, a herança é única, o que significa que uma classe pode herdar apenas de uma única classe (superclasse). Isso simplifica o código, pois não precisamos lidar com várias heranças como em outras linguagens.

A herança permite que uma classe (subclasse) herde os métodos e atributos de outra classe (superclasse) e, ao mesmo tempo, adicione ou substitua comportamentos específicos.

Vamos criar uma subclasse chamada `OutraPessoa` que herda da classe `Pessoa`. Nessa subclasse, vamos definir um método `to_s` que adiciona uma mensagem adicional à representação em `string` da classe `Pessoa`.

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

Isso mostra que a subclasse `OutraPessoa` herdou o método `to_s` da classe `Pessoa`, mas adicionou uma mensagem adicional à sua representação em string.

Espero que você tenha entendido como funcionam as classes e objetos em Ruby. Embora tenhamos abordado apenas conceitos básicos aqui, é o suficiente para começar a programar usando classes e objetos.

[Próximo](2-dependencias.md)
