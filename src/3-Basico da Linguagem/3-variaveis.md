# Variáveis

Variável é uma referência de um valor que é armazenado na memória do sistema. Em Ruby qualquer palavra simples, em minúsculas, é uma variável. E elas podem ser compostas por letras, dígitos e travessões. Por exemplo:

```text
x, y, cachorro133, cachorro_caramelo
```

Com variáveis você dá nomes a algo que você usa frequentemente. Por exemplo, você pode criar uma variável para armazenar um número, e depois usar outra variável para armazenar outro número.

```ruby
x = 10
y = 20
```

## Constantes

Constantes são variáveis que não podem ser alteradas. Por exemplo:

```ruby
> Nome = "Ruby"
> Nome = "PHP" 

> (irb):2: warning: already initialized constant Nome
> (irb):1: warning: previous definition of Nome was here
```

## Variáveis Locais

Variáveis locais são variáveis que só existem dentro de um bloco. Por exemplo:

```ruby
x = 10
```

## Variáveis Globais

Variáveis que começam com um cifrão são globais. Ou seja, elas são acessíveis de qualquer lugar do código.

```ruby
$x, $y, $cachorro133, $cachorro_caramelo
```

## Variáveis de Instância

Variáveis que começam com um arroba são variáveis de instância. Ou seja, elas são acessíveis apenas dentro de um método.

```ruby
@x, @y, @cachorro133, @cachorro_caramelo
```

## Variáveis de Classe

Variáveis que começam com duas arrobas são variáveis de classe. Ou seja, elas são acessíveis apenas dentro de uma classe.

```ruby
@@x, @@y, @@cachorro133, @@cachorro_caramelo
```

[Próximo](4-operadores-artimeticos.md)