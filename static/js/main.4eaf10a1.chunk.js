(this["webpackJsonpreact_add-todo-form"]=this["webpackJsonpreact_add-todo-form"]||[]).push([[0],{14:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var a=n(7),i=n.n(a),r=n(9),s=n(4),c=n(2),o=(n(14),n(1)),l=n(8),d=n.n(l),u=[{id:1,name:"Leanne Graham",username:"Bret",email:"Sincere@april.biz"},{id:2,name:"Ervin Howell",username:"Antonette",email:"Shanna@melissa.tv"},{id:3,name:"Clementine Bauch",username:"Samantha",email:"Nathan@yesenia.net"},{id:4,name:"Patricia Lebsack",username:"Karianne",email:"Julianne.OConner@kory.org"},{id:5,name:"Chelsey Dietrich",username:"Kamren",email:"Lucio_Hettinger@annie.ca"},{id:6,name:"Mrs. Dennis Schulist",username:"Leopoldo_Corkery",email:"Karley_Dach@jasper.info"},{id:7,name:"Kurtis Weissnat",username:"Elwyn.Skiles",email:"Telly.Hoeger@billy.biz"},{id:8,name:"Nicholas Runolfsdottir V",username:"Maxime_Nienow",email:"Sherwood@rosamond.me"},{id:9,name:"Glenna Reichert",username:"Delphine",email:"Chaim_McDermott@dana.io"},{id:10,name:"Clementina DuBuque",username:"Moriah.Stanton",email:"Rey.Padberg@karina.biz"}],m=n(0),j=function(e){var t,n=e.userId;return Object(m.jsx)("a",{className:"UserInfo",href:"mailto:Sincere@april.biz",children:null===(t=u.find((function(e){return e.id===n})))||void 0===t?void 0:t.name})},b=function(e){var t=e.todo;return Object(m.jsxs)("article",{"data-id":"1",className:d()("TodoInfo",{"TodoInfo--completed":t.completed}),children:[Object(m.jsx)("h2",{className:"TodoInfo__title",children:t.title}),Object(m.jsx)(j,{userId:t.userId})]})},h=function(e){var t=e.todos;return Object(m.jsx)("section",{className:"TodoList",children:t.map((function(e){return Object(m.jsx)(b,{todo:e},e.id)}))})},O=[{id:1,title:"delectus aut autem",completed:!0,userId:1},{id:15,title:"some other todo",completed:!1,userId:1},{id:2,title:"quis ut nam facilis et officia qui",completed:!1,userId:4}].map((function(e){return Object(c.a)(Object(c.a)({},e),{},{userId:u.findIndex((function(t){return t.id===e.userId}))+1})})),f=function(){var e=Object(o.useState)(O),t=Object(s.a)(e,2),n=t[0],a=t[1],i=Object(o.useState)(!1),l=Object(s.a)(i,2),d=l[0],j=l[1],b=Object(o.useState)(!1),f=Object(s.a)(b,2),p=f[0],x=f[1],I=Object(o.useState)({id:16,title:"",completed:!1,userId:0}),v=Object(s.a)(I,2),y=v[0],S=v[1],N=function(e){e.preventDefault(),y.title.trim()||j(!0),y.userId||x(!0),!d&&!p&&y.title.trim()&&y.userId&&(a((function(e){return[].concat(Object(r.a)(e),[y])})),S((function(e){return{id:e.id+1,title:"",completed:!1,userId:0}})),j(!1),x(!1))};return Object(m.jsxs)("div",{className:"App",children:[Object(m.jsx)("h1",{children:"Add todo form"}),Object(m.jsxs)("form",{action:"/api/todos",method:"POST",onSubmit:function(e){return N(e)},children:[Object(m.jsxs)("div",{className:"field",children:[Object(m.jsx)("label",{htmlFor:"title",children:"Title: "}),Object(m.jsx)("input",{type:"text","data-cy":"titleInput",id:"title",name:"title",placeholder:"Enter a title",onChange:function(e){S((function(t){return Object(c.a)(Object(c.a)({},t),{},{title:e.target.value})})),j(!1)},value:y.title}),Object(m.jsx)("span",{className:"error",style:{display:d?"inline-block":"none"},children:"Please enter a title"})]}),Object(m.jsxs)("div",{className:"field",children:[Object(m.jsx)("label",{htmlFor:"user",children:"User: "}),Object(m.jsxs)("select",{"data-cy":"userSelect",id:"user",name:"user",onChange:function(e){S((function(t){return Object(c.a)(Object(c.a)({},t),{},{userId:+e.target.value})})),x(!1)},value:y.userId,children:[Object(m.jsx)("option",{value:"0",children:"Choose a user"}),u.map((function(e){return Object(m.jsx)("option",{value:e.id,children:e.name},e.id)}))]}),Object(m.jsx)("span",{className:"error",style:{display:p?"inline-block":"none"},children:"Please choose a user"})]}),Object(m.jsx)("button",{type:"submit","data-cy":"submitButton",children:"Add"})]}),Object(m.jsx)(h,{todos:n})]})};i.a.render(Object(m.jsx)(f,{}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.4eaf10a1.chunk.js.map