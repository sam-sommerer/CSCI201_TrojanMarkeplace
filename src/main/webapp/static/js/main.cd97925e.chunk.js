(this["webpackJsonpcollege-marketplace"]=this["webpackJsonpcollege-marketplace"]||[]).push([[0],{203:function(e,t,a){e.exports=a(357)},211:function(e,t){},213:function(e,t){},245:function(e,t){},246:function(e,t){},316:function(e,t,a){},357:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(20),c=a.n(l),s=a(18),o=a(369),u=a(194),i=a(11),m=a(46),d=a(47),p=a(62),E=a(366),f=a(367),b=a(361),h=a(77),g=(window.location.host,function(e){var t=e.show,a=e.handleClose,l=e.updateUser,c=Object(n.useState)(!0),o=Object(s.a)(c,2),u=o[0],i=o[1],m=Object(n.useState)({}),g=Object(s.a)(m,2),y=g[0],O=g[1],j=Object(n.useState)(!1),v=Object(s.a)(j,2),w=v[0],S=v[1];return r.a.createElement(E.a,{show:t,onHide:a},r.a.createElement(E.a.Header,null,u?"Log in":"Sign up"),r.a.createElement(E.a.Body,null,r.a.createElement(f.a,{onChange:function(e){O(Object(p.a)({},y,Object(d.a)({},e.target.name,e.target.value)))},onSubmit:function(e){if(e.preventDefault(),e.stopPropagation(),!0===e.currentTarget.checkValidity()){S(!0);var t={name:y.username},n=Object(h.SHA256)(y.username+":"+y.password).toString();t.password=n,console.info("POST",u?"api/user/login":"api/user/signup",t),fetch(u?"api/user/login":"api/user/signup",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}).then((function(e){200===e.status?(l(y.username),sessionStorage.setItem("username",y.username),S(!1),a()):(u?alert("Invalid email/password!"):alert("User already exists!"),S(!1))}))}}},r.a.createElement(f.a.Group,{controlId:"email"},r.a.createElement(f.a.Label,null,"Username"),r.a.createElement(f.a.Control,{required:!0,name:"username",type:"text",placeholder:"Username"})),r.a.createElement(f.a.Group,{controlId:"password"},r.a.createElement(f.a.Label,null,"Password"),r.a.createElement(f.a.Control,{required:!0,name:"password",type:"password",placeholder:"Password"})),r.a.createElement(f.a.Row,{style:{alignItems:"center"}},r.a.createElement(b.a,{className:"mr-auto ml-1",variant:"primary",type:"submit",disabled:w},w?"Processing...":"Submit"),r.a.createElement("i",{className:"mr-1",style:{cursor:"pointer"},onClick:function(){return i(!u)}},r.a.createElement("u",null,u?"Don't have an account?":"Have an account?"))))))}),y=function(e){var t=e.username,a=e.updateUser,l=Object(n.useState)(!1),c=Object(s.a)(l,2),d=c[0],p=c[1],E=Object(i.e)();return r.a.createElement(r.a.Fragment,null,r.a.createElement(o.a,{bg:"primary",position:"static",variant:"dark",expand:!0},r.a.createElement(u.a,{md:3},r.a.createElement(o.a.Brand,{as:m.b,to:"/",className:"mr-auto"},"USC Marketplace")),r.a.createElement(u.a,{md:6}),r.a.createElement(u.a,{md:3,style:{textAlign:"right"}},r.a.createElement(o.a.Text,{onClick:function(){t?E.push("/user"):p(!0)},style:{cursor:"pointer"}},t||"Log in"))),r.a.createElement(g,{show:d,handleClose:function(){return p(!1)},updateUser:a}))},O=(a(316),a(81)),j=a(370),v=a(371),w=a(362),S=a(363),C=a(364),P=function(e){var t=e.username,a=e.searchitems,l=Object(n.useState)(a||[]),c=Object(s.a)(l,2),o=c[0],u=c[1],i=Object(n.useState)(1),d=Object(s.a)(i,2),p=d[0],E=d[1];Object(n.useEffect)((function(){a||(console.info("GET api/items"),fetch("api/items").then((function(e){return e.json()})).then((function(e){return u(e)})))}),[]);var f=function(e){E(e),window.scrollTo(0,0)},h=o&&o.slice(20*(p-1),20*p).map((function(e){return r.a.createElement("tr",{key:e.itemid},r.a.createElement(j.a,{trigger:"hover",placement:"auto-start",overlay:r.a.createElement(v.a,null,r.a.createElement(v.a.Content,null,e.description))},r.a.createElement("td",{style:{width:"50%"}},e.name)),r.a.createElement("td",{style:{width:"20%"}},"$",e.price),r.a.createElement("td",{style:{width:"20%"}},e.seller),r.a.createElement("td",{style:{width:"10%"}},r.a.createElement(b.a,{onClick:function(){return a=e.itemId,console.info("POST api/buy",{itemid:a,username:t}),void fetch("api/buy",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({itemid:a,username:t})}).then((function(e){200===e.status?alert("Successful. Waiting for seller approval now."):alert("Item is not available.")}));var a},disabled:!t},"Buy now")))}));return r.a.createElement(r.a.Fragment,null,r.a.createElement(w.a,{fluid:"lg",className:"my-5"},t?r.a.createElement(b.a,{as:m.b,to:"/create",className:"mb-3"},"Create new listing"):"",0!==o.length?r.a.createElement(r.a.Fragment,null,r.a.createElement(S.a,{hover:!0},r.a.createElement("thead",null,r.a.createElement("th",null,"Name"),r.a.createElement("th",null,"Price"),r.a.createElement("th",null,"Seller"),r.a.createElement("th",null)),r.a.createElement("tbody",null,h)),1!==p?r.a.createElement(b.a,{onClick:function(){return f(p-1)},className:"mr-3"},"Previous"):"",p!==Math.ceil(o.length/20)?r.a.createElement(b.a,{onClick:function(){return f(p+1)}},"Next"):""):r.a.createElement(C.a,{animation:"border",variant:"primary",className:"loading-spinner"})))},T=a(133),N=a(365),I=a(368),k=function(e){var t=e.username,a=Object(n.useState)("orders"),l=Object(s.a)(a,2),c=l[0],o=l[1],i=Object(n.useState)([]),m=Object(s.a)(i,2),d=m[0],p=m[1];Object(n.useEffect)((function(){console.info("GET","api/user/"+t),fetch("api/user/"+t).then((function(e){return e.json()})).then((function(e){p(e)}))}),[t]);var E;return r.a.createElement(r.a.Fragment,null,r.a.createElement(N.a,{className:"mt-5"},r.a.createElement(u.a,{md:{span:2,offset:1}},r.a.createElement(I.a,{variant:"pills",defaultActiveKey:"orders",className:"flex-column",onSelect:function(e){return o(e)}},r.a.createElement(I.a.Item,null,r.a.createElement(I.a.Link,{eventKey:"orders"},"Requests")),r.a.createElement(I.a.Item,null,r.a.createElement(I.a.Link,{eventKey:"password"},"Change password")))),r.a.createElement(u.a,{md:{span:6},className:"ml-5"},"password"===c?r.a.createElement(r.a.Fragment,null,r.a.createElement("h3",null,"Change password"),r.a.createElement(f.a,{onSubmit:function(e){e.preventDefault(),e.stopPropagation();var a=new FormData(e.target);""!==a.get("password").trim()?(console.info("PUT","api/user/password",{username:t,password:Object(h.SHA256)(t+":"+a.get("password")).toString()}),fetch("api/user/password",{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:t,password:Object(h.SHA256)(t+":"+a.get("password")).toString()})}).then((function(e){200===e.status?alert("Password changed successfully!"):alert("An error has occured! Please try again.")}))):alert("Please enter a valid password")}},r.a.createElement(f.a.Group,{controlId:"name"},r.a.createElement(f.a.Label,null,"Username"),r.a.createElement(f.a.Control,{type:"text",placeholder:"Enter your name",defaultValue:t,disabled:!0})),r.a.createElement(f.a.Group,{controlId:"password"},r.a.createElement(f.a.Label,null,"Password"),r.a.createElement(f.a.Control,{type:"password",placeholder:"Password",name:"password"})),r.a.createElement(b.a,{variant:"primary",type:"submit"},"Save changes"))):r.a.createElement(r.a.Fragment,null,r.a.createElement("h3",null,"Incoming Requests"),r.a.createElement(S.a,null,r.a.createElement("thead",null,r.a.createElement("th",null,"Name"),r.a.createElement("th",null,"Price"),r.a.createElement("th",null,"Buyer"),r.a.createElement("th",null,"Status")),r.a.createElement("tbody",null,(E=d)&&E.map((function(e){return r.a.createElement("tr",{key:e.itemid},r.a.createElement("td",null,e.name),r.a.createElement("td",null,"$",e.price),r.a.createElement("td",null,e.buyer),r.a.createElement("td",null,r.a.createElement(b.a,{onClick:function(){return function(e){console.info("POST","api/user/approve",{username:t,itemid:e.itemid}),fetch("api/user/approve",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({seller:t,buyer:e.buyer,itemid:e.itemid})}).then((function(t){if(200===t.status){alert("Successful");var a=d.findIndex((function(t){return t.itemid===e.itemid}));p([].concat(Object(T.a)(d.slice(0,a)),Object(T.a)(d.slice(a+1))))}else alert("An error has occured.")}))}(e)}},"Approve")))}))))))))},x=function(e){var t=e.username,a=Object(n.useState)({}),l=Object(s.a)(a,2),c=l[0],o=l[1],u=Object(n.useState)(!1),m=Object(s.a)(u,2),E=m[0],h=m[1],g=Object(i.e)();return r.a.createElement(w.a,{fluid:"md",className:"mt-4"},r.a.createElement("h2",null,"Create new listing"),r.a.createElement(f.a,{onChange:function(e){"price"===e.target.name?o(Object(p.a)({},c,Object(d.a)({},e.target.name,parseInt(e.target.value)))):o(Object(p.a)({},c,Object(d.a)({},e.target.name,e.target.value)))},onSubmit:function(e){e.preventDefault(),e.stopPropagation(),e.currentTarget.checkValidity()&&(h(!0),console.info("POST","api/sell",c),fetch("api/sell",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(Object(p.a)({},c,{username:t}))}).then((function(e){200===e.status?(alert("Successful"),g.push("/")):alert("An error has occured."),h(!1)})))}},r.a.createElement(f.a.Group,{controlId:"name"},r.a.createElement(f.a.Label,null,"Title"),r.a.createElement(f.a.Control,{type:"text",name:"name",required:!0})),r.a.createElement(f.a.Group,{controlId:"price"},r.a.createElement(f.a.Label,null,"Price"),r.a.createElement(f.a.Control,{type:"number",name:"price",required:!0})),r.a.createElement(f.a.Group,{controlId:"description"},r.a.createElement(f.a.Label,null,"Description"),r.a.createElement(f.a.Control,{as:"textarea",rows:5,name:"description",required:!0})),r.a.createElement(b.a,{type:"submit",disabled:E},"Submit")))};new FormData;var L=function(e){var t=e.username,a=Object(i.f)();return r.a.createElement(O.a,{className:"p-0"},t&&r.a.createElement(O.a,null,r.a.createElement(i.a,{path:"/user"},r.a.createElement(k,{username:t})),r.a.createElement(i.a,{path:"/create"},r.a.createElement(x,{username:t}))),a.state?r.a.createElement(P,{username:t,searchitems:a.state}):r.a.createElement(i.a,{path:"/",exact:!0},r.a.createElement(P,{username:t})))},U=a(100),A=a(198),G=a.n(A),D=a(199),F=a.n(D);var J=function(){var e=Object(U.useToasts)().addToast,t=Object(n.useState)(null),a=Object(s.a)(t,2),l=a[0],c=a[1];return Object(n.useEffect)((function(){var e=sessionStorage.getItem("username");e!==l&&c(e)}),[]),Object(n.useEffect)((function(){var t=new G.a("/push_notif"),a=F.a.over(t);return a.debug=function(){},a.connect({},(function(){a.subscribe("/topic/messages",(function(t){var a=JSON.parse(t.body);e(a.buyer+" just bought "+a.item+"!",{appearance:"info"})}))})),function(){a.disconnect()}}),[e]),r.a.createElement(m.a,{basename:""},r.a.createElement(y,{username:l,updateUser:function(e){return c(e)}}),r.a.createElement(L,{username:l}))};c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(U.ToastProvider,{placement:"top-center",autoDismiss:!0},r.a.createElement(J,null))),document.getElementById("root"))}},[[203,1,2]]]);
//# sourceMappingURL=main.cd97925e.chunk.js.map