# Condicionais - Tomando Decisões em Ruby

É importante saber que tudo em Ruby acaba com `end`.

## if..else

A estrutura `if..else` é utilizada para executar um bloco de código caso uma condição seja verdadeira e, caso contrário, executar outro bloco de código.

```ruby
r = "Ruby"

if r == "Ruby"
  puts "É Ruby"
else
  puts "Não é Ruby"
end
```

Esse tipo de código é usando `else` pode se tornar bem confuso, as vezes é melhor fazer um bom teste positivo (if) usando [early return](https://medium.com/swlh/return-early-pattern-3d18a41bba8).

Executando:

```txt
=> É Ruby
```

## elsif

A estrutura `elsif` é utilizada para avaliar outfa condição caso a primeira condição do `if` seja falsa.

```ruby
r = "PHP"

if r == "Ruby"
  puts "É Ruby"
elsif r == "PHP"
  puts "É PHP"
else
  puts "Não é Ruby nem PHP"
end
```

Executando:

```txt
=> É PHP
```

## unless

A estrutura `unless` é utilizada para executar um bloco de código caso uma condição seja falsa, ou seja, ela é o contrário do `if`.

```ruby
r = "PHP"

unless r == "Ruby"
  puts "Não é Ruby"
else
  puts "É Ruby"
end
```

Executando:

```txt
=> Não é Ruby
```

## case

A estrutura `case` é utilizada para executar um bloco de código de acordo com o valor de uma variável. Podemos utilizar o `case` para fazer várias comparações de forma mais clara.

```ruby
r = "JavaScript"

case r
when "Ruby"
  puts "É Ruby"
when "PHP"
  puts "É PHP"
else
  puts "Não é Ruby nem PHP"
end
```

Executando:

```txt
=> Não é Ruby nem PHP
```

## Loops (for, while, until) - Executando Blocos de Código Repetidamente

Os loops são utilizados para executar um bloco de código repetidamente enquanto uma condição específica é atendida.

### for

A estrutura `for` é utilizada para executar um bloco de código um determinado número de vezes, especificado por um range ou uma coleção.

```ruby
for i in 1..10
  puts i
end
```

Executando:

```txt
=> 1 2 3 4 5 6 7 8 9 10
```

### while

A estrutura `while` é utilizada para executar um bloco de código enquanto uma condição específica for verdadeira.

```ruby
r = "JavaScript"

while r != "Ruby"
  puts "Não é Ruby"
end
```

Executando:

```txt
=> Não é Ruby
```

**Cuidado**: Se não interromper com Ctrl+C, esse código vai ficar funcionando para sempre, pois a condição nunca se torna falsa.

### until

A estrutura `until` é utilizada para executar um bloco de código enquanto uma condição específica for falsa.

```ruby
i = 0

until i == 7
  puts i
  i += 1
end
```

Executando:

```txt
=> 0 1 2 3 4 5 6
```

## Interrompendo e Repetindo Loops

Dentro de um loop, podemos utilizar três interações:

1. break: Sai do loop.
2. next: Vai para a próxima iteração.
3. redo: Repete o loop do início, sem reavaliar a condição ou pegar o próximo elemento.

### break

```ruby
for i in (0..77)
  break if i == 4
  puts i
end
```

Executando:

```txt
=> 0 1 2 3
```

## next

```ruby
for i in (0..77)
  next if i == 4
  puts i
end
```

Executando:

```txt
=> 0 1 2 3 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29 30 31 32 33 34 35 36 37 38 39 40 41 42 43 44 45 46 47 48 49 50 51 52 53 54 55 56 57 58 59 60 61 62 63 64 65 66 67 68 69 70 71 72 73 74 75 76 77
```

## redo

```ruby
for i in (0..77)
  redo if i == 4
  puts i
end
```

Executando:

```txt
=> 0 1 2 3
```

Cuidado: Se não interromper com Ctrl+C, esse código vai ficar funcionando para sempre, pois o redo repete o loop do início, sem reavaliar a condição ou pegar o próximo elemento.

Neste capítulo, aprendemos sobre as estruturas condicionais e loops em Ruby, que nos permitem tomar decisões e executar blocos de código repetidamente com base em condições específicas. Essas estruturas são fundamentais para controlar o fluxo do programa e criar lógicas mais avançadas.

[Próximo](7-interpolacao.md)
