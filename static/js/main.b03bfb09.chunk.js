(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,function(e,t,a){e.exports={hit:"Hit_hit__MXvA_",hitTitleLine:"Hit_hitTitleLine__eSHMn",title:"Hit_title__2ttS1",duration:"Hit_duration__1RSeb",link:"Hit_link__3Edkb",highlight:"Hit_highlight__1-gx4"}},,,,,,,function(e,t,a){e.exports={filterName:"filterHits_filterName__1qARp"}},,function(e,t,a){e.exports={container:"filePickerComponent_container__3AA_1"}},function(e,t,a){e.exports=a(23)},,,,,function(e,t,a){},,,,function(e,t,a){},,,function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(7),l=a.n(i),c=(a(16),a(2)),s=a(3),u=a(4),o=a(5),m=r.a.createContext({data:[],toggleFilter:function(){},filters:{}}),f=function(e,t){return e.filter(function(e){return Object.keys(e).every(function(a){return!t[a]||t[a][e[a]]})})},h=function(e){var t=e.searchClient.data,a=Object(o.a)(e,["searchClient"]),i=Object(n.useState)({}),l=Object(u.a)(i,2),h=l[0],d=l[1],E=Object(n.useCallback)(function(e){var t=e.group,a=e.name,n=e.value;d(function(e){var r=Object(s.a)({},e,Object(c.a)({},t,Object(s.a)({},e[t],Object(c.a)({},a,n))));return n||delete r[t][a],0===Object.keys(r[t]).length&&delete r[t],r})}),b=Object(n.useMemo)(function(){return f(t,h)},[h,t]);return r.a.createElement(m.Provider,Object.assign({value:{data:t,filters:h,toggleFilter:E,filteredData:b}},a))},d=function(e){return function(){return r.a.createElement(m.Consumer,null,function(t){var a=t.filteredData;return r.a.createElement(e,{hits:a})})}},E=a(8),b=a.n(E),v=function(e,t,a){var n=new Set(t);return e.reduce(function(e,t){return Object.keys(t).forEach(function(r){e[r]=e[r]||{},e[r][t[r]]=e[r][t[r]]||{total:0,facetCount:0},e[r][t[r]].total+=1,e[r][t[r]].facetCount+=n.has(t)||a[r]?1:0}),e},{})},p=function(e){return function(){return r.a.createElement(m.Consumer,null,function(t){var a=t.data,n=t.filters,i=t.toggleFilter,l=function(e,t,a){var n=v(e,t,a);return Object.keys(a).forEach(function(t){var r=Object(s.a)({},a);delete r[t];var i=f(e,r),l=v(e,i,r);n[t]=l[t]}),Object.keys(n).map(function(e){return{name:e,values:n[e],number:Object.keys(n[e]).length}}).filter(function(t){return t.number>1&&t.number<2*e.length/3}).sort(function(e,t){return e.number-t.number})}(a,t.filteredData,n);return r.a.createElement(e,{filters:l,toggleFilter:i})})}},g=function(e){var t=e.filter,a=e.toggleFilter;return r.a.createElement("section",null,r.a.createElement("h2",{className:b.a.filterName},t.name),r.a.createElement("div",{className:"ais-RefinementList"},r.a.createElement("ul",{className:"ais-RefinementList-list"},Object.keys(t.values).map(function(e){return r.a.createElement("li",{key:e,className:"ais-RefinementList-item"},r.a.createElement("label",{className:"ais-RefinementList-label"},r.a.createElement("input",{className:"ais-RefinementList-checkbox",type:"checkbox",onChange:function(n){a({group:t.name,name:e,value:n.nativeEvent.target.checked})}}),r.a.createElement("span",{className:"ais-RefinementList-labelText"},"string"===typeof e?e:JSON.stringify(e)),r.a.createElement("span",{className:"ais-RefinementList-count"},t.values[e].facetCount)))}))))},N=p(function(e){var t=e.filters,a=e.toggleFilter;return t.map(function(e){return r.a.createElement(g,{key:e.name,filter:e,toggleFilter:a})})}),O=a(9),y=a(10),j=a.n(y),_=function(e){return e.stopPropagation(),e.preventDefault(),!1},k=function(e){var t=e.onChange,a=Object(n.useCallback)(function(e){return e.preventDefault(),e.stopPropagation(),t(e.dataTransfer.files),!1},[t]);return r.a.createElement("div",{className:j.a.container,onDragEnter:_,onDrop:a,onDragOver:_},r.a.createElement("h2",null,"To get started please select or drag a JSON file"),r.a.createElement("input",{type:"file",onChange:function(e){return t(e.nativeEvent.target.files)}}),r.a.createElement("p",null,r.a.createElement("br",null),"By the way, we don't upload your file anywhere.",r.a.createElement("br",null),"The magic happens in\n      your browser."))},w=r.a.createContext({data:[],setData:function(){}}),C=w.Consumer,x=function(e){var t=Object(O.a)({},e),a=Object(n.useState)([]),i=Object(u.a)(a,2),l=i[0],c=i[1];return r.a.createElement(w.Provider,Object.assign({value:{data:l,setData:c}},t))},S={},D=function(){var e=Object(n.useContext)(w).setData,t=Object(n.useCallback)(function(t){var a=new FileReader,n=t[0];window.history.pushState({file:n.name},n.name,"?file=".concat(n.name)),a.addEventListener("load",function(){try{var t=JSON.parse(a.result);S[n.name]=t,e(function e(t){if(Array.isArray(t))return t;if(Object.keys(t).length>1)return Object.keys(t).map(function(e){return{name:e,value:t[e]}});var a=Object.keys(t),n=Object(u.a)(a,1)[0];return e(t[n])}(t))}catch(r){window.alert("please select a valid JSON file")}}),a.readAsText(n)},[e]);return Object(n.useEffect)(function(){window.onpopstate=function(t){t&&t.state&&t.state.file&&S[t.state.file]?e(S[t.state.file]):e([])}},[]),r.a.createElement(k,{onChange:t})},H=(a(20),a(1)),L=a.n(H),R=function(e){var t=e.attribute,a=e.hit;return r.a.createElement("div",{className:L.a.highlight},t," :"," ","string"===typeof a[t]?a[t]:JSON.stringify(a[t]))};var J=function(e){var t=e.hit,a=t.title,n=t.name,i=Object(o.a)(t,["title","name"]);return r.a.createElement("article",{className:L.a.hit},(a||n)&&r.a.createElement("div",{className:L.a.hitTitleLine},r.a.createElement("h1",{className:L.a.title},r.a.createElement("div",{className:L.a.highlight},a),r.a.createElement("div",{className:L.a.highlight},n))),Object.keys(i).map(function(t){return r.a.createElement("p",{key:t},r.a.createElement(R,{attribute:t,hit:e.hit}))}))},A=d(function(e){var t=e.hits,a=void 0===t?[]:t;return r.a.createElement("div",{className:"ais-Hits"},r.a.createElement("ul",{className:"ais-Hits-list"},a.map(function(e){return r.a.createElement("li",{className:"ais-Hits-item",key:e.id},r.a.createElement(J,{hit:e})," ")})))}),F=function(){return r.a.createElement("div",{className:"app-container"},r.a.createElement(x,null,r.a.createElement("header",{className:"header"},r.a.createElement("h1",{className:"header-title"},r.a.createElement("a",{href:"/"},"JSON explorer")),r.a.createElement("p",{className:"header-subtitle"},"Browse and filter a JSON file in your browser")),r.a.createElement(C,null,function(e){var t=e.data;return t&&0!==t.length?r.a.createElement(h,{searchClient:{data:t},indexName:"retromat_en"},r.a.createElement("div",{className:"main-container"},r.a.createElement("div",{className:"filter-panel"},r.a.createElement(N,null)),r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"search-panel"},r.a.createElement("div",{className:"search-panel__results"},r.a.createElement(A,null)))))):r.a.createElement("div",{className:"main-container"},r.a.createElement(D,null))}),r.a.createElement("footer",{className:"footer"},r.a.createElement("p",{className:"footer-title"},"\xa9 All rights reserved - 2020 - Built by"," ",r.a.createElement("a",{href:"https://www.linkedin.com/in/maxencedalmais/"},"Maxence Dalmais")," - ","Sponsored by ",r.a.createElement("a",{href:"https://www.retrolution.co/"},"Retrolution")," - ","Hosted by Github"))))};l.a.render(r.a.createElement(F,null),document.getElementById("root"))}],[[11,2,1]]]);
//# sourceMappingURL=main.b03bfb09.chunk.js.map