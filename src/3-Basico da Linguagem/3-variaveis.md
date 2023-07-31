# Variáveis - Armazenando Valores em Ruby

Neste capítulo, vamos aprender sobre variáveis em Ruby, que nos permitem armazenar e manipular valores na memória do sistema. As variáveis são essenciais para dar nomes a dados que usamos frequentemente em nossos programas. Veremos como criar e utilizar variáveis, além de entender os diferentes tipos de variáveis disponíveis em Ruby.

## Criando e Atribuindo Valores a Variáveis

Em Ruby, podemos criar variáveis simplesmente atribuindo um valor a elas. Uma variável pode ser composta por letras, dígitos e travessões, mas deve começar com uma letra minúscula.

```ruby
x = 10
y = 20
```

## Constantes

As constantes são variáveis que não podem ser alteradas após a atribuição inicial. Elas começam com uma letra maiúscula.

```ruby
Nome = "Ruby"
Nome = "PHP" # Isso causará um aviso, pois as constantes não podem ser reatribuídas.

=> (irb):2: warning: already initialized constant Nome
=> (irb):1: warning: previous definition of Nome was here
```

## Variáveis Locais

Variáveis locais são aquelas que existem dentro de um bloco específico, como um método ou uma estrutura condicional.

```ruby
x = 10
```

## Variáveis Globais

Variáveis globais começam com um cifrão ($). Elas podem ser acessadas de qualquer lugar do código e podem ter escopo global.

```ruby
$x = 100
```

## Variáveis de Instância

Variáveis de instância começam com uma arroba (@). Elas são acessíveis apenas dentro de um método de uma classe específica.

```ruby
@x = 10
```

## Variáveis de Classe

Variáveis de classe começam com duas arrobas (@@). Elas são compartilhadas entre todas as instâncias de uma classe.

```ruby
class Exemplo
  @@contador = 0

  def initialize
    @@contador += 1
  end

  def self.contador
    @@contador
  end
end
```

## Conclusão

Neste capítulo, aprendemos sobre variáveis em Ruby e como elas nos permitem armazenar e manipular valores. As variáveis são essenciais para criar programas mais dinâmicos e reutilizáveis. Lembre-se de seguir as convenções de nomenclatura e escolher nomes significativos para suas variáveis, tornando o código mais legível e fácil de entender.

No próximo capítulo, exploraremos os operadores aritméticos e como realizar operações matemáticas em Ruby.

[Próximo](4-operadores-aritimeticos.md)
