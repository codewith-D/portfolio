import{j as e,a as t,S as p,P as u,A as g,b as y,r as o,k as v,Q as b,e as N,R as f,B as w}from"./vendor.80b61b00.js";const S=function(){const l=document.createElement("link").relList;if(l&&l.supports&&l.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))s(n);new MutationObserver(n=>{for(const a of n)if(a.type==="childList")for(const r of a.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&s(r)}).observe(document,{childList:!0,subtree:!0});function c(n){const a={};return n.integrity&&(a.integrity=n.integrity),n.referrerpolicy&&(a.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?a.credentials="include":n.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function s(n){if(n.ep)return;n.ep=!0;const a=c(n);fetch(n.href,a)}};S();const k=()=>{const i=[{icon:"logo-linkedin",live_link:"https://www.linkedin.com/in/divyanshu-mamidwar/"},{icon:"logo-facebook",live_link:"https://www.facebook.com/divyanshu.mamidwar"},{icon:"logo-github",live_link:"https://github.com/codewith-D"},{icon:"logo-instagram",live_link:"https://instagram.com/divyanshu_2201?igshid=ZGUzMzM3NWJiOQ=="},{icon:"logo-medium",live_link:"https://medium.com/@mamidwardivyanshu"}],l=()=>{fetch("DM.pdf").then(s=>{s.blob().then(n=>{const a=window.URL.createObjectURL(n);let r=document.createElement("a");r.href=a,r.download="DM.pdf",r.click()})})},c=s=>{window.open(s)};return e("section",{id:"home",className:"md:items-center mx-auto min-h-screen flex py-10 md:flex-row flex-col items-center",children:e("div",{className:"flex-1",children:t("div",{className:"text-center",children:[t("h1",{className:"md:text-5xl text-2xl md:leading-normal py-10 leading-10 text-white font-bold",children:[t("span",{className:"text-cyan-600 md:text-6xl text-5xl",children:["hello!",e("br",{})]}),"I'm ",e("span",{children:"Divyanshu"})]}),e("h4",{className:"md:text-2xl text-lg md:leading-normal leading-5 mt-4 font-bold text-gray-600",children:"Software Developer"}),e("br",{}),e("button",{onClick:l,className:"py-1 bg-cyan-600 font-bold transform hover:scale-110 duration-100 hover:text-cyan-600 hover:bg-white px-3 text-lg  rounded-3xl ",children:"Resume"}),e("div",{className:" mt-8 text-3xl flex items-center  justify-center gap-5",children:i==null?void 0:i.map((s,n)=>e("div",{className:"text-gray-600 transform hover:scale-150 duration-150 hover:text-white cursor-pointer ",children:e("ion-icon",{name:s.icon,onClick:()=>c(s.live_link)},n)}))})]})})})};var C="/portfolio/assets/profile.e9759bc9.png";const A=()=>e("section",{id:"about",className:"py-20 text-white bg-gray-800",children:t("div",{className:"text-center mt-8",children:[t("h3",{className:"text-4xl font-semibold",children:["About ",e("span",{className:"text-cyan-600",children:"Me"})]}),e("p",{className:"text-gray-400 my-3 text-lg",children:"My introduction"}),e("div",{className:"flex md:flex-row flex-col-reverse items-center md:gap-6 gap-12 px-8 max-w-6xl mx-auto mb-20",children:e("div",{className:"p-2",children:t("div",{className:"text-gray-300 flex",children:[e("div",{className:"text-left leading-7 w-8/12  pt-20  mt-12  text-xl",children:e("div",{children:e("p",{children:"hey, my name is Divyanshu, I'm Pursuing my Computer Engineering from MIT Academy of Engineering, Pune. I am SDE Intern at CocoTechoes Solutions. I am passionate about FrontEnd development and how it works that I wanted to explore. Talking about my technology knowledge in Programming language I know C++, Javascript and in database I know MongoDB, SQL (Basic). In Web development, i'm good at Javascript, HTML, CSS. Frameworks I know for FrontEnd Development ReactJs, React Native, and CSS frameworks, I know Bootstrap, Tailwind CSS & Native Base."})})}),e("div",{className:"w-4/12 pl-12",children:e("img",{src:C,class:"h-50 max-w-full  ",alt:"..."})})]})})})]})}),I=()=>{const i=[{logo:"logo-html5",level:"Intermediate",count:65},{logo:"logo-css3",level:"Intermediate",count:65},{logo:"logo-javascript",level:"Advance",count:90},{logo:"logo-react",level:"Advance",count:90},{logo:"logo-github",level:"Advance",count:90},{logo:"cloud",level:"Intermediate",count:65}];return e("section",{id:"skills",className:"py-10  relative",children:t("div",{className:"mt-8 text-gray-100 py-10 text-center",children:[t("h3",{className:"text-4xl font-semibold",children:["My ",e("span",{className:"text-cyan-600",children:"Skills"})]}),e("p",{className:"text-gray-400 mt-3 text-lg",children:"My knowledge"}),e("div",{className:"flex items-center py-20 justify-center mt-12 gap-10 flex-wrap",children:i==null?void 0:i.map((l,c)=>t("div",{className:"border-2 py-20 group transform hover:scale-110 duration-100 border-cyan-600 relative min-w-[10rem] max-w-[16rem] bg-gray-900 p-10 rounded-xl",children:[e("div",{style:{background:`conic-gradient(rgb(8,145,170) ${l.count}%,#ddd ${l.count}%)`},className:"w-32 h-32 flex items-center justify-center rounded-full",children:e("div",{className:"text-6xl w-28 h-28 bg-gray-900 rounded-full flex items-center justify-center group-hover:text-cyan-600",children:e("ion-icon",{name:l.logo})})}),e("p",{className:"text-xl mt-3",children:l.level})]},c))})]})})};var M="/portfolio/assets/D1.c5df7aeb.png",T="/portfolio/assets/D2.385c2672.png",E="/portfolio/assets/D3.fe4dd10a.png",D="/portfolio/assets/D4.e0ce38fa.png",j="/portfolio/assets/D5.a8d2a63a.png";const P=()=>t("section",{id:"projects",className:"py-10 text-white bg-gray-800",children:[t("div",{className:"text-center mt-12",children:[t("h3",{className:"text-4xl font-semibold",children:["My ",e("span",{className:"text-cyan-600",children:"Projects"})]}),e("p",{className:"text-gray-400 mt-3 text-lg",children:"My Designs & Programs"}),e("br",{})]}),e("br",{}),e("div",{className:"flex max-w-8xl gap-6 px-5 mx-auto items-center ",children:t("div",{className:"w-[50%] mx-auto",children:[e(p,{slidesPerview:1,spaceBetween:20,breakpoints:{768:{slidesPerView:1}},loop:!0,autoplay:{delay:2e3},pagination:{clickable:!0},modules:[u,g],children:[{img:T,name:"AR Navigation",live_link:"https://github.com/codewith-D/AR-Deployment"},{img:E,name:"News Box",live_link:"https://github.com/codewith-D/NewsBox"},{img:j,name:"Product Audit System",live_link:"https://github.com/codewith-D/Product-Audit-System"},{img:M,name:"Text Utils",live_link:"https://github.com/codewith-D/TextUtils"},{img:D,name:"Calculator",live_link:"https://github.com/codewith-D/Calculator-using-HTML-CSS-JS"}].map((l,c)=>e(y,{children:t("div",{className:"h-fit w-full p-4 bg-slate-700 rounded-xl",children:[e("img",{src:l.img,alt:"",className:"rounded-lg"}),e("h3",{className:"text-xl my-4",children:l.name}),e("div",{className:"flex gap-3",children:e("a",{href:l.live_link,target:"_blank",className:"text-white bg-gray-800 transform hover:scale-110 duration-100 px-4 py-2 mx-6 rounded ",children:"View"})})]})},c))}),e("br",{}),e("a",{href:"https://github.com/codewith-D",children:e("button",{className:" py-2 bg-cyan-600 font-bold transform hover:scale-110 duration-150 hover:text-cyan-600 hover:bg-white px-3 rounded-3xl ",children:"Git Repository"})})]})})]});const R=()=>{const[i,l]=o.exports.useState(""),[c,s]=o.exports.useState(""),[n,a]=o.exports.useState("");return t("section",{id:"contact",className:"py-10 px-3 text-white",children:[t("div",{className:"text-center mt-8",children:[t("h3",{className:"text-4xl font-semibold",children:["Contact ",e("span",{className:"text-cyan-600",children:"Me"})]}),e("p",{className:"text-gray-400 mt-3 text-lg",children:"Get in touch"}),t("div",{className:"mt-16 flex md:flex-row flex-col gap-6 max-w-5xl bg-gray-800 md:p-6 p-2 rounded-lg mx-auto",children:[t("form",{onSubmit:d=>{d.preventDefault();const m=new Promise(x=>setTimeout(x,2500));b.promise(m,{pending:"Sending Message",success:"Message Sent \u{1F44C}",error:"Message rejected \u{1F92F}"});const h={name:i,email:c,message:n};N.send("service_twx53od","template_4ks6i53",h,"obBn6YsROEjHKVtRu").then(()=>{console.log("Message Send to Divyanshu")},x=>{console.log(x.text)})},className:"flex flex-col flex-1 gap-5",children:[e("input",{type:"text",placeholder:"Your Name",onChange:d=>{l(d.target.value)}}),e("input",{type:"Email",placeholder:"Your Email Address",onChange:d=>{s(d.target.value)}}),e("textarea",{placeholder:"Your Message",onChange:d=>{a(d.target.value)},rows:10}),e("button",{className:"btn-primary w-fit transform hover:scale-110 duration-150 hover:text-cyan-600 hover:bg-white",children:"Send Message"})]}),e("div",{className:"flex flex-col  gap-7 ",children:[{logo:"mail",text:"mamidwardivyanshu@gmail.com"},{logo:"logo-whatsapp",text:"7410945825"},{logo:"location",text:"Pune, Mahatashtra"}].map((d,m)=>t("div",{className:"flex flex-row   transform hover:scale-110 duration-100 text-left gap-4 flex-wrap items-center",children:[e("div",{className:"min-w-[3.5rem]  text-3xl min-h-[3.5rem] flex items-center justify-center text-white bg-cyan-600 rounded-full",children:e("ion-icon",{name:d.logo})}),e("p",{className:"md:text-base text-sm  break-words",children:d.text})]},m))})]})]}),e(v,{icon:!1,position:"top-right",autoClose:1500,hideProgressBar:!0,newestOnTop:!1,closeOnClick:!0,rtl:!1,pauseOnFocusLoss:!0,draggable:!0,pauseOnHover:!0,theme:"dark"})]})},O=()=>e("div",{className:"bg-gray-800  text-xl  text-center -mt-2 text-white",children:"Copyright \xA9 2023-24 All Right Reserved."}),B=()=>{const[i,l]=o.exports.useState(!1),[c,s]=o.exports.useState(!1),n=[{name:"HOME",link:"#home"},{name:"ABOUT",link:"#about"},{name:"INTERNSHIP",link:"#internship"},{name:"EDUCATION",link:"#education"},{name:"ACHIEVEMENT",link:"#achievements"},{name:"CERTIFICATION",link:"#certifications"},{name:"SKILL",link:"#skills"},{name:"PROJECT",link:"#projects"},{name:"CONTACT",link:"#contact"}];return o.exports.useEffect(()=>{window.addEventListener("scroll",()=>{document.querySelector("nav"),window.scrollY>0?l(!0):l(!1)})},[]),e("nav",{className:`fixed w-full left-0 top-0 z-[999] ${i?"bg-white/60  text-gray-900":"text-white"}`,children:t("div",{className:"flex items-center justify-between",children:[e("div",{className:"mx-7",children:t("h4",{className:"text-4xl font-bold",children:["Port",e("span",{className:"text-cyan-600",children:"folio"})]})}),e("div",{className:` ${i?"md:bg-white/0 bg-white":"bg-white"} text-gray-900 md:block hidden px-7 py-2 font-medium  rounded-bl-full`,children:e("ul",{className:"flex items-center gap-1 py-2 text-lg",children:n==null?void 0:n.map((a,r)=>e("li",{className:"px-4 hover:text-cyan-600",children:e("a",{href:a==null?void 0:a.link,children:a==null?void 0:a.name})},r))})}),e("div",{onClick:()=>s(!c),className:`z-[999]  ${c?"text-gray-900":"text-gray-100"} text-3xl md:hidden m-5`,children:e("ion-icon",{name:"menu"})}),e("div",{className:`md:hidden text-gray-900 absolute w-2/3 h-screen
      px-7 py-2 font-medium bg-white top-0 duration-300 ${c?"right-0":"right-[-100%]"}`,children:e("ul",{className:"flex flex-col justify-center h-full gap-10 py-2 text-lg",children:n==null?void 0:n.map((a,r)=>e("li",{onClick:()=>s(!1),className:"px-6 hover:text-cyan-600",children:e("a",{href:a==null?void 0:a.link,children:a==null?void 0:a.name})},r))})})]})})},L=()=>e("div",{className:"fixed bottom-5 sm:right-8 right-4 z-[999] hover:scale-100 cursor-pointer text-white text-4xl bg-cyan-600 w-16 h-16 flex items-center justify-center rounded-full animate-bounce",children:e("ion-icon",{name:"chatbubble-ellipses"})}),_=()=>e("section",{id:"internship",className:"py-10 text-white",children:t("div",{className:"text-center",children:[t("h3",{className:"text-4xl font-semibold mt-12",children:["My ",e("span",{className:"text-cyan-600",children:"Internships"})]}),e("p",{className:"text-gray-400 my-3 text-lg",children:"My Work Experience"}),t("div",{class:" gap-10 mx-10 items-center py-20 justify-center  pl-10 flex",children:[t("div",{class:"border-2 border-cyan-600 rounded-xl w-1/2",children:[e("div",{class:"text-4xl text-cyan-400 pb-8 pt-10",children:"Software Developer"}),e("div",{class:"text-xl text-cyan-200",children:"Cocotechoes solutions, Pune"}),e("div",{class:"text-sm text-cyan-800 pb-5",children:"Feb 2023 - present"})]}),t("div",{class:"border-2 border-cyan-600 rounded-xl w-1/2 mr-10",children:[e("div",{class:"text-4xl text-cyan-400 pb-8 pt-10",children:"Cloud Engineer"}),e("div",{class:"text-xl text-cyan-200",children:"AICTE - EduSkills"}),e("div",{class:"text-sm text-cyan-800 pb-5",children:"Aug 2022 - Oct 2022"})]})]}),t("div",{class:" gap-10 mx-10 items-center pb-20 justify-center  pl-10 flex",children:[t("div",{class:"border-2 border-cyan-600 rounded-xl w-1/2",children:[e("div",{class:"text-4xl text-cyan-400 pb-8 pt-10",children:"ReactJs Developer"}),e("div",{class:"text-xl text-cyan-200",children:"Suven Consultants & Technology, Pune"}),e("div",{class:"text-sm text-cyan-800 pb-5",children:"June 2022 - July 2022"})]}),t("div",{class:"border-2 border-cyan-600 rounded-xl w-1/2 mr-10",children:[e("div",{class:"text-4xl text-cyan-400 pb-8 pt-10",children:"Web Developer"}),e("div",{class:"text-xl text-cyan-200",children:"Happy Visitors, Kolhapur"}),e("div",{class:"text-sm text-cyan-800 pb-5",children:"June 2021 - Aug 2021"})]})]})]})}),J=()=>e("section",{id:"education",className:"py-10 text-white bg-gray-800",children:t("div",{className:"text-center",children:[t("h3",{className:"text-4xl font-semibold mt-8",children:["My ",e("span",{className:"text-cyan-600",children:"Education"})]}),e("p",{className:"text-gray-400 my-3 text-lg",children:"My Schooling"}),t("div",{className:" gap-12 mx-10  pt-8 pb-8 justify-center px-12 flex",children:[t("div",{className:"border-2 border-cyan-600 rounded-xl w-6/12 pt-10 pb-2",children:[e("div",{className:"text-4xl text-cyan-200 mb-3",children:"Bachelor's Degree of Computer Engineering"}),e("div",{className:"text-xl text-cyan-400 mb-1",children:"MIT ACADEMY OF ENGINEERING, ALANDI, PUNE"}),e("div",{className:"text-sm text-cyan-800 mb-2",children:"2019-2023"}),e("div",{className:"text-sm p-2",children:"Currently pursuing final year of BTech in Computer Engineering with specialization in Cloud Computing."}),e("div",{className:"text-sm text-cyan-600",children:"CGPA: 9.06/10"})]}),t("div",{className:"border-2 border-cyan-600 rounded-xl w-6/12 pt-10 pb-2 mb-12",children:[e("div",{className:"text-4xl text-cyan-200 mb-3",children:"HSC"}),e("div",{className:"text-xl text-cyan-400 mb-1",children:"Cambridge Junior College, Nanded"}),e("div",{className:"text-sm text-cyan-800 mb-2",children:"2019"}),e("div",{className:"text-sm p-2",children:"Completed 12th in Science Course with first-class."}),e("div",{className:"text-sm text-cyan-600",children:"Percentage: 71.23%"})]})]}),t("div",{className:" gap-12 mx-10 items-center  justify-center px-12 flex",children:[t("div",{className:"border-2 border-cyan-600 rounded-xl w-6/12 pt-10 pb-2 mb-12",children:[e("div",{className:"text-4xl text-cyan-200 mb-3",children:"SSC"}),e("div",{className:"text-xl text-cyan-400 mb-1",children:"Cambridge High School, Nanded"}),e("div",{className:"text-sm text-cyan-800 mb-2",children:"2017"}),e("div",{className:"text-sm p-2",children:"Completed 10th with flying colors."}),e("div",{className:"text-sm text-cyan-600",children:"Percentage: 94.6%"})]}),e("div",{className:" w-1/2 py-10"})]})]})}),F=()=>e("section",{id:"achievements",className:"py-10 text-white ",children:t("div",{className:"text-center",children:[t("h3",{className:"text-4xl font-semibold mt-8",children:["My ",e("span",{className:"text-cyan-600",children:"Achievements"})]}),e("p",{className:"text-gray-400 mt-3 text-xl",children:"My Accomplishments"}),t("div",{className:" gap-12 mx-10  pt-8 pb-8 justify-center px-12 flex",children:[t("div",{className:"border-2 border-cyan-600 rounded-xl w-6/12 pt-10 pb-2",children:[e("div",{className:"text-4xl text-cyan-200 mb-3",children:"Research Paper Publication"}),e("div",{className:"text-3xl text-cyan-400 mb-1 px-4",children:"Web application for AR-based Campus Navigation"}),e("div",{className:"text-base px-12 text-cyan-600",children:"International Journal of Engieering Applied Sciences and Technology, Volume 7, Issue 7"}),e("div",{className:"text-sm text-cyan-800 my-2",children:"Dec 2022"}),e("div",{className:"text-xl px-12 mb-2",children:"The research paper describes the successful implementation of the AR navigation app. we have proposed an android mobile app for campus navigation. This AR-based android mobile application is used for navigating the locations like student section, exam section, workshops, classrooms, faculty rooms, library, internet center inside the campus. To develop this mobile application, we have used many technologies like WebXR, Threejs, Vitejs, Vanilla javascript and we have integrated through webXR API."})]}),t("div",{className:"border-2 border-cyan-600 rounded-xl w-6/12 pt-10 mb-12",children:[e("div",{className:"text-4xl text-cyan-200 mb-3",children:"Research Paper Publication"}),e("div",{className:"text-3xl text-cyan-400 mb-1 px-2",children:"Density Based Traffic Management System"}),e("div",{className:"text-base px-12 text-cyan-600",children:"Strad Research, Volume 8, Issue 5"}),e("div",{className:"text-sm text-cyan-800 my-2 ",children:"May 2021"}),e("div",{className:"text-xl px-12 pt-6 ",children:"The research paper describes the presenatation of traffic management system using Internet of Things. This project operates in a way designed to control traffic congestion and signal lights. To make the signal more intelligent using Arduino and ultrasonic sensors."})]})]})]})}),H=()=>e("section",{id:"certifications",className:"py-10 text-white bg-gray-800",children:t("div",{className:"text-center",children:[t("h3",{className:"text-4xl font-semibold mt-8",children:["My ",e("span",{className:"text-cyan-600",children:"Certifications"})]}),e("p",{className:"text-gray-400 my-3 text-lg",children:"My certificates"}),t("div",{className:" gap-12 mx-10  pt-4 justify-center px-12 flex",children:[t("div",{className:"border-2 border-cyan-600 rounded-xl w-4/12 pt-6 mb-12",children:[e("div",{className:"text-2xl text-cyan-200 mb-3 px-3",children:"AWS Academy Cloud Foundation"}),e("div",{className:"text-xl text-cyan-400 mb-1",children:"AWS"}),e("div",{className:"text-sm text-cyan-800 mb-2",children:"Aug 2022"})]}),t("div",{className:"border-2 border-cyan-600 rounded-xl w-4/12 pt-6 mb-12",children:[e("div",{className:"text-2xl text-cyan-200 mb-3 px-3",children:"AWS Academy Cloud Architecting"}),e("div",{className:"text-xl text-cyan-400 mb-1",children:"AWS"}),e("div",{className:"text-sm text-cyan-800 mb-2",children:"Oct 2022"})]}),t("div",{className:"border-2 border-cyan-600 rounded-xl w-4/12 pt-6 mb-12",children:[e("div",{className:"text-2xl text-cyan-200 mb-3 px-3",children:"ReactJS Tutorial"}),e("div",{className:"text-xl text-cyan-400 mb-1",children:"Great Learning"}),e("div",{className:"text-sm text-cyan-800 mb-2",children:"June 2022"})]})]}),t("div",{className:" gap-12 mx-10 justify-center px-12 flex",children:[t("div",{className:"border-2 border-cyan-600 rounded-xl w-4/12 pt-6 mb-12",children:[e("div",{className:"text-2xl text-cyan-200 mb-3 px-3",children:"MongoDB Tutorial"}),e("div",{className:"text-xl text-cyan-400 mb-1",children:"Great Learning"}),e("div",{className:"text-sm text-cyan-800 mb-2",children:"Nov 2022"})]}),t("div",{className:"border-2 border-cyan-600 rounded-xl w-4/12 pt-6 mb-12",children:[e("div",{className:"text-2xl text-cyan-200 mb-3 px-3",children:"JavaScript for Begineers"}),e("div",{className:"text-xl text-cyan-400 mb-1",children:"Simplilearn"}),e("div",{className:"text-sm text-cyan-800 mb-2",children:"Aug 2022"})]}),t("div",{className:"border-2 border-cyan-600 rounded-xl w-4/12 pt-6 mb-12",children:[e("div",{className:"text-2xl text-cyan-200 mb-3 px-3",children:"Introduction to HTML"}),e("div",{className:"text-xl text-cyan-400 mb-1",children:"Simplilearn"}),e("div",{className:"text-sm text-cyan-800 mb-2",children:"July 2022"})]})]}),t("div",{className:" gap-12 mx-10 pb-8 justify-center px-12 flex",children:[t("div",{className:"border-2 border-cyan-600 rounded-xl w-4/12 pt-6 mb-12",children:[e("div",{className:"text-2xl text-cyan-200 mb-3 px-3",children:"Introduction to CSS"}),e("div",{className:"text-xl text-cyan-400 mb-1",children:"Simplilearn"}),e("div",{className:"text-sm text-cyan-800 mb-2",children:"Aug 2022"})]}),t("div",{className:"border-2 border-cyan-600 rounded-xl w-4/12 pt-6 mb-12",children:[e("div",{className:"text-2xl text-cyan-200 mb-3 px-3",children:"Data Structure in C++"}),e("div",{className:"text-xl text-cyan-400 mb-1",children:"Great Learning"}),e("div",{className:"text-sm text-cyan-800 mb-2",children:"Dec 2021 |"})]}),t("div",{className:"border-2 border-cyan-600 rounded-xl w-4/12 pt-6 mb-12",children:[e("div",{className:"text-2xl text-cyan-200 mb-3 px-3",children:"Programming Essentials in C++"}),e("div",{className:"text-xl text-cyan-400 mb-1",children:"C++ Institute"}),e("div",{className:"text-sm text-cyan-800 mb-2",children:"Aug 2021"})]})]}),t("div",{className:" gap-12 mx-10 pb-8 justify-center px-12 flex",children:[t("div",{className:"border-2 border-cyan-600 rounded-xl w-4/12 pt-6 mb-12",children:[e("div",{className:"text-2xl text-cyan-200 mb-3 px-3",children:"Introduction to Industry 4.0 and IIoT"}),e("div",{className:"text-xl text-cyan-400 mb-1",children:"NPTEL"}),e("div",{className:"text-sm text-cyan-800 mb-2",children:"Oct 2022"})]}),e("div",{className:"w-4/12 pt-6 mb-12"}),e("div",{className:" w-4/12 pt-6 mb-12"})]})]})}),W=()=>t("div",{children:[e(B,{}),e(L,{}),e(k,{}),e(A,{}),e(_,{}),e(J,{}),e(F,{}),e(H,{}),e(I,{}),e(P,{}),e(R,{}),e(O,{})]});f.render(e(w,{children:e(W,{})}),document.getElementById("root"));