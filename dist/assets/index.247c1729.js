import{r as t,j as y,a as v,L as o,F as w,b as z,c as L,_ as F,A as T,d as R,e as j,f as P,g as E,q as D,B,R as N,h as f,i as V}from"./vendor.800d2ebe.js";const H=function(){const l=document.createElement("link").relList;if(l&&l.supports&&l.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))d(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const c of s.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&d(c)}).observe(document,{childList:!0,subtree:!0});function g(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerpolicy&&(s.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?s.credentials="include":r.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function d(r){if(r.ep)return;r.ep=!0;const s=g(r);fetch(r.href,s)}};H();const M=t("nav",{background:"linear-gradient(90deg, rgb(28, 27, 27) 0%, rgb(26, 23, 23) 100%)",height:"80px",display:"flex",justifyContent:"center",alignItems:"center",fontSize:"1.2rem",position:"sticky",top:0,zIndex:999}),W=t("div",{display:"flex",justifyContent:"space-around",alignItems:"center",height:"80px",width:"100%",maxWidth:"1500px",".navbar-logo":{color:"#fff",display:"flex",justifySelf:"start",marginLeft:"20px",cursor:"pointer",textDecoration:"none",fontSize:"2rem",alignItems:"center","& svg":{marginLeft:"0.5rem",fontSize:"1.8rem","@media screen and (max-width: 960px)":{color:"#fff",fontSize:"2rem"}}},"@media screen and (max-width: 960px)":{".navbar-logo":{position:"absolute",top:0,left:0,transform:"translate(25%, 50%)"}}}),O=t("div",{display:"none","@media screen and (max-width: 960px)":{display:"block",position:"absolute",top:0,right:0,transform:"translate(-100%, 60%)",fontSize:"1.8rem",cursor:"pointer"}}),U=t("ul",{display:"grid",gridTemplateColumns:"repeat(4, auto)",gap:"10px",listStyle:"none",textAlign:"center",width:"60wh",justifyContent:"end",marginRight:"2rem",variants:{active:{true:{"@media screen and (max-width: 960px)":{background:"#242222",left:0,opacity:1,transition:"all 0.5s ease",zIndex:1}},false:{}}},"@media screen and (max-width: 960px)":{display:"flex",justifyContent:"center",flexDirection:"column",width:"100%",height:"calc(100vh - 80px)",position:"absolute",top:"80px",left:"-100%",opacity:1,transition:"all 0.5s ease"}}),_=t("li",{height:"80px","& .nav-links":{color:"#fff",display:"flex",alignItems:"center",textDecoration:"none",padding:"0.5rem 1rem",height:"100%","&:hover":{borderBottom:"4px solid #fff",transition:"all 0.2s ease-out"}},"& .nav-links-mobile":{display:"none"},"@media screen and (max-width: 960px)":{".nav-links":{textAlign:"center",padding:"2rem",width:"100%",display:"table","&:hover":{backgroundColor:"#fff",color:"#242424",borderRadius:0}},".nav-links-mobile":{display:"block",textAlign:"center",margin:"2rem auto",borderRadius:"4px",width:"80%",textDecoration:"none",fontSize:"1.5rem",backgroundColor:"transparent",color:" #fff",padding:"14px 20px",border:"1px solid #fff",transition:"all 0.3s ease-out","&:hover":{background:"#fff",color:"#242424",transition:"250ms"}}}}),$=[{path:"/",name:"Home",class:"nav-links"},{path:"/services",name:"Services",class:"nav-links"},{path:"/products",name:"Products",class:"nav-links"},{path:"/sign-up",name:"Sign Up",class:"nav-links-mobile"}],q=t("button",{padding:"8px 20px",borderRadius:"2px",outline:"none",border:"none",cursor:"pointer",variants:{size:{true:{padding:"8px 20px",fontSize:"18px","&:hover":{backgroundColor:"#fff",color:"#242424",transition:"all 0.3s ease-out"}},false:{padding:"12px 26px",fontSize:"20px","&:hover":{backgroundColor:"#fff",color:"#242424",transition:"all 0.3s ease-out"}}},style:{true:{backgroundColor:"#fff",color:"#242424",border:"1px solid #fff"},false:{backgroundColor:"transparent",color:"#fff",padding:"8px 20px",border:"1px solid #fff",transition:"all 0.3s ease-out"}}}}),e=y.exports.jsx,n=y.exports.jsxs,x=y.exports.Fragment,h=i=>e("a",{href:"https://www.instagram.com/turismonosul/",className:"btn-mobile",target:"_blank",children:e(q,{onClick:i.onClick,type:i.type,size:i.buttonSize,style:i.buttonStyle,children:i.children})}),Y=()=>{const[i,l]=v.exports.useState(!1),[g,d]=v.exports.useState(!0),r=()=>l(!i),s=()=>l(!1),c=()=>{window.innerWidth<=960?d(!1):d(!0)};return v.exports.useEffect(()=>{c()},[]),window.addEventListener("resize",c),e(x,{children:e(M,{children:n(W,{children:[n(o,{to:"/",className:"navbar-logo",onClick:s,children:["LAPTRAVEL ",e(w,{})]}),e(O,{onClick:r,children:i?e(z,{color:"#fff"}):e(L,{color:"#fff"})}),e(U,{active:i,children:$.map((b,A)=>e(_,{children:e(o,{to:b.path,className:b.class,onClick:s,children:b.name})},A))}),g&&e(h,{buttonStyle:!1,buttonSize:!0,children:"SIGN UP"})]})})})},G=F({"*":{margin:"0",padding:"0",boxSizing:"border-box",fontFamily:"PT Sans, sans-serif"}}),J=t("li",{display:"flex",flex:1,margin:"0 1rem",borderRadius:"10px",a:{display:"flex",flexFlow:"column",width:"100%",boxShadow:"0 6px 20px rgba(56, 125, 255, 0.17)","-webkit-filter":"drop-shadow(0 6px 20px rgba(56, 125, 255, 0.017))",filter:"drop-shadow(0 6px 20px rgba(56, 125, 255, 0.017))",borderRadius:"10px",overflow:"hidden",textDecoration:"none"},"@media only screen and (max-width: 1024px)":{marginBottom:"2rem"}});t("figcaption",{});const K=t("figure",{position:"relative",width:"100%",paddingTop:"67%",overflow:"hidden","&::after":{content:"attr(data-category)",position:"absolute",bottom:0,marginLeft:"10px",padding:"6px 8px",maxWidth:"calc((100%) - 60px)",fontSize:"12px",fontWeight:700,color:"#fff",backgroundColor:"#1f98f4",boxSizing:"border-box"}}),Q=t("img",{position:"absolute",top:0,right:0,bottom:0,left:0,display:"block",width:"100%",maxWidth:"100%",height:"100%",maxHeight:"100%",objectFit:"cover",transition:"all 0.2s linear","&:hover":{transform:"scale(1.1)"}}),X=t("div",{padding:"20px 30px 30px"}),Z=t("h5",{color:"#252e48",fontSize:"18px",lineHeight:"24px"}),p=i=>e(x,{children:e(J,{children:n(o,{to:i.path,className:"item",children:[e(K,{"data-category":i.label,children:e(Q,{src:i.src,alt:"Travel Image"})}),e(X,{children:e(Z,{children:i.text})})]})})});var ee="/LAPTRAVEL/assets/img-9.6b996f53.jpg",C="/LAPTRAVEL/assets/img-2.8b1dfc4b.jpg",te="/LAPTRAVEL/assets/img-3.a5e470d1.jpg",ne="/LAPTRAVEL/assets/img-4.3e998119.jpg",I="/LAPTRAVEL/assets/img-8.53856ff5.jpg";const oe=t("div",{padding:"4rem",background:"#fff"}),ie=t("h1",{textAlign:"center"}),re=t("div",{display:"flex",flexFlow:"column",alignItems:"center",maxWidth:"1120px",width:"90%",margin:"0 auto"}),ae=t("div",{position:"relative",margin:"50px 0 45px"}),S=t("ul",{marginBottom:"24px","@media only screen and (min-width: 1024px)":{display:"flex"}}),se=()=>n(oe,{children:[e(ie,{children:"O que fazer em Santa Catarina"}),e(re,{children:n(ae,{children:[n(S,{children:[e(p,{src:ee,text:"Alugue uma lancha e pague de rico no Caixa D'a\xE7o",label:"Luxury",path:"/services"}),e(p,{src:C,text:"Aprecia praias paradisiacas",label:"View",path:"/services"})]}),n(S,{children:[e(p,{src:te,text:"Roadtrip na interpraias com vista maravilhosa",label:"Roadtrip",path:"/services"}),e(p,{src:ne,text:"D\xEA um pedal na ciclovia da Meia Praia, Itapema",label:"Sports",path:"/products"}),e(p,{src:I,text:"In\xFAmeras trilhas para fazer com fam\xEDlia e amigos",label:"Adrenaline",path:"/sign-up"})]})]})})]}),le=[{class:"social-icon-link facebook",path:"/",target:"_blank",label:"Facebook",icon:e(T,{})},{class:"social-icon-link instagram",path:"/",target:"_blank",label:"Instagram",icon:e(R,{})},{class:"social-icon-link youtube",path:"/",target:"_blank",label:"Youtube",icon:e(j,{})},{class:"social-icon-link twitter",path:"/",target:"_blank",label:"Twitter",icon:e(P,{})},{class:"social-icon-link linkedin",path:"/",target:"_blank",label:"Linkedin",icon:e(E,{})}],{styled:a,css:Me}=D({media:{md:"(max-width:768px)"}}),ce=a("div",{backgroundColor:"#242424",padding:"4rem 0 2rem 0",display:"flex",flexDirection:"column",justifyContent:"center",alignSelf:"center"}),de=a("section",{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",marginBottom:"24px",padding:"24px",color:"#fff"}),pe=a("p",{fontFamily:"Trebuchet Ms, sans-serif",marginBottom:"24px",fontSize:"24px"}),fe=a("p",{fontFamily:"Trebuchet Ms, sans-serif",marginBottom:"24px",fontSize:"20px"}),me=a("div",{}),ue=a("form",{}),he=a("input",{padding:"8px 20px",borderRadius:"2px",marginRight:"10px",outline:"none",fontSize:"18px",marginBottom:"16px",border:"1px solid #fff","&::placeholder":{color:"#b1b1b1"}}),xe=a("div",{display:"flex",justifyContent:"center","@md":{flexDirection:"column",alignItems:"center"}}),k=a("div",{display:"flex"}),m=a("div",{display:"flex",flexDirection:"column",alignItems:"flex-start",margin:"16px",textAlign:"left",width:"160px",a:{color:"#fff",textDecoration:"none",marginBottom:"0.5rem","&:hover":{color:"#e9e9e9",transition:"0.3s ease-out"}}}),u=a("h2",{marginBottom:"16px",color:"#fff"}),ge=a("section",{maxWidth:"1000px",width:"100%",margin:"auto",alignItems:"center","@md":{display:"flex",justifyContent:"center",alignItems:"center"}}),be=a("div",{display:"flex",justifyContent:"space-between",alignItems:"center",width:"90%",maxWidth:"1000px",margin:"40px auto 0 auto"}),ve=a("div",{a:{color:"#fff",justifySelf:"start",marginLeft:"20px",cursor:"pointer",textDecoration:"none",fontSize:"2rem",display:"flex",alignItems:"center",marginBottom:"16px"}}),ye=a("small",{color:"#fff",marginBottom:"16px"}),Se=a("div",{".social-icon-link":{color:"#fff",fontSize:"24px"}}),ke=()=>n(ce,{children:[n(de,{children:[e(pe,{children:"Join the Adventure newsletter to receive our best vacation deals"}),e(fe,{children:"You can unsubscribe ay any time."}),e(me,{children:n(ue,{children:[e(he,{type:"email",name:"email",placeholder:"Your Email"}),e(h,{buttonStyle:!1,buttonSize:!0,children:"Subscribe"})]})})]}),n(xe,{children:[n(k,{children:[n(m,{children:[e(u,{children:"About Us"}),e(o,{to:"/sign-up",children:"How it works"}),e(o,{to:"/",children:"Testimonials"}),e(o,{to:"/",children:"Careers"}),e(o,{to:"/",children:"Investors"}),e(o,{to:"/",children:"Terms of Service"})]}),n(m,{children:[e(u,{children:"Contact Us"}),e(o,{to:"/",children:"Contact"}),e(o,{to:"/",children:"Support"}),e(o,{to:"/",children:"Destinations"}),e(o,{to:"/",children:"Sponsorships"})]})]}),n(k,{children:[n(m,{children:[e(u,{children:"Videos"}),e(o,{to:"/",children:"Submit Video"}),e(o,{to:"/",children:"Ambassadors"}),e(o,{to:"/",children:"Agency"}),e(o,{to:"/",children:"Influencer"})]}),n(m,{children:[e(u,{children:"Social Media"}),e(o,{to:"/",children:"Instagram"}),e(o,{to:"/",children:"Facebook"}),e(o,{to:"/",children:"Youtube"}),e(o,{to:"/",children:"Twitter"})]})]})]}),n(ge,{children:[e(be,{children:e(ve,{children:n(o,{to:"/",children:["LAPTRAVEL",e(w,{})]})})}),e(ye,{children:"TRVL \xA9 2020"}),e(Se,{children:le.map((i,l)=>e(o,{to:i.path,className:i.class,target:i.target,"aria-label":i.label,children:i.icon},l))})]})]}),we=t("div",{height:"calc(100vh - 80px)",width:"100%",display:"flex",flexDirection:"column",alignItems:"center",boxShadow:"inset 0 0 0 1000px rgba(0,0,0,0.2)",objectFit:"contain",justifyContent:"center"}),Ce=t("video",{objectFit:"cover",width:"100%",height:"100%",position:"fixed",zIndex:-1}),Ie=t("h1",{color:"#fff",fontSize:"100px",marginTop:"-100px","@media screen and (max-width: 960px)":{fontSize:"70px",marginTop:"-150px"},"@media screen and (max-width: 768px)":{fontSize:"50px",marginTop:"-100px "}}),Ae=t("p",{marginTop:"8px",color:"#fff",fontSize:"32px",fontFamily:"Trebuchet MS, sans-serif","@media screen and (max-width: 768px)":{fontSize:"38px",textAlign:"center"}}),ze=t("div",{marginTop:"32px","& button":{margin:"6px","@media screen and (max-width: 768px)":{width:"100%"},"& svg":{marginLeft:"4px"}}});var Le="/LAPTRAVEL/assets/video-2.2af05c3b.mp4";const Fe=()=>n(we,{children:[e(Ce,{src:Le,autoPlay:!0,loop:!0,muted:!0}),e(Ie,{children:"Santa Catarina"}),e(Ae,{children:"O que voc\xEA est\xE1 esperando?"}),n(ze,{children:[e(h,{buttonStyle:!1,buttonSize:!1,children:"Conhe\xE7a SC"}),e(h,{buttonStyle:!0,buttonSize:!1,children:"Se inscreva"})]})]}),Te=()=>n(x,{children:[e(Fe,{}),e(se,{}),e(ke,{})]}),Re=t("div",{display:"flex",height:"calc(100vh - 80px)",alignItems:"center",justifyContent:"center",fontSize:"3rem",backgroundImage:"url("+C+")",backgroundPosition:"center",backgroundSize:"cover",backgroundRepeat:"no-repeat",color:"#fff"}),je=()=>e(Re,{children:"SERVICES"});var Pe="/LAPTRAVEL/assets/img-1.4f07ef3d.jpg";const Ee=t("div",{display:"flex",height:"calc(100vh - 80px)",alignItems:"center",justifyContent:"center",fontSize:"3rem",backgroundImage:"url("+Pe+")",backgroundPosition:"center",backgroundSize:"cover",backgroundRepeat:"no-repeat",color:"#fff"}),De=()=>e(Ee,{children:"PRODUCTS"}),Be=t("div",{display:"flex",height:"calc(100vh - 80px)",alignItems:"center",justifyContent:"center",fontSize:"3rem",backgroundImage:"url("+I+")",backgroundPosition:"center",backgroundSize:"cover",backgroundRepeat:"no-repeat",color:"#fff"}),Ne=()=>e(Be,{children:"SIGN UP"}),Ve=()=>(G(),e(x,{children:n(B,{children:[e(Y,{}),n(N,{children:[e(f,{path:"/",element:e(Te,{})}),e(f,{path:"/services",element:e(je,{})}),e(f,{path:"/products",element:e(De,{})}),e(f,{path:"/sign-up",element:e(Ne,{})})]})]})}));V.render(e(Ve,{}),document.getElementById("root"));
