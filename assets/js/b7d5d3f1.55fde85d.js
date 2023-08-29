"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[902],{3905:(e,a,t)=>{t.d(a,{Zo:()=>d,kt:()=>g});var r=t(7294);function n(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function o(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?o(Object(t),!0).forEach((function(a){n(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function s(e,a){if(null==e)return{};var t,r,n=function(e,a){if(null==e)return{};var t,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],a.indexOf(t)>=0||(n[t]=e[t]);return n}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var u=r.createContext({}),p=function(e){var a=r.useContext(u),t=a;return e&&(t="function"==typeof e?e(a):i(i({},a),e)),t},d=function(e){var a=p(e.components);return r.createElement(u.Provider,{value:a},e.children)},l="mdxType",m={inlineCode:"code",wrapper:function(e){var a=e.children;return r.createElement(r.Fragment,{},a)}},c=r.forwardRef((function(e,a){var t=e.components,n=e.mdxType,o=e.originalType,u=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),l=p(t),c=n,g=l["".concat(u,".").concat(c)]||l[c]||m[c]||o;return t?r.createElement(g,i(i({ref:a},d),{},{components:t})):r.createElement(g,i({ref:a},d))}));function g(e,a){var t=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var o=t.length,i=new Array(o);i[0]=c;var s={};for(var u in a)hasOwnProperty.call(a,u)&&(s[u]=a[u]);s.originalType=e,s[l]="string"==typeof e?e:n,i[1]=s;for(var p=2;p<o;p++)i[p]=t[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}c.displayName="MDXCreateElement"},1591:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>u,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var r=t(7462),n=(t(7294),t(3905));const o={},i="Entrada e Sa\xedda",s={unversionedId:"Basico da Linguagem/entrada-e-saida",id:"Basico da Linguagem/entrada-e-saida",title:"Entrada e Sa\xedda",description:"Nesse m\xf3dulo vamos aprender entrada e sa\xedda, no nosso hello-world n\xf3s vimos como utilizar o puts para imprimir uma mensagem na tela. Isso \xe9 um exemplo de sa\xedda. Agora vamos aprender como utilizar o gets para ler uma mensagem do usu\xe1rio. E entender o conceito de entrada e sa\xedda.",source:"@site/docs/3-Basico da Linguagem/8-entrada-e-saida.md",sourceDirName:"3-Basico da Linguagem",slug:"/Basico da Linguagem/entrada-e-saida",permalink:"/ruby4noobs/Basico da Linguagem/entrada-e-saida",draft:!1,tags:[],version:"current",lastUpdatedBy:"Kaique Linhares",lastUpdatedAt:1693341881,formattedLastUpdatedAt:"29 de ago. de 2023",sidebarPosition:8,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Interpola\xe7\xe3o de String",permalink:"/ruby4noobs/Basico da Linguagem/interpolacao"},next:{title:"M\xe9todos",permalink:"/ruby4noobs/Basico da Linguagem/metodos"}},u={},p=[{value:"Sa\xedda (Output)",id:"sa\xedda-output",level:2},{value:"Entrada (Input)",id:"entrada-input",level:2}],d={toc:p},l="wrapper";function m(e){let{components:a,...t}=e;return(0,n.kt)(l,(0,r.Z)({},d,t,{components:a,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"entrada-e-sa\xedda"},"Entrada e Sa\xedda"),(0,n.kt)("p",null,"Nesse m\xf3dulo vamos aprender entrada e sa\xedda, no nosso ",(0,n.kt)("a",{parentName:"p",href:"/ruby4noobs/Basico%20da%20Linguagem/hello-world"},"hello-world")," n\xf3s vimos como utilizar o ",(0,n.kt)("inlineCode",{parentName:"p"},"puts")," para imprimir uma mensagem na tela. Isso \xe9 um exemplo de sa\xedda. Agora vamos aprender como utilizar o ",(0,n.kt)("inlineCode",{parentName:"p"},"gets")," para ler uma mensagem do usu\xe1rio. E entender o conceito de entrada e sa\xedda."),(0,n.kt)("h2",{id:"sa\xedda-output"},"Sa\xedda (Output)"),(0,n.kt)("p",null,"A fun\xe7\xe3o ",(0,n.kt)("inlineCode",{parentName:"p"},"puts")," \xe9 utilizada para imprimir uma mensagem na tela. Como por exemplo:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ruby"},'puts "Hello World"\n')),(0,n.kt)("p",null,'N\xf3s podemos "',(0,n.kt)("em",{parentName:"p"},"dar puts"),'" em qualquer lugar do c\xf3digo. E com quase todos os ',(0,n.kt)("a",{parentName:"p",href:"/ruby4noobs/Basico%20da%20Linguagem/tipos-de-dados"},"tipos de dados"),". Por exemplo:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ruby"},'puts "Hello World"\nputs 123\nputs true\nputs false\nputs nil\nputs [1, 2, 3]\nputs :ruby\nputs (1..10)\n')),(0,n.kt)("h2",{id:"entrada-input"},"Entrada (Input)"),(0,n.kt)("p",null,"Agora vamos usar a interpola\xe7\xe3o que aprendemos anteriormente para imprimir uma mensagem e ler uma entrada do usu\xe1rio."),(0,n.kt)("p",null,"A fun\xe7\xe3o ",(0,n.kt)("inlineCode",{parentName:"p"},"gets")," \xe9 utilizada para ler uma mensagem do usu\xe1rio. Como por exemplo:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ruby"},'puts "Digite algo: "\ntext = gets\nputs "Voc\xea digitou: #{text}"\n')),(0,n.kt)("p",null,"Vamos tentar utilizar tudo que aprendermos como interpola\xe7\xe3o, vari\xe1veis e tipos de dados."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ruby"},'puts "Qual \xe9 o seu nome? " # Imprime a mensagem\nnome = gets.chomp # L\xea a entrada do usu\xe1rio e remove o \\n do final\nputs "Qual \xe9 a sua idade? " # Imprime a mensagem\nidade = gets.chomp # L\xea a entrada do usu\xe1rio e remove o \\n do final\nputs "Seu nome \xe9 #{nome} e voc\xea tem #{idade} anos." # Imprime a mensagem com a interpola\xe7\xe3o\n')))}m.isMDXComponent=!0}}]);