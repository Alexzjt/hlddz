(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{141:function(e,a,t){e.exports=t.p+"static/media/ddz-logo.6beab099.jpg"},142:function(e,a,t){"use strict";t.r(a);var n=t(0),s=t.n(n),r=t(13),c=t.n(r),l=(t(89),t(71)),m=t(72),o=t(81),i=t(73),h=t(82),p=(t(90),t(144)),u=t(145),E=t(146),k=t(41),f=p.a.Search,d=function(e){function a(e){var t;return Object(l.a)(this,a),(t=Object(o.a)(this,Object(i.a)(a).call(this,e))).state={remainPoke:[],inputPoke:""},t}return Object(h.a)(a,e),Object(m.a)(a,[{key:"init",value:function(){this.setState({remainPoke:[0,4,4,4,4,4,4,4,4,4,4,4,4,4,1,1],inputPoke:""})}},{key:"submit",value:function(e){for(var a=JSON.stringify(this.state.remainPoke),t=JSON.parse(a);/10/g.test(e);)e.replace(/10/,""),t[10]-=1;if(e.toLowerCase().split("").forEach(function(e){switch(e){case"d":t[15]-=1;break;case"x":t[14]-=1;break;case"k":t[13]-=1;break;case"q":t[12]-=1;break;case"j":t[11]-=1;break;case"a":t[1]-=1;break;default:t[e]-=1}}),t.some(function(e){return e<0}))return u.a.error("\u4f60\u7684\u8f93\u5165\u6709\u8bef\uff0c\u5df2\u91cd\u7f6e\u7cfb\u7edf"),void this.init();this.setState({remainPoke:t,inputPoke:""})}},{key:"componentWillMount",value:function(){this.init()}},{key:"render",value:function(){var e=this;return s.a.createElement("div",{className:"App"},s.a.createElement("img",{src:t(141),id:"logo"}),s.a.createElement("div",{className:"my-content"},s.a.createElement(E.a,{count:this.state.remainPoke[15]},s.a.createElement("a",{href:"#",className:"head-example"}),s.a.createElement("span",{className:"poke",style:{color:"#ff9800"}},"\u738b")),s.a.createElement(E.a,{count:this.state.remainPoke[14]},s.a.createElement("a",{href:"#",className:"head-example"}),s.a.createElement("span",{className:"poke",style:{color:"lightslategrey"}},"\u738b")),s.a.createElement(E.a,{count:this.state.remainPoke[2]},s.a.createElement("a",{href:"#",className:"head-example"}),s.a.createElement("span",{className:"poke"},"2")),s.a.createElement(E.a,{count:this.state.remainPoke[1]},s.a.createElement("a",{href:"#",className:"head-example"}),s.a.createElement("span",{className:"poke"},"A")),s.a.createElement(E.a,{count:this.state.remainPoke[13]},s.a.createElement("a",{href:"#",className:"head-example"}),s.a.createElement("span",{className:"poke"},"K")),s.a.createElement(E.a,{count:this.state.remainPoke[12]},s.a.createElement("a",{href:"#",className:"head-example"}),s.a.createElement("span",{className:"poke"},"Q")),s.a.createElement(E.a,{count:this.state.remainPoke[11]},s.a.createElement("a",{href:"#",className:"head-example"}),s.a.createElement("span",{className:"poke"},"J")),s.a.createElement(E.a,{count:this.state.remainPoke[10]},s.a.createElement("a",{href:"#",className:"head-example"}),s.a.createElement("span",{className:"poke"},"10")),s.a.createElement(E.a,{count:this.state.remainPoke[9]},s.a.createElement("a",{href:"#",className:"head-example"}),s.a.createElement("span",{className:"poke"},"9")),s.a.createElement(E.a,{count:this.state.remainPoke[8]},s.a.createElement("a",{href:"#",className:"head-example"}),s.a.createElement("span",{className:"poke"},"8")),s.a.createElement(E.a,{count:this.state.remainPoke[7]},s.a.createElement("a",{href:"#",className:"head-example"}),s.a.createElement("span",{className:"poke"},"7")),s.a.createElement(E.a,{count:this.state.remainPoke[6]},s.a.createElement("a",{href:"#",className:"head-example"}),s.a.createElement("span",{className:"poke"},"6")),s.a.createElement(E.a,{count:this.state.remainPoke[5]},s.a.createElement("a",{href:"#",className:"head-example"}),s.a.createElement("span",{className:"poke"},"5")),s.a.createElement(E.a,{count:this.state.remainPoke[4]},s.a.createElement("a",{href:"#",className:"head-example"}),s.a.createElement("span",{className:"poke"},"4")),s.a.createElement(E.a,{count:this.state.remainPoke[3]},s.a.createElement("a",{href:"#",className:"head-example"}),s.a.createElement("span",{className:"poke"},"3")),s.a.createElement("br",null),s.a.createElement("br",null),s.a.createElement("div",null,s.a.createElement(f,{style:{float:"left",width:"90%"},placeholder:"\u8f93\u5165\u624b\u724c\u6216\u5bf9\u5bb6\u6253\u51fa\u7684\u724c\uff0cd\u4ee3\u8868\u5927\u738b\uff0cx\u4ee3\u8868\u5c0f\u738b\uff0c\u4e0d\u533a\u5206\u5927\u5c0f\u5199",enterButton:"\u8bb0\u5f55",size:"large",onSearch:function(a){return e.submit(a)},onPressEnter:function(a){return e.submit(a)},allowClear:!0}),s.a.createElement(k.a,{type:"danger",style:{float:"right"},size:"large",onClick:function(){return e.init()}},"\u91cd\u7f6e"),s.a.createElement("br",{style:{clear:"both"}}))))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(s.a.createElement(d,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},84:function(e,a,t){e.exports=t(142)},89:function(e,a,t){},90:function(e,a,t){}},[[84,1,2]]]);
//# sourceMappingURL=main.e216b7d2.chunk.js.map