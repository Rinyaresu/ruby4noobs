# Tratamento de Exceções

O tratamento de exceções é uma parte fundamental da programação, permitindo lidar com erros e situações inesperadas de forma controlada. Vamos estudar como lidar com exceções em _Ruby_.

Para obter informações sobre os tipos de exceção disponíveis em Ruby, você pode consultar a [documentação oficial de exceções](https://docs.ruby-lang.org/en/master/Exception.html). Essa documentação lista os diferentes tipos de exceção, suas descrições e hierarquias.

## Bloco `begin`, `rescue` e `end`

Podemos utilizar o bloco begin, rescue e end para capturar exceções e executar um bloco de código alternativo quando um erro ocorre.

Antes, vamos fazer uma continha simples:

```ruby
resultado = 10 / 0
```

E é assim que você explode o seu terminal. ou só recebe um "main.rb:1:in `/': divided by 0 (ZeroDivisionError)", mas é parecido

Lidaremos com isso de uma forma um pouco melhor:

```ruby
begin
  resultado = 10 / 0 # isso causará uma exceção, que podemos intervir com 'rescue'
rescue ZeroDivisionError
  puts "Erro de divisão por zero!" # aqui nós inserimos o código de tratamento, no caso, uma mensagem.
end
```

### Tratamento de exceções em cadeia

O estagiário estava aprendendo ruby, mas mesmo com o 'tratamento de erros' que ele aprendeu alguma coisa ainda estava errada.

```ruby
begin
  resultado = 10 / 0.to_s
rescue ZeroDivisionError
  puts "Erro de divisão por zero!"
end

# Output:
# main.rb:2:in `/': String can't be coerced into Integer (TypeError)
#     from main.rb:2:in `<main>'
# exit status 1

```

Então, pra salvar o emprego do coitado, a gente salva a vida dele. Por enquanto...

```ruby
begin
  resultado = 10 / 0.to_s
rescue ZeroDivisionError
  puts "Erro de divisão por zero!"
rescue TypeError => e
  puts "Erro: #{e}"
end

# Output:
# Erro: String can't be coerced into Integer
```

E em caso de necessidade de dar um passo a mais:

```ruby
begin
  erro_acessado = nil
  resultado = 10 / 0.to_s
rescue ZeroDivisionError
  erro_acessado = 1
  puts "Erro de divisão por zero!"
  raise "Erro interno!"
rescue TypeError => e
  erro_acessado = 2
  puts "Um erro de Tipo ocorreu: #{e.message}"
ensure # Esta parte sempre será executada
  puts "Fim da execução. Erro: #{erro_acessado}"
end
```

## Lançando uma exceção pré-definida

As vezes, o levantamento de erros pode salvar a sua vida, evitar que o sistema continue executando um código com dados que você não deseja, evitar uma sobrecarga, um delete com where incorreto.
Para evitar essa dor de cabeça, fazemos:

```ruby
def dividir(a, b)
  raise ZeroDivisionError, "Divisão por zero!" if b == 0
  a / b
end

begin
  resultado = dividir(10, 0)
rescue StandardError => e
  puts "Erro: #{e.message}" # Output: "Erro: Divisão por zero!"
end
```

## Lançando uma exceção Personalizada

No ruby, você sempre tem espaço para ir além. Se você precisa muito de um novo formato de erro, sabe que vai utilizar várias vezes, por exemplo, você pode simplesmente personalizá-lo!

```ruby
class MeuErroPersonalizado < StandardError
end

def meu_metodo
  raise MeuErroPersonalizado, "Isso é um erro personalizado!"
end

begin
  meu_metodo
rescue MeuErroPersonalizado => e
  puts "Erro personalizado: #{e.message}"
end
```

O tratamento de exceções em Ruby é uma ferramenta poderosa para lidar com erros de forma elegante e controlada. Lembre-se de que é uma boa prática ser específico ao capturar exceções e evitar capturar todas as exceções com rescue Exception, a menos que você saiba exatamente o que está fazendo.

Com isso adquirimos compreensão dos tratamentos de exceções em _Ruby_. Espero que tenha entendido bem, e que isso possa ajudar nos futuros projetos que você com certeza vai se bem suceder!
