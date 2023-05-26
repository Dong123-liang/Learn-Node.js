(function(){"use strict";var t={8054:function(t,e,n){var i=n(6369),o=function(){var t=this,e=t._self._c;return e("div",[e("div",{staticClass:"row"},[e("UseBanner")],1),e("div",{staticClass:"row"},[e("div",{staticClass:"col-xs-2 col-xs-offset-2"},[e("div",{staticClass:"list-group"},[e("router-link",{staticClass:"list-group-item",attrs:{"active-class":"active",to:"/About"}},[t._v("About")]),e("router-link",{staticClass:"list-group-item",attrs:{"active-class":"active",to:"/Home"}},[t._v("Home")])],1)]),e("div",{staticClass:"col-xs-6"},[e("div",{staticClass:"panel"},[e("div",{staticClass:"panel-body"},[e("router-view")],1)])])])])},r=[],s=function(){var t=this,e=t._self._c;return e("div",{staticClass:"col-xs-offset-2 col-xs-8"},[t._m(0),e("button",{on:{click:t.back}},[t._v("后退")]),e("button",{on:{click:t.forward}},[t._v("前进")]),e("button",{on:{click:t.go}},[t._v("go跳转几步")])])},l=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"page-header"},[e("h2",[t._v("Vue Router Demo")])])}],a={name:"UseBanner",methods:{back(){this.$router.back(),console.log(this.$router)},forward(){this.$router.forward()},go(){this.$router.go(3)}}},u=a,c=n(1001),v=(0,c.Z)(u,s,l,!1,null,null,null),f=v.exports,p={name:"App",components:{UseBanner:f}},h=p,m=(0,c.Z)(h,o,r,!1,null,null,null),d=m.exports,_=n(2631),g=function(){var t=this,e=t._self._c;return e("h2",[t._v("我是About组件的内容")])},b=[],w={name:"UseAbout",beforeRouteEnter(t,e,n){console.log("About--beforeRouteEnter",t,e),t.meta.isAuth?"西安邮电大学"===localStorage.getItem("school")?n():alert("学校名不对，无权限查看！"):n()},beforeRouteLeave(t,e,n){console.log("About--beforeRouteLeave",t,e),n()}},y=w,x=(0,c.Z)(y,g,b,!1,null,null,null),k=x.exports,C=function(){var t=this,e=t._self._c;return e("div",[e("h2",[t._v("我是Home组件的内容")]),e("div",[e("ul",{staticClass:"nav nav-tabs"},[e("li",[e("router-link",{staticClass:"list-group-item",attrs:{"active-class":"active",to:"/Home/News"}},[t._v("News")])],1),e("li",[e("router-link",{staticClass:"list-group-item",attrs:{"active-class":"active",to:"/Home/Message"}},[t._v("Message")])],1)]),e("keep-alive",{attrs:{include:"UseNews"}},[e("router-view")],1)],1)])},A=[],Z={name:"UseHome"},O=Z,q=(0,c.Z)(O,C,A,!1,null,null,null),U=q.exports,H=function(){var t=this,e=t._self._c;return e("div",[e("ul",t._l(t.messageList,(function(n){return e("li",{key:n.id},[e("router-link",{attrs:{to:{name:"xiangqing",query:{id:n.id,title:n.title}}}},[t._v(" "+t._s(n.title)+" ")]),e("button",{on:{click:function(e){return t.pushShow(n)}}},[t._v("push查看")]),e("button",{on:{click:function(e){return t.replaceShow(n)}}},[t._v("replace查看")])],1)})),0),e("hr"),e("router-view")],1)},N=[],M=(n(7658),{name:"UseInForMation",data(){return{messageList:[{id:"001",title:"消息001"},{id:"002",title:"消息002"},{id:"003",title:"消息003"}]}},methods:{pushShow(t){this.$router.push({name:"xiangqing",query:{id:t.id,title:t.title}})},replaceShow(t){this.$router.replace({name:"xiangqing",query:{id:t.id,title:t.title}})}},beforeDestroy(){console.log("Meseage被销毁了")}}),P=M,$=(0,c.Z)(P,H,N,!1,null,null,null),j=$.exports,R=function(){var t=this,e=t._self._c;return e("ul",[e("li",{style:{opacity:t.opacity}},[t._v("欢迎学习Vue")]),t._m(0),t._m(1),t._m(2)])},S=[function(){var t=this,e=t._self._c;return e("li",[t._v("news001"),e("input",{attrs:{type:"text"}})])},function(){var t=this,e=t._self._c;return e("li",[t._v("news002"),e("input",{attrs:{type:"text"}})])},function(){var t=this,e=t._self._c;return e("li",[t._v("news003"),e("input",{attrs:{type:"text"}})])}],E={name:"UseNews",data(){return{opacity:1}},activated(){console.log("News组件被激活了"),this.timer=setInterval((()=>{console.log("-"),this.opacity-=.01,this.opacity<=0&&(this.opacity=1)}),16)},deactivated(){console.log("News组件失活了"),clearInterval(this.timer)}},I=E,L=(0,c.Z)(I,R,S,!1,null,null,null),B=L.exports,D=function(){var t=this,e=t._self._c;return e("ul",[e("li",[t._v("消息编号："+t._s(t.id))]),e("li",[t._v("消息标题："+t._s(t.title))]),e("li",[t._v(t._s(t.a))]),e("li",[t._v(t._s(t.name))])])},T=[],F={name:"UseDetail",props:["id","title","a","name"],mounted(){console.log(this.$route)}},V=F,z=(0,c.Z)(V,D,T,!1,null,null,null),G=z.exports;const J=new _.ZP({routes:[{name:"About",path:"/About",component:k,meta:{title:"关于",isAuth:!0}},{name:"Home",path:"/Home",component:U,meta:{title:"主页"},children:[{name:"News",path:"News",component:B,meta:{isAuth:!0,title:"新闻"}},{name:"Message",path:"Message",component:j,meta:{isAuth:!0,title:"消息"},children:[{path:"datails",name:"xiangqing",component:G,meta:{isAuth:!0,title:"详情"},props(t){return{id:t.query.id,title:t.query.title,a:1,name:"轨迹"}}}]}]}]});J.afterEach(((t,e)=>{console.log("后置路由守卫",t,e),console.log(t.meta.title),document.title=t.meta.title||"硅谷系统"}));var K=J;i.ZP.config.productionTip=!1,i.ZP.use(_.ZP),new i.ZP({el:"#app",render:t=>t(d),router:K})}},e={};function n(i){var o=e[i];if(void 0!==o)return o.exports;var r=e[i]={exports:{}};return t[i](r,r.exports,n),r.exports}n.m=t,function(){var t=[];n.O=function(e,i,o,r){if(!i){var s=1/0;for(c=0;c<t.length;c++){i=t[c][0],o=t[c][1],r=t[c][2];for(var l=!0,a=0;a<i.length;a++)(!1&r||s>=r)&&Object.keys(n.O).every((function(t){return n.O[t](i[a])}))?i.splice(a--,1):(l=!1,r<s&&(s=r));if(l){t.splice(c--,1);var u=o();void 0!==u&&(e=u)}}return e}r=r||0;for(var c=t.length;c>0&&t[c-1][2]>r;c--)t[c]=t[c-1];t[c]=[i,o,r]}}(),function(){n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,{a:e}),e}}(),function(){n.d=function(t,e){for(var i in e)n.o(e,i)&&!n.o(t,i)&&Object.defineProperty(t,i,{enumerable:!0,get:e[i]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={826:0};n.O.j=function(e){return 0===t[e]};var e=function(e,i){var o,r,s=i[0],l=i[1],a=i[2],u=0;if(s.some((function(e){return 0!==t[e]}))){for(o in l)n.o(l,o)&&(n.m[o]=l[o]);if(a)var c=a(n)}for(e&&e(i);u<s.length;u++)r=s[u],n.o(t,r)&&t[r]&&t[r][0](),t[r]=0;return n.O(c)},i=self["webpackChunkvue_test"]=self["webpackChunkvue_test"]||[];i.forEach(e.bind(null,0)),i.push=e.bind(null,i.push.bind(i))}();var i=n.O(void 0,[998],(function(){return n(8054)}));i=n.O(i)})();
//# sourceMappingURL=index.58a53546.js.map