"use strict";(self.webpackChunkaluroni=self.webpackChunkaluroni||[]).push([[408],{678:function(a,e,s){s.r(e),s.d(e,{default:function(){return c}});var o=s(942),r=(s(791),{tags:"TagsPrato_tags__vi8iK",tags__tipo:"TagsPrato_tags__tipo__6YMaF",tags__tipo__massas:"TagsPrato_tags__tipo__massas__Qhbei",tags__tipo__carnes:"TagsPrato_tags__tipo__carnes__fmF59",tags__tipo__combos:"TagsPrato_tags__tipo__combos__mLD98",tags__tipo__veganos:"TagsPrato_tags__tipo__veganos__XsURL",tags__porcao:"TagsPrato_tags__porcao__qkyW8",tags__qtdpessoas:"TagsPrato_tags__qtdpessoas__SDEFr",tags__valor:"TagsPrato_tags__valor__s6+-8"}),t=s(694),i=s.n(t),n=s(184);function c(a){var e,s=a.category,t=a.size,c=a.serving,l=a.price;return(0,n.jsxs)("div",{className:r.tags,children:[(0,n.jsx)("div",{className:i()((e={},(0,o.Z)(e,r.tags__tipo,!0),(0,o.Z)(e,r["tags__tipo__".concat(s.label.toLowerCase())],!0),e)),children:s.label}),(0,n.jsxs)("div",{className:r.tags__porcao,children:[t,"g"]}),(0,n.jsxs)("div",{className:r.tags__qtdpessoas,children:["Serve ",c," pessoa",1===c?"":"s"]}),(0,n.jsxs)("div",{className:r.tags__valor,children:["R$ ",l.toFixed(2)]})]})}},408:function(a,e,s){s.r(e),s.d(e,{default:function(){return R}});var o=s(439),r=s(791),t="Buscador_buscador__FLh47",i=s(880),n=s(184);function c(a){var e=a.busca,s=a.setBusca,o=(0,r.useMemo)((function(){return(0,n.jsx)(i.lnn,{size:20,color:"#4C4D5E"})}),[]);return(0,n.jsx)(n.Fragment,{children:(0,n.jsxs)("div",{className:t,children:[o,(0,n.jsx)("input",{value:e,onChange:function(a){return s(a.target.value)},placeholder:"Buscar"})]})})}var l=(0,r.memo)(c),d={cardapio__filtros:"Cardapio_cardapio__filtros__bgtjl"},_=s(63),u=s(942),p=JSON.parse('[{"label":"Massas","id":1},{"label":"Carnes","id":2},{"label":"Combos","id":3},{"label":"Veganos","id":4}]'),g="Filtro_filtros__j8h3s",m="Filtro_filtros__filtro__gLuZL",h="Filtro_filtros__filtro--ativo__OlIWg",v=s(694),f=s.n(v);function j(a){var e=a.filtro,s=a.setFiltro;return(0,n.jsx)("div",{className:g,children:p.map((function(a){var o;return(0,n.jsx)("button",{className:f()((o={},(0,u.Z)(o,m,!0),(0,u.Z)(o,h,e===a.id),o)),onClick:function(){return function(a){return e===a.id?s(null):s(a.id)}(a)},children:a.label},a.id)}))})}var b=(0,r.memo)(j),x="Ordenador_ordenador__e4sYl",N="Ordenador_ordenador--ativo__j+qm3",z="Ordenador_ordenador__options__CwU92",C="Ordenador_ordenador__options--ativo__z2dcn",Z="Ordenador_ordenador__option__kXRUp",P=JSON.parse('[{"nome":"","value":""},{"nome":"Por\xe7\xe3o","value":"porcao"},{"nome":"Qtd. pessoas","value":"qtd_pessoas"},{"nome":"Pre\xe7o","value":"preco"}]'),S=s(856);function y(a){var e,s,t,i=a.ordenador,c=a.setOrdenador,l=(0,r.useState)(!1),d=(0,o.Z)(l,2),_=d[0],p=d[1],g=null===(e=P.find((function(a){return a.value===i})))||void 0===e?void 0:e.nome;return(0,n.jsxs)("button",{className:f()((s={},(0,u.Z)(s,x,!0),(0,u.Z)(s,N,""!==i),s)),onClick:function(){return p(!_)},onBlur:function(){return p(!1)},children:[(0,n.jsx)("span",{children:g||"Ordernar Por"}),_?(0,n.jsx)(S.rWj,{size:30}):(0,n.jsx)(S.Ix0,{size:30}),(0,n.jsx)("div",{className:f()((t={},(0,u.Z)(t,z,!0),(0,u.Z)(t,C,_),t)),children:P.map((function(a){return(0,n.jsx)("div",{className:Z,onClick:function(){return c(a.value)},children:a.nome},a.value)}))})]})}var M=(0,r.memo)(y),O=s(413),F=s(678),T="Item_item__txGVj",k="Item_item__imagem__zb+uD",B="Item_item__descricao__pGgBx",L="Item_item__titulo__-+onB",q=s(689);function w(a){var e=a.id,s=a.title,o=a.description,r=a.photo,t=(0,q.s0)();return(0,n.jsxs)("div",{className:T,onClick:function(){return t("/projeto-aluroni/prato/".concat(e))},children:[(0,n.jsx)("div",{className:k,children:(0,n.jsx)("img",{src:r,alt:s})}),(0,n.jsxs)("div",{className:B,children:[(0,n.jsxs)("div",{className:L,children:[(0,n.jsxs)("h2",{children:[" ",s," "]}),(0,n.jsxs)("p",{children:[" ",o," "]})]}),(0,n.jsx)(F.default,(0,O.Z)({},a))]})]})}var I=(0,r.memo)(w),A=s(502),D={itens:"Itens_itens__hwvAg"};function E(a){var e=(0,r.useState)(A),s=(0,o.Z)(e,2),t=s[0],i=s[1],c=a.busca,l=a.filtro,d=a.ordenador;return(0,r.useEffect)((function(){var a=A.filter((function(a){return s=a.title,new RegExp(c,"i").test(s)&&(e=a.category.id,null===l||l===e);var e,s}));i(function(a){switch(d){case"porcao":return a.sort((function(a,e){return a.size>e.size?1:-1}));case"qtd_pessoas":return a.sort((function(a,e){return a.serving>e.serving?1:-1}));case"preco":return a.sort((function(a,e){return a.price>e.price?1:-1}));default:return a}}(a))}),[c,l,d]),(0,n.jsx)("div",{className:D.itens,children:t.map((function(a){return(0,n.jsx)(I,(0,O.Z)({},a),a.id)}))})}function R(){var a=(0,r.useState)(""),e=(0,o.Z)(a,2),s=e[0],t=e[1],i=(0,r.useState)(null),c=(0,o.Z)(i,2),u=c[0],p=c[1],g=(0,r.useState)(""),m=(0,o.Z)(g,2),h=m[0],v=m[1];return(0,n.jsxs)("section",{className:d.cardapio,children:[(0,n.jsx)("h3",{className:_.Z.titulo,children:"Card\xe1pio"}),(0,n.jsx)(l,{busca:s,setBusca:t}),(0,n.jsxs)("div",{className:d.cardapio__filtros,children:[(0,n.jsx)(b,{filtro:u,setFiltro:p}),(0,n.jsx)(M,{ordenador:h,setOrdenador:v})]}),(0,n.jsx)(E,{busca:s,filtro:u,ordenador:h})]})}},63:function(a,e){e.Z={container:"Tema_container__bjYi5",titulo:"Tema_titulo__y+XU2"}},502:function(a){a.exports=JSON.parse('[{"title":"Macarr\xe3o mediterr\xe2neo","description":"Macarr\xe3o spaghetti com frutos-do-mar e espec\xedarias, especialidade da cozinha. Aten\xe7\xe3o: Cont\xe9m camar\xe3o e outros frutos-do-mar!","photo":"https://guih1886.github.io/projeto-aluroni/assets/pratos/macarrao_mediterraneo.png","size":400,"serving":2,"price":73,"id":1,"category":{"id":1,"label":"Massas"}},{"title":"Macarr\xe3o da casa","description":"Macarr\xe3o com frutos-do-mar e espec\xedarias, especialidade da cozinha. Aten\xe7\xe3o: Cont\xe9m camar\xe3o e outros frutos-do-mar!","photo":"https://guih1886.github.io/projeto-aluroni/assets/pratos/macarrao_da_casa.png","size":400,"serving":2,"price":54,"id":2,"category":{"id":1,"label":"Massas"}},{"title":"Macarr\xe3o com chilli","description":"Macarr\xe3o fetuccine com molho de chilli e especi\xe1rias.","photo":"https://guih1886.github.io/projeto-aluroni/assets/pratos/macarrao_com_chilli.png","size":350,"serving":1,"price":58,"id":3,"category":{"id":1,"label":"Massas"}},{"title":"Salada da casa com salm\xe3o grelhado","description":"Salada da casa (alface, r\xfacula, cenoura) com salm\xe3o.","photo":"https://guih1886.github.io/projeto-aluroni/assets/pratos/salada_da_casa.png","size":450,"serving":1,"price":42,"id":4,"category":{"id":2,"label":"Carnes"}},{"title":"Bife com batatas","description":"Bife de boi (150g) na chapa, com batatas fritas. Acompanha arroz e molhos.","photo":"https://guih1886.github.io/projeto-aluroni/assets/pratos/bife_com_batatas.png","size":550,"serving":2,"price":86,"id":5,"category":{"id":2,"label":"Carnes"}},{"title":"Picanha picada com legumes e massa","description":"400g de picanha picada, com legumes grelhados e massa escolhida pelo cliente.","photo":"https://guih1886.github.io/projeto-aluroni/assets/pratos/picanha_picada.png","size":850,"serving":3,"price":123,"id":6,"category":{"id":3,"label":"Combos"}},{"title":"Lasagna vegana (carne de soja)","description":"Lasagna 100% vegana feita com carne de soja e massa especial.","photo":"https://guih1886.github.io/projeto-aluroni/assets/pratos/lasagna_vegana.png","size":350,"serving":1,"price":45,"id":7,"category":{"id":4,"label":"Veganos"}},{"title":"Salada especial","description":"Salada com abacate, manga, alface, gr\xe3o de bico e muito mais.","photo":"https://guih1886.github.io/projeto-aluroni/assets/pratos/salada_especial.png","size":350,"serving":1,"price":37,"id":8,"category":{"id":4,"label":"Veganos"}},{"title":"Alm\xf4ndegas","description":"Por\xe7\xe3o de alm\xf4ndegas com sour cream, cebola e temp\xearos. Acompanha arroz ou massa.","photo":"https://guih1886.github.io/projeto-aluroni/assets/pratos/almondegas.png","size":740,"serving":3,"price":120,"id":9,"category":{"id":3,"label":"Combos"}}]')}}]);
//# sourceMappingURL=408.583cb954.chunk.js.map