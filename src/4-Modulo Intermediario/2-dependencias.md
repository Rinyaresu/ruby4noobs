# Dependências

## O que são Dependências?

Dependências são bibliotecas externas que uma aplicação Ruby pode utilizar para estender suas funcionalidades ou resolver problemas específicos. No universo Ruby, essas bibliotecas são chamadas de **gems**.

## Gems

As **gems** são pacotes de software que contêm código Ruby pronto para ser utilizado em projetos. Elas podem ser bibliotecas que adicionam novas funcionalidades, frameworks para desenvolvimento web, utilitários para tarefas específicas, entre muitas outras coisas. As gems são publicadas no [RubyGems](https://rubygems.org/), que é o repositório oficial de gems para a linguagem Ruby.

## Gerenciamento de Gems com Bundler

Para instalar e gerenciar gems em um projeto Ruby, utilizamos o **Bundler**. O Bundler é uma ferramenta que simplifica o gerenciamento de dependências ao criar um ambiente isolado para cada projeto, garantindo que cada um tenha as gems necessárias sem interferir no ambiente global do sistema.

Para utilizar o Bundler, primeiro, é necessário instalá-lo em sua máquina com o seguinte comando:

```bash
gem install bundler
```

Após a instalação do Bundler, podemos criar um arquivo chamado `Gemfile` no diretório do projeto para listar as dependências do projeto.

```ruby
# Gemfile

source 'https://rubygems.org'

gem 'nokogiri'
gem 'rack', '~> 2.0.1'
gem 'rspec'
```

Neste exemplo, adicionamos três gems ao nosso projeto: `nokogiri`, `rack` e `rspec`. A linha `source 'https://rubygems.org'` especifica de onde o Bundler deve buscar as gems.

## Instalando e Atualizando as Gems

Para instalar as gems listadas no `Gemfile`, basta executar o seguinte comando:

```bash
bundle install
```

O Bundler irá baixar e instalar as gems no ambiente do projeto.

Caso você precise atualizar as gems para suas versões mais recentes, basta executar:

```bash
bundle update
```

## Outros Comandos do Bundler

Além de instalar e atualizar as gems, o Bundler possui outros comandos úteis:

- `bundle show`: mostra as gems instaladas no projeto.
- `bundle exec`: executa um comando específico no contexto do ambiente isolado do projeto, garantindo que as gems do projeto sejam utilizadas.
- `bundle init`: cria um arquivo `Gemfile` vazio no diretório do projeto para que você possa adicionar as dependências manualmente.
- `bundle clean`: remove gems que não estão sendo utilizadas no projeto.

O uso do Bundler é fundamental para garantir a consistência das dependências em um projeto Ruby, facilitando a colaboração entre desenvolvedores e evitando conflitos entre gems.

Agora que aprendemos a gerenciar as dependências com o Bundler, estamos prontos para utilizar as gems em nosso projeto Ruby!

[Próximo](3-testes.md)
