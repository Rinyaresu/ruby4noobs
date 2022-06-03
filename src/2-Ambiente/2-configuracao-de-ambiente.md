# Ambiente

## Instalação do Ruby

Instalar Ruby pode ser uma experiencia muito frustrante. Por isso nesse guia nos vamos usar ferramentas de terceiros para facilitar a instalação.

### Linux e MacOS

Em linux nos precisamos instalar um programa chamado `asdf` para que possamos usar as versões de Ruby que queremos.

Para realizar a instalação do programa `asdf` é necessário ter a ferramenta `curl` instalada no sistema. Então vamos instalar

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

Com `curl` instalado, vamos baixar o programa `asdf`

Git:

```bash
git clone https://github.com/asdf-vm/asdf.git ~/.asdf --branch v0.10.0
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

```bash
Adicionar no seu ~/.bashrc:

. $HOME/.asdf/asdf.sh
```

Bash & Zsh:

```bash
Adicionar no seu ~/.zshrc:

. $HOME/.asdf/asdf.sh
```

Ou usar o plugin para o zsh: [asdf for oh-my-zsh](https://github.com/ohmyzsh/ohmyzsh/tree/master/plugins/asdf).

Fish & Git:

```bash
Adicionar no seu ~/.config/fish/config.fish:

source ~/.asdf/asdf.fish
```

Agora é so usar o asdf e baixar os plugins de ruby e outras linguagens que quiser:

```bash
asdf plugin-add ruby # Instala o plugin de ruby

asdf install ruby 3.1.2 # Instala o ruby na ultima versão no momento que é a 3.1.2

asdf global ruby 3.1.2  # Informa ao asdf que você quer usar o ruby 3.1.2 em todo o sistema
```

### Windows

Em windows também usaremos programas de terceiros so que dessa vez será o [RubyInstaller](https://rubyinstaller.org/)

1. Execute o arquivo de instalação e clique em Next na primeira tela.
2. Aceite os termos do contrato e clique no botão Next.
3. Na próxima tela escolha uma pasta para instalação do ruby ou deixe a padrão mesmo e clique no checkbox “Add Ruby executables to your Path” e clique em Install.

[Próximo](3-ambiente-online.md)
