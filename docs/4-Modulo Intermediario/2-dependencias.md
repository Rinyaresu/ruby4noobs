# Dependências

## O que são Dependências?

Dependências são nada mais nada menos que bibliotecas externas que uma aplicação pode utilizar. E nos vamos aprender como as dependências funcionam no universo _Ruby_.

## Gems

As **gems** são bibliotecas ou aplicações **Ruby** que podem ser usadas em qualquer projeto. O gerenciamento das gems é um recurso que vem a partir do [Rubygems](https://rubygems.org/). Se você instalou Ruby com o nosso versionador [asdf](/src/2-Ambiente/2-configuracao-de-ambiente.md#linux-e-macos), o suporte para gems está disponível. Agora vamos instalar uma gem. Para isso, vamos usar o comando `gem install`.

```bash
gem install <nome-da-gem>
```

Tudo que você precisa fazer é digitar o nome da gem que você quer instalar. Se você não sabe o nome da gem, você pode procurar no [Rubygems](https://rubygems.org/) ou no [GitHub](https://github.com/). Além disso, existem vários outros comandos. Vamos dar uma olhada neles usando `gem` como parâmetro:

- `gem list`: lista todas as gems instaladas
- `gem update`: atualiza todas as gems instaladas
- `gem uninstall`: desinstala uma gem
- `gem search`: procura por uma gem

## Gerenciamento de Gems com Bundler

[Bundler](https://bundler.io/) é um gerenciador de dependências para o _Ruby_. Ele é um pacote de software que permite que você organize suas **dependências** de forma mais eficiente. Você pode usar o Bundler para gerenciar suas dependências de forma automática. Para isso, vamos instalar o Bundler e entender como ele funciona.

```ruby
gem install bundler
```

Com o Bundler instalado, podemos usar o comando `bundle init` para criar um arquivo `Gemfile` que contém as dependências de um projeto.

```ruby
bundle init
```

Agora só basta adicionar as dependências que precisamos para o projeto dentro do arquivo `Gemfile`

```ruby
source 'https://rubygems.org'

gem 'nokogiri'
gem 'rack', '~> 2.0.1'
gem 'rspec
```

Vamos fazer como anteriormente e listar os comandos disponíveis usando `bundle` como parâmetro:

- `bundle install`: instala as dependências do projeto
- `bundle update`: atualiza as dependências do projeto
- `bundle show`: mostra as dependências do projeto
- `bundle init`: cria um arquivo `Gemfile` que contém as dependências do projeto

Com isso estamos prontos para gerenciar e instalar as gems que usaremos depois. 😌
