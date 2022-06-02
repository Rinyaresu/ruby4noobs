# Condicionais

É importante saber que tudo em Ruby acaba com `end`

## if..else

`if` é uma estrutura de controle que executa uma determinada ação caso uma condição seja verdadeira.

`else` é uma estrutura de controle que executa uma determinada ação caso uma condição seja falsa.

```ruby
if r == "Ruby"
  puts "É Ruby"
else
  puts "Não é Ruby"
end

# Executando: É Ruby
```

## elsif

`elsif` é um `else` `if`

```ruby
if r == "Ruby"
  puts "É Ruby"
elsif r == "PHP"
  puts "É PHP"
else
  puts "Não é Ruby nem PHP"
end
```

## unless

`unless` é o contrário do `if` e ele é utilizado para negar uma condição e executar o bloco caso a condição seja falsa.

```ruby
unless r == "Ruby"
  puts "Não é Ruby"
else
  puts "É Ruby"
end
```

## case

`case` é utilizado para executar um bloco de código de acordo com uma condição. É possível utilizar mais de uma condição. Podemos utilizar o case para fazer algumas comparações interessantes

```ruby
case r
when "Ruby"
  puts "É Ruby"
when "PHP"
  puts "É PHP"
else
  puts "Não é Ruby nem PHP"
end
```

## for

`for` é utilizado para executar um bloco de código de acordo com um determinado número de vezes. É possível utilizar o `for` para fazer algumas repetições interessantes

```ruby
for i in 1..10
  puts i
end
```

## while

`while` é utilizado para executar um bloco de código enquanto uma condição for verdadeira. (Faça enquanto)

```ruby
while r != "Ruby"
  puts "Não é Ruby"
end
```

## until

`until` é utilizado para executar um bloco de código enquanto uma condição for falsa. (Faça até que)

```ruby
until r == "Ruby"
  puts "Não é Ruby"
end
```

## loop

Interações dentro de um loop:

1. break - sai do loop
2. next - vai para a próxima iteração
3. redo - repete o loop do início, sem reavaliar a condição ou pegar o próximo elemento

Vamos utilizar essas interações:

## break

```ruby
for i in (0..77)
  break if i == 4
    puts i
  end
end

# Executando: 0 1 2 3
```

## next

```ruby
for i in (0..77)
  next if i == 4
    puts i
  end
end

# Executando: 0 1 2 3 5...
```

## redo

```ruby
for i in (0..77)
  redo if i == 4
  puts i
end

# Executando: 0 1 2 3

# Se não interromper com Ctrl+C, esse código vai ficar funcionando para sempre.
```
