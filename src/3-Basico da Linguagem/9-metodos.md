# Métodos

Olá! Neste módulo, vamos aprender sobre métodos em Ruby. Os métodos são blocos de código que executam uma ação específica e podem receber parâmetros para realizar tarefas com base nos valores passados a eles.

## Definindo um Método

Em Ruby, podemos definir nossos próprios métodos usando a palavra-chave `def`, seguida do nome do método em letras minúsculas, seguido pelos parâmetros (se houver) entre parênteses. O bloco de código do método é delimitado por `end`. É uma boa prática usar parênteses mesmo quando não há parâmetros.

Aqui está um exemplo básico de um método chamado `fale_ruby` que simplesmente imprime a palavra "Ruby!" na tela:

```ruby
def fale_ruby
  puts "Ruby!"
end

fale_ruby
```

Executando:

```txt
=> "Ruby!"
```

## Parâmetros

Os métodos em Ruby podem receber parâmetros, que são valores que podemos passar quando chamamos o método. Para definir um método com parâmetros, basta incluir seus nomes entre os parênteses após o nome do método.

Por exemplo, vamos criar um método chamado `soma` que recebe dois parâmetros e retorna a soma deles:

```ruby
def soma(a, b)
  a + b
end

puts soma(5, 6)
```

Executando:

```txt
=> 11
```

Neste exemplo, o método soma recebe dois parâmetros (a e b) e retorna a soma deles.

### História do Brasil - Exemplo com Método e Switch Case

> Dados levemente alterados para conseguirmos executar sem bugs 😁

```ruby

def historia_do_brasil(ano)
  case ano
  when 1500
    'Chegada dos Portugueses ao Brasil'
  when 1530..1814
    'Período colonial'
  when 1815..1821
    'Período Reinado'
  when 1822..1888
    'Período Imperial'
  when 1889..2022
    'Em 1889. A escravidão foi abolida e o Brasil passou a ter um período republicano ditatorial'
  end
end

puts historia_do_brasil(1889) # Você pode alterar o ano aqui para ver os resultados correspondentes
```

Neste exemplo, o método `historia_do_brasil` recebe o ano como parâmetro e, com base no ano fornecido, retorna uma string descrevendo o período histórico correspondente.

Agora você já tem uma ideia de como criar e usar métodos em Ruby. Continue praticando e explorando mais conceitos para melhorar suas habilidades de programação em Ruby.

[Próximo](../4-Modulo%20Intermediario/1-classes-e-objetos.md)
