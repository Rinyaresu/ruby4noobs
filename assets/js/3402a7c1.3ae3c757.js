"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[489],{3905:(e,n,a)=>{a.d(n,{Zo:()=>s,kt:()=>k});var t=a(7294);function r(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function o(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function l(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?o(Object(a),!0).forEach((function(n){r(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function i(e,n){if(null==e)return{};var a,t,r=function(e,n){if(null==e)return{};var a,t,r={},o=Object.keys(e);for(t=0;t<o.length;t++)a=o[t],n.indexOf(a)>=0||(r[a]=e[a]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)a=o[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var u=t.createContext({}),p=function(e){var n=t.useContext(u),a=n;return e&&(a="function"==typeof e?e(n):l(l({},n),e)),a},s=function(e){var n=p(e.components);return t.createElement(u.Provider,{value:n},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},m=t.forwardRef((function(e,n){var a=e.components,r=e.mdxType,o=e.originalType,u=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),c=p(a),m=r,k=c["".concat(u,".").concat(m)]||c[m]||d[m]||o;return a?t.createElement(k,l(l({ref:n},s),{},{components:a})):t.createElement(k,l({ref:n},s))}));function k(e,n){var a=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=a.length,l=new Array(o);l[0]=m;var i={};for(var u in n)hasOwnProperty.call(n,u)&&(i[u]=n[u]);i.originalType=e,i[c]="string"==typeof e?e:r,l[1]=i;for(var p=2;p<o;p++)l[p]=a[p];return t.createElement.apply(null,l)}return t.createElement.apply(null,a)}m.displayName="MDXCreateElement"},762:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>u,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var t=a(7462),r=(a(7294),a(3905));const o={},l="Condicionais",i={unversionedId:"Basico da Linguagem/condicionais",id:"Basico da Linguagem/condicionais",title:"Condicionais",description:"\xc9 importante saber que tudo em Ruby acaba com end.",source:"@site/docs/3-Basico da Linguagem/6-condicionais.md",sourceDirName:"3-Basico da Linguagem",slug:"/Basico da Linguagem/condicionais",permalink:"/ruby4noobs/Basico da Linguagem/condicionais",draft:!1,tags:[],version:"current",lastUpdatedBy:"Fernando Melo",lastUpdatedAt:1693398040,formattedLastUpdatedAt:"30 de ago. de 2023",sidebarPosition:6,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Operadores Relacionais",permalink:"/ruby4noobs/Basico da Linguagem/operadores-relacionais"},next:{title:"Interpola\xe7\xe3o de String",permalink:"/ruby4noobs/Basico da Linguagem/interpolacao"}},u={},p=[{value:"if..else",id:"ifelse",level:2},{value:"elsif",id:"elsif",level:2},{value:"unless",id:"unless",level:2},{value:"case",id:"case",level:2},{value:"for",id:"for",level:2},{value:"while",id:"while",level:2},{value:"until",id:"until",level:2},{value:"loop",id:"loop",level:2},{value:"break",id:"break",level:2},{value:"next",id:"next",level:2},{value:"redo",id:"redo",level:2}],s={toc:p},c="wrapper";function d(e){let{components:n,...a}=e;return(0,r.kt)(c,(0,t.Z)({},s,a,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"condicionais"},"Condicionais"),(0,r.kt)("p",null,"\xc9 importante saber que tudo em Ruby acaba com ",(0,r.kt)("inlineCode",{parentName:"p"},"end"),"."),(0,r.kt)("h2",{id:"ifelse"},"if..else"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"if")," \xe9 uma estrutura de controle que executa uma determinada a\xe7\xe3o caso uma condi\xe7\xe3o seja verdadeira."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"else")," \xe9 uma estrutura de controle que executa uma determinada a\xe7\xe3o caso uma condi\xe7\xe3o seja falsa."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ruby"},'r = "Ruby"\n\nif r == "Ruby"\n  puts "\xc9 Ruby"\nelse\n  puts "N\xe3o \xe9 Ruby"\nend\n')),(0,r.kt)("p",null,"Executando:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-txt"},"=> \xc9 Ruby\n")),(0,r.kt)("h2",{id:"elsif"},"elsif"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"elsif")," \xe9 um ",(0,r.kt)("inlineCode",{parentName:"p"},"else")," junto com ",(0,r.kt)("inlineCode",{parentName:"p"},"if"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ruby"},'r = "PHP"\n\nif r == "Ruby"\n  puts "\xc9 Ruby"\nelsif r == "PHP"\n  puts "\xc9 PHP"\nelse\n  puts "N\xe3o \xe9 Ruby nem PHP"\nend\n')),(0,r.kt)("p",null,"Executando:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-txt"},"=> \xc9 PHP\n")),(0,r.kt)("h2",{id:"unless"},"unless"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"unless")," \xe9 o contr\xe1rio do ",(0,r.kt)("inlineCode",{parentName:"p"},"if")," e ele \xe9 utilizado para negar uma condi\xe7\xe3o e executar o bloco caso a condi\xe7\xe3o seja falsa."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ruby"},'r = "PHP"\n\nunless r == "Ruby"\n  puts "N\xe3o \xe9 Ruby"\nelse\n  puts "\xc9 Ruby"\nend\n')),(0,r.kt)("p",null,"Executando:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-txt"},"=> N\xe3o \xe9 Ruby\n")),(0,r.kt)("p",null,"Esse tipo de c\xf3digo \xe9 bem confuso, as vezes \xe9 melhor fazer um bom teste positivo (if)."),(0,r.kt)("h2",{id:"case"},"case"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"case")," \xe9 utilizado para executar um bloco de c\xf3digo de acordo com uma condi\xe7\xe3o. \xc9 poss\xedvel utilizar mais de uma condi\xe7\xe3o. Podemos utilizar o case para fazer algumas compara\xe7\xf5es interessantes."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ruby"},'r = "JavaScript"\n\ncase r\nwhen "Ruby"\n  puts "\xc9 Ruby"\nwhen "PHP"\n  puts "\xc9 PHP"\nelse\n  puts "N\xe3o \xe9 Ruby nem PHP"\nend\n')),(0,r.kt)("p",null,"Executando:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-txt"},"=> N\xe3o \xe9 Ruby nem PHP\n")),(0,r.kt)("h2",{id:"for"},"for"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"for")," \xe9 utilizado para executar um bloco de c\xf3digo de acordo com um determinado n\xfamero de vezes. \xc9 poss\xedvel utilizar o ",(0,r.kt)("inlineCode",{parentName:"p"},"for")," para fazer algumas repeti\xe7\xf5es interessantes."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ruby"},"for i in 1..10\n  puts i\nend\n")),(0,r.kt)("p",null,"Executando:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-txt"},"=> 1 2 3 4 5 6 7 8 9 10\n")),(0,r.kt)("h2",{id:"while"},"while"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"while")," \xe9 utilizado para executar um bloco de c\xf3digo enquanto uma condi\xe7\xe3o for verdadeira. (Fa\xe7a enquanto)."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ruby"},'r = "JavaScript"\n\nwhile r != "Ruby"\n  puts "N\xe3o \xe9 Ruby"\nend\n')),(0,r.kt)("p",null,"Executando:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-txt"},"=> N\xe3o \xe9 Ruby\n")),(0,r.kt)("p",null,"Se n\xe3o interromper com Ctrl+C, esse c\xf3digo vai ficar funcionando para sempre."),(0,r.kt)("h2",{id:"until"},"until"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"until")," \xe9 utilizado para executar um bloco de c\xf3digo enquanto uma condi\xe7\xe3o for falsa. (Fa\xe7a at\xe9 que)."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ruby"},"i = 0\n\nuntil i == 7\n  puts i\n  i += 1\nend\n")),(0,r.kt)("p",null,"Executando:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-txt"},"=> 0 1 2 3 4 5 6\n")),(0,r.kt)("h2",{id:"loop"},"loop"),(0,r.kt)("p",null,"Intera\xe7\xf5es dentro de um loop:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"break")," - sai do ",(0,r.kt)("inlineCode",{parentName:"li"},"loop")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"next")," - vai para a pr\xf3xima itera\xe7\xe3o"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"redo")," - repete o ",(0,r.kt)("inlineCode",{parentName:"li"},"loop")," do in\xedcio, sem reavaliar a condi\xe7\xe3o ou pegar o pr\xf3ximo elemento")),(0,r.kt)("p",null,"Vamos utilizar essas intera\xe7\xf5es:"),(0,r.kt)("h2",{id:"break"},"break"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ruby"},"for i in (0..77)\n  break if i == 4\n  puts i\nend\n")),(0,r.kt)("p",null,"Executando:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-txt"},"=> 0 1 2 3\n")),(0,r.kt)("h2",{id:"next"},"next"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ruby"},"for i in (0..77)\n  next if i == 4\n  puts i\nend\n")),(0,r.kt)("p",null,"Executando:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-txt"},"=> 0 1 2 3 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29 30 31 32 33 34 35 36 37 38 39 40 41 42 43 44 45 46 47 48 49 50 51 52 53 54 55 56 57 58 59 60 61 62 63 64 65 66 67 68 69 70 71 72 73 74 75 76 77\n")),(0,r.kt)("h2",{id:"redo"},"redo"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ruby"},"for i in (0..77)\n  redo if i == 4\n  puts i\nend\n")),(0,r.kt)("p",null,"Executando:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-txt"},"=> 0 1 2 3\n")),(0,r.kt)("p",null,"Se n\xe3o interromper com Ctrl+C, esse c\xf3digo vai ficar funcionando para sempre."))}d.isMDXComponent=!0}}]);