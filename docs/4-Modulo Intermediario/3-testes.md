# Testes automatizados

## O que são testes automatizados?

Testes automatizados se fundamentam no uso de ferramentas para controlar a execução de testes de software. O objetivo é basicamente escrever um software que testará seu programa de forma automática. Testes automatizados também tem como objetivo dar a confiança necessária para modificar o seu código.

## Por que usar testes automatizados?

Um dos principais motivos é dar confiança para modificar o seu código. **Mas este não é o único motivo.**

- Redução de custos
- Redução de erros
- Indicativo de término de uma tarefa
- Evitar regressões de código

## Como usar testes automatizados em Ruby?

Para realizarmos testes automatizados, antes de mais nada, precisamos Instalar a `gem minitest`.

```ruby
gem install minitest
```

Para começarmos é necessário que você:

- Abra seu editor de código favorito
- Crie dois arquivos `.rb` com os nomes: soma e teste
- Salva os dois arquivos no mesmo diretório
- Abra o diretório dos arquivos pelo terminal

Com tudo pronto, vamos começar criando o teste que espera que a soma de dois números seja igual a quatro.

```ruby
require 'minitest/autorun' # aqui nos declaramos o requerimento do minitest que nos instalamos anteriormente
require_relative './soma' # aqui nos declaramos outro requerimento mas dessa vez do outro arquivo que nos criamos.

class SomaTest < Minitest::Test # aqui criamos uma classe que herda de Minitest::Test
  def test_soma
    assert_equal(4, soma(2, 2))
  end
end
```

Ao executar o teste, o resultado será:

```ruby
=> ruby teste.rb
Run options: --seed 19897

# Running:

E

Error:
SomaTest#test_soma:
NoMethodError: undefined method `soma' for #<SomaTest:0x00007f6ce8acb668 @NAME="test_soma", @failures=[#<Minitest::UnexpectedError: Unexpected exception>], @assertions=0, @time=0.0006974000007176073>

    assert_equal(5, soma(3, 2))
                    ^^^^
    teste.rb:6:in `test_soma'


rails test teste.rb:5


Finished in 0.003121s, 320.3588 runs/s, 0.0000 assertions/s.
1 runs, 0 assertions, 0 failures, 1 errors, 0 skips
```

A mensagem de erro que recebemos indica `NoMethodError: undefined method 'soma'` ou seja, que não existe um método chamado `soma`.

Então vamos solucionar esse erro criando uma função no arquivo `soma.rb` que retorna o valor da soma de dois números:

```ruby
def soma(a, b)
  a + b
end
```

Agora vamos executar o teste novamente e yay! 🎉

```ruby
=> ruby teste.rb
Run options: --seed 41202

# Running:

.

Finished in 0.001383s, 723.0135 runs/s, 723.0135 assertions/s.
1 runs, 1 assertions, 0 failures, 0 errors, 0 skips
```

Na primeira etapa, vimos o que é o teste **falhar** (🔴).

Fomos então para a segunda, e vimos o teste **passar** (🟢).

Agora, vamos para a última etapa que é **melhorar o código** (refatorar 🔵). Nossos argumentos do método soma não têm um nome adequado. "a" e "b" não dizem muita coisa pra quem lê o código meses depois. Portanto, poderíamos mudá-los para numero_a e numero_b, respectivamente.

```ruby
def soma(numero_a, numero_b)
  numero_a + numero_b
end
```

Com toda essa explicação, você aprendeu como funciona **testes automatizados em Ruby**, e também aprendeu na prática o que é TDD. Mas você deve estar se perguntando **o que é TDD?**

## O que é TDD ?

Entendendo o **Test-Driven Development** ![tdd-image](https://marsner.com/wp-content/uploads/test-driven-development-TDD.png)

**Test-Driven Development** é uma técnica que se baseia na repetição de ciclos curtos de desenvolvimento. Primeiro, o desenvolvedor **escreve um teste** automatizado que define o comportamento da nova funcionalidade. Então, o desenvolvedor escreve a menor quantidade de código necessária para fazer este teste **passar**. Finalmente, o desenvolvedor pode **refatorar** o código para níveis de qualidade aceitáveis.

### Etapa 1 — Adicione um teste

**No ciclo de TDD**, toda funcionalidade começa pelo teste. Para escrever este teste, o desenvolvedor precisa entender claramente os requisitos da tarefa. É aqui a maior diferença entre escrever o teste antes ou depois do código; O TDD força o desenvolvedor a entender os requisitos antes de escrever o código.

### Etapa 2 — Execute os testes e veja se o novo teste falha

Após adicionar o novo teste, você deve executar todos os testes do seu sistema, para garantir que a funcionalidade ainda não existe e para garantir que o teste não passou por engano; talvez porque você tenha escrito o teste de forma equivocada ou o teste simplesmente não faz sentido em existir. Esta etapa aumenta a confiança de que o teste passa apenas nos casos desejados.

### Etapa 3 — Escreva o código

A próxima etapa é escrever o código, **fazendo com que o teste passe**. Você não precisa escrever o melhor código que já existiu e totalmente aceitável que o código seja escrito de uma forma deselegante, sem preocupação com a performance ou outro requisito.

**Lembre-se que o objetivo desta etapa é fazer com que o teste passe;** por isso, nada de adicionar funcionalidades extras por qualquer que seja o motivo.

### Etapa 4 — Execute os testes

**Execute novamente os testes**. Se eles passarem, o desenvolvedor tem a confiança de que os requisitos foram atingidos e que não quebra ou degrada as funcionalidades existentes. Se os testes não passarem, ajuste o código que você escreveu até que o teste passe.

### Etapa 5 — Refatore o código

**Para que a qualidade de seu código seja mantida (ou aumente), é necessário que você refatore o código do projeto constantemente.** Altere a organização de arquivos, reduza a duplicação de lógica, faça com que nomes de classes, variáveis e métodos indiquem claramente sua intenção e propósito. Se os métodos forem muito grandes, extraia para outros métodos ou classes, tornando sua responsabilidade menor, mas melhor definida.

**Para cada modificação que você fizer, execute novamente os testes.** Assim você terá a confiança de que as alterações não afetaram o comportamento do projeto.

Nesse ponto espero que tenha entendido como funciona testes automatizados e TDD na teoria, e também na prática. 😁