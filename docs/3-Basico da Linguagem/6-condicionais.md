# Condicionais

É importante saber que tudo em Ruby acaba com `end`.

## if..else

`if` é uma estrutura de controle que executa uma determinada ação caso uma condição seja verdadeira.

`else` é uma estrutura de controle que executa uma determinada ação caso uma condição seja falsa.

```ruby
r = "Ruby"

if r == "Ruby"
  puts "É Ruby"
else
  puts "Não é Ruby"
end
```

Executando:

```txt
=> É Ruby
```

## elsif

`elsif` é um `else` junto com `if`.

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

`unless` é o contrário do `if` e ele é utilizado para negar uma condição e executar o bloco caso a condição seja falsa.

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

Esse tipo de código é bem confuso, as vezes é melhor fazer um bom teste positivo (if).

## case

`case` é utilizado para executar um bloco de código de acordo com uma condição. É possível utilizar mais de uma condição. Podemos utilizar o case para fazer algumas comparações interessantes.

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

## for

`for` é utilizado para executar um bloco de código de acordo com um determinado número de vezes. É possível utilizar o `for` para fazer algumas repetições interessantes.

```ruby
for i in 1..10
  puts i
end
```

Executando:

```txt
=> 1 2 3 4 5 6 7 8 9 10
```

## while

`while` é utilizado para executar um bloco de código enquanto uma condição for verdadeira. (Faça enquanto).

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

Se não interromper com Ctrl+C, esse código vai ficar funcionando para sempre.

## until

`until` é utilizado para executar um bloco de código enquanto uma condição for falsa. (Faça até que).

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

## loop

Interações dentro de um loop:

1. `break` - sai do `loop`
2. `next` - vai para a próxima iteração
3. `redo` - repete o `loop` do início, sem reavaliar a condição ou pegar o próximo elemento

Vamos utilizar essas interações:

## break

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

Se não interromper com Ctrl+C, esse código vai ficar funcionando para sempre.
