(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{13:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(3),l=n.n(c),o=(n(9),n(11),n(1)),i=function(e){var t=e.name,n=e.email,a=e.id;return r.a.createElement("div",{className:"tc bg-light-blue dib br3 pa3 ma2 grow bw2 shadow-5"},r.a.createElement("img",{alt:"robots",src:"https://robohash.org/".concat(a,"?200x200")}),r.a.createElement("div",null,r.a.createElement("h2",null,t),r.a.createElement("p",null,n)))},u=function(e){var t=e.robots;return r.a.createElement("div",null,t.map(function(e,n){return r.a.createElement(i,{key:n,id:t[n].id,name:t[n].name,email:t[n].email})}))},s=function(e){e.searchfield;var t=e.searchChange;return r.a.createElement("div",{className:"pa2"},r.a.createElement("input",{className:"pa3 ba b--green bg-lightest-blue",type:"search",placeholder:"search robots",onChange:t}))},m=(n(13),function(e){return r.a.createElement("div",{style:{overflow:"scroll",border:"1px solid black",height:"800px"}},e.children)});var h=function(){var e=Object(a.useState)([]),t=Object(o.a)(e,2),n=t[0],c=t[1],l=Object(a.useState)(""),i=Object(o.a)(l,2),h=i[0],d=i[1];Object(a.useEffect)(function(){fetch("https://jsonplaceholder.typicode.com/users").then(function(e){return e.json()}).then(function(e){return c(e)})},[]);var b=n.filter(function(e){return e.name.toLowerCase().includes(h.toLowerCase())});return n.length?r.a.createElement("div",{className:"tc"},r.a.createElement("h1",{className:"f1"},"RoboFriends"),r.a.createElement(s,{searchChange:function(e){d(e.target.value)}}),r.a.createElement(m,null,r.a.createElement(u,{robots:b}))):r.a.createElement("h1",null,"Loading")},d=function(e){e&&e instanceof Function&&n.e(1).then(n.bind(null,16)).then(function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,c=t.getLCP,l=t.getTTFB;n(e),a(e),r(e),c(e),l(e)})};l.a.render(r.a.createElement(h,null),document.getElementById("root")),d()},4:function(e,t,n){e.exports=n(15)},9:function(e,t,n){}},[[4,3,2]]]);
//# sourceMappingURL=main.8b4ab1ad.chunk.js.map