"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[170],{170:function(n,e,t){t.r(e),t.d(e,{default:function(){return G}});var r,c,i,s,o,a,u,f,p,d,l=t(439),h=t(791),x=t(689),v=t(41),m=t(168),j=t(237),w=t(87),Z=j.Z.section(r||(r=(0,m.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  padding: 10px;\n"]))),y=(0,j.Z)(w.OL)(c||(c=(0,m.Z)([""]))),g=j.Z.div(i||(i=(0,m.Z)(["\n  display: flex;\n  gap: 20px;\n  padding: 20px 0;\n  border-bottom: 2px solid #000;\n"]))),k=j.Z.div(s||(s=(0,m.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n"]))),b=j.Z.h2(o||(o=(0,m.Z)(["\n  font-size: 30px;\n"]))),_=j.Z.h3(a||(a=(0,m.Z)(["\n  font-size: 20px;\n"]))),z=j.Z.p(u||(u=(0,m.Z)(["\n  font-size: 16px;\n"]))),O=j.Z.ul(f||(f=(0,m.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n"]))),C=j.Z.li(p||(p=(0,m.Z)(["\n  list-style: none;\n"]))),U=(0,j.Z)(w.rU)(d||(d=(0,m.Z)(["\n  font-size: 16px;\n  color: #00f;\n"]))),D=t(184),G=function(){var n,e,t=(0,h.useState)({}),r=(0,l.Z)(t,2),c=r[0],i=r[1],s=(0,x.UO)().movieId,o=(0,x.TH)(),a=(0,h.useRef)(null!==(n=null===o||void 0===o||null===(e=o.state)||void 0===e?void 0:e.from)&&void 0!==n?n:"/");return(0,h.useEffect)((function(){(0,v.w7)(s).then(i).catch((function(n){return console.log(n)}))}),[s]),(0,D.jsxs)(Z,{children:[(0,D.jsx)(y,{to:a.current,children:"Go back"}),Object.keys(c).length>0&&(0,D.jsxs)(g,{children:[(0,D.jsx)("img",{src:"https://image.tmdb.org/t/p/w500".concat(c.poster_path),alt:c.title,width:"300"}),(0,D.jsxs)(k,{children:[(0,D.jsx)(b,{children:c.title}),(0,D.jsxs)(z,{children:["User Score: ",c.vote_average.toFixed(0),"%"]}),(0,D.jsx)(_,{children:"Overview"}),(0,D.jsx)(z,{children:c.overview}),(0,D.jsx)(_,{children:"Genres"}),(0,D.jsx)(z,{children:c.genres.map((function(n){return n.name})).join(", ")}),(0,D.jsx)(_,{children:"Additional information"}),(0,D.jsxs)(O,{children:[(0,D.jsx)(C,{children:(0,D.jsx)(U,{to:"cast",children:"Cast"})}),(0,D.jsx)(C,{children:(0,D.jsx)(U,{to:"reviews",children:"Reviews"})})]})]})]}),(0,D.jsx)(x.j3,{})]})}},41:function(n,e,t){function r(n,e,t,r,c,i,s){try{var o=n[i](s),a=o.value}catch(u){return void t(u)}o.done?e(a):Promise.resolve(a).then(r,c)}function c(n){return function(){var e=this,t=arguments;return new Promise((function(c,i){var s=n.apply(e,t);function o(n){r(s,c,i,o,a,"next",n)}function a(n){r(s,c,i,o,a,"throw",n)}o(void 0)}))}}t.d(e,{zv:function(){return f},tx:function(){return p},Df:function(){return o},w7:function(){return u},Dw:function(){return a}});var i=t(687),s=t.n(i),o=function(){var n=c(s().mark((function n(){var e,t;return s().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("https://api.themoviedb.org/3/trending/movie/day?api_key=133c2d7094f741475ddc1c9cf006a400");case 2:return e=n.sent,n.next=5,e.json();case 5:return t=n.sent,n.abrupt("return",t.results);case 7:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),a=function(){var n=c(s().mark((function n(e){var t,r;return s().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("https://api.themoviedb.org/3/search/movie?api_key=133c2d7094f741475ddc1c9cf006a400&query=".concat(e));case 2:return t=n.sent,n.next=5,t.json();case 5:return r=n.sent,n.abrupt("return",r.results);case 7:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),u=function(){var n=c(s().mark((function n(e){var t,r;return s().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("https://api.themoviedb.org/3/movie/".concat(e,"?api_key=133c2d7094f741475ddc1c9cf006a400"));case 2:return t=n.sent,n.next=5,t.json();case 5:return r=n.sent,n.abrupt("return",r);case 7:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),f=function(){var n=c(s().mark((function n(e){var t,r;return s().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("https://api.themoviedb.org/3/movie/".concat(e,"/credits?api_key=133c2d7094f741475ddc1c9cf006a400"));case 2:return t=n.sent,n.next=5,t.json();case 5:return r=n.sent,n.abrupt("return",r.cast);case 7:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),p=function(){var n=c(s().mark((function n(e){var t,r;return s().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("https://api.themoviedb.org/3/movie/".concat(e,"/reviews?api_key=133c2d7094f741475ddc1c9cf006a400"));case 2:return t=n.sent,n.next=5,t.json();case 5:return r=n.sent,n.abrupt("return",r.results);case 7:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()}}]);
//# sourceMappingURL=170.b4706608.chunk.js.map