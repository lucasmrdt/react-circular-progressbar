(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{1:function(e,t,a){"use strict";var n=this&&this.__extends||function(){var e=function(t,a){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var a in t)t.hasOwnProperty(a)&&(e[a]=t[a])})(t,a)};return function(t,a){function n(){this.constructor=t}e(t,a),t.prototype=null===a?Object.create(a):(n.prototype=a.prototype,new n)}}(),r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var c=r(a(16)),o=function(e){function t(t){var a=e.call(this,t)||this;return a.initialTimeout=void 0,a.requestAnimationFrame=void 0,a.state={percentage:t.initialAnimation?0:t.percentage},a}return n(t,e),t.prototype.componentDidMount=function(){var e=this;this.props.initialAnimation&&(this.initialTimeout=window.setTimeout(function(){e.requestAnimationFrame=window.requestAnimationFrame(function(){e.setState({percentage:e.props.percentage})})},0))},t.prototype.componentWillReceiveProps=function(e){this.setState({percentage:e.percentage})},t.prototype.componentWillUnmount=function(){clearTimeout(this.initialTimeout),this.requestAnimationFrame&&window.cancelAnimationFrame(this.requestAnimationFrame)},t.prototype.getBackgroundPadding=function(){return this.props.background?null==this.props.backgroundPadding?this.props.strokeWidth:this.props.backgroundPadding:0},t.prototype.getPathDescription=function(){var e=this.getPathRadius(),t=this.props.counterClockwise?1:0;return"\n      M 50,50\n      m 0,-"+e+"\n      a "+e+","+e+" "+t+" 1 1 0,"+2*e+"\n      a "+e+","+e+" "+t+" 1 1 0,-"+2*e+"\n    "},t.prototype.getPathStyles=function(){var e=2*Math.PI*this.getPathRadius(),t=(100-Math.min(Math.max(this.state.percentage,0),100))/100*e;return{strokeDasharray:e+"px "+e+"px",strokeDashoffset:(this.props.counterClockwise?-t:t)+"px"}},t.prototype.getPathRadius=function(){return 50-this.props.strokeWidth/2-this.getBackgroundPadding()},t.prototype.render=function(){var e=this.props,t=(e.percentage,e.className),a=e.classes,n=e.styles,r=e.strokeWidth,o=e.text,i=this.getPathDescription();return c.default.createElement("svg",{className:a.root+" "+t,style:n.root,viewBox:"0 0 100 100"},this.props.background?c.default.createElement("circle",{className:a.background,style:n.background,cx:50,cy:50,r:50}):null,c.default.createElement("path",{className:a.trail,style:n.trail,d:i,strokeWidth:r,fillOpacity:0}),c.default.createElement("path",{className:a.path,d:i,strokeWidth:r,fillOpacity:0,style:Object.assign({},n.path,this.getPathStyles())}),o?c.default.createElement("text",{className:a.text,style:n.text,x:50,y:50},o):null)},t.defaultProps={strokeWidth:8,className:"",text:"",classes:{root:"CircularProgressbar",trail:"CircularProgressbar-trail",path:"CircularProgressbar-path",text:"CircularProgressbar-text",background:"CircularProgressbar-background"},styles:{root:{},trail:{},path:{},text:{},background:{}},background:!1,backgroundPadding:0,initialAnimation:!1,counterClockwise:!1},t}(c.default.Component);t.default=o},15:function(e,t,a){},19:function(e,t,a){},20:function(e,t,a){},21:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(8),o=a.n(c),i=(a(15),a(2)),s=a(3),l=a(5),u=a(4),m=a(6),p=a(1),d=a.n(p),h=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={currentPercentageIndex:0},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;setInterval(function(){e.setState({currentPercentageIndex:(e.state.currentPercentageIndex+1)%e.props.percentages.length})},this.props.interval)}},{key:"getCurrentPercentage",value:function(){return this.props.percentages[this.state.currentPercentageIndex]}},{key:"getClassName",value:function(){return this.props.classForPercentage(this.getCurrentPercentage())}},{key:"getStyles",value:function(){return this.props.stylesForPercentage(this.getCurrentPercentage())}},{key:"getText",value:function(){return this.props.textForPercentage(this.getCurrentPercentage())}},{key:"render",value:function(){return r.a.createElement(d.a,Object.assign({},this.props,{className:this.getClassName(),percentage:this.getCurrentPercentage(),text:this.getText(),styles:this.getStyles()}))}}]),t}(r.a.Component);h.defaultProps={interval:1e3,classForPercentage:function(e){return""},stylesForPercentage:function(e){return{}},textForPercentage:function(e){return"".concat(e,"%")}};var g=h,f="https://github.com/kevinsqi/react-circular-progressbar",v=function(e){var t=e.description,a=e.children;return r.a.createElement("div",{className:"col-12 col-sm-6 col-md-3"},r.a.createElement("div",{className:"row mb-1"},r.a.createElement("div",{className:"col-6 offset-3"},a)),r.a.createElement("p",{className:"text-center"},t))};var y=function(){return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row mt-5"},r.a.createElement("div",{className:"col-12"},r.a.createElement("div",{className:"text-center"},r.a.createElement("h1",{className:"mb-3"},"react-circular-progressbar"),r.a.createElement("p",null,"A circular progress indicator component")))),r.a.createElement("div",{className:"row mt-5 mb-5"},r.a.createElement("div",{className:"col-6 offset-3 col-md-2 offset-md-5"},r.a.createElement(g,{percentages:[0,20,40,60,80,100],stylesForPercentage:function(e){return{path:{stroke:"rgba(62, 152, 199, ".concat((100+e)/200,")")}}}}))),r.a.createElement("hr",null),r.a.createElement("div",{className:"row mt-5"},r.a.createElement("div",{className:"col-12  mb-5"},r.a.createElement("h2",{className:"text-center"},"Built with SVG and styled with plain CSS.")),r.a.createElement(v,{description:"Customize text and styling dynamically based on percentage."},r.a.createElement(g,{percentages:[75,100],classForPercentage:function(e){return 100===e?"complete":"incomplete"},textForPercentage:function(e){return 100===e?"".concat(e,"!!"):"".concat(e)}})),r.a.createElement(v,{description:"Customize stroke width and make it go counterclockwise."},r.a.createElement(g,{percentages:[0,20,80],strokeWidth:5,counterClockwise:!0})),r.a.createElement(v,{description:"Add a background color for that inverted look."},r.a.createElement(d.a,{className:"CircularProgressbar-inverted",background:!0,backgroundPadding:5,strokeWidth:6,percentage:66,text:"".concat(66,"%")})),r.a.createElement(v,{description:"With SVG and CSS you can do whatever you want."},r.a.createElement("div",{style:{position:"relative",width:"100%",height:"100%"}},r.a.createElement("div",{style:{position:"absolute",width:"100%"}},r.a.createElement(d.a,{percentage:50})),r.a.createElement("div",{style:{width:"100%",padding:"10%"}},r.a.createElement("img",{style:{width:"100%"},src:"https://i.imgur.com/b9NyUGm.png",alt:"doge"}))))),r.a.createElement("hr",null),r.a.createElement("div",{className:"mt-5 mb-5"},r.a.createElement("h2",{className:"text-center"},"Installation"),r.a.createElement("div",{className:"text-center mt-5"},r.a.createElement("p",null,"Install with yarn or npm:"),r.a.createElement("p",{className:"mb-5"},r.a.createElement("code",{className:"p-2 text-dark bg-yellow"},"yarn add react-circular-progressbar")),r.a.createElement("a",{className:"btn btn-info btn-lg",href:f},"View docs on Github")),r.a.createElement("div",{className:"text-center"},r.a.createElement("div",{className:"mt-5"},"Built by ",r.a.createElement("a",{href:"https://www.kevinqi.com/"},"@kevinsqi")))))},b=(a(19),a(20),function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(y,null))}}]),t}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(b,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},9:function(e,t,a){e.exports=a(21)}},[[9,1,2]]]);
//# sourceMappingURL=main.01396acc.chunk.js.map