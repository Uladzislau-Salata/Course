"use strict";(self.webpackChunkmarvel=self.webpackChunkmarvel||[]).push([[895],{425:(e,a,s)=>{s.d(a,{A:()=>r});const t=s.p+"static/media/error.42292aa12b6bc303ce99.gif";var c=s(579);const r=()=>(0,c.jsx)("img",{style:{display:"block",width:"250px",height:"250px",objectFit:"contain",margin:"0 auto"},src:t,alt:"Error"})},455:(e,a,s)=>{s.r(a),s.d(a,{default:()=>b});var t=s(43),c=s(502),r=s(425),n=s(897);const i=s.p+"static/media/mjolnir.61f31e1809f12183a524.png";var l=s(579);const o=e=>{let{char:a}=e;const{name:s,description:t,thumbnail:c,homepage:r,wiki:n}=a;let i={objectFit:"cover"};return"http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg"===c&&(i={objectFit:"contain"}),(0,l.jsxs)("div",{className:"randomchar__block",children:[(0,l.jsx)("img",{src:c,alt:"Random character",className:"randomchar__img",style:i}),(0,l.jsxs)("div",{className:"randomchar__info",children:[(0,l.jsx)("p",{className:"randomchar__name",children:s}),(0,l.jsx)("p",{className:"randomchar__descr",children:t}),(0,l.jsxs)("div",{className:"randomchar__btns",children:[(0,l.jsx)("a",{href:r,className:"button button__main",children:(0,l.jsx)("div",{className:"inner",children:"homepage"})}),(0,l.jsx)("a",{href:n,className:"button button__secondary",children:(0,l.jsx)("div",{className:"inner",children:"Wiki"})})]})]})]})},d=()=>{const[e,a]=(0,t.useState)(null),{loading:s,error:d,getCharacter:h,clearError:m}=(0,n.A)();(0,t.useEffect)((()=>{_();const e=setInterval(_,6e4);return()=>{clearInterval(e)}}),[]);const u=e=>{a(e)},_=()=>{m();const e=Math.floor(19*Math.random()+0);h(e).then(u)},j=d?(0,l.jsx)(r.A,{}):null,x=s?(0,l.jsx)(c.A,{}):null,p=s||d||!e?null:(0,l.jsx)(o,{char:e});return(0,l.jsxs)("div",{className:"randomchar",children:[j,x,p,(0,l.jsxs)("div",{className:"randomchar__static",children:[(0,l.jsxs)("p",{className:"randomchar__title",children:["Random character for today!",(0,l.jsx)("br",{}),"Do you want to get to know him better?"]}),(0,l.jsx)("p",{className:"randomchar__title",children:"Or choose another one"}),(0,l.jsx)("button",{onClick:_,className:"button button__main",children:(0,l.jsx)("div",{className:"inner",children:"try it"})}),(0,l.jsx)("img",{src:i,alt:"mjolnir",className:"randomchar__decoration"})]})]})},h=e=>{const[a,s]=(0,t.useState)([]),[i,o]=(0,t.useState)(!1),[d,h]=(0,t.useState)(1),[m,u]=(0,t.useState)(!1),{loading:_,error:j,getAllCharacters:x}=(0,n.A)();(0,t.useEffect)((()=>{p(d,!0)}),[]);const p=(e,a)=>{o(!a),x(e).then(b)},b=e=>{let a=!1;e.length<9&&(a=!0),s((a=>[...a,...e])),o((e=>!1)),h((e=>e+9)),u((e=>a))},g=(0,t.useRef)([]),v=e=>{g.current.forEach((e=>e.classList.remove("char__item_selected"))),g.current[e].classList.add("char__item_selected"),g.current[e].focus()};const N=function(a){const s=a.map(((a,s)=>{let t={objectFit:"cover"};return"http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg"===a.thumbnail&&(t={objectFit:"unset"}),(0,l.jsxs)("li",{className:"char__item",tabIndex:0,ref:e=>g.current[s]=e,onClick:()=>{e.onCharSelected(a.id),v(s)},onKeyPress:t=>{" "!==t.key&&"Enter"!==t.key||(e.onCharSelected(a.id),v(s))},children:[(0,l.jsx)("img",{src:a.thumbnail,alt:a.name,style:t}),(0,l.jsx)("div",{className:"char__name",children:a.name})]},a.id)}));return(0,l.jsx)("ul",{className:"char__grid",children:s})}(a),f=j?(0,l.jsx)(r.A,{}):null,k=_&&!i?(0,l.jsx)(c.A,{}):null;return(0,l.jsxs)("div",{className:"char__list",children:[f,k,N,(0,l.jsx)("button",{className:"button button__main button__long",disabled:i,style:{display:m?"none":"block"},onClick:()=>p(d),children:(0,l.jsx)("div",{className:"inner",children:"load more"})})]})},m=()=>(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("p",{className:"char__select",children:"Please select a character to see information"}),(0,l.jsxs)("div",{className:"skeleton",children:[(0,l.jsxs)("div",{className:"pulse skeleton__header",children:[(0,l.jsx)("div",{className:"pulse skeleton__circle"}),(0,l.jsx)("div",{className:"pulse skeleton__mini"})]}),(0,l.jsx)("div",{className:"pulse skeleton__block"}),(0,l.jsx)("div",{className:"pulse skeleton__block"}),(0,l.jsx)("div",{className:"pulse skeleton__block"})]})]}),u=e=>{let{char:a}=e;const{name:s,description:t,thumbnail:c,homepage:r,wiki:n,comics:i}=a;let o={objectFit:"cover"};return"http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg"===c&&(o={objectFit:"contain"}),(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)("div",{className:"char__basics",children:[(0,l.jsx)("img",{src:c,alt:s,style:o}),(0,l.jsxs)("div",{children:[(0,l.jsx)("div",{className:"char__info-name",children:s}),(0,l.jsxs)("div",{className:"char__btns",children:[(0,l.jsx)("a",{href:r,className:"button button__main",children:(0,l.jsx)("div",{className:"inner",children:"homepage"})}),(0,l.jsx)("a",{href:n,className:"button button__secondary",children:(0,l.jsx)("div",{className:"inner",children:"Wiki"})})]})]})]}),(0,l.jsx)("div",{className:"char__descr",children:t}),(0,l.jsx)("div",{className:"char__comics",children:"Comics:"}),(0,l.jsxs)("ul",{className:"char__comics-list",children:[i.length>0?null:"There is no comics with this character",i.map(((e,a)=>{if(!(a>9))return(0,l.jsx)("li",{className:"char__comics-item",children:e.name},a)}))]})]})},_=e=>{const[a,s]=(0,t.useState)(null),{loading:i,error:o,getCharacter:d,clearError:h}=(0,n.A)();(0,t.useEffect)((()=>{_()}),[e.charId]);const _=()=>{const{charId:a}=e;a&&(h(),d(a).then(j))},j=e=>{s(e)},x=a||i||o?null:(0,l.jsx)(m,{}),p=o?(0,l.jsx)(r.A,{}):null,b=i?(0,l.jsx)(c.A,{}):null,g=i||o||!a?null:(0,l.jsx)(u,{char:a});return(0,l.jsxs)("div",{className:"char__info",children:[x,p,b,g]})};class j extends t.Component{constructor(){super(...arguments),this.state={error:!1}}componentDidCatch(e,a){console.log(e,a),this.setState({error:!0})}render(){return this.state.error?(0,l.jsx)(r.A,{}):this.props.children}}const x=j,p=s.p+"static/media/vision.067d4ae1936d64a577ce.png",b=()=>{const[e,a]=(0,t.useState)(null);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(x,{children:(0,l.jsx)(d,{})}),(0,l.jsxs)("div",{className:"char__content",children:[(0,l.jsx)(x,{children:(0,l.jsx)(h,{onCharSelected:e=>{a(e)}})}),(0,l.jsx)(x,{children:(0,l.jsx)(_,{charId:e})})]}),(0,l.jsx)("img",{className:"bg-decoration",src:p,alt:"vision"})]})}},897:(e,a,s)=>{s.d(a,{A:()=>c});var t=s(43);const c=()=>{const{loading:e,request:a,error:s,clearError:c}=(()=>{const[e,a]=(0,t.useState)(!1),[s,c]=(0,t.useState)(null);return{loading:e,request:(0,t.useCallback)((async function(e){let s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"GET",t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};a(!0);try{const c=await fetch(e,{method:s,body:t,headers:r});if(!c.ok)throw new Error("Could not fetch ".concat(e,", status: ").concat(c.status));const n=await c.json();return a(!1),n}catch(n){throw a(!1),c(n.message),n}}),[]),error:s,clearError:(0,t.useCallback)((()=>c(null)),[])}})(),r="https://marvel-server-zeta.vercel.app/",n="d4eecb0c66dedbfae4eab45d312fc1df",i=e=>({id:e.id,name:e.name,description:e.description?"".concat(e.description.slice(0,19),"..."):"There is no description for this character",thumbnail:e.thumbnail.path+"."+e.thumbnail.extension,homepage:e.urls[0].url,wiki:e.urls[1].url,comics:e.comics.items}),l=e=>{var a;return{id:e.id,title:e.title,description:e.description||"There is no description",pageCount:e.pageCount?"".concat(e.pageCount," p."):"No information about the number of pages",thumbnail:e.thumbnail.path+"."+e.thumbnail.extension,language:(null===(a=e.textObjects[0])||void 0===a?void 0:a.language)||"en-us",price:e.prices[0].price?"".concat(e.prices[0].price,"$"):"not available"}};return{loading:e,error:s,clearError:c,getAllCharacters:async function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;return(await a("".concat(r,"characters?limit=9&offset=").concat(e,"&apikey=").concat(n))).data.results.map(i)},getCharacter:async e=>{const s=await a("".concat(r,"characters/").concat(e,"?&apikey=").concat(n));return i(s.data.results[0])},getAllComics:async function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return(await a("".concat(r,"comics?orderBy=issueNumber&limit=8&offset=").concat(e,"&apikey=").concat(n))).data.results.map(l)},getComic:async e=>{const s=await a("".concat(r,"comics/").concat(e,"?apikey=").concat(n));return l(s.data.results[0])}}}}}]);
//# sourceMappingURL=895.8258c36e.chunk.js.map