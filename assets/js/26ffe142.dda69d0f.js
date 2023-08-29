"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[372],{3905:(e,a,t)=>{t.d(a,{Zo:()=>m,kt:()=>v});var o=t(7294);function s(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function r(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);a&&(o=o.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,o)}return t}function n(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?r(Object(t),!0).forEach((function(a){s(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function i(e,a){if(null==e)return{};var t,o,s=function(e,a){if(null==e)return{};var t,o,s={},r=Object.keys(e);for(o=0;o<r.length;o++)t=r[o],a.indexOf(t)>=0||(s[t]=e[t]);return s}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)t=r[o],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}var u=o.createContext({}),d=function(e){var a=o.useContext(u),t=a;return e&&(t="function"==typeof e?e(a):n(n({},a),e)),t},m=function(e){var a=d(e.components);return o.createElement(u.Provider,{value:a},e.children)},l="mdxType",p={inlineCode:"code",wrapper:function(e){var a=e.children;return o.createElement(o.Fragment,{},a)}},c=o.forwardRef((function(e,a){var t=e.components,s=e.mdxType,r=e.originalType,u=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),l=d(t),c=s,v=l["".concat(u,".").concat(c)]||l[c]||p[c]||r;return t?o.createElement(v,n(n({ref:a},m),{},{components:t})):o.createElement(v,n({ref:a},m))}));function v(e,a){var t=arguments,s=a&&a.mdxType;if("string"==typeof e||s){var r=t.length,n=new Array(r);n[0]=c;var i={};for(var u in a)hasOwnProperty.call(a,u)&&(i[u]=a[u]);i.originalType=e,i[l]="string"==typeof e?e:s,n[1]=i;for(var d=2;d<r;d++)n[d]=t[d];return o.createElement.apply(null,n)}return o.createElement.apply(null,t)}c.displayName="MDXCreateElement"},364:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>u,contentTitle:()=>n,default:()=>p,frontMatter:()=>r,metadata:()=>i,toc:()=>d});var o=t(7462),s=(t(7294),t(3905));const r={},n="Testes automatizados",i={unversionedId:"Modulo Intermediario/testes",id:"Modulo Intermediario/testes",title:"Testes automatizados",description:"O que s\xe3o testes automatizados?",source:"@site/docs/4-Modulo Intermediario/3-testes.md",sourceDirName:"4-Modulo Intermediario",slug:"/Modulo Intermediario/testes",permalink:"/ruby4noobs/Modulo Intermediario/testes",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Depend\xeancias",permalink:"/ruby4noobs/Modulo Intermediario/dependencias"}},u={},d=[{value:"O que s\xe3o testes automatizados?",id:"o-que-s\xe3o-testes-automatizados",level:2},{value:"Por que usar testes automatizados?",id:"por-que-usar-testes-automatizados",level:2},{value:"Como usar testes automatizados em Ruby?",id:"como-usar-testes-automatizados-em-ruby",level:2},{value:"O que \xe9 TDD ?",id:"o-que-\xe9-tdd-",level:2},{value:"Etapa 1 \u2014 Adicione um teste",id:"etapa-1--adicione-um-teste",level:3},{value:"Etapa 2 \u2014 Execute os testes e veja se o novo teste falha",id:"etapa-2--execute-os-testes-e-veja-se-o-novo-teste-falha",level:3},{value:"Etapa 3 \u2014 Escreva o c\xf3digo",id:"etapa-3--escreva-o-c\xf3digo",level:3},{value:"Etapa 4 \u2014 Execute os testes",id:"etapa-4--execute-os-testes",level:3},{value:"Etapa 5 \u2014 Refatore o c\xf3digo",id:"etapa-5--refatore-o-c\xf3digo",level:3}],m={toc:d},l="wrapper";function p(e){let{components:a,...t}=e;return(0,s.kt)(l,(0,o.Z)({},m,t,{components:a,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"testes-automatizados"},"Testes automatizados"),(0,s.kt)("h2",{id:"o-que-s\xe3o-testes-automatizados"},"O que s\xe3o testes automatizados?"),(0,s.kt)("p",null,"Testes automatizados se fundamentam no uso de ferramentas para controlar a execu\xe7\xe3o de testes de software. O objetivo \xe9 basicamente escrever um software que testar\xe1 seu programa de forma autom\xe1tica. Testes automatizados tamb\xe9m tem como objetivo dar a confian\xe7a necess\xe1ria para modificar o seu c\xf3digo."),(0,s.kt)("h2",{id:"por-que-usar-testes-automatizados"},"Por que usar testes automatizados?"),(0,s.kt)("p",null,"Um dos principais motivos \xe9 dar confian\xe7a para modificar o seu c\xf3digo. ",(0,s.kt)("strong",{parentName:"p"},"Mas este n\xe3o \xe9 o \xfanico motivo.")),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Redu\xe7\xe3o de custos"),(0,s.kt)("li",{parentName:"ul"},"Redu\xe7\xe3o de erros"),(0,s.kt)("li",{parentName:"ul"},"Indicativo de t\xe9rmino de uma tarefa"),(0,s.kt)("li",{parentName:"ul"},"Evitar regress\xf5es de c\xf3digo")),(0,s.kt)("h2",{id:"como-usar-testes-automatizados-em-ruby"},"Como usar testes automatizados em Ruby?"),(0,s.kt)("p",null,"Para realizarmos testes automatizados, antes de mais nada, precisamos Instalar a ",(0,s.kt)("inlineCode",{parentName:"p"},"gem minitest"),"."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ruby"},"gem install minitest\n")),(0,s.kt)("p",null,"Para come\xe7armos \xe9 necess\xe1rio que voc\xea:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Abra seu editor de c\xf3digo favorito"),(0,s.kt)("li",{parentName:"ul"},"Crie dois arquivos ",(0,s.kt)("inlineCode",{parentName:"li"},".rb")," com os nomes: soma e teste"),(0,s.kt)("li",{parentName:"ul"},"Salva os dois arquivos no mesmo diret\xf3rio"),(0,s.kt)("li",{parentName:"ul"},"Abra o diret\xf3rio dos arquivos pelo terminal")),(0,s.kt)("p",null,"Com tudo pronto, vamos come\xe7ar criando o teste que espera que a soma de dois n\xfameros seja igual a quatro."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ruby"},"require 'minitest/autorun' # aqui nos declaramos o requerimento do minitest que nos instalamos anteriormente\nrequire_relative './soma' # aqui nos declaramos outro requerimento mas dessa vez do outro arquivo que nos criamos.\n\nclass SomaTest < Minitest::Test # aqui criamos uma classe que herda de Minitest::Test\n  def test_soma\n    assert_equal(4, soma(2, 2))\n  end\nend\n")),(0,s.kt)("p",null,"Ao executar o teste, o resultado ser\xe1:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ruby"},"=> ruby teste.rb\nRun options: --seed 19897\n\n# Running:\n\nE\n\nError:\nSomaTest#test_soma:\nNoMethodError: undefined method `soma' for #<SomaTest:0x00007f6ce8acb668 @NAME=\"test_soma\", @failures=[#<Minitest::UnexpectedError: Unexpected exception>], @assertions=0, @time=0.0006974000007176073>\n\n    assert_equal(5, soma(3, 2))\n                    ^^^^\n    teste.rb:6:in `test_soma'\n\n\nrails test teste.rb:5\n\n\nFinished in 0.003121s, 320.3588 runs/s, 0.0000 assertions/s.\n1 runs, 0 assertions, 0 failures, 1 errors, 0 skips\n")),(0,s.kt)("p",null,"A mensagem de erro que recebemos indica ",(0,s.kt)("inlineCode",{parentName:"p"},"NoMethodError: undefined method 'soma'")," ou seja, que n\xe3o existe um m\xe9todo chamado ",(0,s.kt)("inlineCode",{parentName:"p"},"soma"),"."),(0,s.kt)("p",null,"Ent\xe3o vamos solucionar esse erro criando uma fun\xe7\xe3o no arquivo ",(0,s.kt)("inlineCode",{parentName:"p"},"soma.rb")," que retorna o valor da soma de dois n\xfameros:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ruby"},"def soma(a, b)\n  a + b\nend\n")),(0,s.kt)("p",null,"Agora vamos executar o teste novamente e yay! \ud83c\udf89"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ruby"},"=> ruby teste.rb\nRun options: --seed 41202\n\n# Running:\n\n.\n\nFinished in 0.001383s, 723.0135 runs/s, 723.0135 assertions/s.\n1 runs, 1 assertions, 0 failures, 0 errors, 0 skips\n")),(0,s.kt)("p",null,"Na primeira etapa, vimos o que \xe9 o teste ",(0,s.kt)("strong",{parentName:"p"},"falhar")," (\ud83d\udd34)."),(0,s.kt)("p",null,"Fomos ent\xe3o para a segunda, e vimos o teste ",(0,s.kt)("strong",{parentName:"p"},"passar")," (\ud83d\udfe2)."),(0,s.kt)("p",null,"Agora, vamos para a \xfaltima etapa que \xe9 ",(0,s.kt)("strong",{parentName:"p"},"melhorar o c\xf3digo"),' (refatorar \ud83d\udd35). Nossos argumentos do m\xe9todo soma n\xe3o t\xeam um nome adequado. "a" e "b" n\xe3o dizem muita coisa pra quem l\xea o c\xf3digo meses depois. Portanto, poder\xedamos mud\xe1-los para numero_a e numero_b, respectivamente.'),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ruby"},"def soma(numero_a, numero_b)\n  numero_a + numero_b\nend\n")),(0,s.kt)("p",null,"Com toda essa explica\xe7\xe3o, voc\xea aprendeu como funciona ",(0,s.kt)("strong",{parentName:"p"},"testes automatizados em Ruby"),", e tamb\xe9m aprendeu na pr\xe1tica o que \xe9 TDD. Mas voc\xea deve estar se perguntando ",(0,s.kt)("strong",{parentName:"p"},"o que \xe9 TDD?")),(0,s.kt)("h2",{id:"o-que-\xe9-tdd-"},"O que \xe9 TDD ?"),(0,s.kt)("p",null,"Entendendo o ",(0,s.kt)("strong",{parentName:"p"},"Test-Driven Development")," ",(0,s.kt)("img",{parentName:"p",src:"https://marsner.com/wp-content/uploads/test-driven-development-TDD.png",alt:"tdd-image"})),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Test-Driven Development")," \xe9 uma t\xe9cnica que se baseia na repeti\xe7\xe3o de ciclos curtos de desenvolvimento. Primeiro, o desenvolvedor ",(0,s.kt)("strong",{parentName:"p"},"escreve um teste")," automatizado que define o comportamento da nova funcionalidade. Ent\xe3o, o desenvolvedor escreve a menor quantidade de c\xf3digo necess\xe1ria para fazer este teste ",(0,s.kt)("strong",{parentName:"p"},"passar"),". Finalmente, o desenvolvedor pode ",(0,s.kt)("strong",{parentName:"p"},"refatorar")," o c\xf3digo para n\xedveis de qualidade aceit\xe1veis."),(0,s.kt)("h3",{id:"etapa-1--adicione-um-teste"},"Etapa 1 \u2014 Adicione um teste"),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"No ciclo de TDD"),", toda funcionalidade come\xe7a pelo teste. Para escrever este teste, o desenvolvedor precisa entender claramente os requisitos da tarefa. \xc9 aqui a maior diferen\xe7a entre escrever o teste antes ou depois do c\xf3digo; O TDD for\xe7a o desenvolvedor a entender os requisitos antes de escrever o c\xf3digo."),(0,s.kt)("h3",{id:"etapa-2--execute-os-testes-e-veja-se-o-novo-teste-falha"},"Etapa 2 \u2014 Execute os testes e veja se o novo teste falha"),(0,s.kt)("p",null,"Ap\xf3s adicionar o novo teste, voc\xea deve executar todos os testes do seu sistema, para garantir que a funcionalidade ainda n\xe3o existe e para garantir que o teste n\xe3o passou por engano; talvez porque voc\xea tenha escrito o teste de forma equivocada ou o teste simplesmente n\xe3o faz sentido em existir. Esta etapa aumenta a confian\xe7a de que o teste passa apenas nos casos desejados."),(0,s.kt)("h3",{id:"etapa-3--escreva-o-c\xf3digo"},"Etapa 3 \u2014 Escreva o c\xf3digo"),(0,s.kt)("p",null,"A pr\xf3xima etapa \xe9 escrever o c\xf3digo, ",(0,s.kt)("strong",{parentName:"p"},"fazendo com que o teste passe"),". Voc\xea n\xe3o precisa escrever o melhor c\xf3digo que j\xe1 existiu e totalmente aceit\xe1vel que o c\xf3digo seja escrito de uma forma deselegante, sem preocupa\xe7\xe3o com a performance ou outro requisito."),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Lembre-se que o objetivo desta etapa \xe9 fazer com que o teste passe;")," por isso, nada de adicionar funcionalidades extras por qualquer que seja o motivo."),(0,s.kt)("h3",{id:"etapa-4--execute-os-testes"},"Etapa 4 \u2014 Execute os testes"),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Execute novamente os testes"),". Se eles passarem, o desenvolvedor tem a confian\xe7a de que os requisitos foram atingidos e que n\xe3o quebra ou degrada as funcionalidades existentes. Se os testes n\xe3o passarem, ajuste o c\xf3digo que voc\xea escreveu at\xe9 que o teste passe."),(0,s.kt)("h3",{id:"etapa-5--refatore-o-c\xf3digo"},"Etapa 5 \u2014 Refatore o c\xf3digo"),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Para que a qualidade de seu c\xf3digo seja mantida (ou aumente), \xe9 necess\xe1rio que voc\xea refatore o c\xf3digo do projeto constantemente.")," Altere a organiza\xe7\xe3o de arquivos, reduza a duplica\xe7\xe3o de l\xf3gica, fa\xe7a com que nomes de classes, vari\xe1veis e m\xe9todos indiquem claramente sua inten\xe7\xe3o e prop\xf3sito. Se os m\xe9todos forem muito grandes, extraia para outros m\xe9todos ou classes, tornando sua responsabilidade menor, mas melhor definida."),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Para cada modifica\xe7\xe3o que voc\xea fizer, execute novamente os testes.")," Assim voc\xea ter\xe1 a confian\xe7a de que as altera\xe7\xf5es n\xe3o afetaram o comportamento do projeto."),(0,s.kt)("p",null,"Nesse ponto espero que tenha entendido como funciona testes automatizados e TDD na teoria, e tamb\xe9m na pr\xe1tica. \ud83d\ude01"))}p.isMDXComponent=!0}}]);