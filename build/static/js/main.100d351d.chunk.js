(this["webpackJsonppersonal-space"]=this["webpackJsonppersonal-space"]||[]).push([[0],{120:function(e,a,t){e.exports=t(150)},149:function(e,a,t){},150:function(e,a,t){"use strict";t.r(a);var n=t(31),c=t(0),l=t.n(c),r=t(8),s=t.n(r),o=t(111),m=t(42),i=t(50),u=t(27),d=t(56),E=t(21),p=t(189),f=t(182),N=t(52),b=t.n(N),h=t(97),g=t.n(h),v=t(98),y=t.n(v),S=t(96),w=t.n(S),j=t(88),k=t.n(j),C=t(89),O=t.n(C),x=t(91),P=t.n(x),A=t(90),L=t.n(A),W=t(74),R=t.n(W),I=t(75),D=t.n(I),M=t(76),T=t.n(M),V=t(77),J=t.n(V),B=t(78),H=t.n(B),Q=t(79),z=t.n(Q),U=t(80),K=t.n(U),_=t(81),q=t.n(_),F=t(82),X=t.n(F),Y=t(83),G=t.n(Y),Z=t(84),$=t.n(Z),ee=t(85),ae=t.n(ee),te=t(86),ne=t.n(te),ce=t(87),le=t.n(ce),re=t(181),se=t(95),oe=t.n(se),me=t(99),ie=t.n(me),ue=t(100),de=t.n(ue),Ee=t(101),pe=t.n(Ee),fe=t(94),Ne=t.n(fe),be=t(92),he=t.n(be),ge=t(93),ve=t.n(ge),ye=t(30),Se=t.n(ye),we=t(69),je=t.n(we),ke=t(70),Ce=t.n(ke),Oe=function(e){var a=e.value,t=e.onChange,n=e.type,c=e.placeholder,r=e.className,s=void 0===r?"":r;return l.a.createElement(p.a,{borderRadius:"4px",bgcolor:"white",padding:"5px",width:"100%",className:s},l.a.createElement("input",{value:a,style:{border:"none",outline:"none"},onChange:t,type:n,placeholder:c}))},xe=function(e,a,t){this.content=e,this.senderId=a,this.receiverId=t},Pe=function(){var e=Object(c.useState)(3),a=Object(E.a)(e,2),t=a[0],n=a[1],r=Object(c.useState)([]),s=Object(E.a)(r,2),o=s[0],m=s[1],i=Object(c.useState)(""),u=Object(E.a)(i,2),N=u[0],h=u[1],v=Object(c.useState)([]),S=Object(E.a)(v,2),j=S[0],C=S[1],x=Object(c.useState)({}),A=Object(E.a)(x,2),W=A[0],I=A[1],M=Object(c.useState)(""),V=Object(E.a)(M,2),B=V[0],Q=V[1],U=b.a.get("username"),_=b.a.get("id"),F=Object(c.useRef)(),Y=Object(c.useRef)();Object(c.useEffect)((function(){document.body.style.backgroundImage="url(".concat(je.a,")");var e=window.location.host,a=new WebSocket("ws://".concat(e));F.current=a,a.addEventListener("open",(function(e){var t={type:"register",userId:_};a.send(JSON.stringify(t))})),a.addEventListener("message",(function(e){var a=JSON.parse(e.data);m((function(e){return[].concat(Object(d.a)(e),[new xe(a.content,a.senderId,a.receiverId)])}))}))}),[_,m]),Object(c.useEffect)((function(){setInterval((function(){Q((new Date).toTimeString().substr(0,8))}),1e3)}),[Q]),Object(c.useEffect)((function(){switch(t){case 2:Se.a.get("/api/receivers").then((function(e){C(e.data)}));break;case 3:Se.a.get("/api/chats").then((function(e){var a=(e.data||[]).map((function(e){return new xe(e.content,e.senderId,e.receiverId)}));m(a)}))}}),[t,m]),Object(c.useEffect)((function(){3===t&&o.length&&Y.current.scrollIntoView({behavior:"smooth"})}),[o,t]);var Z=function(){var e=F.current,a={type:"message",content:N,username:U,senderId:_,receiverId:W.id};e.send(JSON.stringify(a)),m([].concat(Object(d.a)(o),[new xe(N,_,W.id)])),h("")},ee=function(e){window.open(e,"_blank").focus()},te=null,ce="header",se="footer";switch(t){case 1:te=l.a.createElement(p.a,{className:"main-screen"},l.a.createElement(p.a,{height:"50px"}),l.a.createElement(p.a,{className:"row"},l.a.createElement(p.a,{className:"col"},l.a.createElement(R.a,{className:"cell-phone-icon"})),l.a.createElement(p.a,{className:"col",onClick:function(){return ee("https://mail.google.com/mail/u/0/#inbox")}},l.a.createElement(D.a,{className:"cell-phone-icon"})),l.a.createElement(p.a,{className:"col",onClick:function(){return ee("https://onedrive.live.com/about/en-us/signin/")}},l.a.createElement(T.a,{className:"cell-phone-icon"})),l.a.createElement(p.a,{className:"col"},l.a.createElement(J.a,{className:"cell-phone-icon"}))),l.a.createElement(p.a,{className:"row"},l.a.createElement(p.a,{className:"col"},l.a.createElement(H.a,{className:"cell-phone-icon"})),l.a.createElement(p.a,{className:"col"},l.a.createElement(z.a,{className:"cell-phone-icon"})),l.a.createElement(p.a,{className:"col",onClick:function(){return ee("https://www.google.com.au/maps/@-28.1721432,132.7626855,5z")}},l.a.createElement(K.a,{className:"cell-phone-icon"})),l.a.createElement(p.a,{className:"col",onClick:function(){return ee("https://store.google.com/")}},l.a.createElement(q.a,{className:"cell-phone-icon"}))),l.a.createElement(p.a,{className:"row"},l.a.createElement(p.a,{className:"col"},l.a.createElement(X.a,{className:"cell-phone-icon"})),l.a.createElement(p.a,{className:"col"},l.a.createElement(G.a,{className:"cell-phone-icon"})),l.a.createElement(p.a,{className:"col"},l.a.createElement($.a,{className:"cell-phone-icon"})),l.a.createElement(p.a,{className:"col"},l.a.createElement(ae.a,{className:"cell-phone-icon"}))),l.a.createElement(p.a,{className:"row"},l.a.createElement(p.a,{className:"col",onClick:function(){return ee("  https://www.youtube.com/")}},l.a.createElement(ne.a,{className:"cell-phone-icon"})),l.a.createElement(p.a,{className:"col"},l.a.createElement(le.a,{className:"cell-phone-icon"}))),l.a.createElement(p.a,{flex:1}),l.a.createElement(p.a,{className:"row"},l.a.createElement(p.a,{className:"col"},l.a.createElement(k.a,{className:"cell-phone-icon"})),l.a.createElement(p.a,{className:"col",onClick:function(){n(2)}},l.a.createElement(O.a,{className:"cell-phone-icon"})),l.a.createElement(p.a,{className:"col",onClick:function(){return ee("https://www.google.com/")}},l.a.createElement(L.a,{className:"cell-phone-icon"})),l.a.createElement(p.a,{className:"col"},l.a.createElement(P.a,{className:"cell-phone-icon"}))));break;case 2:ce="header header-active",te=l.a.createElement(p.a,{className:"main-screen",bgcolor:"#f1f1f1"},l.a.createElement(p.a,{className:"receivers"},l.a.createElement(p.a,{className:"head-icon"},l.a.createElement(he.a,{style:{fontSize:"80px"}})),j.map((function(e){return l.a.createElement(p.a,{onClick:function(){return function(e){n(3),I(e)}(e)},className:"item",key:e.id},e.nickname)})))),se="footer footer-active";break;case 3:ce="header header-active";var me=o.map((function(e,a){var t=Number(e.senderId)===Number(_)?"item right":"item left";return l.a.createElement(p.a,{className:t,key:a},l.a.createElement(p.a,{className:"content"},e.content),l.a.createElement(p.a,{className:"head"},l.a.createElement(ve.a,null)))}));te=l.a.createElement(p.a,{className:"main-screen",bgcolor:"white"},l.a.createElement(p.a,{className:"to-user"},l.a.createElement(p.a,{className:"back",onClick:function(){return n(2)}},l.a.createElement(Ne.a,null)),W.nickname,"\xa0\xa0",W.phoneNumber),l.a.createElement(p.a,{className:"chat"},l.a.createElement(p.a,{className:"chat-frame"},me,l.a.createElement(p.a,{ref:Y}))),l.a.createElement(p.a,{className:"action"},l.a.createElement(Oe,{type:"text",onChange:function(e){h(e.target.value)},onKeyPress:function(e){"Enter"===e.key&&Z()},value:N}),l.a.createElement(re.a,{className:"send",variant:"contained",onClick:Z,disabled:!N},l.a.createElement(oe.a,null)))),se="footer footer-active"}return l.a.createElement(f.a,{maxWidth:"lg",className:"home"},l.a.createElement(p.a,{className:"section-1"},l.a.createElement(p.a,{className:"cell-phone-box"},l.a.createElement(p.a,{className:"cell-phone",style:{backgroundImage:"url(".concat(Ce.a,")")}},l.a.createElement(p.a,{className:ce},l.a.createElement(p.a,{className:"item time"},B),l.a.createElement(p.a,{className:"empty"}),l.a.createElement(p.a,{className:"item"},l.a.createElement(w.a,{className:"header-icon"})),l.a.createElement(p.a,{className:"item"},l.a.createElement(g.a,{className:"header-icon"})),l.a.createElement(p.a,{className:"item"},l.a.createElement(y.a,{className:"header-icon"}))),te,l.a.createElement(p.a,{className:se},l.a.createElement(p.a,{className:"item"},l.a.createElement(ie.a,{className:"footer-icon"})),l.a.createElement(p.a,{className:"item"},l.a.createElement(de.a,{className:"footer-icon"})),l.a.createElement(p.a,{className:"item",onClick:function(){n(1)}},l.a.createElement(pe.a,{className:"footer-icon"})))))))},Ae=t(53),Le=t.n(Ae),We=t(102),Re=t(187),Ie=t(183),De=t(193),Me=t(184),Te=t(185),Ve=t(105),Je=t.n(Ve),Be=t(106),He=t.n(Be),Qe=t(104),ze=t.n(Qe),Ue=t(107),Ke=t.n(Ue),_e=Object(u.g)((function(){var e=Object(c.useState)(!1),a=Object(E.a)(e,2),t=a[0],n=a[1],r=Object(u.f)(),s=function(){n(!t)},o=function(e){n(!1),r.push(e)},m=function(){var e=Object(We.a)(Le.a.mark((function e(){return Le.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Se.a.get("/api/logout");case 3:n(!1),r.replace("/login"),e.next=11;break;case 7:e.prev=7,e.t0=e.catch(0),n(!1),r.replace("/login");case 11:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();return l.a.createElement("div",{className:"navbar-block"},l.a.createElement(re.a,{onClick:s},l.a.createElement(ze.a,null)),l.a.createElement(Re.a,{anchor:"left",open:t,onOpen:s,onClose:s,className:"drawer"},l.a.createElement(Ie.a,{className:"nav-menu"},l.a.createElement(De.a,{button:!0,onClick:function(){return o("/")}},l.a.createElement(Me.a,null,l.a.createElement(Je.a,null)),l.a.createElement(Te.a,{primary:"Home"})),l.a.createElement(De.a,{button:!0,onClick:function(){return o("/resume")}},l.a.createElement(Me.a,null,l.a.createElement(He.a,null)),l.a.createElement(Te.a,{primary:"Resume"})),l.a.createElement(De.a,{button:!0,onClick:m},l.a.createElement(Me.a,null,l.a.createElement(Ke.a,null)),l.a.createElement(Te.a,{primary:"Logout"})))))})),qe=t(186),Fe=t(190),Xe=t(48),Ye=t(108),Ge=t.n(Ye),Ze=function(e){Object(c.useEffect)((function(){document.body.style.background="#ececec"}),[]);var a=$e.contact.map((function(e,a){return l.a.createElement(p.a,{className:"contact-detail",key:a},e.name,": ",e.value)})),t=$e.summary.map((function(e,a){return l.a.createElement(p.a,{className:"summary-detail",key:a},e)})),n=$e.skills.map((function(e,a){for(var t=[],n=0;n<5;n++){var c=n<e.level?"":"hidden-star";t.push(l.a.createElement(Ge.a,{key:n,className:c}))}var r=l.a.createElement("span",null,t);return l.a.createElement(p.a,{display:"flex",flexBasis:"50%",justifyContent:"space-between",key:a},l.a.createElement(Xe.a,null,e.name),l.a.createElement(Xe.a,null,r))})),r=$e.education.map((function(e,a){return l.a.createElement(qe.a,{item:!0,xs:12,key:a},l.a.createElement(Fe.a,{xsDown:!0},l.a.createElement(p.a,{display:"flex",paddingTop:"10px",fontSize:"16px",fontWeight:"bold",justifyContent:"space-between"},l.a.createElement("div",null,e.degree),l.a.createElement("div",null,e.time))),l.a.createElement(Fe.a,{smUp:!0},l.a.createElement(p.a,{display:"block",paddingTop:"10px",fontSize:"16px",fontWeight:"bold"},l.a.createElement("div",null,e.degree),l.a.createElement("div",null,e.time))),l.a.createElement(p.a,null,e.name))})),s=$e.employments.sort((function(e,a){return a.id-e.id})).map((function(e,a){var t=e.description.map((function(e,a){return l.a.createElement("div",{className:"description",key:a},e)}));return l.a.createElement(qe.a,{item:!0,xs:12,key:a},l.a.createElement(Fe.a,{only:"xs"},l.a.createElement(p.a,{display:"flex",fontSize:"16px",justifyContent:"space-between"},l.a.createElement("div",null,e.name),l.a.createElement("div",null,e.time))),l.a.createElement(Fe.a,{smUp:!0},l.a.createElement(p.a,{display:"block",className:"bold-font"},l.a.createElement("div",null,e.name),l.a.createElement("div",null,e.time))),l.a.createElement("div",{className:"position"},e.position),l.a.createElement("div",{className:"description-block"},t))}));return l.a.createElement(f.a,{className:"resume",maxWidth:"lg"},l.a.createElement(p.a,{className:"section contact"},l.a.createElement(p.a,{className:"header"},$e.name),a),l.a.createElement(p.a,{className:"section summary"},l.a.createElement(p.a,{className:"header"},"Summary"),t),l.a.createElement(p.a,{className:"section skill-list"},l.a.createElement(p.a,{className:"header"},"Skills"),l.a.createElement(p.a,{display:"flex",flexWrap:"wrap",marginTop:"10px"},n)),l.a.createElement(p.a,{className:"section education"},l.a.createElement(p.a,{className:"header"},"Education"),r),l.a.createElement(p.a,{className:"section visa"},l.a.createElement(p.a,{className:"header"},"Visa"),l.a.createElement("div",{className:"visa-name"},"Permanent Resident in Australia")),l.a.createElement(p.a,{className:"section employments"},l.a.createElement(p.a,{className:"header"},"Employment History"),s))},$e={contact:[{name:"Cell Phone",value:"+61433995186"},{name:"Email",value:"yu.eric.pan@gmail.com"},{name:"Address",value:"Melbourne, Australia"}],summary:["A creative and highly reliable Bachelor of Science (computer science) graduate having academic training and hands-on experience in computer programming.","A skilled candidate having experience in object-oriented programming languages including C#, Python and website development using HTML5, CSS3, SCSS, LESS, Vue.js, Vuex, React.js, Redux, JavaScript(ES6) ASP.Net MVC, Azure and Django.","A quick learner who is willing and able to learn new technologies fast."],skills:[{name:"C#",level:4},{name:"ASP.NET Core",level:4},{name:"React.js/Redux",level:4},{name:"JavaScript(ES6)",level:4},{name:"TypeScript",level:2},{name:"Vue.js/Vuex",level:4},{name:"HTML/CSS3",level:4},{name:"Python (Django)",level:3},{name:"Java",level:2},{name:"C++/C",level:1},{name:"SQL Server",level:2},{name:"Angular7",level:3},{name:"Less",level:3},{name:"SCSS",level:3},{name:"PHP",level:1}],education:[{name:"Flinders University",time:"2012/07 - 2015/12",degree:"Bachelor of Science(Computer Science)"}],employments:[{id:1,name:"Sino Ease Pty Ltd, Adelaide, Australia",time:"08/2016 \u2013 02/2017",position:"Programmer",description:["Worked on database design and implementation","Built website using Django Framework","Wrote back-end code in Python and PHP","Developed front-end  using Jquery","Developed plugins using Jquery"]},{id:2,name:"Sirius Valley, Qingdao, China",time:"06/2017 \u2013 07/2017",position:"Programmer",description:["Built Mobile Application using Cordova and IONIC","Wrote static web pages using HTML and LESS","Wrote back-end code in PHP"]},{id:3,name:"ReSource Pro (RSP) LLC, Qingdao, China",time:"07/2017 - 06/2019",position:"Associate Software Engineer",description:["Designed and developed websites using C#, ASP.NET Core, JavaScript and Vue.js/Vuex","Built WEB APIs using EPPLUS library that read and write excel files","Built WEB APIs using OpenXML library that read and write word files","Wrote SQL code for SQL SERVER","Wrote HTML/LESS for websites","Wrote ducuments for applications"]},{id:4,name:"KeyNinja, Melbourne, Australia",time:"08/2019 - 03/2020",position:"Web Developer",description:["Developed management platforms using C#, ASP.NET Core, Javascript(ES6), React.js and Redux","Wrote SQL code for SQL SERVER","Writing HTML/SCSS for websites","Writing Restful Web APIs using ASP.NET Core WEB API","Developing the mobile application using React Native"]},{id:5,name:"Onyx Tyres Wholesale, Melbourne, Australia",time:"05/2020 - 11/2020",position:"Web Developer",description:["Developed the front end of the internal management system using Vue2.0/Vuex","Developed Sales Platform using Restful Web APIs and React.js/redux"]},{id:6,name:"Stadium Sports, Melbourne, Australia",time:"12/2020 - Present",position:"Developer",description:["Developed ERP system using C#, ASP.NET Core 3.0 and React.js/redux","Designed and maintained the SQL SERVER database"]}],name:"Yu Pan"},ea=t(191),aa=t(109),ta=t.n(aa),na=t(110),ca=t.n(na),la=function(){var e=Object(c.useState)(""),a=Object(E.a)(e,2),t=a[0],n=a[1],r=Object(c.useState)(""),s=Object(E.a)(r,2),o=s[0],m=s[1],i=Object(u.f)();Object(c.useEffect)((function(){document.body.style.background="white"}),[]);var d=function(){Se.a.post("/api/login",{username:t,password:o}).then((function(e){i.replace("/")})).catch((function(e){console.log("error")}))},f=function(e){"Enter"===e.key&&d()};return l.a.createElement(p.a,{className:"login"},l.a.createElement(p.a,{className:"frame"},l.a.createElement(p.a,{className:"header"},"Login"),l.a.createElement(p.a,{className:"row"},l.a.createElement(p.a,{className:"label-box"},l.a.createElement(ta.a,null)),l.a.createElement(ea.a,{value:t,name:"username",className:"input-box",onChange:function(e){n(e.target.value)},onKeyPress:f,type:"text",placeholder:"Username"})),l.a.createElement(p.a,{className:"row"},l.a.createElement(p.a,{className:"label-box"},l.a.createElement(ca.a,null)),l.a.createElement(ea.a,{value:o,name:"password",className:"input-box",onChange:function(e){m(e.target.value)},onKeyPress:f,type:"password",placeholder:"Password"})),l.a.createElement(p.a,{className:"button-row"},l.a.createElement(re.a,{variant:"contained",color:"primary",onClick:d},"Submit"))))},ra=function(e){return l.a.createElement(i.a,null,l.a.createElement(_e,null),l.a.createElement("div",{className:"main"},l.a.createElement(u.c,null,l.a.createElement(u.a,{exact:!0,path:"/",component:Pe}),l.a.createElement(u.a,{exact:!0,path:"/resume",component:Ze}),l.a.createElement(u.a,{exact:!0,path:"/login",component:la}))))},sa=(t(149),{isModalOpen:!1,modalContent:"",currentWord:""}),oa=Object(m.b)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:sa,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"OPEN_MODAL":return Object(n.a)(Object(n.a)({},e),{},{isModalOpen:!0,modalContent:a.payload});case"CLOSE_MODAL":return Object(n.a)(Object(n.a)({},e),{},{isModalOpen:!1,modalContent:""});case"SET_WORD":return Object(n.a)(Object(n.a)({},e),{},{currentWord:a.payload});default:return e}}));s.a.render(l.a.createElement(o.a,{store:oa},l.a.createElement(ra,null)),document.getElementById("root"))},69:function(e,a,t){e.exports=t.p+"static/media/bg-gta5.aa265f18.jpg"},70:function(e,a,t){e.exports=t.p+"static/media/bg-cell-phone.b04c611c.jpg"}},[[120,1,2]]]);
//# sourceMappingURL=main.100d351d.chunk.js.map