(this.webpackJsonptodo=this.webpackJsonptodo||[]).push([[0],[,,,,,,,,,,,,,function(t,e,n){},function(t,e,n){},function(t,e,n){},,function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){"use strict";n.r(e);var a=n(1),c=n.n(a),i=n(8),r=n.n(i),s=(n(13),n(14),n(15),n(0));var o=function(){return Object(s.jsx)("header",{children:Object(s.jsx)("h1",{children:"ToDo List"})})},l=n(5),j=n(2);n(17),n(18);var d=function(t){var e=Object(a.useState)({}),n=Object(j.a)(e,2),c=n[0],i=n[1];Object(a.useEffect)((function(){var e={title:t.tarea.title,id:t.tarea.id,done:t.tarea.done};i(e)}),[t.tarea.title,t.tarea.id,t.tarea.done]);var r={transform:"rotate(".concat(5*Math.random()-2.5,"deg)")};return Object(s.jsxs)("li",{style:r,className:"".concat(t.tarea.priority," task"),children:[Object(s.jsx)("input",{type:"checkbox",checked:t.tarea.done,onChange:function(){t.setDoneTask(c.id)}}),Object(s.jsx)("div",{className:"titleWrapper",children:Object(s.jsx)("p",{className:t.tarea.done?"done":"",children:t.tarea.title})}),Object(s.jsx)("div",{className:"seletWrapper",children:Object(s.jsxs)("select",{name:"select",onChange:function(e){t.changePriority(e.target.value,c.id)},value:t.tarea.priority,children:[Object(s.jsx)("option",{value:"alta",children:"Alta"}),Object(s.jsx)("option",{value:"baja",children:"Baja"})]})}),Object(s.jsxs)("div",{className:"buttonWrapper",children:[Object(s.jsx)("button",{onClick:function(){t.editTaskBtn(c.id)},children:"Editar"}),Object(s.jsx)("button",{onClick:function(){t.delTask(c.id)},children:"Eliminar"})]})]})};n(19);var u=function(t){return Object(s.jsx)("div",{className:"searchWrapper",children:Object(s.jsx)("form",{children:Object(s.jsx)("input",{placeholder:"buscar tarea",className:"search",type:"text",onChange:function(e){t.searchTask(e.target.value)}})})})},b=n(7);n(20);var f=function(t){var e=Object(a.useState)(""),n=Object(j.a)(e,2),c=n[0],i=n[1];return Object(a.useEffect)((function(){var e={title:t.task?t.task.title:"",id:t.task?t.task.id:"",done:t.task?t.task.done:"",priority:t.task?t.task.priority:""};i(e)}),[t.task]),Object(s.jsx)("div",{className:"formWrapper",children:Object(s.jsxs)("form",{onSubmit:function(e){return function(e){e.preventDefault(),t.formSubmit(c)}(e)},children:[Object(s.jsx)("input",{className:"taskText",type:"text",defaultValue:c.title,onChange:function(t){i(Object(b.a)(Object(b.a)({},c),{},{title:t.target.value}))}}),Object(s.jsx)("input",{className:"okBtn",type:"submit",value:t.text}),Object(s.jsx)("input",{className:"koBtn",type:"button",value:"Cancelar",onClick:t.clearAction})]})})},O=function(t){localStorage.setItem("Tasks",JSON.stringify(t))};var h=function(t){var e=Object(a.useState)([]),n=Object(j.a)(e,2),c=n[0],i=n[1],r=Object(a.useState)(""),o=Object(j.a)(r,2),b=o[0],h=o[1],p=Object(a.useState)(""),x=Object(j.a)(p,2),m=x[0],v=x[1],k=Object(a.useState)(""),g=Object(j.a)(k,2),N=g[0],y=g[1];Object(a.useEffect)((function(){var t=JSON.parse(localStorage.getItem("Tasks"));t=t||"[]",i([].concat(Object(l.a)(c),Object(l.a)(t)))}),[]),Object(a.useEffect)((function(){O(c)}));var T=function(t){var e=c.map((function(e){return e.done=e.id===t?!e.done:e.done,e}));i(e)},S=function(t){y(t),v("edit")},C=function(t){var e=c.filter((function(e){return e.id!==t}));i(e)},A=function(t,e){var n=c.map((function(n){return n.priority="alta"===t?n.id===e?t:"baja":n.id===e?t:n.priority,n}));i(n)},B=function(){v("")};return Object(s.jsx)("main",{children:Object(s.jsxs)("div",{className:"wrapper",children:["add"===m||0===c.length?Object(s.jsx)(f,{formSubmit:function(t){t={title:t.title,id:Date.now(),done:!1,priority:"baja"},i([].concat(Object(l.a)(c),[t])),v(""),O(c)},clearAction:B,text:"A\xf1adir Tarea"}):"","edit"===m?Object(s.jsx)(f,{formSubmit:function(t){var e=c.map((function(e){return t.id===e.id?t:e}));i(e),y(""),v(""),O(c)},clearAction:B,task:c.filter((function(t){return t.id===N}))[0],text:"Editar Tarea"}):"",""===m&&0!==c.length?Object(s.jsxs)(a.Fragment,{children:[Object(s.jsx)(u,{searchTask:function(t){h(t)}}),Object(s.jsx)("div",{className:"addBtnWrapper",children:Object(s.jsx)("button",{onClick:function(){v("add")},children:"A\xf1adir"})}),Object(s.jsx)("div",{className:"taskWrapper",children:Object(s.jsx)("ul",{className:"tasks",children:function(t){return 0!==t.length?t.filter((function(t){return t.title.toLowerCase().includes(b.toLowerCase())})).map((function(t){return Object(s.jsx)(d,{delTask:C,editTaskBtn:S,tarea:{title:t.title,id:t.id,done:t.done,priority:t.priority},setDoneTask:T,changePriority:A},t.id)})):Object(s.jsx)("div",{className:"errorNoTasks",children:"NO HAY TAREAS"})}(c)})})]}):""]})})};n(21);var p=function(t){return Object(s.jsxs)("footer",{children:[Object(s.jsx)("div",{className:"footerText",children:"Hecho con mucho cari\xf1o, desde The Bridge"}),Object(s.jsx)("small",{children:Object(s.jsx)("div",{className:"footerCopyleft",children:"\ud83c\udd2f 2021 Rovilram"})})]})};var x=function(){return Object(s.jsxs)("div",{className:"App",children:[Object(s.jsx)(o,{}),Object(s.jsx)(h,{}),Object(s.jsx)(p,{})]})},m=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,23)).then((function(e){var n=e.getCLS,a=e.getFID,c=e.getFCP,i=e.getLCP,r=e.getTTFB;n(t),a(t),c(t),i(t),r(t)}))};r.a.render(Object(s.jsx)(c.a.StrictMode,{children:Object(s.jsx)(x,{})}),document.getElementById("root")),m()}],[[22,1,2]]]);
//# sourceMappingURL=main.5267433f.chunk.js.map