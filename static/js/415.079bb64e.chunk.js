"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[415],{415:function(t,e,n){n.r(e);var r=n(439),c=n(791),u=n(689),a=n(87),s=n(41),o=n(184);e.default=function(){var t=(0,c.useState)([]),e=(0,r.Z)(t,2),n=e[0],i=e[1],f=(0,u.TH)();return(0,c.useEffect)((function(){(0,s.Df)().then(i)}),[]),(0,o.jsxs)("section",{children:[(0,o.jsx)("h2",{children:"Trending today"}),(0,o.jsx)("ul",{children:n.map((function(t){var e=t.id,n=t.title;return(0,o.jsx)("li",{children:(0,o.jsx)(a.rU,{to:"/movies/".concat(e),state:{from:f},children:n})},e)}))})]})}},41:function(t,e,n){function r(t,e,n,r,c,u,a){try{var s=t[u](a),o=s.value}catch(i){return void n(i)}s.done?e(o):Promise.resolve(o).then(r,c)}function c(t){return function(){var e=this,n=arguments;return new Promise((function(c,u){var a=t.apply(e,n);function s(t){r(a,c,u,s,o,"next",t)}function o(t){r(a,c,u,s,o,"throw",t)}s(void 0)}))}}n.d(e,{zv:function(){return f},tx:function(){return p},Df:function(){return s},w7:function(){return i},OQ:function(){return o}});var u=n(757),a=n.n(u),s=function(){var t=c(a().mark((function t(){var e,n;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://api.themoviedb.org/3/trending/movie/day?api_key=133c2d7094f741475ddc1c9cf006a400");case 2:return e=t.sent,t.next=5,e.json();case 5:return n=t.sent,t.abrupt("return",n.results);case 7:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),o=function(){var t=c(a().mark((function t(e){var n,r;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://api.themoviedb.org/3/search/movie?api_key=133c2d7094f741475ddc1c9cf006a400&query=".concat(e));case 2:return n=t.sent,t.next=5,n.json();case 5:return r=t.sent,t.abrupt("return",r.results);case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),i=function(){var t=c(a().mark((function t(e){var n,r;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://api.themoviedb.org/3/movie/".concat(e,"?api_key=133c2d7094f741475ddc1c9cf006a400"));case 2:return n=t.sent,t.next=5,n.json();case 5:return r=t.sent,t.abrupt("return",r);case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),f=function(){var t=c(a().mark((function t(e){var n,r;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://api.themoviedb.org/3/movie/".concat(e,"/credits?api_key=133c2d7094f741475ddc1c9cf006a400"));case 2:return n=t.sent,t.next=5,n.json();case 5:return r=t.sent,t.abrupt("return",r.cast);case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),p=function(){var t=c(a().mark((function t(e){var n,r;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://api.themoviedb.org/3/movie/".concat(e,"/reviews?api_key=133c2d7094f741475ddc1c9cf006a400"));case 2:return n=t.sent,t.next=5,n.json();case 5:return r=t.sent,t.abrupt("return",r.results);case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}}]);
//# sourceMappingURL=415.079bb64e.chunk.js.map