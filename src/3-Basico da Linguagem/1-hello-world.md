# O famoso "Hello World" e um pouco mais

## Introdução

Após a instalação do Ruby, nada melhor do que começarmos escrevendo o famoso "Hello World". Neste artigo, vamos aprender como criar um diretório, um arquivo e escrever o nosso primeiro código em Ruby. Ao final, você verá como essa linguagem é amigável e pode ser facilmente compreendida mesmo por quem nunca estudou programação antes.

## Criando o Diretório e o Arquivo

Para começar, vamos criar um diretório chamado `src` e dentro dele um arquivo chamado `hello-world.rb`. Você pode fazer isso através do terminal ou linha de comandos utilizando os seguintes comandos:

```bash
mkdir src
cd src
touch hello-world.rb
```

Após executar esses comandos, você terá a seguinte estrutura:

```ruby
└── src
    └── hello-world.rb
```

## Escrevendo o "Hello World"

Agora, vamos abrir o arquivo `hello-world.rb` e escrever nosso primeiro código em Ruby:

```ruby
puts "Hello World"
```

Neste código, utilizamos o comando `puts`, que é um método de Ruby que imprime na tela a string "Hello World".

## Executando o Código

Para executar o arquivo `hello-world.rb`, basta digitar o seguinte comando no terminal:

```bash
ruby hello-world.rb
```

Ao fazer isso, o nosso código será executado e você verá a seguinte saída no console:

```txt
=> Hello World
```

## A Amigabilidade do Ruby

Com esse código simples, já é possível perceber o porquê dizem que a linguagem Ruby é a melhor amiga dos programadores. Mesmo que você nunca tenha estudado ou visto outra linguagem de programação, é provável que consiga ler e entender o que o código faz.

## Vamos Escrever um Pouco Mais de Código

Vamos continuar nossa jornada em Ruby e escrever mais um código. Dessa vez, vamos criar outro arquivo chamado `5-ruby.rb` e dentro dele escrever o seguinte:

```ruby
5.times { puts "Ruby!" }
```

## Entendendo o Código

Agora, sem explicar o código previamente, será que você consegue ler em voz alta e entender o que ele faz? Se não estiver entendendo, não se preocupe, vamos quebrar esse código em linhas e entender passo a passo:

```ruby
5.times # Este trecho significa que vamos repetir 5 vezes algo
puts     # Este trecho significa que vamos imprimir algo na tela
"Ruby!"  # Este trecho é uma string que contém "Ruby!"
```

## Executando o Novo Código

Agora, ao executar o arquivo `5-ruby.rb`, você verá a seguinte saída:

```txt
=> Ruby!
=> Ruby!
=> Ruby!
=> Ruby!
=> Ruby!
```

## Conclusão

Com esses exemplos, você pode perceber como a linguagem Ruby é amigável e fácil de entender, mesmo para quem está começando a programar. A simplicidade e expressividade do Ruby tornam-na uma ótima escolha para iniciantes e também para projetos mais complexos.

Lembre-se, a prática é fundamental para aprofundar seus conhecimentos em Ruby e em qualquer linguagem de programação.

[Próximo](2-tipos-de-dados.md)
