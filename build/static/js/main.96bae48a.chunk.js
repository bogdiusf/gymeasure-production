(this["webpackJsonpgymeasure-development"]=this["webpackJsonpgymeasure-development"]||[]).push([[0],{62:function(e,t,n){},95:function(e,t,n){"use strict";n.r(t);var a=n(0),s=n.n(a),r=n(35),c=n.n(r),i=n(15),o=n.n(i),d=n(22),l=n(11),u=n(98),j=n(104),b=n(99),h=n(101),f=n(100),m=n(68),O=(n(78),n(96),m.a.initializeApp({apiKey:"AIzaSyCLtKGMh6Tv-obYZ_I-BkPE3TQf90sYCFg",authDomain:"gymeasure-production-6dcb6.firebaseapp.com",databaseURL:Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_FIREBASE_API_KEY:"AIzaSyCLtKGMh6Tv-obYZ_I-BkPE3TQf90sYCFg",REACT_APP_FIREBASE_AUTH_DOMAIN:"gymeasure-production-6dcb6.firebaseapp.com",REACT_APP_FIREBASE_DATABASEURL:"https://gymeasure-production-6dcb6-default-rtdb.firebaseio.com",REACT_APP_FIREBASE_PROJECT_ID:"gymeasure-production-6dcb6",REACT_APP_FIREBASE_STORAGE_BUCKET:"gymeasure-production-6dcb6.appspot.com",REACT_APP_FIREBASE_MESSAGING_SENDER_ID:"504925768718",REACT_APP_FIREBASE_APP_ID:"1:504925768718:web:6ca81dd63268019c27005f"}).REACT_APP_REACT_APP_FIREBASE_DATABASEURL,projectId:"gymeasure-production-6dcb6",storageBucket:"gymeasure-production-6dcb6.appspot.com",messagingSenderId:"504925768718",appId:"1:504925768718:web:6ca81dd63268019c27005f"})),x=O.auth(),p=O.firestore(),g=n(2),y=s.a.createContext();function v(){return Object(a.useContext)(y)}function C(e){var t=e.children,n=Object(a.useState)(null),s=Object(l.a)(n,2),r=s[0],c=s[1],i=Object(a.useState)(!0),u=Object(l.a)(i,2),j=u[0],b=u[1];Object(a.useEffect)((function(){return x.onAuthStateChanged((function(e){c(e),b(!1)}))}),[]);var h={currentUser:r,signup:function(e,t){function n(){return(n=Object(d.a)(o.a.mark((function n(){var a;return o.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,x.createUserWithEmailAndPassword(e,t);case 2:a=n.sent;try{a.user.sendEmailVerification(),x.signOut()}catch(s){console.log(s)}case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}return function(){return n.apply(this,arguments)}()},login:function(e,t){return x.signInWithEmailAndPassword(e,t)},logout:function(){return x.signOut()},forgotPassword:function(e){return x.sendPasswordResetEmail(e)}};return Object(g.jsx)(y.Provider,{value:h,children:!j&&t})}n(48);var w=n(16),S=n(29);function A(){var e=Object(a.useRef)(),t=Object(a.useRef)(),n=Object(a.useRef)(),r=v().signup,c=Object(a.useState)(null),i=Object(l.a)(c,2),m=i[0],O=i[1],x=Object(a.useState)(!1),p=Object(l.a)(x,2),y=p[0],C=p[1],A=Object(w.g)(),E=function(){var a=Object(d.a)(o.a.mark((function a(s){return o.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(s.preventDefault(),t.current.value===n.current.value){a.next=3;break}return a.abrupt("return",O("Passwords do not match!"));case 3:return a.prev=3,C(!0),a.next=7,r(e.current.value,t.current.value);case 7:A.push("/login"),a.next=14;break;case 10:a.prev=10,a.t0=a.catch(3),C(!1),O("Failed to create an account! ".concat(a.t0));case 14:case"end":return a.stop()}}),a,null,[[3,10]])})));return function(e){return a.apply(this,arguments)}}();return Object(g.jsx)(s.a.Fragment,{children:Object(g.jsx)(u.a,{className:"d-flex align-items-center justify-content-center",style:{minHeight:"100vh"},children:Object(g.jsxs)("div",{className:"w-100",style:{maxWidth:"400px"},children:[Object(g.jsx)(j.a,{children:Object(g.jsxs)(j.a.Body,{children:[Object(g.jsx)("h2",{className:"text-center mb-4",children:"Sign up"}),m&&Object(g.jsx)(b.a,{variant:"danger",children:m}),Object(g.jsx)(b.a,{variant:"info",children:"After signing up, please check your e-mail inbox for further instructions on how to activate your account!"}),Object(g.jsxs)(h.a,{onSubmit:E,children:[Object(g.jsxs)(h.a.Group,{id:"email",className:"mt-2",children:[Object(g.jsx)(h.a.Label,{children:"Email"}),Object(g.jsx)(h.a.Control,{type:"email",required:!0,ref:e,placeholder:"Please enter your e-mail"})]}),Object(g.jsxs)(h.a.Group,{id:"password",className:"mt-2",children:[Object(g.jsx)(h.a.Label,{children:"Password"}),Object(g.jsx)(h.a.Control,{type:"password",required:!0,ref:t,placeholder:"Please enter the desired password"})]}),Object(g.jsxs)(h.a.Group,{id:"passwordConfirmation",className:"mt-2",children:[Object(g.jsx)(h.a.Label,{children:"Password confirmation"}),Object(g.jsx)(h.a.Control,{type:"password",required:!0,ref:n,placeholder:"Please repeat your password"})]}),Object(g.jsx)(f.a,{type:"submit",className:"text-center w-100 mt-4",disabled:y,children:"Sign up"})]})]})}),Object(g.jsxs)("div",{className:"w-100 text-center mt-2",children:[Object(g.jsx)("span",{style:{color:"white"},children:"Already have an account?"})," ",Object(g.jsx)(S.b,{to:"/login",children:"Log in"})]})]})})})}var E=n(39),R=n(71),P=(n(62),n(66)),I=n(12);function T(e){return Object(g.jsxs)(I.a,{show:e.confirmationModal,onHide:e.handleCloseConfirmationModal,backdrop:"static",children:[Object(g.jsx)(I.a.Header,{children:Object(g.jsx)(I.a.Title,{style:{margin:"auto"},children:e.error})}),Object(g.jsx)(I.a.Footer,{children:Object(g.jsx)(f.a,{variant:"danger",onClick:function(){"Your info has been successfully added!"===e.error||"Your info has been successfully updated!"===e.error||"Your measurement has been successfully deleted!"===e.error?e.handleCloseConfirmationModal():(e.handleCloseConfirmationModal(),e.handleShowAddPersonalInfo())},children:"Close"})})]})}var _=n(13),N=n(9);function M(e){return Object(g.jsxs)(I.a,{show:e.showDeleteMeasurementConfirmationModal,onHide:e.closeDeleteMeasurementConfirmationModal,backdrop:"static",children:[Object(g.jsx)(I.a.Header,{children:Object(g.jsx)(I.a.Title,{children:"Are you sure you want to delete this measurement?"})}),Object(g.jsxs)(I.a.Footer,{children:[Object(g.jsx)(f.a,{variant:"success",style:{width:"80px"},onClick:function(){return e.deleteMeasurement(e.document_id)},children:"Yes"}),Object(g.jsx)(f.a,{variant:"danger",style:{width:"80px"},onClick:function(){return e.closeDeleteMeasurementConfirmation()},children:"No"})]})]})}function k(e){return Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)("div",{style:{color:"white",textAlign:"center",width:"80%",margin:"auto",marginTop:"30px",padding:"0"},children:Object(g.jsxs)(N.a,{className:"mb-3 searchInputGroup",children:[Object(g.jsx)(N.a.Text,{children:"Search by date"}),Object(g.jsx)(_.a,{placeholder:"dd/mm/yyyy",style:{textAlign:"center",fontWeight:"500"},onChange:function(t){return e.filterMeasurements(t.target.value)}})]})}),Object(g.jsxs)("div",{className:"measurementsWrapper",children:[e.measurements&&e.measurements.map((function(t){return Object(g.jsxs)("div",{className:"measurementDataWrapper",children:[Object(g.jsxs)("h4",{children:["Measured on: ",t.measured_on_day," "]}),Object(g.jsxs)("h4",{children:["Measured at: ",t.measured_at_time," "]}),Object(g.jsxs)(N.a,{className:"mb-3",children:[Object(g.jsxs)("div",{style:{display:"grid",gridTemplateColumns:"100px 1fr 0.4fr",width:"100%",marginTop:"10px"},children:[Object(g.jsx)(N.a.Text,{style:{fontWeight:"700",justifyContent:"center"},children:"Body part"}),Object(g.jsx)(N.a.Text,{style:{fontWeight:"700",justifyContent:"center"},children:"Value"}),Object(g.jsx)(N.a.Text,{style:{fontWeight:"700",justifyContent:"center"},children:"Unit"})]}),Object(g.jsxs)(N.a.Prepend,{style:{display:"grid",gridTemplateColumns:"100px 1fr 0.4fr",margin:"auto",marginTop:"10px",width:"100%"},children:[Object(g.jsx)(N.a.Text,{style:{fontWeight:"700",justifyContent:"center"},children:"Waist"}),Object(g.jsx)(_.a,{defaultValue:"".concat(t.waist),style:{textAlign:"center",fontWeight:"500"},disabled:!0}),Object(g.jsx)(N.a.Text,{style:{fontWeight:"700",justifyContent:"center"},children:"cm"}),Object(g.jsx)(N.a.Text,{style:{fontWeight:"700",justifyContent:"center"},children:"Chest"}),Object(g.jsx)(_.a,{defaultValue:"".concat(t.chest),style:{textAlign:"center",fontWeight:"500"},disabled:!0}),Object(g.jsx)(N.a.Text,{style:{fontWeight:"700",justifyContent:"center"},disabled:!0,children:"cm"}),Object(g.jsx)(N.a.Text,{style:{fontWeight:"700",justifyContent:"center"},children:"Arms"}),Object(g.jsx)(_.a,{defaultValue:"".concat(t.arms),style:{textAlign:"center",fontWeight:"500"},disabled:!0}),Object(g.jsx)(N.a.Text,{style:{fontWeight:"700",justifyContent:"center"},disabled:!0,children:"cm"}),Object(g.jsx)(N.a.Text,{style:{fontWeight:"700",justifyContent:"center"},children:"Quads"}),Object(g.jsx)(_.a,{defaultValue:"".concat(t.quads),style:{textAlign:"center",fontWeight:"500"},disabled:!0}),Object(g.jsx)(N.a.Text,{style:{fontWeight:"700",justifyContent:"center"},disabled:!0,children:"cm"})]})]}),Object(g.jsxs)("div",{className:"measurementsButtonsWrapper",style:{display:"flex",gap:"10px",marginTop:"10px",justifyContent:"space-evenly"},children:[Object(g.jsx)(f.a,{onClick:function(){e.handleShowEditMeasurements(t.document_id),e.setTempDocId(t.document_id)},children:"Edit"}),Object(g.jsx)(f.a,{onClick:function(){return e.showDeleteMeasurementConfirmation()},variant:"danger",children:"Delete"})]}),Object(g.jsx)(M,{showDeleteMeasurementConfirmation:e.showDeleteMeasurementConfirmation,showDeleteMeasurementConfirmationModal:e.showDeleteMeasurementConfirmationModal,document_id:t.document_id,deleteMeasurement:e.deleteMeasurement,closeDeleteMeasurementConfirmation:e.closeDeleteMeasurementConfirmation})]},t.measurement_id)})),0===e.measurements.length?Object(g.jsx)("h1",{style:{color:"white",marginTop:"50px",textAlign:"center"},children:"No measurements"}):""]})]})}function D(e){return Object(g.jsxs)(I.a,{show:e.showEditPersInfo,onHide:e.handleCloseEditPersonalInfo,backdrop:"static",children:[Object(g.jsx)(I.a.Header,{style:{backgroundColor:"#0d6efd"},children:Object(g.jsx)(I.a.Title,{style:{margin:"auto",color:"white"},children:"Edit personal info"})}),Object(g.jsxs)(I.a.Body,{children:[Object(g.jsx)(N.a,{className:"mb-3",children:e.personalInfo.map((function(t){return Object(g.jsxs)(N.a.Prepend,{style:{display:"grid",gridTemplateColumns:"0.5fr 2.5fr",margin:"auto"},children:[Object(g.jsx)(N.a.Text,{children:"First name"}),Object(g.jsx)(_.a,{ref:e.editFirstNameRef,defaultValue:t.firstName,onChange:function(){return e.setIsSavePInfoChangesEnabled(!0)}}),Object(g.jsx)(N.a.Text,{children:"Last name"}),Object(g.jsx)(_.a,{ref:e.editLastNameRef,defaultValue:t.lastName,onChange:function(){return e.setIsSavePInfoChangesEnabled(!0)}}),Object(g.jsx)(N.a.Text,{children:"Age"}),Object(g.jsx)(_.a,{ref:e.editAgeRef,defaultValue:t.age,onChange:function(){return e.setIsSavePInfoChangesEnabled(!0)}}),Object(g.jsx)(N.a.Text,{children:"Sex"}),Object(g.jsx)(_.a,{ref:e.editSexRef,defaultValue:t.sex,onChange:function(){return e.setIsSavePInfoChangesEnabled(!0)}})]},t.id)}))}),Object(g.jsxs)(I.a.Footer,{children:[Object(g.jsx)(f.a,{variant:"danger",onClick:e.handleCloseEditPersonalInfo,children:"Close"}),Object(g.jsx)(f.a,{disabled:!e.isSavePInfoChangesEnabled,variant:"success",onClick:function(){return e.updatePersonalInfo()},children:"Save Changes"})]})]})]})}function W(e){var t=v().logout,n=Object(w.g)(),a=function(){var e=Object(d.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:try{t(),n.push("/login")}catch(a){console.log(a)}case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(g.jsxs)(I.a,{show:e.showLoggedOut,onHide:e.handleCloseLoggedOut,backdrop:"static",children:[Object(g.jsx)(I.a.Header,{children:Object(g.jsx)(I.a.Title,{children:"Are you sure you want to log out?"})}),Object(g.jsxs)(I.a.Footer,{children:[Object(g.jsx)(f.a,{variant:"success",onClick:a,style:{width:"80px"},children:"Yes"}),Object(g.jsx)(f.a,{variant:"danger",onClick:e.handleCloseLoggedOut,style:{width:"80px"},children:"No"})]})]})}function B(e){return Object(g.jsxs)(I.a,{show:e.showAddPersInfo,onHide:e.handleCloseAddPersonalInfo,backdrop:"static",children:[Object(g.jsx)(I.a.Header,{style:{backgroundColor:"#0d6efd"},children:Object(g.jsx)(I.a.Title,{style:{margin:"auto",color:"white"},children:"Add personal info"})}),Object(g.jsxs)(I.a.Body,{children:[Object(g.jsx)(N.a,{className:"mb-3",children:Object(g.jsxs)(N.a.Prepend,{style:{display:"grid",gridTemplateColumns:"0.5fr 2.5fr",margin:"auto"},children:[Object(g.jsx)(N.a.Text,{children:"First name"}),Object(g.jsx)(_.a,{ref:e.firstNameRef,value:e.firstName,onChange:function(t){return e.setFirstName(t.target.value)}}),Object(g.jsx)(N.a.Text,{children:"Last name"}),Object(g.jsx)(_.a,{ref:e.lastNameRef,value:e.lastName,onChange:function(t){return e.setLastName(t.target.value)}}),Object(g.jsx)(N.a.Text,{children:"Age"}),Object(g.jsx)(_.a,{ref:e.ageRef,value:e.age,onChange:function(t){return e.setAge(t.target.value)}}),Object(g.jsx)(N.a.Text,{children:"Sex"}),Object(g.jsx)(_.a,{ref:e.sexRef,value:e.sex,onChange:function(t){return e.setSex(t.target.value)}})]})}),Object(g.jsxs)(I.a.Footer,{children:[Object(g.jsx)(f.a,{variant:"danger",onClick:e.handleCloseAddPersonalInfo,children:"Close"}),Object(g.jsx)(f.a,{variant:"success",onClick:function(){return e.addPersonalInfo()},children:"Add info"})]})]})]})}var F=n(103),L=n(102);function H(e){return Object(g.jsxs)(F.a,{expand:"lg",className:"d-flex flex-row",style:{padding:"20px",backgroundColor:"rgba(255,255,255,0.2)"},children:[e.personalInfo.length>0&&e.personalInfo.map((function(t){return Object(g.jsxs)("div",{id:"navbarBrand",children:[Object(g.jsx)("span",{id:"navbarBrand-name",children:Object(g.jsx)(F.a.Brand,{style:{fontWeight:"500",color:"rgba(255,255,255,0.75)"},children:Object(g.jsxs)("span",{children:[t.firstName," ",t.lastName]})})}),Object(g.jsx)("br",{}),Object(g.jsx)("span",{id:"navbarBrand-email",children:Object(g.jsx)(F.a.Brand,{style:{fontWeight:"400",color:"rgba(255,255,255,0.75)"},children:e.currentUser.email})})]},t.id)})),Object(g.jsx)(F.a.Toggle,{"aria-controls":"basic-navbar-nav",style:{backgroundColor:"rgba(255,255,255,0.4)"}}),Object(g.jsx)(F.a.Collapse,{id:"basic-navbar-nav",style:{textAlign:"center"},children:Object(g.jsxs)(L.a,{className:"d-flex gap-4",style:{marginLeft:"auto"},children:[Object(g.jsx)("br",{}),Object(g.jsx)(f.a,{id:"addMeasurementsButton",onClick:function(){return e.handleShowAddMeasurements()},children:"Add today's measurements"}),0===e.personalInfo.length?Object(g.jsx)(f.a,{id:"addInfoButton",onClick:e.handleShowAddPersonalInfo,style:{padding:"10px"},children:"Add personal info"}):Object(g.jsx)(f.a,{id:"editPersInfoButton",onClick:e.handleShowEditPersonalInfo,style:{padding:"10px"},children:"Edit personal info"}),Object(g.jsx)(L.a.Link,{id:"logOutButton",onClick:e.handleShowLoggedOut,children:Object(g.jsx)("span",{id:"test",children:"Log out"})})]})})]})}function z(e){var t=e.showAddMeasurements,n=e.handleCloseAddMeasurements,a=e.addMeasurements,s=e.waistRef,r=e.armsRef,c=e.quadsRef,i=e.chestRef,o=e.armsSize,d=e.quadsSize,l=e.chestSize,u=e.waistSize,j=e.setChestSize,b=e.setArmsSize,h=e.setWaistSize,m=e.setQuadsSize;return Object(g.jsxs)(I.a,{show:t,onHide:n,backdrop:"static",children:[Object(g.jsx)(I.a.Header,{style:{backgroundColor:"#0d6efd"},children:Object(g.jsx)(I.a.Title,{style:{margin:"auto",color:"white"},children:"Add measurements"})}),Object(g.jsxs)(I.a.Body,{children:[Object(g.jsx)(N.a,{className:"mb-3",children:Object(g.jsxs)(N.a.Prepend,{style:{display:"grid",gridTemplateColumns:"1fr 1fr",margin:"auto",gap:"20px",padding:"10px"},children:[Object(g.jsxs)("div",{children:[Object(g.jsx)(N.a.Text,{children:"Waist size (cm)"}),Object(g.jsx)(_.a,{ref:s,value:u,onChange:function(e){return h(e.target.value)},type:"number",min:"0"})]}),Object(g.jsxs)("div",{children:[Object(g.jsx)(N.a.Text,{children:"Quads size (cm)"}),Object(g.jsx)(_.a,{ref:c,value:d,onChange:function(e){return m(e.target.value)},type:"number",min:"0"})]}),Object(g.jsxs)("div",{children:[Object(g.jsx)(N.a.Text,{children:"Chest size (cm)"}),Object(g.jsx)(_.a,{ref:i,value:l,onChange:function(e){return j(e.target.value)},type:"number",min:"0"})]}),Object(g.jsxs)("div",{children:[Object(g.jsx)(N.a.Text,{children:"Arms size (cm)"}),Object(g.jsx)(_.a,{ref:r,value:o,onChange:function(e){return b(e.target.value)},type:"number",min:"0"})]})]})}),Object(g.jsxs)(I.a.Footer,{children:[Object(g.jsx)(f.a,{variant:"danger",onClick:n,children:"Close"}),Object(g.jsx)(f.a,{variant:"success",onClick:function(){return a()},children:"Add info"})]})]})]})}function q(e){return Object(g.jsxs)(I.a,{show:e.showEditMeasurements,onHide:e.handleCloseEditPersonalInfo,backdrop:"static",children:[Object(g.jsx)(I.a.Header,{style:{backgroundColor:"#0d6efd"},children:Object(g.jsx)(I.a.Title,{style:{margin:"auto",color:"white"},children:"Edit measurements"})}),Object(g.jsxs)(I.a.Body,{children:[Object(g.jsx)(N.a,{className:"mb-3",style:{justifyContent:"center"},children:Object(g.jsxs)(N.a.Prepend,{style:{display:"grid",gridTemplateColumns:"0.5fr 2.5fr",margin:"auto"},children:[Object(g.jsx)(N.a.Text,{children:"Waist"}),Object(g.jsx)(_.a,{ref:e.editWaistRef,defaultValue:e.waistEdited,onChange:function(){e.setIsSaveMeasurementChangesEnabled(!0)},type:"number"}),Object(g.jsx)(N.a.Text,{children:"Chest"}),Object(g.jsx)(_.a,{ref:e.editChestRef,defaultValue:e.chestEdited,onChange:function(){e.setIsSaveMeasurementChangesEnabled(!0)},type:"number"}),Object(g.jsx)(N.a.Text,{children:"Arms"}),Object(g.jsx)(_.a,{ref:e.editArmsRef,defaultValue:e.armsEdited,onChange:function(){e.setIsSaveMeasurementChangesEnabled(!0)},type:"number"}),Object(g.jsx)(N.a.Text,{children:"Quads"}),Object(g.jsx)(_.a,{ref:e.editQuadsRef,defaultValue:e.quadsEdited,onChange:function(){e.setIsSaveMeasurementChangesEnabled(!0)},type:"number"})]})}),Object(g.jsxs)(I.a.Footer,{children:[Object(g.jsx)(f.a,{variant:"danger",onClick:e.handleCloseEditMeasurements,children:"Close"}),Object(g.jsx)(f.a,{disabled:!e.isSaveMeasurementChangesEnabled,variant:"success",onClick:function(){e.updateMeasurements(e.tempDocId)},children:"Save Changes"})]})]})]})}function V(){var e=v().currentUser,t=Object(a.useRef)(),n=Object(a.useRef)(),r=Object(a.useRef)(),c=Object(a.useRef)(),i=Object(a.useRef)(),u=Object(a.useRef)(),j=Object(a.useRef)(),b=Object(a.useRef)(),h=Object(a.useRef)(),f=Object(a.useRef)(),m=Object(a.useRef)(),O=Object(a.useRef)(),x=Object(a.useRef)(),y=Object(a.useRef)(),C=Object(a.useRef)(),w=Object(a.useRef)(),S=Object(a.useState)([]),A=Object(l.a)(S,2),I=A[0],_=A[1],N=Object(a.useState)(),M=Object(l.a)(N,2),F=M[0],L=M[1],V=Object(a.useState)([]),Y=Object(l.a)(V,2),U=Y[0],G=Y[1],Q=Object(a.useState)(""),K=Object(l.a)(Q,2),J=K[0],Z=K[1],X=Object(a.useState)(""),$=Object(l.a)(X,2),ee=$[0],te=$[1],ne=Object(a.useState)(""),ae=Object(l.a)(ne,2),se=ae[0],re=ae[1],ce=Object(a.useState)(""),ie=Object(l.a)(ce,2),oe=ie[0],de=ie[1],le=Object(a.useState)(""),ue=Object(l.a)(le,2),je=ue[0],be=ue[1],he=Object(a.useState)(""),fe=Object(l.a)(he,2),me=fe[0],Oe=fe[1],xe=Object(a.useState)(""),pe=Object(l.a)(xe,2),ge=pe[0],ye=pe[1],ve=Object(a.useState)(""),Ce=Object(l.a)(ve,2),we=Ce[0],Se=Ce[1],Ae=Object(a.useState)(!1),Ee=Object(l.a)(Ae,2),Re=Ee[0],Pe=Ee[1],Ie=Object(a.useState)(!1),Te=Object(l.a)(Ie,2),_e=Te[0],Ne=Te[1],Me=Object(a.useState)(!1),ke=Object(l.a)(Me,2),De=ke[0],We=ke[1],Be=Object(a.useState)(!1),Fe=Object(l.a)(Be,2),Le=Fe[0],He=Fe[1],ze=Object(a.useState)(!1),qe=Object(l.a)(ze,2),Ve=qe[0],Ye=qe[1],Ue=Object(a.useState)(!1),Ge=Object(l.a)(Ue,2),Qe=Ge[0],Ke=Ge[1],Je=Object(a.useState)(!1),Ze=Object(l.a)(Je,2),Xe=Ze[0],$e=Ze[1],et=Object(a.useState)(!1),tt=Object(l.a)(et,2),nt=tt[0],at=tt[1],st=Object(a.useState)(!1),rt=Object(l.a)(st,2),ct=rt[0],it=rt[1],ot=Object(a.useState)(""),dt=Object(l.a)(ot,2),lt=dt[0],ut=dt[1],jt=Object(a.useState)(""),bt=Object(l.a)(jt,2),ht=bt[0],ft=bt[1],mt=Object(a.useState)(""),Ot=Object(l.a)(mt,2),xt=Ot[0],pt=Ot[1],gt=Object(a.useState)(""),yt=Object(l.a)(gt,2),vt=yt[0],Ct=yt[1],wt=Object(a.useState)(""),St=Object(l.a)(wt,2),At=St[0],Et=St[1],Rt=Object(a.useState)(null),Pt=Object(l.a)(Rt,2),It=Pt[0],Tt=Pt[1],_t=function(){return Pe(!1)},Nt=function(){Ye(!1),Ne(!1)},Mt=function(){return He(!1)},kt=function(){return He(!0)},Dt=function(){return $e(!0)},Wt=function(){at(!1),We(!1)},Bt=function(){var e=new Date,t=e.getDate()<10?"0"+e.getDate():e.getDate(),n=e.getMonth()+1;n<10&&(n="0"+n);var a=e.getFullYear();return{time:(e.getHours()<10?"0"+e.getHours():e.getHours())+":"+(e.getMinutes()<10?"0"+e.getMinutes():e.getMinutes())+":"+(e.getSeconds()<10?"0"+e.getSeconds():e.getSeconds()),date:t+"/"+n+"/"+a}},Ft=function(){var a=Object(d.a)(o.a.mark((function a(){return o.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(t.current.value&&n.current.value){a.next=7;break}return t.current.value?Et("Attention! Type your last name in order to continue!"):n.current.value?Et("Attention! Type your first name in order to continue!"):Et("Attention! Both first name and last name must be typed in order to continue!"),Mt(),Dt(),a.abrupt("return");case 7:p.collection("users").doc(e.uid).collection("personal-info").doc("Informatii personale").set({id:Object(P.generate)(),firstName:t.current.value,lastName:n.current.value,age:r.current.value,sex:i.current.value}),Et("Your info has been successfully added!"),Mt(),Dt();case 11:case"end":return a.stop()}}),a)})));return function(){return a.apply(this,arguments)}}(),Lt=function(){var t=Object(d.a)(o.a.mark((function t(){return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,p.collection("users").doc(e.uid).collection("measurements").doc().set({measurement_id:Object(P.generate)(),arms:f.current.value,quads:m.current.value,waist:h.current.value,chest:O.current.value,measured_on_day:Bt().date,measured_at_time:Bt().time,measured_on:new Date});case 2:try{Et("Your info has been successfully added!"),_t(),Dt(),Se(""),be(""),Oe(""),ye("")}catch(n){alert(n)}case 3:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),Ht=function(){var t=Object(d.a)(o.a.mark((function t(){return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,p.collection("users").doc(e.uid).collection("personal-info").doc("Informatii personale").update({firstName:j.current.value,lastName:b.current.value,age:c.current.value,sex:u.current.value});case 2:try{Et("Your info has been successfully updated!"),Nt(),Dt()}catch(n){alert(n)}case 3:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),zt=function(){var t=Object(d.a)(o.a.mark((function t(n){return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,p.collection("users").doc(e.uid).collection("measurements").doc(n).delete();case 2:try{it(!1),Et("Your measurement has been successfully deleted!"),Dt()}catch(a){alert(a)}case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),qt=function(){var t=Object(d.a)(o.a.mark((function t(n){return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,p.collection("users").doc(e.uid).collection("measurements").doc(n).update({waist:x.current.value,arms:y.current.value,chest:C.current.value,quads:w.current.value});case 2:try{Et("Your info has been successfully updated!"),Wt(),Dt()}catch(a){alert("".concat(a))}case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return Object(a.useEffect)((function(){p.collection("users").doc(e.uid).collection("measurements").orderBy("measured_on","desc").onSnapshot((function(e){var t=[];e.forEach((function(e){var n=Object(E.a)({document_id:e.id,measured_on_day:e.measured_on_day,measured_at_time:e.measured_at_time},e.data());t.push(n)})),_(t),L(t)})),p.collection("users").doc(e.uid).collection("personal-info").onSnapshot((function(e){var t=[];e.forEach((function(e){var n=Object(E.a)({id:e.id},e.data());t.push(n)})),G(t),0===U.length&&(Z(""),te(""),re(""),de(""))}))}),[e.uid,U.length,I.length]),Object(g.jsxs)(s.a.Fragment,{children:[Object(g.jsx)(H,{personalInfo:U,currentUser:e,handleShowAddPersonalInfo:kt,handleShowEditPersonalInfo:function(){return Ye(!0)},handleShowLoggedOut:function(){return Ke(!0)},handleShowAddMeasurements:function(){return Pe(!0)}}),Object(g.jsx)(z,{showAddMeasurements:Re,handleCloseAddMeasurements:_t,addMeasurements:Lt,waistRef:h,armsRef:f,quadsRef:m,chestRef:O,armsSize:je,quadsSize:me,chestSize:ge,waistSize:we,setChestSize:ye,setArmsSize:be,setWaistSize:Se,setQuadsSize:Oe,editWaistRef:x,editArmsRef:y,editChestRef:C,editQuadsRef:w}),0===U.length?Object(g.jsx)(B,{showAddPersInfo:Le,handleCloseAddPersonalInfo:Mt,firstNameRef:t,firstName:J,setFirstName:Z,lastNameRef:n,lastName:ee,setLastName:te,ageRef:r,age:se,setAge:re,sexRef:i,sex:oe,setSex:de,addPersonalInfo:Ft}):Object(g.jsx)(D,{showEditPersInfo:Ve,handleCloseEditPersonalInfo:Nt,personalInfo:U,editFirstNameRef:j,editLastNameRef:b,editAgeRef:c,editSexRef:u,updatePersonalInfo:Ht,isSavePInfoChangesEnabled:_e,setIsSavePInfoChangesEnabled:Ne,firstNamePassed:J}),Object(g.jsx)(W,{showLoggedOut:Qe,handleCloseLoggedOut:function(){return Ke(!1)}}),Object(g.jsx)(T,{confirmationModal:Xe,handleCloseConfirmationModal:function(){$e(!1),He(!1),Ne(!1)},handleShowAddPersonalInfo:kt,error:At,handleCloseEditPersonalInfo:Nt}),Object(g.jsx)(k,{measurements:I,deleteMeasurement:zt,filterMeasurements:function(e){if(""!==e){var t=I.filter((function(t){return t.measured_on_day.includes(e)}));_(t),t=F.filter((function(t){return t.measured_on_day.includes(e)})),""!==e&&t.length>0&&_(t)}else""===e&&_(F)},handleShowEditMeasurements:function(e){at(!0);var t=Object(R.a)(I),n=t.findIndex((function(t){return t.document_id===e}));ut(t[n].arms),ft(t[n].quads),pt(t[n].chest),Ct(t[n].waist)},setTempDocId:Tt,showDeleteMeasurementConfirmation:function(){return it(!0)},showDeleteMeasurementConfirmationModal:ct,closeDeleteMeasurementConfirmation:function(){return it(!1)}}),Object(g.jsx)(q,{showEditMeasurements:nt,waistEdited:vt,chestEdited:xt,armsEdited:lt,quadsEdited:ht,editArmsRef:y,editChestRef:C,editQuadsRef:w,editWaistRef:x,isSaveMeasurementChangesEnabled:De,setIsSaveMeasurementChangesEnabled:We,handleCloseEditMeasurements:Wt,tempDocId:It,updateMeasurements:qt})]})}function Y(){var e=Object(a.useRef)(),t=Object(a.useRef)(),n=v().login,r=Object(a.useState)(null),c=Object(l.a)(r,2),i=c[0],m=c[1],O=Object(a.useState)(!1),x=Object(l.a)(O,2),p=x[0],y=x[1],C=Object(w.g)(),A=function(){var a=Object(d.a)(o.a.mark((function a(s){return o.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return s.preventDefault(),a.prev=1,m(""),y(!0),a.next=6,n(e.current.value,t.current.value);case 6:a.sent.user.emailVerified?C.push("/"):m("Please verify your email!"),a.next=14;break;case 10:a.prev=10,a.t0=a.catch(1),y(!1),m("auth/user-not-found"===a.t0.code?"User does not exist or wrong email! Sign up or check email credential!":"auth/wrong-password"===a.t0.code?"Invalid password!":"Failed to sign in!");case 14:case"end":return a.stop()}}),a,null,[[1,10]])})));return function(e){return a.apply(this,arguments)}}();return Object(g.jsx)(s.a.Fragment,{children:Object(g.jsx)(u.a,{className:"d-flex align-items-center justify-content-center",style:{minHeight:"100vh"},children:Object(g.jsxs)("div",{className:"w-100",style:{maxWidth:"400px"},children:[Object(g.jsx)(j.a,{children:Object(g.jsxs)(j.a.Body,{children:[Object(g.jsx)("h2",{className:"text-center mb-4",children:"Sign in"}),i&&Object(g.jsx)(b.a,{variant:"danger",children:i}),Object(g.jsxs)(h.a,{onSubmit:function(e){return A(e)},children:[Object(g.jsxs)(h.a.Group,{id:"email",className:"mt-2",children:[Object(g.jsx)(h.a.Label,{children:"Email"}),Object(g.jsx)(h.a.Control,{type:"email",required:!0,ref:e,placeholder:"Please enter your e-mail"})]}),Object(g.jsxs)(h.a.Group,{id:"password",className:"mt-2",children:[Object(g.jsx)(h.a.Label,{children:"Password"}),Object(g.jsx)(h.a.Control,{type:"password",required:!0,ref:t,placeholder:"Please enter your password"})]}),Object(g.jsx)(f.a,{type:"submit",className:"text-center w-100 mt-4",disabled:p,children:"Log in"})]}),Object(g.jsx)("div",{className:"w-100 text-center mt-3",children:Object(g.jsx)(S.b,{to:"/forgot-password",children:"Forgot password?"})})]})}),Object(g.jsxs)("div",{className:"w-100 text-center mt-2",children:[Object(g.jsx)("span",{style:{color:"white"},children:"Don't have an account?"})," ",Object(g.jsx)(S.b,{to:"/signup",children:"Sign up"})]})]})})})}var U=n(72);function G(e){var t=e.component,n=Object(U.a)(e,["component"]),a=v().currentUser;return Object(g.jsx)(w.b,Object(E.a)(Object(E.a)({},n),{},{render:function(e){return a?Object(g.jsx)(t,Object(E.a)({},e)):Object(g.jsx)(w.a,{to:"/login"})}}))}function Q(){var e=Object(a.useRef)(),t=v().forgotPassword,n=Object(a.useState)(null),r=Object(l.a)(n,2),c=r[0],i=r[1],m=Object(a.useState)(""),O=Object(l.a)(m,2),x=O[0],p=O[1],y=Object(a.useState)(!1),C=Object(l.a)(y,2),w=C[0],A=C[1],E=function(){var n=Object(d.a)(o.a.mark((function n(a){return o.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return a.preventDefault(),n.prev=1,i(""),A(!0),n.next=6,t(e.current.value);case 6:p("An email has been sent to your inbox. Please check it for further information on how to reset your password!"),n.next=12;break;case 9:n.prev=9,n.t0=n.catch(1),i("Email does not exist!");case 12:A(!1);case 13:case"end":return n.stop()}}),n,null,[[1,9]])})));return function(e){return n.apply(this,arguments)}}();return Object(g.jsx)(s.a.Fragment,{children:Object(g.jsx)(u.a,{className:"d-flex align-items-center justify-content-center",style:{minHeight:"100vh"},children:Object(g.jsxs)("div",{className:"w-100",style:{maxWidth:"400px"},children:[Object(g.jsx)(j.a,{children:Object(g.jsxs)(j.a.Body,{children:[Object(g.jsx)("h2",{className:"text-center mb-4",children:"Sign in"}),c&&Object(g.jsx)(b.a,{variant:"danger",children:c}),x&&Object(g.jsx)(b.a,{variant:"success",children:x}),Object(g.jsxs)(h.a,{onSubmit:E,children:[Object(g.jsxs)(h.a.Group,{id:"email",className:"mt-2",children:[Object(g.jsx)(h.a.Label,{children:"Email"}),Object(g.jsx)(h.a.Control,{type:"email",required:!0,ref:e,placeholder:"Please enter your e-mail"})]}),Object(g.jsx)(f.a,{type:"submit",className:"text-center w-100 mt-4",disabled:w,children:"Reset password"})]}),Object(g.jsxs)("div",{className:"w-100 text-center mt-3",children:["Successfully reseted password? ",Object(g.jsx)(S.b,{to:"/login",children:"Log in"})]})]})}),Object(g.jsxs)("div",{className:"w-100 text-center mt-2",children:[Object(g.jsx)("span",{style:{color:"white"},children:"Don't have an account?"})," ",Object(g.jsx)(S.b,{to:"/signup",children:"Sign up"})]})]})})})}var K=function(){return Object(g.jsx)(S.a,{children:Object(g.jsx)(C,{children:Object(g.jsxs)(w.d,{children:[Object(g.jsx)(G,{exact:!0,path:"/",component:V}),Object(g.jsx)(w.b,{path:"/signup",component:A}),Object(g.jsx)(w.b,{path:"/login",component:Y}),Object(g.jsx)(w.b,{path:"/forgot-password",component:Q})]})})})};c.a.render(Object(g.jsx)(K,{}),document.getElementById("root"))}},[[95,1,2]]]);
//# sourceMappingURL=main.96bae48a.chunk.js.map