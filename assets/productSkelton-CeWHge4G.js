import{i as e,t}from"./jsx-runtime-Cx0BB4qO.js";import{t as n}from"./react-IDFlRUvQ.js";import{h as r}from"./supabase-AoF4RATW.js";import{T as i,_ as a,c as o,h as s,l as c,s as l,t as u,v as d,w as f}from"./utils-DGZ8FjwU.js";function p(e){return String(e).match(/[\d.\-+]*\s*(.*)/)[1]||``}function m(e){return parseFloat(e)}var h=e(n(),1);function g(e){return d(`MuiSkeleton`,e)}a(`MuiSkeleton`,[`root`,`text`,`rectangular`,`rounded`,`circular`,`pulse`,`wave`,`withChildren`,`fitContent`,`heightAuto`]);var _=t(),v=e=>{let{classes:t,variant:n,animation:r,hasChildren:i,width:a,height:o}=e;return s({root:[`root`,n,r,i&&`withChildren`,i&&!a&&`fitContent`,i&&!o&&`heightAuto`]},g,t)},y=i`
  0% {
    opacity: 1;
  }

  50% {
    opacity: 0.4;
  }

  100% {
    opacity: 1;
  }
`,b=i`
  0% {
    transform: translateX(-100%);
  }

  50% {
    /* +0.5s of delay between each loop */
    transform: translateX(100%);
  }

  100% {
    transform: translateX(100%);
  }
`,x=typeof y==`string`?null:f`
        animation: ${y} 2s ease-in-out 0.5s infinite;
      `,S=typeof b==`string`?null:f`
        &::after {
          animation: ${b} 2s linear 0.5s infinite;
        }
      `,C=c(`span`,{name:`MuiSkeleton`,slot:`Root`,overridesResolver:(e,t)=>{let{ownerState:n}=e;return[t.root,t[n.variant],n.animation!==!1&&t[n.animation],n.hasChildren&&t.withChildren,n.hasChildren&&!n.width&&t.fitContent,n.hasChildren&&!n.height&&t.heightAuto]}})(o(({theme:e})=>{let t=p(e.shape.borderRadius)||`px`,n=m(e.shape.borderRadius),r=u(e,{animation:`none`}),i=u(e,{"&::after":{animation:`none`,display:`none`}});return{display:`block`,backgroundColor:e.vars?e.vars.palette.Skeleton.bg:e.alpha(e.palette.text.primary,e.palette.mode===`light`?.11:.13),height:`1.2em`,variants:[{props:{variant:`text`},style:{marginTop:0,marginBottom:0,height:`auto`,transformOrigin:`0 55%`,transform:`scale(1, 0.60)`,borderRadius:`${n}${t}/${Math.round(n/.6*10)/10}${t}`,"&:empty:before":{content:`"\\00a0"`}}},{props:{variant:`circular`},style:{borderRadius:`50%`}},{props:{variant:`rounded`},style:{borderRadius:(e.vars||e).shape.borderRadius}},{props:({ownerState:e})=>e.hasChildren,style:{"& > *":{visibility:`hidden`}}},{props:({ownerState:e})=>e.hasChildren&&!e.width,style:{maxWidth:`fit-content`}},{props:({ownerState:e})=>e.hasChildren&&!e.height,style:{height:`auto`}},{props:{animation:`pulse`},style:x||{animation:`${y} 2s ease-in-out 0.5s infinite`}},...r?[{props:{animation:`pulse`},style:r}]:[],{props:{animation:`wave`},style:{position:`relative`,overflow:`hidden`,WebkitMaskImage:`-webkit-radial-gradient(white, black)`,"&::after":{background:`linear-gradient(
                90deg,
                transparent,
                ${(e.vars||e).palette.action.hover},
                transparent
              )`,content:`""`,position:`absolute`,transform:`translateX(-100%)`,bottom:0,left:0,right:0,top:0}}},{props:{animation:`wave`},style:S||{"&::after":{animation:`${b} 2s linear 0.5s infinite`}}},...i?[{props:{animation:`wave`},style:i}]:[]]}})),w=h.forwardRef(function(e,t){let n=l({props:e,name:`MuiSkeleton`}),{animation:i=`pulse`,className:a,component:o=`span`,height:s,style:c,variant:u=`text`,width:d,...f}=n,p={...n,animation:i,component:o,variant:u,hasChildren:!!f.children},m=v(p);return(0,_.jsx)(C,{as:o,ref:t,className:r(m.root,a),ownerState:p,...f,style:{width:d,height:s,...c}})});function T({count:e=8}){return Array(e).fill(0).map((e,t)=>(0,_.jsx)(`div`,{className:`\r
      `,children:(0,_.jsxs)(`div`,{className:`  w-80  mt-15   `,children:[(0,_.jsx)(w,{variant:`rectangular`,animation:`wave`,width:300,height:300}),(0,_.jsx)(`div`,{className:`ml-20 mt-4`,children:(0,_.jsx)(w,{animation:`wave`,variant:`rectangular`,width:150,height:20})}),(0,_.jsx)(`div`,{className:`ml-27 mt-4`,children:(0,_.jsx)(w,{animation:`wave`,variant:`rectangular`,width:100,height:20})}),(0,_.jsxs)(`div`,{className:`flex justify-between gap-12 mt-2 `,children:[(0,_.jsx)(`div`,{className:` p-2  `,children:(0,_.jsx)(w,{animation:`wave`,variant:`rectangular`,width:40,height:40})}),(0,_.jsx)(`div`,{className:`p-2 ml-35`,children:(0,_.jsx)(w,{animation:`wave`,variant:`rectangular`,width:40,height:40})})]})]})}))}export{T as t};