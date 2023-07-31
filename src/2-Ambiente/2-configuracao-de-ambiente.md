# Ambiente

## Instalação do Ruby

Se você é como eu, sabe o quão frustrante pode ser instalar novas ferramentas, especialmente quando se trata de linguagens de programação. Mas calma,vou te mostrar um jeito fácil e eficiente de instalar o Ruby, tornando toda essa experiência muito mais agradável.

## Instalando o Ruby no Linux e MacOS 🐧🍎

Para facilitar a instalação do Ruby no Linux, vamos utilizar a ferramenta mágica chamada `asdf`. Ela nos permite instalar as versões do Ruby que desejamos com facilidade.

Primeiro, precisamos ter a ferramenta `curl` instalada no sistema. Se você ainda não tem, não se preocupe, vou te mostrar como instalá-la de forma rápida

Ubuntu:

```bash
sudo apt install curl
```

Fedora:

```bash
sudo dnf install curl
```

Arch Linux:

```bash
sudo pacman -S curl
```

Com o `curl` instalado, vamos baixar o programa `asdf`. Escolha a opção que se aplica ao seu sistema:

Git:

```bash
git clone https://github.com/asdf-vm/asdf.git ~/.asdf --branch v0.10.
```

Pacman:

```bash
git clone https://aur.archlinux.org/asdf-vm.git && cd asdf-vm && makepkg -si
```

Brew(MacOS):

```bash
brew install asdf
```

Para completar só nos falta instalar o `asdf`

Bash & Git:

Adicione a seguinte linha ao seu arquivo ~/.bashrc:

```bash
. $HOME/.asdf/asdf.sh
```

Zsh & Git:

Adicione a seguinte linha ao seu arquivo ~/.zshrc:

```bash
. $HOME/.asdf/asdf.sh
```

Ou use o plugin para o oh-my-zsh [asdf for oh-my-zsh](https://github.com/ohmyzsh/ohmyzsh/tree/master/plugins/asdf).

Fish & Git:

Adicione a seguinte linha ao seu arquivo ~/.config/fish/config.fish:

```bash

source ~/.asdf/asdf.fish
```

Agora está tudo configurado! Podemos usar o asdf para baixar o Ruby e outras linguagens facilmente:

```bash
asdf plugin-add ruby # Instala o plugin de ruby

asdf install ruby 3.1.2 # Instala o Ruby na versão 3.1.2

asdf global ruby 3.1.2  # Informa ao asdf que você quer usar o ruby 3.1.2 em todo o sistema
```

### Windows

No Windows, utilizaremos outro programa de terceiros, o [RubyInstaller](https://rubyinstaller.org/). Vamos seguir os passos simples para ter o Ruby instalado no seu ambiente:

1. Execute o arquivo de instalação e clique em Next na primeira tela.
2. Aceite os termos do contrato e clique no botão Next.
3. Na próxima tela, escolha uma pasta para a instalação do Ruby ou deixe a opção padrão marcada. Em seguida, clique na caixa de seleção “Add Ruby executables to your Path” e clique em Install.E pronto! O Ruby estará instalado no seu sistema Windows.

## Dica: Use o irb para Desenvolver com Facilidade 💎

Antes de tudo, deixo uma dica preciosa: utilize o irb como ambiente de desenvolvimento para escrever seu código Ruby. O irb é fácil de usar e permite que você teste rapidamente pequenos trechos de código sem a necessidade de um editor de texto. Para abri-lo, basta ir ao terminal e digitar irb.

```bash
irb
```

[Próximo](3-ambiente-online.md)
