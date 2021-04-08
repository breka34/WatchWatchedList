(this.webpackJsonpmovielist=this.webpackJsonpmovielist||[]).push([[0],{21:function(e,t,c){},28:function(e,t,c){},29:function(e,t,c){},30:function(e,t,c){},37:function(e,t,c){},38:function(e,t,c){"use strict";c.r(t);var a=c(1),s=c.n(a),n=c(22),i=c.n(n),r=(c(28),c(29),c(8)),l=c(2),d=(c(30),c(0)),o=function(){return Object(d.jsx)("header",{children:Object(d.jsx)("div",{className:"container",children:Object(d.jsxs)("div",{className:"inner-conntent",children:[Object(d.jsx)("div",{className:"brand",children:Object(d.jsx)(r.b,{to:"/",children:"WatchWatched"})}),Object(d.jsx)("nav",{children:Object(d.jsxs)("ul",{children:[Object(d.jsx)("li",{children:Object(d.jsx)(r.b,{to:"/",children:"WatchList"})}),Object(d.jsx)("li",{children:Object(d.jsx)(r.b,{to:"/watched",children:"Watched"})}),Object(d.jsx)("li",{children:Object(d.jsx)(r.b,{to:"/add",className:"btn",children:"+ Add"})})]})})]})})})},j=c(12),h=c(15),b=c(7),O=function(e,t){switch(t.type){case"ADD_MOVIE_TO_WATCH_LIST":return Object(b.a)(Object(b.a)({},e),{},{watchlist:[t.payload].concat(Object(h.a)(e.watchlist))});case"REMOVE_MOVIE_FROM_WATCHLIST":return Object(b.a)(Object(b.a)({},e),{},{watchlist:e.watchlist.filter((function(e){return e.id!==t.payload}))});case"ADD_MOVIE_TO_WATCHED":return Object(b.a)(Object(b.a)({},e),{},{watchlist:e.watchlist.filter((function(e){return e.id!==t.payload})),watched:[t.payload].concat(Object(h.a)(e.watched))});case"MOVE_TO_WATCHLIST":return Object(b.a)(Object(b.a)({},e),{},{watched:e.watched.filter((function(e){return e.id!==t.payload.id})),watchlist:[t.payload].concat(Object(h.a)(e.watchlist))});case"REMOVE_FROM_WATCHED":return Object(b.a)(Object(b.a)({},e),{},{watched:e.watched.filter((function(e){return e.id!==t.payload}))});default:return e}},u={watchlist:[],watched:[]},m=Object(a.createContext)(u),x=function(e){var t=Object(a.useReducer)(O,u),c=Object(j.a)(t,2),s=c[0],n=c[1];Object(a.useEffect)((function(){localStorage.setItem("watchlist",JSON.stringify(s.watchlist)),localStorage.setItem("watched",JSON.stringify(s.watched))}),[s]);return Object(d.jsx)(m.Provider,{value:{watchlist:s.watchlist,watched:s.watched,addMovieToWatchlist:function(e){n({type:"ADD_MOVIE_TO_WATCH_LIST",payload:e})},removeMovieFromWatchlist:function(e){n({type:"REMOVE_MOVIE_FROM_WATCHLIST",payload:e})},addMovieToWatched:function(e){n({type:"ADD_MOVIE_TO_WATCHED",payload:e})},movieToWatchlist:function(e){n({type:"MOVE_TO_WATCHLIST",payload:e})},removeFromWatched:function(e){n({type:"REMOVE_FROM_WATCHED",payload:e})}},children:e.children})},v=c(13),p=function(e){var t=e.movie,c=e.type,s=Object(a.useContext)(m),n=s.addMovieToWatched,i=s.removeMovieFromWatchlist,r=s.movieToWatchlist,l=s.removeFromWatched,o=!!s.watched.find((function(e){return e.id===t.id}));return Object(d.jsxs)("div",{className:"inner-card-controls",children:["watchlist"===c&&Object(d.jsxs)("main",{children:[Object(d.jsx)("button",{className:"ctrl-btn",disabled:o,onClick:function(){return n(t)},children:Object(d.jsx)(v.a,{className:"eye"})}),Object(d.jsx)("button",{className:"ctrl-btn",onClick:function(){return i(t.id)},children:Object(d.jsx)(v.b,{className:"x"})})]}),"watched"===c&&Object(d.jsxs)("main",{children:[Object(d.jsx)("button",{className:"ctrl-btn",onClick:function(){return r(t)},children:Object(d.jsx)(v.a,{className:"eye"})}),Object(d.jsx)("button",{className:"ctrl-btn",onClick:function(){return l(t.id)},children:Object(d.jsx)(v.b,{className:"x"})})]})]})},f=function(e){var t=e.movie,c=e.type;return Object(d.jsxs)("div",{className:"movie-card",children:[Object(d.jsx)("div",{className:"overlay"}),t.poster_path?Object(d.jsx)("img",{src:"https://image.tmdb.org/t/p/w200".concat(t.poster_path),alt:"".concat(t.title," Poster")}):Object(d.jsx)("div",{className:"filter-poster"}),Object(d.jsx)(p,{type:c,movie:t})]})},N=(c(21),function(){var e=Object(a.useContext)(m).watchlist;return Object(d.jsx)("div",{className:"movie-page",children:Object(d.jsxs)("div",{className:"container",children:[Object(d.jsx)("div",{className:"header",children:Object(d.jsx)("h1",{children:"My Watchlist"})}),e.length>0?Object(d.jsx)("div",{className:"movie-grid",children:e.map((function(e,t){return Object(d.jsx)(f,{movie:e,type:"watchlist"},t)}))}):Object(d.jsx)("h4",{className:"no-movies",children:"No movies in your list, add some!"})]})})}),w=function(){var e=Object(a.useContext)(m).watched;return Object(d.jsx)("div",{className:"movie-page",children:Object(d.jsxs)("div",{className:"container",children:[Object(d.jsx)("div",{className:"header",children:Object(d.jsx)("h1",{children:"Watched movies "})}),e.length>0?Object(d.jsx)("div",{className:"movie-grid",children:e.map((function(e,t){return Object(d.jsx)(f,{movie:e,type:"watched"},t)}))}):Object(d.jsx)("h4",{className:"no-movies",children:"No movies in your list, add some!"})]})})},y=function(e){var t=e.movie,c=Object(a.useContext)(m),s=c.addMovieToWatchlist,n=!!c.watchlist.find((function(e){return e.id===t.id}));return Object(d.jsxs)("div",{className:"result-card",children:[Object(d.jsx)("div",{className:"poster-wrapper",children:t.poster_path?Object(d.jsx)("img",{src:"https://image.tmdb.org/t/p/w200".concat(t.poster_path),alt:"".concat(t.title," Poster")}):Object(d.jsx)("div",{className:"filter-poster"})}),Object(d.jsxs)("div",{className:"info",children:[Object(d.jsxs)("div",{className:"header",children:[Object(d.jsx)("h3",{className:"title",children:t.title}),Object(d.jsx)("h4",{className:"relase-date",children:t.release_date})]}),Object(d.jsx)("div",{className:"controls",children:Object(d.jsx)("button",{className:"btn",disabled:n,onClick:function(){return s(t)},children:"Add to Watchlist"})})]})]})},_=(c(37),function(){var e=Object(a.useState)(""),t=Object(j.a)(e,2),c=t[0],s=t[1],n=Object(a.useState)([]),i=Object(j.a)(n,2),r=i[0],l=i[1];return Object(d.jsx)("div",{className:"add-page",children:Object(d.jsx)("div",{className:"container",children:Object(d.jsxs)("div",{className:"add-content",children:[Object(d.jsx)("div",{className:"input-wrapper",children:Object(d.jsx)("input",{type:"text",placeholder:"Search for a movie",value:c,onChange:function(e){e.preventDefault(),s(e.target.value),fetch("https://api.themoviedb.org/3/search/movie?api_key=f55ef2a80d4ef73f63457dd73185229e&language=en-US&page=1&include_adult=false&query=".concat(e.target.value)).then((function(e){return e.json()})).then((function(e){e.errors?l([]):(l(e.results),console.log(e.results))}))}})}),r.length>0&&Object(d.jsx)("ul",{className:"results",children:r.map((function(e){return Object(d.jsx)("li",{children:Object(d.jsx)(y,{movie:e})},e.id)}))})]})})})});var g=function(){return Object(d.jsx)(x,{children:Object(d.jsx)("div",{className:"App",children:Object(d.jsxs)(r.a,{children:[Object(d.jsx)(o,{}),Object(d.jsxs)(l.c,{children:[Object(d.jsx)(l.a,{exact:!0,path:"/",children:Object(d.jsx)(N,{})}),Object(d.jsx)(l.a,{path:"/watched",children:Object(d.jsx)(w,{})}),Object(d.jsx)(l.a,{path:"/add",children:Object(d.jsx)(_,{})})]})]})})})},T=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,39)).then((function(t){var c=t.getCLS,a=t.getFID,s=t.getFCP,n=t.getLCP,i=t.getTTFB;c(e),a(e),s(e),n(e),i(e)}))};i.a.render(Object(d.jsx)(s.a.StrictMode,{children:Object(d.jsx)(g,{})}),document.getElementById("root")),T()}},[[38,1,2]]]);
//# sourceMappingURL=main.d94250ae.chunk.js.map