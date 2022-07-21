# Métodos

Olá. Vamos ver como escrever nossos próprios métodos. Note que podemos definir métodos facilmente em Ruby, usando `def`, terminando (**sempre**) com `end`. Segundo as convenções de Ruby, nos nomes dos métodos deve-se usar letras minúsculas separando as palavras com um sublinhado (_).

## Mas, o que são métodos?

Métodos são o meio que utilizamos para ler, modificar e definir os atributos de um objeto.

Exemplo de método básico:

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

Para passar informações a um método pode-se incluir um ou mais **parâmetros** depois do seu nome. Nesse caso, **os parênteses devem ser utilizados**, apesar de não ser obrigatório, mas a boa prática pede a sua utilização

Exemplo de retorno de valor com o uso de parênteses e envio de variáveis como argumentos:

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

Ao executarmos o primeiro exemplo podemos perceber que não é obrigatório usar **parênteses** para chamar o método, e nem `return` para retornar um valor, como é necessário em outras linguagens.

Mas no segundo exemplo é necessário usar **parênteses** por ser um método que **recebe dois parâmetros**.

Vamos utilizar tudo que aprendermos anteriormente e criar um novo método e aprender um pouco da história do nosso Brasil:

```ruby
# Dados levemente alterados para conseguirmos executar sem bugs 😁

def historia_do_brasil(ano)
  case ano
  when 1500
  "Chegada dos Portugueses ao Brasil"
  when 1530..1814
  "Período colonial"
  when 1815..1821
    "Período Reinado"
  when 1822..1888 
  "Período Imperial"
  when 1889..2022
  "Em 1889. A escravidão foi abolida e o Brasil passou a ter um período republicano ditatorial" 
  end
end

puts historia_do_brasil(1889) # Aqui nos podemos mudar o ano para ver os resultados diferentes
```

Espero que tenham entendido o que aconteceu nesse exemplo. Se não tiverem entendido, não se preocupem, vamos aprender mais sobre como usar métodos nas próximas aulas. 😁

[Próximo](../4-Modulo%20Intermediario/1-classes-e-objetos.md)
