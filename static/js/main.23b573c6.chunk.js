(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{11:function(e,t,n){e.exports=n(27)},17:function(e,t,n){},21:function(e,t,n){},25:function(e,t,n){},27:function(e,t,n){"use strict";n.r(t);var o=n(0),a=n.n(o),r=n(3),i=n.n(r),s=(n(17),n(1)),c=n.n(s),l=n(4),u=n(5),m=n(6),v=n(9),p=n(7),d=n(10),f=(n(21),n(8)),h=n.n(f);n(25);function _(e){var t=e.poster,n=e.alt;return a.a.createElement("img",{className:"Movie__Poster",src:t,alt:n,title:n})}function g(e){var t=e.genre;return a.a.createElement("span",{className:"Movie__Genre"},t)}var w=function(e){var t=e.title,n=e.poster,o=e.genres,r=e.synopsis;return a.a.createElement("div",{className:"Movie"},a.a.createElement("div",{className:"Movie__Column"},a.a.createElement(_,{poster:n,alt:t})),a.a.createElement("div",{className:"Movie__Column"},a.a.createElement("h1",null,t),a.a.createElement("div",{className:"Movie__Genres"},o.map(function(e,t){return a.a.createElement(g,{genre:e,key:t})})),a.a.createElement("div",{className:"Movie__Synopsis"},a.a.createElement(h.a,{text:r,maxLine:"3",ellipsis:"...",trimRight:!0,basedOn:"letters"}))))},y=function(e){function t(){var e,n;Object(u.a)(this,t);for(var o=arguments.length,r=new Array(o),i=0;i<o;i++)r[i]=arguments[i];return(n=Object(v.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={},n._renderMovies=function(){return n.state.movies.map(function(e){return a.a.createElement(w,{key:e.id,title:e.title_english,poster:e.large_cover_image,genres:e.genres,synopsis:e.synopsis})})},n._getMovies=Object(l.a)(c.a.mark(function e(){var t;return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n._callApi();case 2:t=e.sent,n.setState({movies:t});case 4:case"end":return e.stop()}},e,this)})),n._callApi=function(){return fetch("https://yts.am/api/v2/list_movies.json?sort_by=download_count").then(function(e){return e.json()}).then(function(e){return e.data.movies}).catch(function(e){return console.log(e)})},n}return Object(d.a)(t,e),Object(m.a)(t,[{key:"componentWillMount",value:function(){console.log("= componentWillMount =")}},{key:"render",value:function(){console.log("= render =");var e=this.state.movies;return a.a.createElement("div",{className:e?"App":"App--loading"},e?this._renderMovies():"Loading...")}},{key:"componentDidMount",value:function(){console.log("= componentDidMount ="),this._getMovies()}}]),t}(o.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(a.a.createElement(y,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[11,2,1]]]);
//# sourceMappingURL=main.23b573c6.chunk.js.map