(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{30:function(e,a,t){},45:function(e,a,t){e.exports=t(80)},50:function(e,a,t){},51:function(e,a,t){e.exports=t.p+"static/media/logo.5d5d9eef.svg"},52:function(e,a,t){},53:function(e,a,t){},80:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),o=t(17),r=t.n(o);t(50),t(51),t(52);var c=function(){return l.a.createElement("footer",{className:"footer"},l.a.createElement("h5",{style:{color:"white"}},"Built with React"),l.a.createElement("i",{className:"fab fa-react",style:{color:"blue"}}),l.a.createElement("h5",{style:{color:"white"}},"Project By: Jesse A."),l.a.createElement("li",{className:"social-media-icon"},l.a.createElement("a",{href:"https://www.linkedin.com/in/jesse-a-0617881a2?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BkIR0XT9mQlaD%2F6EEsl6UAQ%3D%3D",target:"blank"},l.a.createElement("i",{className:"fab fa-linkedin","aria-hidden":"true"}))),l.a.createElement("li",{className:"social-media-icon"},l.a.createElement("a",{href:"https://github.com/audijej",target:"blank"},l.a.createElement("i",{className:"fab fa-github"}))),l.a.createElement("li",{className:"social-media-icon"},l.a.createElement("a",{href:"https://www.instagram.com/audigoodness/",target:"blank"},l.a.createElement("i",{className:"fab fa-instagram-square"}))))},i=t(10);t(53);var s=function(){return l.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-light bg-light"},l.a.createElement(i.b,{className:"navbar-brand",to:"/"},"Google Book Search"),l.a.createElement("div",null,l.a.createElement("ul",{className:"navbar-nav"},l.a.createElement("li",{className:"nav-item"},l.a.createElement(i.b,{to:"/searchbook",className:"/searchbook"===window.location.pathname||"/searchbook"===window.location.pathname?"nav-link active":"nav-link"},"Search A Book")),l.a.createElement("li",{className:"nav-item"},l.a.createElement(i.b,{to:"/viewbook",className:"/viewbook"===window.location.pathname?"nav-link active":"nav-link"},"Saved Books")))))},m=t(4),u=(t(30),t(26)),E=t.n(u),b=t(37),d=t(7);function v(e){return l.a.createElement("div",{className:"form-group"},l.a.createElement("input",Object.assign({className:"form-control"},e)))}var h=t(85),f=t(86),k=t(16);function p(e){return l.a.createElement(k.a,Object.assign({id:"deleteBtn",variant:"primary",type:"submit"},e,{role:"button",tabIndex:"0"}),"Delete")}function g(e){return l.a.createElement(k.a,Object.assign({id:"searchBtn",variant:"primary",type:"submit"},e,{role:"button",tabIndex:"0"}),"Search")}function w(e){return l.a.createElement(k.a,Object.assign({id:"viewBtn",variant:"primary",type:"submit"},e,{role:"button",tabIndex:"0"}),"View More Details")}function j(e){return l.a.createElement(k.a,Object.assign({id:"saveBtn",variant:"primary",type:"submit"},e,{role:"button",tabIndex:"0"}),"Save To Reading List")}var O=t(18),B=t.n(O),N={getBooks:function(){return B.a.get("/api/books")},getBook:function(e){return B.a.get("/api/books/"+e)},deleteBook:function(e){return B.a.delete("/api/books/"+e)},saveBook:function(e){return B.a.post("/api/books",e)}},y=t(15);function S(e){var a=e.children;return l.a.createElement("div",{className:"list-overflow-container"},l.a.createElement("ul",{className:"list-group"},a))}function I(e){var a=e.children;return l.a.createElement("li",{className:"list-group-item"},a)}var x=t(19),_=t(12),A=t(14);t(87);var D=t(21);t(79);var T=function(){var e=Object(n.useState)([]),a=Object(d.a)(e,2),t=a[0],o=a[1],r=Object(n.useState)({savedBook:[],title:"",authors:"",description:"",thumbnail:"",link:""}),c=Object(d.a)(r,2),i=(c[0],c[1]),s=Object(n.useState)({listing:[]}),m=Object(d.a)(s,2),u=m[0],k=m[1],p=Object(n.useState)(""),O=Object(d.a)(p,2),T=O[0],C=O[1],L=function(){var e=Object(b.a)(E.a.mark(function e(){var a;return E.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a=T,e.next=4,B.a.get("https://www.googleapis.com/books/v1/volumes?q="+a).then(function(e){console.log("hello"),o(e.data.items),k({listing:e.data.items}),i({savedBook:e.data.items,title:e.data.items,authors:e.data.items,description:e.data.items}),console.log(e.data.items)});case 4:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}(),R=function(e){e.preventDefault(),L(),C("")};function F(e){console.log(e),N.saveBook({title:t[e].volumeInfo.title,authors:t[e].volumeInfo.authors,description:t[e].volumeInfo.description,image:t[e].volumeInfo.imageLinks.smallThumbnail,link:t[e].volumeInfo.previewLink}),console.log("\ud83d\udc4b")}return l.a.createElement("div",null,l.a.createElement(x.a,{fluid:!0},l.a.createElement(y.a,null,l.a.createElement("h1",{id:"jumbotronHeading"},"Google Book Club"),l.a.createElement("h1",null,"Find a book today."))),l.a.createElement("div",{className:"container"},l.a.createElement(y.a,{fluid:!0,id:"booksearch"},l.a.createElement("h1",null,"Search A Book"),l.a.createElement("form",{onSubmit:R},l.a.createElement(v,{placeholder:"Book...",value:T,onChange:function(e,a){C(e.target.value)}})),l.a.createElement(g,{onClick:R}))),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("div",null,l.a.createElement("h1",null,"Results"),l.a.createElement(S,null,u.listing.map(function(e,a){return l.a.createElement(I,{key:a},l.a.createElement(A.a,null,l.a.createElement(_.a,null,l.a.createElement("h5",null,"ID: ",e.id),l.a.createElement("h5",null,"Title: ",e.volumeInfo.title),l.a.createElement("h5",null,"Author: ",e.volumeInfo.authors),l.a.createElement("p",{style:{color:"black"}},"Synopsis: ",e.volumeInfo.description)),l.a.createElement(_.a,null,l.a.createElement("a",{href:e.volumeInfo.previewLink,target:"_blank"},l.a.createElement("img",{src:e.volumeInfo.imageLinks.thumbnail,alt:"bookImage"}))),l.a.createElement(_.a,null,l.a.createElement(h.a,null,l.a.createElement(f.a,{className:"mr-2","aria-label":"First group"},l.a.createElement("a",{href:e.volumeInfo.previewLink,target:"_blank"},l.a.createElement(w,null))),l.a.createElement(f.a,{className:"mr-2","aria-label":"Second group"},l.a.createElement(j,{onClick:function(){F(a),console.log("cheers to that"),Object(D.b)("Saved to your Saved Books list",{position:D.b.POSITION.TOP_CENTER})}}),l.a.createElement(D.a,{autoClose:5e3}))))))}))))};var C=function(){var e=Object(n.useState)([]),a=Object(d.a)(e,2),t=a[0],o=a[1],r=Object(n.useState)({}),c=Object(d.a)(r,2),s=(c[0],c[1],Object(n.useState)("")),m=Object(d.a)(s,2),u=(m[0],m[1],Object(n.useState)({listing:[]})),E=Object(d.a)(u,2);function b(){N.getBooks().then(function(e){return o(e.data)}).catch(function(e){return console.log(e)})}return E[0],E[1],Object(n.useEffect)(function(){b()},[]),l.a.createElement("div",null,l.a.createElement(x.a,{fluid:!0},l.a.createElement(y.a,null,l.a.createElement("h1",null,"View your saved books here"),l.a.createElement("p",null,"Find a book today."))),l.a.createElement("div",{className:"container"},l.a.createElement(y.a,{fluid:!0,id:"resultsdiv"},l.a.createElement("h1",null,"Saved Books"),t.length?l.a.createElement(S,null,t.map(function(e){return l.a.createElement(I,{key:e._id},l.a.createElement(i.b,{to:"/books/"+e._id},l.a.createElement("strong",null,e.title," by ",e.authors)),l.a.createElement("br",null),l.a.createElement(p,{onClick:function(){return a=e._id,void N.deleteBook(a).then(function(e){return b()}).catch(function(e){return console.log(e)});var a}}))})):l.a.createElement("h3",null,"No Results to Display"))))};var L=function(){return l.a.createElement("div",{className:"bg"},l.a.createElement("div",{class:"hero-text"},l.a.createElement("h1",null,"Google Book Search Application"),l.a.createElement("p",{id:"landingPageText"},"Search for books on google and save them to you list"),l.a.createElement(k.a,null,l.a.createElement(i.b,{to:"/searchbook",className:"/searchbook"===window.location.pathname?"nav-link active":"nav-link"},l.a.createElement("h1",null,"Search a book")))))};var R=function(e){var a=Object(n.useState)({}),t=Object(d.a)(a,2),o=t[0],r=t[1],c=Object(m.e)().id;return Object(n.useEffect)(function(){N.getBook(c).then(function(e){return r(e.data)}).catch(function(e){return console.log(e)})},[]),l.a.createElement("div",null,l.a.createElement(x.a,{fluid:!0},l.a.createElement("h1",null,"Saved Books")),l.a.createElement(y.a,null,l.a.createElement(A.a,null,l.a.createElement(_.a,null,l.a.createElement("h1",null,o.title),l.a.createElement("h1",null,"by: ",o.authors))),l.a.createElement(A.a,null,l.a.createElement(_.a,null,l.a.createElement("img",{src:o.image}))),l.a.createElement(A.a,null,l.a.createElement(_.a,null,l.a.createElement("a",{href:o.link,target:"_blank"},l.a.createElement(k.a,null,"View Info Here")))),l.a.createElement(A.a,null,l.a.createElement("div",null,l.a.createElement("h1",null,"Synopsis"),l.a.createElement("p",null,o.description))),l.a.createElement(A.a,null,l.a.createElement(_.a,null,l.a.createElement(i.b,{to:"/viewbook"},"\u2190 Back to Authors")))))};var F=function(){return l.a.createElement(i.a,null,l.a.createElement("div",{className:"App"},l.a.createElement(s,null),l.a.createElement(m.a,{exact:!0,path:"/",component:L}),l.a.createElement(m.a,{exact:!0,path:"/searchbook",component:T}),l.a.createElement(m.a,{exact:!0,path:"/viewbook",component:C}),l.a.createElement(m.a,{exact:!0,path:"/books/:id"},l.a.createElement(R,null)),l.a.createElement("br",null),l.a.createElement(c,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(l.a.createElement(F,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()}).catch(function(e){console.error(e.message)})}},[[45,1,2]]]);
//# sourceMappingURL=main.1bb8e270.chunk.js.map