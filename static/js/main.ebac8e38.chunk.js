(this["webpackJsonpmy-react-app1"]=this["webpackJsonpmy-react-app1"]||[]).push([[0],{125:function(e,t,n){"use strict";n.d(t,"a",(function(){return m})),n.d(t,"c",(function(){return d})),n.d(t,"d",(function(){return p})),n.d(t,"e",(function(){return g}));var a=n(10),r=n.n(a),i=n(20),o=n(42),s=n(5),c=n(23),u="profile/ADD-POST",l={posts:[{id:1,message:"Hello everyone!",likeCount:15},{id:2,message:"I can swimming!!!",likeCount:20},{id:3,message:"I am happy!!!",likeCount:18},{id:4,message:"I like travelling!!!",likeCount:35},{id:5,message:"I like travelling!!!!!!!!!!!!!!!!!",likeCount:30},{id:5,message:"I like travelling!!!!!!!!!!!!!!!!!",likeCount:31},{id:10,message:"I likkkk kkkkkkk",likeCount:1}],activeProfile:null,status:""},m=function(e){return{type:u,postText:e}},f=function(e){return{type:"profile/GET_USER_STATUS",status:e}},d=function(e){return function(){var t=Object(i.a)(r.a.mark((function t(n){var a;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.b.getUserProfile(e);case 2:a=t.sent,n({type:"profile/SET_USER_PROFILE",userProfile:a});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},p=function(e){return function(){var t=Object(i.a)(r.a.mark((function t(n){var a;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.c.getUserStatus(e);case 2:a=t.sent,n(f(a));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},g=function(e){return function(){var t=Object(i.a)(r.a.mark((function t(n){return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.c.updateUserStatus(e);case 2:0===t.sent&&n(f(e));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case u:var n={id:5,message:t.postText,likeCount:0};return Object(s.a)(Object(s.a)({},e),{},{posts:[].concat(Object(o.a)(e.posts),[n]),newPostText:""});case"profile/DELETE-POST":return Object(s.a)(Object(s.a)({},e),{},{posts:e.posts.filter((function(e){return e.id!==t.postId}))});case"profile/SET_USER_PROFILE":return Object(s.a)(Object(s.a)({},e),{},{activeProfile:t.userProfile});case"profile/GET_USER_STATUS":return Object(s.a)(Object(s.a)({},e),{},{status:t.status});default:return e}}},126:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var a=n(42),r=n(5),i={dialogs:[{id:1,name:"Tom"},{id:2,name:"Sergy"},{id:3,name:"Andre"},{id:4,name:"Ric"},{id:5,name:"Sofa"},{id:6,name:"Sofa"},{id:7,name:"Sof"},{id:8,name:"Sofic"}],messages:[{id:1,message:"hi"},{id:2,message:"How are you ?"},{id:3,message:"How are you ?"},{id:4,message:"How are you ?"}]},o=function(e){return{type:"dialogs/ADD-MESSAGE",newMessageText:e}};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:i,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"dialogs/ADD-MESSAGE":var n={id:5,message:t.newMessageText};return Object(r.a)(Object(r.a)({},e),{},{messages:[].concat(Object(a.a)(e.messages),[n]),newMessageText:""});default:return e}}},133:function(e,t,n){e.exports={user_list:"Users_user_list__1U5s4"}},134:function(e,t,n){e.exports=n.p+"static/media/userAvatar.381ec006.jpg"},135:function(e,t,n){e.exports=n.p+"static/media/preloader.ec28acd5.svg"},136:function(e,t,n){e.exports={activePage:"Paginator_activePage__3wkKv"}},137:function(e,t,n){e.exports={incorectData:"Login_incorectData__1QCu1"}},14:function(e,t,n){e.exports={nav:"Navbar_nav__8-EDM",item:"Navbar_item__2MeD1",activeLink:"Navbar_activeLink__ow3Ge",settings:"Navbar_settings__llQE3"}},165:function(e,t,n){e.exports=n(292)},170:function(e,t,n){},171:function(e,t,n){},19:function(e,t,n){e.exports={user_block:"User_user_block__mJFib",userFirst:"User_userFirst__1zHoy",userAvatar:"User_userAvatar__2PvFp",user__name:"User_user__name__2KWaT",btn:"User_btn__2LwpX",user__info:"User_user__info__rNd0d",user__info_left:"User_user__info_left__1vYoV",user__info_right:"User_user__info_right__1XZya"}},23:function(e,t,n){"use strict";n.d(t,"b",(function(){return i})),n.d(t,"c",(function(){return o})),n.d(t,"a",(function(){return s}));var a=n(132),r=n.n(a).a.create({withCredentials:!0,baseURL:"https://social-network.samuraijs.com/api/1.0/",headers:{"API-KEY":"e2dd59c9-366a-4705-bbf0-f5a55b8408d5"}}),i={getUsers:function(e,t){return r.get("users?page=".concat(e,"&count=").concat(t)).then((function(e){return e.data}))},getUsersPage:function(e,t){return r.get("users?page=".concat(e,"&count=").concat(t)).then((function(e){return e.data}))},getUserProfile:function(e){return r.get("profile/".concat(e)).then((function(e){return e.data}))},follow:function(e){return r.post("follow/".concat(e))},unfollow:function(e){return r.delete("follow/".concat(e))}},o={getUserStatus:function(e){return r.get("profile/status/".concat(e)).then((function(e){return e.data}))},updateUserStatus:function(e){return r.put("profile/status",{status:e}).then((function(e){return e.data}))}},s={auth:function(){return r.get("/auth/me")},login:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return r.post("/auth/login",{email:e,password:t,rememberMe:n})},logout:function(){return r.delete("/auth/login")}}},292:function(e,t,n){"use strict";n.r(t);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var a=n(0),r=n.n(a),i=n(63),o=n.n(i),s=(n(170),n(34)),c=n(35),u=n(37),l=n(36),m=(n(171),n(8)),f=n(13),d=n(14),p=n.n(d),g=n(12),b=n(88),v=n.n(b),_=n(89),E=n.n(_),h=function(e){return r.a.createElement("div",{className:E.a.friend_item},r.a.createElement("div",{className:E.a.avatar},r.a.createElement("img",{alt:"friend-img",src:"https://media.gettyimages.com/photos/woman-lifts-her-arms-in-victory-mount-everest-national-park-picture-id507910624?s=612x612"})),r.a.createElement("div",null,r.a.createElement(f.b,{to:"#f"},e.name)))},O=function(e){var t=e.friends.map((function(e){return r.a.createElement(h,{id:e.id,name:e.name})}));return r.a.createElement("div",{className:v.a.sidebar_block},r.a.createElement("h2",null,"Friends"),r.a.createElement("div",{className:v.a.friends_block},t))},w=Object(g.b)((function(e){return{friends:e.sidebar.friends}}),(function(e){return{}}))(O),j=function(e){return r.a.createElement("nav",{className:p.a.nav},r.a.createElement("div",{className:p.a.item},r.a.createElement(f.b,{to:"/profile",activeClassName:p.a.activeLink},"Profile")),r.a.createElement("div",{className:p.a.item},r.a.createElement(f.b,{to:"/dialogs",activeClassName:p.a.activeLink},"Messages")),r.a.createElement("div",{className:p.a.item},r.a.createElement(f.b,{to:"/news",activeClassName:p.a.activeLink},"News")),r.a.createElement("div",{className:p.a.item},r.a.createElement(f.b,{to:"/music",activeClassName:p.a.activeLink},"Music")),r.a.createElement("div",{className:p.a.item},r.a.createElement(f.b,{to:"/users",activeClassName:p.a.activeLink},"Find users")),r.a.createElement("div",{className:"".concat(p.a.item," ").concat(p.a.settings)},r.a.createElement(f.b,{to:"/settings",activeClassName:p.a.activeLink},"Settings")),r.a.createElement(w,null))},k=n(5),C=n(23),S=n(10),N=n.n(S),y=n(20),P=n(54),U={id:null,email:null,login:null,isLogined:!1},L=function(e,t,n,a){return{type:"header/SET_USER_DATA",payload:{id:e,email:t,login:n,isAuth:a}}},T=function(){return function(){var e=Object(y.a)(N.a.mark((function e(t){var n;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C.a.auth();case 2:0===(n=e.sent).data.resultCode&&t(L(n.data.data.id,n.data.data.email,n.data.data.login,!0));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},x=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:U,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"header/SET_USER_DATA":return Object(k.a)(Object(k.a)(Object(k.a)({},e),t.payload),{},{isLogined:t.payload.isAuth});default:return e}},F={initialized:!1},I=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:F,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"app/INITIALIZED_SUCCESS":return Object(k.a)(Object(k.a)({},e),{},{initialized:!0});default:return e}},A=n(42),D=function(e,t,n){return e.map((function(e){return e.id===t?Object(k.a)(Object(k.a)({},e),{},{followed:n}):e}))},G="users/FOLLOW",M={users:[],pageNumber:1,usersCount:5,totalUsersCount:0,isFetching:!1,isFollowingProc:[]},R=function(e){return{type:G,userId:e}},z=function(e){return{type:"users/UNFOLLOW",userId:e}},H=function(e){return{type:"users/SET_USERS_COUNT",usersCount:e}},W=function(e){return{type:"users/TOGGLE_IS_FETCHING",isFetching:e}},X=function(e,t){return{type:"users/TOGGLE_FOLLOWING",isFetching:e,id:t}},J=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:M,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case G:return Object(k.a)(Object(k.a)({},e),{},{users:D(e.users,t.userId,!0)});case"users/UNFOLLOW":return Object(k.a)(Object(k.a)({},e),{},{users:D(e.users,t.userId,!1)});case"users/SET_USERS":return Object(k.a)(Object(k.a)({},e),{},{users:t.users});case"users/SET_PAGE":return Object(k.a)(Object(k.a)({},e),{},{pageNumber:t.page});case"users/SET_USERS_COUNT":return Object(k.a)(Object(k.a)({},e),{},{totalUsersCount:t.usersCount});case"users/TOGGLE_IS_FETCHING":return Object(k.a)(Object(k.a)({},e),{},{isFetching:t.isFetching});case"users/TOGGLE_FOLLOWING":return Object(k.a)(Object(k.a)({},e),{},{isFollowingProc:t.isFetching?[].concat(Object(A.a)(e.isFollowingProc),[t.id]):e.isFollowingProc.filter((function(e){return e!==t.id}))});default:return e}},Y=function(e){return e.usersPage.users},B=function(e){return e.usersPage.pageNumber},K=function(e){return e.usersPage.usersCount},Q=function(e){return e.usersPage.totalUsersCount},Z=function(e){return e.usersPage.isFetching},V=function(e){return e.usersPage.isFollowingProc},q=n(133),$=n.n(q),ee=n(19),te=n.n(ee),ne=n(134),ae=n.n(ne),re=function(e){var t=e.userPrep,n=e.isFollowingProc,a=e.unfollow,i=e.follow;return r.a.createElement("div",{className:te.a.user_block},r.a.createElement("div",{className:te.a.userFirst},r.a.createElement(f.b,{to:"/profile/".concat(t.id)},r.a.createElement("img",{alt:"avatar",className:te.a.userAvatar,src:null!=t.photos.small?t.photos.small:ae.a})),t.followed?r.a.createElement("button",{disabled:n.some((function(e){return e===t.id})),onClick:function(){a(t.id)},className:te.a.btn},"Unfollow"):r.a.createElement("button",{disabled:n.some((function(e){return e===t.id})),onClick:function(){i(t.id)},className:te.a.btn},"Follow")),r.a.createElement("div",{className:te.a.user__info},r.a.createElement("div",{className:te.a.user__info_left},r.a.createElement("h2",null,r.a.createElement("span",{className:te.a.user__name},t.name),r.a.createElement("span",null,t.surname)),r.a.createElement("p",{className:te.a.user__status},t.status)),r.a.createElement("div",{className:te.a.user__info_right},r.a.createElement("p",{className:te.a.user__country}),r.a.createElement("p",{className:te.a.user__city}))))},ie=n(45),oe=n(129),se=n(136),ce=n.n(se),ue=function(e){var t=e.totalItemsCount,n=e.itemsCountOnPage,i=e.countOfPagesOnPage,o=void 0===i?10:i,s=e.pageNumber,c=e.pageChanged,u=Math.ceil(t/n),l=Object(a.useState)(1),m=Object(oe.a)(l,2),f=m[0],d=m[1],p=f*o,g=p-o+1,b=new Array(u).fill(1).map((function(e,t){return t+1})).slice(g-1,p).map((function(e){return r.a.createElement("span",{className:s===e?ce.a.activePage:"",onClick:function(){c(e)}},e)}));return r.a.createElement("div",null,f*o>o&&r.a.createElement("button",{onClick:function(){d(f-1)}},"Prev"),b,f*o<u&&r.a.createElement("button",{onClick:function(){d(f+1)}},"Next"))},le=function(e){var t=e.users.map((function(t){return r.a.createElement(re,{follow:e.follow,unfollow:e.unfollow,isFollowingProc:e.isFollowingProc,key:t.id,userPrep:t})}));return r.a.createElement("div",{className:$.a.user_list},r.a.createElement(ue,{pageNumber:e.pageNumber,pageChanged:e.pageChanged,totalItemsCount:e.totalUsersCount,itemsCountOnPage:e.usersCount,countOfPagesOnPage:10}),r.a.createElement("div",null,t))},me=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).pageChanged=function(t){var n=e.props.usersCount;e.props.getUsers(t,n)},e}return Object(c.a)(n,[{key:"componentDidMount",value:function(){var e=this.props,t=e.pageNumber,n=e.usersCount;this.props.getUsers(t,n)}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,this.props.isFetching?r.a.createElement(ie.a,null):null,r.a.createElement(le,Object.assign({},this.props,{pageChanged:this.pageChanged})))}}]),n}(r.a.Component),fe=Object(g.b)((function(e){return{users:Y(e),pageNumber:B(e),usersCount:K(e),totalUsersCount:Q(e),isFetching:Z(e),isFollowingProc:V(e)}}),{followSuccess:R,unfollowSuccess:z,toggle_following_proc:X,getUsers:function(e,t){return function(){var n=Object(y.a)(N.a.mark((function n(a){var r;return N.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return a(W(!0)),a({type:"users/SET_PAGE",page:e}),n.next=4,C.b.getUsers(e,t);case 4:r=n.sent,a(W(!1)),a({type:"users/SET_USERS",users:r.items}),a(H(r.totalCount));case 8:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},follow:function(e){return function(){var t=Object(y.a)(N.a.mark((function t(n){return N.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n(X(!0,e)),n(R(e)),n(X(!1,e));case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},unfollow:function(e){return function(){var t=Object(y.a)(N.a.mark((function t(n){return N.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n(X(!0,e)),n(z(e)),n(X(!1,e));case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}})(me),de=n(69),pe=n.n(de),ge=function(e){return r.a.createElement("header",{className:pe.a.header},r.a.createElement("img",{src:"https://www.logo.wine/a/logo/PlayStation/PlayStation-Logo.wine.svg",alt:"logo"}),r.a.createElement("div",{className:pe.a.logining},e.isLogined?r.a.createElement("div",null,r.a.createElement("span",null,e.login),r.a.createElement("button",{onClick:e.logout},"Logout")):r.a.createElement(f.b,{to:"/login",className:pe.a.login},"Login")))},be=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return r.a.createElement(ge,this.props)}}]),n}(r.a.Component),ve=Object(g.b)((function(e){return{isLogined:e.auth.isLogined,login:e.auth.login}}),{logout:function(){return function(){var e=Object(y.a)(N.a.mark((function e(t){return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C.a.logout();case 2:0===e.sent.data.resultCode&&t(L(null,null,null,!1));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}})(be),_e=n(127),Ee=n(128),he=n(64),Oe=n(65),we=n(137),je=n.n(we),ke=Object(he.a)(25),Ce=Object(Ee.a)({form:"login"})((function(e){return r.a.createElement("form",{onSubmit:e.handleSubmit},r.a.createElement("div",null,r.a.createElement(_e.a,{name:"email",placeholder:"email",validate:[he.b,ke],component:Oe.a})),r.a.createElement("div",null,r.a.createElement(_e.a,{name:"password",placeholder:"password",validate:[he.b,ke],component:Oe.a})),r.a.createElement("div",null,r.a.createElement(_e.a,{component:Oe.a,name:"rememberMe",type:"checkbox"})," remember me"),e.error&&r.a.createElement("div",{className:je.a.incorectData},e.error),r.a.createElement("button",{type:"submit"},"Login"))})),Se=Object(g.b)((function(e){return{isLogined:e.auth.isLogined}}),{login:function(e,t,n){return function(){var a=Object(y.a)(N.a.mark((function a(r){var i,o,s;return N.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,C.a.login(e,t,n);case 2:0===(i=a.sent).data.resultCode?r(T()):(o=i.data.resultCode?i.data.messages[0]:"Some error",s=Object(P.a)("login",{_error:o}),r(s));case 5:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}()}})((function(e){return e.isLogined?r.a.createElement(m.a,{to:"/profile"}):r.a.createElement("div",null,r.a.createElement("h1",null,"Login"),r.a.createElement(Ce,{onSubmit:function(t){e.login(t.email,t.password,t.rememberMe)}}))})),Ne=n(9),ye=n(139),Pe=n(130),Ue=n(125),Le=n(126),Te={friends:[{id:1,name:"Mot"},{id:2,name:"Tic"},{id:3,name:"Dartonian"}]},xe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Te;return e},Fe=Object(Ne.c)({profilePage:Ue.b,dialogsPage:Le.b,sidebar:xe,usersPage:J,auth:x,app:I,form:Pe.a}),Ie=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||Ne.d,Ae=Object(Ne.e)(Fe,Ie(Object(Ne.a)(ye.a)));window.store=Ae;var De=Ae,Ge=function(e){return function(t){return r.a.createElement(r.a.Suspense,{fallback:r.a.createElement("div",null,"Loading...")},r.a.createElement(e,t))}},Me=r.a.lazy((function(){return n.e(4).then(n.bind(null,302))})),Re=r.a.lazy((function(){return n.e(3).then(n.bind(null,301))})),ze=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"componentDidMount",value:function(){this.props.initialize()}},{key:"render",value:function(){return this.props.initialized?r.a.createElement("div",{className:"app-wrapper"},r.a.createElement(ve,null),r.a.createElement(j,{store:this.props.store}),r.a.createElement("div",{className:"app-wrapper-content"},r.a.createElement(m.b,{path:"/profile/:userID?",render:Ge(Re)}),r.a.createElement(m.b,{exact:!0,path:"/dialogs",render:Ge(Me)}),r.a.createElement(m.b,{path:"/users",render:function(){return r.a.createElement(fe,null)}}),r.a.createElement(m.b,{path:"/login",render:function(){return r.a.createElement(Se,null)}}))):r.a.createElement(ie.a,null)}}]),n}(r.a.Component),He=Object(g.b)((function(e){return{initialized:e.app.initialized}}),{initialize:function(){return function(e){var t=e(T());Promise.all([t]).then((function(){e({type:"app/INITIALIZED_SUCCESS"})}))}}})(ze),We=function(e){return r.a.createElement(f.a,null,r.a.createElement(g.a,{store:De},r.a.createElement(He,null)))};o.a.render(r.a.createElement(We,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},45:function(e,t,n){"use strict";var a=n(0),r=n.n(a),i=n(135),o=n.n(i);t.a=function(e){return r.a.createElement("div",null,r.a.createElement("img",{alt:"preloader",src:o.a}))}},53:function(e,t,n){e.exports={formControll:"FormsControls_formControll__3hB0Y",error:"FormsControls_error__39wOD"}},64:function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return r}));var a=function(e){return e?void 0:"Required field"},r=function(e){return function(t){return t&&t.length<e?void 0:"Must be text less then ".concat(e," signs")}}},65:function(e,t,n){"use strict";n.d(t,"b",(function(){return c})),n.d(t,"a",(function(){return u}));var a=n(94),r=n(0),i=n.n(r),o=n(53),s=n.n(o),c=function(e){var t=e.input,n=e.meta,r=Object(a.a)(e,["input","meta"]),o=n.error&&n.touched;return i.a.createElement("div",{className:"".concat(s.a.formControll," ").concat(o?s.a.error:"")},i.a.createElement("textarea",Object.assign({},t,r,{type:"textarea"})),o&&i.a.createElement("span",null,n.error))},u=function(e){var t=e.input,n=e.meta,r=Object(a.a)(e,["input","meta"]),o=n.error&&n.touched;return i.a.createElement("div",{className:"".concat(s.a.formControll," ").concat(o?s.a.error:"")},i.a.createElement("input",Object.assign({},t,r)),o&&i.a.createElement("span",null,n.error))}},69:function(e,t,n){e.exports={header:"Header_header__3gpvX",login:"Header_login__1ghWP"}},88:function(e,t,n){e.exports={sidebar_block:"Sidebar_sidebar_block__2bvp2",friends_block:"Sidebar_friends_block__3XSQe"}},89:function(e,t,n){e.exports={avatar:"FriendItem_avatar__2J5Yg",friend_item:"FriendItem_friend_item__3hwzL"}}},[[165,1,2]]]);
//# sourceMappingURL=main.ebac8e38.chunk.js.map