"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[390],{3905:(e,a,n)=>{n.d(a,{Zo:()=>m,kt:()=>g});var t=n(7294);function r(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function o(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function i(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?o(Object(n),!0).forEach((function(a){r(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function s(e,a){if(null==e)return{};var n,t,r=function(e,a){if(null==e)return{};var n,t,r={},o=Object.keys(e);for(t=0;t<o.length;t++)n=o[t],a.indexOf(n)>=0||(r[n]=e[n]);return r}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)n=o[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=t.createContext({}),p=function(e){var a=t.useContext(l),n=a;return e&&(n="function"==typeof e?e(a):i(i({},a),e)),n},m=function(e){var a=p(e.components);return t.createElement(l.Provider,{value:a},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},c=t.forwardRef((function(e,a){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),d=p(n),c=r,g=d["".concat(l,".").concat(c)]||d[c]||u[c]||o;return n?t.createElement(g,i(i({ref:a},m),{},{components:n})):t.createElement(g,i({ref:a},m))}));function g(e,a){var n=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=c;var s={};for(var l in a)hasOwnProperty.call(a,l)&&(s[l]=a[l]);s.originalType=e,s[d]="string"==typeof e?e:r,i[1]=s;for(var p=2;p<o;p++)i[p]=n[p];return t.createElement.apply(null,i)}return t.createElement.apply(null,n)}c.displayName="MDXCreateElement"},7965:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var t=n(7462),r=(n(7294),n(3905));const o={},i="Depend\xeancias",s={unversionedId:"Modulo Intermediario/dependencias",id:"Modulo Intermediario/dependencias",title:"Depend\xeancias",description:"O que s\xe3o Depend\xeancias?",source:"@site/docs/4-Modulo Intermediario/2-dependencias.md",sourceDirName:"4-Modulo Intermediario",slug:"/Modulo Intermediario/dependencias",permalink:"/Modulo Intermediario/dependencias",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Classes e Objetos",permalink:"/Modulo Intermediario/classes-e-objetos"},next:{title:"Testes automatizados",permalink:"/Modulo Intermediario/testes"}},l={},p=[{value:"O que s\xe3o Depend\xeancias?",id:"o-que-s\xe3o-depend\xeancias",level:2},{value:"Gems",id:"gems",level:2},{value:"Gerenciamento de Gems com Bundler",id:"gerenciamento-de-gems-com-bundler",level:2}],m={toc:p},d="wrapper";function u(e){let{components:a,...n}=e;return(0,r.kt)(d,(0,t.Z)({},m,n,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"depend\xeancias"},"Depend\xeancias"),(0,r.kt)("h2",{id:"o-que-s\xe3o-depend\xeancias"},"O que s\xe3o Depend\xeancias?"),(0,r.kt)("p",null,"Depend\xeancias s\xe3o nada mais nada menos que bibliotecas externas que uma aplica\xe7\xe3o pode utilizar. E nos vamos aprender como as depend\xeancias funcionam no universo ",(0,r.kt)("em",{parentName:"p"},"Ruby"),"."),(0,r.kt)("h2",{id:"gems"},"Gems"),(0,r.kt)("p",null,"As ",(0,r.kt)("strong",{parentName:"p"},"gems")," s\xe3o bibliotecas ou aplica\xe7\xf5es ",(0,r.kt)("strong",{parentName:"p"},"Ruby")," que podem ser usadas em qualquer projeto. O gerenciamento das gems \xe9 um recurso que vem a partir do ",(0,r.kt)("a",{parentName:"p",href:"https://rubygems.org/"},"Rubygems"),". Se voc\xea instalou Ruby com o nosso versionador ",(0,r.kt)("a",{parentName:"p",href:"/Ambiente/configuracao-de-ambiente#linux-e-macos"},"asdf"),", o suporte para gems est\xe1 dispon\xedvel. Agora vamos instalar uma gem. Para isso, vamos usar o comando ",(0,r.kt)("inlineCode",{parentName:"p"},"gem install"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"gem install <nome-da-gem>\n")),(0,r.kt)("p",null,"Tudo que voc\xea precisa fazer \xe9 digitar o nome da gem que voc\xea quer instalar. Se voc\xea n\xe3o sabe o nome da gem, voc\xea pode procurar no ",(0,r.kt)("a",{parentName:"p",href:"https://rubygems.org/"},"Rubygems")," ou no ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/"},"GitHub"),". Al\xe9m disso, existem v\xe1rios outros comandos. Vamos dar uma olhada neles usando ",(0,r.kt)("inlineCode",{parentName:"p"},"gem")," como par\xe2metro:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"gem list"),": lista todas as gems instaladas"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"gem update"),": atualiza todas as gems instaladas"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"gem uninstall"),": desinstala uma gem"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"gem search"),": procura por uma gem")),(0,r.kt)("h2",{id:"gerenciamento-de-gems-com-bundler"},"Gerenciamento de Gems com Bundler"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://bundler.io/"},"Bundler")," \xe9 um gerenciador de depend\xeancias para o ",(0,r.kt)("em",{parentName:"p"},"Ruby"),". Ele \xe9 um pacote de software que permite que voc\xea organize suas ",(0,r.kt)("strong",{parentName:"p"},"depend\xeancias")," de forma mais eficiente. Voc\xea pode usar o Bundler para gerenciar suas depend\xeancias de forma autom\xe1tica. Para isso, vamos instalar o Bundler e entender como ele funciona."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ruby"},"gem install bundler\n")),(0,r.kt)("p",null,"Com o Bundler instalado, podemos usar o comando ",(0,r.kt)("inlineCode",{parentName:"p"},"bundle init")," para criar um arquivo ",(0,r.kt)("inlineCode",{parentName:"p"},"Gemfile")," que cont\xe9m as depend\xeancias de um projeto."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ruby"},"bundle init\n")),(0,r.kt)("p",null,"Agora s\xf3 basta adicionar as depend\xeancias que precisamos para o projeto dentro do arquivo ",(0,r.kt)("inlineCode",{parentName:"p"},"Gemfile")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ruby"},"source 'https://rubygems.org'\n\ngem 'nokogiri'\ngem 'rack', '~> 2.0.1'\ngem 'rspec\n")),(0,r.kt)("p",null,"Vamos fazer como anteriormente e listar os comandos dispon\xedveis usando ",(0,r.kt)("inlineCode",{parentName:"p"},"bundle")," como par\xe2metro:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"bundle install"),": instala as depend\xeancias do projeto"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"bundle update"),": atualiza as depend\xeancias do projeto"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"bundle show"),": mostra as depend\xeancias do projeto"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"bundle init"),": cria um arquivo ",(0,r.kt)("inlineCode",{parentName:"li"},"Gemfile")," que cont\xe9m as depend\xeancias do projeto")),(0,r.kt)("p",null,"Com isso estamos prontos para gerenciar e instalar as gems que usaremos depois. \ud83d\ude0c"))}u.isMDXComponent=!0}}]);