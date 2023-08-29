"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[732],{3905:(e,a,r)=>{r.d(a,{Zo:()=>m,kt:()=>g});var o=r(7294);function n(e,a,r){return a in e?Object.defineProperty(e,a,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[a]=r,e}function t(e,a){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);a&&(o=o.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),r.push.apply(r,o)}return r}function s(e){for(var a=1;a<arguments.length;a++){var r=null!=arguments[a]?arguments[a]:{};a%2?t(Object(r),!0).forEach((function(a){n(e,a,r[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):t(Object(r)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(r,a))}))}return e}function i(e,a){if(null==e)return{};var r,o,n=function(e,a){if(null==e)return{};var r,o,n={},t=Object.keys(e);for(o=0;o<t.length;o++)r=t[o],a.indexOf(r)>=0||(n[r]=e[r]);return n}(e,a);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);for(o=0;o<t.length;o++)r=t[o],a.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=o.createContext({}),u=function(e){var a=o.useContext(l),r=a;return e&&(r="function"==typeof e?e(a):s(s({},a),e)),r},m=function(e){var a=u(e.components);return o.createElement(l.Provider,{value:a},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var a=e.children;return o.createElement(o.Fragment,{},a)}},c=o.forwardRef((function(e,a){var r=e.components,n=e.mdxType,t=e.originalType,l=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),p=u(r),c=n,g=p["".concat(l,".").concat(c)]||p[c]||d[c]||t;return r?o.createElement(g,s(s({ref:a},m),{},{components:r})):o.createElement(g,s({ref:a},m))}));function g(e,a){var r=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var t=r.length,s=new Array(t);s[0]=c;var i={};for(var l in a)hasOwnProperty.call(a,l)&&(i[l]=a[l]);i.originalType=e,i[p]="string"==typeof e?e:n,s[1]=i;for(var u=2;u<t;u++)s[u]=r[u];return o.createElement.apply(null,s)}return o.createElement.apply(null,r)}c.displayName="MDXCreateElement"},9349:(e,a,r)=>{r.r(a),r.d(a,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>t,metadata:()=>i,toc:()=>u});var o=r(7462),n=(r(7294),r(3905));const t={},s="Tipos de dados",i={unversionedId:"Basico da Linguagem/tipos-de-dados",id:"Basico da Linguagem/tipos-de-dados",title:"Tipos de dados",description:"Tipagem din\xe2mica",source:"@site/docs/3-Basico da Linguagem/2-tipos-de-dados.md",sourceDirName:"3-Basico da Linguagem",slug:"/Basico da Linguagem/tipos-de-dados",permalink:"/Basico da Linguagem/tipos-de-dados",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:'O famoso "Hello World" e um pouco mais',permalink:"/Basico da Linguagem/hello-world"},next:{title:"Vari\xe1veis",permalink:"/Basico da Linguagem/variaveis"}},l={},u=[{value:"Tipagem din\xe2mica",id:"tipagem-din\xe2mica",level:2},{value:"Tipagem Forte",id:"tipagem-forte",level:2},{value:"Objetos",id:"objetos",level:2},{value:"Integer",id:"integer",level:3},{value:"Bignum",id:"bignum",level:3},{value:"Float",id:"float",level:3},{value:"Boolean",id:"boolean",level:3},{value:"Nil",id:"nil",level:3},{value:"String",id:"string",level:3},{value:"Array",id:"array",level:3},{value:"Hash",id:"hash",level:3},{value:"Regexp",id:"regexp",level:3},{value:"Symbols",id:"symbols",level:3},{value:"Range",id:"range",level:3},{value:"O que podemos fazer com esses objetos?",id:"o-que-podemos-fazer-com-esses-objetos",level:2},{value:"Concatenar",id:"concatenar",level:3},{value:"Comparar",id:"comparar",level:3},{value:"Encontrar o tamanho",id:"encontrar-o-tamanho",level:3},{value:"Encontrar o tipo",id:"encontrar-o-tipo",level:3},{value:"Convers\xf5es com m\xe9todos",id:"convers\xf5es-com-m\xe9todos",level:2},{value:"Converter uma string para um inteiro",id:"converter-uma-string-para-um-inteiro",level:3},{value:"Converter uma string para um float",id:"converter-uma-string-para-um-float",level:3},{value:"Converter uma string para um s\xedmbolo",id:"converter-uma-string-para-um-s\xedmbolo",level:3},{value:"Converter um s\xedmbolo para uma string",id:"converter-um-s\xedmbolo-para-uma-string",level:3},{value:"Converter uma string para um array",id:"converter-uma-string-para-um-array",level:3},{value:"Converter um range para array",id:"converter-um-range-para-array",level:3},{value:"Converter um array para uma string separada por v\xedrgula",id:"converter-um-array-para-uma-string-separada-por-v\xedrgula",level:3}],m={toc:u},p="wrapper";function d(e){let{components:a,...r}=e;return(0,n.kt)(p,(0,o.Z)({},m,r,{components:a,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"tipos-de-dados"},"Tipos de dados"),(0,n.kt)("h2",{id:"tipagem-din\xe2mica"},"Tipagem din\xe2mica"),(0,n.kt)("p",null,"Ruby \xe9 uma linguagem de tipagem din\xe2mica, ou seja, o tipo de dado \xe9 definido ao momento da execu\xe7\xe3o do c\xf3digo. Tipagem din\xe2mica \xe9 uma caracter\xedstica de determinadas linguagens de programa\xe7\xe3o, que n\xe3o exigem declara\xe7\xf5es de tipos de dados, pois s\xe3o capazes de escolher que tipo utilizar dinamicamente para cada vari\xe1vel, podendo alter\xe1-lo durante a compila\xe7\xe3o ou a execu\xe7\xe3o do programa."),(0,n.kt)("p",null,"Algumas das linguagens mais conhecidas a utilizarem tipagem din\xe2mica s\xe3o: ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/wendrewdevelop/python4noobs"},"Python"),", ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/rinyaresu/ruby4noobs"},"Ruby"),", ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/DanielHe4rt/php4noobs"},"PHP"),"."),(0,n.kt)("p",null,"Na pr\xe1tica, tipagem din\xe2mica significa:"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"ps: esses c\xf3digos foram feitos usando o ",(0,n.kt)("a",{parentName:"p",href:"/Ambiente/configuracao-de-ambiente#dica"},"irb"))),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ruby"},'k = "teste"\n\nk.class\n=> String\n\nk = 1\n\nk.class\n=> Integer\n')),(0,n.kt)("p",null,"Pudemos ver que a vari\xe1vel ",(0,n.kt)("inlineCode",{parentName:"p"},"k")," pode assumir como valor tanto uma String como um n\xfamero (que nesse caso, \xe9 um Integer), e em uma linguagem de tipagem est\xe1tica, como ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/paulorievrs/java4noobs"},"Java")," isso n\xe3o seria poss\xedvel, com o compilador j\xe1 n\xe3o nos deixando prosseguir."),(0,n.kt)("h2",{id:"tipagem-forte"},"Tipagem Forte"),(0,n.kt)("p",null,"Ruby tamb\xe9m tem tipagem forte. Linguagens implementadas com tipos de dados fortes, tais como ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/paulorievrs/java4noobs"},"Java"),", exigem que o tipo de dado de um valor seja do mesmo tipo da vari\xe1vel ao qual este valor ser\xe1 atribu\xeddo. O significado disso \xe9 que, se voc\xea tentar atribuir um valor de um tipo diferente a uma vari\xe1vel, o compilador ir\xe1 gerar um erro. Como por exemplo:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ruby"},'x = 10\ny = "Ruby"\n\nputs x + y\n\n=> TypeError: String can\'t be coerced into Integer\n')),(0,n.kt)("h2",{id:"objetos"},"Objetos"),(0,n.kt)("p",null,"Ruby n\xe3o tem tipos primitivos, ou seja, n\xe3o tem tipos primitivos como inteiros, floats, strings, etc. Tudo \xe9 um objeto. Por exemplo:"),(0,n.kt)("h3",{id:"integer"},"Integer"),(0,n.kt)("p",null,"Integer ou Inteiro (em portugu\xeas) \xe9 um objeto que representa os n\xfameros mais convencionais que nos conhecemos. ",(0,n.kt)("strong",{parentName:"p"},"V\xedrgulas n\xe3o s\xe3o permitidas, mas travess\xf5es s\xe3o.")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ruby"},"k = 77\n=> 77\n\nk = -77\n=> -77\n\nk.class # Podemos descobrir o tipo de objeto que uma vari\xe1vel aponta utilizando o m\xe9todo class.\n=> Integer\n")),(0,n.kt)("h3",{id:"bignum"},"Bignum"),(0,n.kt)("p",null,"Bignum tamb\xe9m \xe9 um ",(0,n.kt)("strong",{parentName:"p"},"integer")," s\xf3 que \xe9 um objeto que representa n\xfameros maiores que o inteiro. Ou seja, ",(0,n.kt)("strong",{parentName:"p"},"n\xfameros com muitos d\xedgitos"),"."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ruby"},"k = 12345678901234567890\n=> 12345678901234567890\n\nk.class\n=> Integer # Como dito acima Bignum \xe9 um Integer.\n")),(0,n.kt)("h3",{id:"float"},"Float"),(0,n.kt)("p",null,"N\xfameros decimais s\xe3o chamados de ",(0,n.kt)("strong",{parentName:"p"},"float ou ponto flutuante"),"."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ruby"},"k = 3.14\n=> 3.14\n\nk.class\n=> Float\n")),(0,n.kt)("h3",{id:"boolean"},"Boolean"),(0,n.kt)("p",null,"Literalmente, Boolean \xe9 um tipo de dado que representa um valor booleano. Ou seja, um valor que pode ser ",(0,n.kt)("strong",{parentName:"p"},"verdadeiro ou falso.")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ruby"},"k = true\n=> true\n\nk.class\n=> TrueClass\n\nk = false\n=> false\n\nk.class\n=> FalseClass\n")),(0,n.kt)("h3",{id:"nil"},"Nil"),(0,n.kt)("p",null,"Em Ruby, o nil representa o ",(0,n.kt)("strong",{parentName:"p"},"vazio"),". Ele representa falta de valor. ",(0,n.kt)("strong",{parentName:"p"},"Ele n\xe3o \xe9 zero. Por que zero \xe9 um n\xfamero.")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ruby"},"k = 0\n=> 0\n\nk.nil? # Podemos verificar se um objeto \xe9 nil utilizando o m\xe9todo nil?\n=> false\n\nk = nil\n=> nil\n\nk.nil?\n=> true\n\nk.class\n=> NilClass\n")),(0,n.kt)("h3",{id:"string"},"String"),(0,n.kt)("p",null,"String \xe9 um objeto que representa um conjunto de caracteres. Strings s\xe3o quaisquer tipos de caracteres (letras, d\xedgitos, pontua\xe7\xe3o) ",(0,n.kt)("strong",{parentName:"p"},"cercados por aspas. Aspas, simples ou duplas.")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ruby"},'k = "Ruby"\n=> "Ruby"\n\nk.class\n=> String\n')),(0,n.kt)("h3",{id:"array"},"Array"),(0,n.kt)("p",null,"Array \xe9 um objeto que representa uma ",(0,n.kt)("strong",{parentName:"p"},"lista de valores cercada por colchetes e separada por v\xedrgulas.")," Em Ruby os arrays s\xe3o din\xe2micos, portanto voc\xea n\xe3o precisa definir seu tamanho inicial, mas se preferir definir voc\xea tamb\xe9m pode. Caso tenha criado um array com 10 posi\xe7\xf5es e precise guardar um novo dado no array, voc\xea poder\xe1 faz\xea-lo sem problemas pois o array ser\xe1 expandido automaticamente conforme a necessidade."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ruby"},"k = [1, 2, 3]\n=> [1, 2, 3]\n\nk.class\n=> Array\n")),(0,n.kt)("p",null,"Em Ruby os Arrays podem conter tipos de dados diferentes tamb\xe9m, como esse onde misturamos inteiros, flutuantes e strings:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ruby"},'k = [7, 7.7, "Ruby"]\n=> [7, 7.7, "Ruby"]\n\nk.class\n=> Array\n')),(0,n.kt)("h3",{id:"hash"},"Hash"),(0,n.kt)("p",null,"As hashes s\xe3o arrays indexados, com ",(0,n.kt)("strong",{parentName:"p"},"Chaves e Valores"),", que podem ser ",(0,n.kt)("strong",{parentName:"p"},"quaisquer tipos de objetos.")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ruby"},'k = { :Linguagem => "Ruby", :Ano => 1995, :Criador => ["Yukihiro", "Matz"] }\n=> {:Linguagem=>"Ruby", :Ano=>1995, :Criador=>["Yukihiro", "Matz"]}\n\nk.class\n=> Hash\n')),(0,n.kt)("h3",{id:"regexp"},"Regexp"),(0,n.kt)("p",null,"Uma express\xe3o regular (ou regexp), \xe9 uma s\xe9rie de caracteres ",(0,n.kt)("strong",{parentName:"p"},"cercados por barras"),". \xc9 utilizada para verificar se um texto segue um padr\xe3o."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ruby"},"k = /Ruby/\n=> /Ruby/\n\nk.class\n=> Regexp\n")),(0,n.kt)("h3",{id:"symbols"},"Symbols"),(0,n.kt)("p",null,"S\xedmbolos s\xe3o palavras que parecem vari\xe1veis. Novamente, elas podem conter letras, d\xedgitos e travess\xf5es. ",(0,n.kt)("strong",{parentName:"p"},"Mas elas come\xe7am com dois pontos"),". S\xedmbolos podem se parecer com um jeito engra\xe7ado de Strings, mas devemos pensar em s\xedmbolos como ",(0,n.kt)("strong",{parentName:"p"},"significado\ne n\xe3o como conte\xfado.")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ruby"},"k = :Ruby\n=> :Ruby\n\nk.class\n=> Symbol\n")),(0,n.kt)("h3",{id:"range"},"Range"),(0,n.kt)("p",null,"Um range \xe9 formado por dois valores cercados por ",(0,n.kt)("strong",{parentName:"p"},"par\xeanteses")," e separados por ",(0,n.kt)("strong",{parentName:"p"},"retic\xeancias")," (na forma de dois ou tr\xeas pontos)."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ruby"},"k = (1..10)\n=> 1..10\n\nk.class\n=> Range\n")),(0,n.kt)("p",null,"Normalmente, apenas dois pontos s\xe3o usados. Se um terceiro ponto for usado, o ",(0,n.kt)("strong",{parentName:"p"},"\xfaltimo valor no range ser\xe1 exclu\xeddo.")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ruby"},"(0...10) # representa os n\xfameros de zero at\xe9 nove exceto o \xfaltimo como podemos ver logo abaixo.\n=> 0...10\n\n(0...10).to_a # to_a converte o objeto em um array\n=> [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]\n")),(0,n.kt)("h2",{id:"o-que-podemos-fazer-com-esses-objetos"},"O que podemos fazer com esses objetos?"),(0,n.kt)("h3",{id:"concatenar"},"Concatenar"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ruby"},'r = "Ruby"\np = "PHP"\n\nr + " " + p # o + concatena as strings\n=> "RubyPHP"\n')),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ruby"},'r << " " # << tamb\xe9m pode ser usado para concatena string\n=> "Ruby "\n\nr << p # concatena o valor de p\n=> "Ruby PHP"\n')),(0,n.kt)("h3",{id:"comparar"},"Comparar"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ruby"},'r = "Ruby"\np = "PHP"\nr == p # Comparar strings\n=> false\n')),(0,n.kt)("h3",{id:"encontrar-o-tamanho"},"Encontrar o tamanho"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ruby"},'r = "Ruby"\nr.size # Encontrar o tamanho de uma string\n=> 5\n')),(0,n.kt)("h3",{id:"encontrar-o-tipo"},"Encontrar o tipo"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ruby"},'r = "Ruby"\nr.class # Encontrar o tipo de um objeto\n=> String\n')),(0,n.kt)("h2",{id:"convers\xf5es-com-m\xe9todos"},"Convers\xf5es com m\xe9todos"),(0,n.kt)("p",null,"Aqui vamos aprender que convers\xe3o de um objeto para outro tipo de objeto \xe9 poss\xedvel atrav\xe9s de m\xe9todos."),(0,n.kt)("h3",{id:"converter-uma-string-para-um-inteiro"},"Converter uma string para um inteiro"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ruby"},'r = "10"\nr.to_i\n=> 10\n')),(0,n.kt)("h3",{id:"converter-uma-string-para-um-float"},"Converter uma string para um float"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ruby"},'r = "10"\nr.to_f\n=> 10.0\n')),(0,n.kt)("h3",{id:"converter-uma-string-para-um-s\xedmbolo"},"Converter uma string para um s\xedmbolo"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ruby"},'r = "Ruby"\nr.to_sym\n=> :Ruby\n')),(0,n.kt)("h3",{id:"converter-um-s\xedmbolo-para-uma-string"},"Converter um s\xedmbolo para uma string"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ruby"},'r = :Ruby\nr.to_s\n=> "Ruby"\n')),(0,n.kt)("h3",{id:"converter-uma-string-para-um-array"},"Converter uma string para um array"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ruby"},'r = "Ruby"\nr.to_a\n=> ["R", "u", "b", "y"]\n')),(0,n.kt)("h3",{id:"converter-um-range-para-array"},"Converter um range para array"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ruby"},"r = (1..10)\nr.to_a\n=> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]\n")),(0,n.kt)("h3",{id:"converter-um-array-para-uma-string-separada-por-v\xedrgula"},"Converter um array para uma string separada por v\xedrgula"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ruby"},'r = [7, 7, 7]\nr.join(",")\n=> "7,7,7"\n')),(0,n.kt)("p",null,"Espero que com ",(0,n.kt)("strong",{parentName:"p"},"toda")," essa informa\xe7\xe3o voc\xea tenha um pouco mais de conhecimento sobre os ",(0,n.kt)("strong",{parentName:"p"},"tipos de dados")," em ",(0,n.kt)("em",{parentName:"p"},"Ruby"),". A maior dica \xe9 voc\xea tentar usar esses m\xe9todos na pratica em um projeto pr\xf3prio. Se voc\xea n\xe3o conseguir, n\xe3o hesite em perguntar. \ud83d\ude0a"))}d.isMDXComponent=!0}}]);