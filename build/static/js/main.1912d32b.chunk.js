(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{103:function(e,t,c){},104:function(e,t,c){},106:function(e,t,c){},107:function(e,t,c){},108:function(e,t,c){},109:function(e,t,c){},110:function(e,t,c){"use strict";c.r(t);var a=c(3),s=c(0),n=c(8),r=c.n(n),i=c(43),o=c.n(i),l=c(56),u=c(14),j=c(57),d=c.n(j),b=c(24),h=c(11),v=(c(92),c(93),function(){return Object(a.jsxs)("div",{className:"footer",children:["Made with love by "," ",Object(a.jsx)("a",{className:"link",href:"https://www.linkedin.com/in/eshap-gupta-aab8a3163/",style:{cursor:"pointer"},children:"Eshap"})]})}),O=(c(94),function(){return Object(a.jsxs)("div",{className:"header",children:[Object(a.jsx)(b.b,{to:"/",className:"header__title",children:"Intutive quiz hub"}),Object(a.jsx)("hr",{className:"header__divider"})]})}),m=c(143),p=c(144),f=c(141),g=(c(103),function(e){var t=e.children;return Object(a.jsx)("div",{className:"error",children:t})}),x=[{category:"General Knowledge",value:9},{category:"Books",value:10},{category:"Films",value:11},{category:"Music",value:12},{category:"Musicals and Theaters",value:13},{category:"Television",value:14},{category:"Video Games",value:15},{category:"Board Games",value:16},{category:"Science and Nature",value:17},{category:"Computer",value:18},{category:"Mathematics",value:19},{category:"Mythology",value:20},{category:"Sports",value:21},{category:"Geography",value:22},{category:"History",value:23},{category:"Politics",value:24},{category:"Celebrities",value:26},{category:"Animals",value:27},{category:"Vehicles",value:28},{category:"Comics",value:29},{category:"Gadgets",value:30},{category:"Japanese Anime",value:31},{category:"Cartoon and Animations",value:32}],y=(c(104),function(e){e.name;var t=e.setname,c=e.fetchQuestions,n=Object(s.useState)(""),r=Object(u.a)(n,2),i=r[0],o=r[1],l=Object(s.useState)(""),j=Object(u.a)(l,2),d=j[0],b=j[1],v=Object(s.useState)(!1),O=Object(u.a)(v,2),y=O[0],N=O[1],q=Object(h.f)();return Object(a.jsxs)("div",{className:"home__content",children:[Object(a.jsxs)("div",{className:"home__settings",children:[Object(a.jsx)("span",{className:"home__heading",children:"Quiz Setting"}),Object(a.jsxs)("div",{className:"home__settingselect",children:[y&&Object(a.jsx)(g,{children:"Please fill all the fields"}),Object(a.jsx)(m.a,{className:"textfield",label:"Enter your name",variant:"outlined",onChange:function(e){return t(e.target.value)}}),Object(a.jsx)(m.a,{select:!0,label:"Select category",variant:"outlined",className:"textfield",onChange:function(e){return o(e.target.value)},value:i,children:x.map((function(e){return Object(a.jsx)(p.a,{value:e.value,children:e.category},e.value)}))}),Object(a.jsxs)(m.a,{select:!0,label:"Select Difficulty",className:"textfield",variant:"outlined",onChange:function(e){return b(e.target.value)},value:d,children:[Object(a.jsx)(p.a,{value:"easy",children:"Easy"},"Easy"),Object(a.jsx)(p.a,{value:"medium",children:"Medium"},"Medium"),Object(a.jsx)(p.a,{value:"hard",children:"Hard"},"Hard")]}),Object(a.jsx)(f.a,{className:"button",variant:"contained",color:"primary",size:"large",onClick:function(){i&&d?(N(!1),c(i,d),q.push("/quiz")):N(!0)},children:"Start Quiz"})]})]}),Object(a.jsx)("img",{src:"https://raw.githubusercontent.com/piyush-eon/Reactjs-Quiz-App/800cec3ad30b4669df73766564b8b85202f44f41/public/quiz.svg",className:"home__banner",alt:"quiz image"})]})}),N=c(61),q=c(142),_=(c(106),function(e){var t=e.currques,c=e.setcurrques,n=e.questions,r=e.options,i=e.correct,o=e.setscore,l=e.score,j=(e.setquestions,Object(s.useState)()),d=Object(u.a)(j,2),b=d[0],v=d[1],O=Object(s.useState)(!1),m=Object(u.a)(O,2),p=m[0],x=m[1],y=function(e){return b==e&&b===i?"select":b===e&&b!==i?"wrong":e===i?"select":void 0},N=Object(h.f)();return Object(a.jsxs)("div",{className:"question",children:[Object(a.jsxs)("h1",{children:["Question ",t+1]}),Object(a.jsxs)("div",{className:"singleques",children:[Object(a.jsx)("h2",{children:n[t].question}),p&&Object(a.jsx)(g,{children:"Please select an option"}),Object(a.jsx)("div",{className:"options",children:r&&r.map((function(e){return Object(a.jsx)("button",{onClick:function(){return function(e){v(e),e===i&&o(l+1),x(!1)}(e)},className:"singleoption ".concat(b&&y(e)),disabled:b,children:e},e)}))}),Object(a.jsxs)("div",{className:"controls",children:[Object(a.jsx)(f.a,{variant:"contained",color:"secondary",size:"large",href:"/",style:{width:185},onClick:function(){N.push("/")},children:"Quit"}),Object(a.jsx)(f.a,{variant:"contained",color:"primary",size:"large",style:{width:185},onClick:function(){t>8?N.push("/result"):b?(c(t+1),v()):x("please select an option")},children:t>8?"Result":"Next Question"})]})]})]})}),S=(c(107),function(e){var t=e.name,c=e.score,n=e.setscore,r=e.questions,i=e.setquestions,o=Object(s.useState)(),l=Object(u.a)(o,2),j=l[0],d=l[1],b=Object(s.useState)(0),h=Object(u.a)(b,2),v=h[0],O=h[1];Object(s.useEffect)((function(){var e,t;d(r&&m([null===(e=r[v])||void 0===e?void 0:e.correct_answer].concat(Object(N.a)(null===(t=r[v])||void 0===t?void 0:t.incorrect_answers))))}),[r,v]);var m=function(e){return e.sort((function(){return Math.random()-.5}))};return Object(a.jsxs)("div",{className:"quiz",children:[Object(a.jsxs)("span",{className:"quiz__subtitle",children:["Welcome, ",t]}),r?Object(a.jsxs)(a.Fragment,{children:[Object(a.jsxs)("div",{className:"quiz__info",children:[Object(a.jsx)("span",{children:r[v].category}),Object(a.jsxs)("span",{children:["Score: ",c]})]}),Object(a.jsx)(_,{currques:v,setcurrques:O,questions:r,options:j,correct:r[v].correct_answer,score:c,setscore:n,setquestions:i})]}):Object(a.jsx)(q.a,{className:"loader",color:"inherit",size:150,thickness:1})]})}),w=(c(108),function(e){var t=e.name,c=e.score,n=Object(h.f)();return Object(s.useEffect)((function(){t||n.push("/")}),[t,n]),Object(a.jsxs)("div",{className:"result",children:[Object(a.jsxs)("span",{className:"title",children:["Final score: ",c]}),Object(a.jsx)(f.a,{className:"button",variant:"contained",size:"large",style:{margin:10},color:"Secondary",href:"/",children:"Go to homepage"})]})});var z=function(){var e=Object(s.useState)(""),t=Object(u.a)(e,2),c=t[0],n=t[1],r=Object(s.useState)(),i=Object(u.a)(r,2),j=i[0],m=i[1],p=Object(s.useState)(0),f=Object(u.a)(p,2),g=f[0],x=f[1],N=function(){var e=Object(l.a)(o.a.mark((function e(){var t,c,a,s,n=arguments;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.length>0&&void 0!==n[0]?n[0]:"",c=n.length>1&&void 0!==n[1]?n[1]:"",e.next=4,d.a.get("https://opentdb.com/api.php?amount=10&category=".concat(t,"&difficulty=").concat(c,"&type=multiple"));case 4:a=e.sent,s=a.data,m(s.results);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(a.jsxs)(b.a,{children:[Object(a.jsxs)("div",{className:"app",style:{backgroundImage:'url("https://raw.githubusercontent.com/piyush-eon/Reactjs-Quiz-App/master/public/ques1.png")'},children:[Object(a.jsx)(O,{}),Object(a.jsxs)(h.c,{children:[Object(a.jsx)(h.a,{path:"/",exact:!0,children:Object(a.jsx)(y,{name:c,setname:n,fetchQuestions:N})}),Object(a.jsx)(h.a,{path:"/quiz",exact:!0,children:Object(a.jsx)(S,{name:c,questions:j,score:g,setscore:x,setquestions:m})}),Object(a.jsx)(h.a,{path:"/result",exact:!0,children:Object(a.jsx)(w,{name:c,score:g})})]})]}),Object(a.jsx)(v,{})]})};c(109);r.a.render(Object(a.jsx)(z,{}),document.getElementById("root"))},92:function(e,t,c){},93:function(e,t,c){},94:function(e,t,c){}},[[110,1,2]]]);
//# sourceMappingURL=main.1912d32b.chunk.js.map