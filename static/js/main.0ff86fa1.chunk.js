(this.webpackJsonpreact_pagination=this.webpackJsonpreact_pagination||[]).push([[0],{14:function(e,t,a){},15:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),l=a(4),r=a.n(l),o=a(5),i=a(6),u=a(8),s=a(7),p=(a(14),a(1)),g=a(17),m=a(3),f=function(e){var t=e.onClick,a=e.disableIf,n=e.text;return c.a.createElement("li",{className:m({"page-item":!0,disabled:a})},c.a.createElement("button",{type:"button",className:"page-link",onClick:t},n))},h=a(3),d=function(e){var t=e.totalAmountOfItems,a=e.perPage,n=e.pageSelected,l=e.onPageChange,r=e.clickNext,o=e.clickPrevious,i=e.withInfo,u=Math.ceil(t/a),s=new Array(u).fill({}).map((function(e,t){return Object(p.a)(Object(p.a)({},e),{},{key:Object(g.a)(),pageNumber:t+1})}));return c.a.createElement("nav",{className:"pagination"},i&&c.a.createElement("div",{className:"info"},(n-1)*a+1," - ",n*a," of ",t),c.a.createElement("ul",{className:"pagination justify-content-center"},c.a.createElement(f,{disableIf:1===n,text:"Previous",onClick:o}),s.map((function(e){return c.a.createElement("li",{key:e.key,className:h({"page-item":!0,active:e.pageNumber===n})},c.a.createElement("button",{type:"button",className:"page-link",onClick:function(e){return l(+e.target.textContent)}},e.pageNumber))})),c.a.createElement(f,{disableIf:n===u,text:"Next",onClick:r})))};d.defaultProps={withInfo:"false"};var v=function(e){var t=e.onChange;return c.a.createElement("select",{onChange:t},c.a.createElement("option",null,"3"),c.a.createElement("option",null,"5"),c.a.createElement("option",null,"10"),c.a.createElement("option",null,"20"))},k={totalAmountOfItems:42,perPage:5,pageSelected:1},P=function(e){Object(u.a)(a,e);var t=Object(s.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,c=new Array(n),l=0;l<n;l++)c[l]=arguments[l];return(e=t.call.apply(t,[this].concat(c))).state=k,e.onPageChange=function(t){e.setState({pageSelected:t})},e.clickPrevious=function(){e.state.pageSelected!==k.pageSelected&&e.setState((function(e){return{pageSelected:e.pageSelected-1}}))},e.clickNext=function(){var t=e.state,a=t.totalAmountOfItems,n=t.perPage;t.pageSelected!==Math.ceil(a/n)&&e.setState((function(e){return{pageSelected:e.pageSelected+1}}))},e.onPerPageChange=function(t){var a=t.target.value;e.setState({perPage:+a})},e}return Object(i.a)(a,[{key:"render",value:function(){var e=this.state,t=e.totalAmountOfItems,a=e.perPage,n=e.pageSelected;return c.a.createElement("div",{className:"app"},c.a.createElement(v,{onChange:this.onPerPageChange}),c.a.createElement(d,{totalAmountOfItems:t,perPage:a,pageSelected:n,onPageChange:this.onPageChange,clickPrevious:this.clickPrevious,clickNext:this.clickNext,withInfo:"true"}))}}]),a}(c.a.PureComponent);r.a.render(c.a.createElement(P,null),document.getElementById("root"))},9:function(e,t,a){e.exports=a(15)}},[[9,1,2]]]);
//# sourceMappingURL=main.0ff86fa1.chunk.js.map