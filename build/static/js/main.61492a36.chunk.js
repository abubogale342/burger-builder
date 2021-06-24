(this.webpackJsonpburger_builder_project=this.webpackJsonpburger_builder_project||[]).push([[0],[,,function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"n",(function(){return i})),n.d(t,"p",(function(){return c})),n.d(t,"f",(function(){return a})),n.d(t,"l",(function(){return o})),n.d(t,"k",(function(){return s})),n.d(t,"j",(function(){return u})),n.d(t,"m",(function(){return d})),n.d(t,"i",(function(){return l})),n.d(t,"h",(function(){return j})),n.d(t,"g",(function(){return b})),n.d(t,"d",(function(){return h})),n.d(t,"e",(function(){return p})),n.d(t,"b",(function(){return f})),n.d(t,"c",(function(){return g})),n.d(t,"o",(function(){return O}));var r="ADD_INGREDIENT",i="REMOVE_INGREDIENT",c="SET_INGREDIENTS",a="FETCH_INGREDIENTS_FAILED",o="PURCHASE_BURGER_SUCCESS",s="PURCHASE_BURGER_START",u="PURCHASE_BURGER_FAIL",d="PURCHASE_INIT",l="FETCH_ORDERS_SUCCESS",j="FETCH_ORDERS_START",b="FETCH_ORDERS_FAIL",h="AUTH_START",p="AUTH_SUCCESS",f="AUTH_FAIL",g="AUTH_LOGOUT",O="SET_AUTH_REDIRECT_PATH"},,,,function(e,t,n){"use strict";n.d(t,"b",(function(){return i})),n.d(t,"a",(function(){return c}));var r=n(5),i=function(e,t){return Object(r.a)(Object(r.a)({},e),t)},c=function(e,t){var n=!0;if(!t)return!0;if(t.required&&(n=""!==e.trim()&&n),t.minLength&&(n=e.length>=t.minLength&&n),t.maxLength&&(n=e.length<=t.maxLength&&n),t.isEmail){n=/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/.test(e)&&n}if(t.isNumeric){n=/^\d+$/.test(e)&&n}return n}},,,,,,,function(e,t,n){"use strict";t.a=function(e){return e.children}},,,,,function(e,t,n){"use strict";n.d(t,"a",(function(){return c})),n.d(t,"i",(function(){return a})),n.d(t,"e",(function(){return o})),n.d(t,"g",(function(){return u})),n.d(t,"h",(function(){return d})),n.d(t,"d",(function(){return l})),n.d(t,"b",(function(){return g})),n.d(t,"f",(function(){return p})),n.d(t,"j",(function(){return O})),n.d(t,"c",(function(){return m}));var r=n(2),i=n(20),c=function(e){return{type:r.a,ingredientName:e}},a=function(e){return{type:r.n,ingredientName:e}},o=function(){return function(e){i.a.get("https://udemy-tutor-default-rtdb.firebaseio.com/ingredients.json").then((function(t){var n;e((n=t.data,{type:r.p,ingredients:n}))})).catch((function(t){e({type:r.f})}))}},s=n(5),u=function(e,t){return function(n){n({type:r.k}),i.a.post("/orders.json?auth="+t,e).then((function(t){n(function(e,t){return{type:r.l,orderId:e,data:t}}(t.data.name,e))})).catch((function(e){n(function(e){return{type:r.j,error:e}}(e))}))}},d=function(){return{type:r.m}},l=function(e,t){return function(n){n({type:r.h});var c="?auth="+e+'&orderBy="userId"&equalTo="'+t+'"';i.a.get("/orders.json"+c).then((function(e){var t,i=[],c=e.data;for(var a in c)i.push(Object(s.a)({id:a},c[a]));n((t=i,{type:r.i,orders:t}))})).catch((function(e){!function(e){r.g}(e)}))}},j=n(30),b=n.n(j),h=function(e,t){return{type:r.e,idToken:e,userId:t}},p=function(){return localStorage.removeItem("token"),localStorage.removeItem("expirationDate"),localStorage.removeItem("userId"),{type:r.c}},f=function(e){return function(t){setTimeout((function(){t(p())}),1e3*e)}},g=function(e,t,n){return function(i){i({type:r.d});var c={email:e,password:t,returnSecureToken:!0},a="https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyA9l9y555F8pg3JBQEXvgukD9I_WPhioTo";n||(a="https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyA9l9y555F8pg3JBQEXvgukD9I_WPhioTo"),b.a.post(a,c).then((function(e){var t=new Date((new Date).getTime()+1e3*e.data.expiresIn);localStorage.setItem("token",e.data.idToken),localStorage.setItem("expirationDate",t),localStorage.setItem("userId",e.data.localId),i(h(e.data.idToken,e.data.localId)),i(f(e.data.expiresIn))})).catch((function(e){var t;i((t=e.response.data.error,{type:r.b,error:t}))}))}},O=function(e){return{type:r.o,path:e}},m=function(){return function(e){var t=localStorage.getItem("token");if(t){var n=new Date(localStorage.getItem("expirationDate"));if(n<=new Date)e(p());else{var r=localStorage.getItem("userId");e(h(t,r)),e(f((n.getTime()-(new Date).getTime())/1e3))}}else e(p())}}},function(e,t,n){e.exports={BreadBottom:"BurgerIngredient_BreadBottom__2US69",BreadTop:"BurgerIngredient_BreadTop__3Y4-R",Seeds1:"BurgerIngredient_Seeds1__J6vUJ",Seeds2:"BurgerIngredient_Seeds2__2Ylex",Meat:"BurgerIngredient_Meat__3flwI",Cheese:"BurgerIngredient_Cheese__3rOTJ",Salad:"BurgerIngredient_Salad__KLnhy",Bacon:"BurgerIngredient_Bacon__1KK6n"}},function(e,t,n){"use strict";var r=n(30),i=n.n(r).a.create({baseURL:"https://udemy-tutor-default-rtdb.firebaseio.com"});t.a=i},,,function(e,t,n){e.exports={SideDrawer:"SideDrawer_SideDrawer__3kXLK",Open:"SideDrawer_Open__1tCv1",Close:"SideDrawer_Close__9j7x-",Logo:"SideDrawer_Logo__3voUv"}},,,function(e,t,n){e.exports={BuildControl:"BuildControl_BuildControl__O8649",Label:"BuildControl_Label__TQkTk",Less:"BuildControl_Less__3Ttg8",More:"BuildControl_More__1MY7B"}},,,,,function(e,t,n){"use strict";var r=n(7),i=n(8),c=n(10),a=n(9),o=n(1),s=n.n(o),u=n(13),d=n(32),l=n(56),j=n.n(l),b=n(0),h=function(e){Object(c.a)(n,e);var t=Object(a.a)(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"shouldComponentUpdate",value:function(e,t){return e.show!==this.props.show||e.children!==this.props.children}},{key:"render",value:function(){return Object(b.jsxs)(u.a,{children:[Object(b.jsx)(d.a,{show:this.props.show,clicked:this.props.modalClosed}),Object(b.jsx)("div",{className:j.a.Modal,style:{transform:this.props.show?"translateY(0)":"translateY(-100vh)",opacity:this.props.show?"1":"0"},children:this.props.children})]})}}]),n}(s.a.Component);t.a=h},function(e,t,n){"use strict";n(1);var r=n(55),i=n.n(r),c=n(0);t.a=function(e){return e.show?Object(c.jsx)("div",{className:i.a.Backdrop,onClick:e.clicked}):null}},function(e,t,n){e.exports={Toolbar:"Toolbar_Toolbar__ApScI",Logo:"Toolbar_Logo__3Lk47",DesktopOnly:"Toolbar_DesktopOnly__LuPaL"}},function(e,t,n){"use strict";n(1);var r=n(38),i=n.n(r),c=n(0);t.a=function(e){return Object(c.jsx)("button",{disabled:e.disabled,className:[i.a.Button,i.a[e.btnType]].join(" "),onClick:e.clicked,children:e.children})}},,,function(e,t,n){e.exports={BuildControls:"BuildControls_BuildControls__1YmbS",OrderButton:"BuildControls_OrderButton___M-Du",enable:"BuildControls_enable__9xLsD"}},function(e,t,n){e.exports={Button:"Button_Button__3gFiX",Success:"Button_Success__2Rka1",Danger:"Button_Danger__2ogZq"}},function(e,t,n){e.exports={NavigationItem:"NavigationItem_NavigationItem__2SpXc",active:"NavigationItem_active__2v2td"}},,,function(e,t,n){"use strict";n(1);var r=n(57),i=n.n(r),c=n(0);t.a=function(){return Object(c.jsx)("div",{className:i.a.Loader,children:"Loading..."})}},function(e,t,n){"use strict";var r=n(5),i=n(7),c=n(8),a=n(10),o=n(9),s=n(1),u=n.n(s),d=n(31),l=n(13),j=n(0);t.a=function(e,t){return function(n){Object(a.a)(u,n);var s=Object(o.a)(u);function u(){var e;Object(i.a)(this,u);for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return(e=s.call.apply(s,[this].concat(n))).state={error:null,err:null},e.errorConfirmHandler=function(){e.setState({error:null})},e}return Object(c.a)(u,[{key:"componentWillMount",value:function(){var e=this;this.reqInterceptor=t.interceptors.request.use((function(t){return e.setState({error:null}),t})),this.resInterceptor=t.interceptors.response.use((function(e){return e}),(function(t){e.setState({error:t.message,err:!0})}))}},{key:"componentWillUnmount",value:function(){t.interceptors.request.eject(this.reqInterceptor),t.interceptors.response.eject(this.resInterceptor)}},{key:"render",value:function(){return Object(j.jsxs)(l.a,{children:[Object(j.jsx)(d.a,{show:this.state.error,modalClosed:this.errorConfirmHandler,children:this.state.error?this.state.error:null}),Object(j.jsx)(e,Object(r.a)(Object(r.a)({},this.props),{},{error:this.state.err}))]})}}]),u}(u.a.Component)}},,,,,,,,,function(e,t,n){"use strict";var r=n(62),i=n(1),c=n(54),a=n.n(c),o=n(7),s=n(8),u=n(10),d=n(9),l=n(19),j=n.n(l),b=n(0),h=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){var e=null;switch(this.props.type){case"bread-bottom":e=Object(b.jsx)("div",{className:j.a.BreadBottom});break;case"bread-top":e=Object(b.jsxs)("div",{className:j.a.BreadTop,children:[Object(b.jsx)("div",{className:j.a.Seeds1}),Object(b.jsx)("div",{className:j.a.Seeds2})]});break;case"meat":e=Object(b.jsx)("div",{className:j.a.Meat});break;case"cheese":e=Object(b.jsx)("div",{className:j.a.Cheese});break;case"salad":e=Object(b.jsx)("div",{className:j.a.Salad});break;case"bacon":e=Object(b.jsx)("div",{className:j.a.Bacon});break;default:e=null}return e}}]),n}(i.Component);t.a=function(e){var t=Object.keys(e.ingredients).map((function(t){return Object(r.a)(Array(e.ingredients[t])).map((function(e,n){return Object(b.jsx)(h,{type:t},t+n)}))})).reduce((function(e,t){return e.concat(t)}),[]);return 0===t.length&&(t=Object(b.jsx)("p",{children:"Please start adding ingredients!"})),Object(b.jsxs)("div",{className:a.a.Burger,children:[Object(b.jsx)(h,{type:"bread-top"}),t,Object(b.jsx)(h,{type:"bread-bottom"})]})}},,function(e,t,n){e.exports={Burger:"Burger_Burger__10T8F"}},function(e,t,n){e.exports={Backdrop:"Backdrop_Backdrop__3j6VK"}},function(e,t,n){e.exports={Modal:"Modal_Modal__1-5dN"}},function(e,t,n){e.exports={Loader:"Spinner_Loader__1twK-",load2:"Spinner_load2__2gkgc"}},function(e,t,n){e.exports={Logo:"Logo_Logo__3ME4O"}},function(e,t,n){e.exports={NavigationItems:"NavigationItems_NavigationItems__1fnFX"}},function(e,t,n){e.exports={DrawerToggle:"DrawerToggler_DrawerToggle__2jn15"}},function(e,t,n){e.exports={Content:"Layout_Content__3H3X8"}},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(e,t,n){},function(e,t,n){"use strict";n.r(t);var r=n(27),i=n(24),c=n(5),a=n(2),o=n(6),s={salad:.5,cheese:.4,meat:1.3,bacon:.7},u={ingredients:null,totalPrice:4,error:!1,building:!1},d=function(e,t){return Object(c.a)(Object(c.a)({},e),{},{ingredients:Object(c.a)(Object(c.a)({},e.ingredients),{},Object(i.a)({},t.ingredientName,e.ingredients[t.ingredientName]+1)),totalPrice:e.totalPrice+s[t.ingredientName],building:!0})},l=function(e,t){return Object(c.a)(Object(c.a)({},e),{},{ingredients:Object(c.a)(Object(c.a)({},e.ingredients),{},Object(i.a)({},t.ingredientName,e.ingredients[t.ingredientName]-1)),totalPrice:e.totalPrice-s[t.ingredientName],building:!0})},j=function(e,t){return Object(o.b)(e,{ingredients:{salad:t.ingredients.salad,bacon:t.ingredients.bacon,cheese:t.ingredients.cheese,meat:t.ingredients.meat},totalPrice:4,error:!1,building:!1})},b=function(e,t){return Object(o.b)(e,{error:!0})},h=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case a.a:return d(e,t);case a.n:return l(e,t);case a.p:return j(e,t);case a.f:return b(e);default:return e}},p=n(21),f={orders:[],loading:!1,purchased:!1},g=function(e,t){return Object(o.b)(e,{purchased:!1})},O=function(e,t){return Object(o.b)(e,{loading:!0})},m=function(e,t){var n=Object(o.b)(t.data,{id:t.id});return Object(o.b)(e,{loading:!1,orders:e.orders.concat(n),purchased:!0})},_=function(e,t){return Object(o.b)(e,{loading:!1})},v=function(e,t){return Object(o.b)(e,{loading:!0})},x=function(e,t){return Object(o.b)(e,{loading:!1,orders:t.orders})},y=function(e,t){return Object(o.b)(e,{loading:!1})},k=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case a.m:return g(e);case a.k:return O(e);case a.l:return m(e,t);case a.j:return _(e);case a.h:return v(e);case a.i:return x(e,t);case a.g:return y(e);default:return e}},S={token:null,userId:null,error:null,loading:!1,authRedirectPath:"/"},C=function(e,t){return Object(o.b)(e,{error:null,loading:!0})},I=function(e,t){return Object(o.b)(e,{token:t.idToken,userId:t.userId,error:null,loading:!1})},T=function(e,t){return Object(o.b)(e,{error:t.error,loading:!1})},B=function(e,t){return Object(o.b)(e,{token:null,userId:null})},N=function(e,t){return Object(o.b)(e,{authRedirectPath:t.path})},w=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:S,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case a.d:return C(e);case a.e:return I(e,t);case a.b:return T(e,t);case a.c:return B(e);case a.o:return N(e,t);default:return e}},D=n(17),A=n(29),L=n.n(A),R=n(53),E=n(1),P=n.n(E),H=n(7),U=n(8),M=n(10),F=n(9),z=n(0),G=function(e){return function(t){Object(M.a)(r,t);var n=Object(F.a)(r);function r(){var e;Object(H.a)(this,r);for(var t=arguments.length,i=new Array(t),c=0;c<t;c++)i[c]=arguments[c];return(e=n.call.apply(n,[this].concat(i))).state={component:null},e}return Object(U.a)(r,[{key:"componentDidMount",value:function(){var t=this;e().then((function(e){t.setState({component:e.default})}))}},{key:"render",value:function(){var e=this.state.component;return e?Object(z.jsx)(e,Object(c.a)({},this.props)):null}}]),r}(E.Component)},q=n(20),J=n(37),X=n.n(J),Y=n(26),K=n.n(Y),W=function(e){return Object(z.jsxs)("div",{className:K.a.BuildControl,children:[Object(z.jsx)("div",{className:K.a.Label,children:e.label}),Object(z.jsx)("button",{className:K.a.Less,onClick:e.removed,disabled:e.disabled,children:"Less"}),Object(z.jsx)("button",{className:K.a.More,onClick:e.added,children:"More"})]})},Q=[{label:"Salad",type:"salad"},{label:"Bacon",type:"bacon"},{label:"Cheese",type:"cheese"},{label:"Meat",type:"meat"}],$=function(e){return Object(z.jsxs)("div",{className:X.a.BuildControls,children:[Object(z.jsxs)("p",{children:["Current Price: ",Object(z.jsx)("strong",{children:e.price.toFixed(2)})]}),Q.map((function(t){return Object(z.jsx)(W,{label:t.type,added:function(){return e.ingredientAdded(t.type)},removed:function(){return e.ingredientRemoved(t.type)},disabled:e.disabled[t.type]},t.label)})),Object(z.jsx)("button",{className:X.a.OrderButton,disabled:!e.purchasable,onClick:e.ordered,children:e.isAuth?"ORDER NOW":"SIGNUP TO ORDER"})]})},V=n(52),Z=n(34),ee=n(13),te=function(e){var t=Object.keys(e.ingredients).map((function(t){return Object(z.jsx)("li",{children:Object(z.jsxs)("span",{style:{textTransform:"capitalize"},children:[t,": ",e.ingredients[t]]})},t)}));return Object(z.jsxs)(ee.a,{children:[Object(z.jsx)("h3",{children:"Your Order"}),Object(z.jsx)("p",{children:"A delicious burger with the following ingredients"}),Object(z.jsx)("ul",{children:t}),Object(z.jsx)("p",{children:Object(z.jsxs)("strong",{children:["Total Price: ",e.price.toFixed(2)]})}),Object(z.jsx)("p",{children:"Continue to Checkout?"}),Object(z.jsx)(Z.a,{btnType:"Danger",clicked:e.purchaseCancel,children:"Cancel"}),Object(z.jsx)(Z.a,{btnType:"Success",clicked:e.purchaseContinue,children:"Continue"})]})},ne=n(31),re=n(42),ie=n(18),ce=n(43),ae=function(e){Object(M.a)(n,e);var t=Object(F.a)(n);function n(){var e;Object(H.a)(this,n);for(var r=arguments.length,i=new Array(r),c=0;c<r;c++)i[c]=arguments[c];return(e=t.call.apply(t,[this].concat(i))).state={purchasing:!1},e.updatePurchaseState=function(e){return Object.keys(e).map((function(t){return e[t]})).reduce((function(e,t){return e+t}),0)>0},e.purchaseHandler=function(){e.props.isAuthenticated?e.setState({purchasing:!0}):(e.props.onSetAuthRedirectPath("/checkout"),e.props.history.push("/auth"))},e.purchaseCancelHandler=function(){e.setState({purchasing:!1})},e.purchaseContinueHandler=function(){e.props.onInitPurchased(),e.props.history.push("/checkout")},e}return Object(U.a)(n,[{key:"componentDidMount",value:function(){this.props.onIngredientInitiated()}},{key:"render",value:function(){var e=Object(c.a)({},this.props.ingredients);for(var t in e)e[t]=e[t]<=0;var n=null,r=this.props.error?Object(z.jsx)("p",{children:"Ingredients can't be loaded"}):Object(z.jsx)(re.a,{});return this.props.ingredients&&(r=Object(z.jsxs)(ee.a,{children:[Object(z.jsx)(V.a,{ingredients:this.props.ingredients}),Object(z.jsx)($,{ingredientAdded:this.props.onIngredientAdded,ingredientRemoved:this.props.onIngredientRemoved,disabled:e,price:this.props.totalPrice,ordered:this.purchaseHandler,isAuth:this.props.isAuthenticated,purchasable:this.updatePurchaseState(this.props.ingredients)})]}),n=Object(z.jsx)(te,{ingredients:this.props.ingredients,purchaseCancel:this.purchaseCancelHandler,purchaseContinue:this.purchaseContinueHandler,price:this.props.totalPrice})),Object(z.jsxs)(ee.a,{children:[Object(z.jsx)(ne.a,{show:this.state.purchasing,modalClosed:this.purchaseCancelHandler,children:n}),r]})}}]),n}(E.Component),oe=Object(D.b)((function(e){return{ingredients:e.burgerBuilder.ingredients,totalPrice:e.burgerBuilder.totalPrice,error:e.burgerBuilder.error,isAuthenticated:null!==e.auth.token}}),(function(e){return{onIngredientAdded:function(t){return e(ie.a(t))},onIngredientRemoved:function(t){return e(ie.i(t))},onIngredientInitiated:function(){return e(ie.e())},onInitPurchased:function(){return e(ie.h())},onSetAuthRedirectPath:function(t){return e(ie.j(t))}}}))(Object(ce.a)(ae,q.a)),se=n(4),ue=n(32),de=n.p+"static/media/burger-logo.ec69c7f6.png",le=n(58),je=n.n(le),be=function(e){return Object(z.jsx)("div",{className:je.a.Logo,children:Object(z.jsx)("img",{src:de,alt:"MyBurger"})})},he=n(59),pe=n.n(he),fe=n(39),ge=n.n(fe),Oe=function(e){return Object(z.jsx)("li",{className:ge.a.NavigationItem,children:Object(z.jsx)(p.b,{to:e.link,exact:e.exact,activeClassName:ge.a.active,children:e.children})})},me=function(e){return Object(z.jsxs)("ul",{className:pe.a.NavigationItems,children:[Object(z.jsx)(Oe,{link:"/",exact:!0,children:"Burger Builder"}),e.isAuthenticated?Object(z.jsx)(Oe,{link:"/orders",children:"Orders"}):null,e.isAuthenticated?Object(z.jsx)(Oe,{link:"/logout",children:"Logout"}):Object(z.jsx)(Oe,{link:"/auth",children:"Authenticate"})]})},_e=n(23),ve=n.n(_e),xe=function(e){var t=[ve.a.SideDrawer,ve.a.Close];return e.open&&(t=[ve.a.SideDrawer,ve.a.Open]),Object(z.jsxs)(ee.a,{children:[Object(z.jsx)(ue.a,{show:e.open,clicked:e.closed}),Object(z.jsxs)("div",{className:t.join(" "),onClick:e.closed,children:[Object(z.jsx)("div",{className:ve.a.Logo,children:Object(z.jsx)(be,{})}),Object(z.jsx)(me,{isAuthenticated:e.isAuth})]})]})},ye=n(60),ke=n.n(ye),Se=function(e){return Object(z.jsxs)("div",{className:ke.a.DrawerToggle,onClick:e.clicked,children:[Object(z.jsx)("div",{}),Object(z.jsx)("div",{}),Object(z.jsx)("div",{})]})},Ce=n(33),Ie=n.n(Ce),Te=function(e){return Object(z.jsxs)("header",{className:Ie.a.Toolbar,children:[Object(z.jsx)(Se,{clicked:e.drawerTogglerClick}),Object(z.jsx)("div",{className:Ie.a.Logo,children:Object(z.jsx)(be,{})}),Object(z.jsx)("nav",{className:Ie.a.DesktopOnly,children:Object(z.jsx)(me,{isAuthenticated:e.isAuth})})]})},Be=n(61),Ne=n.n(Be),we=function(e){Object(M.a)(n,e);var t=Object(F.a)(n);function n(){var e;Object(H.a)(this,n);for(var r=arguments.length,i=new Array(r),c=0;c<r;c++)i[c]=arguments[c];return(e=t.call.apply(t,[this].concat(i))).state={showSideDrawer:!1},e.sideDrawerClosedHandler=function(){e.setState({showSideDrawer:!1})},e.sideDrawerToggleHandler=function(){e.setState((function(e,t){return{showSideDrawer:!e.showSideDrawer}}))},e}return Object(U.a)(n,[{key:"render",value:function(){return Object(z.jsxs)(ee.a,{children:[Object(z.jsx)(Te,{drawerTogglerClick:this.sideDrawerToggleHandler,isAuth:this.props.isAuthenticated}),Object(z.jsx)(xe,{open:this.state.showSideDrawer,closed:this.sideDrawerClosedHandler,isAuth:this.props.isAuthenticated}),Object(z.jsx)("main",{className:Ne.a.Content,children:this.props.children})]})}}]),n}(P.a.Component),De=Object(D.b)((function(e){return{isAuthenticated:null!==e.auth.token}}))(we),Ae=function(e){Object(M.a)(n,e);var t=Object(F.a)(n);function n(){return Object(H.a)(this,n),t.apply(this,arguments)}return Object(U.a)(n,[{key:"componentDidMount",value:function(){this.props.onLogout()}},{key:"render",value:function(){return Object(z.jsx)(se.a,{to:"/"})}}]),n}(E.Component),Le=Object(D.b)(null,(function(e){return{onLogout:function(){return e(ie.f())}}}))(Ae),Re=G((function(){return n.e(3).then(n.bind(null,101))})),Ee=G((function(){return n.e(5).then(n.bind(null,102))})),Pe=G((function(){return n.e(4).then(n.bind(null,100))})),He=function(e){Object(M.a)(n,e);var t=Object(F.a)(n);function n(){return Object(H.a)(this,n),t.apply(this,arguments)}return Object(U.a)(n,[{key:"componentDidMount",value:function(){this.props.onTrySignup()}},{key:"render",value:function(){var e=Object(z.jsxs)(se.d,{children:[Object(z.jsx)(se.b,{path:"/auth",component:Pe}),Object(z.jsx)(se.b,{exact:!0,path:"/",component:oe}),Object(z.jsx)(se.a,{to:"/"})]});return this.props.isAuthenticated&&(e=Object(z.jsxs)(se.d,{children:[Object(z.jsx)(se.b,{path:"/checkout",component:Re}),Object(z.jsx)(se.b,{path:"/orders",component:Ee}),Object(z.jsx)(se.b,{path:"/logout",component:Le}),Object(z.jsx)(se.b,{path:"/auth",component:Pe}),Object(z.jsx)(se.b,{exact:!0,path:"/",component:oe}),Object(z.jsx)(se.a,{to:"/"})]})),Object(z.jsx)("div",{children:Object(z.jsx)(De,{children:e})})}}]),n}(P.a.Component),Ue=Object(se.g)(Object(D.b)((function(e){return{isAuthenticated:null!==e.auth.token}}),(function(e){return{onTrySignup:function(){return e(ie.c())}}}))(He)),Me=(n(91),Object(r.b)({burgerBuilder:h,order:k,auth:w})),Fe=r.c,ze=Object(r.d)(Me,Fe(Object(r.a)(R.a)));L.a.render(Object(z.jsx)(D.a,{store:ze,children:Object(z.jsx)(p.a,{children:Object(z.jsx)(Ue,{})})}),document.getElementById("root"))}],[[92,1,2]]]);
//# sourceMappingURL=main.61492a36.chunk.js.map