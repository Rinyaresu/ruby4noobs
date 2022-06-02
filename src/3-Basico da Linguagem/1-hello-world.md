# O famoso "Hello World" e um pouco mais

Apos á instalação do Ruby, nada melhor que começarmos escrevendo o famoso "Hello World". Para isso, vamos criar um diretório chamado `src` e dentro dele um arquivo chamado `hello-world.rb`:

```bash
mkdir src
cd src
touch hello-world.rb
```

Esses comando vão criar a seguinte estrutura:
  
```ruby
└── src
  └── hello-world.rb
```

O arquivo `hello-world.rb` dentro do diretório `src` é onde a magica vai acontecer, e é nele que a nossa jornada em Ruby começa.

```ruby
puts "Hello World"
```

Nesse código, o comando `puts` é um método de Ruby, que imprime na tela a string "Hello World".

Para executar o arquivo `hello-world.rb`, basta executar o comando `ruby hello-world.rb` que o nosso código será mostrado no console:

```ruby
ruby hello-world.rb
```

Com esse código já da para perceber nem que seja um pouco o porque que dizem que Ruby é a melhor amiga dos programadores. Você provavelmente consegue ler e entender o que o código quer dizer, mesmo que nunca tenha estudado ou visto outra linguagem de programação.

Vamos escrever um pouco mais de código para percebemos como amigável é essa linguagem, primeiro vamos criar outro arquivo só que dessa vez ele sera chamado de `5-ruby.rb`:

```bash
touch 5-ruby.rb
```

Dentro desse arquivo vamos escrever:
  
```ruby
5.times { puts "Ruby!" }
```

Agora sem explicar o código você consegue ler em voz alta e entender ele? Espero que sim, se não esta entendo, não se preocupe. Vamos quebrar esse código em linhas e entender o que ele faz.

```ruby
5.times # Esse trecho significa que vamos repetir 5 vezes algo
puts # Esse trecho significa que vamos imprimir algo na tela
"Ruby!" # Esse trecho é uma string "Ruby!"
```

E agora? Está começando a entender a linguagem? 🤔

[Próximo](2-tipos-de-dados.md)
