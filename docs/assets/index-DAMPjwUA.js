(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const a of r)if(a.type==="childList")for(const s of a.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function e(r){const a={};return r.integrity&&(a.integrity=r.integrity),r.referrerPolicy&&(a.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?a.credentials="include":r.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(r){if(r.ep)return;r.ep=!0;const a=e(r);fetch(r.href,a)}})();const ec=1500,nc=500;function ic(i,t={}){i.innerHTML=`<style>
      
      #boot {
        position: fixed;
        inset: 0;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 2.5rem;
        padding: calc(env(safe-area-inset-top) + 1.5rem)
                 calc(env(safe-area-inset-right) + 1.5rem)
                 calc(env(safe-area-inset-bottom) + 1.5rem)
                 calc(env(safe-area-inset-left) + 1.5rem);
        color: #e8e8e8;
        font-family: var(--font);
        text-align: center;
        -webkit-user-select: none;
        user-select: none;
      }

      
      #message, #ok {
        opacity: 0;
        transition: opacity 0.5s ease;
      }
      #boot.revealed #message,
      #boot.revealed #ok { opacity: 1; }
      #boot.dismissing #message,
      #boot.dismissing #ok { opacity: 0; }

      #message {
        margin: 0;
        font-size: clamp(1.05rem, 4.5vw, 1.5rem);
        line-height: 1.9;
        letter-spacing: 0.04em;
        max-width: 22em;
      }

      
      #ok {
        appearance: none;
        -webkit-appearance: none;
        background: transparent;
        color: #e8e8e8;
        border: 1px solid #e8e8e8;
        border-radius: 0;
        padding: 0.65rem 3rem;
        font: inherit;
        font-size: clamp(0.95rem, 4vw, 1.15rem);
        letter-spacing: 0.3em;
        cursor: pointer;
        transition: opacity 0.5s ease, background-color 0.2s ease, color 0.2s ease;
      }
      #ok:active { background: #e8e8e8; color: #000; }

      
      #placeholder {
        position: fixed;
        inset: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 0;
        color: #555;
        font-family: var(--font);
        font-size: clamp(0.9rem, 3.5vw, 1.1rem);
        letter-spacing: 0.2em;
        opacity: 0;
        transition: opacity 0.6s ease;
        pointer-events: none;
      }
      #placeholder.revealed { opacity: 1; }
    </style>
      <main id="boot">
        <p id="message">この能力はJST専用です<br />タイムゾーンを確認して下さい</p>
        <button id="ok" type="button">OK</button>
      </main>
      <p id="placeholder" aria-hidden="true">（起動エフェクトへ）</p>
    `;const e=i.querySelector("#boot"),n=i.querySelector("#ok"),r=i.querySelector("#placeholder");let a=0,s=0;return a=window.setTimeout(()=>e.classList.add("revealed"),ec),n.addEventListener("click",()=>{e.classList.contains("dismissing")||(e.classList.remove("revealed"),e.classList.add("dismissing"),s=window.setTimeout(()=>{r.classList.add("revealed"),window.dispatchEvent(new CustomEvent("boot-check:done"))},nc))}),function(){window.clearTimeout(a),window.clearTimeout(s)}}/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const b0="170",rc=0,i1=1,ac=2,Tl=1,sc=2,ei=3,ui=0,fn=1,Tn=2,wi=0,Sr=1,Ti=2,r1=3,a1=4,oc=5,Oi=100,lc=101,cc=102,uc=103,hc=104,dc=200,fc=201,pc=202,mc=203,_o=204,xo=205,gc=206,vc=207,_c=208,xc=209,Mc=210,Sc=211,yc=212,Ec=213,wc=214,Mo=0,So=1,yo=2,br=3,Eo=4,wo=5,To=6,Ao=7,Al=0,Tc=1,Ac=2,Ai=0,bc=1,Rc=2,Cc=3,Pc=4,Lc=5,Dc=6,Ic=7,bl=300,Rr=301,Cr=302,bo=303,Ro=304,_s=306,Co=1e3,ki=1001,Po=1002,On=1003,Uc=1004,ya=1005,Wn=1006,Ls=1007,Hi=1008,hi=1009,Rl=1010,Cl=1011,oa=1012,R0=1013,Xi=1014,ai=1015,fa=1016,C0=1017,P0=1018,Pr=1020,Pl=35902,Ll=1021,Dl=1022,Fn=1023,Il=1024,Ul=1025,yr=1026,Lr=1027,Nl=1028,L0=1029,Fl=1030,D0=1031,I0=1033,is=33776,rs=33777,as=33778,ss=33779,Lo=35840,Do=35841,Io=35842,Uo=35843,No=36196,Fo=37492,Oo=37496,zo=37808,Bo=37809,ko=37810,Ho=37811,Go=37812,Vo=37813,Wo=37814,Xo=37815,qo=37816,Yo=37817,$o=37818,Ko=37819,Zo=37820,Jo=37821,os=36492,jo=36494,Qo=36495,Ol=36283,t0=36284,e0=36285,n0=36286,Nc=3200,Fc=3201,Oc=0,zc=1,ri="",on="srgb",Ki="srgb-linear",xs="linear",Te="srgb",Qi=7680,s1=519,Bc=512,kc=513,Hc=514,zl=515,Gc=516,Vc=517,Wc=518,Xc=519,i0=35044,o1="300 es",si=2e3,us=2001;class Ur{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const r=this._listeners[t];if(r!==void 0){const a=r.indexOf(e);a!==-1&&r.splice(a,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const r=n.slice(0);for(let a=0,s=r.length;a<s;a++)r[a].call(this,t);t.target=null}}}const nn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let l1=1234567;const ea=Math.PI/180,la=180/Math.PI;function li(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(nn[i&255]+nn[i>>8&255]+nn[i>>16&255]+nn[i>>24&255]+"-"+nn[t&255]+nn[t>>8&255]+"-"+nn[t>>16&15|64]+nn[t>>24&255]+"-"+nn[e&63|128]+nn[e>>8&255]+"-"+nn[e>>16&255]+nn[e>>24&255]+nn[n&255]+nn[n>>8&255]+nn[n>>16&255]+nn[n>>24&255]).toLowerCase()}function Qe(i,t,e){return Math.max(t,Math.min(e,i))}function U0(i,t){return(i%t+t)%t}function qc(i,t,e,n,r){return n+(i-t)*(r-n)/(e-t)}function Yc(i,t,e){return i!==t?(e-i)/(t-i):0}function na(i,t,e){return(1-e)*i+e*t}function $c(i,t,e,n){return na(i,t,1-Math.exp(-e*n))}function Kc(i,t=1){return t-Math.abs(U0(i,t*2)-t)}function Zc(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function Jc(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function jc(i,t){return i+Math.floor(Math.random()*(t-i+1))}function Qc(i,t){return i+Math.random()*(t-i)}function t5(i){return i*(.5-Math.random())}function e5(i){i!==void 0&&(l1=i);let t=l1+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function n5(i){return i*ea}function i5(i){return i*la}function r5(i){return(i&i-1)===0&&i!==0}function a5(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function s5(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function o5(i,t,e,n,r){const a=Math.cos,s=Math.sin,o=a(e/2),l=s(e/2),c=a((t+n)/2),u=s((t+n)/2),h=a((t-n)/2),f=s((t-n)/2),p=a((n-t)/2),g=s((n-t)/2);switch(r){case"XYX":i.set(o*u,l*h,l*f,o*c);break;case"YZY":i.set(l*f,o*u,l*h,o*c);break;case"ZXZ":i.set(l*h,l*f,o*u,o*c);break;case"XZX":i.set(o*u,l*g,l*p,o*c);break;case"YXY":i.set(l*p,o*u,l*g,o*c);break;case"ZYZ":i.set(l*g,l*p,o*u,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function Nn(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function we(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const Ce={DEG2RAD:ea,RAD2DEG:la,generateUUID:li,clamp:Qe,euclideanModulo:U0,mapLinear:qc,inverseLerp:Yc,lerp:na,damp:$c,pingpong:Kc,smoothstep:Zc,smootherstep:Jc,randInt:jc,randFloat:Qc,randFloatSpread:t5,seededRandom:e5,degToRad:n5,radToDeg:i5,isPowerOfTwo:r5,ceilPowerOfTwo:a5,floorPowerOfTwo:s5,setQuaternionFromProperEuler:o5,normalize:we,denormalize:Nn};class Zt{constructor(t=0,e=0){Zt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6],this.y=r[1]*e+r[4]*n+r[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Qe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),r=Math.sin(e),a=this.x-t.x,s=this.y-t.y;return this.x=a*n-s*r+t.x,this.y=a*r+s*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ae{constructor(t,e,n,r,a,s,o,l,c){ae.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,r,a,s,o,l,c)}set(t,e,n,r,a,s,o,l,c){const u=this.elements;return u[0]=t,u[1]=r,u[2]=o,u[3]=e,u[4]=a,u[5]=l,u[6]=n,u[7]=s,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,r=e.elements,a=this.elements,s=n[0],o=n[3],l=n[6],c=n[1],u=n[4],h=n[7],f=n[2],p=n[5],g=n[8],v=r[0],m=r[3],d=r[6],w=r[1],S=r[4],_=r[7],L=r[2],R=r[5],b=r[8];return a[0]=s*v+o*w+l*L,a[3]=s*m+o*S+l*R,a[6]=s*d+o*_+l*b,a[1]=c*v+u*w+h*L,a[4]=c*m+u*S+h*R,a[7]=c*d+u*_+h*b,a[2]=f*v+p*w+g*L,a[5]=f*m+p*S+g*R,a[8]=f*d+p*_+g*b,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],r=t[2],a=t[3],s=t[4],o=t[5],l=t[6],c=t[7],u=t[8];return e*s*u-e*o*c-n*a*u+n*o*l+r*a*c-r*s*l}invert(){const t=this.elements,e=t[0],n=t[1],r=t[2],a=t[3],s=t[4],o=t[5],l=t[6],c=t[7],u=t[8],h=u*s-o*c,f=o*l-u*a,p=c*a-s*l,g=e*h+n*f+r*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/g;return t[0]=h*v,t[1]=(r*c-u*n)*v,t[2]=(o*n-r*s)*v,t[3]=f*v,t[4]=(u*e-r*l)*v,t[5]=(r*a-o*e)*v,t[6]=p*v,t[7]=(n*l-c*e)*v,t[8]=(s*e-n*a)*v,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,r,a,s,o){const l=Math.cos(a),c=Math.sin(a);return this.set(n*l,n*c,-n*(l*s+c*o)+s+t,-r*c,r*l,-r*(-c*s+l*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(Ds.makeScale(t,e)),this}rotate(t){return this.premultiply(Ds.makeRotation(-t)),this}translate(t,e){return this.premultiply(Ds.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let r=0;r<9;r++)if(e[r]!==n[r])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Ds=new ae;function Bl(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function ca(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function l5(){const i=ca("canvas");return i.style.display="block",i}const c1={};function jr(i){i in c1||(c1[i]=!0,console.warn(i))}function c5(i,t,e){return new Promise(function(n,r){function a(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(a,e);break;default:n()}}setTimeout(a,e)})}function u5(i){const t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function h5(i){const t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const _e={enabled:!0,workingColorSpace:Ki,spaces:{},convert:function(i,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===Te&&(i.r=ci(i.r),i.g=ci(i.g),i.b=ci(i.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(i.applyMatrix3(this.spaces[t].toXYZ),i.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===Te&&(i.r=Er(i.r),i.g=Er(i.g),i.b=Er(i.b))),i},fromWorkingColorSpace:function(i,t){return this.convert(i,this.workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===ri?xs:this.spaces[i].transfer},getLuminanceCoefficients:function(i,t=this.workingColorSpace){return i.fromArray(this.spaces[t].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,t,e){return i.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function ci(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Er(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}const u1=[.64,.33,.3,.6,.15,.06],h1=[.2126,.7152,.0722],d1=[.3127,.329],f1=new ae().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),p1=new ae().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);_e.define({[Ki]:{primaries:u1,whitePoint:d1,transfer:xs,toXYZ:f1,fromXYZ:p1,luminanceCoefficients:h1,workingColorSpaceConfig:{unpackColorSpace:on},outputColorSpaceConfig:{drawingBufferColorSpace:on}},[on]:{primaries:u1,whitePoint:d1,transfer:Te,toXYZ:f1,fromXYZ:p1,luminanceCoefficients:h1,outputColorSpaceConfig:{drawingBufferColorSpace:on}}});let tr;class d5{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{tr===void 0&&(tr=ca("canvas")),tr.width=t.width,tr.height=t.height;const n=tr.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=tr}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=ca("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const r=n.getImageData(0,0,t.width,t.height),a=r.data;for(let s=0;s<a.length;s++)a[s]=ci(a[s]/255)*255;return n.putImageData(r,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(ci(e[n]/255)*255):e[n]=ci(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let f5=0;class kl{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:f5++}),this.uuid=li(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let a;if(Array.isArray(r)){a=[];for(let s=0,o=r.length;s<o;s++)r[s].isDataTexture?a.push(Is(r[s].image)):a.push(Is(r[s]))}else a=Is(r);n.url=a}return e||(t.images[this.uuid]=n),n}}function Is(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?d5.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let p5=0;class cn extends Ur{constructor(t=cn.DEFAULT_IMAGE,e=cn.DEFAULT_MAPPING,n=ki,r=ki,a=Wn,s=Hi,o=Fn,l=hi,c=cn.DEFAULT_ANISOTROPY,u=ri){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:p5++}),this.uuid=li(),this.name="",this.source=new kl(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=a,this.minFilter=s,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Zt(0,0),this.repeat=new Zt(1,1),this.center=new Zt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ae,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==bl)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Co:t.x=t.x-Math.floor(t.x);break;case ki:t.x=t.x<0?0:1;break;case Po:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Co:t.y=t.y-Math.floor(t.y);break;case ki:t.y=t.y<0?0:1;break;case Po:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}cn.DEFAULT_IMAGE=null;cn.DEFAULT_MAPPING=bl;cn.DEFAULT_ANISOTROPY=1;class Ne{constructor(t=0,e=0,n=0,r=1){Ne.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=r}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,r){return this.x=t,this.y=e,this.z=n,this.w=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,r=this.z,a=this.w,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*r+s[12]*a,this.y=s[1]*e+s[5]*n+s[9]*r+s[13]*a,this.z=s[2]*e+s[6]*n+s[10]*r+s[14]*a,this.w=s[3]*e+s[7]*n+s[11]*r+s[15]*a,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,r,a;const l=t.elements,c=l[0],u=l[4],h=l[8],f=l[1],p=l[5],g=l[9],v=l[2],m=l[6],d=l[10];if(Math.abs(u-f)<.01&&Math.abs(h-v)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+v)<.1&&Math.abs(g+m)<.1&&Math.abs(c+p+d-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const S=(c+1)/2,_=(p+1)/2,L=(d+1)/2,R=(u+f)/4,b=(h+v)/4,U=(g+m)/4;return S>_&&S>L?S<.01?(n=0,r=.707106781,a=.707106781):(n=Math.sqrt(S),r=R/n,a=b/n):_>L?_<.01?(n=.707106781,r=0,a=.707106781):(r=Math.sqrt(_),n=R/r,a=U/r):L<.01?(n=.707106781,r=.707106781,a=0):(a=Math.sqrt(L),n=b/a,r=U/a),this.set(n,r,a,e),this}let w=Math.sqrt((m-g)*(m-g)+(h-v)*(h-v)+(f-u)*(f-u));return Math.abs(w)<.001&&(w=1),this.x=(m-g)/w,this.y=(h-v)/w,this.z=(f-u)/w,this.w=Math.acos((c+p+d-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class m5 extends Ur{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new Ne(0,0,t,e),this.scissorTest=!1,this.viewport=new Ne(0,0,t,e);const r={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Wn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const a=new cn(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);a.flipY=!1,a.generateMipmaps=n.generateMipmaps,a.internalFormat=n.internalFormat,this.textures=[];const s=n.count;for(let o=0;o<s;o++)this.textures[o]=a.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let r=0,a=this.textures.length;r<a;r++)this.textures[r].image.width=t,this.textures[r].image.height=e,this.textures[r].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,r=t.textures.length;n<r;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new kl(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class qi extends m5{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Hl extends cn{constructor(t=null,e=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:r},this.magFilter=On,this.minFilter=On,this.wrapR=ki,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class g5 extends cn{constructor(t=null,e=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:r},this.magFilter=On,this.minFilter=On,this.wrapR=ki,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ln{constructor(t=0,e=0,n=0,r=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=r}static slerpFlat(t,e,n,r,a,s,o){let l=n[r+0],c=n[r+1],u=n[r+2],h=n[r+3];const f=a[s+0],p=a[s+1],g=a[s+2],v=a[s+3];if(o===0){t[e+0]=l,t[e+1]=c,t[e+2]=u,t[e+3]=h;return}if(o===1){t[e+0]=f,t[e+1]=p,t[e+2]=g,t[e+3]=v;return}if(h!==v||l!==f||c!==p||u!==g){let m=1-o;const d=l*f+c*p+u*g+h*v,w=d>=0?1:-1,S=1-d*d;if(S>Number.EPSILON){const L=Math.sqrt(S),R=Math.atan2(L,d*w);m=Math.sin(m*R)/L,o=Math.sin(o*R)/L}const _=o*w;if(l=l*m+f*_,c=c*m+p*_,u=u*m+g*_,h=h*m+v*_,m===1-o){const L=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=L,c*=L,u*=L,h*=L}}t[e]=l,t[e+1]=c,t[e+2]=u,t[e+3]=h}static multiplyQuaternionsFlat(t,e,n,r,a,s){const o=n[r],l=n[r+1],c=n[r+2],u=n[r+3],h=a[s],f=a[s+1],p=a[s+2],g=a[s+3];return t[e]=o*g+u*h+l*p-c*f,t[e+1]=l*g+u*f+c*h-o*p,t[e+2]=c*g+u*p+o*f-l*h,t[e+3]=u*g-o*h-l*f-c*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,r){return this._x=t,this._y=e,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,r=t._y,a=t._z,s=t._order,o=Math.cos,l=Math.sin,c=o(n/2),u=o(r/2),h=o(a/2),f=l(n/2),p=l(r/2),g=l(a/2);switch(s){case"XYZ":this._x=f*u*h+c*p*g,this._y=c*p*h-f*u*g,this._z=c*u*g+f*p*h,this._w=c*u*h-f*p*g;break;case"YXZ":this._x=f*u*h+c*p*g,this._y=c*p*h-f*u*g,this._z=c*u*g-f*p*h,this._w=c*u*h+f*p*g;break;case"ZXY":this._x=f*u*h-c*p*g,this._y=c*p*h+f*u*g,this._z=c*u*g+f*p*h,this._w=c*u*h-f*p*g;break;case"ZYX":this._x=f*u*h-c*p*g,this._y=c*p*h+f*u*g,this._z=c*u*g-f*p*h,this._w=c*u*h+f*p*g;break;case"YZX":this._x=f*u*h+c*p*g,this._y=c*p*h+f*u*g,this._z=c*u*g-f*p*h,this._w=c*u*h-f*p*g;break;case"XZY":this._x=f*u*h-c*p*g,this._y=c*p*h-f*u*g,this._z=c*u*g+f*p*h,this._w=c*u*h+f*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+s)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,r=Math.sin(n);return this._x=t.x*r,this._y=t.y*r,this._z=t.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],r=e[4],a=e[8],s=e[1],o=e[5],l=e[9],c=e[2],u=e[6],h=e[10],f=n+o+h;if(f>0){const p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(u-l)*p,this._y=(a-c)*p,this._z=(s-r)*p}else if(n>o&&n>h){const p=2*Math.sqrt(1+n-o-h);this._w=(u-l)/p,this._x=.25*p,this._y=(r+s)/p,this._z=(a+c)/p}else if(o>h){const p=2*Math.sqrt(1+o-n-h);this._w=(a-c)/p,this._x=(r+s)/p,this._y=.25*p,this._z=(l+u)/p}else{const p=2*Math.sqrt(1+h-n-o);this._w=(s-r)/p,this._x=(a+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Qe(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const r=Math.min(1,e/n);return this.slerp(t,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,r=t._y,a=t._z,s=t._w,o=e._x,l=e._y,c=e._z,u=e._w;return this._x=n*u+s*o+r*c-a*l,this._y=r*u+s*l+a*o-n*c,this._z=a*u+s*c+n*l-r*o,this._w=s*u-n*o-r*l-a*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,r=this._y,a=this._z,s=this._w;let o=s*t._w+n*t._x+r*t._y+a*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=s,this._x=n,this._y=r,this._z=a,this;const l=1-o*o;if(l<=Number.EPSILON){const p=1-e;return this._w=p*s+e*this._w,this._x=p*n+e*this._x,this._y=p*r+e*this._y,this._z=p*a+e*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,o),h=Math.sin((1-e)*u)/c,f=Math.sin(e*u)/c;return this._w=s*h+this._w*f,this._x=n*h+this._x*f,this._y=r*h+this._y*f,this._z=a*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),a=Math.sqrt(n);return this.set(r*Math.sin(t),r*Math.cos(t),a*Math.sin(e),a*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class D{constructor(t=0,e=0,n=0){D.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(m1.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(m1.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,r=this.z,a=t.elements;return this.x=a[0]*e+a[3]*n+a[6]*r,this.y=a[1]*e+a[4]*n+a[7]*r,this.z=a[2]*e+a[5]*n+a[8]*r,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,r=this.z,a=t.elements,s=1/(a[3]*e+a[7]*n+a[11]*r+a[15]);return this.x=(a[0]*e+a[4]*n+a[8]*r+a[12])*s,this.y=(a[1]*e+a[5]*n+a[9]*r+a[13])*s,this.z=(a[2]*e+a[6]*n+a[10]*r+a[14])*s,this}applyQuaternion(t){const e=this.x,n=this.y,r=this.z,a=t.x,s=t.y,o=t.z,l=t.w,c=2*(s*r-o*n),u=2*(o*e-a*r),h=2*(a*n-s*e);return this.x=e+l*c+s*h-o*u,this.y=n+l*u+o*c-a*h,this.z=r+l*h+a*u-s*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,r=this.z,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*r,this.y=a[1]*e+a[5]*n+a[9]*r,this.z=a[2]*e+a[6]*n+a[10]*r,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,r=t.y,a=t.z,s=e.x,o=e.y,l=e.z;return this.x=r*l-a*o,this.y=a*s-n*l,this.z=n*o-r*s,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Us.copy(this).projectOnVector(t),this.sub(Us)}reflect(t){return this.sub(Us.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Qe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,r=this.z-t.z;return e*e+n*n+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const r=Math.sin(e)*t;return this.x=r*Math.sin(n),this.y=Math.cos(e)*t,this.z=r*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),r=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=r,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Us=new D,m1=new ln;class pa{constructor(t=new D(1/0,1/0,1/0),e=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Ln.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Ln.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=Ln.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const a=n.getAttribute("position");if(e===!0&&a!==void 0&&t.isInstancedMesh!==!0)for(let s=0,o=a.count;s<o;s++)t.isMesh===!0?t.getVertexPosition(s,Ln):Ln.fromBufferAttribute(a,s),Ln.applyMatrix4(t.matrixWorld),this.expandByPoint(Ln);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Ea.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ea.copy(n.boundingBox)),Ea.applyMatrix4(t.matrixWorld),this.union(Ea)}const r=t.children;for(let a=0,s=r.length;a<s;a++)this.expandByObject(r[a],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Ln),Ln.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Gr),wa.subVectors(this.max,Gr),er.subVectors(t.a,Gr),nr.subVectors(t.b,Gr),ir.subVectors(t.c,Gr),mi.subVectors(nr,er),gi.subVectors(ir,nr),Ci.subVectors(er,ir);let e=[0,-mi.z,mi.y,0,-gi.z,gi.y,0,-Ci.z,Ci.y,mi.z,0,-mi.x,gi.z,0,-gi.x,Ci.z,0,-Ci.x,-mi.y,mi.x,0,-gi.y,gi.x,0,-Ci.y,Ci.x,0];return!Ns(e,er,nr,ir,wa)||(e=[1,0,0,0,1,0,0,0,1],!Ns(e,er,nr,ir,wa))?!1:(Ta.crossVectors(mi,gi),e=[Ta.x,Ta.y,Ta.z],Ns(e,er,nr,ir,wa))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Ln).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Ln).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Kn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Kn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Kn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Kn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Kn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Kn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Kn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Kn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Kn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Kn=[new D,new D,new D,new D,new D,new D,new D,new D],Ln=new D,Ea=new pa,er=new D,nr=new D,ir=new D,mi=new D,gi=new D,Ci=new D,Gr=new D,wa=new D,Ta=new D,Pi=new D;function Ns(i,t,e,n,r){for(let a=0,s=i.length-3;a<=s;a+=3){Pi.fromArray(i,a);const o=r.x*Math.abs(Pi.x)+r.y*Math.abs(Pi.y)+r.z*Math.abs(Pi.z),l=t.dot(Pi),c=e.dot(Pi),u=n.dot(Pi);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const v5=new pa,Vr=new D,Fs=new D;class ma{constructor(t=new D,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):v5.setFromPoints(t).getCenter(n);let r=0;for(let a=0,s=t.length;a<s;a++)r=Math.max(r,n.distanceToSquared(t[a]));return this.radius=Math.sqrt(r),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Vr.subVectors(t,this.center);const e=Vr.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),r=(n-this.radius)*.5;this.center.addScaledVector(Vr,r/n),this.radius+=r}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Fs.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Vr.copy(t.center).add(Fs)),this.expandByPoint(Vr.copy(t.center).sub(Fs))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Zn=new D,Os=new D,Aa=new D,vi=new D,zs=new D,ba=new D,Bs=new D;class Ms{constructor(t=new D,e=new D(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Zn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Zn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Zn.copy(this.origin).addScaledVector(this.direction,e),Zn.distanceToSquared(t))}distanceSqToSegment(t,e,n,r){Os.copy(t).add(e).multiplyScalar(.5),Aa.copy(e).sub(t).normalize(),vi.copy(this.origin).sub(Os);const a=t.distanceTo(e)*.5,s=-this.direction.dot(Aa),o=vi.dot(this.direction),l=-vi.dot(Aa),c=vi.lengthSq(),u=Math.abs(1-s*s);let h,f,p,g;if(u>0)if(h=s*l-o,f=s*o-l,g=a*u,h>=0)if(f>=-g)if(f<=g){const v=1/u;h*=v,f*=v,p=h*(h+s*f+2*o)+f*(s*h+f+2*l)+c}else f=a,h=Math.max(0,-(s*f+o)),p=-h*h+f*(f+2*l)+c;else f=-a,h=Math.max(0,-(s*f+o)),p=-h*h+f*(f+2*l)+c;else f<=-g?(h=Math.max(0,-(-s*a+o)),f=h>0?-a:Math.min(Math.max(-a,-l),a),p=-h*h+f*(f+2*l)+c):f<=g?(h=0,f=Math.min(Math.max(-a,-l),a),p=f*(f+2*l)+c):(h=Math.max(0,-(s*a+o)),f=h>0?a:Math.min(Math.max(-a,-l),a),p=-h*h+f*(f+2*l)+c);else f=s>0?-a:a,h=Math.max(0,-(s*f+o)),p=-h*h+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(Os).addScaledVector(Aa,f),p}intersectSphere(t,e){Zn.subVectors(t.center,this.origin);const n=Zn.dot(this.direction),r=Zn.dot(Zn)-n*n,a=t.radius*t.radius;if(r>a)return null;const s=Math.sqrt(a-r),o=n-s,l=n+s;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,r,a,s,o,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(n=(t.min.x-f.x)*c,r=(t.max.x-f.x)*c):(n=(t.max.x-f.x)*c,r=(t.min.x-f.x)*c),u>=0?(a=(t.min.y-f.y)*u,s=(t.max.y-f.y)*u):(a=(t.max.y-f.y)*u,s=(t.min.y-f.y)*u),n>s||a>r||((a>n||isNaN(n))&&(n=a),(s<r||isNaN(r))&&(r=s),h>=0?(o=(t.min.z-f.z)*h,l=(t.max.z-f.z)*h):(o=(t.max.z-f.z)*h,l=(t.min.z-f.z)*h),n>l||o>r)||((o>n||n!==n)&&(n=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(n>=0?n:r,e)}intersectsBox(t){return this.intersectBox(t,Zn)!==null}intersectTriangle(t,e,n,r,a){zs.subVectors(e,t),ba.subVectors(n,t),Bs.crossVectors(zs,ba);let s=this.direction.dot(Bs),o;if(s>0){if(r)return null;o=1}else if(s<0)o=-1,s=-s;else return null;vi.subVectors(this.origin,t);const l=o*this.direction.dot(ba.crossVectors(vi,ba));if(l<0)return null;const c=o*this.direction.dot(zs.cross(vi));if(c<0||l+c>s)return null;const u=-o*vi.dot(Bs);return u<0?null:this.at(u/s,a)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Se{constructor(t,e,n,r,a,s,o,l,c,u,h,f,p,g,v,m){Se.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,r,a,s,o,l,c,u,h,f,p,g,v,m)}set(t,e,n,r,a,s,o,l,c,u,h,f,p,g,v,m){const d=this.elements;return d[0]=t,d[4]=e,d[8]=n,d[12]=r,d[1]=a,d[5]=s,d[9]=o,d[13]=l,d[2]=c,d[6]=u,d[10]=h,d[14]=f,d[3]=p,d[7]=g,d[11]=v,d[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Se().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,r=1/rr.setFromMatrixColumn(t,0).length(),a=1/rr.setFromMatrixColumn(t,1).length(),s=1/rr.setFromMatrixColumn(t,2).length();return e[0]=n[0]*r,e[1]=n[1]*r,e[2]=n[2]*r,e[3]=0,e[4]=n[4]*a,e[5]=n[5]*a,e[6]=n[6]*a,e[7]=0,e[8]=n[8]*s,e[9]=n[9]*s,e[10]=n[10]*s,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,r=t.y,a=t.z,s=Math.cos(n),o=Math.sin(n),l=Math.cos(r),c=Math.sin(r),u=Math.cos(a),h=Math.sin(a);if(t.order==="XYZ"){const f=s*u,p=s*h,g=o*u,v=o*h;e[0]=l*u,e[4]=-l*h,e[8]=c,e[1]=p+g*c,e[5]=f-v*c,e[9]=-o*l,e[2]=v-f*c,e[6]=g+p*c,e[10]=s*l}else if(t.order==="YXZ"){const f=l*u,p=l*h,g=c*u,v=c*h;e[0]=f+v*o,e[4]=g*o-p,e[8]=s*c,e[1]=s*h,e[5]=s*u,e[9]=-o,e[2]=p*o-g,e[6]=v+f*o,e[10]=s*l}else if(t.order==="ZXY"){const f=l*u,p=l*h,g=c*u,v=c*h;e[0]=f-v*o,e[4]=-s*h,e[8]=g+p*o,e[1]=p+g*o,e[5]=s*u,e[9]=v-f*o,e[2]=-s*c,e[6]=o,e[10]=s*l}else if(t.order==="ZYX"){const f=s*u,p=s*h,g=o*u,v=o*h;e[0]=l*u,e[4]=g*c-p,e[8]=f*c+v,e[1]=l*h,e[5]=v*c+f,e[9]=p*c-g,e[2]=-c,e[6]=o*l,e[10]=s*l}else if(t.order==="YZX"){const f=s*l,p=s*c,g=o*l,v=o*c;e[0]=l*u,e[4]=v-f*h,e[8]=g*h+p,e[1]=h,e[5]=s*u,e[9]=-o*u,e[2]=-c*u,e[6]=p*h+g,e[10]=f-v*h}else if(t.order==="XZY"){const f=s*l,p=s*c,g=o*l,v=o*c;e[0]=l*u,e[4]=-h,e[8]=c*u,e[1]=f*h+v,e[5]=s*u,e[9]=p*h-g,e[2]=g*h-p,e[6]=o*u,e[10]=v*h+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(_5,t,x5)}lookAt(t,e,n){const r=this.elements;return gn.subVectors(t,e),gn.lengthSq()===0&&(gn.z=1),gn.normalize(),_i.crossVectors(n,gn),_i.lengthSq()===0&&(Math.abs(n.z)===1?gn.x+=1e-4:gn.z+=1e-4,gn.normalize(),_i.crossVectors(n,gn)),_i.normalize(),Ra.crossVectors(gn,_i),r[0]=_i.x,r[4]=Ra.x,r[8]=gn.x,r[1]=_i.y,r[5]=Ra.y,r[9]=gn.y,r[2]=_i.z,r[6]=Ra.z,r[10]=gn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,r=e.elements,a=this.elements,s=n[0],o=n[4],l=n[8],c=n[12],u=n[1],h=n[5],f=n[9],p=n[13],g=n[2],v=n[6],m=n[10],d=n[14],w=n[3],S=n[7],_=n[11],L=n[15],R=r[0],b=r[4],U=r[8],E=r[12],M=r[1],C=r[5],H=r[9],G=r[13],K=r[2],tt=r[6],Z=r[10],at=r[14],X=r[3],ft=r[7],st=r[11],Q=r[15];return a[0]=s*R+o*M+l*K+c*X,a[4]=s*b+o*C+l*tt+c*ft,a[8]=s*U+o*H+l*Z+c*st,a[12]=s*E+o*G+l*at+c*Q,a[1]=u*R+h*M+f*K+p*X,a[5]=u*b+h*C+f*tt+p*ft,a[9]=u*U+h*H+f*Z+p*st,a[13]=u*E+h*G+f*at+p*Q,a[2]=g*R+v*M+m*K+d*X,a[6]=g*b+v*C+m*tt+d*ft,a[10]=g*U+v*H+m*Z+d*st,a[14]=g*E+v*G+m*at+d*Q,a[3]=w*R+S*M+_*K+L*X,a[7]=w*b+S*C+_*tt+L*ft,a[11]=w*U+S*H+_*Z+L*st,a[15]=w*E+S*G+_*at+L*Q,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],r=t[8],a=t[12],s=t[1],o=t[5],l=t[9],c=t[13],u=t[2],h=t[6],f=t[10],p=t[14],g=t[3],v=t[7],m=t[11],d=t[15];return g*(+a*l*h-r*c*h-a*o*f+n*c*f+r*o*p-n*l*p)+v*(+e*l*p-e*c*f+a*s*f-r*s*p+r*c*u-a*l*u)+m*(+e*c*h-e*o*p-a*s*h+n*s*p+a*o*u-n*c*u)+d*(-r*o*u-e*l*h+e*o*f+r*s*h-n*s*f+n*l*u)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const r=this.elements;return t.isVector3?(r[12]=t.x,r[13]=t.y,r[14]=t.z):(r[12]=t,r[13]=e,r[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],r=t[2],a=t[3],s=t[4],o=t[5],l=t[6],c=t[7],u=t[8],h=t[9],f=t[10],p=t[11],g=t[12],v=t[13],m=t[14],d=t[15],w=h*m*c-v*f*c+v*l*p-o*m*p-h*l*d+o*f*d,S=g*f*c-u*m*c-g*l*p+s*m*p+u*l*d-s*f*d,_=u*v*c-g*h*c+g*o*p-s*v*p-u*o*d+s*h*d,L=g*h*l-u*v*l-g*o*f+s*v*f+u*o*m-s*h*m,R=e*w+n*S+r*_+a*L;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const b=1/R;return t[0]=w*b,t[1]=(v*f*a-h*m*a-v*r*p+n*m*p+h*r*d-n*f*d)*b,t[2]=(o*m*a-v*l*a+v*r*c-n*m*c-o*r*d+n*l*d)*b,t[3]=(h*l*a-o*f*a-h*r*c+n*f*c+o*r*p-n*l*p)*b,t[4]=S*b,t[5]=(u*m*a-g*f*a+g*r*p-e*m*p-u*r*d+e*f*d)*b,t[6]=(g*l*a-s*m*a-g*r*c+e*m*c+s*r*d-e*l*d)*b,t[7]=(s*f*a-u*l*a+u*r*c-e*f*c-s*r*p+e*l*p)*b,t[8]=_*b,t[9]=(g*h*a-u*v*a-g*n*p+e*v*p+u*n*d-e*h*d)*b,t[10]=(s*v*a-g*o*a+g*n*c-e*v*c-s*n*d+e*o*d)*b,t[11]=(u*o*a-s*h*a-u*n*c+e*h*c+s*n*p-e*o*p)*b,t[12]=L*b,t[13]=(u*v*r-g*h*r+g*n*f-e*v*f-u*n*m+e*h*m)*b,t[14]=(g*o*r-s*v*r-g*n*l+e*v*l+s*n*m-e*o*m)*b,t[15]=(s*h*r-u*o*r+u*n*l-e*h*l-s*n*f+e*o*f)*b,this}scale(t){const e=this.elements,n=t.x,r=t.y,a=t.z;return e[0]*=n,e[4]*=r,e[8]*=a,e[1]*=n,e[5]*=r,e[9]*=a,e[2]*=n,e[6]*=r,e[10]*=a,e[3]*=n,e[7]*=r,e[11]*=a,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],r=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,r))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),r=Math.sin(e),a=1-n,s=t.x,o=t.y,l=t.z,c=a*s,u=a*o;return this.set(c*s+n,c*o-r*l,c*l+r*o,0,c*o+r*l,u*o+n,u*l-r*s,0,c*l-r*o,u*l+r*s,a*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,r,a,s){return this.set(1,n,a,0,t,1,s,0,e,r,1,0,0,0,0,1),this}compose(t,e,n){const r=this.elements,a=e._x,s=e._y,o=e._z,l=e._w,c=a+a,u=s+s,h=o+o,f=a*c,p=a*u,g=a*h,v=s*u,m=s*h,d=o*h,w=l*c,S=l*u,_=l*h,L=n.x,R=n.y,b=n.z;return r[0]=(1-(v+d))*L,r[1]=(p+_)*L,r[2]=(g-S)*L,r[3]=0,r[4]=(p-_)*R,r[5]=(1-(f+d))*R,r[6]=(m+w)*R,r[7]=0,r[8]=(g+S)*b,r[9]=(m-w)*b,r[10]=(1-(f+v))*b,r[11]=0,r[12]=t.x,r[13]=t.y,r[14]=t.z,r[15]=1,this}decompose(t,e,n){const r=this.elements;let a=rr.set(r[0],r[1],r[2]).length();const s=rr.set(r[4],r[5],r[6]).length(),o=rr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(a=-a),t.x=r[12],t.y=r[13],t.z=r[14],Dn.copy(this);const c=1/a,u=1/s,h=1/o;return Dn.elements[0]*=c,Dn.elements[1]*=c,Dn.elements[2]*=c,Dn.elements[4]*=u,Dn.elements[5]*=u,Dn.elements[6]*=u,Dn.elements[8]*=h,Dn.elements[9]*=h,Dn.elements[10]*=h,e.setFromRotationMatrix(Dn),n.x=a,n.y=s,n.z=o,this}makePerspective(t,e,n,r,a,s,o=si){const l=this.elements,c=2*a/(e-t),u=2*a/(n-r),h=(e+t)/(e-t),f=(n+r)/(n-r);let p,g;if(o===si)p=-(s+a)/(s-a),g=-2*s*a/(s-a);else if(o===us)p=-s/(s-a),g=-s*a/(s-a);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=u,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,r,a,s,o=si){const l=this.elements,c=1/(e-t),u=1/(n-r),h=1/(s-a),f=(e+t)*c,p=(n+r)*u;let g,v;if(o===si)g=(s+a)*h,v=-2*h;else if(o===us)g=a*h,v=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=v,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let r=0;r<16;r++)if(e[r]!==n[r])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const rr=new D,Dn=new Se,_5=new D(0,0,0),x5=new D(1,1,1),_i=new D,Ra=new D,gn=new D,g1=new Se,v1=new ln;class zn{constructor(t=0,e=0,n=0,r=zn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=r}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,r=this._order){return this._x=t,this._y=e,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const r=t.elements,a=r[0],s=r[4],o=r[8],l=r[1],c=r[5],u=r[9],h=r[2],f=r[6],p=r[10];switch(e){case"XYZ":this._y=Math.asin(Qe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-s,a)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Qe(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,a),this._z=0);break;case"ZXY":this._x=Math.asin(Qe(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,p),this._z=Math.atan2(-s,c)):(this._y=0,this._z=Math.atan2(l,a));break;case"ZYX":this._y=Math.asin(-Qe(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(l,a)):(this._x=0,this._z=Math.atan2(-s,c));break;case"YZX":this._z=Math.asin(Qe(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,a)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-Qe(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,a)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return g1.makeRotationFromQuaternion(t),this.setFromRotationMatrix(g1,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return v1.setFromEuler(this),this.setFromQuaternion(v1,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}zn.DEFAULT_ORDER="XYZ";class N0{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let M5=0;const _1=new D,ar=new ln,Jn=new Se,Ca=new D,Wr=new D,S5=new D,y5=new ln,x1=new D(1,0,0),M1=new D(0,1,0),S1=new D(0,0,1),y1={type:"added"},E5={type:"removed"},sr={type:"childadded",child:null},ks={type:"childremoved",child:null};class $e extends Ur{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:M5++}),this.uuid=li(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=$e.DEFAULT_UP.clone();const t=new D,e=new zn,n=new ln,r=new D(1,1,1);function a(){n.setFromEuler(e,!1)}function s(){e.setFromQuaternion(n,void 0,!1)}e._onChange(a),n._onChange(s),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Se},normalMatrix:{value:new ae}}),this.matrix=new Se,this.matrixWorld=new Se,this.matrixAutoUpdate=$e.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=$e.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new N0,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return ar.setFromAxisAngle(t,e),this.quaternion.multiply(ar),this}rotateOnWorldAxis(t,e){return ar.setFromAxisAngle(t,e),this.quaternion.premultiply(ar),this}rotateX(t){return this.rotateOnAxis(x1,t)}rotateY(t){return this.rotateOnAxis(M1,t)}rotateZ(t){return this.rotateOnAxis(S1,t)}translateOnAxis(t,e){return _1.copy(t).applyQuaternion(this.quaternion),this.position.add(_1.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(x1,t)}translateY(t){return this.translateOnAxis(M1,t)}translateZ(t){return this.translateOnAxis(S1,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Jn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Ca.copy(t):Ca.set(t,e,n);const r=this.parent;this.updateWorldMatrix(!0,!1),Wr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Jn.lookAt(Wr,Ca,this.up):Jn.lookAt(Ca,Wr,this.up),this.quaternion.setFromRotationMatrix(Jn),r&&(Jn.extractRotation(r.matrixWorld),ar.setFromRotationMatrix(Jn),this.quaternion.premultiply(ar.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(y1),sr.child=t,this.dispatchEvent(sr),sr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(E5),ks.child=t,this.dispatchEvent(ks),ks.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Jn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Jn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Jn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(y1),sr.child=t,this.dispatchEvent(sr),sr.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,r=this.children.length;n<r;n++){const s=this.children[n].getObjectByProperty(t,e);if(s!==void 0)return s}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const r=this.children;for(let a=0,s=r.length;a<s;a++)r[a].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Wr,t,S5),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Wr,y5,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const r=this.children;for(let a=0,s=r.length;a<s;a++)r[a].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function a(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=a(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];a(t.shapes,h)}else a(t.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(t.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(a(t.materials,this.material[l]));r.material=o}else r.material=a(t.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(a(t.animations,l))}}if(e){const o=s(t.geometries),l=s(t.materials),c=s(t.textures),u=s(t.images),h=s(t.shapes),f=s(t.skeletons),p=s(t.animations),g=s(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),f.length>0&&(n.skeletons=f),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=r,n;function s(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const r=t.children[n];this.add(r.clone())}return this}}$e.DEFAULT_UP=new D(0,1,0);$e.DEFAULT_MATRIX_AUTO_UPDATE=!0;$e.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const In=new D,jn=new D,Hs=new D,Qn=new D,or=new D,lr=new D,E1=new D,Gs=new D,Vs=new D,Ws=new D,Xs=new Ne,qs=new Ne,Ys=new Ne;class An{constructor(t=new D,e=new D,n=new D){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,r){r.subVectors(n,e),In.subVectors(t,e),r.cross(In);const a=r.lengthSq();return a>0?r.multiplyScalar(1/Math.sqrt(a)):r.set(0,0,0)}static getBarycoord(t,e,n,r,a){In.subVectors(r,e),jn.subVectors(n,e),Hs.subVectors(t,e);const s=In.dot(In),o=In.dot(jn),l=In.dot(Hs),c=jn.dot(jn),u=jn.dot(Hs),h=s*c-o*o;if(h===0)return a.set(0,0,0),null;const f=1/h,p=(c*l-o*u)*f,g=(s*u-o*l)*f;return a.set(1-p-g,g,p)}static containsPoint(t,e,n,r){return this.getBarycoord(t,e,n,r,Qn)===null?!1:Qn.x>=0&&Qn.y>=0&&Qn.x+Qn.y<=1}static getInterpolation(t,e,n,r,a,s,o,l){return this.getBarycoord(t,e,n,r,Qn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(a,Qn.x),l.addScaledVector(s,Qn.y),l.addScaledVector(o,Qn.z),l)}static getInterpolatedAttribute(t,e,n,r,a,s){return Xs.setScalar(0),qs.setScalar(0),Ys.setScalar(0),Xs.fromBufferAttribute(t,e),qs.fromBufferAttribute(t,n),Ys.fromBufferAttribute(t,r),s.setScalar(0),s.addScaledVector(Xs,a.x),s.addScaledVector(qs,a.y),s.addScaledVector(Ys,a.z),s}static isFrontFacing(t,e,n,r){return In.subVectors(n,e),jn.subVectors(t,e),In.cross(jn).dot(r)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,r){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[r]),this}setFromAttributeAndIndices(t,e,n,r){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,r),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return In.subVectors(this.c,this.b),jn.subVectors(this.a,this.b),In.cross(jn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return An.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return An.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,r,a){return An.getInterpolation(t,this.a,this.b,this.c,e,n,r,a)}containsPoint(t){return An.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return An.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,r=this.b,a=this.c;let s,o;or.subVectors(r,n),lr.subVectors(a,n),Gs.subVectors(t,n);const l=or.dot(Gs),c=lr.dot(Gs);if(l<=0&&c<=0)return e.copy(n);Vs.subVectors(t,r);const u=or.dot(Vs),h=lr.dot(Vs);if(u>=0&&h<=u)return e.copy(r);const f=l*h-u*c;if(f<=0&&l>=0&&u<=0)return s=l/(l-u),e.copy(n).addScaledVector(or,s);Ws.subVectors(t,a);const p=or.dot(Ws),g=lr.dot(Ws);if(g>=0&&p<=g)return e.copy(a);const v=p*c-l*g;if(v<=0&&c>=0&&g<=0)return o=c/(c-g),e.copy(n).addScaledVector(lr,o);const m=u*g-p*h;if(m<=0&&h-u>=0&&p-g>=0)return E1.subVectors(a,r),o=(h-u)/(h-u+(p-g)),e.copy(r).addScaledVector(E1,o);const d=1/(m+v+f);return s=v*d,o=f*d,e.copy(n).addScaledVector(or,s).addScaledVector(lr,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Gl={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},xi={h:0,s:0,l:0},Pa={h:0,s:0,l:0};function $s(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class de{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const r=t;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=on){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,_e.toWorkingColorSpace(this,e),this}setRGB(t,e,n,r=_e.workingColorSpace){return this.r=t,this.g=e,this.b=n,_e.toWorkingColorSpace(this,r),this}setHSL(t,e,n,r=_e.workingColorSpace){if(t=U0(t,1),e=Qe(e,0,1),n=Qe(n,0,1),e===0)this.r=this.g=this.b=n;else{const a=n<=.5?n*(1+e):n+e-n*e,s=2*n-a;this.r=$s(s,a,t+1/3),this.g=$s(s,a,t),this.b=$s(s,a,t-1/3)}return _e.toWorkingColorSpace(this,r),this}setStyle(t,e=on){function n(a){a!==void 0&&parseFloat(a)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(t)){let a;const s=r[1],o=r[2];switch(s){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,e);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,e);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(t)){const a=r[1],s=a.length;if(s===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,e);if(s===6)return this.setHex(parseInt(a,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=on){const n=Gl[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ci(t.r),this.g=ci(t.g),this.b=ci(t.b),this}copyLinearToSRGB(t){return this.r=Er(t.r),this.g=Er(t.g),this.b=Er(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=on){return _e.fromWorkingColorSpace(rn.copy(this),t),Math.round(Qe(rn.r*255,0,255))*65536+Math.round(Qe(rn.g*255,0,255))*256+Math.round(Qe(rn.b*255,0,255))}getHexString(t=on){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=_e.workingColorSpace){_e.fromWorkingColorSpace(rn.copy(this),e);const n=rn.r,r=rn.g,a=rn.b,s=Math.max(n,r,a),o=Math.min(n,r,a);let l,c;const u=(o+s)/2;if(o===s)l=0,c=0;else{const h=s-o;switch(c=u<=.5?h/(s+o):h/(2-s-o),s){case n:l=(r-a)/h+(r<a?6:0);break;case r:l=(a-n)/h+2;break;case a:l=(n-r)/h+4;break}l/=6}return t.h=l,t.s=c,t.l=u,t}getRGB(t,e=_e.workingColorSpace){return _e.fromWorkingColorSpace(rn.copy(this),e),t.r=rn.r,t.g=rn.g,t.b=rn.b,t}getStyle(t=on){_e.fromWorkingColorSpace(rn.copy(this),t);const e=rn.r,n=rn.g,r=rn.b;return t!==on?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(t,e,n){return this.getHSL(xi),this.setHSL(xi.h+t,xi.s+e,xi.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(xi),t.getHSL(Pa);const n=na(xi.h,Pa.h,e),r=na(xi.s,Pa.s,e),a=na(xi.l,Pa.l,e);return this.setHSL(n,r,a),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,r=this.b,a=t.elements;return this.r=a[0]*e+a[3]*n+a[6]*r,this.g=a[1]*e+a[4]*n+a[7]*r,this.b=a[2]*e+a[5]*n+a[8]*r,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const rn=new de;de.NAMES=Gl;let w5=0;class Zi extends Ur{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:w5++}),this.uuid=li(),this.name="",this.blending=Sr,this.side=ui,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=_o,this.blendDst=xo,this.blendEquation=Oi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new de(0,0,0),this.blendAlpha=0,this.depthFunc=br,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=s1,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Qi,this.stencilZFail=Qi,this.stencilZPass=Qi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const r=this[e];if(r===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Sr&&(n.blending=this.blending),this.side!==ui&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==_o&&(n.blendSrc=this.blendSrc),this.blendDst!==xo&&(n.blendDst=this.blendDst),this.blendEquation!==Oi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==br&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==s1&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Qi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Qi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Qi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(a){const s=[];for(const o in a){const l=a[o];delete l.metadata,s.push(l)}return s}if(e){const a=r(t.textures),s=r(t.images);a.length>0&&(n.textures=a),s.length>0&&(n.images=s)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const r=e.length;n=new Array(r);for(let a=0;a!==r;++a)n[a]=e[a].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class hs extends Zi{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new de(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new zn,this.combine=Al,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Oe=new D,La=new Zt;class be{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=i0,this.updateRanges=[],this.gpuType=ai,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let r=0,a=this.itemSize;r<a;r++)this.array[t+r]=e.array[n+r];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)La.fromBufferAttribute(this,e),La.applyMatrix3(t),this.setXY(e,La.x,La.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Oe.fromBufferAttribute(this,e),Oe.applyMatrix3(t),this.setXYZ(e,Oe.x,Oe.y,Oe.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Oe.fromBufferAttribute(this,e),Oe.applyMatrix4(t),this.setXYZ(e,Oe.x,Oe.y,Oe.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Oe.fromBufferAttribute(this,e),Oe.applyNormalMatrix(t),this.setXYZ(e,Oe.x,Oe.y,Oe.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Oe.fromBufferAttribute(this,e),Oe.transformDirection(t),this.setXYZ(e,Oe.x,Oe.y,Oe.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Nn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=we(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Nn(e,this.array)),e}setX(t,e){return this.normalized&&(e=we(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Nn(e,this.array)),e}setY(t,e){return this.normalized&&(e=we(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Nn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=we(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Nn(e,this.array)),e}setW(t,e){return this.normalized&&(e=we(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=we(e,this.array),n=we(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,r){return t*=this.itemSize,this.normalized&&(e=we(e,this.array),n=we(n,this.array),r=we(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=r,this}setXYZW(t,e,n,r,a){return t*=this.itemSize,this.normalized&&(e=we(e,this.array),n=we(n,this.array),r=we(r,this.array),a=we(a,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=r,this.array[t+3]=a,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==i0&&(t.usage=this.usage),t}}class Vl extends be{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Wl extends be{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class pn extends be{constructor(t,e,n){super(new Float32Array(t),e,n)}}let T5=0;const En=new Se,Ks=new $e,cr=new D,vn=new pa,Xr=new pa,Ye=new D;class Ke extends Ur{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:T5++}),this.uuid=li(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Bl(t)?Wl:Vl)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const a=new ae().getNormalMatrix(t);n.applyNormalMatrix(a),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(t),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return En.makeRotationFromQuaternion(t),this.applyMatrix4(En),this}rotateX(t){return En.makeRotationX(t),this.applyMatrix4(En),this}rotateY(t){return En.makeRotationY(t),this.applyMatrix4(En),this}rotateZ(t){return En.makeRotationZ(t),this.applyMatrix4(En),this}translate(t,e,n){return En.makeTranslation(t,e,n),this.applyMatrix4(En),this}scale(t,e,n){return En.makeScale(t,e,n),this.applyMatrix4(En),this}lookAt(t){return Ks.lookAt(t),Ks.updateMatrix(),this.applyMatrix4(Ks.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(cr).negate(),this.translate(cr.x,cr.y,cr.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let r=0,a=t.length;r<a;r++){const s=t[r];n.push(s.x,s.y,s.z||0)}this.setAttribute("position",new pn(n,3))}else{for(let n=0,r=e.count;n<r;n++){const a=t[n];e.setXYZ(n,a.x,a.y,a.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new pa);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,r=e.length;n<r;n++){const a=e[n];vn.setFromBufferAttribute(a),this.morphTargetsRelative?(Ye.addVectors(this.boundingBox.min,vn.min),this.boundingBox.expandByPoint(Ye),Ye.addVectors(this.boundingBox.max,vn.max),this.boundingBox.expandByPoint(Ye)):(this.boundingBox.expandByPoint(vn.min),this.boundingBox.expandByPoint(vn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ma);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new D,1/0);return}if(t){const n=this.boundingSphere.center;if(vn.setFromBufferAttribute(t),e)for(let a=0,s=e.length;a<s;a++){const o=e[a];Xr.setFromBufferAttribute(o),this.morphTargetsRelative?(Ye.addVectors(vn.min,Xr.min),vn.expandByPoint(Ye),Ye.addVectors(vn.max,Xr.max),vn.expandByPoint(Ye)):(vn.expandByPoint(Xr.min),vn.expandByPoint(Xr.max))}vn.getCenter(n);let r=0;for(let a=0,s=t.count;a<s;a++)Ye.fromBufferAttribute(t,a),r=Math.max(r,n.distanceToSquared(Ye));if(e)for(let a=0,s=e.length;a<s;a++){const o=e[a],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)Ye.fromBufferAttribute(o,c),l&&(cr.fromBufferAttribute(t,c),Ye.add(cr)),r=Math.max(r,n.distanceToSquared(Ye))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,r=e.normal,a=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new be(new Float32Array(4*n.count),4));const s=this.getAttribute("tangent"),o=[],l=[];for(let U=0;U<n.count;U++)o[U]=new D,l[U]=new D;const c=new D,u=new D,h=new D,f=new Zt,p=new Zt,g=new Zt,v=new D,m=new D;function d(U,E,M){c.fromBufferAttribute(n,U),u.fromBufferAttribute(n,E),h.fromBufferAttribute(n,M),f.fromBufferAttribute(a,U),p.fromBufferAttribute(a,E),g.fromBufferAttribute(a,M),u.sub(c),h.sub(c),p.sub(f),g.sub(f);const C=1/(p.x*g.y-g.x*p.y);isFinite(C)&&(v.copy(u).multiplyScalar(g.y).addScaledVector(h,-p.y).multiplyScalar(C),m.copy(h).multiplyScalar(p.x).addScaledVector(u,-g.x).multiplyScalar(C),o[U].add(v),o[E].add(v),o[M].add(v),l[U].add(m),l[E].add(m),l[M].add(m))}let w=this.groups;w.length===0&&(w=[{start:0,count:t.count}]);for(let U=0,E=w.length;U<E;++U){const M=w[U],C=M.start,H=M.count;for(let G=C,K=C+H;G<K;G+=3)d(t.getX(G+0),t.getX(G+1),t.getX(G+2))}const S=new D,_=new D,L=new D,R=new D;function b(U){L.fromBufferAttribute(r,U),R.copy(L);const E=o[U];S.copy(E),S.sub(L.multiplyScalar(L.dot(E))).normalize(),_.crossVectors(R,E);const C=_.dot(l[U])<0?-1:1;s.setXYZW(U,S.x,S.y,S.z,C)}for(let U=0,E=w.length;U<E;++U){const M=w[U],C=M.start,H=M.count;for(let G=C,K=C+H;G<K;G+=3)b(t.getX(G+0)),b(t.getX(G+1)),b(t.getX(G+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new be(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,p=n.count;f<p;f++)n.setXYZ(f,0,0,0);const r=new D,a=new D,s=new D,o=new D,l=new D,c=new D,u=new D,h=new D;if(t)for(let f=0,p=t.count;f<p;f+=3){const g=t.getX(f+0),v=t.getX(f+1),m=t.getX(f+2);r.fromBufferAttribute(e,g),a.fromBufferAttribute(e,v),s.fromBufferAttribute(e,m),u.subVectors(s,a),h.subVectors(r,a),u.cross(h),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,v),c.fromBufferAttribute(n,m),o.add(u),l.add(u),c.add(u),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(v,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,p=e.count;f<p;f+=3)r.fromBufferAttribute(e,f+0),a.fromBufferAttribute(e,f+1),s.fromBufferAttribute(e,f+2),u.subVectors(s,a),h.subVectors(r,a),u.cross(h),n.setXYZ(f+0,u.x,u.y,u.z),n.setXYZ(f+1,u.x,u.y,u.z),n.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Ye.fromBufferAttribute(t,e),Ye.normalize(),t.setXYZ(e,Ye.x,Ye.y,Ye.z)}toNonIndexed(){function t(o,l){const c=o.array,u=o.itemSize,h=o.normalized,f=new c.constructor(l.length*u);let p=0,g=0;for(let v=0,m=l.length;v<m;v++){o.isInterleavedBufferAttribute?p=l[v]*o.data.stride+o.offset:p=l[v]*u;for(let d=0;d<u;d++)f[g++]=c[p++]}return new be(f,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Ke,n=this.index.array,r=this.attributes;for(const o in r){const l=r[o],c=t(l,n);e.setAttribute(o,c)}const a=this.morphAttributes;for(const o in a){const l=[],c=a[o];for(let u=0,h=c.length;u<h;u++){const f=c[u],p=t(f,n);l.push(p)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;const s=this.groups;for(let o=0,l=s.length;o<l;o++){const c=s[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const r={};let a=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,f=c.length;h<f;h++){const p=c[h];u.push(p.toJSON(t.data))}u.length>0&&(r[l]=u,a=!0)}a&&(t.data.morphAttributes=r,t.data.morphTargetsRelative=this.morphTargetsRelative);const s=this.groups;s.length>0&&(t.data.groups=JSON.parse(JSON.stringify(s)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const r=t.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(e))}const a=t.morphAttributes;for(const c in a){const u=[],h=a[c];for(let f=0,p=h.length;f<p;f++)u.push(h[f].clone(e));this.morphAttributes[c]=u}this.morphTargetsRelative=t.morphTargetsRelative;const s=t.groups;for(let c=0,u=s.length;c<u;c++){const h=s[c];this.addGroup(h.start,h.count,h.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const w1=new Se,Li=new Ms,Da=new ma,T1=new D,Ia=new D,Ua=new D,Na=new D,Zs=new D,Fa=new D,A1=new D,Oa=new D;class ke extends $e{constructor(t=new Ke,e=new hs){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const r=e[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,s=r.length;a<s;a++){const o=r[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=a}}}}getVertexPosition(t,e){const n=this.geometry,r=n.attributes.position,a=n.morphAttributes.position,s=n.morphTargetsRelative;e.fromBufferAttribute(r,t);const o=this.morphTargetInfluences;if(a&&o){Fa.set(0,0,0);for(let l=0,c=a.length;l<c;l++){const u=o[l],h=a[l];u!==0&&(Zs.fromBufferAttribute(h,t),s?Fa.addScaledVector(Zs,u):Fa.addScaledVector(Zs.sub(e),u))}e.add(Fa)}return e}raycast(t,e){const n=this.geometry,r=this.material,a=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Da.copy(n.boundingSphere),Da.applyMatrix4(a),Li.copy(t.ray).recast(t.near),!(Da.containsPoint(Li.origin)===!1&&(Li.intersectSphere(Da,T1)===null||Li.origin.distanceToSquared(T1)>(t.far-t.near)**2))&&(w1.copy(a).invert(),Li.copy(t.ray).applyMatrix4(w1),!(n.boundingBox!==null&&Li.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Li)))}_computeIntersections(t,e,n){let r;const a=this.geometry,s=this.material,o=a.index,l=a.attributes.position,c=a.attributes.uv,u=a.attributes.uv1,h=a.attributes.normal,f=a.groups,p=a.drawRange;if(o!==null)if(Array.isArray(s))for(let g=0,v=f.length;g<v;g++){const m=f[g],d=s[m.materialIndex],w=Math.max(m.start,p.start),S=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let _=w,L=S;_<L;_+=3){const R=o.getX(_),b=o.getX(_+1),U=o.getX(_+2);r=za(this,d,t,n,c,u,h,R,b,U),r&&(r.faceIndex=Math.floor(_/3),r.face.materialIndex=m.materialIndex,e.push(r))}}else{const g=Math.max(0,p.start),v=Math.min(o.count,p.start+p.count);for(let m=g,d=v;m<d;m+=3){const w=o.getX(m),S=o.getX(m+1),_=o.getX(m+2);r=za(this,s,t,n,c,u,h,w,S,_),r&&(r.faceIndex=Math.floor(m/3),e.push(r))}}else if(l!==void 0)if(Array.isArray(s))for(let g=0,v=f.length;g<v;g++){const m=f[g],d=s[m.materialIndex],w=Math.max(m.start,p.start),S=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let _=w,L=S;_<L;_+=3){const R=_,b=_+1,U=_+2;r=za(this,d,t,n,c,u,h,R,b,U),r&&(r.faceIndex=Math.floor(_/3),r.face.materialIndex=m.materialIndex,e.push(r))}}else{const g=Math.max(0,p.start),v=Math.min(l.count,p.start+p.count);for(let m=g,d=v;m<d;m+=3){const w=m,S=m+1,_=m+2;r=za(this,s,t,n,c,u,h,w,S,_),r&&(r.faceIndex=Math.floor(m/3),e.push(r))}}}}function A5(i,t,e,n,r,a,s,o){let l;if(t.side===fn?l=n.intersectTriangle(s,a,r,!0,o):l=n.intersectTriangle(r,a,s,t.side===ui,o),l===null)return null;Oa.copy(o),Oa.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(Oa);return c<e.near||c>e.far?null:{distance:c,point:Oa.clone(),object:i}}function za(i,t,e,n,r,a,s,o,l,c){i.getVertexPosition(o,Ia),i.getVertexPosition(l,Ua),i.getVertexPosition(c,Na);const u=A5(i,t,e,n,Ia,Ua,Na,A1);if(u){const h=new D;An.getBarycoord(A1,Ia,Ua,Na,h),r&&(u.uv=An.getInterpolatedAttribute(r,o,l,c,h,new Zt)),a&&(u.uv1=An.getInterpolatedAttribute(a,o,l,c,h,new Zt)),s&&(u.normal=An.getInterpolatedAttribute(s,o,l,c,h,new D),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const f={a:o,b:l,c,normal:new D,materialIndex:0};An.getNormal(Ia,Ua,Na,f.normal),u.face=f,u.barycoord=h}return u}class ga extends Ke{constructor(t=1,e=1,n=1,r=1,a=1,s=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:r,heightSegments:a,depthSegments:s};const o=this;r=Math.floor(r),a=Math.floor(a),s=Math.floor(s);const l=[],c=[],u=[],h=[];let f=0,p=0;g("z","y","x",-1,-1,n,e,t,s,a,0),g("z","y","x",1,-1,n,e,-t,s,a,1),g("x","z","y",1,1,t,n,e,r,s,2),g("x","z","y",1,-1,t,n,-e,r,s,3),g("x","y","z",1,-1,t,e,n,r,a,4),g("x","y","z",-1,-1,t,e,-n,r,a,5),this.setIndex(l),this.setAttribute("position",new pn(c,3)),this.setAttribute("normal",new pn(u,3)),this.setAttribute("uv",new pn(h,2));function g(v,m,d,w,S,_,L,R,b,U,E){const M=_/b,C=L/U,H=_/2,G=L/2,K=R/2,tt=b+1,Z=U+1;let at=0,X=0;const ft=new D;for(let st=0;st<Z;st++){const Q=st*C-G;for(let Mt=0;Mt<tt;Mt++){const wt=Mt*M-H;ft[v]=wt*w,ft[m]=Q*S,ft[d]=K,c.push(ft.x,ft.y,ft.z),ft[v]=0,ft[m]=0,ft[d]=R>0?1:-1,u.push(ft.x,ft.y,ft.z),h.push(Mt/b),h.push(1-st/U),at+=1}}for(let st=0;st<U;st++)for(let Q=0;Q<b;Q++){const Mt=f+Q+tt*st,wt=f+Q+tt*(st+1),W=f+(Q+1)+tt*(st+1),it=f+(Q+1)+tt*st;l.push(Mt,wt,it),l.push(wt,W,it),X+=6}o.addGroup(p,X,E),p+=X,f+=at}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ga(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Dr(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const r=i[e][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=r.clone():Array.isArray(r)?t[e][n]=r.slice():t[e][n]=r}}return t}function hn(i){const t={};for(let e=0;e<i.length;e++){const n=Dr(i[e]);for(const r in n)t[r]=n[r]}return t}function b5(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Xl(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:_e.workingColorSpace}const R5={clone:Dr,merge:hn};var C5=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,P5=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class dn extends Zi{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=C5,this.fragmentShader=P5,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Dr(t.uniforms),this.uniformsGroups=b5(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const r in this.uniforms){const s=this.uniforms[r].value;s&&s.isTexture?e.uniforms[r]={type:"t",value:s.toJSON(t).uuid}:s&&s.isColor?e.uniforms[r]={type:"c",value:s.getHex()}:s&&s.isVector2?e.uniforms[r]={type:"v2",value:s.toArray()}:s&&s.isVector3?e.uniforms[r]={type:"v3",value:s.toArray()}:s&&s.isVector4?e.uniforms[r]={type:"v4",value:s.toArray()}:s&&s.isMatrix3?e.uniforms[r]={type:"m3",value:s.toArray()}:s&&s.isMatrix4?e.uniforms[r]={type:"m4",value:s.toArray()}:e.uniforms[r]={value:s}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class ql extends $e{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Se,this.projectionMatrix=new Se,this.projectionMatrixInverse=new Se,this.coordinateSystem=si}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Mi=new D,b1=new Zt,R1=new Zt;class _n extends ql{constructor(t=50,e=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=la*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(ea*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return la*2*Math.atan(Math.tan(ea*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Mi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Mi.x,Mi.y).multiplyScalar(-t/Mi.z),Mi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Mi.x,Mi.y).multiplyScalar(-t/Mi.z)}getViewSize(t,e){return this.getViewBounds(t,b1,R1),e.subVectors(R1,b1)}setViewOffset(t,e,n,r,a,s){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=r,this.view.width=a,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(ea*.5*this.fov)/this.zoom,n=2*e,r=this.aspect*n,a=-.5*r;const s=this.view;if(this.view!==null&&this.view.enabled){const l=s.fullWidth,c=s.fullHeight;a+=s.offsetX*r/l,e-=s.offsetY*n/c,r*=s.width/l,n*=s.height/c}const o=this.filmOffset;o!==0&&(a+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+r,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const ur=-90,hr=1;class L5 extends $e{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new _n(ur,hr,t,e);r.layers=this.layers,this.add(r);const a=new _n(ur,hr,t,e);a.layers=this.layers,this.add(a);const s=new _n(ur,hr,t,e);s.layers=this.layers,this.add(s);const o=new _n(ur,hr,t,e);o.layers=this.layers,this.add(o);const l=new _n(ur,hr,t,e);l.layers=this.layers,this.add(l);const c=new _n(ur,hr,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,r,a,s,o,l]=e;for(const c of e)this.remove(c);if(t===si)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),s.up.set(0,0,1),s.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===us)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),s.up.set(0,0,-1),s.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[a,s,o,l,c,u]=this.children,h=t.getRenderTarget(),f=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,r),t.render(e,a),t.setRenderTarget(n,1,r),t.render(e,s),t.setRenderTarget(n,2,r),t.render(e,o),t.setRenderTarget(n,3,r),t.render(e,l),t.setRenderTarget(n,4,r),t.render(e,c),n.texture.generateMipmaps=v,t.setRenderTarget(n,5,r),t.render(e,u),t.setRenderTarget(h,f,p),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Yl extends cn{constructor(t,e,n,r,a,s,o,l,c,u){t=t!==void 0?t:[],e=e!==void 0?e:Rr,super(t,e,n,r,a,s,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class D5 extends qi{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},r=[n,n,n,n,n,n];this.texture=new Yl(r,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Wn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new ga(5,5,5),a=new dn({name:"CubemapFromEquirect",uniforms:Dr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:fn,blending:wi});a.uniforms.tEquirect.value=e;const s=new ke(r,a),o=e.minFilter;return e.minFilter===Hi&&(e.minFilter=Wn),new L5(1,10,this).update(t,s),e.minFilter=o,s.geometry.dispose(),s.material.dispose(),this}clear(t,e,n,r){const a=t.getRenderTarget();for(let s=0;s<6;s++)t.setRenderTarget(this,s),t.clear(e,n,r);t.setRenderTarget(a)}}const Js=new D,I5=new D,U5=new ae;class Ni{constructor(t=new D(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,r){return this.normal.set(t,e,n),this.constant=r,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const r=Js.subVectors(n,e).cross(I5.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(r,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(Js),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const a=-(t.start.dot(this.normal)+this.constant)/r;return a<0||a>1?null:e.copy(t.start).addScaledVector(n,a)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||U5.getNormalMatrix(t),r=this.coplanarPoint(Js).applyMatrix4(t),a=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(a),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Di=new ma,Ba=new D;class $l{constructor(t=new Ni,e=new Ni,n=new Ni,r=new Ni,a=new Ni,s=new Ni){this.planes=[t,e,n,r,a,s]}set(t,e,n,r,a,s){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(r),o[4].copy(a),o[5].copy(s),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=si){const n=this.planes,r=t.elements,a=r[0],s=r[1],o=r[2],l=r[3],c=r[4],u=r[5],h=r[6],f=r[7],p=r[8],g=r[9],v=r[10],m=r[11],d=r[12],w=r[13],S=r[14],_=r[15];if(n[0].setComponents(l-a,f-c,m-p,_-d).normalize(),n[1].setComponents(l+a,f+c,m+p,_+d).normalize(),n[2].setComponents(l+s,f+u,m+g,_+w).normalize(),n[3].setComponents(l-s,f-u,m-g,_-w).normalize(),n[4].setComponents(l-o,f-h,m-v,_-S).normalize(),e===si)n[5].setComponents(l+o,f+h,m+v,_+S).normalize();else if(e===us)n[5].setComponents(o,h,v,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Di.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Di.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Di)}intersectsSprite(t){return Di.center.set(0,0,0),Di.radius=.7071067811865476,Di.applyMatrix4(t.matrixWorld),this.intersectsSphere(Di)}intersectsSphere(t){const e=this.planes,n=t.center,r=-t.radius;for(let a=0;a<6;a++)if(e[a].distanceToPoint(n)<r)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const r=e[n];if(Ba.x=r.normal.x>0?t.max.x:t.min.x,Ba.y=r.normal.y>0?t.max.y:t.min.y,Ba.z=r.normal.z>0?t.max.z:t.min.z,r.distanceToPoint(Ba)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Kl(){let i=null,t=!1,e=null,n=null;function r(a,s){e(a,s),n=i.requestAnimationFrame(r)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(r),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(a){e=a},setContext:function(a){i=a}}}function N5(i){const t=new WeakMap;function e(o,l){const c=o.array,u=o.usage,h=c.byteLength,f=i.createBuffer();i.bindBuffer(l,f),i.bufferData(l,c,u),o.onUploadCallback();let p;if(c instanceof Float32Array)p=i.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=i.SHORT;else if(c instanceof Uint32Array)p=i.UNSIGNED_INT;else if(c instanceof Int32Array)p=i.INT;else if(c instanceof Int8Array)p=i.BYTE;else if(c instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:h}}function n(o,l,c){const u=l.array,h=l.updateRanges;if(i.bindBuffer(c,o),h.length===0)i.bufferSubData(c,0,u);else{h.sort((p,g)=>p.start-g.start);let f=0;for(let p=1;p<h.length;p++){const g=h[f],v=h[p];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++f,h[f]=v)}h.length=f+1;for(let p=0,g=h.length;p<g;p++){const v=h[p];i.bufferSubData(c,v.start*u.BYTES_PER_ELEMENT,u,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function a(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=t.get(o);l&&(i.deleteBuffer(l.buffer),t.delete(o))}function s(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=t.get(o);(!u||u.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:r,remove:a,update:s}}class va extends Ke{constructor(t=1,e=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:r};const a=t/2,s=e/2,o=Math.floor(n),l=Math.floor(r),c=o+1,u=l+1,h=t/o,f=e/l,p=[],g=[],v=[],m=[];for(let d=0;d<u;d++){const w=d*f-s;for(let S=0;S<c;S++){const _=S*h-a;g.push(_,-w,0),v.push(0,0,1),m.push(S/o),m.push(1-d/l)}}for(let d=0;d<l;d++)for(let w=0;w<o;w++){const S=w+c*d,_=w+c*(d+1),L=w+1+c*(d+1),R=w+1+c*d;p.push(S,_,R),p.push(_,L,R)}this.setIndex(p),this.setAttribute("position",new pn(g,3)),this.setAttribute("normal",new pn(v,3)),this.setAttribute("uv",new pn(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new va(t.width,t.height,t.widthSegments,t.heightSegments)}}var F5=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,O5=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,z5=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,B5=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,k5=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,H5=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,G5=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,V5=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,W5=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,X5=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,q5=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Y5=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,$5=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,K5=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Z5=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,J5=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,j5=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Q5=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,t3=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,e3=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,n3=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,i3=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,r3=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,a3=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,s3=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,o3=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,l3=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,c3=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,u3=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,h3=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,d3="gl_FragColor = linearToOutputTexel( gl_FragColor );",f3=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,p3=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,m3=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,g3=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,v3=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,_3=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,x3=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,M3=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,S3=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,y3=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,E3=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,w3=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,T3=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,A3=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,b3=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,R3=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,C3=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,P3=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,L3=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,D3=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,I3=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,U3=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,N3=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,F3=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,O3=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,z3=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,B3=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,k3=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,H3=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,G3=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,V3=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,W3=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,X3=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,q3=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Y3=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,$3=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,K3=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Z3=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,J3=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,j3=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Q3=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,t4=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,e4=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,n4=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,i4=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,r4=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,a4=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,s4=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,o4=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,l4=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,c4=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,u4=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,h4=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,d4=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,f4=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,p4=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,m4=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,g4=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,v4=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,_4=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,x4=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,M4=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,S4=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,y4=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,E4=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,w4=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,T4=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,A4=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,b4=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,R4=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,C4=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,P4=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,L4=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,D4=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,I4=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,U4=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const N4=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,F4=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,O4=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,z4=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,B4=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,k4=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,H4=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,G4=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,V4=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,W4=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,X4=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,q4=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Y4=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,$4=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,K4=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Z4=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,J4=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,j4=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Q4=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,tu=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,eu=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,nu=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,iu=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ru=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,au=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,su=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ou=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,lu=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,cu=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,uu=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,hu=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,du=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,fu=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,pu=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ce={alphahash_fragment:F5,alphahash_pars_fragment:O5,alphamap_fragment:z5,alphamap_pars_fragment:B5,alphatest_fragment:k5,alphatest_pars_fragment:H5,aomap_fragment:G5,aomap_pars_fragment:V5,batching_pars_vertex:W5,batching_vertex:X5,begin_vertex:q5,beginnormal_vertex:Y5,bsdfs:$5,iridescence_fragment:K5,bumpmap_pars_fragment:Z5,clipping_planes_fragment:J5,clipping_planes_pars_fragment:j5,clipping_planes_pars_vertex:Q5,clipping_planes_vertex:t3,color_fragment:e3,color_pars_fragment:n3,color_pars_vertex:i3,color_vertex:r3,common:a3,cube_uv_reflection_fragment:s3,defaultnormal_vertex:o3,displacementmap_pars_vertex:l3,displacementmap_vertex:c3,emissivemap_fragment:u3,emissivemap_pars_fragment:h3,colorspace_fragment:d3,colorspace_pars_fragment:f3,envmap_fragment:p3,envmap_common_pars_fragment:m3,envmap_pars_fragment:g3,envmap_pars_vertex:v3,envmap_physical_pars_fragment:R3,envmap_vertex:_3,fog_vertex:x3,fog_pars_vertex:M3,fog_fragment:S3,fog_pars_fragment:y3,gradientmap_pars_fragment:E3,lightmap_pars_fragment:w3,lights_lambert_fragment:T3,lights_lambert_pars_fragment:A3,lights_pars_begin:b3,lights_toon_fragment:C3,lights_toon_pars_fragment:P3,lights_phong_fragment:L3,lights_phong_pars_fragment:D3,lights_physical_fragment:I3,lights_physical_pars_fragment:U3,lights_fragment_begin:N3,lights_fragment_maps:F3,lights_fragment_end:O3,logdepthbuf_fragment:z3,logdepthbuf_pars_fragment:B3,logdepthbuf_pars_vertex:k3,logdepthbuf_vertex:H3,map_fragment:G3,map_pars_fragment:V3,map_particle_fragment:W3,map_particle_pars_fragment:X3,metalnessmap_fragment:q3,metalnessmap_pars_fragment:Y3,morphinstance_vertex:$3,morphcolor_vertex:K3,morphnormal_vertex:Z3,morphtarget_pars_vertex:J3,morphtarget_vertex:j3,normal_fragment_begin:Q3,normal_fragment_maps:t4,normal_pars_fragment:e4,normal_pars_vertex:n4,normal_vertex:i4,normalmap_pars_fragment:r4,clearcoat_normal_fragment_begin:a4,clearcoat_normal_fragment_maps:s4,clearcoat_pars_fragment:o4,iridescence_pars_fragment:l4,opaque_fragment:c4,packing:u4,premultiplied_alpha_fragment:h4,project_vertex:d4,dithering_fragment:f4,dithering_pars_fragment:p4,roughnessmap_fragment:m4,roughnessmap_pars_fragment:g4,shadowmap_pars_fragment:v4,shadowmap_pars_vertex:_4,shadowmap_vertex:x4,shadowmask_pars_fragment:M4,skinbase_vertex:S4,skinning_pars_vertex:y4,skinning_vertex:E4,skinnormal_vertex:w4,specularmap_fragment:T4,specularmap_pars_fragment:A4,tonemapping_fragment:b4,tonemapping_pars_fragment:R4,transmission_fragment:C4,transmission_pars_fragment:P4,uv_pars_fragment:L4,uv_pars_vertex:D4,uv_vertex:I4,worldpos_vertex:U4,background_vert:N4,background_frag:F4,backgroundCube_vert:O4,backgroundCube_frag:z4,cube_vert:B4,cube_frag:k4,depth_vert:H4,depth_frag:G4,distanceRGBA_vert:V4,distanceRGBA_frag:W4,equirect_vert:X4,equirect_frag:q4,linedashed_vert:Y4,linedashed_frag:$4,meshbasic_vert:K4,meshbasic_frag:Z4,meshlambert_vert:J4,meshlambert_frag:j4,meshmatcap_vert:Q4,meshmatcap_frag:tu,meshnormal_vert:eu,meshnormal_frag:nu,meshphong_vert:iu,meshphong_frag:ru,meshphysical_vert:au,meshphysical_frag:su,meshtoon_vert:ou,meshtoon_frag:lu,points_vert:cu,points_frag:uu,shadow_vert:hu,shadow_frag:du,sprite_vert:fu,sprite_frag:pu},Ot={common:{diffuse:{value:new de(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ae},alphaMap:{value:null},alphaMapTransform:{value:new ae},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ae}},envmap:{envMap:{value:null},envMapRotation:{value:new ae},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ae}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ae}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ae},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ae},normalScale:{value:new Zt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ae},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ae}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ae}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ae}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new de(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new de(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ae},alphaTest:{value:0},uvTransform:{value:new ae}},sprite:{diffuse:{value:new de(16777215)},opacity:{value:1},center:{value:new Zt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ae},alphaMap:{value:null},alphaMapTransform:{value:new ae},alphaTest:{value:0}}},Vn={basic:{uniforms:hn([Ot.common,Ot.specularmap,Ot.envmap,Ot.aomap,Ot.lightmap,Ot.fog]),vertexShader:ce.meshbasic_vert,fragmentShader:ce.meshbasic_frag},lambert:{uniforms:hn([Ot.common,Ot.specularmap,Ot.envmap,Ot.aomap,Ot.lightmap,Ot.emissivemap,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,Ot.fog,Ot.lights,{emissive:{value:new de(0)}}]),vertexShader:ce.meshlambert_vert,fragmentShader:ce.meshlambert_frag},phong:{uniforms:hn([Ot.common,Ot.specularmap,Ot.envmap,Ot.aomap,Ot.lightmap,Ot.emissivemap,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,Ot.fog,Ot.lights,{emissive:{value:new de(0)},specular:{value:new de(1118481)},shininess:{value:30}}]),vertexShader:ce.meshphong_vert,fragmentShader:ce.meshphong_frag},standard:{uniforms:hn([Ot.common,Ot.envmap,Ot.aomap,Ot.lightmap,Ot.emissivemap,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,Ot.roughnessmap,Ot.metalnessmap,Ot.fog,Ot.lights,{emissive:{value:new de(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ce.meshphysical_vert,fragmentShader:ce.meshphysical_frag},toon:{uniforms:hn([Ot.common,Ot.aomap,Ot.lightmap,Ot.emissivemap,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,Ot.gradientmap,Ot.fog,Ot.lights,{emissive:{value:new de(0)}}]),vertexShader:ce.meshtoon_vert,fragmentShader:ce.meshtoon_frag},matcap:{uniforms:hn([Ot.common,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,Ot.fog,{matcap:{value:null}}]),vertexShader:ce.meshmatcap_vert,fragmentShader:ce.meshmatcap_frag},points:{uniforms:hn([Ot.points,Ot.fog]),vertexShader:ce.points_vert,fragmentShader:ce.points_frag},dashed:{uniforms:hn([Ot.common,Ot.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ce.linedashed_vert,fragmentShader:ce.linedashed_frag},depth:{uniforms:hn([Ot.common,Ot.displacementmap]),vertexShader:ce.depth_vert,fragmentShader:ce.depth_frag},normal:{uniforms:hn([Ot.common,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,{opacity:{value:1}}]),vertexShader:ce.meshnormal_vert,fragmentShader:ce.meshnormal_frag},sprite:{uniforms:hn([Ot.sprite,Ot.fog]),vertexShader:ce.sprite_vert,fragmentShader:ce.sprite_frag},background:{uniforms:{uvTransform:{value:new ae},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ce.background_vert,fragmentShader:ce.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ae}},vertexShader:ce.backgroundCube_vert,fragmentShader:ce.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ce.cube_vert,fragmentShader:ce.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ce.equirect_vert,fragmentShader:ce.equirect_frag},distanceRGBA:{uniforms:hn([Ot.common,Ot.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ce.distanceRGBA_vert,fragmentShader:ce.distanceRGBA_frag},shadow:{uniforms:hn([Ot.lights,Ot.fog,{color:{value:new de(0)},opacity:{value:1}}]),vertexShader:ce.shadow_vert,fragmentShader:ce.shadow_frag}};Vn.physical={uniforms:hn([Vn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ae},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ae},clearcoatNormalScale:{value:new Zt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ae},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ae},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ae},sheen:{value:0},sheenColor:{value:new de(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ae},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ae},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ae},transmissionSamplerSize:{value:new Zt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ae},attenuationDistance:{value:0},attenuationColor:{value:new de(0)},specularColor:{value:new de(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ae},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ae},anisotropyVector:{value:new Zt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ae}}]),vertexShader:ce.meshphysical_vert,fragmentShader:ce.meshphysical_frag};const ka={r:0,b:0,g:0},Ii=new zn,mu=new Se;function gu(i,t,e,n,r,a,s){const o=new de(0);let l=a===!0?0:1,c,u,h=null,f=0,p=null;function g(w){let S=w.isScene===!0?w.background:null;return S&&S.isTexture&&(S=(w.backgroundBlurriness>0?e:t).get(S)),S}function v(w){let S=!1;const _=g(w);_===null?d(o,l):_&&_.isColor&&(d(_,1),S=!0);const L=i.xr.getEnvironmentBlendMode();L==="additive"?n.buffers.color.setClear(0,0,0,1,s):L==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,s),(i.autoClear||S)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(w,S){const _=g(S);_&&(_.isCubeTexture||_.mapping===_s)?(u===void 0&&(u=new ke(new ga(1,1,1),new dn({name:"BackgroundCubeMaterial",uniforms:Dr(Vn.backgroundCube.uniforms),vertexShader:Vn.backgroundCube.vertexShader,fragmentShader:Vn.backgroundCube.fragmentShader,side:fn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(L,R,b){this.matrixWorld.copyPosition(b.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),Ii.copy(S.backgroundRotation),Ii.x*=-1,Ii.y*=-1,Ii.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(Ii.y*=-1,Ii.z*=-1),u.material.uniforms.envMap.value=_,u.material.uniforms.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(mu.makeRotationFromEuler(Ii)),u.material.toneMapped=_e.getTransfer(_.colorSpace)!==Te,(h!==_||f!==_.version||p!==i.toneMapping)&&(u.material.needsUpdate=!0,h=_,f=_.version,p=i.toneMapping),u.layers.enableAll(),w.unshift(u,u.geometry,u.material,0,0,null)):_&&_.isTexture&&(c===void 0&&(c=new ke(new va(2,2),new dn({name:"BackgroundMaterial",uniforms:Dr(Vn.background.uniforms),vertexShader:Vn.background.vertexShader,fragmentShader:Vn.background.fragmentShader,side:ui,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=_,c.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,c.material.toneMapped=_e.getTransfer(_.colorSpace)!==Te,_.matrixAutoUpdate===!0&&_.updateMatrix(),c.material.uniforms.uvTransform.value.copy(_.matrix),(h!==_||f!==_.version||p!==i.toneMapping)&&(c.material.needsUpdate=!0,h=_,f=_.version,p=i.toneMapping),c.layers.enableAll(),w.unshift(c,c.geometry,c.material,0,0,null))}function d(w,S){w.getRGB(ka,Xl(i)),n.buffers.color.setClear(ka.r,ka.g,ka.b,S,s)}return{getClearColor:function(){return o},setClearColor:function(w,S=1){o.set(w),l=S,d(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(w){l=w,d(o,l)},render:v,addToRenderList:m}}function vu(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=f(null);let a=r,s=!1;function o(M,C,H,G,K){let tt=!1;const Z=h(G,H,C);a!==Z&&(a=Z,c(a.object)),tt=p(M,G,H,K),tt&&g(M,G,H,K),K!==null&&t.update(K,i.ELEMENT_ARRAY_BUFFER),(tt||s)&&(s=!1,_(M,C,H,G),K!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(K).buffer))}function l(){return i.createVertexArray()}function c(M){return i.bindVertexArray(M)}function u(M){return i.deleteVertexArray(M)}function h(M,C,H){const G=H.wireframe===!0;let K=n[M.id];K===void 0&&(K={},n[M.id]=K);let tt=K[C.id];tt===void 0&&(tt={},K[C.id]=tt);let Z=tt[G];return Z===void 0&&(Z=f(l()),tt[G]=Z),Z}function f(M){const C=[],H=[],G=[];for(let K=0;K<e;K++)C[K]=0,H[K]=0,G[K]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:C,enabledAttributes:H,attributeDivisors:G,object:M,attributes:{},index:null}}function p(M,C,H,G){const K=a.attributes,tt=C.attributes;let Z=0;const at=H.getAttributes();for(const X in at)if(at[X].location>=0){const st=K[X];let Q=tt[X];if(Q===void 0&&(X==="instanceMatrix"&&M.instanceMatrix&&(Q=M.instanceMatrix),X==="instanceColor"&&M.instanceColor&&(Q=M.instanceColor)),st===void 0||st.attribute!==Q||Q&&st.data!==Q.data)return!0;Z++}return a.attributesNum!==Z||a.index!==G}function g(M,C,H,G){const K={},tt=C.attributes;let Z=0;const at=H.getAttributes();for(const X in at)if(at[X].location>=0){let st=tt[X];st===void 0&&(X==="instanceMatrix"&&M.instanceMatrix&&(st=M.instanceMatrix),X==="instanceColor"&&M.instanceColor&&(st=M.instanceColor));const Q={};Q.attribute=st,st&&st.data&&(Q.data=st.data),K[X]=Q,Z++}a.attributes=K,a.attributesNum=Z,a.index=G}function v(){const M=a.newAttributes;for(let C=0,H=M.length;C<H;C++)M[C]=0}function m(M){d(M,0)}function d(M,C){const H=a.newAttributes,G=a.enabledAttributes,K=a.attributeDivisors;H[M]=1,G[M]===0&&(i.enableVertexAttribArray(M),G[M]=1),K[M]!==C&&(i.vertexAttribDivisor(M,C),K[M]=C)}function w(){const M=a.newAttributes,C=a.enabledAttributes;for(let H=0,G=C.length;H<G;H++)C[H]!==M[H]&&(i.disableVertexAttribArray(H),C[H]=0)}function S(M,C,H,G,K,tt,Z){Z===!0?i.vertexAttribIPointer(M,C,H,K,tt):i.vertexAttribPointer(M,C,H,G,K,tt)}function _(M,C,H,G){v();const K=G.attributes,tt=H.getAttributes(),Z=C.defaultAttributeValues;for(const at in tt){const X=tt[at];if(X.location>=0){let ft=K[at];if(ft===void 0&&(at==="instanceMatrix"&&M.instanceMatrix&&(ft=M.instanceMatrix),at==="instanceColor"&&M.instanceColor&&(ft=M.instanceColor)),ft!==void 0){const st=ft.normalized,Q=ft.itemSize,Mt=t.get(ft);if(Mt===void 0)continue;const wt=Mt.buffer,W=Mt.type,it=Mt.bytesPerElement,St=W===i.INT||W===i.UNSIGNED_INT||ft.gpuType===R0;if(ft.isInterleavedBufferAttribute){const $=ft.data,_t=$.stride,F=ft.offset;if($.isInstancedInterleavedBuffer){for(let nt=0;nt<X.locationSize;nt++)d(X.location+nt,$.meshPerAttribute);M.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=$.meshPerAttribute*$.count)}else for(let nt=0;nt<X.locationSize;nt++)m(X.location+nt);i.bindBuffer(i.ARRAY_BUFFER,wt);for(let nt=0;nt<X.locationSize;nt++)S(X.location+nt,Q/X.locationSize,W,st,_t*it,(F+Q/X.locationSize*nt)*it,St)}else{if(ft.isInstancedBufferAttribute){for(let $=0;$<X.locationSize;$++)d(X.location+$,ft.meshPerAttribute);M.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=ft.meshPerAttribute*ft.count)}else for(let $=0;$<X.locationSize;$++)m(X.location+$);i.bindBuffer(i.ARRAY_BUFFER,wt);for(let $=0;$<X.locationSize;$++)S(X.location+$,Q/X.locationSize,W,st,Q*it,Q/X.locationSize*$*it,St)}}else if(Z!==void 0){const st=Z[at];if(st!==void 0)switch(st.length){case 2:i.vertexAttrib2fv(X.location,st);break;case 3:i.vertexAttrib3fv(X.location,st);break;case 4:i.vertexAttrib4fv(X.location,st);break;default:i.vertexAttrib1fv(X.location,st)}}}}w()}function L(){U();for(const M in n){const C=n[M];for(const H in C){const G=C[H];for(const K in G)u(G[K].object),delete G[K];delete C[H]}delete n[M]}}function R(M){if(n[M.id]===void 0)return;const C=n[M.id];for(const H in C){const G=C[H];for(const K in G)u(G[K].object),delete G[K];delete C[H]}delete n[M.id]}function b(M){for(const C in n){const H=n[C];if(H[M.id]===void 0)continue;const G=H[M.id];for(const K in G)u(G[K].object),delete G[K];delete H[M.id]}}function U(){E(),s=!0,a!==r&&(a=r,c(a.object))}function E(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:U,resetDefaultState:E,dispose:L,releaseStatesOfGeometry:R,releaseStatesOfProgram:b,initAttributes:v,enableAttribute:m,disableUnusedAttributes:w}}function _u(i,t,e){let n;function r(c){n=c}function a(c,u){i.drawArrays(n,c,u),e.update(u,n,1)}function s(c,u,h){h!==0&&(i.drawArraysInstanced(n,c,u,h),e.update(u,n,h))}function o(c,u,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,u,0,h);let p=0;for(let g=0;g<h;g++)p+=u[g];e.update(p,n,1)}function l(c,u,h,f){if(h===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<c.length;g++)s(c[g],u[g],f[g]);else{p.multiDrawArraysInstancedWEBGL(n,c,0,u,0,f,0,h);let g=0;for(let v=0;v<h;v++)g+=u[v]*f[v];e.update(g,n,1)}}this.setMode=r,this.render=a,this.renderInstances=s,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function xu(i,t,e,n){let r;function a(){if(r!==void 0)return r;if(t.has("EXT_texture_filter_anisotropic")===!0){const b=t.get("EXT_texture_filter_anisotropic");r=i.getParameter(b.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function s(b){return!(b!==Fn&&n.convert(b)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(b){const U=b===fa&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(b!==hi&&n.convert(b)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&b!==ai&&!U)}function l(b){if(b==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";b="mediump"}return b==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const h=e.logarithmicDepthBuffer===!0,f=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),d=i.getParameter(i.MAX_VERTEX_ATTRIBS),w=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),S=i.getParameter(i.MAX_VARYING_VECTORS),_=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),L=g>0,R=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:l,textureFormatReadable:s,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:h,reverseDepthBuffer:f,maxTextures:p,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:m,maxAttributes:d,maxVertexUniforms:w,maxVaryings:S,maxFragmentUniforms:_,vertexTextures:L,maxSamples:R}}function Mu(i){const t=this;let e=null,n=0,r=!1,a=!1;const s=new Ni,o=new ae,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const p=h.length!==0||f||n!==0||r;return r=f,n=h.length,p},this.beginShadows=function(){a=!0,u(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(h,f){e=u(h,f,0)},this.setState=function(h,f,p){const g=h.clippingPlanes,v=h.clipIntersection,m=h.clipShadows,d=i.get(h);if(!r||g===null||g.length===0||a&&!m)a?u(null):c();else{const w=a?0:n,S=w*4;let _=d.clippingState||null;l.value=_,_=u(g,f,S,p);for(let L=0;L!==S;++L)_[L]=e[L];d.clippingState=_,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=w}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function u(h,f,p,g){const v=h!==null?h.length:0;let m=null;if(v!==0){if(m=l.value,g!==!0||m===null){const d=p+v*4,w=f.matrixWorldInverse;o.getNormalMatrix(w),(m===null||m.length<d)&&(m=new Float32Array(d));for(let S=0,_=p;S!==v;++S,_+=4)s.copy(h[S]).applyMatrix4(w,o),s.normal.toArray(m,_),m[_+3]=s.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=v,t.numIntersection=0,m}}function Su(i){let t=new WeakMap;function e(s,o){return o===bo?s.mapping=Rr:o===Ro&&(s.mapping=Cr),s}function n(s){if(s&&s.isTexture){const o=s.mapping;if(o===bo||o===Ro)if(t.has(s)){const l=t.get(s).texture;return e(l,s.mapping)}else{const l=s.image;if(l&&l.height>0){const c=new D5(l.height);return c.fromEquirectangularTexture(i,s),t.set(s,c),s.addEventListener("dispose",r),e(c.texture,s.mapping)}else return null}}return s}function r(s){const o=s.target;o.removeEventListener("dispose",r);const l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function a(){t=new WeakMap}return{get:n,dispose:a}}class yu extends ql{constructor(t=-1,e=1,n=1,r=-1,a=.1,s=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=r,this.near=a,this.far=s,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,r,a,s){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=r,this.view.width=a,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let a=n-t,s=n+t,o=r+e,l=r-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=c*this.view.offsetX,s=a+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(a,s,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const _r=4,C1=[.125,.215,.35,.446,.526,.582],zi=20,js=new yu,P1=new de;let Qs=null,to=0,eo=0,no=!1;const Fi=(1+Math.sqrt(5))/2,dr=1/Fi,L1=[new D(-Fi,dr,0),new D(Fi,dr,0),new D(-dr,0,Fi),new D(dr,0,Fi),new D(0,Fi,-dr),new D(0,Fi,dr),new D(-1,1,-1),new D(1,1,-1),new D(-1,1,1),new D(1,1,1)];class D1{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,r=100){Qs=this._renderer.getRenderTarget(),to=this._renderer.getActiveCubeFace(),eo=this._renderer.getActiveMipmapLevel(),no=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const a=this._allocateTargets();return a.depthBuffer=!0,this._sceneToCubeUV(t,n,r,a),e>0&&this._blur(a,0,0,e),this._applyPMREM(a),this._cleanup(a),a}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=N1(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=U1(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Qs,to,eo),this._renderer.xr.enabled=no,t.scissorTest=!1,Ha(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Rr||t.mapping===Cr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Qs=this._renderer.getRenderTarget(),to=this._renderer.getActiveCubeFace(),eo=this._renderer.getActiveMipmapLevel(),no=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Wn,minFilter:Wn,generateMipmaps:!1,type:fa,format:Fn,colorSpace:Ki,depthBuffer:!1},r=I1(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=I1(t,e,n);const{_lodMax:a}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Eu(a)),this._blurMaterial=wu(a,t,e)}return r}_compileMaterial(t){const e=new ke(this._lodPlanes[0],t);this._renderer.compile(e,js)}_sceneToCubeUV(t,e,n,r){const o=new _n(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,f=u.toneMapping;u.getClearColor(P1),u.toneMapping=Ai,u.autoClear=!1;const p=new hs({name:"PMREM.Background",side:fn,depthWrite:!1,depthTest:!1}),g=new ke(new ga,p);let v=!1;const m=t.background;m?m.isColor&&(p.color.copy(m),t.background=null,v=!0):(p.color.copy(P1),v=!0);for(let d=0;d<6;d++){const w=d%3;w===0?(o.up.set(0,l[d],0),o.lookAt(c[d],0,0)):w===1?(o.up.set(0,0,l[d]),o.lookAt(0,c[d],0)):(o.up.set(0,l[d],0),o.lookAt(0,0,c[d]));const S=this._cubeSize;Ha(r,w*S,d>2?S:0,S,S),u.setRenderTarget(r),v&&u.render(g,o),u.render(t,o)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=f,u.autoClear=h,t.background=m}_textureToCubeUV(t,e){const n=this._renderer,r=t.mapping===Rr||t.mapping===Cr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=N1()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=U1());const a=r?this._cubemapMaterial:this._equirectMaterial,s=new ke(this._lodPlanes[0],a),o=a.uniforms;o.envMap.value=t;const l=this._cubeSize;Ha(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(s,js)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const r=this._lodPlanes.length;for(let a=1;a<r;a++){const s=Math.sqrt(this._sigmas[a]*this._sigmas[a]-this._sigmas[a-1]*this._sigmas[a-1]),o=L1[(r-a-1)%L1.length];this._blur(t,a-1,a,s,o)}e.autoClear=n}_blur(t,e,n,r,a){const s=this._pingPongRenderTarget;this._halfBlur(t,s,e,n,r,"latitudinal",a),this._halfBlur(s,t,n,n,r,"longitudinal",a)}_halfBlur(t,e,n,r,a,s,o){const l=this._renderer,c=this._blurMaterial;s!=="latitudinal"&&s!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new ke(this._lodPlanes[r],c),f=c.uniforms,p=this._sizeLods[n]-1,g=isFinite(a)?Math.PI/(2*p):2*Math.PI/(2*zi-1),v=a/g,m=isFinite(a)?1+Math.floor(u*v):zi;m>zi&&console.warn(`sigmaRadians, ${a}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${zi}`);const d=[];let w=0;for(let b=0;b<zi;++b){const U=b/v,E=Math.exp(-U*U/2);d.push(E),b===0?w+=E:b<m&&(w+=2*E)}for(let b=0;b<d.length;b++)d[b]=d[b]/w;f.envMap.value=t.texture,f.samples.value=m,f.weights.value=d,f.latitudinal.value=s==="latitudinal",o&&(f.poleAxis.value=o);const{_lodMax:S}=this;f.dTheta.value=g,f.mipInt.value=S-n;const _=this._sizeLods[r],L=3*_*(r>S-_r?r-S+_r:0),R=4*(this._cubeSize-_);Ha(e,L,R,3*_,2*_),l.setRenderTarget(e),l.render(h,js)}}function Eu(i){const t=[],e=[],n=[];let r=i;const a=i-_r+1+C1.length;for(let s=0;s<a;s++){const o=Math.pow(2,r);e.push(o);let l=1/o;s>i-_r?l=C1[s-i+_r-1]:s===0&&(l=0),n.push(l);const c=1/(o-2),u=-c,h=1+c,f=[u,u,h,u,h,h,u,u,h,h,u,h],p=6,g=6,v=3,m=2,d=1,w=new Float32Array(v*g*p),S=new Float32Array(m*g*p),_=new Float32Array(d*g*p);for(let R=0;R<p;R++){const b=R%3*2/3-1,U=R>2?0:-1,E=[b,U,0,b+2/3,U,0,b+2/3,U+1,0,b,U,0,b+2/3,U+1,0,b,U+1,0];w.set(E,v*g*R),S.set(f,m*g*R);const M=[R,R,R,R,R,R];_.set(M,d*g*R)}const L=new Ke;L.setAttribute("position",new be(w,v)),L.setAttribute("uv",new be(S,m)),L.setAttribute("faceIndex",new be(_,d)),t.push(L),r>_r&&r--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function I1(i,t,e){const n=new qi(i,t,e);return n.texture.mapping=_s,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ha(i,t,e,n,r){i.viewport.set(t,e,n,r),i.scissor.set(t,e,n,r)}function wu(i,t,e){const n=new Float32Array(zi),r=new D(0,1,0);return new dn({name:"SphericalGaussianBlur",defines:{n:zi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:F0(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:wi,depthTest:!1,depthWrite:!1})}function U1(){return new dn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:F0(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:wi,depthTest:!1,depthWrite:!1})}function N1(){return new dn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:F0(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:wi,depthTest:!1,depthWrite:!1})}function F0(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Tu(i){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===bo||l===Ro,u=l===Rr||l===Cr;if(c||u){let h=t.get(o);const f=h!==void 0?h.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==f)return e===null&&(e=new D1(i)),h=c?e.fromEquirectangular(o,h):e.fromCubemap(o,h),h.texture.pmremVersion=o.pmremVersion,t.set(o,h),h.texture;if(h!==void 0)return h.texture;{const p=o.image;return c&&p&&p.height>0||u&&p&&r(p)?(e===null&&(e=new D1(i)),h=c?e.fromEquirectangular(o):e.fromCubemap(o),h.texture.pmremVersion=o.pmremVersion,t.set(o,h),o.addEventListener("dispose",a),h.texture):null}}}return o}function r(o){let l=0;const c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function a(o){const l=o.target;l.removeEventListener("dispose",a);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function s(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:s}}function Au(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return t[n]=r,r}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const r=e(n);return r===null&&jr("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function bu(i,t,e,n){const r={},a=new WeakMap;function s(h){const f=h.target;f.index!==null&&t.remove(f.index);for(const g in f.attributes)t.remove(f.attributes[g]);for(const g in f.morphAttributes){const v=f.morphAttributes[g];for(let m=0,d=v.length;m<d;m++)t.remove(v[m])}f.removeEventListener("dispose",s),delete r[f.id];const p=a.get(f);p&&(t.remove(p),a.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function o(h,f){return r[f.id]===!0||(f.addEventListener("dispose",s),r[f.id]=!0,e.memory.geometries++),f}function l(h){const f=h.attributes;for(const g in f)t.update(f[g],i.ARRAY_BUFFER);const p=h.morphAttributes;for(const g in p){const v=p[g];for(let m=0,d=v.length;m<d;m++)t.update(v[m],i.ARRAY_BUFFER)}}function c(h){const f=[],p=h.index,g=h.attributes.position;let v=0;if(p!==null){const w=p.array;v=p.version;for(let S=0,_=w.length;S<_;S+=3){const L=w[S+0],R=w[S+1],b=w[S+2];f.push(L,R,R,b,b,L)}}else if(g!==void 0){const w=g.array;v=g.version;for(let S=0,_=w.length/3-1;S<_;S+=3){const L=S+0,R=S+1,b=S+2;f.push(L,R,R,b,b,L)}}else return;const m=new(Bl(f)?Wl:Vl)(f,1);m.version=v;const d=a.get(h);d&&t.remove(d),a.set(h,m)}function u(h){const f=a.get(h);if(f){const p=h.index;p!==null&&f.version<p.version&&c(h)}else c(h);return a.get(h)}return{get:o,update:l,getWireframeAttribute:u}}function Ru(i,t,e){let n;function r(f){n=f}let a,s;function o(f){a=f.type,s=f.bytesPerElement}function l(f,p){i.drawElements(n,p,a,f*s),e.update(p,n,1)}function c(f,p,g){g!==0&&(i.drawElementsInstanced(n,p,a,f*s,g),e.update(p,n,g))}function u(f,p,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,a,f,0,g);let m=0;for(let d=0;d<g;d++)m+=p[d];e.update(m,n,1)}function h(f,p,g,v){if(g===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let d=0;d<f.length;d++)c(f[d]/s,p[d],v[d]);else{m.multiDrawElementsInstancedWEBGL(n,p,0,a,f,0,v,0,g);let d=0;for(let w=0;w<g;w++)d+=p[w]*v[w];e.update(d,n,1)}}this.setMode=r,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function Cu(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(a,s,o){switch(e.calls++,s){case i.TRIANGLES:e.triangles+=o*(a/3);break;case i.LINES:e.lines+=o*(a/2);break;case i.LINE_STRIP:e.lines+=o*(a-1);break;case i.LINE_LOOP:e.lines+=o*a;break;case i.POINTS:e.points+=o*a;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",s);break}}function r(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:r,update:n}}function Pu(i,t,e){const n=new WeakMap,r=new Ne;function a(s,o,l){const c=s.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,h=u!==void 0?u.length:0;let f=n.get(o);if(f===void 0||f.count!==h){let E=function(){b.dispose(),n.delete(o),o.removeEventListener("dispose",E)};f!==void 0&&f.texture.dispose();const p=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,v=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],d=o.morphAttributes.normal||[],w=o.morphAttributes.color||[];let S=0;p===!0&&(S=1),g===!0&&(S=2),v===!0&&(S=3);let _=o.attributes.position.count*S,L=1;_>t.maxTextureSize&&(L=Math.ceil(_/t.maxTextureSize),_=t.maxTextureSize);const R=new Float32Array(_*L*4*h),b=new Hl(R,_,L,h);b.type=ai,b.needsUpdate=!0;const U=S*4;for(let M=0;M<h;M++){const C=m[M],H=d[M],G=w[M],K=_*L*4*M;for(let tt=0;tt<C.count;tt++){const Z=tt*U;p===!0&&(r.fromBufferAttribute(C,tt),R[K+Z+0]=r.x,R[K+Z+1]=r.y,R[K+Z+2]=r.z,R[K+Z+3]=0),g===!0&&(r.fromBufferAttribute(H,tt),R[K+Z+4]=r.x,R[K+Z+5]=r.y,R[K+Z+6]=r.z,R[K+Z+7]=0),v===!0&&(r.fromBufferAttribute(G,tt),R[K+Z+8]=r.x,R[K+Z+9]=r.y,R[K+Z+10]=r.z,R[K+Z+11]=G.itemSize===4?r.w:1)}}f={count:h,texture:b,size:new Zt(_,L)},n.set(o,f),o.addEventListener("dispose",E)}if(s.isInstancedMesh===!0&&s.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",s.morphTexture,e);else{let p=0;for(let v=0;v<c.length;v++)p+=c[v];const g=o.morphTargetsRelative?1:1-p;l.getUniforms().setValue(i,"morphTargetBaseInfluence",g),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",f.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:a}}function Lu(i,t,e,n){let r=new WeakMap;function a(l){const c=n.render.frame,u=l.geometry,h=t.get(l,u);if(r.get(h)!==c&&(t.update(h),r.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),r.get(l)!==c&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;r.get(f)!==c&&(f.update(),r.set(f,c))}return h}function s(){r=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:a,dispose:s}}class Zl extends cn{constructor(t,e,n,r,a,s,o,l,c,u=yr){if(u!==yr&&u!==Lr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===yr&&(n=Xi),n===void 0&&u===Lr&&(n=Pr),super(null,r,a,s,o,l,u,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:On,this.minFilter=l!==void 0?l:On,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const Jl=new cn,F1=new Zl(1,1),jl=new Hl,Ql=new g5,t2=new Yl,O1=[],z1=[],B1=new Float32Array(16),k1=new Float32Array(9),H1=new Float32Array(4);function Nr(i,t,e){const n=i[0];if(n<=0||n>0)return i;const r=t*e;let a=O1[r];if(a===void 0&&(a=new Float32Array(r),O1[r]=a),t!==0){n.toArray(a,0);for(let s=1,o=0;s!==t;++s)o+=e,i[s].toArray(a,o)}return a}function He(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Ge(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Ss(i,t){let e=z1[t];e===void 0&&(e=new Int32Array(t),z1[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Du(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Iu(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(He(e,t))return;i.uniform2fv(this.addr,t),Ge(e,t)}}function Uu(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(He(e,t))return;i.uniform3fv(this.addr,t),Ge(e,t)}}function Nu(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(He(e,t))return;i.uniform4fv(this.addr,t),Ge(e,t)}}function Fu(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(He(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Ge(e,t)}else{if(He(e,n))return;H1.set(n),i.uniformMatrix2fv(this.addr,!1,H1),Ge(e,n)}}function Ou(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(He(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Ge(e,t)}else{if(He(e,n))return;k1.set(n),i.uniformMatrix3fv(this.addr,!1,k1),Ge(e,n)}}function zu(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(He(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Ge(e,t)}else{if(He(e,n))return;B1.set(n),i.uniformMatrix4fv(this.addr,!1,B1),Ge(e,n)}}function Bu(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function ku(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(He(e,t))return;i.uniform2iv(this.addr,t),Ge(e,t)}}function Hu(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(He(e,t))return;i.uniform3iv(this.addr,t),Ge(e,t)}}function Gu(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(He(e,t))return;i.uniform4iv(this.addr,t),Ge(e,t)}}function Vu(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function Wu(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(He(e,t))return;i.uniform2uiv(this.addr,t),Ge(e,t)}}function Xu(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(He(e,t))return;i.uniform3uiv(this.addr,t),Ge(e,t)}}function qu(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(He(e,t))return;i.uniform4uiv(this.addr,t),Ge(e,t)}}function Yu(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let a;this.type===i.SAMPLER_2D_SHADOW?(F1.compareFunction=zl,a=F1):a=Jl,e.setTexture2D(t||a,r)}function $u(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTexture3D(t||Ql,r)}function Ku(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTextureCube(t||t2,r)}function Zu(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTexture2DArray(t||jl,r)}function Ju(i){switch(i){case 5126:return Du;case 35664:return Iu;case 35665:return Uu;case 35666:return Nu;case 35674:return Fu;case 35675:return Ou;case 35676:return zu;case 5124:case 35670:return Bu;case 35667:case 35671:return ku;case 35668:case 35672:return Hu;case 35669:case 35673:return Gu;case 5125:return Vu;case 36294:return Wu;case 36295:return Xu;case 36296:return qu;case 35678:case 36198:case 36298:case 36306:case 35682:return Yu;case 35679:case 36299:case 36307:return $u;case 35680:case 36300:case 36308:case 36293:return Ku;case 36289:case 36303:case 36311:case 36292:return Zu}}function ju(i,t){i.uniform1fv(this.addr,t)}function Qu(i,t){const e=Nr(t,this.size,2);i.uniform2fv(this.addr,e)}function th(i,t){const e=Nr(t,this.size,3);i.uniform3fv(this.addr,e)}function eh(i,t){const e=Nr(t,this.size,4);i.uniform4fv(this.addr,e)}function nh(i,t){const e=Nr(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function ih(i,t){const e=Nr(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function rh(i,t){const e=Nr(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function ah(i,t){i.uniform1iv(this.addr,t)}function sh(i,t){i.uniform2iv(this.addr,t)}function oh(i,t){i.uniform3iv(this.addr,t)}function lh(i,t){i.uniform4iv(this.addr,t)}function ch(i,t){i.uniform1uiv(this.addr,t)}function uh(i,t){i.uniform2uiv(this.addr,t)}function hh(i,t){i.uniform3uiv(this.addr,t)}function dh(i,t){i.uniform4uiv(this.addr,t)}function fh(i,t,e){const n=this.cache,r=t.length,a=Ss(e,r);He(n,a)||(i.uniform1iv(this.addr,a),Ge(n,a));for(let s=0;s!==r;++s)e.setTexture2D(t[s]||Jl,a[s])}function ph(i,t,e){const n=this.cache,r=t.length,a=Ss(e,r);He(n,a)||(i.uniform1iv(this.addr,a),Ge(n,a));for(let s=0;s!==r;++s)e.setTexture3D(t[s]||Ql,a[s])}function mh(i,t,e){const n=this.cache,r=t.length,a=Ss(e,r);He(n,a)||(i.uniform1iv(this.addr,a),Ge(n,a));for(let s=0;s!==r;++s)e.setTextureCube(t[s]||t2,a[s])}function gh(i,t,e){const n=this.cache,r=t.length,a=Ss(e,r);He(n,a)||(i.uniform1iv(this.addr,a),Ge(n,a));for(let s=0;s!==r;++s)e.setTexture2DArray(t[s]||jl,a[s])}function vh(i){switch(i){case 5126:return ju;case 35664:return Qu;case 35665:return th;case 35666:return eh;case 35674:return nh;case 35675:return ih;case 35676:return rh;case 5124:case 35670:return ah;case 35667:case 35671:return sh;case 35668:case 35672:return oh;case 35669:case 35673:return lh;case 5125:return ch;case 36294:return uh;case 36295:return hh;case 36296:return dh;case 35678:case 36198:case 36298:case 36306:case 35682:return fh;case 35679:case 36299:case 36307:return ph;case 35680:case 36300:case 36308:case 36293:return mh;case 36289:case 36303:case 36311:case 36292:return gh}}class _h{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Ju(e.type)}}class xh{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=vh(e.type)}}class Mh{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const r=this.seq;for(let a=0,s=r.length;a!==s;++a){const o=r[a];o.setValue(t,e[o.id],n)}}}const io=/(\w+)(\])?(\[|\.)?/g;function G1(i,t){i.seq.push(t),i.map[t.id]=t}function Sh(i,t,e){const n=i.name,r=n.length;for(io.lastIndex=0;;){const a=io.exec(n),s=io.lastIndex;let o=a[1];const l=a[2]==="]",c=a[3];if(l&&(o=o|0),c===void 0||c==="["&&s+2===r){G1(e,c===void 0?new _h(o,i,t):new xh(o,i,t));break}else{let h=e.map[o];h===void 0&&(h=new Mh(o),G1(e,h)),e=h}}}class ls{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){const a=t.getActiveUniform(e,r),s=t.getUniformLocation(e,a.name);Sh(a,s,this)}}setValue(t,e,n,r){const a=this.map[e];a!==void 0&&a.setValue(t,n,r)}setOptional(t,e,n){const r=e[n];r!==void 0&&this.setValue(t,n,r)}static upload(t,e,n,r){for(let a=0,s=e.length;a!==s;++a){const o=e[a],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,r)}}static seqWithValue(t,e){const n=[];for(let r=0,a=t.length;r!==a;++r){const s=t[r];s.id in e&&n.push(s)}return n}}function V1(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const yh=37297;let Eh=0;function wh(i,t){const e=i.split(`
`),n=[],r=Math.max(t-6,0),a=Math.min(t+6,e.length);for(let s=r;s<a;s++){const o=s+1;n.push(`${o===t?">":" "} ${o}: ${e[s]}`)}return n.join(`
`)}const W1=new ae;function Th(i){_e._getMatrix(W1,_e.workingColorSpace,i);const t=`mat3( ${W1.elements.map(e=>e.toFixed(4))} )`;switch(_e.getTransfer(i)){case xs:return[t,"LinearTransferOETF"];case Te:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function X1(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),r=i.getShaderInfoLog(t).trim();if(n&&r==="")return"";const a=/ERROR: 0:(\d+)/.exec(r);if(a){const s=parseInt(a[1]);return e.toUpperCase()+`

`+r+`

`+wh(i.getShaderSource(t),s)}else return r}function Ah(i,t){const e=Th(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function bh(i,t){let e;switch(t){case bc:e="Linear";break;case Rc:e="Reinhard";break;case Cc:e="Cineon";break;case Pc:e="ACESFilmic";break;case Dc:e="AgX";break;case Ic:e="Neutral";break;case Lc:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Ga=new D;function Rh(){_e.getLuminanceCoefficients(Ga);const i=Ga.x.toFixed(4),t=Ga.y.toFixed(4),e=Ga.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Ch(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Qr).join(`
`)}function Ph(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Lh(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const a=i.getActiveAttrib(t,r),s=a.name;let o=1;a.type===i.FLOAT_MAT2&&(o=2),a.type===i.FLOAT_MAT3&&(o=3),a.type===i.FLOAT_MAT4&&(o=4),e[s]={type:a.type,location:i.getAttribLocation(t,s),locationSize:o}}return e}function Qr(i){return i!==""}function q1(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Y1(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Dh=/^[ \t]*#include +<([\w\d./]+)>/gm;function r0(i){return i.replace(Dh,Uh)}const Ih=new Map;function Uh(i,t){let e=ce[t];if(e===void 0){const n=Ih.get(t);if(n!==void 0)e=ce[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return r0(e)}const Nh=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function $1(i){return i.replace(Nh,Fh)}function Fh(i,t,e,n){let r="";for(let a=parseInt(t);a<parseInt(e);a++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return r}function K1(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function Oh(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Tl?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===sc?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===ei&&(t="SHADOWMAP_TYPE_VSM"),t}function zh(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Rr:case Cr:t="ENVMAP_TYPE_CUBE";break;case _s:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Bh(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Cr:t="ENVMAP_MODE_REFRACTION";break}return t}function kh(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Al:t="ENVMAP_BLENDING_MULTIPLY";break;case Tc:t="ENVMAP_BLENDING_MIX";break;case Ac:t="ENVMAP_BLENDING_ADD";break}return t}function Hh(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function Gh(i,t,e,n){const r=i.getContext(),a=e.defines;let s=e.vertexShader,o=e.fragmentShader;const l=Oh(e),c=zh(e),u=Bh(e),h=kh(e),f=Hh(e),p=Ch(e),g=Ph(a),v=r.createProgram();let m,d,w=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Qr).join(`
`),m.length>0&&(m+=`
`),d=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Qr).join(`
`),d.length>0&&(d+=`
`)):(m=[K1(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Qr).join(`
`),d=[K1(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+u:"",e.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Ai?"#define TONE_MAPPING":"",e.toneMapping!==Ai?ce.tonemapping_pars_fragment:"",e.toneMapping!==Ai?bh("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",ce.colorspace_pars_fragment,Ah("linearToOutputTexel",e.outputColorSpace),Rh(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Qr).join(`
`)),s=r0(s),s=q1(s,e),s=Y1(s,e),o=r0(o),o=q1(o,e),o=Y1(o,e),s=$1(s),o=$1(o),e.isRawShaderMaterial!==!0&&(w=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,d=["#define varying in",e.glslVersion===o1?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===o1?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const S=w+m+s,_=w+d+o,L=V1(r,r.VERTEX_SHADER,S),R=V1(r,r.FRAGMENT_SHADER,_);r.attachShader(v,L),r.attachShader(v,R),e.index0AttributeName!==void 0?r.bindAttribLocation(v,0,e.index0AttributeName):e.morphTargets===!0&&r.bindAttribLocation(v,0,"position"),r.linkProgram(v);function b(C){if(i.debug.checkShaderErrors){const H=r.getProgramInfoLog(v).trim(),G=r.getShaderInfoLog(L).trim(),K=r.getShaderInfoLog(R).trim();let tt=!0,Z=!0;if(r.getProgramParameter(v,r.LINK_STATUS)===!1)if(tt=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,v,L,R);else{const at=X1(r,L,"vertex"),X=X1(r,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(v,r.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+H+`
`+at+`
`+X)}else H!==""?console.warn("THREE.WebGLProgram: Program Info Log:",H):(G===""||K==="")&&(Z=!1);Z&&(C.diagnostics={runnable:tt,programLog:H,vertexShader:{log:G,prefix:m},fragmentShader:{log:K,prefix:d}})}r.deleteShader(L),r.deleteShader(R),U=new ls(r,v),E=Lh(r,v)}let U;this.getUniforms=function(){return U===void 0&&b(this),U};let E;this.getAttributes=function(){return E===void 0&&b(this),E};let M=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=r.getProgramParameter(v,yh)),M},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(v),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Eh++,this.cacheKey=t,this.usedTimes=1,this.program=v,this.vertexShader=L,this.fragmentShader=R,this}let Vh=0;class Wh{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,r=this._getShaderStage(e),a=this._getShaderStage(n),s=this._getShaderCacheForMaterial(t);return s.has(r)===!1&&(s.add(r),r.usedTimes++),s.has(a)===!1&&(s.add(a),a.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new Xh(t),e.set(t,n)),n}}class Xh{constructor(t){this.id=Vh++,this.code=t,this.usedTimes=0}}function qh(i,t,e,n,r,a,s){const o=new N0,l=new Wh,c=new Set,u=[],h=r.logarithmicDepthBuffer,f=r.vertexTextures;let p=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(E){return c.add(E),E===0?"uv":`uv${E}`}function m(E,M,C,H,G){const K=H.fog,tt=G.geometry,Z=E.isMeshStandardMaterial?H.environment:null,at=(E.isMeshStandardMaterial?e:t).get(E.envMap||Z),X=at&&at.mapping===_s?at.image.height:null,ft=g[E.type];E.precision!==null&&(p=r.getMaxPrecision(E.precision),p!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",p,"instead."));const st=tt.morphAttributes.position||tt.morphAttributes.normal||tt.morphAttributes.color,Q=st!==void 0?st.length:0;let Mt=0;tt.morphAttributes.position!==void 0&&(Mt=1),tt.morphAttributes.normal!==void 0&&(Mt=2),tt.morphAttributes.color!==void 0&&(Mt=3);let wt,W,it,St;if(ft){const he=Vn[ft];wt=he.vertexShader,W=he.fragmentShader}else wt=E.vertexShader,W=E.fragmentShader,l.update(E),it=l.getVertexShaderID(E),St=l.getFragmentShaderID(E);const $=i.getRenderTarget(),_t=i.state.buffers.depth.getReversed(),F=G.isInstancedMesh===!0,nt=G.isBatchedMesh===!0,Ct=!!E.map,I=!!E.matcap,ot=!!at,T=!!E.aoMap,pt=!!E.lightMap,ct=!!E.bumpMap,At=!!E.normalMap,xt=!!E.displacementMap,Vt=!!E.emissiveMap,bt=!!E.metalnessMap,A=!!E.roughnessMap,x=E.anisotropy>0,B=E.clearcoat>0,et=E.dispersion>0,ut=E.iridescence>0,J=E.sheen>0,Ht=E.transmission>0,Dt=x&&!!E.anisotropyMap,Ft=B&&!!E.clearcoatMap,oe=B&&!!E.clearcoatNormalMap,vt=B&&!!E.clearcoatRoughnessMap,Nt=ut&&!!E.iridescenceMap,Yt=ut&&!!E.iridescenceThicknessMap,Kt=J&&!!E.sheenColorMap,zt=J&&!!E.sheenRoughnessMap,se=!!E.specularMap,te=!!E.specularColorMap,me=!!E.specularIntensityMap,N=Ht&&!!E.transmissionMap,Pt=Ht&&!!E.thicknessMap,j=!!E.gradientMap,lt=!!E.alphaMap,Rt=E.alphaTest>0,Et=!!E.alphaHash,jt=!!E.extensions;let le=Ai;E.toneMapped&&($===null||$.isXRRenderTarget===!0)&&(le=i.toneMapping);const ee={shaderID:ft,shaderType:E.type,shaderName:E.name,vertexShader:wt,fragmentShader:W,defines:E.defines,customVertexShaderID:it,customFragmentShaderID:St,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:p,batching:nt,batchingColor:nt&&G._colorsTexture!==null,instancing:F,instancingColor:F&&G.instanceColor!==null,instancingMorph:F&&G.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:$===null?i.outputColorSpace:$.isXRRenderTarget===!0?$.texture.colorSpace:Ki,alphaToCoverage:!!E.alphaToCoverage,map:Ct,matcap:I,envMap:ot,envMapMode:ot&&at.mapping,envMapCubeUVHeight:X,aoMap:T,lightMap:pt,bumpMap:ct,normalMap:At,displacementMap:f&&xt,emissiveMap:Vt,normalMapObjectSpace:At&&E.normalMapType===zc,normalMapTangentSpace:At&&E.normalMapType===Oc,metalnessMap:bt,roughnessMap:A,anisotropy:x,anisotropyMap:Dt,clearcoat:B,clearcoatMap:Ft,clearcoatNormalMap:oe,clearcoatRoughnessMap:vt,dispersion:et,iridescence:ut,iridescenceMap:Nt,iridescenceThicknessMap:Yt,sheen:J,sheenColorMap:Kt,sheenRoughnessMap:zt,specularMap:se,specularColorMap:te,specularIntensityMap:me,transmission:Ht,transmissionMap:N,thicknessMap:Pt,gradientMap:j,opaque:E.transparent===!1&&E.blending===Sr&&E.alphaToCoverage===!1,alphaMap:lt,alphaTest:Rt,alphaHash:Et,combine:E.combine,mapUv:Ct&&v(E.map.channel),aoMapUv:T&&v(E.aoMap.channel),lightMapUv:pt&&v(E.lightMap.channel),bumpMapUv:ct&&v(E.bumpMap.channel),normalMapUv:At&&v(E.normalMap.channel),displacementMapUv:xt&&v(E.displacementMap.channel),emissiveMapUv:Vt&&v(E.emissiveMap.channel),metalnessMapUv:bt&&v(E.metalnessMap.channel),roughnessMapUv:A&&v(E.roughnessMap.channel),anisotropyMapUv:Dt&&v(E.anisotropyMap.channel),clearcoatMapUv:Ft&&v(E.clearcoatMap.channel),clearcoatNormalMapUv:oe&&v(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:vt&&v(E.clearcoatRoughnessMap.channel),iridescenceMapUv:Nt&&v(E.iridescenceMap.channel),iridescenceThicknessMapUv:Yt&&v(E.iridescenceThicknessMap.channel),sheenColorMapUv:Kt&&v(E.sheenColorMap.channel),sheenRoughnessMapUv:zt&&v(E.sheenRoughnessMap.channel),specularMapUv:se&&v(E.specularMap.channel),specularColorMapUv:te&&v(E.specularColorMap.channel),specularIntensityMapUv:me&&v(E.specularIntensityMap.channel),transmissionMapUv:N&&v(E.transmissionMap.channel),thicknessMapUv:Pt&&v(E.thicknessMap.channel),alphaMapUv:lt&&v(E.alphaMap.channel),vertexTangents:!!tt.attributes.tangent&&(At||x),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!tt.attributes.color&&tt.attributes.color.itemSize===4,pointsUvs:G.isPoints===!0&&!!tt.attributes.uv&&(Ct||lt),fog:!!K,useFog:E.fog===!0,fogExp2:!!K&&K.isFogExp2,flatShading:E.flatShading===!0,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:h,reverseDepthBuffer:_t,skinning:G.isSkinnedMesh===!0,morphTargets:tt.morphAttributes.position!==void 0,morphNormals:tt.morphAttributes.normal!==void 0,morphColors:tt.morphAttributes.color!==void 0,morphTargetsCount:Q,morphTextureStride:Mt,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:E.dithering,shadowMapEnabled:i.shadowMap.enabled&&C.length>0,shadowMapType:i.shadowMap.type,toneMapping:le,decodeVideoTexture:Ct&&E.map.isVideoTexture===!0&&_e.getTransfer(E.map.colorSpace)===Te,decodeVideoTextureEmissive:Vt&&E.emissiveMap.isVideoTexture===!0&&_e.getTransfer(E.emissiveMap.colorSpace)===Te,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===Tn,flipSided:E.side===fn,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:jt&&E.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(jt&&E.extensions.multiDraw===!0||nt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return ee.vertexUv1s=c.has(1),ee.vertexUv2s=c.has(2),ee.vertexUv3s=c.has(3),c.clear(),ee}function d(E){const M=[];if(E.shaderID?M.push(E.shaderID):(M.push(E.customVertexShaderID),M.push(E.customFragmentShaderID)),E.defines!==void 0)for(const C in E.defines)M.push(C),M.push(E.defines[C]);return E.isRawShaderMaterial===!1&&(w(M,E),S(M,E),M.push(i.outputColorSpace)),M.push(E.customProgramCacheKey),M.join()}function w(E,M){E.push(M.precision),E.push(M.outputColorSpace),E.push(M.envMapMode),E.push(M.envMapCubeUVHeight),E.push(M.mapUv),E.push(M.alphaMapUv),E.push(M.lightMapUv),E.push(M.aoMapUv),E.push(M.bumpMapUv),E.push(M.normalMapUv),E.push(M.displacementMapUv),E.push(M.emissiveMapUv),E.push(M.metalnessMapUv),E.push(M.roughnessMapUv),E.push(M.anisotropyMapUv),E.push(M.clearcoatMapUv),E.push(M.clearcoatNormalMapUv),E.push(M.clearcoatRoughnessMapUv),E.push(M.iridescenceMapUv),E.push(M.iridescenceThicknessMapUv),E.push(M.sheenColorMapUv),E.push(M.sheenRoughnessMapUv),E.push(M.specularMapUv),E.push(M.specularColorMapUv),E.push(M.specularIntensityMapUv),E.push(M.transmissionMapUv),E.push(M.thicknessMapUv),E.push(M.combine),E.push(M.fogExp2),E.push(M.sizeAttenuation),E.push(M.morphTargetsCount),E.push(M.morphAttributeCount),E.push(M.numDirLights),E.push(M.numPointLights),E.push(M.numSpotLights),E.push(M.numSpotLightMaps),E.push(M.numHemiLights),E.push(M.numRectAreaLights),E.push(M.numDirLightShadows),E.push(M.numPointLightShadows),E.push(M.numSpotLightShadows),E.push(M.numSpotLightShadowsWithMaps),E.push(M.numLightProbes),E.push(M.shadowMapType),E.push(M.toneMapping),E.push(M.numClippingPlanes),E.push(M.numClipIntersection),E.push(M.depthPacking)}function S(E,M){o.disableAll(),M.supportsVertexTextures&&o.enable(0),M.instancing&&o.enable(1),M.instancingColor&&o.enable(2),M.instancingMorph&&o.enable(3),M.matcap&&o.enable(4),M.envMap&&o.enable(5),M.normalMapObjectSpace&&o.enable(6),M.normalMapTangentSpace&&o.enable(7),M.clearcoat&&o.enable(8),M.iridescence&&o.enable(9),M.alphaTest&&o.enable(10),M.vertexColors&&o.enable(11),M.vertexAlphas&&o.enable(12),M.vertexUv1s&&o.enable(13),M.vertexUv2s&&o.enable(14),M.vertexUv3s&&o.enable(15),M.vertexTangents&&o.enable(16),M.anisotropy&&o.enable(17),M.alphaHash&&o.enable(18),M.batching&&o.enable(19),M.dispersion&&o.enable(20),M.batchingColor&&o.enable(21),E.push(o.mask),o.disableAll(),M.fog&&o.enable(0),M.useFog&&o.enable(1),M.flatShading&&o.enable(2),M.logarithmicDepthBuffer&&o.enable(3),M.reverseDepthBuffer&&o.enable(4),M.skinning&&o.enable(5),M.morphTargets&&o.enable(6),M.morphNormals&&o.enable(7),M.morphColors&&o.enable(8),M.premultipliedAlpha&&o.enable(9),M.shadowMapEnabled&&o.enable(10),M.doubleSided&&o.enable(11),M.flipSided&&o.enable(12),M.useDepthPacking&&o.enable(13),M.dithering&&o.enable(14),M.transmission&&o.enable(15),M.sheen&&o.enable(16),M.opaque&&o.enable(17),M.pointsUvs&&o.enable(18),M.decodeVideoTexture&&o.enable(19),M.decodeVideoTextureEmissive&&o.enable(20),M.alphaToCoverage&&o.enable(21),E.push(o.mask)}function _(E){const M=g[E.type];let C;if(M){const H=Vn[M];C=R5.clone(H.uniforms)}else C=E.uniforms;return C}function L(E,M){let C;for(let H=0,G=u.length;H<G;H++){const K=u[H];if(K.cacheKey===M){C=K,++C.usedTimes;break}}return C===void 0&&(C=new Gh(i,M,E,a),u.push(C)),C}function R(E){if(--E.usedTimes===0){const M=u.indexOf(E);u[M]=u[u.length-1],u.pop(),E.destroy()}}function b(E){l.remove(E)}function U(){l.dispose()}return{getParameters:m,getProgramCacheKey:d,getUniforms:_,acquireProgram:L,releaseProgram:R,releaseShaderCache:b,programs:u,dispose:U}}function Yh(){let i=new WeakMap;function t(s){return i.has(s)}function e(s){let o=i.get(s);return o===void 0&&(o={},i.set(s,o)),o}function n(s){i.delete(s)}function r(s,o,l){i.get(s)[o]=l}function a(){i=new WeakMap}return{has:t,get:e,remove:n,update:r,dispose:a}}function $h(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function Z1(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function J1(){const i=[];let t=0;const e=[],n=[],r=[];function a(){t=0,e.length=0,n.length=0,r.length=0}function s(h,f,p,g,v,m){let d=i[t];return d===void 0?(d={id:h.id,object:h,geometry:f,material:p,groupOrder:g,renderOrder:h.renderOrder,z:v,group:m},i[t]=d):(d.id=h.id,d.object=h,d.geometry=f,d.material=p,d.groupOrder=g,d.renderOrder=h.renderOrder,d.z=v,d.group=m),t++,d}function o(h,f,p,g,v,m){const d=s(h,f,p,g,v,m);p.transmission>0?n.push(d):p.transparent===!0?r.push(d):e.push(d)}function l(h,f,p,g,v,m){const d=s(h,f,p,g,v,m);p.transmission>0?n.unshift(d):p.transparent===!0?r.unshift(d):e.unshift(d)}function c(h,f){e.length>1&&e.sort(h||$h),n.length>1&&n.sort(f||Z1),r.length>1&&r.sort(f||Z1)}function u(){for(let h=t,f=i.length;h<f;h++){const p=i[h];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:r,init:a,push:o,unshift:l,finish:u,sort:c}}function Kh(){let i=new WeakMap;function t(n,r){const a=i.get(n);let s;return a===void 0?(s=new J1,i.set(n,[s])):r>=a.length?(s=new J1,a.push(s)):s=a[r],s}function e(){i=new WeakMap}return{get:t,dispose:e}}function Zh(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new D,color:new de};break;case"SpotLight":e={position:new D,direction:new D,color:new de,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new D,color:new de,distance:0,decay:0};break;case"HemisphereLight":e={direction:new D,skyColor:new de,groundColor:new de};break;case"RectAreaLight":e={color:new de,position:new D,halfWidth:new D,halfHeight:new D};break}return i[t.id]=e,e}}}function Jh(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Zt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Zt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Zt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let jh=0;function Qh(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function t6(i){const t=new Zh,e=Jh(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new D);const r=new D,a=new Se,s=new Se;function o(c){let u=0,h=0,f=0;for(let E=0;E<9;E++)n.probe[E].set(0,0,0);let p=0,g=0,v=0,m=0,d=0,w=0,S=0,_=0,L=0,R=0,b=0;c.sort(Qh);for(let E=0,M=c.length;E<M;E++){const C=c[E],H=C.color,G=C.intensity,K=C.distance,tt=C.shadow&&C.shadow.map?C.shadow.map.texture:null;if(C.isAmbientLight)u+=H.r*G,h+=H.g*G,f+=H.b*G;else if(C.isLightProbe){for(let Z=0;Z<9;Z++)n.probe[Z].addScaledVector(C.sh.coefficients[Z],G);b++}else if(C.isDirectionalLight){const Z=t.get(C);if(Z.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){const at=C.shadow,X=e.get(C);X.shadowIntensity=at.intensity,X.shadowBias=at.bias,X.shadowNormalBias=at.normalBias,X.shadowRadius=at.radius,X.shadowMapSize=at.mapSize,n.directionalShadow[p]=X,n.directionalShadowMap[p]=tt,n.directionalShadowMatrix[p]=C.shadow.matrix,w++}n.directional[p]=Z,p++}else if(C.isSpotLight){const Z=t.get(C);Z.position.setFromMatrixPosition(C.matrixWorld),Z.color.copy(H).multiplyScalar(G),Z.distance=K,Z.coneCos=Math.cos(C.angle),Z.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),Z.decay=C.decay,n.spot[v]=Z;const at=C.shadow;if(C.map&&(n.spotLightMap[L]=C.map,L++,at.updateMatrices(C),C.castShadow&&R++),n.spotLightMatrix[v]=at.matrix,C.castShadow){const X=e.get(C);X.shadowIntensity=at.intensity,X.shadowBias=at.bias,X.shadowNormalBias=at.normalBias,X.shadowRadius=at.radius,X.shadowMapSize=at.mapSize,n.spotShadow[v]=X,n.spotShadowMap[v]=tt,_++}v++}else if(C.isRectAreaLight){const Z=t.get(C);Z.color.copy(H).multiplyScalar(G),Z.halfWidth.set(C.width*.5,0,0),Z.halfHeight.set(0,C.height*.5,0),n.rectArea[m]=Z,m++}else if(C.isPointLight){const Z=t.get(C);if(Z.color.copy(C.color).multiplyScalar(C.intensity),Z.distance=C.distance,Z.decay=C.decay,C.castShadow){const at=C.shadow,X=e.get(C);X.shadowIntensity=at.intensity,X.shadowBias=at.bias,X.shadowNormalBias=at.normalBias,X.shadowRadius=at.radius,X.shadowMapSize=at.mapSize,X.shadowCameraNear=at.camera.near,X.shadowCameraFar=at.camera.far,n.pointShadow[g]=X,n.pointShadowMap[g]=tt,n.pointShadowMatrix[g]=C.shadow.matrix,S++}n.point[g]=Z,g++}else if(C.isHemisphereLight){const Z=t.get(C);Z.skyColor.copy(C.color).multiplyScalar(G),Z.groundColor.copy(C.groundColor).multiplyScalar(G),n.hemi[d]=Z,d++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Ot.LTC_FLOAT_1,n.rectAreaLTC2=Ot.LTC_FLOAT_2):(n.rectAreaLTC1=Ot.LTC_HALF_1,n.rectAreaLTC2=Ot.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=h,n.ambient[2]=f;const U=n.hash;(U.directionalLength!==p||U.pointLength!==g||U.spotLength!==v||U.rectAreaLength!==m||U.hemiLength!==d||U.numDirectionalShadows!==w||U.numPointShadows!==S||U.numSpotShadows!==_||U.numSpotMaps!==L||U.numLightProbes!==b)&&(n.directional.length=p,n.spot.length=v,n.rectArea.length=m,n.point.length=g,n.hemi.length=d,n.directionalShadow.length=w,n.directionalShadowMap.length=w,n.pointShadow.length=S,n.pointShadowMap.length=S,n.spotShadow.length=_,n.spotShadowMap.length=_,n.directionalShadowMatrix.length=w,n.pointShadowMatrix.length=S,n.spotLightMatrix.length=_+L-R,n.spotLightMap.length=L,n.numSpotLightShadowsWithMaps=R,n.numLightProbes=b,U.directionalLength=p,U.pointLength=g,U.spotLength=v,U.rectAreaLength=m,U.hemiLength=d,U.numDirectionalShadows=w,U.numPointShadows=S,U.numSpotShadows=_,U.numSpotMaps=L,U.numLightProbes=b,n.version=jh++)}function l(c,u){let h=0,f=0,p=0,g=0,v=0;const m=u.matrixWorldInverse;for(let d=0,w=c.length;d<w;d++){const S=c[d];if(S.isDirectionalLight){const _=n.directional[h];_.direction.setFromMatrixPosition(S.matrixWorld),r.setFromMatrixPosition(S.target.matrixWorld),_.direction.sub(r),_.direction.transformDirection(m),h++}else if(S.isSpotLight){const _=n.spot[p];_.position.setFromMatrixPosition(S.matrixWorld),_.position.applyMatrix4(m),_.direction.setFromMatrixPosition(S.matrixWorld),r.setFromMatrixPosition(S.target.matrixWorld),_.direction.sub(r),_.direction.transformDirection(m),p++}else if(S.isRectAreaLight){const _=n.rectArea[g];_.position.setFromMatrixPosition(S.matrixWorld),_.position.applyMatrix4(m),s.identity(),a.copy(S.matrixWorld),a.premultiply(m),s.extractRotation(a),_.halfWidth.set(S.width*.5,0,0),_.halfHeight.set(0,S.height*.5,0),_.halfWidth.applyMatrix4(s),_.halfHeight.applyMatrix4(s),g++}else if(S.isPointLight){const _=n.point[f];_.position.setFromMatrixPosition(S.matrixWorld),_.position.applyMatrix4(m),f++}else if(S.isHemisphereLight){const _=n.hemi[v];_.direction.setFromMatrixPosition(S.matrixWorld),_.direction.transformDirection(m),v++}}}return{setup:o,setupView:l,state:n}}function j1(i){const t=new t6(i),e=[],n=[];function r(u){c.camera=u,e.length=0,n.length=0}function a(u){e.push(u)}function s(u){n.push(u)}function o(){t.setup(e)}function l(u){t.setupView(e,u)}const c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:o,setupLightsView:l,pushLight:a,pushShadow:s}}function e6(i){let t=new WeakMap;function e(r,a=0){const s=t.get(r);let o;return s===void 0?(o=new j1(i),t.set(r,[o])):a>=s.length?(o=new j1(i),s.push(o)):o=s[a],o}function n(){t=new WeakMap}return{get:e,dispose:n}}class n6 extends Zi{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Nc,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class i6 extends Zi{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const r6=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,a6=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function s6(i,t,e){let n=new $l;const r=new Zt,a=new Zt,s=new Ne,o=new n6({depthPacking:Fc}),l=new i6,c={},u=e.maxTextureSize,h={[ui]:fn,[fn]:ui,[Tn]:Tn},f=new dn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Zt},radius:{value:4}},vertexShader:r6,fragmentShader:a6}),p=f.clone();p.defines.HORIZONTAL_PASS=1;const g=new Ke;g.setAttribute("position",new be(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new ke(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Tl;let d=this.type;this.render=function(R,b,U){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||R.length===0)return;const E=i.getRenderTarget(),M=i.getActiveCubeFace(),C=i.getActiveMipmapLevel(),H=i.state;H.setBlending(wi),H.buffers.color.setClear(1,1,1,1),H.buffers.depth.setTest(!0),H.setScissorTest(!1);const G=d!==ei&&this.type===ei,K=d===ei&&this.type!==ei;for(let tt=0,Z=R.length;tt<Z;tt++){const at=R[tt],X=at.shadow;if(X===void 0){console.warn("THREE.WebGLShadowMap:",at,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;r.copy(X.mapSize);const ft=X.getFrameExtents();if(r.multiply(ft),a.copy(X.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(a.x=Math.floor(u/ft.x),r.x=a.x*ft.x,X.mapSize.x=a.x),r.y>u&&(a.y=Math.floor(u/ft.y),r.y=a.y*ft.y,X.mapSize.y=a.y)),X.map===null||G===!0||K===!0){const Q=this.type!==ei?{minFilter:On,magFilter:On}:{};X.map!==null&&X.map.dispose(),X.map=new qi(r.x,r.y,Q),X.map.texture.name=at.name+".shadowMap",X.camera.updateProjectionMatrix()}i.setRenderTarget(X.map),i.clear();const st=X.getViewportCount();for(let Q=0;Q<st;Q++){const Mt=X.getViewport(Q);s.set(a.x*Mt.x,a.y*Mt.y,a.x*Mt.z,a.y*Mt.w),H.viewport(s),X.updateMatrices(at,Q),n=X.getFrustum(),_(b,U,X.camera,at,this.type)}X.isPointLightShadow!==!0&&this.type===ei&&w(X,U),X.needsUpdate=!1}d=this.type,m.needsUpdate=!1,i.setRenderTarget(E,M,C)};function w(R,b){const U=t.update(v);f.defines.VSM_SAMPLES!==R.blurSamples&&(f.defines.VSM_SAMPLES=R.blurSamples,p.defines.VSM_SAMPLES=R.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new qi(r.x,r.y)),f.uniforms.shadow_pass.value=R.map.texture,f.uniforms.resolution.value=R.mapSize,f.uniforms.radius.value=R.radius,i.setRenderTarget(R.mapPass),i.clear(),i.renderBufferDirect(b,null,U,f,v,null),p.uniforms.shadow_pass.value=R.mapPass.texture,p.uniforms.resolution.value=R.mapSize,p.uniforms.radius.value=R.radius,i.setRenderTarget(R.map),i.clear(),i.renderBufferDirect(b,null,U,p,v,null)}function S(R,b,U,E){let M=null;const C=U.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(C!==void 0)M=C;else if(M=U.isPointLight===!0?l:o,i.localClippingEnabled&&b.clipShadows===!0&&Array.isArray(b.clippingPlanes)&&b.clippingPlanes.length!==0||b.displacementMap&&b.displacementScale!==0||b.alphaMap&&b.alphaTest>0||b.map&&b.alphaTest>0){const H=M.uuid,G=b.uuid;let K=c[H];K===void 0&&(K={},c[H]=K);let tt=K[G];tt===void 0&&(tt=M.clone(),K[G]=tt,b.addEventListener("dispose",L)),M=tt}if(M.visible=b.visible,M.wireframe=b.wireframe,E===ei?M.side=b.shadowSide!==null?b.shadowSide:b.side:M.side=b.shadowSide!==null?b.shadowSide:h[b.side],M.alphaMap=b.alphaMap,M.alphaTest=b.alphaTest,M.map=b.map,M.clipShadows=b.clipShadows,M.clippingPlanes=b.clippingPlanes,M.clipIntersection=b.clipIntersection,M.displacementMap=b.displacementMap,M.displacementScale=b.displacementScale,M.displacementBias=b.displacementBias,M.wireframeLinewidth=b.wireframeLinewidth,M.linewidth=b.linewidth,U.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const H=i.properties.get(M);H.light=U}return M}function _(R,b,U,E,M){if(R.visible===!1)return;if(R.layers.test(b.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&M===ei)&&(!R.frustumCulled||n.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(U.matrixWorldInverse,R.matrixWorld);const G=t.update(R),K=R.material;if(Array.isArray(K)){const tt=G.groups;for(let Z=0,at=tt.length;Z<at;Z++){const X=tt[Z],ft=K[X.materialIndex];if(ft&&ft.visible){const st=S(R,ft,E,M);R.onBeforeShadow(i,R,b,U,G,st,X),i.renderBufferDirect(U,null,G,st,R,X),R.onAfterShadow(i,R,b,U,G,st,X)}}}else if(K.visible){const tt=S(R,K,E,M);R.onBeforeShadow(i,R,b,U,G,tt,null),i.renderBufferDirect(U,null,G,tt,R,null),R.onAfterShadow(i,R,b,U,G,tt,null)}}const H=R.children;for(let G=0,K=H.length;G<K;G++)_(H[G],b,U,E,M)}function L(R){R.target.removeEventListener("dispose",L);for(const U in c){const E=c[U],M=R.target.uuid;M in E&&(E[M].dispose(),delete E[M])}}}const o6={[Mo]:So,[yo]:To,[Eo]:Ao,[br]:wo,[So]:Mo,[To]:yo,[Ao]:Eo,[wo]:br};function l6(i,t){function e(){let N=!1;const Pt=new Ne;let j=null;const lt=new Ne(0,0,0,0);return{setMask:function(Rt){j!==Rt&&!N&&(i.colorMask(Rt,Rt,Rt,Rt),j=Rt)},setLocked:function(Rt){N=Rt},setClear:function(Rt,Et,jt,le,ee){ee===!0&&(Rt*=le,Et*=le,jt*=le),Pt.set(Rt,Et,jt,le),lt.equals(Pt)===!1&&(i.clearColor(Rt,Et,jt,le),lt.copy(Pt))},reset:function(){N=!1,j=null,lt.set(-1,0,0,0)}}}function n(){let N=!1,Pt=!1,j=null,lt=null,Rt=null;return{setReversed:function(Et){if(Pt!==Et){const jt=t.get("EXT_clip_control");Pt?jt.clipControlEXT(jt.LOWER_LEFT_EXT,jt.ZERO_TO_ONE_EXT):jt.clipControlEXT(jt.LOWER_LEFT_EXT,jt.NEGATIVE_ONE_TO_ONE_EXT);const le=Rt;Rt=null,this.setClear(le)}Pt=Et},getReversed:function(){return Pt},setTest:function(Et){Et?$(i.DEPTH_TEST):_t(i.DEPTH_TEST)},setMask:function(Et){j!==Et&&!N&&(i.depthMask(Et),j=Et)},setFunc:function(Et){if(Pt&&(Et=o6[Et]),lt!==Et){switch(Et){case Mo:i.depthFunc(i.NEVER);break;case So:i.depthFunc(i.ALWAYS);break;case yo:i.depthFunc(i.LESS);break;case br:i.depthFunc(i.LEQUAL);break;case Eo:i.depthFunc(i.EQUAL);break;case wo:i.depthFunc(i.GEQUAL);break;case To:i.depthFunc(i.GREATER);break;case Ao:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}lt=Et}},setLocked:function(Et){N=Et},setClear:function(Et){Rt!==Et&&(Pt&&(Et=1-Et),i.clearDepth(Et),Rt=Et)},reset:function(){N=!1,j=null,lt=null,Rt=null,Pt=!1}}}function r(){let N=!1,Pt=null,j=null,lt=null,Rt=null,Et=null,jt=null,le=null,ee=null;return{setTest:function(he){N||(he?$(i.STENCIL_TEST):_t(i.STENCIL_TEST))},setMask:function(he){Pt!==he&&!N&&(i.stencilMask(he),Pt=he)},setFunc:function(he,We,ht){(j!==he||lt!==We||Rt!==ht)&&(i.stencilFunc(he,We,ht),j=he,lt=We,Rt=ht)},setOp:function(he,We,ht){(Et!==he||jt!==We||le!==ht)&&(i.stencilOp(he,We,ht),Et=he,jt=We,le=ht)},setLocked:function(he){N=he},setClear:function(he){ee!==he&&(i.clearStencil(he),ee=he)},reset:function(){N=!1,Pt=null,j=null,lt=null,Rt=null,Et=null,jt=null,le=null,ee=null}}}const a=new e,s=new n,o=new r,l=new WeakMap,c=new WeakMap;let u={},h={},f=new WeakMap,p=[],g=null,v=!1,m=null,d=null,w=null,S=null,_=null,L=null,R=null,b=new de(0,0,0),U=0,E=!1,M=null,C=null,H=null,G=null,K=null;const tt=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Z=!1,at=0;const X=i.getParameter(i.VERSION);X.indexOf("WebGL")!==-1?(at=parseFloat(/^WebGL (\d)/.exec(X)[1]),Z=at>=1):X.indexOf("OpenGL ES")!==-1&&(at=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),Z=at>=2);let ft=null,st={};const Q=i.getParameter(i.SCISSOR_BOX),Mt=i.getParameter(i.VIEWPORT),wt=new Ne().fromArray(Q),W=new Ne().fromArray(Mt);function it(N,Pt,j,lt){const Rt=new Uint8Array(4),Et=i.createTexture();i.bindTexture(N,Et),i.texParameteri(N,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(N,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let jt=0;jt<j;jt++)N===i.TEXTURE_3D||N===i.TEXTURE_2D_ARRAY?i.texImage3D(Pt,0,i.RGBA,1,1,lt,0,i.RGBA,i.UNSIGNED_BYTE,Rt):i.texImage2D(Pt+jt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Rt);return Et}const St={};St[i.TEXTURE_2D]=it(i.TEXTURE_2D,i.TEXTURE_2D,1),St[i.TEXTURE_CUBE_MAP]=it(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),St[i.TEXTURE_2D_ARRAY]=it(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),St[i.TEXTURE_3D]=it(i.TEXTURE_3D,i.TEXTURE_3D,1,1),a.setClear(0,0,0,1),s.setClear(1),o.setClear(0),$(i.DEPTH_TEST),s.setFunc(br),ct(!1),At(i1),$(i.CULL_FACE),T(wi);function $(N){u[N]!==!0&&(i.enable(N),u[N]=!0)}function _t(N){u[N]!==!1&&(i.disable(N),u[N]=!1)}function F(N,Pt){return h[N]!==Pt?(i.bindFramebuffer(N,Pt),h[N]=Pt,N===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=Pt),N===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=Pt),!0):!1}function nt(N,Pt){let j=p,lt=!1;if(N){j=f.get(Pt),j===void 0&&(j=[],f.set(Pt,j));const Rt=N.textures;if(j.length!==Rt.length||j[0]!==i.COLOR_ATTACHMENT0){for(let Et=0,jt=Rt.length;Et<jt;Et++)j[Et]=i.COLOR_ATTACHMENT0+Et;j.length=Rt.length,lt=!0}}else j[0]!==i.BACK&&(j[0]=i.BACK,lt=!0);lt&&i.drawBuffers(j)}function Ct(N){return g!==N?(i.useProgram(N),g=N,!0):!1}const I={[Oi]:i.FUNC_ADD,[lc]:i.FUNC_SUBTRACT,[cc]:i.FUNC_REVERSE_SUBTRACT};I[uc]=i.MIN,I[hc]=i.MAX;const ot={[dc]:i.ZERO,[fc]:i.ONE,[pc]:i.SRC_COLOR,[_o]:i.SRC_ALPHA,[Mc]:i.SRC_ALPHA_SATURATE,[_c]:i.DST_COLOR,[gc]:i.DST_ALPHA,[mc]:i.ONE_MINUS_SRC_COLOR,[xo]:i.ONE_MINUS_SRC_ALPHA,[xc]:i.ONE_MINUS_DST_COLOR,[vc]:i.ONE_MINUS_DST_ALPHA,[Sc]:i.CONSTANT_COLOR,[yc]:i.ONE_MINUS_CONSTANT_COLOR,[Ec]:i.CONSTANT_ALPHA,[wc]:i.ONE_MINUS_CONSTANT_ALPHA};function T(N,Pt,j,lt,Rt,Et,jt,le,ee,he){if(N===wi){v===!0&&(_t(i.BLEND),v=!1);return}if(v===!1&&($(i.BLEND),v=!0),N!==oc){if(N!==m||he!==E){if((d!==Oi||_!==Oi)&&(i.blendEquation(i.FUNC_ADD),d=Oi,_=Oi),he)switch(N){case Sr:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ti:i.blendFunc(i.ONE,i.ONE);break;case r1:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case a1:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}else switch(N){case Sr:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ti:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case r1:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case a1:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}w=null,S=null,L=null,R=null,b.set(0,0,0),U=0,m=N,E=he}return}Rt=Rt||Pt,Et=Et||j,jt=jt||lt,(Pt!==d||Rt!==_)&&(i.blendEquationSeparate(I[Pt],I[Rt]),d=Pt,_=Rt),(j!==w||lt!==S||Et!==L||jt!==R)&&(i.blendFuncSeparate(ot[j],ot[lt],ot[Et],ot[jt]),w=j,S=lt,L=Et,R=jt),(le.equals(b)===!1||ee!==U)&&(i.blendColor(le.r,le.g,le.b,ee),b.copy(le),U=ee),m=N,E=!1}function pt(N,Pt){N.side===Tn?_t(i.CULL_FACE):$(i.CULL_FACE);let j=N.side===fn;Pt&&(j=!j),ct(j),N.blending===Sr&&N.transparent===!1?T(wi):T(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),s.setFunc(N.depthFunc),s.setTest(N.depthTest),s.setMask(N.depthWrite),a.setMask(N.colorWrite);const lt=N.stencilWrite;o.setTest(lt),lt&&(o.setMask(N.stencilWriteMask),o.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),o.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),Vt(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?$(i.SAMPLE_ALPHA_TO_COVERAGE):_t(i.SAMPLE_ALPHA_TO_COVERAGE)}function ct(N){M!==N&&(N?i.frontFace(i.CW):i.frontFace(i.CCW),M=N)}function At(N){N!==rc?($(i.CULL_FACE),N!==C&&(N===i1?i.cullFace(i.BACK):N===ac?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):_t(i.CULL_FACE),C=N}function xt(N){N!==H&&(Z&&i.lineWidth(N),H=N)}function Vt(N,Pt,j){N?($(i.POLYGON_OFFSET_FILL),(G!==Pt||K!==j)&&(i.polygonOffset(Pt,j),G=Pt,K=j)):_t(i.POLYGON_OFFSET_FILL)}function bt(N){N?$(i.SCISSOR_TEST):_t(i.SCISSOR_TEST)}function A(N){N===void 0&&(N=i.TEXTURE0+tt-1),ft!==N&&(i.activeTexture(N),ft=N)}function x(N,Pt,j){j===void 0&&(ft===null?j=i.TEXTURE0+tt-1:j=ft);let lt=st[j];lt===void 0&&(lt={type:void 0,texture:void 0},st[j]=lt),(lt.type!==N||lt.texture!==Pt)&&(ft!==j&&(i.activeTexture(j),ft=j),i.bindTexture(N,Pt||St[N]),lt.type=N,lt.texture=Pt)}function B(){const N=st[ft];N!==void 0&&N.type!==void 0&&(i.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function et(){try{i.compressedTexImage2D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ut(){try{i.compressedTexImage3D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function J(){try{i.texSubImage2D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Ht(){try{i.texSubImage3D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Dt(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Ft(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function oe(){try{i.texStorage2D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function vt(){try{i.texStorage3D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Nt(){try{i.texImage2D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Yt(){try{i.texImage3D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Kt(N){wt.equals(N)===!1&&(i.scissor(N.x,N.y,N.z,N.w),wt.copy(N))}function zt(N){W.equals(N)===!1&&(i.viewport(N.x,N.y,N.z,N.w),W.copy(N))}function se(N,Pt){let j=c.get(Pt);j===void 0&&(j=new WeakMap,c.set(Pt,j));let lt=j.get(N);lt===void 0&&(lt=i.getUniformBlockIndex(Pt,N.name),j.set(N,lt))}function te(N,Pt){const lt=c.get(Pt).get(N);l.get(Pt)!==lt&&(i.uniformBlockBinding(Pt,lt,N.__bindingPointIndex),l.set(Pt,lt))}function me(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),s.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),u={},ft=null,st={},h={},f=new WeakMap,p=[],g=null,v=!1,m=null,d=null,w=null,S=null,_=null,L=null,R=null,b=new de(0,0,0),U=0,E=!1,M=null,C=null,H=null,G=null,K=null,wt.set(0,0,i.canvas.width,i.canvas.height),W.set(0,0,i.canvas.width,i.canvas.height),a.reset(),s.reset(),o.reset()}return{buffers:{color:a,depth:s,stencil:o},enable:$,disable:_t,bindFramebuffer:F,drawBuffers:nt,useProgram:Ct,setBlending:T,setMaterial:pt,setFlipSided:ct,setCullFace:At,setLineWidth:xt,setPolygonOffset:Vt,setScissorTest:bt,activeTexture:A,bindTexture:x,unbindTexture:B,compressedTexImage2D:et,compressedTexImage3D:ut,texImage2D:Nt,texImage3D:Yt,updateUBOMapping:se,uniformBlockBinding:te,texStorage2D:oe,texStorage3D:vt,texSubImage2D:J,texSubImage3D:Ht,compressedTexSubImage2D:Dt,compressedTexSubImage3D:Ft,scissor:Kt,viewport:zt,reset:me}}function Q1(i,t,e,n){const r=c6(n);switch(e){case Ll:return i*t;case Il:return i*t;case Ul:return i*t*2;case Nl:return i*t/r.components*r.byteLength;case L0:return i*t/r.components*r.byteLength;case Fl:return i*t*2/r.components*r.byteLength;case D0:return i*t*2/r.components*r.byteLength;case Dl:return i*t*3/r.components*r.byteLength;case Fn:return i*t*4/r.components*r.byteLength;case I0:return i*t*4/r.components*r.byteLength;case is:case rs:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case as:case ss:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Do:case Uo:return Math.max(i,16)*Math.max(t,8)/4;case Lo:case Io:return Math.max(i,8)*Math.max(t,8)/2;case No:case Fo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Oo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case zo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Bo:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case ko:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Ho:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Go:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Vo:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Wo:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Xo:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case qo:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Yo:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case $o:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Ko:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Zo:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Jo:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case os:case jo:case Qo:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Ol:case t0:return Math.ceil(i/4)*Math.ceil(t/4)*8;case e0:case n0:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function c6(i){switch(i){case hi:case Rl:return{byteLength:1,components:1};case oa:case Cl:case fa:return{byteLength:2,components:1};case C0:case P0:return{byteLength:2,components:4};case Xi:case R0:case ai:return{byteLength:4,components:1};case Pl:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function u6(i,t,e,n,r,a,s){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Zt,u=new WeakMap;let h;const f=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(A,x){return p?new OffscreenCanvas(A,x):ca("canvas")}function v(A,x,B){let et=1;const ut=bt(A);if((ut.width>B||ut.height>B)&&(et=B/Math.max(ut.width,ut.height)),et<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){const J=Math.floor(et*ut.width),Ht=Math.floor(et*ut.height);h===void 0&&(h=g(J,Ht));const Dt=x?g(J,Ht):h;return Dt.width=J,Dt.height=Ht,Dt.getContext("2d").drawImage(A,0,0,J,Ht),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ut.width+"x"+ut.height+") to ("+J+"x"+Ht+")."),Dt}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ut.width+"x"+ut.height+")."),A;return A}function m(A){return A.generateMipmaps}function d(A){i.generateMipmap(A)}function w(A){return A.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?i.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function S(A,x,B,et,ut=!1){if(A!==null){if(i[A]!==void 0)return i[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let J=x;if(x===i.RED&&(B===i.FLOAT&&(J=i.R32F),B===i.HALF_FLOAT&&(J=i.R16F),B===i.UNSIGNED_BYTE&&(J=i.R8)),x===i.RED_INTEGER&&(B===i.UNSIGNED_BYTE&&(J=i.R8UI),B===i.UNSIGNED_SHORT&&(J=i.R16UI),B===i.UNSIGNED_INT&&(J=i.R32UI),B===i.BYTE&&(J=i.R8I),B===i.SHORT&&(J=i.R16I),B===i.INT&&(J=i.R32I)),x===i.RG&&(B===i.FLOAT&&(J=i.RG32F),B===i.HALF_FLOAT&&(J=i.RG16F),B===i.UNSIGNED_BYTE&&(J=i.RG8)),x===i.RG_INTEGER&&(B===i.UNSIGNED_BYTE&&(J=i.RG8UI),B===i.UNSIGNED_SHORT&&(J=i.RG16UI),B===i.UNSIGNED_INT&&(J=i.RG32UI),B===i.BYTE&&(J=i.RG8I),B===i.SHORT&&(J=i.RG16I),B===i.INT&&(J=i.RG32I)),x===i.RGB_INTEGER&&(B===i.UNSIGNED_BYTE&&(J=i.RGB8UI),B===i.UNSIGNED_SHORT&&(J=i.RGB16UI),B===i.UNSIGNED_INT&&(J=i.RGB32UI),B===i.BYTE&&(J=i.RGB8I),B===i.SHORT&&(J=i.RGB16I),B===i.INT&&(J=i.RGB32I)),x===i.RGBA_INTEGER&&(B===i.UNSIGNED_BYTE&&(J=i.RGBA8UI),B===i.UNSIGNED_SHORT&&(J=i.RGBA16UI),B===i.UNSIGNED_INT&&(J=i.RGBA32UI),B===i.BYTE&&(J=i.RGBA8I),B===i.SHORT&&(J=i.RGBA16I),B===i.INT&&(J=i.RGBA32I)),x===i.RGB&&B===i.UNSIGNED_INT_5_9_9_9_REV&&(J=i.RGB9_E5),x===i.RGBA){const Ht=ut?xs:_e.getTransfer(et);B===i.FLOAT&&(J=i.RGBA32F),B===i.HALF_FLOAT&&(J=i.RGBA16F),B===i.UNSIGNED_BYTE&&(J=Ht===Te?i.SRGB8_ALPHA8:i.RGBA8),B===i.UNSIGNED_SHORT_4_4_4_4&&(J=i.RGBA4),B===i.UNSIGNED_SHORT_5_5_5_1&&(J=i.RGB5_A1)}return(J===i.R16F||J===i.R32F||J===i.RG16F||J===i.RG32F||J===i.RGBA16F||J===i.RGBA32F)&&t.get("EXT_color_buffer_float"),J}function _(A,x){let B;return A?x===null||x===Xi||x===Pr?B=i.DEPTH24_STENCIL8:x===ai?B=i.DEPTH32F_STENCIL8:x===oa&&(B=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===Xi||x===Pr?B=i.DEPTH_COMPONENT24:x===ai?B=i.DEPTH_COMPONENT32F:x===oa&&(B=i.DEPTH_COMPONENT16),B}function L(A,x){return m(A)===!0||A.isFramebufferTexture&&A.minFilter!==On&&A.minFilter!==Wn?Math.log2(Math.max(x.width,x.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?x.mipmaps.length:1}function R(A){const x=A.target;x.removeEventListener("dispose",R),U(x),x.isVideoTexture&&u.delete(x)}function b(A){const x=A.target;x.removeEventListener("dispose",b),M(x)}function U(A){const x=n.get(A);if(x.__webglInit===void 0)return;const B=A.source,et=f.get(B);if(et){const ut=et[x.__cacheKey];ut.usedTimes--,ut.usedTimes===0&&E(A),Object.keys(et).length===0&&f.delete(B)}n.remove(A)}function E(A){const x=n.get(A);i.deleteTexture(x.__webglTexture);const B=A.source,et=f.get(B);delete et[x.__cacheKey],s.memory.textures--}function M(A){const x=n.get(A);if(A.depthTexture&&(A.depthTexture.dispose(),n.remove(A.depthTexture)),A.isWebGLCubeRenderTarget)for(let et=0;et<6;et++){if(Array.isArray(x.__webglFramebuffer[et]))for(let ut=0;ut<x.__webglFramebuffer[et].length;ut++)i.deleteFramebuffer(x.__webglFramebuffer[et][ut]);else i.deleteFramebuffer(x.__webglFramebuffer[et]);x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer[et])}else{if(Array.isArray(x.__webglFramebuffer))for(let et=0;et<x.__webglFramebuffer.length;et++)i.deleteFramebuffer(x.__webglFramebuffer[et]);else i.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&i.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let et=0;et<x.__webglColorRenderbuffer.length;et++)x.__webglColorRenderbuffer[et]&&i.deleteRenderbuffer(x.__webglColorRenderbuffer[et]);x.__webglDepthRenderbuffer&&i.deleteRenderbuffer(x.__webglDepthRenderbuffer)}const B=A.textures;for(let et=0,ut=B.length;et<ut;et++){const J=n.get(B[et]);J.__webglTexture&&(i.deleteTexture(J.__webglTexture),s.memory.textures--),n.remove(B[et])}n.remove(A)}let C=0;function H(){C=0}function G(){const A=C;return A>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+r.maxTextures),C+=1,A}function K(A){const x=[];return x.push(A.wrapS),x.push(A.wrapT),x.push(A.wrapR||0),x.push(A.magFilter),x.push(A.minFilter),x.push(A.anisotropy),x.push(A.internalFormat),x.push(A.format),x.push(A.type),x.push(A.generateMipmaps),x.push(A.premultiplyAlpha),x.push(A.flipY),x.push(A.unpackAlignment),x.push(A.colorSpace),x.join()}function tt(A,x){const B=n.get(A);if(A.isVideoTexture&&xt(A),A.isRenderTargetTexture===!1&&A.version>0&&B.__version!==A.version){const et=A.image;if(et===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(et.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{W(B,A,x);return}}e.bindTexture(i.TEXTURE_2D,B.__webglTexture,i.TEXTURE0+x)}function Z(A,x){const B=n.get(A);if(A.version>0&&B.__version!==A.version){W(B,A,x);return}e.bindTexture(i.TEXTURE_2D_ARRAY,B.__webglTexture,i.TEXTURE0+x)}function at(A,x){const B=n.get(A);if(A.version>0&&B.__version!==A.version){W(B,A,x);return}e.bindTexture(i.TEXTURE_3D,B.__webglTexture,i.TEXTURE0+x)}function X(A,x){const B=n.get(A);if(A.version>0&&B.__version!==A.version){it(B,A,x);return}e.bindTexture(i.TEXTURE_CUBE_MAP,B.__webglTexture,i.TEXTURE0+x)}const ft={[Co]:i.REPEAT,[ki]:i.CLAMP_TO_EDGE,[Po]:i.MIRRORED_REPEAT},st={[On]:i.NEAREST,[Uc]:i.NEAREST_MIPMAP_NEAREST,[ya]:i.NEAREST_MIPMAP_LINEAR,[Wn]:i.LINEAR,[Ls]:i.LINEAR_MIPMAP_NEAREST,[Hi]:i.LINEAR_MIPMAP_LINEAR},Q={[Bc]:i.NEVER,[Xc]:i.ALWAYS,[kc]:i.LESS,[zl]:i.LEQUAL,[Hc]:i.EQUAL,[Wc]:i.GEQUAL,[Gc]:i.GREATER,[Vc]:i.NOTEQUAL};function Mt(A,x){if(x.type===ai&&t.has("OES_texture_float_linear")===!1&&(x.magFilter===Wn||x.magFilter===Ls||x.magFilter===ya||x.magFilter===Hi||x.minFilter===Wn||x.minFilter===Ls||x.minFilter===ya||x.minFilter===Hi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(A,i.TEXTURE_WRAP_S,ft[x.wrapS]),i.texParameteri(A,i.TEXTURE_WRAP_T,ft[x.wrapT]),(A===i.TEXTURE_3D||A===i.TEXTURE_2D_ARRAY)&&i.texParameteri(A,i.TEXTURE_WRAP_R,ft[x.wrapR]),i.texParameteri(A,i.TEXTURE_MAG_FILTER,st[x.magFilter]),i.texParameteri(A,i.TEXTURE_MIN_FILTER,st[x.minFilter]),x.compareFunction&&(i.texParameteri(A,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(A,i.TEXTURE_COMPARE_FUNC,Q[x.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===On||x.minFilter!==ya&&x.minFilter!==Hi||x.type===ai&&t.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||n.get(x).__currentAnisotropy){const B=t.get("EXT_texture_filter_anisotropic");i.texParameterf(A,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,r.getMaxAnisotropy())),n.get(x).__currentAnisotropy=x.anisotropy}}}function wt(A,x){let B=!1;A.__webglInit===void 0&&(A.__webglInit=!0,x.addEventListener("dispose",R));const et=x.source;let ut=f.get(et);ut===void 0&&(ut={},f.set(et,ut));const J=K(x);if(J!==A.__cacheKey){ut[J]===void 0&&(ut[J]={texture:i.createTexture(),usedTimes:0},s.memory.textures++,B=!0),ut[J].usedTimes++;const Ht=ut[A.__cacheKey];Ht!==void 0&&(ut[A.__cacheKey].usedTimes--,Ht.usedTimes===0&&E(x)),A.__cacheKey=J,A.__webglTexture=ut[J].texture}return B}function W(A,x,B){let et=i.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(et=i.TEXTURE_2D_ARRAY),x.isData3DTexture&&(et=i.TEXTURE_3D);const ut=wt(A,x),J=x.source;e.bindTexture(et,A.__webglTexture,i.TEXTURE0+B);const Ht=n.get(J);if(J.version!==Ht.__version||ut===!0){e.activeTexture(i.TEXTURE0+B);const Dt=_e.getPrimaries(_e.workingColorSpace),Ft=x.colorSpace===ri?null:_e.getPrimaries(x.colorSpace),oe=x.colorSpace===ri||Dt===Ft?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,oe);let vt=v(x.image,!1,r.maxTextureSize);vt=Vt(x,vt);const Nt=a.convert(x.format,x.colorSpace),Yt=a.convert(x.type);let Kt=S(x.internalFormat,Nt,Yt,x.colorSpace,x.isVideoTexture);Mt(et,x);let zt;const se=x.mipmaps,te=x.isVideoTexture!==!0,me=Ht.__version===void 0||ut===!0,N=J.dataReady,Pt=L(x,vt);if(x.isDepthTexture)Kt=_(x.format===Lr,x.type),me&&(te?e.texStorage2D(i.TEXTURE_2D,1,Kt,vt.width,vt.height):e.texImage2D(i.TEXTURE_2D,0,Kt,vt.width,vt.height,0,Nt,Yt,null));else if(x.isDataTexture)if(se.length>0){te&&me&&e.texStorage2D(i.TEXTURE_2D,Pt,Kt,se[0].width,se[0].height);for(let j=0,lt=se.length;j<lt;j++)zt=se[j],te?N&&e.texSubImage2D(i.TEXTURE_2D,j,0,0,zt.width,zt.height,Nt,Yt,zt.data):e.texImage2D(i.TEXTURE_2D,j,Kt,zt.width,zt.height,0,Nt,Yt,zt.data);x.generateMipmaps=!1}else te?(me&&e.texStorage2D(i.TEXTURE_2D,Pt,Kt,vt.width,vt.height),N&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,vt.width,vt.height,Nt,Yt,vt.data)):e.texImage2D(i.TEXTURE_2D,0,Kt,vt.width,vt.height,0,Nt,Yt,vt.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){te&&me&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Pt,Kt,se[0].width,se[0].height,vt.depth);for(let j=0,lt=se.length;j<lt;j++)if(zt=se[j],x.format!==Fn)if(Nt!==null)if(te){if(N)if(x.layerUpdates.size>0){const Rt=Q1(zt.width,zt.height,x.format,x.type);for(const Et of x.layerUpdates){const jt=zt.data.subarray(Et*Rt/zt.data.BYTES_PER_ELEMENT,(Et+1)*Rt/zt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,j,0,0,Et,zt.width,zt.height,1,Nt,jt)}x.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,j,0,0,0,zt.width,zt.height,vt.depth,Nt,zt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,j,Kt,zt.width,zt.height,vt.depth,0,zt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else te?N&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,j,0,0,0,zt.width,zt.height,vt.depth,Nt,Yt,zt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,j,Kt,zt.width,zt.height,vt.depth,0,Nt,Yt,zt.data)}else{te&&me&&e.texStorage2D(i.TEXTURE_2D,Pt,Kt,se[0].width,se[0].height);for(let j=0,lt=se.length;j<lt;j++)zt=se[j],x.format!==Fn?Nt!==null?te?N&&e.compressedTexSubImage2D(i.TEXTURE_2D,j,0,0,zt.width,zt.height,Nt,zt.data):e.compressedTexImage2D(i.TEXTURE_2D,j,Kt,zt.width,zt.height,0,zt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):te?N&&e.texSubImage2D(i.TEXTURE_2D,j,0,0,zt.width,zt.height,Nt,Yt,zt.data):e.texImage2D(i.TEXTURE_2D,j,Kt,zt.width,zt.height,0,Nt,Yt,zt.data)}else if(x.isDataArrayTexture)if(te){if(me&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Pt,Kt,vt.width,vt.height,vt.depth),N)if(x.layerUpdates.size>0){const j=Q1(vt.width,vt.height,x.format,x.type);for(const lt of x.layerUpdates){const Rt=vt.data.subarray(lt*j/vt.data.BYTES_PER_ELEMENT,(lt+1)*j/vt.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,lt,vt.width,vt.height,1,Nt,Yt,Rt)}x.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,vt.width,vt.height,vt.depth,Nt,Yt,vt.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Kt,vt.width,vt.height,vt.depth,0,Nt,Yt,vt.data);else if(x.isData3DTexture)te?(me&&e.texStorage3D(i.TEXTURE_3D,Pt,Kt,vt.width,vt.height,vt.depth),N&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,vt.width,vt.height,vt.depth,Nt,Yt,vt.data)):e.texImage3D(i.TEXTURE_3D,0,Kt,vt.width,vt.height,vt.depth,0,Nt,Yt,vt.data);else if(x.isFramebufferTexture){if(me)if(te)e.texStorage2D(i.TEXTURE_2D,Pt,Kt,vt.width,vt.height);else{let j=vt.width,lt=vt.height;for(let Rt=0;Rt<Pt;Rt++)e.texImage2D(i.TEXTURE_2D,Rt,Kt,j,lt,0,Nt,Yt,null),j>>=1,lt>>=1}}else if(se.length>0){if(te&&me){const j=bt(se[0]);e.texStorage2D(i.TEXTURE_2D,Pt,Kt,j.width,j.height)}for(let j=0,lt=se.length;j<lt;j++)zt=se[j],te?N&&e.texSubImage2D(i.TEXTURE_2D,j,0,0,Nt,Yt,zt):e.texImage2D(i.TEXTURE_2D,j,Kt,Nt,Yt,zt);x.generateMipmaps=!1}else if(te){if(me){const j=bt(vt);e.texStorage2D(i.TEXTURE_2D,Pt,Kt,j.width,j.height)}N&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,Nt,Yt,vt)}else e.texImage2D(i.TEXTURE_2D,0,Kt,Nt,Yt,vt);m(x)&&d(et),Ht.__version=J.version,x.onUpdate&&x.onUpdate(x)}A.__version=x.version}function it(A,x,B){if(x.image.length!==6)return;const et=wt(A,x),ut=x.source;e.bindTexture(i.TEXTURE_CUBE_MAP,A.__webglTexture,i.TEXTURE0+B);const J=n.get(ut);if(ut.version!==J.__version||et===!0){e.activeTexture(i.TEXTURE0+B);const Ht=_e.getPrimaries(_e.workingColorSpace),Dt=x.colorSpace===ri?null:_e.getPrimaries(x.colorSpace),Ft=x.colorSpace===ri||Ht===Dt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ft);const oe=x.isCompressedTexture||x.image[0].isCompressedTexture,vt=x.image[0]&&x.image[0].isDataTexture,Nt=[];for(let lt=0;lt<6;lt++)!oe&&!vt?Nt[lt]=v(x.image[lt],!0,r.maxCubemapSize):Nt[lt]=vt?x.image[lt].image:x.image[lt],Nt[lt]=Vt(x,Nt[lt]);const Yt=Nt[0],Kt=a.convert(x.format,x.colorSpace),zt=a.convert(x.type),se=S(x.internalFormat,Kt,zt,x.colorSpace),te=x.isVideoTexture!==!0,me=J.__version===void 0||et===!0,N=ut.dataReady;let Pt=L(x,Yt);Mt(i.TEXTURE_CUBE_MAP,x);let j;if(oe){te&&me&&e.texStorage2D(i.TEXTURE_CUBE_MAP,Pt,se,Yt.width,Yt.height);for(let lt=0;lt<6;lt++){j=Nt[lt].mipmaps;for(let Rt=0;Rt<j.length;Rt++){const Et=j[Rt];x.format!==Fn?Kt!==null?te?N&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,Rt,0,0,Et.width,Et.height,Kt,Et.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,Rt,se,Et.width,Et.height,0,Et.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):te?N&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,Rt,0,0,Et.width,Et.height,Kt,zt,Et.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,Rt,se,Et.width,Et.height,0,Kt,zt,Et.data)}}}else{if(j=x.mipmaps,te&&me){j.length>0&&Pt++;const lt=bt(Nt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,Pt,se,lt.width,lt.height)}for(let lt=0;lt<6;lt++)if(vt){te?N&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0,0,0,Nt[lt].width,Nt[lt].height,Kt,zt,Nt[lt].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0,se,Nt[lt].width,Nt[lt].height,0,Kt,zt,Nt[lt].data);for(let Rt=0;Rt<j.length;Rt++){const jt=j[Rt].image[lt].image;te?N&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,Rt+1,0,0,jt.width,jt.height,Kt,zt,jt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,Rt+1,se,jt.width,jt.height,0,Kt,zt,jt.data)}}else{te?N&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0,0,0,Kt,zt,Nt[lt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0,se,Kt,zt,Nt[lt]);for(let Rt=0;Rt<j.length;Rt++){const Et=j[Rt];te?N&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,Rt+1,0,0,Kt,zt,Et.image[lt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,Rt+1,se,Kt,zt,Et.image[lt])}}}m(x)&&d(i.TEXTURE_CUBE_MAP),J.__version=ut.version,x.onUpdate&&x.onUpdate(x)}A.__version=x.version}function St(A,x,B,et,ut,J){const Ht=a.convert(B.format,B.colorSpace),Dt=a.convert(B.type),Ft=S(B.internalFormat,Ht,Dt,B.colorSpace),oe=n.get(x),vt=n.get(B);if(vt.__renderTarget=x,!oe.__hasExternalTextures){const Nt=Math.max(1,x.width>>J),Yt=Math.max(1,x.height>>J);ut===i.TEXTURE_3D||ut===i.TEXTURE_2D_ARRAY?e.texImage3D(ut,J,Ft,Nt,Yt,x.depth,0,Ht,Dt,null):e.texImage2D(ut,J,Ft,Nt,Yt,0,Ht,Dt,null)}e.bindFramebuffer(i.FRAMEBUFFER,A),At(x)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,et,ut,vt.__webglTexture,0,ct(x)):(ut===i.TEXTURE_2D||ut>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ut<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,et,ut,vt.__webglTexture,J),e.bindFramebuffer(i.FRAMEBUFFER,null)}function $(A,x,B){if(i.bindRenderbuffer(i.RENDERBUFFER,A),x.depthBuffer){const et=x.depthTexture,ut=et&&et.isDepthTexture?et.type:null,J=_(x.stencilBuffer,ut),Ht=x.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Dt=ct(x);At(x)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Dt,J,x.width,x.height):B?i.renderbufferStorageMultisample(i.RENDERBUFFER,Dt,J,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,J,x.width,x.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Ht,i.RENDERBUFFER,A)}else{const et=x.textures;for(let ut=0;ut<et.length;ut++){const J=et[ut],Ht=a.convert(J.format,J.colorSpace),Dt=a.convert(J.type),Ft=S(J.internalFormat,Ht,Dt,J.colorSpace),oe=ct(x);B&&At(x)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,oe,Ft,x.width,x.height):At(x)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,oe,Ft,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,Ft,x.width,x.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function _t(A,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,A),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const et=n.get(x.depthTexture);et.__renderTarget=x,(!et.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),tt(x.depthTexture,0);const ut=et.__webglTexture,J=ct(x);if(x.depthTexture.format===yr)At(x)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ut,0,J):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ut,0);else if(x.depthTexture.format===Lr)At(x)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ut,0,J):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ut,0);else throw new Error("Unknown depthTexture format")}function F(A){const x=n.get(A),B=A.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==A.depthTexture){const et=A.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),et){const ut=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,et.removeEventListener("dispose",ut)};et.addEventListener("dispose",ut),x.__depthDisposeCallback=ut}x.__boundDepthTexture=et}if(A.depthTexture&&!x.__autoAllocateDepthBuffer){if(B)throw new Error("target.depthTexture not supported in Cube render targets");_t(x.__webglFramebuffer,A)}else if(B){x.__webglDepthbuffer=[];for(let et=0;et<6;et++)if(e.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer[et]),x.__webglDepthbuffer[et]===void 0)x.__webglDepthbuffer[et]=i.createRenderbuffer(),$(x.__webglDepthbuffer[et],A,!1);else{const ut=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,J=x.__webglDepthbuffer[et];i.bindRenderbuffer(i.RENDERBUFFER,J),i.framebufferRenderbuffer(i.FRAMEBUFFER,ut,i.RENDERBUFFER,J)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=i.createRenderbuffer(),$(x.__webglDepthbuffer,A,!1);else{const et=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ut=x.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,ut),i.framebufferRenderbuffer(i.FRAMEBUFFER,et,i.RENDERBUFFER,ut)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function nt(A,x,B){const et=n.get(A);x!==void 0&&St(et.__webglFramebuffer,A,A.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),B!==void 0&&F(A)}function Ct(A){const x=A.texture,B=n.get(A),et=n.get(x);A.addEventListener("dispose",b);const ut=A.textures,J=A.isWebGLCubeRenderTarget===!0,Ht=ut.length>1;if(Ht||(et.__webglTexture===void 0&&(et.__webglTexture=i.createTexture()),et.__version=x.version,s.memory.textures++),J){B.__webglFramebuffer=[];for(let Dt=0;Dt<6;Dt++)if(x.mipmaps&&x.mipmaps.length>0){B.__webglFramebuffer[Dt]=[];for(let Ft=0;Ft<x.mipmaps.length;Ft++)B.__webglFramebuffer[Dt][Ft]=i.createFramebuffer()}else B.__webglFramebuffer[Dt]=i.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){B.__webglFramebuffer=[];for(let Dt=0;Dt<x.mipmaps.length;Dt++)B.__webglFramebuffer[Dt]=i.createFramebuffer()}else B.__webglFramebuffer=i.createFramebuffer();if(Ht)for(let Dt=0,Ft=ut.length;Dt<Ft;Dt++){const oe=n.get(ut[Dt]);oe.__webglTexture===void 0&&(oe.__webglTexture=i.createTexture(),s.memory.textures++)}if(A.samples>0&&At(A)===!1){B.__webglMultisampledFramebuffer=i.createFramebuffer(),B.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let Dt=0;Dt<ut.length;Dt++){const Ft=ut[Dt];B.__webglColorRenderbuffer[Dt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,B.__webglColorRenderbuffer[Dt]);const oe=a.convert(Ft.format,Ft.colorSpace),vt=a.convert(Ft.type),Nt=S(Ft.internalFormat,oe,vt,Ft.colorSpace,A.isXRRenderTarget===!0),Yt=ct(A);i.renderbufferStorageMultisample(i.RENDERBUFFER,Yt,Nt,A.width,A.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Dt,i.RENDERBUFFER,B.__webglColorRenderbuffer[Dt])}i.bindRenderbuffer(i.RENDERBUFFER,null),A.depthBuffer&&(B.__webglDepthRenderbuffer=i.createRenderbuffer(),$(B.__webglDepthRenderbuffer,A,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(J){e.bindTexture(i.TEXTURE_CUBE_MAP,et.__webglTexture),Mt(i.TEXTURE_CUBE_MAP,x);for(let Dt=0;Dt<6;Dt++)if(x.mipmaps&&x.mipmaps.length>0)for(let Ft=0;Ft<x.mipmaps.length;Ft++)St(B.__webglFramebuffer[Dt][Ft],A,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Dt,Ft);else St(B.__webglFramebuffer[Dt],A,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Dt,0);m(x)&&d(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Ht){for(let Dt=0,Ft=ut.length;Dt<Ft;Dt++){const oe=ut[Dt],vt=n.get(oe);e.bindTexture(i.TEXTURE_2D,vt.__webglTexture),Mt(i.TEXTURE_2D,oe),St(B.__webglFramebuffer,A,oe,i.COLOR_ATTACHMENT0+Dt,i.TEXTURE_2D,0),m(oe)&&d(i.TEXTURE_2D)}e.unbindTexture()}else{let Dt=i.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(Dt=A.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(Dt,et.__webglTexture),Mt(Dt,x),x.mipmaps&&x.mipmaps.length>0)for(let Ft=0;Ft<x.mipmaps.length;Ft++)St(B.__webglFramebuffer[Ft],A,x,i.COLOR_ATTACHMENT0,Dt,Ft);else St(B.__webglFramebuffer,A,x,i.COLOR_ATTACHMENT0,Dt,0);m(x)&&d(Dt),e.unbindTexture()}A.depthBuffer&&F(A)}function I(A){const x=A.textures;for(let B=0,et=x.length;B<et;B++){const ut=x[B];if(m(ut)){const J=w(A),Ht=n.get(ut).__webglTexture;e.bindTexture(J,Ht),d(J),e.unbindTexture()}}}const ot=[],T=[];function pt(A){if(A.samples>0){if(At(A)===!1){const x=A.textures,B=A.width,et=A.height;let ut=i.COLOR_BUFFER_BIT;const J=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Ht=n.get(A),Dt=x.length>1;if(Dt)for(let Ft=0;Ft<x.length;Ft++)e.bindFramebuffer(i.FRAMEBUFFER,Ht.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ft,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,Ht.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ft,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,Ht.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ht.__webglFramebuffer);for(let Ft=0;Ft<x.length;Ft++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(ut|=i.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(ut|=i.STENCIL_BUFFER_BIT)),Dt){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Ht.__webglColorRenderbuffer[Ft]);const oe=n.get(x[Ft]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,oe,0)}i.blitFramebuffer(0,0,B,et,0,0,B,et,ut,i.NEAREST),l===!0&&(ot.length=0,T.length=0,ot.push(i.COLOR_ATTACHMENT0+Ft),A.depthBuffer&&A.resolveDepthBuffer===!1&&(ot.push(J),T.push(J),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,T)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,ot))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),Dt)for(let Ft=0;Ft<x.length;Ft++){e.bindFramebuffer(i.FRAMEBUFFER,Ht.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ft,i.RENDERBUFFER,Ht.__webglColorRenderbuffer[Ft]);const oe=n.get(x[Ft]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,Ht.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ft,i.TEXTURE_2D,oe,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ht.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.resolveDepthBuffer===!1&&l){const x=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[x])}}}function ct(A){return Math.min(r.maxSamples,A.samples)}function At(A){const x=n.get(A);return A.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function xt(A){const x=s.render.frame;u.get(A)!==x&&(u.set(A,x),A.update())}function Vt(A,x){const B=A.colorSpace,et=A.format,ut=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||B!==Ki&&B!==ri&&(_e.getTransfer(B)===Te?(et!==Fn||ut!==hi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",B)),x}function bt(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(c.width=A.naturalWidth||A.width,c.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(c.width=A.displayWidth,c.height=A.displayHeight):(c.width=A.width,c.height=A.height),c}this.allocateTextureUnit=G,this.resetTextureUnits=H,this.setTexture2D=tt,this.setTexture2DArray=Z,this.setTexture3D=at,this.setTextureCube=X,this.rebindTextures=nt,this.setupRenderTarget=Ct,this.updateRenderTargetMipmap=I,this.updateMultisampleRenderTarget=pt,this.setupDepthRenderbuffer=F,this.setupFrameBufferTexture=St,this.useMultisampledRTT=At}function h6(i,t){function e(n,r=ri){let a;const s=_e.getTransfer(r);if(n===hi)return i.UNSIGNED_BYTE;if(n===C0)return i.UNSIGNED_SHORT_4_4_4_4;if(n===P0)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Pl)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Rl)return i.BYTE;if(n===Cl)return i.SHORT;if(n===oa)return i.UNSIGNED_SHORT;if(n===R0)return i.INT;if(n===Xi)return i.UNSIGNED_INT;if(n===ai)return i.FLOAT;if(n===fa)return i.HALF_FLOAT;if(n===Ll)return i.ALPHA;if(n===Dl)return i.RGB;if(n===Fn)return i.RGBA;if(n===Il)return i.LUMINANCE;if(n===Ul)return i.LUMINANCE_ALPHA;if(n===yr)return i.DEPTH_COMPONENT;if(n===Lr)return i.DEPTH_STENCIL;if(n===Nl)return i.RED;if(n===L0)return i.RED_INTEGER;if(n===Fl)return i.RG;if(n===D0)return i.RG_INTEGER;if(n===I0)return i.RGBA_INTEGER;if(n===is||n===rs||n===as||n===ss)if(s===Te)if(a=t.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(n===is)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===rs)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===as)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===ss)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=t.get("WEBGL_compressed_texture_s3tc"),a!==null){if(n===is)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===rs)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===as)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===ss)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Lo||n===Do||n===Io||n===Uo)if(a=t.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(n===Lo)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Do)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Io)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Uo)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===No||n===Fo||n===Oo)if(a=t.get("WEBGL_compressed_texture_etc"),a!==null){if(n===No||n===Fo)return s===Te?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(n===Oo)return s===Te?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===zo||n===Bo||n===ko||n===Ho||n===Go||n===Vo||n===Wo||n===Xo||n===qo||n===Yo||n===$o||n===Ko||n===Zo||n===Jo)if(a=t.get("WEBGL_compressed_texture_astc"),a!==null){if(n===zo)return s===Te?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Bo)return s===Te?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===ko)return s===Te?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Ho)return s===Te?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Go)return s===Te?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Vo)return s===Te?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Wo)return s===Te?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Xo)return s===Te?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===qo)return s===Te?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Yo)return s===Te?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===$o)return s===Te?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Ko)return s===Te?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Zo)return s===Te?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Jo)return s===Te?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===os||n===jo||n===Qo)if(a=t.get("EXT_texture_compression_bptc"),a!==null){if(n===os)return s===Te?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===jo)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Qo)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Ol||n===t0||n===e0||n===n0)if(a=t.get("EXT_texture_compression_rgtc"),a!==null){if(n===os)return a.COMPRESSED_RED_RGTC1_EXT;if(n===t0)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===e0)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===n0)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Pr?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}class d6 extends _n{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class Gi extends $e{constructor(){super(),this.isGroup=!0,this.type="Group"}}const f6={type:"move"};class ro{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Gi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Gi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Gi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let r=null,a=null,s=null;const o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){s=!0;for(const v of t.hand.values()){const m=e.getJointPose(v,n),d=this._getHandJoint(c,v);m!==null&&(d.matrix.fromArray(m.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=m.radius),d.visible=m!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=u.position.distanceTo(h.position),p=.02,g=.005;c.inputState.pinching&&f>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(a=e.getPose(t.gripSpace,n),a!==null&&(l.matrix.fromArray(a.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,a.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(a.linearVelocity)):l.hasLinearVelocity=!1,a.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(a.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(r=e.getPose(t.targetRaySpace,n),r===null&&a!==null&&(r=a),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(f6)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=a!==null),c!==null&&(c.visible=s!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new Gi;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const p6=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,m6=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class g6{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const r=new cn,a=t.properties.get(r);a.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new dn({vertexShader:p6,fragmentShader:m6,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new ke(new va(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class v6 extends Ur{constructor(t,e){super();const n=this;let r=null,a=1,s=null,o="local-floor",l=1,c=null,u=null,h=null,f=null,p=null,g=null;const v=new g6,m=e.getContextAttributes();let d=null,w=null;const S=[],_=[],L=new Zt;let R=null;const b=new _n;b.viewport=new Ne;const U=new _n;U.viewport=new Ne;const E=[b,U],M=new d6;let C=null,H=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(W){let it=S[W];return it===void 0&&(it=new ro,S[W]=it),it.getTargetRaySpace()},this.getControllerGrip=function(W){let it=S[W];return it===void 0&&(it=new ro,S[W]=it),it.getGripSpace()},this.getHand=function(W){let it=S[W];return it===void 0&&(it=new ro,S[W]=it),it.getHandSpace()};function G(W){const it=_.indexOf(W.inputSource);if(it===-1)return;const St=S[it];St!==void 0&&(St.update(W.inputSource,W.frame,c||s),St.dispatchEvent({type:W.type,data:W.inputSource}))}function K(){r.removeEventListener("select",G),r.removeEventListener("selectstart",G),r.removeEventListener("selectend",G),r.removeEventListener("squeeze",G),r.removeEventListener("squeezestart",G),r.removeEventListener("squeezeend",G),r.removeEventListener("end",K),r.removeEventListener("inputsourceschange",tt);for(let W=0;W<S.length;W++){const it=_[W];it!==null&&(_[W]=null,S[W].disconnect(it))}C=null,H=null,v.reset(),t.setRenderTarget(d),p=null,f=null,h=null,r=null,w=null,wt.stop(),n.isPresenting=!1,t.setPixelRatio(R),t.setSize(L.width,L.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(W){a=W,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(W){o=W,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||s},this.setReferenceSpace=function(W){c=W},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return h},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(W){if(r=W,r!==null){if(d=t.getRenderTarget(),r.addEventListener("select",G),r.addEventListener("selectstart",G),r.addEventListener("selectend",G),r.addEventListener("squeeze",G),r.addEventListener("squeezestart",G),r.addEventListener("squeezeend",G),r.addEventListener("end",K),r.addEventListener("inputsourceschange",tt),m.xrCompatible!==!0&&await e.makeXRCompatible(),R=t.getPixelRatio(),t.getSize(L),r.renderState.layers===void 0){const it={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:a};p=new XRWebGLLayer(r,e,it),r.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),w=new qi(p.framebufferWidth,p.framebufferHeight,{format:Fn,type:hi,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let it=null,St=null,$=null;m.depth&&($=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,it=m.stencil?Lr:yr,St=m.stencil?Pr:Xi);const _t={colorFormat:e.RGBA8,depthFormat:$,scaleFactor:a};h=new XRWebGLBinding(r,e),f=h.createProjectionLayer(_t),r.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),w=new qi(f.textureWidth,f.textureHeight,{format:Fn,type:hi,depthTexture:new Zl(f.textureWidth,f.textureHeight,St,void 0,void 0,void 0,void 0,void 0,void 0,it),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}w.isXRRenderTarget=!0,this.setFoveation(l),c=null,s=await r.requestReferenceSpace(o),wt.setContext(r),wt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function tt(W){for(let it=0;it<W.removed.length;it++){const St=W.removed[it],$=_.indexOf(St);$>=0&&(_[$]=null,S[$].disconnect(St))}for(let it=0;it<W.added.length;it++){const St=W.added[it];let $=_.indexOf(St);if($===-1){for(let F=0;F<S.length;F++)if(F>=_.length){_.push(St),$=F;break}else if(_[F]===null){_[F]=St,$=F;break}if($===-1)break}const _t=S[$];_t&&_t.connect(St)}}const Z=new D,at=new D;function X(W,it,St){Z.setFromMatrixPosition(it.matrixWorld),at.setFromMatrixPosition(St.matrixWorld);const $=Z.distanceTo(at),_t=it.projectionMatrix.elements,F=St.projectionMatrix.elements,nt=_t[14]/(_t[10]-1),Ct=_t[14]/(_t[10]+1),I=(_t[9]+1)/_t[5],ot=(_t[9]-1)/_t[5],T=(_t[8]-1)/_t[0],pt=(F[8]+1)/F[0],ct=nt*T,At=nt*pt,xt=$/(-T+pt),Vt=xt*-T;if(it.matrixWorld.decompose(W.position,W.quaternion,W.scale),W.translateX(Vt),W.translateZ(xt),W.matrixWorld.compose(W.position,W.quaternion,W.scale),W.matrixWorldInverse.copy(W.matrixWorld).invert(),_t[10]===-1)W.projectionMatrix.copy(it.projectionMatrix),W.projectionMatrixInverse.copy(it.projectionMatrixInverse);else{const bt=nt+xt,A=Ct+xt,x=ct-Vt,B=At+($-Vt),et=I*Ct/A*bt,ut=ot*Ct/A*bt;W.projectionMatrix.makePerspective(x,B,et,ut,bt,A),W.projectionMatrixInverse.copy(W.projectionMatrix).invert()}}function ft(W,it){it===null?W.matrixWorld.copy(W.matrix):W.matrixWorld.multiplyMatrices(it.matrixWorld,W.matrix),W.matrixWorldInverse.copy(W.matrixWorld).invert()}this.updateCamera=function(W){if(r===null)return;let it=W.near,St=W.far;v.texture!==null&&(v.depthNear>0&&(it=v.depthNear),v.depthFar>0&&(St=v.depthFar)),M.near=U.near=b.near=it,M.far=U.far=b.far=St,(C!==M.near||H!==M.far)&&(r.updateRenderState({depthNear:M.near,depthFar:M.far}),C=M.near,H=M.far),b.layers.mask=W.layers.mask|2,U.layers.mask=W.layers.mask|4,M.layers.mask=b.layers.mask|U.layers.mask;const $=W.parent,_t=M.cameras;ft(M,$);for(let F=0;F<_t.length;F++)ft(_t[F],$);_t.length===2?X(M,b,U):M.projectionMatrix.copy(b.projectionMatrix),st(W,M,$)};function st(W,it,St){St===null?W.matrix.copy(it.matrixWorld):(W.matrix.copy(St.matrixWorld),W.matrix.invert(),W.matrix.multiply(it.matrixWorld)),W.matrix.decompose(W.position,W.quaternion,W.scale),W.updateMatrixWorld(!0),W.projectionMatrix.copy(it.projectionMatrix),W.projectionMatrixInverse.copy(it.projectionMatrixInverse),W.isPerspectiveCamera&&(W.fov=la*2*Math.atan(1/W.projectionMatrix.elements[5]),W.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(f===null&&p===null))return l},this.setFoveation=function(W){l=W,f!==null&&(f.fixedFoveation=W),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=W)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(M)};let Q=null;function Mt(W,it){if(u=it.getViewerPose(c||s),g=it,u!==null){const St=u.views;p!==null&&(t.setRenderTargetFramebuffer(w,p.framebuffer),t.setRenderTarget(w));let $=!1;St.length!==M.cameras.length&&(M.cameras.length=0,$=!0);for(let F=0;F<St.length;F++){const nt=St[F];let Ct=null;if(p!==null)Ct=p.getViewport(nt);else{const ot=h.getViewSubImage(f,nt);Ct=ot.viewport,F===0&&(t.setRenderTargetTextures(w,ot.colorTexture,f.ignoreDepthValues?void 0:ot.depthStencilTexture),t.setRenderTarget(w))}let I=E[F];I===void 0&&(I=new _n,I.layers.enable(F),I.viewport=new Ne,E[F]=I),I.matrix.fromArray(nt.transform.matrix),I.matrix.decompose(I.position,I.quaternion,I.scale),I.projectionMatrix.fromArray(nt.projectionMatrix),I.projectionMatrixInverse.copy(I.projectionMatrix).invert(),I.viewport.set(Ct.x,Ct.y,Ct.width,Ct.height),F===0&&(M.matrix.copy(I.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),$===!0&&M.cameras.push(I)}const _t=r.enabledFeatures;if(_t&&_t.includes("depth-sensing")){const F=h.getDepthInformation(St[0]);F&&F.isValid&&F.texture&&v.init(t,F,r.renderState)}}for(let St=0;St<S.length;St++){const $=_[St],_t=S[St];$!==null&&_t!==void 0&&_t.update($,it,c||s)}Q&&Q(W,it),it.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:it}),g=null}const wt=new Kl;wt.setAnimationLoop(Mt),this.setAnimationLoop=function(W){Q=W},this.dispose=function(){}}}const Ui=new zn,_6=new Se;function x6(i,t){function e(m,d){m.matrixAutoUpdate===!0&&m.updateMatrix(),d.value.copy(m.matrix)}function n(m,d){d.color.getRGB(m.fogColor.value,Xl(i)),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function r(m,d,w,S,_){d.isMeshBasicMaterial||d.isMeshLambertMaterial?a(m,d):d.isMeshToonMaterial?(a(m,d),h(m,d)):d.isMeshPhongMaterial?(a(m,d),u(m,d)):d.isMeshStandardMaterial?(a(m,d),f(m,d),d.isMeshPhysicalMaterial&&p(m,d,_)):d.isMeshMatcapMaterial?(a(m,d),g(m,d)):d.isMeshDepthMaterial?a(m,d):d.isMeshDistanceMaterial?(a(m,d),v(m,d)):d.isMeshNormalMaterial?a(m,d):d.isLineBasicMaterial?(s(m,d),d.isLineDashedMaterial&&o(m,d)):d.isPointsMaterial?l(m,d,w,S):d.isSpriteMaterial?c(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function a(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map,e(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,e(d.alphaMap,m.alphaMapTransform)),d.bumpMap&&(m.bumpMap.value=d.bumpMap,e(d.bumpMap,m.bumpMapTransform),m.bumpScale.value=d.bumpScale,d.side===fn&&(m.bumpScale.value*=-1)),d.normalMap&&(m.normalMap.value=d.normalMap,e(d.normalMap,m.normalMapTransform),m.normalScale.value.copy(d.normalScale),d.side===fn&&m.normalScale.value.negate()),d.displacementMap&&(m.displacementMap.value=d.displacementMap,e(d.displacementMap,m.displacementMapTransform),m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap,e(d.emissiveMap,m.emissiveMapTransform)),d.specularMap&&(m.specularMap.value=d.specularMap,e(d.specularMap,m.specularMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);const w=t.get(d),S=w.envMap,_=w.envMapRotation;S&&(m.envMap.value=S,Ui.copy(_),Ui.x*=-1,Ui.y*=-1,Ui.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(Ui.y*=-1,Ui.z*=-1),m.envMapRotation.value.setFromMatrix4(_6.makeRotationFromEuler(Ui)),m.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap&&(m.lightMap.value=d.lightMap,m.lightMapIntensity.value=d.lightMapIntensity,e(d.lightMap,m.lightMapTransform)),d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity,e(d.aoMap,m.aoMapTransform))}function s(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,d.map&&(m.map.value=d.map,e(d.map,m.mapTransform))}function o(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function l(m,d,w,S){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*w,m.scale.value=S*.5,d.map&&(m.map.value=d.map,e(d.map,m.uvTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,e(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function c(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map,e(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,e(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function u(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function h(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function f(m,d){m.metalness.value=d.metalness,d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap,e(d.metalnessMap,m.metalnessMapTransform)),m.roughness.value=d.roughness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap,e(d.roughnessMap,m.roughnessMapTransform)),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function p(m,d,w){m.ior.value=d.ior,d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap,e(d.sheenColorMap,m.sheenColorMapTransform)),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap,e(d.sheenRoughnessMap,m.sheenRoughnessMapTransform))),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap,e(d.clearcoatMap,m.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,e(d.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(m.clearcoatNormalMap.value=d.clearcoatNormalMap,e(d.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===fn&&m.clearcoatNormalScale.value.negate())),d.dispersion>0&&(m.dispersion.value=d.dispersion),d.iridescence>0&&(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(m.iridescenceMap.value=d.iridescenceMap,e(d.iridescenceMap,m.iridescenceMapTransform)),d.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=d.iridescenceThicknessMap,e(d.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=w.texture,m.transmissionSamplerSize.value.set(w.width,w.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap,e(d.transmissionMap,m.transmissionMapTransform)),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap,e(d.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(m.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(m.anisotropyMap.value=d.anisotropyMap,e(d.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap,e(d.specularColorMap,m.specularColorMapTransform)),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap,e(d.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,d){d.matcap&&(m.matcap.value=d.matcap)}function v(m,d){const w=t.get(d).light;m.referencePosition.value.setFromMatrixPosition(w.matrixWorld),m.nearDistance.value=w.shadow.camera.near,m.farDistance.value=w.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function M6(i,t,e,n){let r={},a={},s=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(w,S){const _=S.program;n.uniformBlockBinding(w,_)}function c(w,S){let _=r[w.id];_===void 0&&(g(w),_=u(w),r[w.id]=_,w.addEventListener("dispose",m));const L=S.program;n.updateUBOMapping(w,L);const R=t.render.frame;a[w.id]!==R&&(f(w),a[w.id]=R)}function u(w){const S=h();w.__bindingPointIndex=S;const _=i.createBuffer(),L=w.__size,R=w.usage;return i.bindBuffer(i.UNIFORM_BUFFER,_),i.bufferData(i.UNIFORM_BUFFER,L,R),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,S,_),_}function h(){for(let w=0;w<o;w++)if(s.indexOf(w)===-1)return s.push(w),w;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(w){const S=r[w.id],_=w.uniforms,L=w.__cache;i.bindBuffer(i.UNIFORM_BUFFER,S);for(let R=0,b=_.length;R<b;R++){const U=Array.isArray(_[R])?_[R]:[_[R]];for(let E=0,M=U.length;E<M;E++){const C=U[E];if(p(C,R,E,L)===!0){const H=C.__offset,G=Array.isArray(C.value)?C.value:[C.value];let K=0;for(let tt=0;tt<G.length;tt++){const Z=G[tt],at=v(Z);typeof Z=="number"||typeof Z=="boolean"?(C.__data[0]=Z,i.bufferSubData(i.UNIFORM_BUFFER,H+K,C.__data)):Z.isMatrix3?(C.__data[0]=Z.elements[0],C.__data[1]=Z.elements[1],C.__data[2]=Z.elements[2],C.__data[3]=0,C.__data[4]=Z.elements[3],C.__data[5]=Z.elements[4],C.__data[6]=Z.elements[5],C.__data[7]=0,C.__data[8]=Z.elements[6],C.__data[9]=Z.elements[7],C.__data[10]=Z.elements[8],C.__data[11]=0):(Z.toArray(C.__data,K),K+=at.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,H,C.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(w,S,_,L){const R=w.value,b=S+"_"+_;if(L[b]===void 0)return typeof R=="number"||typeof R=="boolean"?L[b]=R:L[b]=R.clone(),!0;{const U=L[b];if(typeof R=="number"||typeof R=="boolean"){if(U!==R)return L[b]=R,!0}else if(U.equals(R)===!1)return U.copy(R),!0}return!1}function g(w){const S=w.uniforms;let _=0;const L=16;for(let b=0,U=S.length;b<U;b++){const E=Array.isArray(S[b])?S[b]:[S[b]];for(let M=0,C=E.length;M<C;M++){const H=E[M],G=Array.isArray(H.value)?H.value:[H.value];for(let K=0,tt=G.length;K<tt;K++){const Z=G[K],at=v(Z),X=_%L,ft=X%at.boundary,st=X+ft;_+=ft,st!==0&&L-st<at.storage&&(_+=L-st),H.__data=new Float32Array(at.storage/Float32Array.BYTES_PER_ELEMENT),H.__offset=_,_+=at.storage}}}const R=_%L;return R>0&&(_+=L-R),w.__size=_,w.__cache={},this}function v(w){const S={boundary:0,storage:0};return typeof w=="number"||typeof w=="boolean"?(S.boundary=4,S.storage=4):w.isVector2?(S.boundary=8,S.storage=8):w.isVector3||w.isColor?(S.boundary=16,S.storage=12):w.isVector4?(S.boundary=16,S.storage=16):w.isMatrix3?(S.boundary=48,S.storage=48):w.isMatrix4?(S.boundary=64,S.storage=64):w.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",w),S}function m(w){const S=w.target;S.removeEventListener("dispose",m);const _=s.indexOf(S.__bindingPointIndex);s.splice(_,1),i.deleteBuffer(r[S.id]),delete r[S.id],delete a[S.id]}function d(){for(const w in r)i.deleteBuffer(r[w]);s=[],r={},a={}}return{bind:l,update:c,dispose:d}}class e2{constructor(t={}){const{canvas:e=l5(),context:n=null,depth:r=!0,stencil:a=!1,alpha:s=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reverseDepthBuffer:f=!1}=t;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=s;const g=new Uint32Array(4),v=new Int32Array(4);let m=null,d=null;const w=[],S=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=on,this.toneMapping=Ai,this.toneMappingExposure=1;const _=this;let L=!1,R=0,b=0,U=null,E=-1,M=null;const C=new Ne,H=new Ne;let G=null;const K=new de(0);let tt=0,Z=e.width,at=e.height,X=1,ft=null,st=null;const Q=new Ne(0,0,Z,at),Mt=new Ne(0,0,Z,at);let wt=!1;const W=new $l;let it=!1,St=!1;const $=new Se,_t=new Se,F=new D,nt=new Ne,Ct={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let I=!1;function ot(){return U===null?X:1}let T=n;function pt(y,O){return e.getContext(y,O)}try{const y={alpha:!0,depth:r,stencil:a,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${b0}`),e.addEventListener("webglcontextlost",lt,!1),e.addEventListener("webglcontextrestored",Rt,!1),e.addEventListener("webglcontextcreationerror",Et,!1),T===null){const O="webgl2";if(T=pt(O,y),T===null)throw pt(O)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(y){throw console.error("THREE.WebGLRenderer: "+y.message),y}let ct,At,xt,Vt,bt,A,x,B,et,ut,J,Ht,Dt,Ft,oe,vt,Nt,Yt,Kt,zt,se,te,me,N;function Pt(){ct=new Au(T),ct.init(),te=new h6(T,ct),At=new xu(T,ct,t,te),xt=new l6(T,ct),At.reverseDepthBuffer&&f&&xt.buffers.depth.setReversed(!0),Vt=new Cu(T),bt=new Yh,A=new u6(T,ct,xt,bt,At,te,Vt),x=new Su(_),B=new Tu(_),et=new N5(T),me=new vu(T,et),ut=new bu(T,et,Vt,me),J=new Lu(T,ut,et,Vt),Kt=new Pu(T,At,A),vt=new Mu(bt),Ht=new qh(_,x,B,ct,At,me,vt),Dt=new x6(_,bt),Ft=new Kh,oe=new e6(ct),Yt=new gu(_,x,B,xt,J,p,l),Nt=new s6(_,J,At),N=new M6(T,Vt,At,xt),zt=new _u(T,ct,Vt),se=new Ru(T,ct,Vt),Vt.programs=Ht.programs,_.capabilities=At,_.extensions=ct,_.properties=bt,_.renderLists=Ft,_.shadowMap=Nt,_.state=xt,_.info=Vt}Pt();const j=new v6(_,T);this.xr=j,this.getContext=function(){return T},this.getContextAttributes=function(){return T.getContextAttributes()},this.forceContextLoss=function(){const y=ct.get("WEBGL_lose_context");y&&y.loseContext()},this.forceContextRestore=function(){const y=ct.get("WEBGL_lose_context");y&&y.restoreContext()},this.getPixelRatio=function(){return X},this.setPixelRatio=function(y){y!==void 0&&(X=y,this.setSize(Z,at,!1))},this.getSize=function(y){return y.set(Z,at)},this.setSize=function(y,O,Y=!0){if(j.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Z=y,at=O,e.width=Math.floor(y*X),e.height=Math.floor(O*X),Y===!0&&(e.style.width=y+"px",e.style.height=O+"px"),this.setViewport(0,0,y,O)},this.getDrawingBufferSize=function(y){return y.set(Z*X,at*X).floor()},this.setDrawingBufferSize=function(y,O,Y){Z=y,at=O,X=Y,e.width=Math.floor(y*Y),e.height=Math.floor(O*Y),this.setViewport(0,0,y,O)},this.getCurrentViewport=function(y){return y.copy(C)},this.getViewport=function(y){return y.copy(Q)},this.setViewport=function(y,O,Y,q){y.isVector4?Q.set(y.x,y.y,y.z,y.w):Q.set(y,O,Y,q),xt.viewport(C.copy(Q).multiplyScalar(X).round())},this.getScissor=function(y){return y.copy(Mt)},this.setScissor=function(y,O,Y,q){y.isVector4?Mt.set(y.x,y.y,y.z,y.w):Mt.set(y,O,Y,q),xt.scissor(H.copy(Mt).multiplyScalar(X).round())},this.getScissorTest=function(){return wt},this.setScissorTest=function(y){xt.setScissorTest(wt=y)},this.setOpaqueSort=function(y){ft=y},this.setTransparentSort=function(y){st=y},this.getClearColor=function(y){return y.copy(Yt.getClearColor())},this.setClearColor=function(){Yt.setClearColor.apply(Yt,arguments)},this.getClearAlpha=function(){return Yt.getClearAlpha()},this.setClearAlpha=function(){Yt.setClearAlpha.apply(Yt,arguments)},this.clear=function(y=!0,O=!0,Y=!0){let q=0;if(y){let z=!1;if(U!==null){const mt=U.texture.format;z=mt===I0||mt===D0||mt===L0}if(z){const mt=U.texture.type,Lt=mt===hi||mt===Xi||mt===oa||mt===Pr||mt===C0||mt===P0,kt=Yt.getClearColor(),Gt=Yt.getClearAlpha(),Qt=kt.r,re=kt.g,Wt=kt.b;Lt?(g[0]=Qt,g[1]=re,g[2]=Wt,g[3]=Gt,T.clearBufferuiv(T.COLOR,0,g)):(v[0]=Qt,v[1]=re,v[2]=Wt,v[3]=Gt,T.clearBufferiv(T.COLOR,0,v))}else q|=T.COLOR_BUFFER_BIT}O&&(q|=T.DEPTH_BUFFER_BIT),Y&&(q|=T.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),T.clear(q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",lt,!1),e.removeEventListener("webglcontextrestored",Rt,!1),e.removeEventListener("webglcontextcreationerror",Et,!1),Ft.dispose(),oe.dispose(),bt.dispose(),x.dispose(),B.dispose(),J.dispose(),me.dispose(),N.dispose(),Ht.dispose(),j.dispose(),j.removeEventListener("sessionstart",Xt),j.removeEventListener("sessionend",ve),Ae.stop()};function lt(y){y.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),L=!0}function Rt(){console.log("THREE.WebGLRenderer: Context Restored."),L=!1;const y=Vt.autoReset,O=Nt.enabled,Y=Nt.autoUpdate,q=Nt.needsUpdate,z=Nt.type;Pt(),Vt.autoReset=y,Nt.enabled=O,Nt.autoUpdate=Y,Nt.needsUpdate=q,Nt.type=z}function Et(y){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",y.statusMessage)}function jt(y){const O=y.target;O.removeEventListener("dispose",jt),le(O)}function le(y){ee(y),bt.remove(y)}function ee(y){const O=bt.get(y).programs;O!==void 0&&(O.forEach(function(Y){Ht.releaseProgram(Y)}),y.isShaderMaterial&&Ht.releaseShaderCache(y))}this.renderBufferDirect=function(y,O,Y,q,z,mt){O===null&&(O=Ct);const Lt=z.isMesh&&z.matrixWorld.determinant()<0,kt=fi(y,O,Y,q,z);xt.setMaterial(q,Lt);let Gt=Y.index,Qt=1;if(q.wireframe===!0){if(Gt=ut.getWireframeAttribute(Y),Gt===void 0)return;Qt=2}const re=Y.drawRange,Wt=Y.attributes.position;let ue=re.start*Qt,ye=(re.start+re.count)*Qt;mt!==null&&(ue=Math.max(ue,mt.start*Qt),ye=Math.min(ye,(mt.start+mt.count)*Qt)),Gt!==null?(ue=Math.max(ue,0),ye=Math.min(ye,Gt.count)):Wt!=null&&(ue=Math.max(ue,0),ye=Math.min(ye,Wt.count));const xe=ye-ue;if(xe<0||xe===1/0)return;me.setup(z,q,kt,Y,Gt);let Be,ge=zt;if(Gt!==null&&(Be=et.get(Gt),ge=se,ge.setIndex(Be)),z.isMesh)q.wireframe===!0?(xt.setLineWidth(q.wireframeLinewidth*ot()),ge.setMode(T.LINES)):ge.setMode(T.TRIANGLES);else if(z.isLine){let qt=q.linewidth;qt===void 0&&(qt=1),xt.setLineWidth(qt*ot()),z.isLineSegments?ge.setMode(T.LINES):z.isLineLoop?ge.setMode(T.LINE_LOOP):ge.setMode(T.LINE_STRIP)}else z.isPoints?ge.setMode(T.POINTS):z.isSprite&&ge.setMode(T.TRIANGLES);if(z.isBatchedMesh)if(z._multiDrawInstances!==null)ge.renderMultiDrawInstances(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount,z._multiDrawInstances);else if(ct.get("WEBGL_multi_draw"))ge.renderMultiDraw(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount);else{const qt=z._multiDrawStarts,Ze=z._multiDrawCounts,fe=z._multiDrawCount,Je=Gt?et.get(Gt).bytesPerElement:1,Sn=bt.get(q).currentProgram.getUniforms();for(let Xe=0;Xe<fe;Xe++)Sn.setValue(T,"_gl_DrawID",Xe),ge.render(qt[Xe]/Je,Ze[Xe])}else if(z.isInstancedMesh)ge.renderInstances(ue,xe,z.count);else if(Y.isInstancedBufferGeometry){const qt=Y._maxInstanceCount!==void 0?Y._maxInstanceCount:1/0,Ze=Math.min(Y.instanceCount,qt);ge.renderInstances(ue,xe,Ze)}else ge.render(ue,xe)};function he(y,O,Y){y.transparent===!0&&y.side===Tn&&y.forceSinglePass===!1?(y.side=fn,y.needsUpdate=!0,mn(y,O,Y),y.side=ui,y.needsUpdate=!0,mn(y,O,Y),y.side=Tn):mn(y,O,Y)}this.compile=function(y,O,Y=null){Y===null&&(Y=y),d=oe.get(Y),d.init(O),S.push(d),Y.traverseVisible(function(z){z.isLight&&z.layers.test(O.layers)&&(d.pushLight(z),z.castShadow&&d.pushShadow(z))}),y!==Y&&y.traverseVisible(function(z){z.isLight&&z.layers.test(O.layers)&&(d.pushLight(z),z.castShadow&&d.pushShadow(z))}),d.setupLights();const q=new Set;return y.traverse(function(z){if(!(z.isMesh||z.isPoints||z.isLine||z.isSprite))return;const mt=z.material;if(mt)if(Array.isArray(mt))for(let Lt=0;Lt<mt.length;Lt++){const kt=mt[Lt];he(kt,Y,z),q.add(kt)}else he(mt,Y,z),q.add(mt)}),S.pop(),d=null,q},this.compileAsync=function(y,O,Y=null){const q=this.compile(y,O,Y);return new Promise(z=>{function mt(){if(q.forEach(function(Lt){bt.get(Lt).currentProgram.isReady()&&q.delete(Lt)}),q.size===0){z(y);return}setTimeout(mt,10)}ct.get("KHR_parallel_shader_compile")!==null?mt():setTimeout(mt,10)})};let We=null;function ht(y){We&&We(y)}function Xt(){Ae.stop()}function ve(){Ae.start()}const Ae=new Kl;Ae.setAnimationLoop(ht),typeof self<"u"&&Ae.setContext(self),this.setAnimationLoop=function(y){We=y,j.setAnimationLoop(y),y===null?Ae.stop():Ae.start()},j.addEventListener("sessionstart",Xt),j.addEventListener("sessionend",ve),this.render=function(y,O){if(O!==void 0&&O.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;if(y.matrixWorldAutoUpdate===!0&&y.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),j.enabled===!0&&j.isPresenting===!0&&(j.cameraAutoUpdate===!0&&j.updateCamera(O),O=j.getCamera()),y.isScene===!0&&y.onBeforeRender(_,y,O,U),d=oe.get(y,S.length),d.init(O),S.push(d),_t.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),W.setFromProjectionMatrix(_t),St=this.localClippingEnabled,it=vt.init(this.clippingPlanes,St),m=Ft.get(y,w.length),m.init(),w.push(m),j.enabled===!0&&j.isPresenting===!0){const mt=_.xr.getDepthSensingMesh();mt!==null&&De(mt,O,-1/0,_.sortObjects)}De(y,O,0,_.sortObjects),m.finish(),_.sortObjects===!0&&m.sort(ft,st),I=j.enabled===!1||j.isPresenting===!1||j.hasDepthSensing()===!1,I&&Yt.addToRenderList(m,y),this.info.render.frame++,it===!0&&vt.beginShadows();const Y=d.state.shadowsArray;Nt.render(Y,y,O),it===!0&&vt.endShadows(),this.info.autoReset===!0&&this.info.reset();const q=m.opaque,z=m.transmissive;if(d.setupLights(),O.isArrayCamera){const mt=O.cameras;if(z.length>0)for(let Lt=0,kt=mt.length;Lt<kt;Lt++){const Gt=mt[Lt];bn(q,z,y,Gt)}I&&Yt.render(y);for(let Lt=0,kt=mt.length;Lt<kt;Lt++){const Gt=mt[Lt];xn(m,y,Gt,Gt.viewport)}}else z.length>0&&bn(q,z,y,O),I&&Yt.render(y),xn(m,y,O);U!==null&&(A.updateMultisampleRenderTarget(U),A.updateRenderTargetMipmap(U)),y.isScene===!0&&y.onAfterRender(_,y,O),me.resetDefaultState(),E=-1,M=null,S.pop(),S.length>0?(d=S[S.length-1],it===!0&&vt.setGlobalState(_.clippingPlanes,d.state.camera)):d=null,w.pop(),w.length>0?m=w[w.length-1]:m=null};function De(y,O,Y,q){if(y.visible===!1)return;if(y.layers.test(O.layers)){if(y.isGroup)Y=y.renderOrder;else if(y.isLOD)y.autoUpdate===!0&&y.update(O);else if(y.isLight)d.pushLight(y),y.castShadow&&d.pushShadow(y);else if(y.isSprite){if(!y.frustumCulled||W.intersectsSprite(y)){q&&nt.setFromMatrixPosition(y.matrixWorld).applyMatrix4(_t);const Lt=J.update(y),kt=y.material;kt.visible&&m.push(y,Lt,kt,Y,nt.z,null)}}else if((y.isMesh||y.isLine||y.isPoints)&&(!y.frustumCulled||W.intersectsObject(y))){const Lt=J.update(y),kt=y.material;if(q&&(y.boundingSphere!==void 0?(y.boundingSphere===null&&y.computeBoundingSphere(),nt.copy(y.boundingSphere.center)):(Lt.boundingSphere===null&&Lt.computeBoundingSphere(),nt.copy(Lt.boundingSphere.center)),nt.applyMatrix4(y.matrixWorld).applyMatrix4(_t)),Array.isArray(kt)){const Gt=Lt.groups;for(let Qt=0,re=Gt.length;Qt<re;Qt++){const Wt=Gt[Qt],ue=kt[Wt.materialIndex];ue&&ue.visible&&m.push(y,Lt,ue,Y,nt.z,Wt)}}else kt.visible&&m.push(y,Lt,kt,Y,nt.z,null)}}const mt=y.children;for(let Lt=0,kt=mt.length;Lt<kt;Lt++)De(mt[Lt],O,Y,q)}function xn(y,O,Y,q){const z=y.opaque,mt=y.transmissive,Lt=y.transparent;d.setupLightsView(Y),it===!0&&vt.setGlobalState(_.clippingPlanes,Y),q&&xt.viewport(C.copy(q)),z.length>0&&Bn(z,O,Y),mt.length>0&&Bn(mt,O,Y),Lt.length>0&&Bn(Lt,O,Y),xt.buffers.depth.setTest(!0),xt.buffers.depth.setMask(!0),xt.buffers.color.setMask(!0),xt.setPolygonOffset(!1)}function bn(y,O,Y,q){if((Y.isScene===!0?Y.overrideMaterial:null)!==null)return;d.state.transmissionRenderTarget[q.id]===void 0&&(d.state.transmissionRenderTarget[q.id]=new qi(1,1,{generateMipmaps:!0,type:ct.has("EXT_color_buffer_half_float")||ct.has("EXT_color_buffer_float")?fa:hi,minFilter:Hi,samples:4,stencilBuffer:a,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:_e.workingColorSpace}));const mt=d.state.transmissionRenderTarget[q.id],Lt=q.viewport||C;mt.setSize(Lt.z,Lt.w);const kt=_.getRenderTarget();_.setRenderTarget(mt),_.getClearColor(K),tt=_.getClearAlpha(),tt<1&&_.setClearColor(16777215,.5),_.clear(),I&&Yt.render(Y);const Gt=_.toneMapping;_.toneMapping=Ai;const Qt=q.viewport;if(q.viewport!==void 0&&(q.viewport=void 0),d.setupLightsView(q),it===!0&&vt.setGlobalState(_.clippingPlanes,q),Bn(y,Y,q),A.updateMultisampleRenderTarget(mt),A.updateRenderTargetMipmap(mt),ct.has("WEBGL_multisampled_render_to_texture")===!1){let re=!1;for(let Wt=0,ue=O.length;Wt<ue;Wt++){const ye=O[Wt],xe=ye.object,Be=ye.geometry,ge=ye.material,qt=ye.group;if(ge.side===Tn&&xe.layers.test(q.layers)){const Ze=ge.side;ge.side=fn,ge.needsUpdate=!0,Ri(xe,Y,q,Be,ge,qt),ge.side=Ze,ge.needsUpdate=!0,re=!0}}re===!0&&(A.updateMultisampleRenderTarget(mt),A.updateRenderTargetMipmap(mt))}_.setRenderTarget(kt),_.setClearColor(K,tt),Qt!==void 0&&(q.viewport=Qt),_.toneMapping=Gt}function Bn(y,O,Y){const q=O.isScene===!0?O.overrideMaterial:null;for(let z=0,mt=y.length;z<mt;z++){const Lt=y[z],kt=Lt.object,Gt=Lt.geometry,Qt=q===null?Lt.material:q,re=Lt.group;kt.layers.test(Y.layers)&&Ri(kt,O,Y,Gt,Qt,re)}}function Ri(y,O,Y,q,z,mt){y.onBeforeRender(_,O,Y,q,z,mt),y.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,y.matrixWorld),y.normalMatrix.getNormalMatrix(y.modelViewMatrix),z.onBeforeRender(_,O,Y,q,y,mt),z.transparent===!0&&z.side===Tn&&z.forceSinglePass===!1?(z.side=fn,z.needsUpdate=!0,_.renderBufferDirect(Y,O,q,z,y,mt),z.side=ui,z.needsUpdate=!0,_.renderBufferDirect(Y,O,q,z,y,mt),z.side=Tn):_.renderBufferDirect(Y,O,q,z,y,mt),y.onAfterRender(_,O,Y,q,z,mt)}function mn(y,O,Y){O.isScene!==!0&&(O=Ct);const q=bt.get(y),z=d.state.lights,mt=d.state.shadowsArray,Lt=z.state.version,kt=Ht.getParameters(y,z.state,mt,O,Y),Gt=Ht.getProgramCacheKey(kt);let Qt=q.programs;q.environment=y.isMeshStandardMaterial?O.environment:null,q.fog=O.fog,q.envMap=(y.isMeshStandardMaterial?B:x).get(y.envMap||q.environment),q.envMapRotation=q.environment!==null&&y.envMap===null?O.environmentRotation:y.envMapRotation,Qt===void 0&&(y.addEventListener("dispose",jt),Qt=new Map,q.programs=Qt);let re=Qt.get(Gt);if(re!==void 0){if(q.currentProgram===re&&q.lightsStateVersion===Lt)return Rn(y,kt),re}else kt.uniforms=Ht.getUniforms(y),y.onBeforeCompile(kt,_),re=Ht.acquireProgram(kt,Gt),Qt.set(Gt,re),q.uniforms=kt.uniforms;const Wt=q.uniforms;return(!y.isShaderMaterial&&!y.isRawShaderMaterial||y.clipping===!0)&&(Wt.clippingPlanes=vt.uniform),Rn(y,kt),q.needsLights=Mn(y),q.lightsStateVersion=Lt,q.needsLights&&(Wt.ambientLightColor.value=z.state.ambient,Wt.lightProbe.value=z.state.probe,Wt.directionalLights.value=z.state.directional,Wt.directionalLightShadows.value=z.state.directionalShadow,Wt.spotLights.value=z.state.spot,Wt.spotLightShadows.value=z.state.spotShadow,Wt.rectAreaLights.value=z.state.rectArea,Wt.ltc_1.value=z.state.rectAreaLTC1,Wt.ltc_2.value=z.state.rectAreaLTC2,Wt.pointLights.value=z.state.point,Wt.pointLightShadows.value=z.state.pointShadow,Wt.hemisphereLights.value=z.state.hemi,Wt.directionalShadowMap.value=z.state.directionalShadowMap,Wt.directionalShadowMatrix.value=z.state.directionalShadowMatrix,Wt.spotShadowMap.value=z.state.spotShadowMap,Wt.spotLightMatrix.value=z.state.spotLightMatrix,Wt.spotLightMap.value=z.state.spotLightMap,Wt.pointShadowMap.value=z.state.pointShadowMap,Wt.pointShadowMatrix.value=z.state.pointShadowMatrix),q.currentProgram=re,q.uniformsList=null,re}function Le(y){if(y.uniformsList===null){const O=y.currentProgram.getUniforms();y.uniformsList=ls.seqWithValue(O.seq,y.uniforms)}return y.uniformsList}function Rn(y,O){const Y=bt.get(y);Y.outputColorSpace=O.outputColorSpace,Y.batching=O.batching,Y.batchingColor=O.batchingColor,Y.instancing=O.instancing,Y.instancingColor=O.instancingColor,Y.instancingMorph=O.instancingMorph,Y.skinning=O.skinning,Y.morphTargets=O.morphTargets,Y.morphNormals=O.morphNormals,Y.morphColors=O.morphColors,Y.morphTargetsCount=O.morphTargetsCount,Y.numClippingPlanes=O.numClippingPlanes,Y.numIntersection=O.numClipIntersection,Y.vertexAlphas=O.vertexAlphas,Y.vertexTangents=O.vertexTangents,Y.toneMapping=O.toneMapping}function fi(y,O,Y,q,z){O.isScene!==!0&&(O=Ct),A.resetTextureUnits();const mt=O.fog,Lt=q.isMeshStandardMaterial?O.environment:null,kt=U===null?_.outputColorSpace:U.isXRRenderTarget===!0?U.texture.colorSpace:Ki,Gt=(q.isMeshStandardMaterial?B:x).get(q.envMap||Lt),Qt=q.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,re=!!Y.attributes.tangent&&(!!q.normalMap||q.anisotropy>0),Wt=!!Y.morphAttributes.position,ue=!!Y.morphAttributes.normal,ye=!!Y.morphAttributes.color;let xe=Ai;q.toneMapped&&(U===null||U.isXRRenderTarget===!0)&&(xe=_.toneMapping);const Be=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,ge=Be!==void 0?Be.length:0,qt=bt.get(q),Ze=d.state.lights;if(it===!0&&(St===!0||y!==M)){const tn=y===M&&q.id===E;vt.setState(q,y,tn)}let fe=!1;q.version===qt.__version?(qt.needsLights&&qt.lightsStateVersion!==Ze.state.version||qt.outputColorSpace!==kt||z.isBatchedMesh&&qt.batching===!1||!z.isBatchedMesh&&qt.batching===!0||z.isBatchedMesh&&qt.batchingColor===!0&&z.colorTexture===null||z.isBatchedMesh&&qt.batchingColor===!1&&z.colorTexture!==null||z.isInstancedMesh&&qt.instancing===!1||!z.isInstancedMesh&&qt.instancing===!0||z.isSkinnedMesh&&qt.skinning===!1||!z.isSkinnedMesh&&qt.skinning===!0||z.isInstancedMesh&&qt.instancingColor===!0&&z.instanceColor===null||z.isInstancedMesh&&qt.instancingColor===!1&&z.instanceColor!==null||z.isInstancedMesh&&qt.instancingMorph===!0&&z.morphTexture===null||z.isInstancedMesh&&qt.instancingMorph===!1&&z.morphTexture!==null||qt.envMap!==Gt||q.fog===!0&&qt.fog!==mt||qt.numClippingPlanes!==void 0&&(qt.numClippingPlanes!==vt.numPlanes||qt.numIntersection!==vt.numIntersection)||qt.vertexAlphas!==Qt||qt.vertexTangents!==re||qt.morphTargets!==Wt||qt.morphNormals!==ue||qt.morphColors!==ye||qt.toneMapping!==xe||qt.morphTargetsCount!==ge)&&(fe=!0):(fe=!0,qt.__version=q.version);let Je=qt.currentProgram;fe===!0&&(Je=mn(q,O,z));let Sn=!1,Xe=!1,Hn=!1;const Ee=Je.getUniforms(),qe=qt.uniforms;if(xt.useProgram(Je.program)&&(Sn=!0,Xe=!0,Hn=!0),q.id!==E&&(E=q.id,Xe=!0),Sn||M!==y){xt.buffers.depth.getReversed()?($.copy(y.projectionMatrix),u5($),h5($),Ee.setValue(T,"projectionMatrix",$)):Ee.setValue(T,"projectionMatrix",y.projectionMatrix),Ee.setValue(T,"viewMatrix",y.matrixWorldInverse);const yn=Ee.map.cameraPosition;yn!==void 0&&yn.setValue(T,F.setFromMatrixPosition(y.matrixWorld)),At.logarithmicDepthBuffer&&Ee.setValue(T,"logDepthBufFC",2/(Math.log(y.far+1)/Math.LN2)),(q.isMeshPhongMaterial||q.isMeshToonMaterial||q.isMeshLambertMaterial||q.isMeshBasicMaterial||q.isMeshStandardMaterial||q.isShaderMaterial)&&Ee.setValue(T,"isOrthographic",y.isOrthographicCamera===!0),M!==y&&(M=y,Xe=!0,Hn=!0)}if(z.isSkinnedMesh){Ee.setOptional(T,z,"bindMatrix"),Ee.setOptional(T,z,"bindMatrixInverse");const tn=z.skeleton;tn&&(tn.boneTexture===null&&tn.computeBoneTexture(),Ee.setValue(T,"boneTexture",tn.boneTexture,A))}z.isBatchedMesh&&(Ee.setOptional(T,z,"batchingTexture"),Ee.setValue(T,"batchingTexture",z._matricesTexture,A),Ee.setOptional(T,z,"batchingIdTexture"),Ee.setValue(T,"batchingIdTexture",z._indirectTexture,A),Ee.setOptional(T,z,"batchingColorTexture"),z._colorsTexture!==null&&Ee.setValue(T,"batchingColorTexture",z._colorsTexture,A));const Yn=Y.morphAttributes;if((Yn.position!==void 0||Yn.normal!==void 0||Yn.color!==void 0)&&Kt.update(z,Y,Je),(Xe||qt.receiveShadow!==z.receiveShadow)&&(qt.receiveShadow=z.receiveShadow,Ee.setValue(T,"receiveShadow",z.receiveShadow)),q.isMeshGouraudMaterial&&q.envMap!==null&&(qe.envMap.value=Gt,qe.flipEnvMap.value=Gt.isCubeTexture&&Gt.isRenderTargetTexture===!1?-1:1),q.isMeshStandardMaterial&&q.envMap===null&&O.environment!==null&&(qe.envMapIntensity.value=O.environmentIntensity),Xe&&(Ee.setValue(T,"toneMappingExposure",_.toneMappingExposure),qt.needsLights&&kn(qe,Hn),mt&&q.fog===!0&&Dt.refreshFogUniforms(qe,mt),Dt.refreshMaterialUniforms(qe,q,X,at,d.state.transmissionRenderTarget[y.id]),ls.upload(T,Le(qt),qe,A)),q.isShaderMaterial&&q.uniformsNeedUpdate===!0&&(ls.upload(T,Le(qt),qe,A),q.uniformsNeedUpdate=!1),q.isSpriteMaterial&&Ee.setValue(T,"center",z.center),Ee.setValue(T,"modelViewMatrix",z.modelViewMatrix),Ee.setValue(T,"normalMatrix",z.normalMatrix),Ee.setValue(T,"modelMatrix",z.matrixWorld),q.isShaderMaterial||q.isRawShaderMaterial){const tn=q.uniformsGroups;for(let yn=0,en=tn.length;yn<en;yn++){const $n=tn[yn];N.update($n,Je),N.bind($n,Je)}}return Je}function kn(y,O){y.ambientLightColor.needsUpdate=O,y.lightProbe.needsUpdate=O,y.directionalLights.needsUpdate=O,y.directionalLightShadows.needsUpdate=O,y.pointLights.needsUpdate=O,y.pointLightShadows.needsUpdate=O,y.spotLights.needsUpdate=O,y.spotLightShadows.needsUpdate=O,y.rectAreaLights.needsUpdate=O,y.hemisphereLights.needsUpdate=O}function Mn(y){return y.isMeshLambertMaterial||y.isMeshToonMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isShadowMaterial||y.isShaderMaterial&&y.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return b},this.getRenderTarget=function(){return U},this.setRenderTargetTextures=function(y,O,Y){bt.get(y.texture).__webglTexture=O,bt.get(y.depthTexture).__webglTexture=Y;const q=bt.get(y);q.__hasExternalTextures=!0,q.__autoAllocateDepthBuffer=Y===void 0,q.__autoAllocateDepthBuffer||ct.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),q.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(y,O){const Y=bt.get(y);Y.__webglFramebuffer=O,Y.__useDefaultFramebuffer=O===void 0},this.setRenderTarget=function(y,O=0,Y=0){U=y,R=O,b=Y;let q=!0,z=null,mt=!1,Lt=!1;if(y){const Gt=bt.get(y);if(Gt.__useDefaultFramebuffer!==void 0)xt.bindFramebuffer(T.FRAMEBUFFER,null),q=!1;else if(Gt.__webglFramebuffer===void 0)A.setupRenderTarget(y);else if(Gt.__hasExternalTextures)A.rebindTextures(y,bt.get(y.texture).__webglTexture,bt.get(y.depthTexture).__webglTexture);else if(y.depthBuffer){const Wt=y.depthTexture;if(Gt.__boundDepthTexture!==Wt){if(Wt!==null&&bt.has(Wt)&&(y.width!==Wt.image.width||y.height!==Wt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");A.setupDepthRenderbuffer(y)}}const Qt=y.texture;(Qt.isData3DTexture||Qt.isDataArrayTexture||Qt.isCompressedArrayTexture)&&(Lt=!0);const re=bt.get(y).__webglFramebuffer;y.isWebGLCubeRenderTarget?(Array.isArray(re[O])?z=re[O][Y]:z=re[O],mt=!0):y.samples>0&&A.useMultisampledRTT(y)===!1?z=bt.get(y).__webglMultisampledFramebuffer:Array.isArray(re)?z=re[Y]:z=re,C.copy(y.viewport),H.copy(y.scissor),G=y.scissorTest}else C.copy(Q).multiplyScalar(X).floor(),H.copy(Mt).multiplyScalar(X).floor(),G=wt;if(xt.bindFramebuffer(T.FRAMEBUFFER,z)&&q&&xt.drawBuffers(y,z),xt.viewport(C),xt.scissor(H),xt.setScissorTest(G),mt){const Gt=bt.get(y.texture);T.framebufferTexture2D(T.FRAMEBUFFER,T.COLOR_ATTACHMENT0,T.TEXTURE_CUBE_MAP_POSITIVE_X+O,Gt.__webglTexture,Y)}else if(Lt){const Gt=bt.get(y.texture),Qt=O||0;T.framebufferTextureLayer(T.FRAMEBUFFER,T.COLOR_ATTACHMENT0,Gt.__webglTexture,Y||0,Qt)}E=-1},this.readRenderTargetPixels=function(y,O,Y,q,z,mt,Lt){if(!(y&&y.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let kt=bt.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&Lt!==void 0&&(kt=kt[Lt]),kt){xt.bindFramebuffer(T.FRAMEBUFFER,kt);try{const Gt=y.texture,Qt=Gt.format,re=Gt.type;if(!At.textureFormatReadable(Qt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!At.textureTypeReadable(re)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=y.width-q&&Y>=0&&Y<=y.height-z&&T.readPixels(O,Y,q,z,te.convert(Qt),te.convert(re),mt)}finally{const Gt=U!==null?bt.get(U).__webglFramebuffer:null;xt.bindFramebuffer(T.FRAMEBUFFER,Gt)}}},this.readRenderTargetPixelsAsync=async function(y,O,Y,q,z,mt,Lt){if(!(y&&y.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let kt=bt.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&Lt!==void 0&&(kt=kt[Lt]),kt){const Gt=y.texture,Qt=Gt.format,re=Gt.type;if(!At.textureFormatReadable(Qt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!At.textureTypeReadable(re))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(O>=0&&O<=y.width-q&&Y>=0&&Y<=y.height-z){xt.bindFramebuffer(T.FRAMEBUFFER,kt);const Wt=T.createBuffer();T.bindBuffer(T.PIXEL_PACK_BUFFER,Wt),T.bufferData(T.PIXEL_PACK_BUFFER,mt.byteLength,T.STREAM_READ),T.readPixels(O,Y,q,z,te.convert(Qt),te.convert(re),0);const ue=U!==null?bt.get(U).__webglFramebuffer:null;xt.bindFramebuffer(T.FRAMEBUFFER,ue);const ye=T.fenceSync(T.SYNC_GPU_COMMANDS_COMPLETE,0);return T.flush(),await c5(T,ye,4),T.bindBuffer(T.PIXEL_PACK_BUFFER,Wt),T.getBufferSubData(T.PIXEL_PACK_BUFFER,0,mt),T.deleteBuffer(Wt),T.deleteSync(ye),mt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(y,O=null,Y=0){y.isTexture!==!0&&(jr("WebGLRenderer: copyFramebufferToTexture function signature has changed."),O=arguments[0]||null,y=arguments[1]);const q=Math.pow(2,-Y),z=Math.floor(y.image.width*q),mt=Math.floor(y.image.height*q),Lt=O!==null?O.x:0,kt=O!==null?O.y:0;A.setTexture2D(y,0),T.copyTexSubImage2D(T.TEXTURE_2D,Y,0,0,Lt,kt,z,mt),xt.unbindTexture()},this.copyTextureToTexture=function(y,O,Y=null,q=null,z=0){y.isTexture!==!0&&(jr("WebGLRenderer: copyTextureToTexture function signature has changed."),q=arguments[0]||null,y=arguments[1],O=arguments[2],z=arguments[3]||0,Y=null);let mt,Lt,kt,Gt,Qt,re,Wt,ue,ye;const xe=y.isCompressedTexture?y.mipmaps[z]:y.image;Y!==null?(mt=Y.max.x-Y.min.x,Lt=Y.max.y-Y.min.y,kt=Y.isBox3?Y.max.z-Y.min.z:1,Gt=Y.min.x,Qt=Y.min.y,re=Y.isBox3?Y.min.z:0):(mt=xe.width,Lt=xe.height,kt=xe.depth||1,Gt=0,Qt=0,re=0),q!==null?(Wt=q.x,ue=q.y,ye=q.z):(Wt=0,ue=0,ye=0);const Be=te.convert(O.format),ge=te.convert(O.type);let qt;O.isData3DTexture?(A.setTexture3D(O,0),qt=T.TEXTURE_3D):O.isDataArrayTexture||O.isCompressedArrayTexture?(A.setTexture2DArray(O,0),qt=T.TEXTURE_2D_ARRAY):(A.setTexture2D(O,0),qt=T.TEXTURE_2D),T.pixelStorei(T.UNPACK_FLIP_Y_WEBGL,O.flipY),T.pixelStorei(T.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),T.pixelStorei(T.UNPACK_ALIGNMENT,O.unpackAlignment);const Ze=T.getParameter(T.UNPACK_ROW_LENGTH),fe=T.getParameter(T.UNPACK_IMAGE_HEIGHT),Je=T.getParameter(T.UNPACK_SKIP_PIXELS),Sn=T.getParameter(T.UNPACK_SKIP_ROWS),Xe=T.getParameter(T.UNPACK_SKIP_IMAGES);T.pixelStorei(T.UNPACK_ROW_LENGTH,xe.width),T.pixelStorei(T.UNPACK_IMAGE_HEIGHT,xe.height),T.pixelStorei(T.UNPACK_SKIP_PIXELS,Gt),T.pixelStorei(T.UNPACK_SKIP_ROWS,Qt),T.pixelStorei(T.UNPACK_SKIP_IMAGES,re);const Hn=y.isDataArrayTexture||y.isData3DTexture,Ee=O.isDataArrayTexture||O.isData3DTexture;if(y.isRenderTargetTexture||y.isDepthTexture){const qe=bt.get(y),Yn=bt.get(O),tn=bt.get(qe.__renderTarget),yn=bt.get(Yn.__renderTarget);xt.bindFramebuffer(T.READ_FRAMEBUFFER,tn.__webglFramebuffer),xt.bindFramebuffer(T.DRAW_FRAMEBUFFER,yn.__webglFramebuffer);for(let en=0;en<kt;en++)Hn&&T.framebufferTextureLayer(T.READ_FRAMEBUFFER,T.COLOR_ATTACHMENT0,bt.get(y).__webglTexture,z,re+en),y.isDepthTexture?(Ee&&T.framebufferTextureLayer(T.DRAW_FRAMEBUFFER,T.COLOR_ATTACHMENT0,bt.get(O).__webglTexture,z,ye+en),T.blitFramebuffer(Gt,Qt,mt,Lt,Wt,ue,mt,Lt,T.DEPTH_BUFFER_BIT,T.NEAREST)):Ee?T.copyTexSubImage3D(qt,z,Wt,ue,ye+en,Gt,Qt,mt,Lt):T.copyTexSubImage2D(qt,z,Wt,ue,ye+en,Gt,Qt,mt,Lt);xt.bindFramebuffer(T.READ_FRAMEBUFFER,null),xt.bindFramebuffer(T.DRAW_FRAMEBUFFER,null)}else Ee?y.isDataTexture||y.isData3DTexture?T.texSubImage3D(qt,z,Wt,ue,ye,mt,Lt,kt,Be,ge,xe.data):O.isCompressedArrayTexture?T.compressedTexSubImage3D(qt,z,Wt,ue,ye,mt,Lt,kt,Be,xe.data):T.texSubImage3D(qt,z,Wt,ue,ye,mt,Lt,kt,Be,ge,xe):y.isDataTexture?T.texSubImage2D(T.TEXTURE_2D,z,Wt,ue,mt,Lt,Be,ge,xe.data):y.isCompressedTexture?T.compressedTexSubImage2D(T.TEXTURE_2D,z,Wt,ue,xe.width,xe.height,Be,xe.data):T.texSubImage2D(T.TEXTURE_2D,z,Wt,ue,mt,Lt,Be,ge,xe);T.pixelStorei(T.UNPACK_ROW_LENGTH,Ze),T.pixelStorei(T.UNPACK_IMAGE_HEIGHT,fe),T.pixelStorei(T.UNPACK_SKIP_PIXELS,Je),T.pixelStorei(T.UNPACK_SKIP_ROWS,Sn),T.pixelStorei(T.UNPACK_SKIP_IMAGES,Xe),z===0&&O.generateMipmaps&&T.generateMipmap(qt),xt.unbindTexture()},this.copyTextureToTexture3D=function(y,O,Y=null,q=null,z=0){return y.isTexture!==!0&&(jr("WebGLRenderer: copyTextureToTexture3D function signature has changed."),Y=arguments[0]||null,q=arguments[1]||null,y=arguments[2],O=arguments[3],z=arguments[4]||0),jr('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(y,O,Y,q,z)},this.initRenderTarget=function(y){bt.get(y).__webglFramebuffer===void 0&&A.setupRenderTarget(y)},this.initTexture=function(y){y.isCubeTexture?A.setTextureCube(y,0):y.isData3DTexture?A.setTexture3D(y,0):y.isDataArrayTexture||y.isCompressedArrayTexture?A.setTexture2DArray(y,0):A.setTexture2D(y,0),xt.unbindTexture()},this.resetState=function(){R=0,b=0,U=null,xt.reset(),me.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return si}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=_e._getDrawingBufferColorSpace(t),e.unpackColorSpace=_e._getUnpackColorSpace()}}class n2 extends $e{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new zn,this.environmentIntensity=1,this.environmentRotation=new zn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class S6{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=i0,this.updateRanges=[],this.version=0,this.uuid=li()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let r=0,a=this.stride;r<a;r++)this.array[t+r]=e.array[n+r];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=li()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=li()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const un=new D;class ds{constructor(t,e,n,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)un.fromBufferAttribute(this,e),un.applyMatrix4(t),this.setXYZ(e,un.x,un.y,un.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)un.fromBufferAttribute(this,e),un.applyNormalMatrix(t),this.setXYZ(e,un.x,un.y,un.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)un.fromBufferAttribute(this,e),un.transformDirection(t),this.setXYZ(e,un.x,un.y,un.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=Nn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=we(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=we(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=we(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=we(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=we(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=Nn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=Nn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=Nn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=Nn(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=we(e,this.array),n=we(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=we(e,this.array),n=we(n,this.array),r=we(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=r,this}setXYZW(t,e,n,r,a){return t=t*this.data.stride+this.offset,this.normalized&&(e=we(e,this.array),n=we(n,this.array),r=we(r,this.array),a=we(a,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=r,this.data.array[t+3]=a,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const r=n*this.data.stride+this.offset;for(let a=0;a<this.itemSize;a++)e.push(this.data.array[r+a])}return new be(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new ds(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const r=n*this.data.stride+this.offset;for(let a=0;a<this.itemSize;a++)e.push(this.data.array[r+a])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class a0 extends Zi{static get type(){return"SpriteMaterial"}constructor(t){super(),this.isSpriteMaterial=!0,this.color=new de(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let fr;const qr=new D,pr=new D,mr=new D,gr=new Zt,Yr=new Zt,i2=new Se,Va=new D,$r=new D,Wa=new D,tl=new Zt,ao=new Zt,el=new Zt;class y6 extends $e{constructor(t=new a0){if(super(),this.isSprite=!0,this.type="Sprite",fr===void 0){fr=new Ke;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new S6(e,5);fr.setIndex([0,1,2,0,2,3]),fr.setAttribute("position",new ds(n,3,0,!1)),fr.setAttribute("uv",new ds(n,2,3,!1))}this.geometry=fr,this.material=t,this.center=new Zt(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),pr.setFromMatrixScale(this.matrixWorld),i2.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),mr.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&pr.multiplyScalar(-mr.z);const n=this.material.rotation;let r,a;n!==0&&(a=Math.cos(n),r=Math.sin(n));const s=this.center;Xa(Va.set(-.5,-.5,0),mr,s,pr,r,a),Xa($r.set(.5,-.5,0),mr,s,pr,r,a),Xa(Wa.set(.5,.5,0),mr,s,pr,r,a),tl.set(0,0),ao.set(1,0),el.set(1,1);let o=t.ray.intersectTriangle(Va,$r,Wa,!1,qr);if(o===null&&(Xa($r.set(-.5,.5,0),mr,s,pr,r,a),ao.set(0,1),o=t.ray.intersectTriangle(Va,Wa,$r,!1,qr),o===null))return;const l=t.ray.origin.distanceTo(qr);l<t.near||l>t.far||e.push({distance:l,point:qr.clone(),uv:An.getInterpolation(qr,Va,$r,Wa,tl,ao,el,new Zt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function Xa(i,t,e,n,r,a){gr.subVectors(i,e).addScalar(.5).multiply(n),r!==void 0?(Yr.x=a*gr.x-r*gr.y,Yr.y=r*gr.x+a*gr.y):Yr.copy(gr),i.copy(t),i.x+=Yr.x,i.y+=Yr.y,i.applyMatrix4(i2)}class O0 extends Zi{static get type(){return"LineBasicMaterial"}constructor(t){super(),this.isLineBasicMaterial=!0,this.color=new de(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const fs=new D,ps=new D,nl=new Se,Kr=new Ms,qa=new ma,so=new D,il=new D;class r2 extends $e{constructor(t=new Ke,e=new O0){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let r=1,a=e.count;r<a;r++)fs.fromBufferAttribute(e,r-1),ps.fromBufferAttribute(e,r),n[r]=n[r-1],n[r]+=fs.distanceTo(ps);t.setAttribute("lineDistance",new pn(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,r=this.matrixWorld,a=t.params.Line.threshold,s=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),qa.copy(n.boundingSphere),qa.applyMatrix4(r),qa.radius+=a,t.ray.intersectsSphere(qa)===!1)return;nl.copy(r).invert(),Kr.copy(t.ray).applyMatrix4(nl);const o=a/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,u=n.index,f=n.attributes.position;if(u!==null){const p=Math.max(0,s.start),g=Math.min(u.count,s.start+s.count);for(let v=p,m=g-1;v<m;v+=c){const d=u.getX(v),w=u.getX(v+1),S=Ya(this,t,Kr,l,d,w);S&&e.push(S)}if(this.isLineLoop){const v=u.getX(g-1),m=u.getX(p),d=Ya(this,t,Kr,l,v,m);d&&e.push(d)}}else{const p=Math.max(0,s.start),g=Math.min(f.count,s.start+s.count);for(let v=p,m=g-1;v<m;v+=c){const d=Ya(this,t,Kr,l,v,v+1);d&&e.push(d)}if(this.isLineLoop){const v=Ya(this,t,Kr,l,g-1,p);v&&e.push(v)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const r=e[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,s=r.length;a<s;a++){const o=r[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=a}}}}}function Ya(i,t,e,n,r,a){const s=i.geometry.attributes.position;if(fs.fromBufferAttribute(s,r),ps.fromBufferAttribute(s,a),e.distanceSqToSegment(fs,ps,so,il)>n)return;so.applyMatrix4(i.matrixWorld);const l=t.ray.origin.distanceTo(so);if(!(l<t.near||l>t.far))return{distance:l,point:il.clone().applyMatrix4(i.matrixWorld),index:r,face:null,faceIndex:null,barycoord:null,object:i}}class E6 extends Zi{static get type(){return"PointsMaterial"}constructor(t){super(),this.isPointsMaterial=!0,this.color=new de(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const rl=new Se,s0=new Ms,$a=new ma,Ka=new D;class a2 extends $e{constructor(t=new Ke,e=new E6){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,r=this.matrixWorld,a=t.params.Points.threshold,s=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),$a.copy(n.boundingSphere),$a.applyMatrix4(r),$a.radius+=a,t.ray.intersectsSphere($a)===!1)return;rl.copy(r).invert(),s0.copy(t.ray).applyMatrix4(rl);const o=a/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,h=n.attributes.position;if(c!==null){const f=Math.max(0,s.start),p=Math.min(c.count,s.start+s.count);for(let g=f,v=p;g<v;g++){const m=c.getX(g);Ka.fromBufferAttribute(h,m),al(Ka,m,l,r,t,e,this)}}else{const f=Math.max(0,s.start),p=Math.min(h.count,s.start+s.count);for(let g=f,v=p;g<v;g++)Ka.fromBufferAttribute(h,g),al(Ka,g,l,r,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const r=e[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,s=r.length;a<s;a++){const o=r[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=a}}}}}function al(i,t,e,n,r,a,s){const o=s0.distanceSqToPoint(i);if(o<e){const l=new D;s0.closestPointToPoint(i,l),l.applyMatrix4(n);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;a.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:s})}}class oo extends cn{constructor(t,e,n,r,a,s,o,l,c){super(t,e,n,r,a,s,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class di{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,r=this.getPoint(0),a=0;e.push(0);for(let s=1;s<=t;s++)n=this.getPoint(s/t),a+=n.distanceTo(r),e.push(a),r=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const n=this.getLengths();let r=0;const a=n.length;let s;e?s=e:s=t*n[a-1];let o=0,l=a-1,c;for(;o<=l;)if(r=Math.floor(o+(l-o)/2),c=n[r]-s,c<0)o=r+1;else if(c>0)l=r-1;else{l=r;break}if(r=l,n[r]===s)return r/(a-1);const u=n[r],f=n[r+1]-u,p=(s-u)/f;return(r+p)/(a-1)}getTangent(t,e){let r=t-1e-4,a=t+1e-4;r<0&&(r=0),a>1&&(a=1);const s=this.getPoint(r),o=this.getPoint(a),l=e||(s.isVector2?new Zt:new D);return l.copy(o).sub(s).normalize(),l}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){const n=new D,r=[],a=[],s=[],o=new D,l=new Se;for(let p=0;p<=t;p++){const g=p/t;r[p]=this.getTangentAt(g,new D)}a[0]=new D,s[0]=new D;let c=Number.MAX_VALUE;const u=Math.abs(r[0].x),h=Math.abs(r[0].y),f=Math.abs(r[0].z);u<=c&&(c=u,n.set(1,0,0)),h<=c&&(c=h,n.set(0,1,0)),f<=c&&n.set(0,0,1),o.crossVectors(r[0],n).normalize(),a[0].crossVectors(r[0],o),s[0].crossVectors(r[0],a[0]);for(let p=1;p<=t;p++){if(a[p]=a[p-1].clone(),s[p]=s[p-1].clone(),o.crossVectors(r[p-1],r[p]),o.length()>Number.EPSILON){o.normalize();const g=Math.acos(Qe(r[p-1].dot(r[p]),-1,1));a[p].applyMatrix4(l.makeRotationAxis(o,g))}s[p].crossVectors(r[p],a[p])}if(e===!0){let p=Math.acos(Qe(a[0].dot(a[t]),-1,1));p/=t,r[0].dot(o.crossVectors(a[0],a[t]))>0&&(p=-p);for(let g=1;g<=t;g++)a[g].applyMatrix4(l.makeRotationAxis(r[g],p*g)),s[g].crossVectors(r[g],a[g])}return{tangents:r,normals:a,binormals:s}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class s2 extends di{constructor(t=0,e=0,n=1,r=1,a=0,s=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=r,this.aStartAngle=a,this.aEndAngle=s,this.aClockwise=o,this.aRotation=l}getPoint(t,e=new Zt){const n=e,r=Math.PI*2;let a=this.aEndAngle-this.aStartAngle;const s=Math.abs(a)<Number.EPSILON;for(;a<0;)a+=r;for(;a>r;)a-=r;a<Number.EPSILON&&(s?a=0:a=r),this.aClockwise===!0&&!s&&(a===r?a=-r:a=a-r);const o=this.aStartAngle+t*a;let l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),f=l-this.aX,p=c-this.aY;l=f*u-p*h+this.aX,c=f*h+p*u+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class w6 extends s2{constructor(t,e,n,r,a,s){super(t,e,n,n,r,a,s),this.isArcCurve=!0,this.type="ArcCurve"}}function z0(){let i=0,t=0,e=0,n=0;function r(a,s,o,l){i=a,t=o,e=-3*a+3*s-2*o-l,n=2*a-2*s+o+l}return{initCatmullRom:function(a,s,o,l,c){r(s,o,c*(o-a),c*(l-s))},initNonuniformCatmullRom:function(a,s,o,l,c,u,h){let f=(s-a)/c-(o-a)/(c+u)+(o-s)/u,p=(o-s)/u-(l-s)/(u+h)+(l-o)/h;f*=u,p*=u,r(s,o,f,p)},calc:function(a){const s=a*a,o=s*a;return i+t*a+e*s+n*o}}}const Za=new D,lo=new z0,co=new z0,uo=new z0;class o2 extends di{constructor(t=[],e=!1,n="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=r}getPoint(t,e=new D){const n=e,r=this.points,a=r.length,s=(a-(this.closed?0:1))*t;let o=Math.floor(s),l=s-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/a)+1)*a:l===0&&o===a-1&&(o=a-2,l=1);let c,u;this.closed||o>0?c=r[(o-1)%a]:(Za.subVectors(r[0],r[1]).add(r[0]),c=Za);const h=r[o%a],f=r[(o+1)%a];if(this.closed||o+2<a?u=r[(o+2)%a]:(Za.subVectors(r[a-1],r[a-2]).add(r[a-1]),u=Za),this.curveType==="centripetal"||this.curveType==="chordal"){const p=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(h),p),v=Math.pow(h.distanceToSquared(f),p),m=Math.pow(f.distanceToSquared(u),p);v<1e-4&&(v=1),g<1e-4&&(g=v),m<1e-4&&(m=v),lo.initNonuniformCatmullRom(c.x,h.x,f.x,u.x,g,v,m),co.initNonuniformCatmullRom(c.y,h.y,f.y,u.y,g,v,m),uo.initNonuniformCatmullRom(c.z,h.z,f.z,u.z,g,v,m)}else this.curveType==="catmullrom"&&(lo.initCatmullRom(c.x,h.x,f.x,u.x,this.tension),co.initCatmullRom(c.y,h.y,f.y,u.y,this.tension),uo.initCatmullRom(c.z,h.z,f.z,u.z,this.tension));return n.set(lo.calc(l),co.calc(l),uo.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const r=t.points[e];this.points.push(r.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const r=this.points[e];t.points.push(r.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const r=t.points[e];this.points.push(new D().fromArray(r))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function sl(i,t,e,n,r){const a=(n-t)*.5,s=(r-e)*.5,o=i*i,l=i*o;return(2*e-2*n+a+s)*l+(-3*e+3*n-2*a-s)*o+a*i+e}function T6(i,t){const e=1-i;return e*e*t}function A6(i,t){return 2*(1-i)*i*t}function b6(i,t){return i*i*t}function ia(i,t,e,n){return T6(i,t)+A6(i,e)+b6(i,n)}function R6(i,t){const e=1-i;return e*e*e*t}function C6(i,t){const e=1-i;return 3*e*e*i*t}function P6(i,t){return 3*(1-i)*i*i*t}function L6(i,t){return i*i*i*t}function ra(i,t,e,n,r){return R6(i,t)+C6(i,e)+P6(i,n)+L6(i,r)}class D6 extends di{constructor(t=new Zt,e=new Zt,n=new Zt,r=new Zt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=r}getPoint(t,e=new Zt){const n=e,r=this.v0,a=this.v1,s=this.v2,o=this.v3;return n.set(ra(t,r.x,a.x,s.x,o.x),ra(t,r.y,a.y,s.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class I6 extends di{constructor(t=new D,e=new D,n=new D,r=new D){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=r}getPoint(t,e=new D){const n=e,r=this.v0,a=this.v1,s=this.v2,o=this.v3;return n.set(ra(t,r.x,a.x,s.x,o.x),ra(t,r.y,a.y,s.y,o.y),ra(t,r.z,a.z,s.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class U6 extends di{constructor(t=new Zt,e=new Zt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new Zt){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new Zt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class l2 extends di{constructor(t=new D,e=new D){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new D){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new D){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class N6 extends di{constructor(t=new Zt,e=new Zt,n=new Zt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new Zt){const n=e,r=this.v0,a=this.v1,s=this.v2;return n.set(ia(t,r.x,a.x,s.x),ia(t,r.y,a.y,s.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class c2 extends di{constructor(t=new D,e=new D,n=new D){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new D){const n=e,r=this.v0,a=this.v1,s=this.v2;return n.set(ia(t,r.x,a.x,s.x),ia(t,r.y,a.y,s.y),ia(t,r.z,a.z,s.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class F6 extends di{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new Zt){const n=e,r=this.points,a=(r.length-1)*t,s=Math.floor(a),o=a-s,l=r[s===0?s:s-1],c=r[s],u=r[s>r.length-2?r.length-1:s+1],h=r[s>r.length-3?r.length-1:s+2];return n.set(sl(o,l.x,c.x,u.x,h.x),sl(o,l.y,c.y,u.y,h.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const r=t.points[e];this.points.push(r.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const r=this.points[e];t.points.push(r.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const r=t.points[e];this.points.push(new Zt().fromArray(r))}return this}}var O6=Object.freeze({__proto__:null,ArcCurve:w6,CatmullRomCurve3:o2,CubicBezierCurve:D6,CubicBezierCurve3:I6,EllipseCurve:s2,LineCurve:U6,LineCurve3:l2,QuadraticBezierCurve:N6,QuadraticBezierCurve3:c2,SplineCurve:F6});class aa extends Ke{constructor(t=1,e=32,n=16,r=0,a=Math.PI*2,s=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:r,phiLength:a,thetaStart:s,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(s+o,Math.PI);let c=0;const u=[],h=new D,f=new D,p=[],g=[],v=[],m=[];for(let d=0;d<=n;d++){const w=[],S=d/n;let _=0;d===0&&s===0?_=.5/e:d===n&&l===Math.PI&&(_=-.5/e);for(let L=0;L<=e;L++){const R=L/e;h.x=-t*Math.cos(r+R*a)*Math.sin(s+S*o),h.y=t*Math.cos(s+S*o),h.z=t*Math.sin(r+R*a)*Math.sin(s+S*o),g.push(h.x,h.y,h.z),f.copy(h).normalize(),v.push(f.x,f.y,f.z),m.push(R+_,1-S),w.push(c++)}u.push(w)}for(let d=0;d<n;d++)for(let w=0;w<e;w++){const S=u[d][w+1],_=u[d][w],L=u[d+1][w],R=u[d+1][w+1];(d!==0||s>0)&&p.push(S,_,R),(d!==n-1||l<Math.PI)&&p.push(_,L,R)}this.setIndex(p),this.setAttribute("position",new pn(g,3)),this.setAttribute("normal",new pn(v,3)),this.setAttribute("uv",new pn(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new aa(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class B0 extends Ke{constructor(t=new c2(new D(-1,-1,0),new D(-1,1,0),new D(1,1,0)),e=64,n=1,r=8,a=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:r,closed:a};const s=t.computeFrenetFrames(e,a);this.tangents=s.tangents,this.normals=s.normals,this.binormals=s.binormals;const o=new D,l=new D,c=new Zt;let u=new D;const h=[],f=[],p=[],g=[];v(),this.setIndex(g),this.setAttribute("position",new pn(h,3)),this.setAttribute("normal",new pn(f,3)),this.setAttribute("uv",new pn(p,2));function v(){for(let S=0;S<e;S++)m(S);m(a===!1?e:0),w(),d()}function m(S){u=t.getPointAt(S/e,u);const _=s.normals[S],L=s.binormals[S];for(let R=0;R<=r;R++){const b=R/r*Math.PI*2,U=Math.sin(b),E=-Math.cos(b);l.x=E*_.x+U*L.x,l.y=E*_.y+U*L.y,l.z=E*_.z+U*L.z,l.normalize(),f.push(l.x,l.y,l.z),o.x=u.x+n*l.x,o.y=u.y+n*l.y,o.z=u.z+n*l.z,h.push(o.x,o.y,o.z)}}function d(){for(let S=1;S<=e;S++)for(let _=1;_<=r;_++){const L=(r+1)*(S-1)+(_-1),R=(r+1)*S+(_-1),b=(r+1)*S+_,U=(r+1)*(S-1)+_;g.push(L,R,U),g.push(R,b,U)}}function w(){for(let S=0;S<=e;S++)for(let _=0;_<=r;_++)c.x=S/e,c.y=_/r,p.push(c.x,c.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new B0(new O6[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}}const ol={enabled:!1,files:{},add:function(i,t){this.enabled!==!1&&(this.files[i]=t)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class z6{constructor(t,e,n){const r=this;let a=!1,s=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(u){o++,a===!1&&r.onStart!==void 0&&r.onStart(u,s,o),a=!0},this.itemEnd=function(u){s++,r.onProgress!==void 0&&r.onProgress(u,s,o),s===o&&(a=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){const h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,f=c.length;h<f;h+=2){const p=c[h],g=c[h+1];if(p.global&&(p.lastIndex=0),p.test(u))return g}return null}}}const B6=new z6;class k0{constructor(t){this.manager=t!==void 0?t:B6,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){const n=this;return new Promise(function(r,a){n.load(t,r,e,a)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}k0.DEFAULT_MATERIAL_NAME="__DEFAULT";class k6 extends k0{constructor(t){super(t)}load(t,e,n,r){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const a=this,s=ol.get(t);if(s!==void 0)return a.manager.itemStart(t),setTimeout(function(){e&&e(s),a.manager.itemEnd(t)},0),s;const o=ca("img");function l(){u(),ol.add(t,this),e&&e(this),a.manager.itemEnd(t)}function c(h){u(),r&&r(h),a.manager.itemError(t),a.manager.itemEnd(t)}function u(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),a.manager.itemStart(t),o.src=t,o}}class H6 extends k0{constructor(t){super(t)}load(t,e,n,r){const a=new cn,s=new k6(this.manager);return s.setCrossOrigin(this.crossOrigin),s.setPath(this.path),s.load(t,function(o){a.image=o,a.needsUpdate=!0,e!==void 0&&e(a)},n,r),a}}const ll=new Se;class u2{constructor(t,e,n=0,r=1/0){this.ray=new Ms(t,e),this.near=n,this.far=r,this.camera=null,this.layers=new N0,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return ll.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(ll),this}intersectObject(t,e=!0,n=[]){return o0(t,this,n,e),n.sort(cl),n}intersectObjects(t,e=!0,n=[]){for(let r=0,a=t.length;r<a;r++)o0(t[r],this,n,e);return n.sort(cl),n}}function cl(i,t){return i.distance-t.distance}function o0(i,t,e,n){let r=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(r=!1),r===!0&&n===!0){const a=i.children;for(let s=0,o=a.length;s<o;s++)o0(a[s],t,e,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:b0}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=b0);const h2='"Iowan Old Style", "Zen Old Mincho", serif',G6="φδαωλΔ°·−";function V6(i=document.documentElement){i.style.setProperty("--font",h2),document.fonts.load('16px "Zen Old Mincho"',G6).catch(()=>{})}const W6=300,X6=30;function d2(i){let t=null;const e=n=>{const r=performance.now();if(t&&r-t.t<=W6&&Math.hypot(n.clientX-t.x,n.clientY-t.y)<=X6){t=null,i();return}t={t:r,x:n.clientX,y:n.clientY}};return window.addEventListener("pointerdown",e),()=>window.removeEventListener("pointerdown",e)}const q6=""+new URL("fig-celestial-CTwai7cr.png",import.meta.url).href,Y6=""+new URL("fig-lunar-triangle-Dn-mSGRv.png",import.meta.url).href,$6=""+new URL("fig-nav-triangle-Dj4HNj9k.png",import.meta.url).href,K6=""+new URL("horizontal-parallax-D6Qp5dy1.png",import.meta.url).href,Z6=""+new URL("ld-angle-BMwVulJM.png",import.meta.url).href,J6=""+new URL("ld-cleared-DX1ECyeE.png",import.meta.url).href,j6=""+new URL("ld-correction-CshbENxU.png",import.meta.url).href,Q6=""+new URL("ld-true-De58NTGT.png",import.meta.url).href,td=""+new URL("parallax-BlPcYSiH.png",import.meta.url).href,ed=""+new URL("refraction-DPkHywLj.png",import.meta.url).href,nd=300,id=1,rd={dpi:nd,outScale:id},ad=Object.assign({"./fig-celestial.png":q6,"./fig-lunar-triangle.png":Y6,"./fig-nav-triangle.png":$6,"./horizontal-parallax.png":K6,"./ld-angle.png":Z6,"./ld-cleared.png":J6,"./ld-correction.png":j6,"./ld-true.png":Q6,"./parallax.png":td,"./refraction.png":ed}),ho=Object.values([rd])[0],l0=(ho==null?void 0:ho.outScale)??1,fo=.8,sd=[{id:"ld-correction",kind:"equation",text:"LDcorr = LDobs + sin dHm·cos θm / √(1 − sin²dHm·sin²θm) + sin dHs·cos θs / √(1 − sin²dHs·sin²θs)"},{id:"ld-angle",kind:"equation",text:"cos Z = (cos LDobs − sin H′m sin H′s) / (cos H′m cos H′s)"},{id:"ld-cleared",kind:"equation",text:"cos LDcorr = sin Hm sin Hs + cos Hm cos Hs cos Z"},{id:"ld-true",kind:"equation",text:"cos LDt = sin dm sin ds + cos dm cos ds cos HA"},{id:"refraction",kind:"equation",text:"R = A tan Z₀ − B tan³ Z₀"},{id:"parallax",kind:"equation",text:"P ≈ HP cos Ha"},{id:"horizontal-parallax",kind:"equation",text:"sin PE = (r / R) · sin Pm"},{id:"fig-celestial",kind:"figure",text:"天頂から見た天球の月 M と星 S",scale:fo},{id:"fig-lunar-triangle",kind:"figure",text:"天頂 Z・月 M・星 S の三角形",scale:fo},{id:"fig-nav-triangle",kind:"figure",text:"航海三角形 PZX",scale:fo}],od=sd.map(i=>({...i,scale:i.scale??1,image:ad[`./${i.id}.png`]})),c0=od.filter(i=>i.kind==="equation"||i.image),Pe={BLACK:500,DLG_IN:500,DLG_HOLD:2e3,DLG_OUT:500,GAP:500,WARP:6500,WARP_WHITE:1e3},Jt={CAMERA_FOV:110,CAMERA_Z:8,CAMERA_FAR:400,SEED:1337,EQ_COUNT:60,DOT_COUNT:130,TUBE_RADIUS:8,DOT_RADIUS:12,RADIUS_MIN:.15,APPROACH:60,TUBE_LENGTH:159,BEHIND:1,FAR_FADE:40,V_MIN:20,V_MAX:300,RISE_AT:6e3,RISE_WIDTH:1e3,STREAK_MAX:10,TILT_RADIAL:.15,TILT_JITTER:12,FADE_IN:300,DEPTH_MIN:.2,DOT_OPACITY:.85,EQ_SIZE:1.5,HAND_PX:.00325,EQ_SCALE:1.7,DOT_SCALE:.18,HALO_COLOR:"rgba(200, 225, 255, 0.95)",HALO_BLURS:[52,28,12],HALO_PAD:44,DOT_STOPS:[[0,"rgba(255,255,255,1)"],[.25,"rgba(210,230,255,0.9)"],[1,"rgba(160,190,255,0)"]]};function ld(i,t={}){i.innerHTML=`<style>
      canvas { display: block; }

      
      #warp { position: fixed; inset: 0; z-index: 0; }

      
      #dialogue {
        position: fixed;
        inset: 0;
        z-index: 1;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: calc(env(safe-area-inset-top) + 1.5rem)
                 calc(env(safe-area-inset-right) + 1.5rem)
                 calc(env(safe-area-inset-bottom) + 1.5rem)
                 calc(env(safe-area-inset-left) + 1.5rem);
        margin: 0 auto;           
        color: #e8e8e8;
        font-family: var(--font);
        font-size: clamp(1.1rem, 4.8vw, 1.6rem);
        line-height: 1.9;
        letter-spacing: 0.06em;
        text-align: center;
        max-width: 22em;
        opacity: 0;                 
        pointer-events: none;
        -webkit-user-select: none;
        user-select: none;
      }

      
      #white {
        position: fixed;
        inset: 0;
        z-index: 2;
        background: #fff;
        opacity: 0;                 
        pointer-events: none;
      }
    </style><div id="warp"></div><p id="dialogue">ねぇメリー、<br />星を見に行かない？</p><div id="white" aria-hidden="true"></div>`;let e=0;const n=[],r={blackEnd:Pe.BLACK,dlgInEnd:Pe.BLACK+Pe.DLG_IN,dlgHoldEnd:Pe.BLACK+Pe.DLG_IN+Pe.DLG_HOLD,dlgOutEnd:Pe.BLACK+Pe.DLG_IN+Pe.DLG_HOLD+Pe.DLG_OUT,warpStart:Pe.BLACK+Pe.DLG_IN+Pe.DLG_HOLD+Pe.DLG_OUT+Pe.GAP,whiteStart:0,warpWhiteEnd:0,total:0};r.whiteStart=r.warpStart+Pe.WARP,r.warpWhiteEnd=r.whiteStart+Pe.WARP_WHITE,r.total=r.warpWhiteEnd;const a=i.querySelector("#warp"),s=new e2({antialias:!0,alpha:!1});s.setPixelRatio(Math.min(window.devicePixelRatio,2)),s.setSize(window.innerWidth,window.innerHeight),s.setClearColor(0,1),a.appendChild(s.domElement);const o=new n2,l=new _n(Jt.CAMERA_FOV,window.innerWidth/window.innerHeight,.1,Jt.CAMERA_FAR);l.position.set(0,0,Jt.CAMERA_Z);const c=()=>{l.aspect=window.innerWidth/window.innerHeight,l.updateProjectionMatrix(),s.setSize(window.innerWidth,window.innerHeight)};window.addEventListener("resize",c),n.push(()=>window.removeEventListener("resize",c));function u(I){const ct=Jt.HALO_PAD,At=document.createElement("canvas").getContext("2d"),xt=`italic 92px ${h2}`;At.font=xt;const Vt=At.measureText(I).width,bt=Math.ceil(Vt+112),A=Math.ceil(92+ct*2),x=document.createElement("canvas");x.width=bt,x.height=A;const B=x.getContext("2d");B.font=xt,B.textAlign="center",B.textBaseline="middle",B.fillStyle="#ffffff",B.shadowColor=Jt.HALO_COLOR;for(const J of Jt.HALO_BLURS)B.shadowBlur=J,B.fillText(I,bt/2,A/2);B.shadowBlur=0,B.fillText(I,bt/2,A/2);const et=new oo(x);et.colorSpace=on;const ut=Jt.EQ_SCALE*Jt.EQ_SIZE;return{texture:et,worldW:ut*(bt/A),worldH:ut}}function h(I,ot=1){const T=l0/.5,pt=Math.ceil(Jt.HALO_PAD*T),ct=I.naturalWidth+pt*2,At=I.naturalHeight+pt*2,xt=document.createElement("canvas");xt.width=ct,xt.height=At;const Vt=xt.getContext("2d");Vt.shadowColor=Jt.HALO_COLOR;for(const x of Jt.HALO_BLURS.map(B=>B*T))Vt.shadowBlur=x,Vt.drawImage(I,pt,pt);Vt.shadowBlur=0,Vt.drawImage(I,pt,pt);const bt=new oo(xt);bt.colorSpace=on;const A=Jt.HAND_PX/l0*Jt.EQ_SIZE*ot;return{texture:bt,worldW:ct*A,worldH:At*A}}function f(){const ot=document.createElement("canvas");ot.width=128,ot.height=128;const T=ot.getContext("2d"),pt=T.createRadialGradient(128/2,128/2,0,128/2,128/2,128/2);for(const[At,xt]of Jt.DOT_STOPS)pt.addColorStop(At,xt);T.fillStyle=pt,T.fillRect(0,0,128,128);const ct=new oo(ot);return ct.colorSpace=on,ct}const p=c0.map(I=>u(I.text));let g=!1;const v=f(),m=[];let d=Jt.SEED;function w(){return d^=d<<13,d^=d>>>17,d^=d<<5,(d>>>0)%1e5/1e5}function S(I,ot){let T=(Jt.SEED^Math.imul(ot,2654435761)^Math.imul(I+1,2246822507))>>>0;return T=Math.imul(T^T>>>16,2146121005),T=Math.imul(T^T>>>15,2221713035),((T^T>>>16)>>>0)/4294967296}function _(I){return I-Math.PI*Math.round(I/Math.PI)}function L(I){return _(I-Math.PI/2)}function R(I,ot,T){const pt=L(T);if(!I)return{tilt:0,turn:pt};const ct=(S(ot,1)*2-1)*Jt.TILT_JITTER*(Math.PI/180),At=Jt.TILT_RADIAL*pt+ct;return{tilt:At,turn:At+_(pt-At)}}function b(I){const ot=(pt,ct)=>ct===0?pt:ot(ct,pt%ct);let T=Math.max(1,Math.round(I*.618));for(;ot(T,I)!==1;)T++;return T}function U(I,ot,T){let pt,ct,At,xt=-1;if(I){xt=ot%p.length,w();const et=p[xt];pt=new a0({map:et.texture,blending:Ti,transparent:!0,depthTest:!1,depthWrite:!1}),ct=et.worldW,At=et.worldH}else pt=new a0({map:v,blending:Ti,transparent:!0,depthTest:!1,depthWrite:!1}),ct=Jt.DOT_SCALE,At=Jt.DOT_SCALE;const Vt=new y6(pt),bt=(ot+w())/T*Math.PI*2,A=I?Jt.TUBE_RADIUS:Jt.DOT_RADIUS,x=(Jt.RADIUS_MIN+(1-Jt.RADIUS_MIN)*w())*A,B={sprite:Vt,material:pt,along:(ot*b(T)%T+w())/T*Jt.TUBE_LENGTH,angle:bt,radius:x,baseW:ct,baseH:At,isEq:I,eq:xt,...R(I,ot,bt)};Vt.position.set(Math.cos(bt)*x,Math.sin(bt)*x,-400),o.add(Vt),m.push(B)}for(let I=0;I<Jt.EQ_COUNT;I++)U(!0,I,Jt.EQ_COUNT);for(let I=0;I<Jt.DOT_COUNT;I++)U(!1,I,Jt.DOT_COUNT);c0.forEach((I,ot)=>{if(!I.image)return;const T=new Image;T.src=I.image,T.decode().then(()=>{if(g)return;const pt=h(T,I.scale);p[ot].texture.dispose(),p[ot]=pt;for(const ct of m)ct.eq===ot&&(ct.material.map=pt.texture,ct.material.needsUpdate=!0,ct.baseW=pt.worldW,ct.baseH=pt.worldH)}).catch(()=>{})});function E(I){return I<0?0:I>1?1:I}function M(I){const ot=E(I);return ot*ot*(3-2*ot)}function C(I,ot,T){return I+(ot-I)*T}function H(I){return I<r.blackEnd?0:I<r.dlgInEnd?M((I-r.blackEnd)/Pe.DLG_IN):I<r.dlgHoldEnd?1:I<r.dlgOutEnd?1-M((I-r.dlgHoldEnd)/Pe.DLG_OUT):0}function G(I){return I<r.whiteStart?0:I<r.warpWhiteEnd?M((I-r.whiteStart)/Pe.WARP_WHITE):1}function K(I){const ot=Math.abs(I);return ot+Math.log1p(Math.exp(-2*ot))-Math.LN2}function tt(I){return(1+Math.tanh((I-Jt.RISE_AT)/Jt.RISE_WIDTH))/2}function Z(I){return Math.min(Math.max(I-r.warpStart,0),r.warpWhiteEnd-r.warpStart)}function at(I){const ot=Z(I),T=Jt.RISE_AT,pt=Jt.RISE_WIDTH,ct=(ot+pt*(K((ot-T)/pt)-K(-T/pt)))/2;return(Jt.V_MIN*ot+(Jt.V_MAX-Jt.V_MIN)*ct)/1e3}function X(I){return I<r.warpStart?0:tt(Z(I))}function ft(I){return M((I-r.warpStart)/Jt.FADE_IN)}function st(I){const ot=at(I),T=X(I),pt=ft(I),ct=Jt.TUBE_LENGTH;for(const At of m){const xt=Jt.APPROACH-ot+At.along,Vt=xt<-1?Math.ceil((-1-xt)/ct):0,bt=xt+Vt*ct;At.sprite.position.z=Jt.CAMERA_Z-bt;const A=1+T*(Jt.STREAK_MAX-1);At.sprite.scale.set(At.baseW,At.baseH*A,1),At.material.rotation=C(At.tilt,At.turn,T);const x=Jt.DEPTH_MIN+(1-Jt.DEPTH_MIN)*E(1-(bt+Jt.BEHIND)/ct),B=Vt>0?E((ct-Jt.BEHIND-bt)/Jt.FAR_FADE):1;At.material.opacity=pt*x*B*(At.isEq?1:Jt.DOT_OPACITY)}}const Q=i.querySelector("#dialogue"),Mt=i.querySelector("#white");let wt=0,W=!1,it=null,St=!1;function $(I){Q.style.opacity=String(H(I)),Mt.style.opacity=String(G(I)),st(I),s.render(o,l)}function _t(){St||(St=!0,window.dispatchEvent(new CustomEvent("boot-effect:done")))}function F(I){W||(it===null&&(it=I),wt+=I-it,it=I,wt>=r.total&&(wt=r.total,_t())),$(wt),e=requestAnimationFrame(F)}e=requestAnimationFrame(F),n.push(d2(()=>{St||W||wt<r.whiteStart&&(wt=r.whiteStart,it=null)}));const nt={black:250,dialogue:r.blackEnd+Pe.DLG_IN+Pe.DLG_HOLD/2,dialogueEnd:r.dlgOutEnd,approach:r.warpStart+500,warpFar:r.warpStart+(Jt.RISE_AT-2*Jt.RISE_WIDTH)*.75,warpStreak:r.warpStart+Jt.RISE_AT+Jt.RISE_WIDTH,white:r.whiteStart+Pe.WARP_WHITE*.7,end:r.total};if(window.__bootEffect={M:r,stages:nt,seek(I){W=!0,wt=typeof I=="number"?I:nt[I]??0,$(wt)},play(){W=!1,it=null},state(){return{elapsed:wt,dialogueOpacity:H(wt),whiteOpacity:G(wt),streak:X(wt),eqCount:Jt.EQ_COUNT,done:St}}},t.hold&&t.hold in nt)window.__bootEffect.seek(t.hold);else if(t.from){const I=t.from in nt?t.from:Number(t.from);(typeof I=="string"||Number.isFinite(I))&&(window.__bootEffect.seek(I),window.__bootEffect.play())}function Ct(){var I,ot;g=!0,cancelAnimationFrame(e);for(const T of n)T();for(const T of m)(ot=(I=T.sprite.geometry)==null?void 0:I.dispose)==null||ot.call(I),T.material.dispose();for(const T of p)T.texture.dispose();v.dispose(),s.dispose(),delete window.__bootEffect}return Ct}/**
    @preserve

    Astronomy library for JavaScript (browser and Node.js).
    https://github.com/cosinekitty/astronomy

    MIT License

    Copyright (c) 2019-2023 Don Cross <cosinekitty@gmail.com>

    Permission is hereby granted, free of charge, to any person obtaining a copy
    of this software and associated documentation files (the "Software"), to deal
    in the Software without restriction, including without limitation the rights
    to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
    copies of the Software, and to permit persons to whom the Software is
    furnished to do so, subject to the following conditions:

    The above copyright notice and this permission notice shall be included in all
    copies or substantial portions of the Software.

    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
    IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
    FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
    AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
    LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
    OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
    SOFTWARE.
*//**
 * @fileoverview Astronomy calculation library for browser scripting and Node.js.
 * @author Don Cross <cosinekitty@gmail.com>
 * @license MIT
 */const f2=173.1446326846693,Bi=14959787069098932e-8,cd=63241.07708807546,Bt=.017453292519943295,ul=.26179938779914946,Xn=57.29577951308232,p2=3.819718634205488,ud=365.24217,hl=new Date("2000-01-01T12:00:00Z"),ni=2*Math.PI,Si=3600*(180/Math.PI),xr=484813681109536e-20,m2=10800*60,hd=2*m2,dl=7292115e-11,dd=m2/Math.PI,fd=-.17-5*Math.log10(dd),u0=.996647180302104,pd=u0*u0,h0=6378.1366,md=h0/Bi,g2=81.30056,H0=.0002959122082855911,d0=2825345909524226e-22,f0=8459715185680659e-23,p0=1292024916781969e-23,m0=1524358900784276e-23;function Fe(i){if(!Number.isFinite(i))throw console.trace(),`Value is not a finite number: ${i}`;return i}function vr(i){return i-Math.floor(i)}function v2(i,t){const e=i.x*i.x+i.y*i.y+i.z*i.z;if(Math.abs(e)<1e-8)throw"AngleBetween: first vector is too short.";const n=t.x*t.x+t.y*t.y+t.z*t.z;if(Math.abs(n)<1e-8)throw"AngleBetween: second vector is too short.";const r=(i.x*t.x+i.y*t.y+i.z*t.z)/Math.sqrt(e*n);return r<=-1?180:r>=1?0:Xn*Math.acos(r)}var Ut;(function(i){i.Sun="Sun",i.Moon="Moon",i.Mercury="Mercury",i.Venus="Venus",i.Earth="Earth",i.Mars="Mars",i.Jupiter="Jupiter",i.Saturn="Saturn",i.Uranus="Uranus",i.Neptune="Neptune",i.Pluto="Pluto",i.SSB="SSB",i.EMB="EMB",i.Star1="Star1",i.Star2="Star2",i.Star3="Star3",i.Star4="Star4",i.Star5="Star5",i.Star6="Star6",i.Star7="Star7",i.Star8="Star8"})(Ut||(Ut={}));const gd=[Ut.Star1,Ut.Star2,Ut.Star3,Ut.Star4,Ut.Star5,Ut.Star6,Ut.Star7,Ut.Star8],vd=[{ra:0,dec:0,dist:0},{ra:0,dec:0,dist:0},{ra:0,dec:0,dist:0},{ra:0,dec:0,dist:0},{ra:0,dec:0,dist:0},{ra:0,dec:0,dist:0},{ra:0,dec:0,dist:0},{ra:0,dec:0,dist:0}];function _2(i){const t=gd.indexOf(i);return t>=0?vd[t]:null}function G0(i){const t=_2(i);return t&&t.dist>0?t:null}function _d(i,t,e,n){const r=_2(i);if(!r)throw`Invalid star body: ${i}`;if(Fe(t),Fe(e),Fe(n),t<0||t>=24)throw`Invalid right ascension for star: ${t}`;if(e<-90||e>90)throw`Invalid declination for star: ${e}`;r.ra=t,r.dec=e,r.dist=n*cd}var Ve;(function(i){i[i.From2000=0]="From2000",i[i.Into2000=1]="Into2000"})(Ve||(Ve={}));const oi={Mercury:[[[[4.40250710144,0,0],[.40989414977,1.48302034195,26087.9031415742],[.050462942,4.47785489551,52175.8062831484],[.00855346844,1.16520322459,78263.70942472259],[.00165590362,4.11969163423,104351.61256629678],[.00034561897,.77930768443,130439.51570787099],[7583476e-11,3.71348404924,156527.41884944518]],[[26087.90313685529,0,0],[.01131199811,6.21874197797,26087.9031415742],[.00292242298,3.04449355541,52175.8062831484],[.00075775081,6.08568821653,78263.70942472259],[.00019676525,2.80965111777,104351.61256629678]]],[[[.11737528961,1.98357498767,26087.9031415742],[.02388076996,5.03738959686,52175.8062831484],[.01222839532,3.14159265359,0],[.0054325181,1.79644363964,78263.70942472259],[.0012977877,4.83232503958,104351.61256629678],[.00031866927,1.58088495658,130439.51570787099],[7963301e-11,4.60972126127,156527.41884944518]],[[.00274646065,3.95008450011,26087.9031415742],[.00099737713,3.14159265359,0]]],[[[.39528271651,0,0],[.07834131818,6.19233722598,26087.9031415742],[.00795525558,2.95989690104,52175.8062831484],[.00121281764,6.01064153797,78263.70942472259],[.00021921969,2.77820093972,104351.61256629678],[4354065e-11,5.82894543774,130439.51570787099]],[[.0021734774,4.65617158665,26087.9031415742],[.00044141826,1.42385544001,52175.8062831484]]]],Venus:[[[[3.17614666774,0,0],[.01353968419,5.59313319619,10213.285546211],[.00089891645,5.30650047764,20426.571092422],[5477194e-11,4.41630661466,7860.4193924392],[3455741e-11,2.6996444782,11790.6290886588],[2372061e-11,2.99377542079,3930.2096962196],[1317168e-11,5.18668228402,26.2983197998],[1664146e-11,4.25018630147,1577.3435424478],[1438387e-11,4.15745084182,9683.5945811164],[1200521e-11,6.15357116043,30639.856638633]],[[10213.28554621638,0,0],[.00095617813,2.4640651111,10213.285546211],[7787201e-11,.6247848222,20426.571092422]]],[[[.05923638472,.26702775812,10213.285546211],[.00040107978,1.14737178112,20426.571092422],[.00032814918,3.14159265359,0]],[[.00287821243,1.88964962838,10213.285546211]]],[[[.72334820891,0,0],[.00489824182,4.02151831717,10213.285546211],[1658058e-11,4.90206728031,20426.571092422],[1378043e-11,1.12846591367,11790.6290886588],[1632096e-11,2.84548795207,7860.4193924392],[498395e-11,2.58682193892,9683.5945811164],[221985e-11,2.01346696541,19367.1891622328],[237454e-11,2.55136053886,15720.8387848784]],[[.00034551041,.89198706276,10213.285546211]]]],Earth:[[[[1.75347045673,0,0],[.03341656453,4.66925680415,6283.0758499914],[.00034894275,4.62610242189,12566.1516999828],[3417572e-11,2.82886579754,3.523118349],[3497056e-11,2.74411783405,5753.3848848968],[3135899e-11,3.62767041756,77713.7714681205],[2676218e-11,4.41808345438,7860.4193924392],[2342691e-11,6.13516214446,3930.2096962196],[1273165e-11,2.03709657878,529.6909650946],[1324294e-11,.74246341673,11506.7697697936],[901854e-11,2.04505446477,26.2983197998],[1199167e-11,1.10962946234,1577.3435424478],[857223e-11,3.50849152283,398.1490034082],[779786e-11,1.17882681962,5223.6939198022],[99025e-10,5.23268072088,5884.9268465832],[753141e-11,2.53339052847,5507.5532386674],[505267e-11,4.58292599973,18849.2275499742],[492392e-11,4.20505711826,775.522611324],[356672e-11,2.91954114478,.0673103028],[284125e-11,1.89869240932,796.2980068164],[242879e-11,.34481445893,5486.777843175],[317087e-11,5.84901948512,11790.6290886588],[271112e-11,.31486255375,10977.078804699],[206217e-11,4.80646631478,2544.3144198834],[205478e-11,1.86953770281,5573.1428014331],[202318e-11,2.45767790232,6069.7767545534],[126225e-11,1.08295459501,20.7753954924],[155516e-11,.83306084617,213.299095438]],[[6283.0758499914,0,0],[.00206058863,2.67823455808,6283.0758499914],[4303419e-11,2.63512233481,12566.1516999828]],[[8721859e-11,1.07253635559,6283.0758499914]]],[[],[[.00227777722,3.4137662053,6283.0758499914],[3805678e-11,3.37063423795,12566.1516999828]]],[[[1.00013988784,0,0],[.01670699632,3.09846350258,6283.0758499914],[.00013956024,3.05524609456,12566.1516999828],[308372e-10,5.19846674381,77713.7714681205],[1628463e-11,1.17387558054,5753.3848848968],[1575572e-11,2.84685214877,7860.4193924392],[924799e-11,5.45292236722,11506.7697697936],[542439e-11,4.56409151453,3930.2096962196],[47211e-10,3.66100022149,5884.9268465832],[85831e-11,1.27079125277,161000.6857376741],[57056e-11,2.01374292245,83996.84731811189],[55736e-11,5.2415979917,71430.69561812909],[174844e-11,3.01193636733,18849.2275499742],[243181e-11,4.2734953079,11790.6290886588]],[[.00103018607,1.10748968172,6283.0758499914],[1721238e-11,1.06442300386,12566.1516999828]],[[4359385e-11,5.78455133808,6283.0758499914]]]],Mars:[[[[6.20347711581,0,0],[.18656368093,5.0503710027,3340.6124266998],[.01108216816,5.40099836344,6681.2248533996],[.00091798406,5.75478744667,10021.8372800994],[.00027744987,5.97049513147,3.523118349],[.00010610235,2.93958560338,2281.2304965106],[.00012315897,.84956094002,2810.9214616052],[8926784e-11,4.15697846427,.0172536522],[8715691e-11,6.11005153139,13362.4497067992],[6797556e-11,.36462229657,398.1490034082],[7774872e-11,3.33968761376,5621.8429232104],[3575078e-11,1.6618650571,2544.3144198834],[4161108e-11,.22814971327,2942.4634232916],[3075252e-11,.85696614132,191.4482661116],[2628117e-11,.64806124465,3337.0893083508],[2937546e-11,6.07893711402,.0673103028],[2389414e-11,5.03896442664,796.2980068164],[2579844e-11,.02996736156,3344.1355450488],[1528141e-11,1.14979301996,6151.533888305],[1798806e-11,.65634057445,529.6909650946],[1264357e-11,3.62275122593,5092.1519581158],[1286228e-11,3.06796065034,2146.1654164752],[1546404e-11,2.91579701718,1751.539531416],[1024902e-11,3.69334099279,8962.4553499102],[891566e-11,.18293837498,16703.062133499],[858759e-11,2.4009381194,2914.0142358238],[832715e-11,2.46418619474,3340.5951730476],[83272e-10,4.49495782139,3340.629680352],[712902e-11,3.66335473479,1059.3819301892],[748723e-11,3.82248614017,155.4203994342],[723861e-11,.67497311481,3738.761430108],[635548e-11,2.92182225127,8432.7643848156],[655162e-11,.48864064125,3127.3133312618],[550474e-11,3.81001042328,.9803210682],[55275e-10,4.47479317037,1748.016413067],[425966e-11,.55364317304,6283.0758499914],[415131e-11,.49662285038,213.299095438],[472167e-11,3.62547124025,1194.4470102246],[306551e-11,.38052848348,6684.7479717486],[312141e-11,.99853944405,6677.7017350506],[293198e-11,4.22131299634,20.7753954924],[302375e-11,4.48618007156,3532.0606928114],[274027e-11,.54222167059,3340.545116397],[281079e-11,5.88163521788,1349.8674096588],[231183e-11,1.28242156993,3870.3033917944],[283602e-11,5.7688543494,3149.1641605882],[236117e-11,5.75503217933,3333.498879699],[274033e-11,.13372524985,3340.6797370026],[299395e-11,2.78323740866,6254.6266625236]],[[3340.61242700512,0,0],[.01457554523,3.60433733236,3340.6124266998],[.00168414711,3.92318567804,6681.2248533996],[.00020622975,4.26108844583,10021.8372800994],[3452392e-11,4.7321039319,3.523118349],[2586332e-11,4.60670058555,13362.4497067992],[841535e-11,4.45864030426,2281.2304965106]],[[.00058152577,2.04961712429,3340.6124266998],[.00013459579,2.45738706163,6681.2248533996]]],[[[.03197134986,3.76832042431,3340.6124266998],[.00298033234,4.10616996305,6681.2248533996],[.00289104742,0,0],[.00031365539,4.4465105309,10021.8372800994],[34841e-9,4.7881254926,13362.4497067992]],[[.00217310991,6.04472194776,3340.6124266998],[.00020976948,3.14159265359,0],[.00012834709,1.60810667915,6681.2248533996]]],[[[1.53033488271,0,0],[.1418495316,3.47971283528,3340.6124266998],[.00660776362,3.81783443019,6681.2248533996],[.00046179117,4.15595316782,10021.8372800994],[8109733e-11,5.55958416318,2810.9214616052],[7485318e-11,1.77239078402,5621.8429232104],[5523191e-11,1.3643630377,2281.2304965106],[382516e-10,4.49407183687,13362.4497067992],[2306537e-11,.09081579001,2544.3144198834],[1999396e-11,5.36059617709,3337.0893083508],[2484394e-11,4.9254563992,2942.4634232916],[1960195e-11,4.74249437639,3344.1355450488],[1167119e-11,2.11260868341,5092.1519581158],[1102816e-11,5.00908403998,398.1490034082],[899066e-11,4.40791133207,529.6909650946],[992252e-11,5.83861961952,6151.533888305],[807354e-11,2.10217065501,1059.3819301892],[797915e-11,3.44839203899,796.2980068164],[740975e-11,1.49906336885,2146.1654164752]],[[.01107433345,2.03250524857,3340.6124266998],[.00103175887,2.37071847807,6681.2248533996],[128772e-9,0,0],[.0001081588,2.70888095665,10021.8372800994]],[[.00044242249,.47930604954,3340.6124266998],[8138042e-11,.86998389204,6681.2248533996]]]],Jupiter:[[[[.59954691494,0,0],[.09695898719,5.06191793158,529.6909650946],[.00573610142,1.44406205629,7.1135470008],[.00306389205,5.41734730184,1059.3819301892],[.00097178296,4.14264726552,632.7837393132],[.00072903078,3.64042916389,522.5774180938],[.00064263975,3.41145165351,103.0927742186],[.00039806064,2.29376740788,419.4846438752],[.00038857767,1.27231755835,316.3918696566],[.00027964629,1.7845459182,536.8045120954],[.0001358973,5.7748104079,1589.0728952838],[8246349e-11,3.5822792584,206.1855484372],[8768704e-11,3.63000308199,949.1756089698],[7368042e-11,5.0810119427,735.8765135318],[626315e-10,.02497628807,213.299095438],[6114062e-11,4.51319998626,1162.4747044078],[4905396e-11,1.32084470588,110.2063212194],[5305285e-11,1.30671216791,14.2270940016],[5305441e-11,4.18625634012,1052.2683831884],[4647248e-11,4.69958103684,3.9321532631],[3045023e-11,4.31676431084,426.598190876],[2609999e-11,1.56667394063,846.0828347512],[2028191e-11,1.06376530715,3.1813937377],[1764763e-11,2.14148655117,1066.49547719],[1722972e-11,3.88036268267,1265.5674786264],[1920945e-11,.97168196472,639.897286314],[1633223e-11,3.58201833555,515.463871093],[1431999e-11,4.29685556046,625.6701923124],[973272e-11,4.09764549134,95.9792272178]],[[529.69096508814,0,0],[.00489503243,4.2208293947,529.6909650946],[.00228917222,6.02646855621,7.1135470008],[.00030099479,4.54540782858,1059.3819301892],[.0002072092,5.45943156902,522.5774180938],[.00012103653,.16994816098,536.8045120954],[6067987e-11,4.42422292017,103.0927742186],[5433968e-11,3.98480737746,419.4846438752],[4237744e-11,5.89008707199,14.2270940016]],[[.00047233601,4.32148536482,7.1135470008],[.00030649436,2.929777887,529.6909650946],[.00014837605,3.14159265359,0]]],[[[.02268615702,3.55852606721,529.6909650946],[.00109971634,3.90809347197,1059.3819301892],[.00110090358,0,0],[8101428e-11,3.60509572885,522.5774180938],[6043996e-11,4.25883108339,1589.0728952838],[6437782e-11,.30627119215,536.8045120954]],[[.00078203446,1.52377859742,529.6909650946]]],[[[5.20887429326,0,0],[.25209327119,3.49108639871,529.6909650946],[.00610599976,3.84115365948,1059.3819301892],[.00282029458,2.57419881293,632.7837393132],[.00187647346,2.07590383214,522.5774180938],[.00086792905,.71001145545,419.4846438752],[.00072062974,.21465724607,536.8045120954],[.00065517248,5.9799588479,316.3918696566],[.00029134542,1.67759379655,103.0927742186],[.00030135335,2.16132003734,949.1756089698],[.00023453271,3.54023522184,735.8765135318],[.00022283743,4.19362594399,1589.0728952838],[.00023947298,.2745803748,7.1135470008],[.00013032614,2.96042965363,1162.4747044078],[970336e-10,1.90669633585,206.1855484372],[.00012749023,2.71550286592,1052.2683831884],[7057931e-11,2.18184839926,1265.5674786264],[6137703e-11,6.26418240033,846.0828347512],[2616976e-11,2.00994012876,1581.959348283]],[[.0127180152,2.64937512894,529.6909650946],[.00061661816,3.00076460387,1059.3819301892],[.00053443713,3.89717383175,522.5774180938],[.00031185171,4.88276958012,536.8045120954],[.00041390269,0,0]]]],Saturn:[[[[.87401354025,0,0],[.11107659762,3.96205090159,213.299095438],[.01414150957,4.58581516874,7.1135470008],[.00398379389,.52112032699,206.1855484372],[.00350769243,3.30329907896,426.598190876],[.00206816305,.24658372002,103.0927742186],[792713e-9,3.84007056878,220.4126424388],[.00023990355,4.66976924553,110.2063212194],[.00016573588,.43719228296,419.4846438752],[.00014906995,5.76903183869,316.3918696566],[.0001582029,.93809155235,632.7837393132],[.00014609559,1.56518472,3.9321532631],[.00013160301,4.44891291899,14.2270940016],[.00015053543,2.71669915667,639.897286314],[.00013005299,5.98119023644,11.0457002639],[.00010725067,3.12939523827,202.2533951741],[5863206e-11,.23656938524,529.6909650946],[5227757e-11,4.20783365759,3.1813937377],[6126317e-11,1.76328667907,277.0349937414],[5019687e-11,3.17787728405,433.7117378768],[459255e-10,.61977744975,199.0720014364],[4005867e-11,2.24479718502,63.7358983034],[2953796e-11,.98280366998,95.9792272178],[387367e-10,3.22283226966,138.5174968707],[2461186e-11,2.03163875071,735.8765135318],[3269484e-11,.77492638211,949.1756089698],[1758145e-11,3.2658010994,522.5774180938],[1640172e-11,5.5050445305,846.0828347512],[1391327e-11,4.02333150505,323.5054166574],[1580648e-11,4.37265307169,309.2783226558],[1123498e-11,2.83726798446,415.5524906121],[1017275e-11,3.71700135395,227.5261894396],[848642e-11,3.1915017083,209.3669421749]],[[213.2990952169,0,0],[.01297370862,1.82834923978,213.299095438],[.00564345393,2.88499717272,7.1135470008],[.00093734369,1.06311793502,426.598190876],[.00107674962,2.27769131009,206.1855484372],[.00040244455,2.04108104671,220.4126424388],[.00019941774,1.2795439047,103.0927742186],[.00010511678,2.7488034213,14.2270940016],[6416106e-11,.38238295041,639.897286314],[4848994e-11,2.43037610229,419.4846438752],[4056892e-11,2.92133209468,110.2063212194],[3768635e-11,3.6496533078,3.9321532631]],[[.0011644133,1.17988132879,7.1135470008],[.00091841837,.0732519584,213.299095438],[.00036661728,0,0],[.00015274496,4.06493179167,206.1855484372]]],[[[.04330678039,3.60284428399,213.299095438],[.00240348302,2.85238489373,426.598190876],[.00084745939,0,0],[.00030863357,3.48441504555,220.4126424388],[.00034116062,.57297307557,206.1855484372],[.0001473407,2.11846596715,639.897286314],[9916667e-11,5.79003188904,419.4846438752],[6993564e-11,4.7360468972,7.1135470008],[4807588e-11,5.43305312061,316.3918696566]],[[.00198927992,4.93901017903,213.299095438],[.00036947916,3.14159265359,0],[.00017966989,.5197943111,426.598190876]]],[[[9.55758135486,0,0],[.52921382865,2.39226219573,213.299095438],[.01873679867,5.2354960466,206.1855484372],[.01464663929,1.64763042902,426.598190876],[.00821891141,5.93520042303,316.3918696566],[.00547506923,5.0153261898,103.0927742186],[.0037168465,2.27114821115,220.4126424388],[.00361778765,3.13904301847,7.1135470008],[.00140617506,5.70406606781,632.7837393132],[.00108974848,3.29313390175,110.2063212194],[.00069006962,5.94099540992,419.4846438752],[.00061053367,.94037691801,639.897286314],[.00048913294,1.55733638681,202.2533951741],[.00034143772,.19519102597,277.0349937414],[.00032401773,5.47084567016,949.1756089698],[.00020936596,.46349251129,735.8765135318],[9796004e-11,5.20477537945,1265.5674786264],[.00011993338,5.98050967385,846.0828347512],[208393e-9,1.52102476129,433.7117378768],[.00015298404,3.0594381494,529.6909650946],[6465823e-11,.17732249942,1052.2683831884],[.00011380257,1.7310542704,522.5774180938],[3419618e-11,4.94550542171,1581.959348283]],[[.0618298134,.2584351148,213.299095438],[.00506577242,.71114625261,206.1855484372],[.00341394029,5.79635741658,426.598190876],[.00188491195,.47215589652,220.4126424388],[.00186261486,3.14159265359,0],[.00143891146,1.40744822888,7.1135470008]],[[.00436902572,4.78671677509,213.299095438]]]],Uranus:[[[[5.48129294297,0,0],[.09260408234,.89106421507,74.7815985673],[.01504247898,3.6271926092,1.4844727083],[.00365981674,1.89962179044,73.297125859],[.00272328168,3.35823706307,149.5631971346],[.00070328461,5.39254450063,63.7358983034],[.00068892678,6.09292483287,76.2660712756],[.00061998615,2.26952066061,2.9689454166],[.00061950719,2.85098872691,11.0457002639],[.0002646877,3.14152083966,71.8126531507],[.00025710476,6.11379840493,454.9093665273],[.0002107885,4.36059339067,148.0787244263],[.00017818647,1.74436930289,36.6485629295],[.00014613507,4.73732166022,3.9321532631],[.00011162509,5.8268179635,224.3447957019],[.0001099791,.48865004018,138.5174968707],[9527478e-11,2.95516862826,35.1640902212],[7545601e-11,5.236265824,109.9456887885],[4220241e-11,3.23328220918,70.8494453042],[40519e-9,2.277550173,151.0476698429],[3354596e-11,1.0654900738,4.4534181249],[2926718e-11,4.62903718891,9.5612275556],[349034e-10,5.48306144511,146.594251718],[3144069e-11,4.75199570434,77.7505439839],[2922333e-11,5.35235361027,85.8272988312],[2272788e-11,4.36600400036,70.3281804424],[2051219e-11,1.51773566586,.1118745846],[2148602e-11,.60745949945,38.1330356378],[1991643e-11,4.92437588682,277.0349937414],[1376226e-11,2.04283539351,65.2203710117],[1666902e-11,3.62744066769,380.12776796],[1284107e-11,3.11347961505,202.2533951741],[1150429e-11,.93343589092,3.1813937377],[1533221e-11,2.58594681212,52.6901980395],[1281604e-11,.54271272721,222.8603229936],[1372139e-11,4.19641530878,111.4301614968],[1221029e-11,.1990065003,108.4612160802],[946181e-11,1.19253165736,127.4717966068],[1150989e-11,4.17898916639,33.6796175129]],[[74.7815986091,0,0],[.00154332863,5.24158770553,74.7815985673],[.00024456474,1.71260334156,1.4844727083],[9258442e-11,.4282973235,11.0457002639],[8265977e-11,1.50218091379,63.7358983034],[915016e-10,1.41213765216,149.5631971346]]],[[[.01346277648,2.61877810547,74.7815985673],[623414e-9,5.08111189648,149.5631971346],[.00061601196,3.14159265359,0],[9963722e-11,1.61603805646,76.2660712756],[992616e-10,.57630380333,73.297125859]],[[.00034101978,.01321929936,74.7815985673]]],[[[19.21264847206,0,0],[.88784984413,5.60377527014,74.7815985673],[.03440836062,.32836099706,73.297125859],[.0205565386,1.7829515933,149.5631971346],[.0064932241,4.52247285911,76.2660712756],[.00602247865,3.86003823674,63.7358983034],[.00496404167,1.40139935333,454.9093665273],[.00338525369,1.58002770318,138.5174968707],[.00243509114,1.57086606044,71.8126531507],[.00190522303,1.99809394714,1.4844727083],[.00161858838,2.79137786799,148.0787244263],[.00143706183,1.38368544947,11.0457002639],[.00093192405,.17437220467,36.6485629295],[.00071424548,4.24509236074,224.3447957019],[.00089806014,3.66105364565,109.9456887885],[.00039009723,1.66971401684,70.8494453042],[.00046677296,1.39976401694,35.1640902212],[.00039025624,3.36234773834,277.0349937414],[.00036755274,3.88649278513,146.594251718],[.00030348723,.70100838798,151.0476698429],[.00029156413,3.180563367,77.7505439839],[.00022637073,.72518687029,529.6909650946],[.00011959076,1.7504339214,984.6003316219],[.00025620756,5.25656086672,380.12776796]],[[.01479896629,3.67205697578,74.7815985673]]]],Neptune:[[[[5.31188633046,0,0],[.0179847553,2.9010127389,38.1330356378],[.01019727652,.48580922867,1.4844727083],[.00124531845,4.83008090676,36.6485629295],[.00042064466,5.41054993053,2.9689454166],[.00037714584,6.09221808686,35.1640902212],[.00033784738,1.24488874087,76.2660712756],[.00016482741,7727998e-11,491.5579294568],[9198584e-11,4.93747051954,39.6175083461],[899425e-10,.27462171806,175.1660598002]],[[38.13303563957,0,0],[.00016604172,4.86323329249,1.4844727083],[.00015744045,2.27887427527,38.1330356378]]],[[[.03088622933,1.44104372644,38.1330356378],[.00027780087,5.91271884599,76.2660712756],[.00027623609,0,0],[.00015355489,2.52123799551,36.6485629295],[.00015448133,3.50877079215,39.6175083461]]],[[[30.07013205828,0,0],[.27062259632,1.32999459377,38.1330356378],[.01691764014,3.25186135653,36.6485629295],[.00807830553,5.18592878704,1.4844727083],[.0053776051,4.52113935896,35.1640902212],[.00495725141,1.5710564165,491.5579294568],[.00274571975,1.84552258866,175.1660598002],[.0001201232,1.92059384991,1021.2488945514],[.00121801746,5.79754470298,76.2660712756],[.00100896068,.3770272493,73.297125859],[.00135134092,3.37220609835,39.6175083461],[7571796e-11,1.07149207335,388.4651552382]]]]};function xd(i){var t,e,n,r,a,s,o;const l=2e3+(i-14)/ud;return l<-500?(t=(l-1820)/100,-20+32*t*t):l<500?(t=l/100,e=t*t,n=t*e,r=e*e,a=e*n,s=n*n,10583.6-1014.41*t+33.78311*e-5.952053*n-.1798452*r+.022174192*a+.0090316521*s):l<1600?(t=(l-1e3)/100,e=t*t,n=t*e,r=e*e,a=e*n,s=n*n,1574.2-556.01*t+71.23472*e+.319781*n-.8503463*r-.005050998*a+.0083572073*s):l<1700?(t=l-1600,e=t*t,n=t*e,120-.9808*t-.01532*e+n/7129):l<1800?(t=l-1700,e=t*t,n=t*e,r=e*e,8.83+.1603*t-.0059285*e+13336e-8*n-r/1174e3):l<1860?(t=l-1800,e=t*t,n=t*e,r=e*e,a=e*n,s=n*n,o=n*r,13.72-.332447*t+.0068612*e+.0041116*n-37436e-8*r+121272e-10*a-1699e-10*s+875e-12*o):l<1900?(t=l-1860,e=t*t,n=t*e,r=e*e,a=e*n,7.62+.5737*t-.251754*e+.01680668*n-.0004473624*r+a/233174):l<1920?(t=l-1900,e=t*t,n=t*e,r=e*e,-2.79+1.494119*t-.0598939*e+.0061966*n-197e-6*r):l<1941?(t=l-1920,e=t*t,n=t*e,21.2+.84493*t-.0761*e+.0020936*n):l<1961?(t=l-1950,e=t*t,n=t*e,29.07+.407*t-e/233+n/2547):l<1986?(t=l-1975,e=t*t,n=t*e,45.45+1.067*t-e/260-n/718):l<2005?(t=l-2e3,e=t*t,n=t*e,r=e*e,a=e*n,63.86+.3345*t-.060374*e+.0017275*n+651814e-9*r+2373599e-11*a):l<2050?(t=l-2e3,62.92+.32217*t+.005589*t*t):l<2150?(t=(l-1820)/100,-20+32*t*t-.5628*(2150-l)):(t=(l-1820)/100,-20+32*t*t)}let Md=xd;function fl(i){return i+Md(i)/86400}class wr{constructor(t){if(t instanceof wr){this.date=t.date,this.ut=t.ut,this.tt=t.tt;return}const e=1e3*3600*24;if(t instanceof Date&&Number.isFinite(t.getTime())){this.date=t,this.ut=(t.getTime()-hl.getTime())/e,this.tt=fl(this.ut);return}if(Number.isFinite(t)){this.date=new Date(hl.getTime()+t*e),this.ut=t,this.tt=fl(this.ut);return}throw"Argument must be a Date object, an AstroTime object, or a numeric UTC Julian date."}static FromTerrestrialTime(t){let e=new wr(t);for(;;){const n=t-e.tt;if(Math.abs(n)<1e-12)return e;e=e.AddDays(n)}}toString(){return this.date.toISOString()}AddDays(t){return new wr(this.ut+t)}}function ze(i){return i instanceof wr?i:new wr(i)}function Sd(i){function t(f){return f%hd*xr}const e=i.tt/36525,n=t(128710479305e-5+e*1295965810481e-4),r=t(335779.526232+e*17395272628478e-4),a=t(107226070369e-5+e*1602961601209e-3),s=t(450160.398036-e*69628905431e-4);let o=Math.sin(s),l=Math.cos(s),c=(-172064161-174666*e)*o+33386*l,u=(92052331+9086*e)*l+15377*o,h=2*(r-a+s);return o=Math.sin(h),l=Math.cos(h),c+=(-13170906-1675*e)*o-13696*l,u+=(5730336-3015*e)*l-4587*o,h=2*(r+s),o=Math.sin(h),l=Math.cos(h),c+=(-2276413-234*e)*o+2796*l,u+=(978459-485*e)*l+1374*o,h=2*s,o=Math.sin(h),l=Math.cos(h),c+=(2074554+207*e)*o-698*l,u+=(-897492+470*e)*l-291*o,o=Math.sin(n),l=Math.cos(n),c+=(1475877-3633*e)*o+11817*l,u+=(73871-184*e)*l-1924*o,{dpsi:-135e-6+c*1e-7,deps:388e-6+u*1e-7}}function x2(i){var t=i.tt/36525,e=((((-434e-10*t-576e-9)*t+.0020034)*t-1831e-7)*t-46.836769)*t+84381.406;return e/3600}var Ja;function ys(i){if(!Ja||Math.abs(Ja.tt-i.tt)>1e-6){const t=Sd(i),e=x2(i),n=e+t.deps/3600;Ja={tt:i.tt,dpsi:t.dpsi,deps:t.deps,ee:t.dpsi*Math.cos(e*Bt)/15,mobl:e,tobl:n}}return Ja}function M2(i,t){const e=i*Bt,n=Math.cos(e),r=Math.sin(e);return[t[0],t[1]*n-t[2]*r,t[1]*r+t[2]*n]}function yd(i,t){return M2(x2(i),t)}function S2(i){const t=i.tt/36525;function e(I,ot){const T=[];let pt;for(pt=0;pt<=ot-I;++pt)T.push(0);return{min:I,array:T}}function n(I,ot,T,pt){const ct=[];for(let At=0;At<=ot-I;++At)ct.push(e(T,pt));return{min:I,array:ct}}function r(I,ot,T){const pt=I.array[ot-I.min];return pt.array[T-pt.min]}function a(I,ot,T,pt){const ct=I.array[ot-I.min];ct.array[T-ct.min]=pt}let s,o,l,c,u,h,f,p,g,v,m,d,w,S,_,L,R,b,U,E,M,C,H,G=n(-6,6,1,4),K=n(-6,6,1,4);function tt(I,ot){return r(G,I,ot)}function Z(I,ot){return r(K,I,ot)}function at(I,ot,T){return a(G,I,ot,T)}function X(I,ot,T){return a(K,I,ot,T)}function ft(I,ot,T,pt,ct){ct(I*T-ot*pt,ot*T+I*pt)}function st(I){return Math.sin(ni*I)}f=t*t,g=0,H=0,m=0,d=3422.7;var Q=st(.19833+.05611*t),Mt=st(.27869+.04508*t),wt=st(.16827-.36903*t),W=st(.34734-5.37261*t),it=st(.10498-5.37899*t),St=st(.42681-.41855*t),$=st(.14943-5.37511*t);for(b=.84*Q+.31*Mt+14.27*wt+7.26*W+.28*it+.24*St,U=2.94*Q+.31*Mt+14.27*wt+9.34*W+1.12*it+.83*St,E=-6.4*Q-1.89*St,M=.21*Q+.31*Mt+14.27*wt-88.7*W-15.3*it+.24*St-1.86*$,C=b-E,p=-3332e-9*st(.59734-5.37261*t)-539e-9*st(.35498-5.37899*t)-64e-9*st(.39943-5.37511*t),w=ni*vr(.60643382+1336.85522467*t-313e-8*f)+b/Si,S=ni*vr(.37489701+1325.55240982*t+2565e-8*f)+U/Si,_=ni*vr(.99312619+99.99735956*t-44e-8*f)+E/Si,L=ni*vr(.25909118+1342.2278298*t-892e-8*f)+M/Si,R=ni*vr(.82736186+1236.85308708*t-397e-8*f)+C/Si,u=1;u<=4;++u){switch(u){case 1:l=S,o=4,c=1.000002208;break;case 2:l=_,o=3,c=.997504612-.002495388*t;break;case 3:l=L,o=4,c=1.000002708+139.978*p;break;case 4:l=R,o=6,c=1;break;default:throw`Internal error: I = ${u}`}for(at(0,u,1),at(1,u,Math.cos(l)*c),X(0,u,0),X(1,u,Math.sin(l)*c),h=2;h<=o;++h)ft(tt(h-1,u),Z(h-1,u),tt(1,u),Z(1,u),(I,ot)=>(at(h,u,I),X(h,u,ot)));for(h=1;h<=o;++h)at(-h,u,tt(h,u)),X(-h,u,-Z(h,u))}function _t(I,ot,T,pt){for(var ct={x:1,y:0},At=[0,I,ot,T,pt],xt=1;xt<=4;++xt)At[xt]!==0&&ft(ct.x,ct.y,tt(At[xt],xt),Z(At[xt],xt),(Vt,bt)=>(ct.x=Vt,ct.y=bt));return ct}function F(I,ot,T,pt,ct,At,xt,Vt){var bt=_t(ct,At,xt,Vt);g+=I*bt.y,H+=ot*bt.y,m+=T*bt.x,d+=pt*bt.x}F(13.902,14.06,-.001,.2607,0,0,0,4),F(.403,-4.01,.394,.0023,0,0,0,3),F(2369.912,2373.36,.601,28.2333,0,0,0,2),F(-125.154,-112.79,-.725,-.9781,0,0,0,1),F(1.979,6.98,-.445,.0433,1,0,0,4),F(191.953,192.72,.029,3.0861,1,0,0,2),F(-8.466,-13.51,.455,-.1093,1,0,0,1),F(22639.5,22609.07,.079,186.5398,1,0,0,0),F(18.609,3.59,-.094,.0118,1,0,0,-1),F(-4586.465,-4578.13,-.077,34.3117,1,0,0,-2),F(3.215,5.44,.192,-.0386,1,0,0,-3),F(-38.428,-38.64,.001,.6008,1,0,0,-4),F(-.393,-1.43,-.092,.0086,1,0,0,-6),F(-.289,-1.59,.123,-.0053,0,1,0,4),F(-24.42,-25.1,.04,-.3,0,1,0,2),F(18.023,17.93,.007,.1494,0,1,0,1),F(-668.146,-126.98,-1.302,-.3997,0,1,0,0),F(.56,.32,-.001,-.0037,0,1,0,-1),F(-165.145,-165.06,.054,1.9178,0,1,0,-2),F(-1.877,-6.46,-.416,.0339,0,1,0,-4),F(.213,1.02,-.074,.0054,2,0,0,4),F(14.387,14.78,-.017,.2833,2,0,0,2),F(-.586,-1.2,.054,-.01,2,0,0,1),F(769.016,767.96,.107,10.1657,2,0,0,0),F(1.75,2.01,-.018,.0155,2,0,0,-1),F(-211.656,-152.53,5.679,-.3039,2,0,0,-2),F(1.225,.91,-.03,-.0088,2,0,0,-3),F(-30.773,-34.07,-.308,.3722,2,0,0,-4),F(-.57,-1.4,-.074,.0109,2,0,0,-6),F(-2.921,-11.75,.787,-.0484,1,1,0,2),F(1.267,1.52,-.022,.0164,1,1,0,1),F(-109.673,-115.18,.461,-.949,1,1,0,0),F(-205.962,-182.36,2.056,1.4437,1,1,0,-2),F(.233,.36,.012,-.0025,1,1,0,-3),F(-4.391,-9.66,-.471,.0673,1,1,0,-4),F(.283,1.53,-.111,.006,1,-1,0,4),F(14.577,31.7,-1.54,.2302,1,-1,0,2),F(147.687,138.76,.679,1.1528,1,-1,0,0),F(-1.089,.55,.021,0,1,-1,0,-1),F(28.475,23.59,-.443,-.2257,1,-1,0,-2),F(-.276,-.38,-.006,-.0036,1,-1,0,-3),F(.636,2.27,.146,-.0102,1,-1,0,-4),F(-.189,-1.68,.131,-.0028,0,2,0,2),F(-7.486,-.66,-.037,-.0086,0,2,0,0),F(-8.096,-16.35,-.74,.0918,0,2,0,-2),F(-5.741,-.04,0,-9e-4,0,0,2,2),F(.255,0,0,0,0,0,2,1),F(-411.608,-.2,0,-.0124,0,0,2,0),F(.584,.84,0,.0071,0,0,2,-1),F(-55.173,-52.14,0,-.1052,0,0,2,-2),F(.254,.25,0,-.0017,0,0,2,-3),F(.025,-1.67,0,.0031,0,0,2,-4),F(1.06,2.96,-.166,.0243,3,0,0,2),F(36.124,50.64,-1.3,.6215,3,0,0,0),F(-13.193,-16.4,.258,-.1187,3,0,0,-2),F(-1.187,-.74,.042,.0074,3,0,0,-4),F(-.293,-.31,-.002,.0046,3,0,0,-6),F(-.29,-1.45,.116,-.0051,2,1,0,2),F(-7.649,-10.56,.259,-.1038,2,1,0,0),F(-8.627,-7.59,.078,-.0192,2,1,0,-2),F(-2.74,-2.54,.022,.0324,2,1,0,-4),F(1.181,3.32,-.212,.0213,2,-1,0,2),F(9.703,11.67,-.151,.1268,2,-1,0,0),F(-.352,-.37,.001,-.0028,2,-1,0,-1),F(-2.494,-1.17,-.003,-.0017,2,-1,0,-2),F(.36,.2,-.012,-.0043,2,-1,0,-4),F(-1.167,-1.25,.008,-.0106,1,2,0,0),F(-7.412,-6.12,.117,.0484,1,2,0,-2),F(-.311,-.65,-.032,.0044,1,2,0,-4),F(.757,1.82,-.105,.0112,1,-2,0,2),F(2.58,2.32,.027,.0196,1,-2,0,0),F(2.533,2.4,-.014,-.0212,1,-2,0,-2),F(-.344,-.57,-.025,.0036,0,3,0,-2),F(-.992,-.02,0,0,1,0,2,2),F(-45.099,-.02,0,-.001,1,0,2,0),F(-.179,-9.52,0,-.0833,1,0,2,-2),F(-.301,-.33,0,.0014,1,0,2,-4),F(-6.382,-3.37,0,-.0481,1,0,-2,2),F(39.528,85.13,0,-.7136,1,0,-2,0),F(9.366,.71,0,-.0112,1,0,-2,-2),F(.202,.02,0,0,1,0,-2,-4),F(.415,.1,0,.0013,0,1,2,0),F(-2.152,-2.26,0,-.0066,0,1,2,-2),F(-1.44,-1.3,0,.0014,0,1,-2,2),F(.384,-.04,0,0,0,1,-2,-2),F(1.938,3.6,-.145,.0401,4,0,0,0),F(-.952,-1.58,.052,-.013,4,0,0,-2),F(-.551,-.94,.032,-.0097,3,1,0,0),F(-.482,-.57,.005,-.0045,3,1,0,-2),F(.681,.96,-.026,.0115,3,-1,0,0),F(-.297,-.27,.002,-9e-4,2,2,0,-2),F(.254,.21,-.003,0,2,-2,0,-2),F(-.25,-.22,.004,.0014,1,3,0,-2),F(-3.996,0,0,4e-4,2,0,2,0),F(.557,-.75,0,-.009,2,0,2,-2),F(-.459,-.38,0,-.0053,2,0,-2,2),F(-1.298,.74,0,4e-4,2,0,-2,0),F(.538,1.14,0,-.0141,2,0,-2,-2),F(.263,.02,0,0,1,1,2,0),F(.426,.07,0,-6e-4,1,1,-2,-2),F(-.304,.03,0,3e-4,1,-1,2,0),F(-.372,-.19,0,-.0027,1,-1,-2,2),F(.418,0,0,0,0,0,4,0),F(-.33,-.04,0,0,3,0,2,0);function nt(I,ot,T,pt,ct){return I*_t(ot,T,pt,ct).y}v=0,v+=nt(-526.069,0,0,1,-2),v+=nt(-3.352,0,0,1,-4),v+=nt(44.297,1,0,1,-2),v+=nt(-6,1,0,1,-4),v+=nt(20.599,-1,0,1,0),v+=nt(-30.598,-1,0,1,-2),v+=nt(-24.649,-2,0,1,0),v+=nt(-2,-2,0,1,-2),v+=nt(-22.571,0,1,1,-2),v+=nt(10.985,0,-1,1,-2),g+=.82*st(.7736-62.5512*t)+.31*st(.0466-125.1025*t)+.35*st(.5785-25.1042*t)+.66*st(.4591+1335.8075*t)+.64*st(.313-91.568*t)+1.14*st(.148+1331.2898*t)+.21*st(.5918+1056.5859*t)+.44*st(.5784+1322.8595*t)+.24*st(.2275-5.7374*t)+.28*st(.2965+2.6929*t)+.33*st(.3132+6.3368*t),s=L+H/Si;let Ct=(1.000002708+139.978*p)*(18518.511+1.189+m)*Math.sin(s)-6.24*Math.sin(3*s)+v;return{geo_eclip_lon:ni*vr((w+g/Si)/ni),geo_eclip_lat:Math.PI/(180*3600)*Ct,distance_au:Si*md/(.999953253*d)}}function y2(i,t){return[i.rot[0][0]*t[0]+i.rot[1][0]*t[1]+i.rot[2][0]*t[2],i.rot[0][1]*t[0]+i.rot[1][1]*t[1]+i.rot[2][1]*t[2],i.rot[0][2]*t[0]+i.rot[1][2]*t[1]+i.rot[2][2]*t[2]]}function ua(i,t,e){const n=V0(t,e);return y2(n,i)}function V0(i,t){const e=i.tt/36525;let n=84381.406,r=((((-951e-10*e+132851e-9)*e-.00114045)*e-1.0790069)*e+5038.481507)*e,a=((((3337e-10*e-467e-9)*e-.00772503)*e+.0512623)*e-.025754)*e+n,s=((((-56e-9*e+170663e-9)*e-.00121197)*e-2.3814292)*e+10.556403)*e;n*=xr,r*=xr,a*=xr,s*=xr;const o=Math.sin(n),l=Math.cos(n),c=Math.sin(-r),u=Math.cos(-r),h=Math.sin(-a),f=Math.cos(-a),p=Math.sin(s),g=Math.cos(s),v=g*u-c*p*f,m=g*c*l+p*f*u*l-o*p*h,d=g*c*o+p*f*u*o+l*p*h,w=-p*u-c*g*f,S=-p*c*l+g*f*u*l-o*g*h,_=-p*c*o+g*f*u*o+l*g*h,L=c*h,R=-h*u*l-o*f,b=-h*u*o+f*l;if(t===Ve.Into2000)return new bi([[v,m,d],[w,S,_],[L,R,b]]);if(t===Ve.From2000)return new bi([[v,w,L],[m,S,R],[d,_,b]]);throw"Invalid precess direction"}function Ed(i){const t=.779057273264+.00273781191135448*i.ut,e=i.ut%1;let n=360*((t+e)%1);return n<0&&(n+=360),n}let ja;function W0(i){if(!ja||ja.tt!==i.tt){const t=i.tt/36525;let e=15*ys(i).ee;const n=Ed(i);let a=((e+.014506+((((-368e-10*t-29956e-9)*t-44e-8)*t+1.3915817)*t+4612.156534)*t)/3600+n)%360/15;a<0&&(a+=24),ja={tt:i.tt,st:a}}return ja.st}function wd(i,t){const e=i.latitude*Bt,n=Math.sin(e),r=Math.cos(e),a=1/Math.hypot(r,u0*n),s=pd*a,o=i.height/1e3,l=h0*a+o,c=h0*s+o,u=(15*t+i.longitude)*Bt,h=Math.sin(u),f=Math.cos(u);return{pos:[l*r*f/Bi,l*r*h/Bi,c*n/Bi],vel:[-dl*l*r*h*86400/Bi,dl*l*r*f*86400/Bi,0]}}function ha(i,t,e){const n=X0(t,e);return y2(n,i)}function X0(i,t){const e=ys(i),n=e.mobl*Bt,r=e.tobl*Bt,a=e.dpsi*xr,s=Math.cos(n),o=Math.sin(n),l=Math.cos(r),c=Math.sin(r),u=Math.cos(a),h=Math.sin(a),f=u,p=-h*s,g=-h*o,v=h*l,m=u*s*l+o*c,d=u*o*l-s*c,w=h*c,S=u*s*c-o*l,_=u*o*c+s*l;if(t===Ve.From2000)return new bi([[f,v,w],[p,m,S],[g,d,_]]);if(t===Ve.Into2000)return new bi([[f,p,g],[v,m,d],[w,S,_]]);throw"Invalid precess direction"}function E2(i,t,e){return e===Ve.Into2000?ua(ha(i,t,e),t,e):ha(ua(i,t,e),t,e)}function Td(i,t){const e=W0(i),n=wd(t,e).pos;return E2(n,i,Ve.Into2000)}class Re{constructor(t,e,n,r){this.x=t,this.y=e,this.z=n,this.t=r}Length(){return Math.hypot(this.x,this.y,this.z)}}class Ei{constructor(t,e,n,r,a,s,o){this.x=t,this.y=e,this.z=n,this.vx=r,this.vy=a,this.vz=s,this.t=o}}class Es{constructor(t,e,n){this.lat=Fe(t),this.lon=Fe(e),this.dist=Fe(n)}}class g0{constructor(t,e,n,r){this.ra=Fe(t),this.dec=Fe(e),this.dist=Fe(n),this.vec=r}}class bi{constructor(t){this.rot=t}}class Ad{constructor(t,e,n,r){this.azimuth=Fe(t),this.altitude=Fe(e),this.ra=Fe(n),this.dec=Fe(r)}}class bd{constructor(t,e,n){this.vec=t,this.elat=Fe(e),this.elon=Fe(n)}}function w2(i,t){return new Re(i[0],i[1],i[2],t)}function Rd(i,t){const e=w2(i,t),n=e.x*e.x+e.y*e.y,r=Math.sqrt(n+e.z*e.z);if(n===0){if(e.z===0)throw"Indeterminate sky coordinates";return new g0(0,e.z<0?-90:90,r,e)}let a=p2*Math.atan2(e.y,e.x);a<0&&(a+=24);const s=Xn*Math.atan2(i[2],Math.sqrt(n));return new g0(a,s,r,e)}function Tr(i,t){const e=i*Bt,n=Math.cos(e),r=Math.sin(e);return[n*t[0]+r*t[1],n*t[1]-r*t[0],t[2]]}function Cd(i,t,e,n,r){let a=ze(i);q0(t),Fe(e),Fe(n);const s=Math.sin(t.latitude*Bt),o=Math.cos(t.latitude*Bt),l=Math.sin(t.longitude*Bt),c=Math.cos(t.longitude*Bt),u=Math.sin(n*Bt),h=Math.cos(n*Bt),f=Math.sin(e*ul),p=Math.cos(e*ul);let g=[o*c,o*l,s],v=[-s*c,-s*l,o],m=[l,-c,0];const d=-15*W0(a);let w=Tr(d,g),S=Tr(d,v),_=Tr(d,m),L=[h*p,h*f,u];const R=L[0]*w[0]+L[1]*w[1]+L[2]*w[2],b=L[0]*S[0]+L[1]*S[1]+L[2]*S[2],U=L[0]*_[0]+L[1]*_[1]+L[2]*_[2];let E=Math.hypot(b,U),M;E>0?(M=-Xn*Math.atan2(U,b),M<0&&(M+=360)):M=0;let C=Xn*Math.atan2(E,R),H=e,G=n;{let K=C,tt=Kd(r,90-C);if(C-=tt,tt>0&&C>3e-4){const Z=Math.sin(C*Bt),at=Math.cos(C*Bt),X=Math.sin(K*Bt),ft=Math.cos(K*Bt),st=[];for(let Q=0;Q<3;++Q)st.push((L[Q]-ft*w[Q])/X*Z+w[Q]*at);E=Math.hypot(st[0],st[1]),E>0?(H=p2*Math.atan2(st[1],st[0]),H<0&&(H+=24)):H=0,G=Xn*Math.atan2(st[2],E)}}return new Ad(M,90-C,H,G)}function q0(i){if(!(i instanceof T2))throw`Not an instance of the Observer class: ${i}`;if(Fe(i.latitude),Fe(i.longitude),Fe(i.height),i.latitude<-90||i.latitude>90)throw`Latitude ${i.latitude} is out of range. Must be -90..+90.`;return i}class T2{constructor(t,e,n){this.latitude=t,this.longitude=e,this.height=n,q0(this)}}function Pd(i,t,e,n,r){q0(e);const a=ze(t),s=Td(a,e),o=T0(i,a,r),l=[o.x-s[0],o.y-s[1],o.z-s[2]],c=E2(l,a,Ve.From2000);return Rd(c,a)}function A2(i,t,e){const n=i.x,r=i.y*t+i.z*e,a=-i.y*e+i.z*t,s=Math.hypot(n,r);let o=0;s>0&&(o=Xn*Math.atan2(r,n),o<0&&(o+=360));let l=Xn*Math.atan2(a,s),c=new Re(n,r,a,i.t);return new bd(c,l,o)}function Ld(i){const t=ys(i.t),e=[i.x,i.y,i.z],n=ua(e,i.t,Ve.From2000),[r,a,s]=ha(n,i.t,Ve.From2000),o=new Re(r,a,s,i.t),l=t.tobl*Bt;return A2(o,Math.cos(l),Math.sin(l))}function Ir(i){const t=ze(i),e=S2(t),n=e.distance_au*Math.cos(e.geo_eclip_lat),r=[n*Math.cos(e.geo_eclip_lon),n*Math.sin(e.geo_eclip_lon),e.distance_au*Math.sin(e.geo_eclip_lat)],a=yd(t,r),s=ua(a,t,Ve.Into2000);return new Re(s[0],s[1],s[2],t)}function Dd(i){const t=ze(i),e=S2(t),n=e.distance_au*Math.cos(e.geo_eclip_lat),r=[n*Math.cos(e.geo_eclip_lon),n*Math.sin(e.geo_eclip_lon),e.distance_au*Math.sin(e.geo_eclip_lat)],a=ys(t),s=M2(a.mobl,r),o=ha(s,t,Ve.From2000),l=w2(o,t),c=a.tobl*Bt,u=Math.cos(c),h=Math.sin(c),f=A2(l,u,h);return new Es(f.elat,f.elon,e.distance_au)}function b2(i){const t=ze(i),e=1e-5,n=t.AddDays(-e),r=t.AddDays(+e),a=Ir(n),s=Ir(r);return new Ei((a.x+s.x)/2,(a.y+s.y)/2,(a.z+s.z)/2,(s.x-a.x)/(2*e),(s.y-a.y)/(2*e),(s.z-a.z)/(2*e),t)}function Id(i){const t=ze(i),e=b2(t),n=1+g2;return new Ei(e.x/n,e.y/n,e.z/n,e.vx/n,e.vy/n,e.vz/n,t)}function Ar(i,t,e){let n=1,r=0;for(let a of i){let s=0;for(let[l,c,u]of a)s+=l*Math.cos(c+t*u);let o=n*s;e&&(o%=ni),r+=o,n*=t}return r}function po(i,t){let e=1,n=0,r=0,a=0;for(let s of i){let o=0,l=0;for(let[c,u,h]of s){let f=u+t*h;o+=c*h*Math.sin(f),a>0&&(l+=c*Math.cos(f))}r+=a*n*l-e*o,n=e,e*=t,++a}return r}const ta=365250,v0=0,_0=1,x0=2;function M0(i){return new sn(i[0]+44036e-11*i[1]-190919e-12*i[2],-479966e-12*i[0]+.917482137087*i[1]-.397776982902*i[2],.397776982902*i[1]+.917482137087*i[2])}function R2(i,t,e){const n=e*Math.cos(t),r=Math.cos(i),a=Math.sin(i);return[n*r,n*a,e*Math.sin(t)]}function sa(i,t){const e=t.tt/ta,n=Ar(i[v0],e,!0),r=Ar(i[_0],e,!1),a=Ar(i[x0],e,!1),s=R2(n,r,a);return M0(s).ToAstroVector(t)}function S0(i,t){const e=t/ta,n=Ar(i[v0],e,!0),r=Ar(i[_0],e,!1),a=Ar(i[x0],e,!1),s=po(i[v0],e),o=po(i[_0],e),l=po(i[x0],e),c=Math.cos(n),u=Math.sin(n),h=Math.cos(r),f=Math.sin(r),p=+(l*h*c)-a*f*c*o-a*h*u*s,g=+(l*h*u)-a*f*u*o+a*h*c*s,v=+(l*f)+a*h*o,m=R2(n,r,a),d=[p/ta,g/ta,v/ta],w=M0(m),S=M0(d);return new Yi(t,w,S)}function Qa(i,t,e,n){const r=n/(n+H0),a=sa(oi[e],t);i.x+=r*a.x,i.y+=r*a.y,i.z+=r*a.z}function Ud(i){const t=new Re(0,0,0,i);return Qa(t,i,Ut.Jupiter,d0),Qa(t,i,Ut.Saturn,f0),Qa(t,i,Ut.Uranus,p0),Qa(t,i,Ut.Neptune,m0),t}const y0=51,Nd=29200,Mr=146,ii=201,Vi=[[-73e4,[-26.118207232108,-14.376168177825,3.384402515299],[.0016339372163656,-.0027861699588508,-.0013585880229445]],[-700800,[41.974905202127,-.448502952929,-12.770351505989],[.00073458569351457,.0022785014891658,.00048619778602049]],[-671600,[14.706930780744,44.269110540027,9.353698474772],[-.00210001479998,.00022295915939915,.00070143443551414]],[-642400,[-29.441003929957,-6.43016153057,6.858481011305],[.00084495803960544,-.0030783914758711,-.0012106305981192]],[-613200,[39.444396946234,-6.557989760571,-13.913760296463],[.0011480029005873,.0022400006880665,.00035168075922288]],[-584e3,[20.2303809507,43.266966657189,7.382966091923],[-.0019754081700585,.00053457141292226,.00075929169129793]],[-554800,[-30.65832536462,2.093818874552,9.880531138071],[61010603013347e-18,-.0031326500935382,-.00099346125151067]],[-525600,[35.737703251673,-12.587706024764,-14.677847247563],[.0015802939375649,.0021347678412429,.00019074436384343]],[-496400,[25.466295188546,41.367478338417,5.216476873382],[-.0018054401046468,.0008328308359951,.00080260156912107]],[-467200,[-29.847174904071,10.636426313081,12.297904180106],[-.00063257063052907,-.0029969577578221,-.00074476074151596]],[-438e3,[30.774692107687,-18.236637015304,-14.945535879896],[.0020113162005465,.0019353827024189,-20937793168297e-19]],[-408800,[30.243153324028,38.656267888503,2.938501750218],[-.0016052508674468,.0011183495337525,.00083333973416824]],[-379600,[-27.288984772533,18.643162147874,14.023633623329],[-.0011856388898191,-.0027170609282181,-.00049015526126399]],[-350400,[24.519605196774,-23.245756064727,-14.626862367368],[.0024322321483154,.0016062008146048,-.00023369181613312]],[-321200,[34.505274805875,35.125338586954,.557361475637],[-.0013824391637782,.0013833397561817,.00084823598806262]],[-292e3,[-23.275363915119,25.818514298769,15.055381588598],[-.0016062295460975,-.0023395961498533,-.00024377362639479]],[-262800,[17.050384798092,-27.180376290126,-13.608963321694],[.0028175521080578,.0011358749093955,-.00049548725258825]],[-233600,[38.093671910285,30.880588383337,-1.843688067413],[-.0011317697153459,.0016128814698472,.00084177586176055]],[-204400,[-18.197852930878,31.932869934309,15.438294826279],[-.0019117272501813,-.0019146495909842,-19657304369835e-18]],[-175200,[8.528924039997,-29.618422200048,-11.805400994258],[.0031034370787005,.0005139363329243,-.00077293066202546]],[-146e3,[40.94685725864,25.904973592021,-4.256336240499],[-.00083652705194051,.0018129497136404,.0008156422827306]],[-116800,[-12.326958895325,36.881883446292,15.217158258711],[-.0021166103705038,-.001481442003599,.00017401209844705]],[-87600,[-.633258375909,-30.018759794709,-9.17193287495],[.0032016994581737,-.00025279858672148,-.0010411088271861]],[-58400,[42.936048423883,20.344685584452,-6.588027007912],[-.00050525450073192,.0019910074335507,.00077440196540269]],[-29200,[-5.975910552974,40.61180995846,14.470131723673],[-.0022184202156107,-.0010562361130164,.00033652250216211]],[0,[-9.875369580774,-27.978926224737,-5.753711824704],[.0030287533248818,-.0011276087003636,-.0012651326732361]],[29200,[43.958831986165,14.214147973292,-8.808306227163],[-.00014717608981871,.0021404187242141,.00071486567806614]],[58400,[.67813676352,43.094461639362,13.243238780721],[-.0022358226110718,-.00063233636090933,.00047664798895648]],[87600,[-18.282602096834,-23.30503958666,-1.766620508028],[.0025567245263557,-.0019902940754171,-.0013943491701082]],[116800,[43.873338744526,7.700705617215,-10.814273666425],[.00023174803055677,.0022402163127924,.00062988756452032]],[146e3,[7.392949027906,44.382678951534,11.629500214854],[-.002193281545383,-.00021751799585364,.00059556516201114]],[175200,[-24.981690229261,-16.204012851426,2.466457544298],[.001819398914958,-.0026765419531201,-.0013848283502247]],[204400,[42.530187039511,.845935508021,-12.554907527683],[.00065059779150669,.0022725657282262,.00051133743202822]],[233600,[13.999526486822,44.462363044894,9.669418486465],[-.0021079296569252,.00017533423831993,.00069128485798076]],[262800,[-29.184024803031,-7.371243995762,6.493275957928],[.00093581363109681,-.0030610357109184,-.0012364201089345]],[292e3,[39.831980671753,-6.078405766765,-13.909815358656],[.0011117769689167,.0022362097830152,.00036230548231153]],[321200,[20.294955108476,43.417190420251,7.450091985932],[-.0019742157451535,.00053102050468554,.00075938408813008]],[350400,[-30.66999230216,2.318743558955,9.973480913858],[45605107450676e-18,-.0031308219926928,-.00099066533301924]],[379600,[35.626122155983,-12.897647509224,-14.777586508444],[.0016015684949743,.0021171931182284,.00018002516202204]],[408800,[26.133186148561,41.232139187599,5.00640132622],[-.0017857704419579,.00086046232702817,.00080614690298954]],[438e3,[-29.57674022923,11.863535943587,12.631323039872],[-.00072292830060955,-.0029587820140709,-.000708242964503]],[467200,[29.910805787391,-19.159019294,-15.013363865194],[.0020871080437997,.0018848372554514,-38528655083926e-18]],[496400,[31.375957451819,38.050372720763,2.433138343754],[-.0015546055556611,.0011699815465629,.00083565439266001]],[525600,[-26.360071336928,20.662505904952,14.414696258958],[-.0013142373118349,-.0026236647854842,-.00042542017598193]],[554800,[22.599441488648,-24.508879898306,-14.484045731468],[.0025454108304806,.0014917058755191,-.00030243665086079]],[584e3,[35.877864013014,33.894226366071,-.224524636277],[-.0012941245730845,.0014560427668319,.00084762160640137]],[613200,[-21.538149762417,28.204068269761,15.321973799534],[-.001731211740901,-.0021939631314577,-.0001631691327518]],[642400,[13.971521374415,-28.339941764789,-13.083792871886],[.0029334630526035,.00091860931752944,-.00059939422488627]],[671600,[39.526942044143,28.93989736011,-2.872799527539],[-.0010068481658095,.001702113288809,.00083578230511981]],[700800,[-15.576200701394,34.399412961275,15.466033737854],[-.0020098814612884,-.0017191109825989,70414782780416e-18]],[73e4,[4.24325283709,-30.118201690825,-10.707441231349],[.0031725847067411,.0001609846120227,-.00090672150593868]]];class sn{constructor(t,e,n){this.x=t,this.y=e,this.z=n}clone(){return new sn(this.x,this.y,this.z)}ToAstroVector(t){return new Re(this.x,this.y,this.z,t)}static zero(){return new sn(0,0,0)}quadrature(){return this.x*this.x+this.y*this.y+this.z*this.z}add(t){return new sn(this.x+t.x,this.y+t.y,this.z+t.z)}sub(t){return new sn(this.x-t.x,this.y-t.y,this.z-t.z)}incr(t){this.x+=t.x,this.y+=t.y,this.z+=t.z}decr(t){this.x-=t.x,this.y-=t.y,this.z-=t.z}mul(t){return new sn(t*this.x,t*this.y,t*this.z)}div(t){return new sn(this.x/t,this.y/t,this.z/t)}mean(t){return new sn((this.x+t.x)/2,(this.y+t.y)/2,(this.z+t.z)/2)}neg(){return new sn(-this.x,-this.y,-this.z)}}class Yi{constructor(t,e,n){this.tt=t,this.r=e,this.v=n}clone(){return new Yi(this.tt,this.r,this.v)}sub(t){return new Yi(this.tt,this.r.sub(t.r),this.v.sub(t.v))}}function Fd(i){let[t,[e,n,r],[a,s,o]]=i;return new Yi(t,new sn(e,n,r),new sn(a,s,o))}function ts(i,t,e,n){const r=n/(n+H0),a=S0(oi[e],t);return i.r.incr(a.r.mul(r)),i.v.incr(a.v.mul(r)),a}function Zr(i,t,e){const n=e.sub(i),r=n.quadrature();return n.mul(t/(r*Math.sqrt(r)))}class ws{constructor(t){let e=new Yi(t,new sn(0,0,0),new sn(0,0,0));this.Jupiter=ts(e,t,Ut.Jupiter,d0),this.Saturn=ts(e,t,Ut.Saturn,f0),this.Uranus=ts(e,t,Ut.Uranus,p0),this.Neptune=ts(e,t,Ut.Neptune,m0),this.Jupiter.r.decr(e.r),this.Jupiter.v.decr(e.v),this.Saturn.r.decr(e.r),this.Saturn.v.decr(e.v),this.Uranus.r.decr(e.r),this.Uranus.v.decr(e.v),this.Neptune.r.decr(e.r),this.Neptune.v.decr(e.v),this.Sun=new Yi(t,e.r.mul(-1),e.v.mul(-1))}Acceleration(t){let e=Zr(t,H0,this.Sun.r);return e.incr(Zr(t,d0,this.Jupiter.r)),e.incr(Zr(t,f0,this.Saturn.r)),e.incr(Zr(t,p0,this.Uranus.r)),e.incr(Zr(t,m0,this.Neptune.r)),e}}class Ts{constructor(t,e,n,r){this.tt=t,this.r=e,this.v=n,this.a=r}clone(){return new Ts(this.tt,this.r.clone(),this.v.clone(),this.a.clone())}}class C2{constructor(t,e){this.bary=t,this.grav=e}}function ms(i,t,e,n){return new sn(t.x+i*(e.x+i*n.x/2),t.y+i*(e.y+i*n.y/2),t.z+i*(e.z+i*n.z/2))}function pl(i,t,e){return new sn(t.x+i*e.x,t.y+i*e.y,t.z+i*e.z)}function E0(i,t){const e=i-t.tt,n=new ws(i),r=ms(e,t.r,t.v,t.a),a=n.Acceleration(r).mean(t.a),s=ms(e,t.r,t.v,a),o=t.v.add(a.mul(e)),l=n.Acceleration(s),c=new Ts(i,s,o,l);return new C2(n,c)}const Od=[];function P2(i,t){const e=Math.floor(i);return e<0?0:e>=t?t-1:e}function w0(i){const t=Fd(i),e=new ws(t.tt),n=t.r.add(e.Sun.r),r=t.v.add(e.Sun.v),a=e.Acceleration(n),s=new Ts(t.tt,n,r,a);return new C2(e,s)}function zd(i,t){const e=Vi[0][0];if(t<e||t>Vi[y0-1][0])return null;const n=P2((t-e)/Nd,y0-1);if(!i[n]){const a=i[n]=[];a[0]=w0(Vi[n]).grav,a[ii-1]=w0(Vi[n+1]).grav;let s,o=a[0].tt;for(s=1;s<ii-1;++s)a[s]=E0(o+=Mr,a[s-1]).grav;o=a[ii-1].tt;var r=[];for(r[ii-1]=a[ii-1],s=ii-2;s>0;--s)r[s]=E0(o-=Mr,r[s+1]).grav;for(s=ii-2;s>0;--s){const l=s/(ii-1);a[s].r=a[s].r.mul(1-l).add(r[s].r.mul(l)),a[s].v=a[s].v.mul(1-l).add(r[s].v.mul(l)),a[s].a=a[s].a.mul(1-l).add(r[s].a.mul(l))}}return i[n]}function ml(i,t,e){let n=w0(i);const r=Math.ceil((t-n.grav.tt)/e);for(let a=0;a<r;++a)n=E0(a+1===r?t:n.grav.tt+e,n.grav);return n}function L2(i,t){let e,n,r;const a=zd(Od,i.tt);if(a){const s=P2((i.tt-a[0].tt)/Mr,ii-1),o=a[s],l=a[s+1],c=o.a.mean(l.a),u=ms(i.tt-o.tt,o.r,o.v,c),h=pl(i.tt-o.tt,o.v,c),f=ms(i.tt-l.tt,l.r,l.v,c),p=pl(i.tt-l.tt,l.v,c),g=(i.tt-o.tt)/Mr;e=u.mul(1-g).add(f.mul(g)),n=h.mul(1-g).add(p.mul(g))}else{let s;i.tt<Vi[0][0]?s=ml(Vi[0],i.tt,-Mr):s=ml(Vi[y0-1],i.tt,+Mr),e=s.grav.r,n=s.grav.v,r=s.bary}return r||(r=new ws(i.tt)),e=e.sub(r.Sun.r),n=n.sub(r.Sun.v),new Ei(e.x,e.y,e.z,n.x,n.y,n.z,i)}function da(i,t){var e=ze(t);if(i in oi)return sa(oi[i],e);if(i===Ut.Pluto){const s=L2(e);return new Re(s.x,s.y,s.z,e)}if(i===Ut.Sun)return new Re(0,0,0,e);if(i===Ut.Moon){var n=sa(oi.Earth,e),r=Ir(e);return new Re(n.x+r.x,n.y+r.y,n.z+r.z,e)}if(i===Ut.EMB){const s=sa(oi.Earth,e),o=Ir(e),l=1+g2;return new Re(s.x+o.x/l,s.y+o.y/l,s.z+o.z/l,e)}if(i===Ut.SSB)return Ud(e);const a=G0(i);if(a){const s=new Es(a.dec,15*a.ra,a.dist);return I2(s,e)}throw`HelioVector: Unknown body "${i}"`}function Bd(i,t){let e=t,n=0;for(let r=0;r<10;++r){const a=i(e),s=a.Length()/f2;if(s>1)throw"Object is too distant for light-travel solver.";const o=t.AddDays(-s);if(n=Math.abs(o.tt-e.tt),n<1e-9)return a;e=o}throw`Light-travel time solver did not converge: dt = ${n}`}class kd{constructor(t,e,n,r){this.observerBody=t,this.targetBody=e,this.aberration=n,this.observerPos=r}Position(t){this.aberration&&(this.observerPos=da(this.observerBody,t));const e=da(this.targetBody,t);return new Re(e.x-this.observerPos.x,e.y-this.observerPos.y,e.z-this.observerPos.z,t)}}function Hd(i,t,e,n){const r=ze(i);if(G0(e)){const o=da(e,r);{const l=Vd(t,r),c=new Re(o.x-l.x,o.y-l.y,o.z-l.z,r),u=f2/c.Length();return new Re(c.x+l.vx/u,c.y+l.vy/u,c.z+l.vz/u,r)}}let a;a=new Re(0,0,0,r);const s=new kd(t,e,n,a);return Bd(o=>s.Position(o),r)}function T0(i,t,e){const n=ze(t);switch(i){case Ut.Earth:return new Re(0,0,0,n);case Ut.Moon:return Ir(n);default:const r=Hd(n,Ut.Earth,i,e);return r.t=n,r}}function Gd(i,t){return new Ei(i.r.x,i.r.y,i.r.z,i.v.x,i.v.y,i.v.z,t)}function Vd(i,t){const e=ze(t);switch(i){case Ut.Sun:return new Ei(0,0,0,0,0,0,e);case Ut.SSB:const n=new ws(e.tt);return new Ei(-n.Sun.r.x,-n.Sun.r.y,-n.Sun.r.z,-n.Sun.v.x,-n.Sun.v.y,-n.Sun.v.z,e);case Ut.Mercury:case Ut.Venus:case Ut.Earth:case Ut.Mars:case Ut.Jupiter:case Ut.Saturn:case Ut.Uranus:case Ut.Neptune:const r=S0(oi[i],e.tt);return Gd(r,e);case Ut.Pluto:return L2(e);case Ut.Moon:case Ut.EMB:const a=S0(oi.Earth,e.tt),s=i==Ut.Moon?b2(e):Id(e);return new Ei(s.x+a.r.x,s.y+a.r.y,s.z+a.r.z,s.vx+a.v.x,s.vy+a.v.y,s.vz+a.v.z,e);default:if(G0(i)){const o=da(i,e);return new Ei(o.x,o.y,o.z,0,0,0,e)}throw`HelioState: Unsupported body "${i}"`}}function Wd(i,t,e,n){let r,a=0,s=0,o=0;switch(i){case Ut.Mercury:r=-.6,a=4.98,s=-4.88,o=3.02;break;case Ut.Venus:t<163.6?(r=-4.47,a=1.03,s=.57,o=.13):(r=.98,a=-1.02);break;case Ut.Mars:r=-1.52,a=1.6;break;case Ut.Jupiter:r=-9.4,a=.5;break;case Ut.Uranus:r=-7.19,a=.25;break;case Ut.Neptune:r=-6.87;break;case Ut.Pluto:r=-1,a=4;break;default:throw`VisualMagnitude: unsupported body ${i}`}const l=t/100;let c=r+l*(a+l*(s+l*o));return c+=5*Math.log10(e*n),c}function Xd(i,t,e,n,r){const a=Ld(n),s=Bt*28.06,o=Bt*(169.51+382e-7*r.tt),l=Bt*a.elat,c=Bt*a.elon,u=Math.asin(Math.sin(l)*Math.cos(s)-Math.cos(l)*Math.sin(s)*Math.sin(c-o)),h=Math.sin(Math.abs(u));let f=-9+.044*i;return f+=h*(-2.6+1.2*h),f+=5*Math.log10(t*e),{mag:f,ring_tilt:Xn*u}}function qd(i,t,e){let n=i*Bt,r=n*n,a=r*r,s=-12.717+1.49*Math.abs(n)+.0431*a;const o=385000.6/Bi;let l=e/o;return s+=5*Math.log10(t*l),s}class Yd{constructor(t,e,n,r,a,s,o,l){this.time=t,this.mag=e,this.phase_angle=n,this.helio_dist=r,this.geo_dist=a,this.gc=s,this.hc=o,this.ring_tilt=l,this.phase_fraction=(1+Math.cos(Bt*n))/2}}function gl(i,t){if(i===Ut.Earth)throw"The illumination of the Earth is not defined.";const e=ze(t),n=sa(oi.Earth,e);let r,a,s,o;i===Ut.Sun?(s=new Re(-n.x,-n.y,-n.z,e),a=new Re(0,0,0,e),r=0):(i===Ut.Moon?(s=Ir(e),a=new Re(n.x+s.x,n.y+s.y,n.z+s.z,e)):(a=da(i,t),s=new Re(a.x-n.x,a.y-n.y,a.z-n.z,e)),r=v2(s,a));let l=s.Length(),c=a.Length(),u;if(i===Ut.Sun)o=fd+5*Math.log10(l);else if(i===Ut.Moon)o=qd(r,c,l);else if(i===Ut.Saturn){const h=Xd(r,c,l,s,e);o=h.mag,u=h.ring_tilt}else o=Wd(i,r,c,l);return new Yd(e,o,r,c,l,s,a,u)}var vl;(function(i){i[i.Pericenter=0]="Pericenter",i[i.Apocenter=1]="Apocenter"})(vl||(vl={}));function D2(i){return new bi([[i.rot[0][0],i.rot[1][0],i.rot[2][0]],[i.rot[0][1],i.rot[1][1],i.rot[2][1]],[i.rot[0][2],i.rot[1][2],i.rot[2][2]]])}function As(i,t){return new bi([[t.rot[0][0]*i.rot[0][0]+t.rot[1][0]*i.rot[0][1]+t.rot[2][0]*i.rot[0][2],t.rot[0][1]*i.rot[0][0]+t.rot[1][1]*i.rot[0][1]+t.rot[2][1]*i.rot[0][2],t.rot[0][2]*i.rot[0][0]+t.rot[1][2]*i.rot[0][1]+t.rot[2][2]*i.rot[0][2]],[t.rot[0][0]*i.rot[1][0]+t.rot[1][0]*i.rot[1][1]+t.rot[2][0]*i.rot[1][2],t.rot[0][1]*i.rot[1][0]+t.rot[1][1]*i.rot[1][1]+t.rot[2][1]*i.rot[1][2],t.rot[0][2]*i.rot[1][0]+t.rot[1][2]*i.rot[1][1]+t.rot[2][2]*i.rot[1][2]],[t.rot[0][0]*i.rot[2][0]+t.rot[1][0]*i.rot[2][1]+t.rot[2][0]*i.rot[2][2],t.rot[0][1]*i.rot[2][0]+t.rot[1][1]*i.rot[2][1]+t.rot[2][1]*i.rot[2][2],t.rot[0][2]*i.rot[2][0]+t.rot[1][2]*i.rot[2][1]+t.rot[2][2]*i.rot[2][2]]])}function I2(i,t){t=ze(t);const e=i.lat*Bt,n=i.lon*Bt,r=i.dist*Math.cos(e);return new Re(r*Math.cos(n),r*Math.sin(n),i.dist*Math.sin(e),t)}function U2(i){const t=$d(i);return new g0(t.lon/15,t.lat,t.dist,i)}function $d(i){const t=i.x*i.x+i.y*i.y,e=Math.sqrt(t+i.z*i.z);let n,r;if(t===0){if(i.z===0)throw"Zero-length vector not allowed.";r=0,n=i.z<0?-90:90}else r=Xn*Math.atan2(i.y,i.x),r<0&&(r+=360),n=Xn*Math.atan2(i.z,Math.sqrt(t));return new Es(n,r,e)}function Kd(i,t){let e;if(Fe(t),t<-90||t>90)return 0;{let n=t;n<-1&&(n=-1),e=1.02/Math.tan((n+10.3/(n+5.11))*Bt)/60,t<-1&&(e*=(t+90)/89)}return e}function Y0(i,t){return new Re(i.rot[0][0]*t.x+i.rot[1][0]*t.y+i.rot[2][0]*t.z,i.rot[0][1]*t.x+i.rot[1][1]*t.y+i.rot[2][1]*t.z,i.rot[0][2]*t.x+i.rot[1][2]*t.y+i.rot[2][2]*t.z,t.t)}function Zd(i){i=ze(i);const t=V0(i,Ve.From2000),e=X0(i,Ve.From2000);return As(t,e)}function Jd(i){i=ze(i);const t=X0(i,Ve.Into2000),e=V0(i,Ve.Into2000);return As(t,e)}function jd(i,t){i=ze(i);const e=Math.sin(t.latitude*Bt),n=Math.cos(t.latitude*Bt),r=Math.sin(t.longitude*Bt),a=Math.cos(t.longitude*Bt),s=[n*a,n*r,e],o=[-e*a,-e*r,n],l=[r,-a,0],c=-15*W0(i),u=Tr(c,s),h=Tr(c,o),f=Tr(c,l);return new bi([[h[0],f[0],u[0]],[h[1],f[1],u[1]],[h[2],f[2],u[2]]])}function Qd(i,t){const e=jd(i,t);return D2(e)}function N2(i,t){i=ze(i);const e=Qd(i,t),n=Jd(i);return As(e,n)}function tf(i,t){const e=N2(i,t);return D2(e)}function ef(){return new bi([[-.0548624779711344,.4941095946388765,-.8676668813529025],[-.8734572784246782,-.4447938112296831,-.1980677870294097],[-.483800052994852,.7470034631630423,.4559861124470794]])}var _l;(function(i){i.Penumbral="penumbral",i.Partial="partial",i.Annular="annular",i.Total="total"})(_l||(_l={}));var xl;(function(i){i[i.Invalid=0]="Invalid",i[i.Ascending=1]="Ascending",i[i.Descending=-1]="Descending"})(xl||(xl={}));class F2{constructor(t,e,n,r){this.ra=t,this.dec=e,this.spin=n,this.north=r}}function nf(i){const t=ha([0,0,1],i,Ve.Into2000),e=ua(t,i,Ve.Into2000),n=new Re(e[0],e[1],e[2],i),r=U2(n),a=190.41375788700253+360.9856122880876*i.ut;return new F2(r.ra,r.dec,a,n)}function rf(i,t){const e=ze(t),n=e.tt,r=n/36525;let a,s,o;switch(i){case Ut.Sun:a=286.13,s=63.87,o=84.176+14.1844*n;break;case Ut.Mercury:a=281.0103-.0328*r,s=61.4155-.0049*r,o=329.5988+6.1385108*n+.01067257*Math.sin(Bt*(174.7910857+4.092335*n))-.00112309*Math.sin(Bt*(349.5821714+8.18467*n))-1104e-7*Math.sin(Bt*(164.3732571+12.277005*n))-2539e-8*Math.sin(Bt*(339.1643429+16.36934*n))-571e-8*Math.sin(Bt*(153.9554286+20.461675*n));break;case Ut.Venus:a=272.76,s=67.16,o=160.2-1.4813688*n;break;case Ut.Earth:return nf(e);case Ut.Moon:const f=Bt*(125.045-.0529921*n),p=Bt*(250.089-.1059842*n),g=Bt*(260.008+13.0120009*n),v=Bt*(176.625+13.3407154*n),m=Bt*(357.529+.9856003*n),d=Bt*(311.589+26.4057084*n),w=Bt*(134.963+13.064993*n),S=Bt*(276.617+.3287146*n),_=Bt*(34.226+1.7484877*n),L=Bt*(15.134-.1589763*n),R=Bt*(119.743+.0036096*n),b=Bt*(239.961+.1643573*n),U=Bt*(25.053+12.9590088*n);a=269.9949+.0031*r-3.8787*Math.sin(f)-.1204*Math.sin(p)+.07*Math.sin(g)-.0172*Math.sin(v)+.0072*Math.sin(d)-.0052*Math.sin(L)+.0043*Math.sin(U),s=66.5392+.013*r+1.5419*Math.cos(f)+.0239*Math.cos(p)-.0278*Math.cos(g)+.0068*Math.cos(v)-.0029*Math.cos(d)+9e-4*Math.cos(w)+8e-4*Math.cos(L)-9e-4*Math.cos(U),o=38.3213+(13.17635815-14e-13*n)*n+3.561*Math.sin(f)+.1208*Math.sin(p)-.0642*Math.sin(g)+.0158*Math.sin(v)+.0252*Math.sin(m)-.0066*Math.sin(d)-.0047*Math.sin(w)-.0046*Math.sin(S)+.0028*Math.sin(_)+.0052*Math.sin(L)+.004*Math.sin(R)+.0019*Math.sin(b)-.0044*Math.sin(U);break;case Ut.Mars:a=317.269202-.10927547*r+68e-6*Math.sin(Bt*(198.991226+19139.4819985*r))+238e-6*Math.sin(Bt*(226.292679+38280.8511281*r))+52e-6*Math.sin(Bt*(249.663391+57420.7251593*r))+9e-6*Math.sin(Bt*(266.18351+76560.636795*r))+.419057*Math.sin(Bt*(79.398797+.5042615*r)),s=54.432516-.05827105*r+51e-6*Math.cos(Bt*(122.433576+19139.9407476*r))+141e-6*Math.cos(Bt*(43.058401+38280.8753272*r))+31e-6*Math.cos(Bt*(57.663379+57420.7517205*r))+5e-6*Math.cos(Bt*(79.476401+76560.6495004*r))+1.591274*Math.cos(Bt*(166.325722+.5042615*r)),o=176.049863+350.891982443297*n+145e-6*Math.sin(Bt*(129.071773+19140.0328244*r))+157e-6*Math.sin(Bt*(36.352167+38281.0473591*r))+4e-5*Math.sin(Bt*(56.668646+57420.929536*r))+1e-6*Math.sin(Bt*(67.364003+76560.2552215*r))+1e-6*Math.sin(Bt*(104.79268+95700.4387578*r))+.584542*Math.sin(Bt*(95.391654+.5042615*r));break;case Ut.Jupiter:const E=Bt*(99.360714+4850.4046*r),M=Bt*(175.895369+1191.9605*r),C=Bt*(300.323162+262.5475*r),H=Bt*(114.012305+6070.2476*r),G=Bt*(49.511251+64.3*r);a=268.056595-.006499*r+117e-6*Math.sin(E)+938e-6*Math.sin(M)+.001432*Math.sin(C)+3e-5*Math.sin(H)+.00215*Math.sin(G),s=64.495303+.002413*r+5e-5*Math.cos(E)+404e-6*Math.cos(M)+617e-6*Math.cos(C)-13e-6*Math.cos(H)+926e-6*Math.cos(G),o=284.95+870.536*n;break;case Ut.Saturn:a=40.589-.036*r,s=83.537-.004*r,o=38.9+810.7939024*n;break;case Ut.Uranus:a=257.311,s=-15.175,o=203.81-501.1600928*n;break;case Ut.Neptune:const K=Bt*(357.85+52.316*r);a=299.36+.7*Math.sin(K),s=43.46-.51*Math.cos(K),o=249.978+541.1397757*n-.48*Math.sin(K);break;case Ut.Pluto:a=132.993,s=-6.163,o=302.695+56.3625225*n;break;default:throw`Invalid body: ${i}`}const l=s*Bt,c=a*Bt,u=Math.cos(l),h=new Re(u*Math.cos(c),u*Math.sin(c),Math.sin(l),e);return new F2(a/15,s,o,h)}const Tt=Math.PI/180,es=23.4393*Tt,O2=5.145*Tt,$i={lat:35.012949,lon:135.780958};function bs(i=$i.lat,t=$i.lon){return new T2(i,t,0)}const z2=(i,t,e)=>Math.min(e,Math.max(t,i));function $0(i,t,e,n){const r=Cd(i,t,e,n,"normal");return{alt:r.altitude*Tt,az:r.azimuth*Tt}}function af(i,t){const e=ze(i),n=Zd(e);return(r,a)=>{const s=I2(new Es(a,r*15,1),e),o=U2(Y0(n,s));return $0(i,t,o.ra,o.dec)}}function sf(i,t){const e=ze(i),n=As(N2(e,t),ef()),r=(l,c,u)=>{const h=Y0(n,new Re(-u,-l,c,e));return[h.x,h.y,h.z]},a=r(1,0,0),s=r(0,1,0),o=r(0,0,1);return[0,1,2].map(l=>[a[l],s[l],o[l]])}function of(i,t){const e=ze(i),n=rf(Ut.Moon,e),r=n.ra*15*Tt,a=n.dec*Tt,s=n.spin*Tt,o=[Math.cos(r+Math.PI/2),Math.sin(r+Math.PI/2),0],l=[Math.cos(a)*Math.cos(r),Math.cos(a)*Math.sin(r),Math.sin(a)],c=(S,_)=>[S[1]*_[2]-S[2]*_[1],S[2]*_[0]-S[0]*_[2],S[0]*_[1]-S[1]*_[0]],u=c(l,o),h=[0,1,2].map(S=>Math.cos(s)*o[S]+Math.sin(s)*u[S]),f=c(l,h),p=tf(e,t),g=S=>{const _=Y0(p,new Re(S[0],S[1],S[2],e));return[-_.y,_.z,-_.x]},v=g(h),m=g(f),d=g(l),w=[v,d,m.map(S=>-S)];return[0,1,2].map(S=>[w[0][S],w[1][S],w[2][S]])}function lf(i,t){const e=i*Tt,n=t*Tt,r=Math.cos(n)*Math.cos(e),a=Math.cos(n)*Math.sin(e),s=Math.sin(n),o=a*Math.cos(es)-s*Math.sin(es),l=a*Math.sin(es)+s*Math.cos(es);return{ra:(Math.atan2(o,r)/Tt/15+24)%24,dec:Math.asin(z2(l,-1,1))/Tt}}function cf(i,t,e){const n=Pd(e,i,t,!0,!0);return $0(i,t,n.ra,n.dec)}function uf(i,t){const e=T0(Ut.Moon,i,!0);let n;return"body"in t?n=Ut[t.body]:(_d(Ut.Star1,t.ra,t.dec,1e3),n=Ut.Star1),v2(e,T0(n,i,!0))}function hf(i){const t=Dd(i),e=z2(Math.sin(t.lat*Tt)/Math.sin(O2),-1,1);return t.lon-Math.asin(e)/Tt}function df(i,t){return Math.asin(Math.sin(O2)*Math.sin((i-t)*Tt))/Tt}function ff(i,t=bs()){return{altAzFromRaDec:(e,n)=>$0(i,t,e,n),altAzFromJ2000:af(i,t),bodyAltAz:e=>cf(i,t,e),eclToEq:lf,whitePathBeta:df,nodeLon:hf(i)}}const A0=[{name:"Alpheratz",hr:15,ra:.13981,dec:29.0906,mag:2.06},{name:"Ankaa",hr:99,ra:.43806,dec:-42.3061,mag:2.39},{name:"Schedar",hr:168,ra:.67514,dec:56.5372,mag:2.23},{name:"Diphda",hr:188,ra:.7265,dec:-17.9867,mag:2.04},{name:"Achernar",hr:472,ra:1.62858,dec:-57.2367,mag:.46},{name:"Hamal",hr:617,ra:2.11956,dec:23.4625,mag:2},{name:"Acamar",hr:897,ra:2.97103,dec:-40.3047,mag:2.91},{name:"Menkar",hr:911,ra:3.038,dec:4.0897,mag:2.53},{name:"Mirfak",hr:1017,ra:3.40539,dec:49.8611,mag:1.79},{name:"Aldebaran",hr:1457,ra:4.59867,dec:16.5092,mag:.85},{name:"Rigel",hr:1713,ra:5.24231,dec:-8.2017,mag:.12},{name:"Capella",hr:1708,ra:5.27817,dec:45.9981,mag:.08},{name:"Bellatrix",hr:1790,ra:5.41886,dec:6.3497,mag:1.64},{name:"Elnath",hr:1791,ra:5.43819,dec:28.6075,mag:1.65},{name:"Alnilam",hr:1903,ra:5.60356,dec:-1.2019,mag:1.7},{name:"Betelgeuse",hr:2061,ra:5.91953,dec:7.4069,mag:.5},{name:"Canopus",hr:2326,ra:6.39919,dec:-52.6958,mag:-.72},{name:"Sirius",hr:2491,ra:6.75247,dec:-16.7161,mag:-1.46},{name:"Adhara",hr:2618,ra:6.97708,dec:-28.9722,mag:1.5},{name:"Procyon",hr:2943,ra:7.65503,dec:5.225,mag:.38},{name:"Pollux",hr:2990,ra:7.75525,dec:28.0261,mag:1.14},{name:"Avior",hr:3307,ra:8.37522,dec:-59.5097,mag:1.86},{name:"Suhail",hr:3634,ra:9.13328,dec:-43.4325,mag:2.21},{name:"Miaplacidus",hr:3685,ra:9.22,dec:-69.7172,mag:1.68},{name:"Alphard",hr:3748,ra:9.45978,dec:-8.6586,mag:1.98},{name:"Regulus",hr:3982,ra:10.13953,dec:11.9672,mag:1.35},{name:"Dubhe",hr:4301,ra:11.06214,dec:61.7508,mag:1.79},{name:"Denebola",hr:4534,ra:11.81767,dec:14.5719,mag:2.14},{name:"Gienah",hr:4662,ra:12.26344,dec:-17.5419,mag:2.59},{name:"Acrux",hr:4730,ra:12.44331,dec:-63.0992,mag:.76},{name:"Gacrux",hr:4763,ra:12.51942,dec:-57.1133,mag:1.63},{name:"Alioth",hr:4905,ra:12.90047,dec:55.9597,mag:1.77},{name:"Spica",hr:5056,ra:13.41989,dec:-11.1614,mag:.98},{name:"Alkaid",hr:5191,ra:13.79233,dec:49.3133,mag:1.86},{name:"Hadar",hr:5267,ra:14.06372,dec:-60.3731,mag:.61},{name:"Menkent",hr:5288,ra:14.11139,dec:-36.37,mag:2.06},{name:"Arcturus",hr:5340,ra:14.26103,dec:19.1825,mag:-.04},{name:"Rigil Kentaurus",hr:5459,ra:14.65997,dec:-60.8353,mag:-.29},{name:"Zubenelgenubi",hr:5531,ra:14.84797,dec:-16.0417,mag:2.75},{name:"Kochab",hr:5563,ra:14.84508,dec:74.1556,mag:2.08},{name:"Alphecca",hr:5793,ra:15.57814,dec:26.7147,mag:2.23},{name:"Antares",hr:6134,ra:16.49011,dec:-26.4319,mag:.96},{name:"Atria",hr:6217,ra:16.81108,dec:-69.0278,mag:1.92},{name:"Sabik",hr:6378,ra:17.17297,dec:-15.7247,mag:2.43},{name:"Shaula",hr:6527,ra:17.56014,dec:-37.1039,mag:1.63},{name:"Rasalhague",hr:6556,ra:17.58225,dec:12.56,mag:2.08},{name:"Eltanin",hr:6705,ra:17.94344,dec:51.4889,mag:2.23},{name:"Kaus Australis",hr:6879,ra:18.40286,dec:-34.3847,mag:1.85},{name:"Vega",hr:7001,ra:18.61564,dec:38.7836,mag:.03},{name:"Nunki",hr:7121,ra:18.92108,dec:-26.2967,mag:2.02},{name:"Altair",hr:7557,ra:19.84639,dec:8.8683,mag:.77},{name:"Peacock",hr:7790,ra:20.42747,dec:-56.735,mag:1.94},{name:"Deneb",hr:7924,ra:20.69053,dec:45.2803,mag:1.25},{name:"Enif",hr:8308,ra:21.73644,dec:9.875,mag:2.39},{name:"Al Na'ir",hr:8425,ra:22.13722,dec:-46.9611,mag:1.74},{name:"Fomalhaut",hr:8728,ra:22.96086,dec:-29.6222,mag:1.16},{name:"Markab",hr:8781,ra:23.07936,dec:15.2053,mag:2.49},{name:"Polaris",hr:424,ra:2.53019,dec:89.2642,mag:2.02}],pf=""+new URL("lroc_color_poles_1k-RRPljFYe.jpg",import.meta.url).href,mf=[-.11,1.09,1.17,1.02,-.16,1.15,.14,1.64,.48,1.54,-.03,.8,-.22,-.13,-.19,1.85,.15,0,-.21,.42,1,1.28,1.66,0,1.44,-.11,1.07,.09,-.11,-.24,1.59,-.02,-.23,-.19,-.23,1.01,1.23,.71,.15,1.47,-.02,1.83,1.44,.06,-.22,.15,1.52,-.03,0,-.22,.22,-.2,.09,1.53,-.13,.09,-.04,.6],gf=JSON.parse("[[12.79533,-59.6886,1.25,-0.23],[8.15889,-47.3367,1.78,-0.22],[7.13986,-26.3933,1.84,0.68],[17.622,-42.9978,1.87,0.4],[5.99214,44.9475,1.9,0.03],[6.62853,16.3992,1.93,0],[8.74506,-54.7083,1.96,0.04],[6.37833,-17.9558,1.98,-0.23],[7.57667,31.8883,1.98,0.03],[15.99172,25.9203,2,0.1],[5.67931,-1.9428,2.05,-0.21],[1.16219,35.6206,2.06,1.58],[5.79594,-9.6697,2.06,-0.17],[22.71114,-46.8847,2.1,1.6],[3.13614,40.9556,2.12,-0.05],[12.69194,-48.9597,2.17,-0.01],[20.37047,40.2567,2.2,0.68],[5.53344,-0.2992,2.23,-0.22],[8.05975,-40.0033,2.25,-0.26],[9.28483,-59.2753,2.25,0.18],[2.065,42.3297,2.26,1.37],[0.15297,59.1497,2.27,0.34],[13.39875,54.9253,2.27,0.02],[16.83606,-34.2933,2.29,1.15],[13.66478,-53.4664,2.3,-0.22],[14.69883,-47.3883,2.3,-0.2],[14.59178,-42.1578,2.31,-0.19],[16.00556,-22.6217,2.32,-0.12],[11.03069,56.3825,2.37,-0.02],[17.70814,-39.03,2.41,-0.22],[23.06292,28.0828,2.42,1.67],[11.89717,53.6947,2.44,0],[21.30967,62.5856,2.44,0.22],[7.40158,-29.3031,2.45,-0.08],[20.77019,33.9703,2.46,1.03],[0.94514,60.7167,2.47,-0.15],[9.36856,-55.0108,2.5,-0.18],[13.92567,-47.2883,2.55,-0.22],[11.23514,20.5236,2.56,0.12],[16.61931,-10.5672,2.56,0.02],[5.5455,-17.8222,2.58,0.21],[12.13931,-50.7225,2.6,-0.12],[19.04353,-29.8803,2.6,0.08],[10.33286,19.8417,2.61,1.15],[15.28344,-9.3831,2.61,-0.11],[5.99536,37.2125,2.62,-0.08],[16.09061,-19.8056,2.62,-0.07],[1.91067,20.8081,2.64,0.13],[5.66081,-34.0742,2.64,-0.12],[12.57311,-23.3967,2.65,0.89],[15.73781,6.4256,2.65,1.17],[1.43028,60.2353,2.68,0.13],[13.91142,18.3978,2.68,0.58],[14.97553,-43.1339,2.68,-0.22],[4.94989,33.1661,2.69,1.53],[10.7795,-49.42,2.69,0.9],[12.61972,-69.1356,2.69,-0.2],[17.51272,-37.2958,2.69,-0.22],[7.28572,-37.0975,2.7,1.62],[14.74978,27.0742,2.7,0.97],[18.34992,-29.8281,2.7,1.38],[19.771,10.6133,2.72,1.52],[16.23908,-3.6944,2.74,1.58],[16.39986,61.5142,2.74,0.91],[13.34328,-36.7122,2.75,0.04],[10.71594,-64.3944,2.76,-0.22],[5.59056,-5.91,2.77,-0.24],[16.50367,21.4897,2.77,0.94],[17.72456,4.5672,2.77,1.16],[15.58569,-41.1669,2.78,-0.2],[5.13083,-5.0864,2.79,0.13],[17.50722,52.3014,2.79,0.98],[0.42919,-77.2542,2.8,0.62],[12.25242,-58.7489,2.8,-0.23],[8.12572,-24.3042,2.81,0.43],[16.68811,31.6031,2.81,0.65],[18.46617,-25.4217,2.81,1.04],[16.59806,-28.2161,2.82,-0.25],[0.22061,15.1836,2.83,-0.23],[13.03628,10.9592,2.83,0.94],[5.47075,-20.7594,2.84,0.82],[3.90219,31.8836,2.85,0.12],[15.91903,-63.4306,2.85,0.29],[17.42167,-55.53,2.85,1.46],[1.9795,-61.5697,2.86,0.28],[22.30836,-60.2597,2.86,1.39],[3.79142,24.105,2.87,-0.09],[19.74958,45.1308,2.87,-0.03],[21.784,-16.1272,2.87,0.29],[6.38267,22.5136,2.88,1.64],[7.57667,31.8886,2.88,0.04],[3.96422,40.0103,2.89,-0.18],[15.31517,-68.6794,2.89,0],[15.98086,-26.1142,2.89,-0.19],[16.35314,-25.5928,2.89,0.13],[19.16272,-21.0236,2.89,0.35],[7.4525,8.2894,2.9,-0.09],[12.93381,38.3183,2.9,-0.12],[21.52597,-5.5711,2.91,0.83],[3.07994,53.5064,2.93,0.7],[6.83228,-50.6147,2.93,1.2],[22.71669,30.2214,2.94,0.86],[3.96717,-13.5086,2.95,1.59],[12.49775,-16.5156,2.95,-0.05],[17.53069,-49.8761,2.95,-0.17],[22.09639,-0.3197,2.96,0.98],[6.73219,25.1311,2.98,1.4],[9.76419,23.7742,2.98,0.8],[5.03281,43.8233,2.99,0.54],[18.09681,-30.4242,2.99,1],[19.09017,13.8633,2.99,0.01],[2.15906,34.9872,3,0.14],[5.62742,21.1425,3,-0.19],[12.16875,-22.6197,3,1.33],[13.31536,-23.1717,3,0.92],[3.71542,47.7875,3.01,-0.13],[9.78503,-65.0719,3.01,0.28],[11.16106,44.4986,3.01,1.14],[21.89881,-37.365,3.01,-0.12],[6.33856,-30.0633,3.02,-0.19],[7.05042,-23.8333,3.02,-0.08],[14.53464,38.3083,3.03,0.19],[17.79308,-40.1269,3.03,0.51],[2.32242,-2.9775,3.04,1.42],[13.82694,-42.4739,3.04,-0.17],[10.37214,41.4994,3.05,1.59],[12.77136,-68.1081,3.05,-0.18],[15.34547,71.8339,3.05,0.05],[19.20925,67.6617,3.07,1],[16.8645,-38.0475,3.08,-0.2],[19.51203,27.9597,3.08,1.13],[20.35019,-14.7814,3.08,0.79],[8.92322,5.9456,3.11,1],[10.82708,-16.1936,3.11,1.25],[18.29378,-36.7617,3.11,1.56],[20.62611,-47.2914,3.11,1],[5.84933,-35.7683,3.12,1.16],[9.35092,34.3925,3.13,1.55],[9.52036,-57.0344,3.13,1.55],[11.59633,-63.0197,3.13,-0.04],[14.98603,-42.1042,3.13,-0.2],[16.977,-55.9903,3.13,1.6],[8.98678,48.0417,3.14,0.19],[17.25053,24.8392,3.14,0.08],[17.25078,36.8092,3.16,1.44],[5.10858,41.2344,3.17,-0.18],[6.62936,-43.1961,3.17,-0.11],[9.54761,51.6772,3.17,0.46],[17.14644,65.7147,3.17,-0.12],[18.76094,-26.9908,3.17,-0.11],[4.83067,6.9614,3.19,0.45],[5.09103,-22.3711,3.19,1.46],[14.70844,-64.9753,3.19,0.24],[16.96114,9.375,3.2,1.15],[21.21561,30.2269,3.2,0.99],[17.83097,-37.0433,3.21,1.17],[23.65578,77.6325,3.21,1.03],[15.35619,-40.6475,3.22,-0.22],[20.18842,-0.8214,3.23,-0.07],[21.47767,70.5608,3.23,-0.22],[3.78731,-74.2389,3.24,1.62],[16.30536,-4.6925,3.24,0.96],[18.98239,32.6894,3.24,-0.05],[7.48717,-43.3014,3.25,1.51],[18.35517,-2.8989,3.26,0.94],[0.65547,30.8608,3.27,1.28],[4.56661,-55.045,3.27,-0.1],[6.80317,-61.9414,3.27,0.21],[14.10619,-26.6825,3.27,1.12],[17.36683,-24.9994,3.27,-0.22],[22.91083,-15.8208,3.27,0.05],[6.24794,22.5067,3.28,1.6],[15.06783,-25.2819,3.29,1.7],[15.4155,58.9661,3.29,1.16],[1.10139,-46.7186,3.31,0.89],[5.21553,-16.2056,3.31,-0.11],[12.25711,57.0325,3.31,0.08],[10.22894,-70.0381,3.32,-0.08],[10.53372,-61.6853,3.32,-0.09],[19.11567,-27.6706,3.32,1.19],[17.20256,-43.2392,3.33,0.41],[7.82158,-24.8597,3.34,1.24],[11.23733,15.4294,3.34,-0.01],[17.42322,-56.3775,3.34,-0.13],[17.98378,-9.7736,3.34,0.99],[4.24042,-62.4739,3.35,0.91],[22.18092,58.2011,3.35,1.57],[5.40794,-2.3969,3.36,-0.17],[6.75483,12.8956,3.36,0.43],[8.50442,60.7181,3.36,0.84],[19.42497,3.1147,3.36,0.32],[13.57822,-0.5958,3.37,0.11],[15.37803,-44.6894,3.37,-0.18],[1.90658,63.67,3.38,-0.15],[8.77961,6.4189,3.38,0.68],[12.92672,3.3975,3.38,1.58],[3.08628,38.8403,3.39,1.65],[4.47769,15.8708,3.4,0.18],[10.28472,-61.3322,3.4,1.54],[22.69103,10.8314,3.4,-0.09],[1.47275,-43.3183,3.41,1.57],[1.88469,29.5789,3.41,0.49],[13.82508,-41.6878,3.41,-0.22],[15.20475,-52.0992,3.41,0.92],[16.00203,-38.3969,3.41,-0.22],[17.77431,27.7206,3.42,0.75],[20.74931,-66.2031,3.42,0.16],[20.75483,61.8389,3.43,0.92],[0.81833,57.8158,3.44,0.57],[9.18278,-58.9669,3.44,-0.19],[10.27817,23.4172,3.44,0.31],[19.10414,-4.8825,3.44,-0.09],[1.14317,-10.1822,3.45,1.16],[10.28494,42.9144,3.45,0.03],[18.83467,33.3628,3.45,0],[2.72167,3.2358,3.47,0.09],[4.01133,12.4903,3.47,-0.12],[7.02864,-27.9347,3.47,1.73],[7.94631,-52.9822,3.47,-0.18],[15.25839,33.3147,3.47,0.95],[19.97928,19.4922,3.47,1.57],[11.30797,33.0942,3.48,1.4],[17.24414,14.3903,3.48,1.44],[22.83339,24.6017,3.48,0.93],[22.80925,-51.3169,3.49,0.08],[1.73447,-15.9375,3.5,0.72],[15.03244,40.3906,3.5,0.97],[18.44956,-45.9683,3.51,-0.17],[18.96217,-21.1067,3.51,1.18],[8.27525,9.1856,3.52,1.48],[9.68583,9.8922,3.52,0.49],[10.12222,16.7628,3.52,-0.03],[22.828,66.2006,3.52,1.05],[4.47694,19.1803,3.53,1.01],[7.33539,21.9822,3.53,0.34],[15.827,-3.4303,3.53,-0.04],[16.71494,38.9222,3.53,0.92],[22.17,6.1978,3.53,0.08],[3.72081,-9.7633,3.54,0.92],[5.58564,9.9342,3.54,-0.18],[9.94772,-54.5678,3.54,-0.08],[11.55003,-31.8578,3.54,0.94],[17.62644,-15.3986,3.54,0.26],[5.78258,-14.8219,3.55,0.1],[14.32339,-46.0578,3.55,-0.18],[0.32381,-8.8239,3.56,1.22],[2.27517,-51.5122,3.56,-0.12],[4.29825,-33.7983,3.56,-0.12],[11.32236,-14.7786,3.56,1.12],[15.36344,-36.2614,3.56,1.54],[20.14544,-66.1819,3.56,0.76],[1.63322,48.6283,3.57,1.28],[7.74078,24.3981,3.57,0.93],[16.87225,-38.0175,3.57,-0.21],[18.35094,72.7328,3.57,0.49],[20.30092,-12.5447,3.57,0.94],[7.30156,16.5403,3.58,0.11],[14.5305,30.3714,3.58,1.3],[15.61708,-28.135,3.58,1.38],[12.356,-60.4011,3.59,1.42],[1.40039,-8.1833,3.6,1.06],[3.41356,9.0289,3.6,0.89],[5.29344,-6.8444,3.6,-0.11],[5.74106,-22.4483,3.6,0.47],[6.87981,33.9611,3.6,0.1],[9.06042,47.1567,3.6,0],[9.51167,-40.4667,3.6,0.36],[7.75425,-37.9686,3.61,1.73],[10.17647,-12.3542,3.61,1.01],[11.84492,1.7647,3.61,0.55],[1.52472,15.3458,3.62,0.97],[8.67156,-52.9219,3.62,-0.18],[13.03783,-71.5489,3.62,1.18],[16.90972,-42.3614,3.62,1.37],[17.51831,-60.6839,3.62,-0.1],[17.76222,-64.7239,3.62,1.19],[23.03203,42.3261,3.62,-0.09],[2.83306,27.2606,3.63,-0.1],[3.81936,24.0533,3.63,-0.09],[20.62583,14.5953,3.63,0.44],[11.76011,-66.7286,3.64,0.16],[4.32989,15.6275,3.65,0.99],[12.69433,-1.4494,3.65,0.36],[14.07314,64.3758,3.65,-0.05],[20.9135,-58.4542,3.65,1.25],[0.61619,53.8969,3.66,-0.2],[15.64428,-29.7778,3.66,-0.17],[18.11053,-50.0917,3.66,-0.08],[23.15744,-21.1725,3.66,1.22],[9.52547,63.0619,3.67,0.33],[15.76981,15.4219,3.67,0.06],[8.72653,-33.1864,3.68,-0.18],[12.69433,-1.4494,3.68,null],[15.46381,29.1058,3.68,0.28],[21.66819,-16.6622,3.68,0.32],[3.32528,-21.7578,3.69,1.62],[4.85344,5.605,3.69,-0.17],[9.75411,-62.5078,3.69,1.22],[23.28608,3.2822,3.69,0.92],[1.93264,-51.6089,3.7,0.85],[3.74792,24.1133,3.7,-0.11],[17.96275,29.2478,3.7,0.94],[5.94008,-14.1678,3.71,0.33],[11.7675,47.7794,3.71,1.18],[15.84694,4.4778,3.71,0.15],[19.92189,6.4067,3.71,0.86],[4.90419,2.4406,3.72,-0.18],[5.99211,54.2847,3.72,1],[14.77081,1.8928,3.72,-0.01],[21.08219,43.9278,3.72,1.65],[21.24653,38.0456,3.72,0.39],[1.85767,-10.335,3.73,1.14],[3.54883,-9.4583,3.73,0.88],[7.87028,-40.5758,3.73,1.04],[18.1225,9.5639,3.73,0.12],[3.45283,9.7328,3.74,-0.09],[21.44444,-22.4114,3.74,1],[22.87692,-7.5797,3.74,1.64],[5.04131,41.0758,3.75,1.22],[9.06925,-47.0978,3.75,1.2],[16.36533,19.1531,3.75,0.27],[17.79822,2.7072,3.75,0.04],[17.89214,56.8728,3.75,1.18],[22.48619,58.4153,3.75,0.6],[2.84494,55.8956,3.76,1.68],[4.38225,17.5425,3.76,0.98],[5.56042,-62.4897,3.76,0.82],[16.82975,-59.0414,3.76,1.57],[21.69125,-77.39,3.76,1],[22.11686,25.345,3.76,0.44],[3.75322,42.5786,3.77,0.42],[8.42894,-66.1369,3.77,1.13],[19.07806,-21.7417,3.77,1.01],[19.28506,53.3686,3.77,0.96],[20.66064,15.9119,3.77,-0.06],[20.79461,-9.4958,3.77,0],[22.52153,50.2825,3.77,0.01],[7.14581,-70.4989,3.78,1.04],[10.89156,-58.8533,3.78,0.95],[7.06847,20.5703,3.79,0.79],[7.42878,27.7981,3.79,1.03],[19.49508,51.7297,3.79,0.14],[20.22719,46.7414,3.79,1.28],[3.15828,44.8572,3.8,0.98],[9.84983,59.0386,3.8,0.29],[10.33294,19.8406,3.8,null],[15.58003,10.5375,3.8,0.26],[15.58003,10.5392,3.8,0.26],[17.65775,46.0064,3.8,-0.18],[5.64578,-2.6,3.81,-0.24],[5.85536,-20.8792,3.81,0.99],[10.43483,-16.8364,3.81,1.48],[4.5925,-30.5622,3.82,0.98],[9.31408,36.8025,3.82,0.06],[10.46464,-58.7394,3.82,0.31],[16.51522,1.9839,3.82,0.01],[19.78981,18.5342,3.82,1.41],[23.62608,46.4581,3.82,1.01],[3.73864,32.2883,3.83,0.05],[10.88853,34.215,3.83,1.04],[13.97119,-42.1008,3.83,-0.21],[14.79767,-79.0447,3.83,1.43],[18.12572,28.7625,3.83,-0.03],[19.80289,70.2678,3.83,0.89],[4.47625,15.9622,3.84,0.95],[8.67711,-46.6489,3.84,0.71],[8.91744,-60.6447,3.84,-0.1],[10.62169,-48.2258,3.84,0.3],[11.52339,69.3311,3.84,1.62],[15.71239,26.2956,3.84,0],[18.39497,21.7697,3.84,1.18],[22.36094,-1.3872,3.84,-0.05],[3.73667,-64.8069,3.85,1.13],[5.78808,-51.0664,3.85,0.17],[6.36856,-33.4364,3.85,0.88],[7.24686,-26.7728,3.85,-0.17],[10.24561,-42.1219,3.85,0.05],[10.54686,9.3067,3.85,-0.14],[15.94089,15.6617,3.85,0.48],[16.25731,-63.6856,3.85,1.11],[18.58678,-8.2442,3.85,1.33],[4.23336,-42.2944,3.86,1.1],[12.62839,-48.5411,3.86,0.05],[17.93756,37.2506,3.86,1.35],[18.22939,-21.0589,3.86,0.23],[0.94589,38.4994,3.87,0.13],[3.20119,-28.9869,3.87,0.52],[3.76378,24.3678,3.87,-0.07],[4.63633,-14.3039,3.87,1.09],[5.52019,-35.4706,3.87,1.14],[6.90219,-24.1839,3.87,1.73],[12.54111,-72.1331,3.87,-0.15],[12.55806,69.7883,3.87,-0.13],[13.978,-44.8036,3.87,-0.2],[15.19892,-48.7378,3.87,-0.05],[0.15686,-45.7475,3.88,1.03],[9.23942,2.3142,3.88,-0.06],[9.87939,26.0069,3.88,1.22],[13.51742,-39.4075,3.88,1.17],[14.71767,-5.6583,3.88,0.38],[15.94808,-29.2142,3.88,-0.2],[2.94047,-8.8981,3.89,1.11],[11.35011,-54.4911,3.89,-0.15],[12.33178,-0.6669,3.89,0.02],[16.329,46.3133,3.89,-0.15],[16.5575,-78.8972,3.89,0.91],[19.93844,35.0833,3.89,1.02],[8.42767,-3.9064,3.9,-0.02],[19.87456,1.0056,3.9,0.89],[23.17267,-45.2467,3.9,1.02],[4.05261,5.9892,3.91,0.03],[8.76714,-46.0417,3.91,0],[9.66428,-1.1428,3.91,1.32],[11.14317,-58.975,3.91,1.23],[12.46733,-50.2306,3.91,-0.19],[15.59211,-14.7894,3.91,1.01],[1.13975,-55.2458,3.92,-0.08],[17.00483,30.9264,3.92,-0.01],[21.26372,5.2478,3.92,0.53],[4.60531,-3.3525,3.93,-0.21],[7.68744,-9.5511,3.93,1.02],[19.36122,-17.8472,3.93,0.22],[0.43672,-43.68,3.94,0.17],[8.74475,18.1542,3.94,1.08],[11.39875,10.5292,3.94,0.41],[20.95289,41.1672,3.94,0.02],[1.52086,-49.0728,3.95,0.99],[2.90431,52.7625,3.95,0.74],[6.61139,-19.2558,3.95,1.06],[7.697,-72.6061,3.95,1.04],[13.399,54.9217,3.95,0.13],[15.84931,-33.6272,3.95,-0.04],[22.77553,23.5656,3.95,1.07],[4.40061,-34.0169,3.96,1.49],[5.98578,-42.8153,3.96,1.14],[6.83069,-32.5086,3.96,-0.23],[7.73014,-28.9547,3.96,0.18],[12.19419,-52.3686,3.96,-0.15],[16.11344,-20.6692,3.96,-0.04],[20.00986,-72.9106,3.96,-0.03],[5.85817,39.1486,3.97,1.13],[8.66839,-35.3083,3.97,0.94],[9.01067,41.7828,3.97,0.44],[9.18794,-62.3172,3.97,-0.18],[18.01075,2.9317,3.97,0.02],[19.39811,-40.6161,3.97,-0.1],[22.48783,-43.4956,3.97,1.03],[23.38283,-20.1006,3.97,1.1],[2.05725,72.4214,3.98,-0.01],[6.24758,-6.2747,3.98,1.32],[7.2805,-67.9572,3.98,0.79],[20.25786,47.7144,3.98,1.52],[23.2905,-58.2358,3.99,0.4],[2.00008,-21.0778,4,1.57],[2.89803,-49.8903,4,2.11],[9.04078,-66.3961,4,0.14],[10.40658,-74.0317,4,0.35],[14.69933,-37.7936,4,-0.17],[2.28858,33.8472,4.01,0.02],[8.84219,-27.71,4.01,1.27],[13.42042,54.9881,4.01,0.16],[16.03147,58.5653,4.01,0.52],[16.19992,-19.4606,4.01,0.04],[18.71725,-71.4281,4.01,1.14],[19.37731,-44.4589,4.01,-0.1],[20.48992,30.3686,4.01,0.4],[22.82653,-13.5925,4.01,1.57],[23.98853,6.8633,4.01,0.42],[4.75836,-3.2547,4.02,-0.15],[8.77828,28.76,4.02,1.01],[12.14022,-24.7289,4.02,0.32],[16.33067,-50.1556,4.02,1.08],[18.99372,15.0683,4.02,1.08],[19.028,-5.7389,4.02,1.09],[21.56636,45.5919,4.02,0.89],[22.58928,-0.1175,4.02,-0.09],[5.05697,60.4422,4.03,0.92],[11.76433,6.5294,4.03,1.51],[12.90989,-57.1778,4.03,-0.17],[18.09092,2.4994,4.03,0.86],[20.55356,11.3033,4.03,-0.13],[3.98275,35.7911,4.04,0.01],[4.14436,47.7125,4.04,-0.03],[4.19775,-6.8375,4.04,0.33],[12.30725,-64.0031,4.04,-0.17],[18.92225,43.9461,4.04,1.59],[3.15111,49.6133,4.05,0.59],[11.35228,6.0294,4.05,-0.06],[14.34261,-37.8853,4.05,-0.03],[14.41994,51.8508,4.05,0.5],[14.63144,-49.4258,4.05,-0.15],[14.72761,-35.1736,4.05,1.35],[15.14739,-45.2797,4.05,-0.18],[0.78897,24.2672,4.06,1.12],[7.59869,26.8958,4.06,1.54],[16.99308,-53.1606,4.06,1.45],[1.72767,50.6886,4.07,-0.04],[2.65806,0.3286,4.07,-0.22],[4.93953,13.5144,4.07,1.15],[6.90317,-12.0386,4.07,1.43],[8.30878,-76.9197,4.07,0.39],[8.74,-42.6492,4.07,0.87],[13.82461,15.7978,4.07,1.52],[15.29189,-58.8011,4.07,0.09],[21.09911,-17.2328,4.07,-0.01],[9.57408,-59.2294,4.08,0.01],[10.99625,-18.2989,4.08,1.09],[11.41469,-17.6839,4.08,0.21],[14.26692,-6.0006,4.08,0.52],[21.36811,19.8044,4.08,1.11],[21.72511,58.78,4.08,2.35],[1.61328,41.4056,4.09,0.54],[2.36247,-68.6594,4.09,0.03],[3.03986,-23.6244,4.09,0.16],[5.61508,9.2906,4.09,0.95],[15.81233,18.1417,4.09,1.62],[2.67778,-39.8556,4.11,1.02],[2.65983,-68.2669,4.11,-0.06],[3.51456,12.9367,4.11,1.12],[7.82064,-46.3733,4.11,-0.18],[10.59114,-78.6078,4.11,1.58],[11.77522,-61.1783,4.11,0.9],[12.29281,-67.9608,4.11,1.58],[15.612,-66.3169,4.11,1.17],[19.15786,-37.9044,4.11,0.04],[19.16714,-39.3408,4.11,1.2],[20.86369,-26.9192,4.11,1.64],[22.49597,-43.7494,4.11,1.57],[2.73667,49.2283,4.12,0.49],[6.03972,9.6475,4.12,0.16],[7.06264,-15.6333,4.12,-0.12],[9.85797,-14.8467,4.12,0.92],[12.08681,8.7331,4.12,0.98],[23.01467,-52.7542,4.12,0.98],[18.48053,-49.0708,4.13,1.02],[19.92103,-41.8683,4.13,1.08],[21.74408,25.645,4.13,0.43],[22.26617,37.7489,4.13,1.46],[23.66583,5.6264,4.13,0.51],[4.24831,48.4094,4.14,0.95],[5.39911,-7.8081,4.14,0.96],[8.62742,-42.9892,4.14,0.11],[15.54883,31.3592,4.14,-0.13],[20.76825,-25.2708,4.14,0.43],[23.67347,44.3339,4.14,-0.08],[6.48272,20.2122,4.15,-0.13],[7.19775,-0.4928,4.15,-0.01],[12.11469,-64.6136,4.15,0.34],[15.89708,-16.7294,4.15,1.02],[15.95981,26.8778,4.15,1.23],[22.76758,-81.3817,4.15,0.2],[0.55,62.9317,4.16,0.14],[6.06867,23.2633,4.16,0.82],[8.62761,5.7036,4.16,0],[16.60625,-35.2556,4.16,1.57],[22.28056,-7.7833,4.16,0.98],[3.82425,-36.2003,4.17,0.95],[17.4395,-24.1753,4.17,0.28],[22.67761,-27.0436,4.17,-0.11],[3.77211,23.9483,4.18,-0.06],[7.48519,31.7844,4.18,0.32],[14.27306,46.0883,4.18,0.08],[13.82408,-34.4508,4.19,1.5],[14.21494,-10.2736,4.19,1.33],[18.76103,20.5464,4.19,0.46],[22.25056,57.0436,4.19,0.28],[22.77822,12.1728,4.19,0.5],[5.51308,5.9481,4.2,-0.14],[7.94764,-22.88,4.2,0.72],[16.56839,42.4369,4.2,-0.01],[3.48447,59.9403,4.21,0.41],[5.67933,-1.9428,4.21,null],[10.46472,36.7072,4.21,0.9],[22.93247,-32.5397,4.21,0.97],[23.26486,-9.0878,4.21,1.11],[4.42281,22.2939,4.22,0.13],[18.34597,71.3378,4.22,-0.1],[18.78625,-4.7478,4.22,1.1],[18.87028,-62.1875,4.22,-0.14],[20.49303,62.9942,4.22,0.2],[20.76103,30.7197,4.22,1.05],[21.44072,-65.3661,4.22,0.49],[23.23872,-6.0489,4.22,1.56],[0.33453,-64.8747,4.23,0.58],[2.84308,38.3186,4.23,0.34],[3.60817,48.1928,4.23,-0.06],[3.78081,-23.2497,4.23,0.42],[13.76144,-33.0439,4.23,0.38],[16.10986,-36.8022,4.23,-0.17],[16.52303,-34.7044,4.23,-0.16],[16.76614,82.0372,4.23,0.89],[19.84275,32.9142,4.23,1.82],[21.29028,39.3947,4.23,0.12],[21.77989,49.3094,4.23,-0.12],[7.88839,-48.1031,4.24,-0.14],[16.71794,-77.5175,4.24,1.06],[20.29414,-12.5083,4.24,1.07],[1.14575,86.2569,4.25,1.21],[1.15839,47.2419,4.25,-0.07],[2.44975,-47.7039,4.25,-0.14],[2.73539,-13.8586,4.25,-0.14],[4.26711,-51.4867,4.25,0.3],[4.6115,41.2647,4.25,1.22],[4.59425,10.1608,4.25,0.18],[8.38058,43.1881,4.25,1.55],[8.97478,11.8578,4.25,0.14],[10.45253,-31.0678,4.25,1.45],[14.45875,75.6961,4.25,1.44],[1.75656,9.1578,4.26,0.96],[5.99892,45.9369,4.26,1.72],[12.30575,-79.3122,4.26,-0.12],[12.56236,41.3575,4.26,0.59],[13.19789,27.8781,4.26,0.57],[14.02744,1.5444,4.26,0.1],[16.14617,44.935,4.26,-0.07],[17.69025,-12.8753,4.26,0.08],[2.74903,10.1142,4.27,0.31],[3.33214,-43.0697,4.27,0.71],[3.56314,-21.6328,4.27,-0.11],[4.63597,12.5108,4.27,0.12],[5.15244,-8.7542,4.27,-0.19],[8.15814,-47.3458,4.27,-0.23],[12.89061,-40.1789,4.27,0.21],[13.11517,-49.9061,4.27,-0.19],[15.30889,-47.875,4.27,-0.08],[20.77764,16.1242,4.27,1.04],[22.10728,-13.8697,4.27,-0.07],[1.04906,7.89,4.28,0.96],[2.46931,8.46,4.28,-0.06],[3.61456,0.4017,4.28,0.58],[4.43847,22.8136,4.28,0.26],[4.70408,22.9569,4.28,-0.13],[7.72186,28.8836,4.28,1.12],[10.65511,-55.6033,4.28,1.04],[11.88183,-33.9081,4.28,-0.1],[16.51897,-16.6128,4.28,0.92],[21.37078,-16.8344,4.28,0.9],[23.11467,-43.5206,4.28,0.42],[23.46614,6.3789,4.28,1.07],[4.10972,50.3514,4.29,0.02],[4.25892,8.8922,4.29,-0.06],[4.42483,17.9281,4.29,0.05],[4.90083,66.3428,4.29,0.03],[5.32625,-13.1767,4.29,-0.26],[9.61811,81.3264,4.29,1.48],[17.45592,-29.8669,4.29,0.4],[17.60911,-38.6353,4.29,1.09],[19.387,-44.7997,4.29,0.34],[21.75747,61.1208,4.29,0.52],[22.06317,64.6278,4.29,0.34],[22.16644,33.1783,4.29,0.46],[22.52508,-32.3461,4.29,0.01],[23.63561,43.2681,4.29,-0.1],[3.75347,24.4672,4.3,-0.11],[8.72042,3.3986,4.3,-0.2],[11.61581,-0.8239,4.3,1],[18.90839,36.8989,4.3,1.68],[20.22331,56.5678,4.3,0.11],[0.97678,-29.3575,4.31,-0.16],[9.52867,22.9681,4.31,1.54],[12.5345,-16.1961,4.31,0.38],[15.40817,37.3772,4.31,0.31],[4.67403,-19.6717,4.32,1.61],[7.46939,8.9256,4.32,1.43],[8.77292,-13.5478,4.32,0.9],[11.82808,-63.7883,4.32,-0.15],[14.44858,-83.6678,4.32,1.31],[14.86067,-43.5756,4.32,-0.15],[15.73431,77.7944,4.32,0.04],[16.12342,-20.8686,4.32,0.84],[20.63897,-1.1053,4.32,0.95],[1.18506,55.1497,4.33,0.17],[2.03411,2.7636,4.33,0.03],[6.53092,-23.4183,4.33,-0.24],[8.67694,-59.7611,4.33,-0.11],[12.05042,-63.3128,4.33,0.27],[12.88525,-48.9433,4.33,1.37],[14.33875,-56.3867,4.33,0.12],[15.63422,-42.5675,4.33,1.42],[17.34714,-12.8469,4.33,0.03],[18.33103,36.0644,4.33,1.17],[8.14322,-2.9839,4.34,0.97],[9.27006,-57.5414,4.34,1.63],[14.02872,-45.6036,4.34,0.6],[15.29719,-30.1489,4.34,1.1],[17.44192,4.1403,4.34,1.5],[21.74911,-33.0258,4.34,-0.05],[21.74186,17.35,4.34,1.17],[3.19383,19.7267,4.35,1.03],[5.74622,-65.7356,4.35,0.21],[6.25631,29.4981,4.35,1.02],[6.95458,58.4225,4.35,0.85],[8.13217,-68.6172,4.35,-0.11],[8.34403,-77.4844,4.35,1.16],[9.61378,-49.3553,4.35,0.17],[14.43633,-45.3794,4.35,0.43],[18.143,-63.6683,4.35,0.22],[0.61469,33.7194,4.36,-0.14],[0.72256,-57.4631,4.36,0],[3.50958,47.9953,4.36,1.35],[4.07825,22.0819,4.36,1.07],[4.84353,8.9003,4.36,0.01],[5.22053,-12.9414,4.36,-0.1],[5.95894,-35.2833,4.36,-0.18],[8.80722,5.8378,4.36,-0.04],[12.44897,28.2683,4.36,1.13],[14.10078,-41.1797,4.36,-0.19],[18.14597,20.8144,4.36,-0.16],[17.53692,86.5864,4.36,0.02],[18.38711,-61.4939,4.36,1.48],[18.74622,37.605,4.36,0.19],[18.78369,18.1814,4.36,0.13],[19.27281,38.1336,4.36,1.26],[19.61203,-1.2864,4.36,-0.08],[22.49217,47.7069,4.36,1.68],[0.52575,-62.9581,4.37,-0.07],[0.64258,29.3117,4.37,0.87],[2.21667,8.8467,4.37,0.89],[6.27586,-35.1406,4.37,1],[6.93561,-17.0542,4.37,-0.07],[10.13175,9.9975,4.37,1.45],[19.66828,18.0139,4.37,0.78],[19.68414,17.4761,4.37,1.05],[19.99561,-35.2764,4.37,-0.15],[23.54953,-37.8183,4.37,-0.09],[5.53689,18.5944,4.38,2.07],[13.16583,-5.5389,4.38,-0.01],[16.90014,10.1653,4.38,-0.08],[4.88158,-5.4528,4.39,0.25],[6.58294,-52.9756,4.39,-0.02],[8.03775,2.3344,4.39,1.25],[11.00258,-42.2258,4.39,0.11],[17.35006,-21.1128,4.39,0.39],[19.22931,39.1461,4.39,-0.15],[20.14814,77.7114,4.39,-0.05],[21.33111,-53.4497,4.39,0.19],[23.29839,-9.1825,4.39,-0.15],[23.43411,-20.6419,4.39,1.47],[6.83092,-53.6222,4.4,0.92],[7.31178,-24.9542,4.4,-0.15],[8.15044,-19.245,4.4,-0.15],[15.04833,2.0914,4.4,1.04],[21.96531,-54.9925,4.4,0.28],[23.423,23.4042,4.4,0.61],[1.89411,-46.3025,4.41,1.59],[5.58033,9.4894,4.41,-0.16],[5.90636,20.2761,4.41,0.59],[7.18567,30.2453,4.41,1.26],[7.97067,-49.245,4.41,-0.17],[11.30306,31.5292,4.41,0.59],[14.83814,-27.9603,4.41,1.4],[17.51231,26.1106,4.41,1.44],[17.97506,30.1894,4.41,0.39],[23.13164,75.3875,4.41,0.8],[23.31372,-32.5319,4.41,1.13],[0.03267,-6.0142,4.41,1.63],[0.95344,23.4175,4.42,0.94],[3.76903,-12.1017,4.42,1.63],[6.12619,14.7683,4.42,-0.17],[11.03883,20.1797,4.42,0.05],[14.38394,-39.5122,4.42,-0.18],[14.54358,-50.4569,4.42,-0.19],[16.45039,-18.4564,4.42,0.28],[20.79561,-5.0278,4.42,1.65],[22.48058,-0.02,4.42,0.38],[0.81139,7.585,4.43,1.5],[4.25453,-7.6528,4.43,0.82],[6.6315,-18.2375,4.43,1.15],[14.68581,13.7283,4.43,0.05],[15.77406,7.3531,4.43,0.6],[20.39769,32.19,4.43,1.33],[20.72431,15.0744,4.43,0.32],[21.29864,34.8969,4.43,-0.11],[22.39267,52.2292,4.43,1.02],[0.244,-18.9328,4.44,1.66],[1.69053,5.4875,4.44,1.36],[4.27469,-59.3019,4.44,1.08],[6.39614,4.5928,4.44,0.18],[8.23414,-40.3481,4.44,1.17],[8.64594,3.3414,4.44,1.21],[18.94917,-67.2336,4.44,0.71],[19.47842,24.665,4.44,1.5],[4.67603,-41.8639,4.45,0.34],[5.20497,-11.8692,4.45,-0.1],[7.56756,-22.2961,4.45,0.51],[8.18931,-39.6186,4.45,1.62],[8.30925,-36.6594,4.45,0.22],[9.0015,-41.2539,4.45,0.65],[10.59314,-57.5578,4.45,1.62],[10.763,-80.5403,4.45,-0.19],[16.53561,-21.4664,4.45,0.13],[18.02922,1.3053,4.45,0.02],[19.25917,73.3556,4.45,1.25],[19.56817,7.3789,4.45,1.17],[2.81817,-32.4058,4.46,0.99],[5.22153,2.8611,4.46,1.19],[9.41092,26.1822,4.46,1.23],[11.85242,-45.1736,4.46,1.3],[14.578,29.745,4.46,0.36],[22.10192,-39.5433,4.46,1.37],[22.67525,44.2764,4.46,1.33],[22.87544,-32.8756,4.46,-0.04],[2.75172,-18.5725,4.47,0.48],[3.339,29.0483,4.47,1.55],[3.82533,65.5261,4.47,1.88],[4.95478,53.7522,4.47,-0.02],[4.97581,1.7142,4.47,1.4],[6.79767,2.4122,4.47,1.11],[11.27769,-3.6517,4.47,0.21],[12.13478,-50.6614,4.47,-0.15],[16.45308,-47.555,4.47,-0.07],[23.11136,-23.7431,4.47,0.9],[6.199,14.2089,4.48,-0.18],[6.32706,59.0108,4.48,0.01],[6.46947,-32.58,4.48,-0.17],[9.14786,51.6047,4.48,0.27],[9.08578,-72.6028,4.48,0.61],[10.12383,35.2447,4.48,0.18],[11.19431,-22.8258,4.48,0.03],[19.60736,50.2211,4.48,0.38],[22.45556,-64.9664,4.48,-0.03],[4.43911,15.6183,4.49,0.25],[6.73314,13.2278,4.49,1.16],[7.20933,-46.7594,4.49,0.32],[7.87742,-38.8631,4.49,-0.19],[8.77847,-56.7697,4.49,-0.17],[10.13231,-0.3717,4.49,-0.04],[14.95306,-4.3464,4.49,0.32],[21.24136,10.0069,4.49,0.5],[22.23131,39.715,4.49,1.39],[23.71203,-14.545,4.49,-0.04],[6.54839,7.3331,4.5,0],[7.64703,-26.8017,4.5,-0.17],[7.80144,-25.9372,4.5,-0.05],[9.58042,52.0514,4.5,0.01],[10.34856,-56.0431,4.5,-0.12],[10.92689,24.7497,4.5,0.01],[13.78769,17.4567,4.5,0.48],[16.40172,-20.0375,4.5,1.01],[21.11881,-25.0058,4.5,1.61],[22.13972,-32.9886,4.5,0.05],[23.70078,1.78,4.5,0.2],[23.99861,-65.5772,4.5,-0.08],[1.19433,30.0897,4.51,1.09],[2.79847,29.2472,4.51,1.11],[4.01494,-62.1594,4.51,1.65],[4.5585,-29.7667,4.51,0.98],[5.83047,-56.1667,4.51,1.1],[9.48742,-35.9514,4.51,1.44],[15.38964,-59.3208,4.51,0.19],[20.04697,67.8736,4.51,1.32],[20.73397,-51.9211,4.51,0.27],[20.75586,57.5797,4.51,0.54],[21.15992,-11.3717,4.51,0.94],[21.47872,-21.8072,4.51,0.91],[22.50814,43.1233,4.51,-0.09],[0.30547,36.7853,4.52,0.05],[2.48444,67.4025,4.52,0.12],[5.81958,39.1811,4.52,0.94],[9.65583,-61.3281,4.52,-0.07],[14.3185,-13.3711,4.52,0.13],[15.69253,19.6703,4.52,0.04],[17.39472,37.1458,4.52,-0.03],[19.94911,-27.17,4.52,1.46],[20.26281,27.8142,4.52,1.26],[23.11675,9.4094,4.52,1.57],[23.20917,49.4064,4.52,0.29],[0.83022,41.0789,4.53,-0.15],[2.85856,35.0597,4.53,1.56],[6.00094,-3.0742,4.53,1.22],[7.62281,-34.9686,4.53,-0.09],[11.79975,20.2189,4.53,0.55],[13.37719,-60.9883,4.53,-0.13],[13.40014,-64.5358,4.53,0.85],[18.18717,-45.9544,4.53,1.01],[20.79014,36.4908,4.53,-0.11],[23.06461,3.82,4.53,-0.12],[0.526,-62.9658,4.54,0.15],[0.74542,48.2844,4.54,-0.07],[2.03261,70.9069,4.54,0.16],[3.49858,58.8786,4.54,0.56],[5.30297,33.3717,4.54,1.27],[6.58428,-22.9647,4.54,-0.05],[7.49661,12.0067,4.54,1.28],[14.22472,51.7903,4.54,0.2],[15.07408,26.9475,4.54,1.24],[15.20369,-19.7917,4.54,-0.08],[15.38594,-36.8586,4.54,-0.15],[15.59811,-44.9586,4.54,-0.18],[17.44386,-5.0867,4.54,0.39],[17.79267,-27.8308,4.54,0.8],[23.90639,57.4994,4.54,1.22],[5.07344,-35.4833,4.55,1.2],[7.00111,76.9775,4.55,1.36],[9.57039,36.3975,4.55,0.92],[14.85647,19.1011,4.55,0.76],[16.34394,-24.1694,4.55,0.84],[21.11003,47.6483,4.55,1.57],[23.48592,12.7606,4.55,0.94],[0.06233,-17.3361,4.55,-0.05],[3.97908,-61.4003,4.56,1.62],[9.10883,38.4522,4.56,1.04],[9.57469,69.8303,4.56,0.77],[13.86378,-32.9944,4.56,-0.13],[14.43561,-45.2214,4.56,-0.15],[21.69869,71.3114,4.56,1.1],[5.65308,4.1214,4.57,-0.11],[9.53303,-1.185,4.57,0.1],[10.32689,-55.0294,4.57,1.62],[10.72558,-60.5667,4.57,1.71],[16.42361,14.0333,4.57,0],[18.13472,-28.4572,4.57,0.94],[21.49914,23.6389,4.57,1.62],[22.35044,46.5367,4.57,-0.1],[22.40861,49.4764,4.57,0.09],[23.81544,-28.1303,4.57,0.01],[3.61825,-40.2747,4.58,1.04],[5.88878,27.6122,4.58,-0.02],[9.13414,-25.8583,4.58,1.59],[9.86133,-46.5478,4.58,1.2],[17.69897,72.1489,4.58,0.42],[19.89103,24.0797,4.58,-0.06],[20.04431,-27.7097,4.58,1.65],[0.68878,-46.085,4.59,0.97],[3.71392,-37.3136,4.59,1.2],[5.44728,3.0956,4.59,-0.21],[5.58978,-4.8383,4.59,-0.19],[7.72567,-28.4111,4.59,1.63],[9.86844,54.0644,4.59,0.03],[15.89353,-25.3272,4.59,-0.07],[16.20506,-27.9264,4.59,-0.16],[17.59433,-46.5056,4.59,-0.03],[18.91247,22.645,4.59,0.78],[19.13914,-40.4967,4.59,1.09],[19.34447,65.7147,4.59,0.02],[20.86881,27.0969,4.59,0.83],[22.48047,-0.0203,4.59,null],[6.48028,-7.0328,4.6,-0.1],[8.67022,64.3278,4.6,1.17],[9.48581,-2.7689,4.6,0.46],[10.08542,-13.0647,4.6,-0.09],[10.94531,-37.1378,4.6,1.03],[11.21,-60.3175,4.6,0.55],[13.20483,-59.9208,4.6,-0.08],[14.75403,16.9644,4.6,0.98],[14.95972,65.9325,4.6,1.59],[15.42228,-38.7336,4.6,0],[19.61178,-24.8836,4.6,-0.07],[23.34394,23.7403,4.6,0.17],[0.08892,-5.7075,4.61,1.04],[0.28486,38.6817,4.61,0.06],[4.30406,50.2956,4.61,0.04],[7.99778,-18.3992,4.61,0.08],[11.109,-62.4242,4.61,1.03],[19.36211,-15.955,4.61,0.1],[20.56506,35.2508,4.61,1.6],[1.89258,3.1875,4.62,0.94],[5.53217,-7.3014,4.62,-0.26],[7.64717,-26.8036,4.62,null],[8.72789,-7.2336,4.62,0.84],[9.26253,-37.4133,4.62,0.45],[11.57936,-54.2642,4.62,-0.08],[12.91089,-59.1467,4.62,-0.15],[15.56964,-10.0644,4.62,1.01],[15.87792,42.4517,4.62,0.56],[17.63075,-8.1189,4.62,0.11],[18.00806,-3.6903,4.62,0.38],[18.937,4.2036,4.62,0.17],[0.94439,59.1811,4.63,0.96],[2.98686,21.3403,4.63,0.04],[2.98686,21.3403,4.63,0.04],[3.18817,39.6117,4.63,1.11],[3.83931,71.3322,4.63,0.03],[6.06533,20.1383,4.63,0.28],[7.88436,-49.6131,4.63,-0.23],[11.08361,7.3361,4.63,0.33],[11.25339,23.0956,4.63,1.66],[15.82658,26.0683,4.63,0.8],[16.05886,-57.7753,4.63,0.24],[16.46336,-8.3717,4.63,0.17],[22.62289,51.5453,4.63,0.24],[5.05158,21.59,4.64,0.16],[7.27639,-27.8811,4.64,1.6],[7.44522,49.2114,4.64,-0.02],[7.58967,-28.3694,4.64,-0.11],[12.66458,-39.9875,4.64,-0.08],[15.68647,-44.6611,4.64,0.4],[15.84964,-25.7514,4.64,-0.05],[18.00439,4.3686,4.64,-0.03],[18.12178,8.7339,4.64,0.96],[18.52289,-62.2783,4.64,-0.11],[18.55839,-42.3125,4.64,1.01],[20.01836,27.7536,4.64,0.18],[1.22914,24.5836,4.65,1.04],[3.89517,-24.6125,4.65,-0.13],[4.56414,14.8444,4.65,0.25],[4.91494,10.1508,4.65,0.09],[5.90169,-63.09,4.65,1.05],[6.91075,13.1778,4.65,0.3],[7.51181,-30.9622,4.65,0.93],[12.77297,-56.4889,4.65,-0.16],[13.77758,-51.4328,4.65,0.96],[13.85719,64.7233,4.65,1.58],[16.05358,-49.2297,4.65,0.92],[16.83056,-10.7831,4.65,0.47],[17.29453,37.2917,4.65,0.05],[18.30089,-27.0425,4.65,1.66],[23.06972,50.0522,4.65,1.06],[1.19089,21.0347,4.66,1.03],[2.72419,27.7072,4.66,-0.13],[3.99875,-24.0164,4.66,-0.13],[6.68297,9.8956,4.66,-0.25],[7.23756,-26.3525,4.66,-0.19],[7.30511,-36.7342,4.66,-0.1],[8.72142,21.4686,4.66,0.02],[10.45678,-57.6389,4.66,0.51],[10.64586,-59.1831,4.66,1.48],[12.01456,6.6142,4.66,0.13],[12.65411,-7.9956,4.66,1.23],[12.70983,-48.8131,4.66,1.09],[13.67897,54.6817,4.66,1.64],[18.85336,59.3883,4.66,1.19],[19.44197,0.3386,4.66,0.6],[22.42128,1.3775,4.66,-0.03],[23.96264,25.1414,4.66,1.59],[1.82642,-10.6864,4.67,0.33],[3.48947,49.5089,4.67,-0.09],[6.10258,-14.9353,4.67,0.05],[9.18197,63.5136,4.67,0.35],[15.66278,-34.4119,4.67,0.99],[18.00094,16.7508,4.67,1.26],[21.02153,-32.2578,4.67,0.89],[21.70158,51.1897,4.67,-0.12],[5.07614,15.4042,4.68,-0.06],[6.92706,-20.1364,4.68,0.37],[8.02036,-1.3925,4.68,1.49],[9.64092,4.6492,4.68,1.32],[16.33911,-78.6958,4.68,1.69],[18.39431,-8.9342,4.68,0.95],[19.53933,69.6611,4.68,0.79],[20.58847,14.6742,4.68,0.11],[21.618,-19.4661,4.68,-0.17],[1.91558,-67.6472,4.69,0.95],[2.07483,-29.2969,4.69,-0.17],[4.44344,14.7136,4.69,0.98],[4.65458,15.9181,4.69,0.15],[8.93872,-52.7236,4.69,-0.12],[9.38675,-28.8339,4.69,0.92],[9.45511,-22.3439,4.69,1.14],[12.76053,-60.9811,4.69,1.05],[13.53275,-6.2558,4.69,1.62],[18.08369,-29.58,4.69,0.78],[19.65628,30.1533,4.69,0.97],[21.17236,10.1317,4.69,0.26],[21.62919,-7.8542,4.69,0.17],[22.056,-56.7861,4.69,1.06],[22.05525,-2.1553,4.69,-0.06],[22.72647,-18.8303,4.69,1.37],[23.16522,-22.4575,4.69,0.65],[2.97936,39.6628,4.7,0.06],[2.99525,8.9075,4.7,-0.12],[7.63833,-25.3647,4.7,-0.11],[10.00356,8.0442,4.7,1.6],[11.61136,-9.8022,4.7,-0.08],[11.67022,-34.7447,4.7,-0.07],[13.57425,49.0161,4.7,0.12],[18.48664,-14.5658,4.7,0.06],[19.93067,-26.2994,4.7,0.75],[1.56553,59.2319,4.71,1],[2.42706,50.2786,4.71,1.53],[4.24814,40.4836,4.71,1.01],[5.31903,40.0992,4.71,0.63],[5.34081,-21.2394,4.71,-0.05],[5.49556,-1.0922,4.71,1.57],[7.80564,-47.0778,4.71,1.06],[9.09397,-70.5389,4.71,-0.15],[10.64533,31.9761,4.71,0.81],[10.89964,43.19,4.71,-0.05],[13.10464,-48.4636,4.71,-0.14],[13.96081,-63.6867,4.71,1.11],[19.90414,8.4614,4.71,1.05],[21.29897,-32.1725,4.71,0.06],[22.90689,84.3461,4.71,1.43],[23.55461,-20.9144,4.71,0.02],[23.58461,-42.615,4.71,0.08],[3.48964,-62.9375,4.72,0.4],[5.09183,-57.4728,4.72,0.52],[8.18786,-12.9269,4.72,0.95],[9.35822,-25.9656,4.72,1.63],[11.80397,-66.8147,4.72,1.54],[12.072,-63.1656,4.72,-0.08],[15.08533,-47.0511,4.72,-0.14],[16.10817,-45.1733,4.72,0.23],[18.70456,-9.0525,4.72,0.35],[0.52956,54.5222,4.73,-0.1],[3.51031,-5.0753,4.73,-0.09],[3.80997,-37.6206,4.73,-0.03],[5.36269,-0.3825,4.73,-0.17],[11.74606,-18.3508,4.73,0.97],[13.29236,40.5725,4.73,0.3],[13.88681,-31.9278,4.73,-0.14],[16.89992,-42.3622,4.73,0.49],[17.27686,-0.4453,4.73,1.14],[20.87756,-8.9833,4.73,0.32],[21.632,62.0819,4.73,0.3],[21.71097,-18.8664,4.73,0.88],[21.73572,28.7428,4.73,0.48],[1.43222,68.13,4.74,1.05],[4.87556,14.2506,4.74,1.84],[5.85067,37.3056,4.74,1.62],[10.43192,33.7961,4.74,0.25],[10.50558,-71.9931,4.74,0.04],[11.03047,-2.4847,4.74,1.62],[12.34528,17.7928,4.74,1.01],[13.30675,-18.3114,4.74,0.71],[13.86319,34.4442,4.74,1.66],[15.69911,-19.6789,4.74,1.57],[19.52953,34.4531,4.74,-0.14],[20.99711,47.5211,4.74,-0.05],[22.79139,83.1539,4.74,1.26],[23.63083,-45.4925,4.74,0.08],[1.89217,19.2936,4.75,-0.04],[2.53478,-15.2447,4.75,0.45],[2.66333,-42.8917,4.75,0.06],[2.85064,-21.0042,4.75,0.91],[2.84125,-75.0669,4.75,1.33],[8.19053,-42.9872,4.75,0.18],[10.55386,40.4256,4.75,0.23],[14.16522,-53.4392,4.75,0.94],[14.26942,51.3672,4.75,0.2],[15.71139,-34.7106,4.75,-0.14],[19.05192,-42.0953,4.75,-0.02],[23.31042,68.1117,4.75,0.84],[0.7365,-10.6094,4.76,1.01],[1.32444,27.2642,4.76,0.03],[3.09233,56.7058,4.76,1.02],[5.54547,32.1919,4.76,0.34],[7.24394,-48.2717,4.76,-0.1],[8.15019,-61.3025,4.76,0.43],[9.04242,67.6297,4.76,1.53],[13.45756,-15.9736,4.76,1.09],[15.06317,47.6544,4.76,0.65],[15.85442,20.9778,4.76,1.54],[16.04664,46.0367,4.76,-0.11],[16.14953,36.4908,4.76,1.01],[17.99656,-23.8161,4.76,-0.04],[20.34439,-12.7592,4.76,-0.05],[20.593,-60.5817,4.76,0.28],[23.11856,25.4683,4.76,1.34],[0.52361,-48.8036,4.77,0.02],[0.88347,-1.1442,4.77,1.57],[6.78883,8.0372,4.77,1.4],[8.68697,-47.3169,4.77,0.12],[9.68806,-23.5917,4.77,-0.12],[11.50525,-3.0036,4.77,1.54],[14.34514,-45.1872,4.77,0.31],[14.38494,-27.7539,4.77,1.31],[16.07281,-11.3731,4.77,0.47],[17.67322,-49.4156,4.77,0.4],[18.54292,57.0456,4.77,0.61],[19.27028,21.3903,4.77,-0.05],[20.05931,-37.9408,4.77,1.41],[4.50936,16.1939,4.78,0.17],[4.87722,36.7031,4.78,1.41],[5.58408,-6.0019,4.78,-0.25],[5.874,1.855,4.78,1.38],[8.22489,-35.8997,4.78,-0.11],[11.31886,38.1856,4.78,0.12],[12.98206,17.4094,4.78,1.56],[16.30497,-28.6139,4.78,0.02],[17.3665,-67.7706,4.78,1.21],[20.25442,25.5919,4.78,-0.18],[20.481,-17.8136,4.78,0.38],[20.88744,44.3872,4.78,-0.14],[0.02658,-77.0658,4.78,1.27],[1.96547,23.5961,4.79,0.28],[3.90486,-2.9547,4.79,0.94],[4.99883,-12.5375,4.79,0.26],[6.65553,42.4889,4.79,1.23],[7.27689,-23.3156,4.79,1.71],[7.96114,-30.3347,4.79,0.15],[9.32956,-11.975,4.79,0.93],[9.73669,-27.7694,4.79,0.51],[10.32892,19.4708,4.79,0.45],[12.90589,-9.5389,4.79,1.6],[16.50344,-25.115,4.79,-0.11],[18.75747,-64.8714,4.79,0.2],[22.16344,72.3411,4.79,0.92],[22.26025,-41.3467,4.79,0.8],[22.46431,4.6956,4.79,1.05],[22.69594,29.3075,4.79,-0.01],[0.24339,20.2067,4.8,1.57],[0.70108,50.5125,4.8,-0.11],[3.26389,-8.8197,4.8,0.23],[3.76731,63.345,4.8,0.8],[4.40161,17.4439,4.8,0.15],[5.64808,-7.2131,4.8,0.13],[6.31411,69.3197,4.8,0.03],[9.17311,67.1347,4.8,0.49],[9.34139,-9.5558,4.8,0.93],[12.40042,51.5622,4.8,0.87],[13.11964,27.6247,4.8,1.48],[13.25414,-67.8944,4.8,-0.08],[13.29342,5.4697,4.8,1.67],[17.61586,68.7581,4.8,0.43],[23.97356,51.3886,4.8,1.83],[0.46547,-33.0072,4.81,1.64],[5.02397,-7.1739,4.81,-0.19],[6.17164,-54.9686,4.81,-0.23],[9.34911,-62.4047,4.81,0.94],[9.58439,39.6214,4.81,0.99],[12.37508,25.8461,4.81,0.49],[12.58086,22.6292,4.81,0],[14.29994,35.5094,4.81,1.06],[14.47003,-2.2281,4.81,0.7],[14.72372,26.5278,4.81,1.66],[15.03514,25.0081,4.81,1.5],[17.52361,-23.9628,4.81,0],[17.83644,-40.0906,4.81,0.26],[18.4225,-20.5417,4.81,1.31],[20.29644,38.0331,4.81,0.42],[22.35536,28.3306,4.81,0],[22.55003,-61.9822,4.81,1.61],[0.88447,61.1242,4.82,0.53],[2.14147,37.8592,4.82,0.12],[3.31217,34.2228,4.82,1.49],[5.16167,15.5972,4.82,0.32],[5.96658,25.9539,4.82,-0.06],[6.65464,-14.1458,4.82,1.5],[8.00556,-63.5675,4.82,-0.17],[8.37544,-48.4903,4.82,-0.15],[10.62589,-13.3844,4.82,2.68],[10.70389,-64.4664,4.82,-0.14],[10.73525,-63.9611,4.82,-0.13],[12.44211,-51.4508,4.82,-0.14],[13.62433,36.295,4.82,0.23],[14.14747,77.5475,4.82,1.36],[15.08533,-47.0511,4.82,null],[15.21375,-44.5006,4.82,-0.17],[15.85386,35.6575,4.82,1],[16.36789,1.0292,4.82,0.34],[16.82061,45.9833,4.82,0.09],[17.01767,-4.2225,4.82,1.48],[17.28875,33.1,4.82,-0.17],[18.43308,65.5636,4.82,1.19],[18.90664,71.2972,4.82,1.15],[20.64203,21.2011,4.82,-0.02],[21.346,-40.8097,4.82,0.02],[22.51078,-10.6781,4.82,-0.06],[23.69606,-17.8164,4.82,0.82],[0.91669,58.9728,4.83,1.21],[1.46094,45.4067,4.83,0.42],[1.89217,19.2958,4.83,null],[1.95278,-47.385,4.83,0.88],[2.22036,44.2317,4.83,1.48],[3.32269,3.3703,4.83,0.68],[5.29142,-34.8953,4.83,1],[5.22928,-67.1853,4.83,1.28],[6.89247,-20.2242,4.83,-0.21],[7.14753,-39.6558,4.83,-0.18],[8.35639,-33.0544,4.83,1.45],[9.26981,54.0219,4.83,0.19],[10.37211,-41.65,4.83,1.12],[11.41017,-10.8594,4.83,1.56],[14.17331,25.0917,4.83,0.54],[14.68581,13.7283,4.83,null],[16.03825,22.8044,4.83,0.07],[16.68197,64.5892,4.83,1.22],[17.81958,-31.7033,4.83,-0.04],[18.76792,26.6622,4.83,1.2],[18.90283,-22.745,4.83,1.41],[18.95103,-5.8461,4.83,1.08],[19.98256,-26.1956,4.83,0.9],[20.22167,46.8158,4.83,0.09],[1.50308,6.1439,4.84,1.37],[2.06519,42.3308,4.84,0.03],[2.65939,-11.8722,4.84,0.45],[2.75906,-67.6167,4.84,0.06],[3.33317,65.6522,4.84,-0.15],[4.23233,9.2636,4.84,0.8],[7.65761,-38.3083,4.84,-0.19],[8.14094,51.5067,4.84,0.05],[10.51044,55.9806,4.84,0.52],[10.58486,75.7131,4.84,0.96],[11.00933,3.6175,4.84,1.16],[16.54342,11.4881,4.84,1.49],[20.81564,46.1142,4.84,0.41],[21.07342,-19.855,4.84,0.17],[22.09467,5.0586,4.84,1.44],[1.9445,-22.5269,4.85,1.42],[4.35922,46.4989,4.85,-0.03],[7.49761,-23.0244,4.85,0.23],[10.78089,-64.3833,4.85,-0.15],[11.75475,8.2583,4.85,0.18],[13.05922,-49.5272,4.85,0.02],[13.20089,-37.8031,4.85,0.7],[16.36828,30.8919,4.85,0.97],[16.75494,56.7819,4.85,0.38],[19.259,-25.2567,4.85,0.56],[22.725,-41.4144,4.85,1.03],[22.76053,-53.5003,4.85,1.18],[23.11025,59.4197,4.85,-0.03],[23.29575,49.0153,4.85,1.67],[1.26281,-68.8761,4.86,0.47],[2.59792,5.5933,4.86,0.87],[5.22381,38.4844,4.86,0.18],[5.68825,16.5339,4.86,-0.13],[5.81694,24.5675,4.86,1.01],[8.58878,-58.0092,4.86,1],[8.70708,-53.1139,4.86,-0.17],[10.14897,-51.8111,4.86,-0.12],[12.44192,-63.1225,4.86,-0.12],[14.32922,16.3069,4.86,1.23],[14.69411,8.1617,4.86,1],[15.29414,-63.6106,4.86,1.25],[17.9465,-44.3422,4.86,1.21],[18.34781,3.3772,4.86,0.91],[19.77269,-19.7611,4.86,0.93],[23.97789,-3.5561,4.86,0.93],[2.28422,34.2242,4.87,0.61],[3.19897,74.3936,4.87,0.02],[4.23992,-10.2564,4.87,1.17],[5.88525,-33.8014,4.87,-0.15],[6.77058,59.4417,4.87,0.08],[11.30303,31.5292,4.87,null],[13.28694,-66.7836,4.87,1.5],[17.08039,-34.1228,4.87,0.26],[17.53778,55.1731,4.87,0.28],[17.72383,-21.6833,4.87,0.47],[18.73872,-35.6419,4.87,-0.18],[18.97436,-52.9386,4.87,-0.05],[18.97872,-37.1075,4.87,0.41],[23.78431,58.6519,4.87,1.11],[1.37233,45.5289,4.88,1.08],[3.30614,-22.5114,4.88,0.9],[4.83183,37.4883,4.88,1.44],[5.46058,21.9369,4.88,-0.15],[7.76872,18.51,4.88,1.45],[8.69536,-15.9433,4.88,1.06],[9.90342,-25.9325,4.88,1.23],[12.69808,10.2356,4.88,0.09],[15.96983,-14.2794,4.88,-0.1],[17.53628,55.1842,4.88,0.26],[17.96325,-41.7161,4.88,1.65],[20.62647,-61.53,4.88,0.43],[22.65436,39.0503,4.88,-0.2],[23.98347,55.755,4.88,-0.07],[0.18775,-15.4681,4.89,0.49],[0.81392,50.9683,4.89,-0.11],[2.4325,-12.2906,4.89,-0.03],[3.24836,21.0444,4.89,-0.01],[7.22039,-45.1831,4.89,-0.02],[8.66181,-29.5611,4.89,0.9],[8.92542,-27.6819,4.89,0.11],[10.52272,-53.7156,4.89,0.5],[10.62047,-27.4125,4.89,1.62],[16.05672,-38.6025,4.89,-0.14],[16.93381,65.1347,4.89,0.48],[19.73794,37.3544,4.89,0.95],[20.61211,-2.55,4.89,1.6],[20.82472,-46.2269,4.89,1.52],[1.427,-14.5989,4.9,1.23],[2.56408,-28.2325,4.9,-0.05],[6.33322,-2.9444,4.9,1.6],[6.96031,45.0942,4.9,0.03],[7.19425,39.3206,4.9,1.45],[7.65275,34.5842,4.9,0.4],[11.86422,-65.2061,4.9,-0.11],[12.88828,21.245,4.9,0.9],[13.00458,30.785,4.9,1.17],[16.64581,48.9283,4.9,1.55],[18.72536,-8.2753,4.9,1.12],[19.58694,-48.0992,4.9,1.09],[20.83281,-33.7797,4.9,1],[21.57961,38.5342,4.9,1.08],[22.92047,8.8158,4.9,0],[2.70414,40.1939,4.91,0.59],[4.53131,-0.0439,4.91,1.32],[5.02378,-20.0519,4.91,-0.05],[5.70794,1.4747,4.91,1.17],[5.82581,12.6511,4.91,-0.07],[6.41497,49.2881,4.91,1.97],[10.64306,-16.8767,4.91,0.92],[11.77531,-40.5006,4.91,0.66],[11.99369,-78.2219,4.91,-0.06],[12.84478,-33.9994,4.91,-0.04],[13.82856,21.2642,4.91,1.43],[14.18069,-16.3019,4.91,1.72],[14.30383,-81.0078,4.91,0.25],[15.24369,-31.5192,4.91,0.37],[16.47447,-70.0844,4.91,0.55],[17.08964,12.7408,4.91,0.12],[20.49417,-2.8856,4.91,1.15],[20.74792,25.2706,4.91,1.18],[21.94419,63.6256,4.91,1.77],[23.50056,58.5489,4.91,-0.12],[7.17047,-4.2372,4.92,1.03],[8.94956,-59.2294,4.92,-0.19],[13.23744,-59.1033,4.92,0.48],[13.22861,40.1528,4.92,1.06],[14.37694,-58.4594,4.92,0.86],[14.74978,-35.1919,4.92,0.01],[15.01622,-8.5189,4.92,0],[16.09069,-19.8019,4.92,-0.02],[18.88711,50.7083,4.92,0.9],[19.92717,52.4389,4.92,0.12],[20.78633,34.3742,4.92,1.32],[22.16911,-32.5483,4.92,0.48],[2.98436,35.1831,4.93,1.23],[4.18072,-41.9936,4.93,0.33],[4.34017,34.5667,4.93,0.94],[6.08308,-16.4844,4.93,0.24],[6.64378,-48.2203,4.93,0.87],[7.06492,-49.5839,4.93,0.13],[7.99558,-3.6797,4.93,1.21],[8.82992,-45.3081,4.93,0.05],[10.51722,-73.2217,4.93,1.68],[12.69906,-59.6858,4.93,-0.04],[13.01217,56.3664,4.93,0.36],[15.12169,24.8692,4.93,0.43],[19.00025,32.1456,4.93,1.47],[19.10697,-37.0633,4.93,0.52],[20.15711,36.8397,4.93,-0.13],[23.73319,29.3617,4.93,0.95],[0.72447,47.0247,4.94,0.18],[1.67633,40.5769,4.94,-0.09],[2.20619,30.3031,4.94,0.78],[4.28767,20.5786,4.94,0.26],[4.98761,37.8903,4.94,0.04],[5.32128,22.0964,4.94,0.93],[7.59436,-52.5339,4.94,1.4],[7.67311,-15.2636,4.94,1.56],[8.05864,27.7942,4.94,1.12],[9.26019,-38.57,4.94,1.11],[9.704,-23.9156,4.94,0.53],[9.9145,-19.0094,4.94,1.57],[11.08886,-27.2936,4.94,0.36],[11.68156,-62.09,4.94,1.15],[12.57889,70.0219,4.94,1.31],[12.86164,27.5406,4.94,0.67],[13.56886,3.6589,4.94,0.03],[14.67878,16.4183,4.94,-0.03],[14.76669,-25.4431,4.94,0.35],[14.85028,-2.2992,4.94,0.98],[15.40331,-10.3222,4.94,0.44],[16.22464,-54.6306,4.94,1.04],[16.2,-10.0642,4.94,0.09],[16.56806,-44.0453,4.94,0.05],[19.93103,38.4867,4.94,-0.08],[20.12311,-52.8808,4.94,1.62],[22.86722,43.3125,4.94,1.56],[23.44889,1.2556,4.94,0.03],[0.07503,-10.5094,4.94,1.63],[1.69644,42.6136,4.95,0.62],[3.35736,43.3294,4.95,0.04],[4.33925,27.3508,4.95,1.15],[5.41244,1.8464,4.95,-0.2],[5.68072,-1.1289,4.95,-0.21],[6.03067,-10.5981,4.95,-0.12],[6.20092,16.1306,4.95,-0.14],[6.93778,-48.7211,4.95,1.69],[11.46561,2.8561,4.95,1],[12.27236,23.9453,4.95,0.97],[12.44003,27.2683,4.95,0.27],[12.50186,69.2011,4.95,1.62],[13.15092,-23.1181,4.95,1.05],[15.96317,54.7497,4.95,0.26],[16.29175,75.7553,4.95,0.37],[18.33831,21.9614,4.95,1.59],[19.61486,-7.0275,4.95,0],[19.85114,22.61,4.95,-0.14],[20.23794,15.1975,4.95,0.08],[20.50097,48.9517,4.95,-0.09],[22.94056,49.7336,4.95,1.78],[23.76725,46.4203,4.95,1.11],[1.25308,-45.5314,4.96,0.58],[7.51789,82.4114,4.96,1.66],[7.37042,-19.0167,4.96,-0.04],[12.33917,3.3125,4.96,1.16],[15.67136,-23.8181,4.96,1.33],[15.52358,77.3494,4.96,1.58],[16.69289,-17.7422,4.96,1.11],[18.02511,21.5956,4.96,0.12],[18.52928,-45.915,4.96,-0.11],[19.29392,-18.9531,4.96,1.02],[19.93206,58.8461,4.96,1.59],[3.70625,33.965,4.97,-0.01],[4.02172,-61.0789,4.97,1.42],[4.474,16.3597,4.97,1.13],[5.92497,-37.1208,4.97,1.11],[7.56331,-14.5239,4.97,1.41],[7.89161,26.7658,4.97,0.09],[9.09956,5.0922,4.97,1.22],[9.53242,11.2997,4.97,1.05],[10.40219,65.5664,4.97,-0.06],[11.83239,-70.2258,4.97,1.4],[13.49522,-23.2814,4.97,1.6],[13.83119,-18.1342,4.97,1.06],[14.46956,-29.4917,4.97,-0.07],[18.19839,31.4053,4.97,1.65],[19.40211,29.6214,4.97,-0.1],[20.24222,36.8064,4.97,0.14],[1.33469,58.2317,4.98,0.68],[1.65583,44.3861,4.98,0.89],[2.15703,25.9397,4.98,0.33],[3.46753,49.0628,4.98,-0.09],[6.29856,61.5153,4.98,1.83],[7.31119,-24.5589,4.98,-0.15],[8.66708,-12.4753,4.98,1.42],[13.47383,13.7789,4.98,0.71],[13.57994,37.1825,4.98,0.4],[17.05217,14.0919,4.98,1.6],[18.19539,-23.7011,4.98,1.05],[18.39847,58.8006,4.98,0.08],[18.93739,4.2019,4.98,0.2],[23.31603,-9.6108,4.98,-0.02],[23.41397,62.2828,4.98,1.68],[23.56589,31.3253,4.98,1.38],[1.71208,-3.6903,4.99,1.38],[1.93333,68.6853,4.99,-0.1],[2.97994,-64.0714,4.99,0.13],[5.41089,37.3856,4.99,1.42],[5.40706,17.3833,4.99,0.53],[5.91411,55.7069,4.99,0.05],[6.84789,-34.3672,4.99,1.38],[7.04856,-4.2392,4.99,-0.2],[7.42747,9.2761,4.99,1.01],[7.71678,58.7103,4.99,0.08],[8.22222,-15.7883,4.99,1.07],[8.491,-44.725,4.99,-0.16],[10.38281,-66.9017,4.99,-0.13],[11.01244,6.1014,4.99,0.16],[11.38044,43.4828,4.99,0.99],[12.75217,45.4403,4.99,2.54],[15.99175,-41.7444,4.99,1],[16.02406,29.8511,4.99,-0.07],[16.28358,-50.0683,4.99,0.8],[18.91864,-22.6714,4.99,1.33],[19.10697,-37.0633,4.99,0.52],[19.232,57.705,4.99,1.16],[19.77378,33.7278,4.99,0.47],[20.07211,-32.0564,4.99,1.21],[22.14056,-34.0439,4.99,1.48],[3.70414,-31.9383,5,-0.16],[3.95231,61.1089,5,1.45],[5.11128,51.5978,5,0.33],[5.12417,18.645,5,0.65],[5.38056,3.5444,5,-0.15],[6.93517,-14.0436,5,1.18],[7.22286,16.1589,5,1.66],[9.18456,-44.8681,5,0.23],[9.62019,6.8358,5,1.05],[10.71781,69.0761,5,1.38],[11.38686,-36.1647,5,1.46],[12.27503,33.0614,5,1.14],[12.31658,-55.1431,5,1.59],[12.44981,26.8256,5,0.08],[15.36897,-47.9278,5,0.5],[16.05572,-25.8653,5,1.22],[16.13458,17.0469,5,0.95],[16.46639,68.7681,5,-0.06],[17.33858,18.0572,5,1.62],[18.12467,43.4617,5,0.91],[19.57636,19.7733,5,-0.09],[19.81631,19.1422,5,0.1],[21.30756,43.9458,5,-0.01],[23.00142,56.9453,5,1.42],[23.66308,-14.2217,5,0.24],[23.95978,-64.2983,5,0.06],[2.38119,-73.6458,5.01,1.09],[4.64822,-12.1231,5.01,0.07],[6.26247,-13.7183,5.01,-0.08],[6.1875,-65.5894,5.01,1.62],[7.49686,27.9161,5.01,1.11],[7.87103,-34.7053,5.01,0.44],[8.57878,-49.9442,5.01,1.33],[9.55347,-21.1158,5.01,1.02],[9.56911,-51.2553,5.01,-0.18],[13.69575,-54.56,5.01,-0.05],[13.69356,-8.7031,5.01,1.63],[13.94283,27.4919,5.01,1.42],[14.20439,2.4094,5.01,-0.12],[19.024,46.9347,5.01,0.19],[19.34247,-5.4158,5.01,0.92],[20.90933,28.0575,5.01,1.48],[21.61583,40.4136,5.01,0.18],[21.79561,-30.8983,5.01,0.04],[22.35864,12.2053,5.01,-0.13],[0.03886,-29.7203,5.01,-0.15],[5.03606,-26.275,5.02,1.07],[5.25678,32.6878,5.02,0.23],[6.12544,-37.2531,5.02,-0.11],[6.71806,44.5244,5.02,1.48],[6.84608,41.7814,5.02,1.27],[10.54914,-47.0033,5.02,1.04],[12.43081,39.0186,5.02,0.96],[12.5855,18.3769,5.02,1.15],[15.28497,71.8239,5.02,1.37],[15.5155,40.8331,5.02,1.59],[15.52972,40.8994,5.02,0.07],[16.42644,-23.4472,5.02,0.24],[17.81786,50.7811,5.02,0.02],[18.74719,2.06,5.02,-0.06],[19.96583,-15.4914,5.02,0.05],[21.22236,-70.1264,5.02,1.58],[0.17203,46.0722,5.03,0.4],[1.13358,43.9419,5.03,0.11],[2.10942,22.6483,5.03,0.11],[2.31583,28.6425,5.03,0.04],[3.27006,50.9378,5.03,1.15],[3.31878,50.095,5.03,-0.06],[3.95708,63.0722,5.03,-0.09],[4.48061,13.0475,5.03,0.23],[4.83656,-16.2172,5.03,0.98],[5.08278,-49.5778,5.03,1.49],[5.33358,33.9581,5.03,0.27],[5.98453,-9.5583,5.03,0.19],[7.28042,-36.5928,5.03,-0.17],[7.39125,25.0506,5.03,0.9],[10.929,33.5069,5.03,1.1],[11.72533,-62.4894,5.03,0.8],[14.88086,-37.8033,5.03,-0.16],[15.88892,-20.1672,5.03,-0.01],[17.03131,-32.1436,5.03,-0.1],[17.31028,10.8644,5.03,1.55],[18.23161,64.3972,5.03,0.38],[19.42125,-24.5086,5.03,0.23],[19.51106,-2.7889,5.03,1.75],[19.84381,52.9881,5.03,1.28],[21.9875,73.18,5.03,0.44],[22.62928,-4.2281,5.03,1.14],[1.76842,-53.5219,5.04,0.04],[2.03836,54.4875,5.04,-0.08],[6.05431,-26.2844,5.04,1.34],[6.27406,12.2722,5.04,0.42],[7.76581,-14.5639,5.04,0.33],[11.54836,-31.0872,5.04,1.58],[12.07958,-76.5192,5.04,1.49],[13.20097,-16.1986,5.04,0.46],[16.47736,41.8817,5.04,1.52],[16.86258,24.6564,5.04,1.25],[17.82417,76.9628,5.04,0.49],[18.11708,30.5619,5.04,0.52],[18.71053,55.5394,5.04,-0.09],[20.64219,24.1161,5.04,-0.14],[20.83469,44.0594,5.04,0.2],[21.83075,30.1742,5.04,-0.03],[22.19186,59.4144,5.04,0.25],[23.77319,3.4867,5.04,2.6],[23.79856,67.8069,5.04,-0.01],[4.66519,53.0797,5.05,1.07],[4.70097,-37.1444,5.05,0.37],[5.37597,79.2311,5.05,0.47],[6.11761,-62.1547,5.05,1.25],[6.19772,-6.5503,5.05,-0.2],[7.30886,49.465,5.05,0.08],[7.489,28.1181,5.05,0.11],[7.65794,17.6747,5.05,1.56],[8.11122,-45.2664,5.05,1.5],[8.65222,-22.6619,5.05,0.73],[9.87511,-8.105,5.05,0.04],[10.99111,40.4303,5.05,0.61],[13.41864,-74.8878,5.05,1.11],[17.53275,68.135,5.05,1.08],[18.35908,49.1217,5.05,1.66],[19.38086,-54.4236,5.05,0.02],[20.02267,50.1047,5.05,1.11],[20.65217,10.0861,5.05,0.72],[20.85836,-51.6083,5.05,1.13],[23.33906,5.3814,5.05,1.2],[0.46747,17.8931,5.06,1.65],[3.21289,-1.1961,5.06,0.57],[4.07422,59.1556,5.06,0.5],[5.36283,-24.7731,5.06,0.67],[6.14561,-68.8433,5.06,-0.08],[6.466,-4.7622,5.06,-0.17],[6.97364,-34.1117,5.06,-0.16],[7.71589,-45.1733,5.06,0.78],[9.67178,-14.3322,5.06,-0.15],[13.49033,-51.1653,5.06,0.07],[14.37297,-80.1089,5.06,-0.1],[15.32189,1.7653,5.06,0.54],[18.10053,22.2189,5.06,1.58],[18.739,39.67,5.06,0.16],[19.70864,-16.1239,5.06,0.33],[19.68061,45.525,5.06,0.4],[23.28081,-7.7267,5.06,1.6],[23.72289,10.3314,5.06,1.68],[0.81631,16.9406,5.07,0.51],[0.80983,-74.9233,5.07,1.37],[3.80453,11.1433,5.07,-0.13],[4.51392,-44.9539,5.07,-0.19],[4.65256,15.7997,5.07,0.15],[5.00575,81.1939,5.07,1.28],[5.25675,-26.9433,5.07,-0.1],[5.46081,34.4758,5.07,1.4],[6.79364,-8.9983,5.07,1.8],[7.67514,87.02,5.07,1.63],[8.30525,-65.6133,5.07,1.15],[9.53267,9.7158,5.07,1.37],[14.24917,-57.0858,5.07,-0.08],[15.65631,36.6358,5.07,-0.12],[16.07281,-11.3731,5.07,null],[17.25578,-26.6014,5.07,0.85],[18.53389,-45.7572,5.07,-0.14],[20.11483,23.6144,5.07,-0.18],[0.60231,54.1686,5.08,-0.11],[5.10236,58.9725,5.08,-0.08],[5.40803,-0.8914,5.08,0.96],[5.58969,-5.4161,5.08,-0.09],[7.79028,-38.5111,5.08,-0.1],[8.23289,-36.3225,5.08,-0.19],[9.83253,-45.7328,5.08,-0.1],[10.10314,-47.37,5.08,0.88],[10.56692,-23.7453,5.08,1.6],[10.58,6.9536,5.08,0.94],[10.60564,-59.5647,5.08,1.18],[10.72361,23.1883,5.08,0.04],[11.014,39.2122,5.08,0.24],[11.47642,-42.6742,5.08,-0.03],[14.21278,-27.2611,5.08,1.16],[16.60381,52.9244,5.08,-0.04],[17.17842,-44.5575,5.08,0.86],[17.15925,40.7772,5.08,1.28],[18.95569,-20.6564,5.08,0.13],[21.88828,-13.5517,5.08,0.37],[21.88439,25.925,5.08,-0.17],[22.59614,73.6431,5.08,0.39],[22.73486,41.8192,5.08,0.96],[23.31853,-13.4589,5.08,0.8],[23.38461,12.3139,5.08,1.31],[23.87481,19.1203,5.08,1.6],[0.5455,-63.0311,5.09,0.04],[3.37922,20.7419,5.09,1.24],[3.50006,55.4519,5.09,0.05],[3.81978,24.1367,5.09,-0.08],[6.17067,-74.7531,5.09,0.72],[7.95511,-44.1097,5.09,-0.17],[8.46014,-53.0886,5.09,0.25],[9.80983,46.0211,5.09,0.62],[10.50486,-0.6369,5.09,-0.14],[11.38942,-18.78,5.09,0.42],[13.4355,-39.7553,5.09,1.2],[15.28242,-60.9575,5.09,-0.06],[15.92489,-68.6031,5.09,1.13],[19.11628,11.0714,5.09,-0.07],[21.75008,-9.0825,5.09,1.11],[1.95586,17.8175,5.1,0.92],[3.70258,63.2167,5.1,1.63],[4.16744,80.6986,5.1,0.56],[4.85625,18.8397,5.1,0.21],[6.56053,-1.2203,5.1,-0.14],[7.22567,-44.6397,5.1,1.56],[7.36578,20.4436,5.1,1.52],[7.43942,-51.0183,5.1,1.06],[8.84264,-46.5292,5.1,-0.21],[10.89292,54.585,5.1,1.36],[12.26672,14.8989,5.1,0.06],[13.28142,-31.5061,5.1,0.96],[14.40314,5.82,5.1,0.12],[18.14803,20.0453,5.1,0.15],[18.37183,-38.6569,5.1,1.49],[18.91197,-15.6031,5.1,0.17],[19.30903,1.0853,5.1,1.15],[20.08597,19.9911,5.1,1.06],[20.6675,-18.1386,5.1,1.66],[21.65925,2.2436,5.1,1.04],[22.33375,-80.4397,5.1,1.47],[22.27406,-41.6275,5.1,0.92],[23.04342,42.7578,5.1,0.09],[0.03039,-3.0275,5.1,-0.12],[1.90611,-42.4969,5.11,-0.06],[2.95481,31.9342,5.11,-0.01],[3.06022,-59.7378,5.11,0.34],[3.82572,33.0914,5.11,0.07],[3.89414,-34.7322,5.11,-0.13],[4.56989,-8.2314,5.11,1.7],[5.83156,-66.9011,5.11,-0.14],[7.31061,-36.7428,5.11,-0.16],[7.98492,-23.3106,5.11,1.12],[9.43836,-53.3792,5.11,-0.11],[9.56478,-80.9414,5.11,-0.14],[11.38939,-64.955,5.11,-0.08],[11.81253,-26.7497,5.11,1.6],[14.94556,-62.7808,5.11,0],[15.5875,39.01,5.11,1.64],[15.85433,-3.0906,5.11,0.12],[17.25583,-26.6028,5.11,0.86],[19.51258,27.9653,5.11,-0.1],[19.85044,10.4156,5.11,0.55],[20.56531,-44.5161,5.11,1.01],[20.80811,-43.9886,5.11,0.35],[21.66975,43.2739,5.11,1.6],[22.08581,62.28,5.11,0.08],[23.05828,-34.7494,5.11,0.29],[23.86844,-82.0189,5.11,0.92],[0.241,-7.7806,5.12,1.62],[0.36286,-20.0578,5.12,1.82],[1.49336,-21.6294,5.12,0.02],[4.39775,9.4608,5.12,0.07],[5.11269,-4.655,5.12,-0.06],[5.14544,-4.4561,5.12,0.44],[6.89506,68.8883,5.12,-0.13],[8.08458,13.1181,5.12,0.01],[9.27308,-44.2658,5.12,1.67],[9.56236,-49.005,5.12,-0.12],[10.69906,65.7164,5.12,1.2],[12.77742,16.5775,5.12,1.35],[14.38964,8.4467,5.12,-0.02],[14.74978,27.075,5.12,null],[15.94819,-33.9664,5.12,0.12],[16.02064,17.8183,5.12,0.99],[17.34839,24.4994,5.12,-0.03],[17.40361,-44.1625,5.12,-0.06],[17.81367,25.6228,5.12,1.16],[18.35028,28.87,5.12,0.2],[18.40383,39.5072,5.12,0.03],[19.19458,56.8592,5.12,1.01],[19.58536,-10.5603,5.12,1.13],[19.84278,38.7225,5.12,1.69],[20.66739,-60.5489,5.12,0.53],[23.15875,8.6772,5.12,1.47],[0.61294,44.4886,5.13,1.6],[1.24,-7.9231,5.13,0.46],[5.58792,-5.3897,5.13,0.02],[7.06056,10.9517,5.13,1.39],[7.36739,36.7606,5.13,1.08],[7.62131,-4.1111,5.13,0.44],[8.22672,-46.9919,5.13,-0.14],[8.43189,7.5644,5.13,0.94],[9.23906,61.4233,5.13,0.58],[11.14278,-61.9472,5.13,0.22],[11.52947,-59.4422,5.13,1.08],[12.59597,-41.0219,5.13,0.22],[15.24397,67.3467,5.13,0.53],[16.18389,-29.4164,5.13,1.12],[16.77778,-67.1097,5.13,-0.08],[18.72969,-38.3236,5.13,0.09],[19.15272,76.5606,5.13,0.31],[20.02908,-59.3761,5.13,1.53],[22.35989,-21.5983,5.13,1.07],[23.98217,-52.7458,5.13,1.13],[2.02844,-44.7136,5.14,1.49],[2.46714,-33.8111,5.14,0.1],[3.50681,11.3364,5.14,-0.03],[5.43869,-58.9125,5.14,1],[6.05758,19.6906,5.14,-0.11],[6.29492,-16.8158,5.14,1.3],[6.84919,67.5719,5.14,-0.17],[6.83183,-46.6147,5.14,0.45],[7.01431,-51.4025,5.14,1.61],[7.17986,-48.9322,5.14,1.24],[7.79175,33.4156,5.14,1.6],[7.86167,1.7669,5.14,-0.12],[8.33442,27.2178,5.14,0.47],[9.13989,66.8733,5.14,1.51],[9.15597,22.0456,5.14,0.97],[9.96142,41.0556,5.14,0.46],[12.20331,77.6164,5.14,0.33],[12.34881,-13.5656,5.14,1.05],[14.32569,-2.2656,5.14,1.02],[16.25425,-47.3722,5.14,-0.13],[18.52397,-18.4028,5.14,0],[18.584,-10.9772,5.14,0.92],[18.73969,39.6131,5.14,0.19],[18.97678,-60.2006,5.14,1.37],[19.88817,57.5236,5.14,-0.13],[20.77742,16.1244,5.14,0.49],[22.10056,45.0144,5.14,1.57],[2.53506,36.1472,5.15,1.47],[3.3105,50.2222,5.15,-0.06],[6.52306,-12.3917,5.15,1.27],[8.86578,43.7267,5.15,0.98],[11.12128,-42.6386,5.15,0.03],[11.53022,-59.5158,5.15,0.49],[11.61683,-61.2833,5.15,1.12],[11.63536,-61.8264,5.15,-0.02],[12.061,-42.4342,5.15,0.41],[12.36869,-67.5219,5.15,0.19],[13.30403,49.6819,5.15,-0.07],[13.78233,-36.2519,5.15,-0.02],[13.91169,-1.5031,5.15,1.08],[13.97531,-24.9722,5.15,-0.1],[14.84478,-15.9972,5.15,0.41],[15.08864,-41.0672,5.15,1.01],[15.57703,-28.0469,5.15,1.3],[16.76386,8.5825,5.15,1.53],[17.73575,-51.8342,5.15,0.7],[19.22853,2.2936,5.15,-0.07],[19.43586,36.3178,5.15,-0.12],[20.25839,23.5086,5.15,1.04],[20.69919,-66.7608,5.15,-0.06],[21.07861,-77.0239,5.15,0.49],[1.18522,31.4247,5.16,0.23],[1.29667,3.6144,5.16,0.07],[2.63389,72.8183,5.16,0.88],[8.25442,-62.9158,5.16,0.09],[8.72786,-49.8228,5.16,-0.2],[8.99003,-59.0836,5.16,0.42],[10.22517,-66.3731,5.16,0.21],[10.58603,57.0828,5.16,0.34],[12.95122,-51.1986,5.16,-0.06],[15.26778,-41.4911,5.16,0.58],[17.88836,40.0081,5.16,1.18],[17.98478,-30.2531,5.16,1.77],[18.53928,-39.7039,5.16,0.08],[19.10553,-52.3408,5.16,0.53],[19.41617,11.9444,5.16,0.77],[19.42461,19.7986,5.16,0.98],[20.65692,0.4864,5.16,1.06],[21.08728,-54.7272,5.16,1.21],[21.38156,6.8111,5.16,0.05],[22.87336,9.8356,5.16,0.48],[23.19561,8.72,5.16,0.13],[0.47047,44.3944,5.17,0.03],[1.13789,54.9203,5.17,0.69],[2.37261,55.8456,5.17,0.37],[2.94372,-3.7122,5.17,0.08],[4.39467,-3.7456,5.17,0.08],[5.76664,-32.3064,5.17,-0.28],[5.84811,-52.1089,5.17,0.99],[6.99736,-67.9161,5.17,1.4],[7.07175,-56.7497,5.17,-0.04],[7.72831,-40.9339,5.17,1.1],[7.86286,-13.8981,5.17,0.6],[7.96439,-45.5778,5.17,1.27],[7.99378,-60.5869,5.17,1.74],[8.42528,-51.7281,5.17,-0.16],[9.71589,72.2525,5.17,1.04],[11.42867,-63.9728,5.17,0.5],[11.65817,-65.3978,5.17,0.8],[12.91022,-57.1683,5.17,-0.12],[15.08006,-64.0317,5.17,0.93],[15.42983,15.4281,5.17,1.66],[15.47728,1.8422,5.17,0.23],[15.57406,-9.1833,5.17,-0.09],[18.87767,-52.1075,5.17,0.94],[19.61053,44.695,5.17,0.93],[19.65322,5.3978,5.17,0.03],[20.31086,34.9828,5.17,0.65],[20.92686,13.7214,5.17,1.12],[21.71778,72.3203,5.17,1.05],[0.35203,37.9686,5.18,0.42],[0.35867,-28.9817,5.18,1],[1.71553,70.6225,5.18,-0.04],[2.74933,12.4458,5.18,0.24],[5.19489,16.0456,5.18,1.49],[5.66228,25.8969,5.18,-0.15],[7.04022,24.2153,5.18,0.94],[7.77758,37.5175,5.18,1.58],[7.82811,-17.2283,5.18,1.28],[8.98119,-47.2347,5.18,0.25],[10.72581,46.2039,5.18,0.33],[11.28817,2.0106,5.18,1.52],[11.93358,-17.1508,5.18,-0.02],[12.1305,-75.3669,5.18,1.3],[12.40514,26.0986,5.18,0.08],[18.02497,21.5953,5.18,0.95],[19.38081,26.2625,5.18,-0.12],[20.23736,28.6947,5.18,0.18],[21.10686,-32.3417,5.18,1.1],[21.32283,64.8719,5.18,-0.04],[21.69247,-14.0475,5.18,0.65],[23.78778,-50.2267,5.18,-0.19],[23.85592,-18.9089,5.18,-0.14],[0.50631,-23.7878,5.19,0.12],[0.83544,-10.6444,5.19,0.5],[2.40692,50.0067,5.19,0.98],[4.27864,53.6119,5.19,0.05],[4.91303,11.4261,5.19,0.12],[5.53136,-76.3411,5.19,1.13],[6.699,-9.1672,5.19,1.53],[7.40236,40.6722,5.19,1.23],[8.666,-53.055,5.19,-0.14],[13.13161,-10.7403,5.19,1.14],[15.77778,62.5994,5.19,0.04],[19.99867,37.0428,5.19,-0.17],[22.64417,63.5844,5.19,0.06],[0.58747,-3.5928,5.2,0.56],[2.37572,-23.8164,5.2,0.6],[4.11011,27.6,5.2,-0.13],[5.12611,-63.3997,5.2,1.65],[5.91606,59.8883,5.2,0.02],[6.24747,19.1564,5.2,0.44],[6.45383,0.2992,5.2,1.18],[6.647,39.9025,5.2,-0.07],[6.74122,-31.0706,5.2,-0.12],[7.03233,-5.7222,5.2,1.68],[7.06744,-42.3372,5.2,0.2],[7.26525,59.6375,5.2,1.07],[8.35583,-36.4844,5.2,-0.19],[8.67203,-40.2642,5.2,-0.01],[8.65144,-70.3869,5.2,0.01],[8.95414,15.3228,5.2,0.15],[8.99239,32.4186,5.2,0.93],[9.77547,57.1281,5.2,1.62],[11.60078,69.3228,5.2,1.01],[14.92628,-60.1142,5.2,1.16],[15.11044,-16.2569,5.2,1.58],[15.84492,15.1336,5.2,null],[16.37261,33.7992,5.2,1.6],[16.51372,-61.6336,5.2,1.23],[17.30019,-24.2869,5.2,1.1],[18.79139,-5.705,5.2,1.47],[20.52511,74.9547,5.2,0.07],[22.57822,-20.7083,5.2,0.44],[23.37756,-15.0392,5.2,0.2],[1.12997,-41.4869,5.21,0.16],[2.67767,-54.55,5.21,0.4],[6.07042,-6.7092,5.21,-0.06],[6.44692,58.4172,5.21,1.53],[6.70675,17.6453,5.21,0.06],[8.15997,-44.1228,5.21,-0.19],[8.83097,-32.7806,5.21,0.87],[10.49131,-2.7392,5.21,-0.06],[12.03522,43.0456,5.21,0.26],[12.34269,-22.2158,5.21,-0.1],[13.54947,-10.165,5.21,0.96],[14.78369,-52.3836,5.21,0.98],[18.45347,0.1961,5.21,0.5],[21.11517,38.7458,5.21,1.18],[22.64386,56.7958,5.21,1.58],[0.84478,-50.9869,5.22,0.36],[2.092,76.115,5.22,0.95],[2.82153,17.4642,5.22,-0.06],[4.24342,10.0111,5.22,-0.1],[5.98044,0.5531,5.22,0.01],[6.40286,-11.5303,5.22,1.24],[6.49125,-56.8528,5.22,1.09],[6.79433,48.7894,5.22,1.12],[7.46233,21.445,5.22,0.39],[8.92769,27.9275,5.22,1],[11.42483,-36.0631,5.22,0.99],[11.69556,-32.4997,5.22,1.48],[12.76031,7.6733,5.22,0.33],[13.16647,17.5294,5.22,0.45],[13.16647,17.5294,5.22,null],[13.26633,-19.9431,5.22,1.03],[13.27958,9.4242,5.22,0.59],[16.23081,-11.8375,5.22,1.42],[16.85936,-41.2306,5.22,0.07],[18.95044,32.9014,5.22,0.59],[19.14997,6.0733,5.22,0.35],[20.03372,24.9381,5.22,0.36],[20.65456,-14.9547,5.22,-0.12],[23.5215,39.2364,5.22,1.02],[0.50203,29.7517,5.23,0.24],[1.35206,28.7381,5.23,1.39],[2.03411,2.7636,5.23,null],[2.97833,-2.7825,5.23,0],[3.41125,64.5861,5.23,2.08],[3.60483,-17.4669,5.23,-0.13],[4.11681,29.0014,5.23,0.34],[4.62669,-2.4733,5.23,0.28],[5.36344,41.8044,5.23,-0.15],[6.53008,11.5444,5.23,0.15],[7.79208,-46.6086,5.23,-0.14],[8.162,-47.9375,5.23,-0.21],[8.69914,-45.4108,5.23,0.21],[9.02906,-52.1883,5.23,-0.12],[9.98119,-35.8911,5.23,0.31],[10.77492,-64.2633,5.23,-0.07],[10.78264,-56.7572,5.23,-0.08],[11.21256,-64.1697,5.23,-0.06],[14.33097,-61.2731,5.23,0.29],[15.83819,2.1964,5.23,1.02],[16.46208,-7.5981,5.23,1.72],[17.43333,-50.6336,5.23,1.06],[17.58319,61.875,5.23,0.61],[18.98492,13.6225,5.23,0.53],[19.12378,32.5017,5.23,0.34],[20.98456,4.2936,5.23,0.46],[0.74567,-22.0061,5.24,0.33],[1.22886,7.5753,5.24,0.32],[1.70828,20.2686,5.24,0.84],[3.30358,-62.5064,5.24,0.6],[3.79433,-23.8747,5.24,0.07],[4.36481,-63.3864,5.24,0.96],[6.53925,-37.6967,5.24,1],[7.99122,-39.2972,5.24,0.39],[9.12911,10.6681,5.24,-0.11],[9.27825,-6.3531,5.24,1.17],[10.29383,-8.0689,5.24,0.31],[10.76442,30.6822,5.24,-0.06],[10.89153,-20.1389,5.24,0.47],[12.92458,65.4386,5.24,0.28],[14.20111,69.4325,5.24,1.58],[14.79578,-26.0875,5.24,0.94],[15.49008,-46.7328,5.24,1.74],[15.63044,40.3533,5.24,0.88],[15.71064,-37.425,5.24,0.98],[16.79622,5.2467,5.24,-0.02],[18.05136,-8.1806,5.24,0.38],[18.79572,-40.4061,5.24,0.78],[18.82781,-20.3247,5.24,1.41],[20.28203,40.365,5.24,1.65],[21.26053,-20.6517,5.24,1.17],[21.49083,46.5406,5.24,0.97],[21.70022,-23.2628,5.24,0.95],[22.19689,56.8394,5.24,0.51],[23.05914,67.2092,5.24,1.26],[23.73669,-18.2769,5.24,-0.08],[0.19556,-35.1331,5.25,0.44],[0.20278,-17.9383,5.25,1.48],[1.70239,-32.3269,5.25,1.05],[2.52503,2.2672,5.25,1.27],[3.74181,-1.1631,5.25,-0.1],[5.39172,-13.9272,5.25,-0.21],[6.77897,43.5775,5.25,0.56],[7.30933,-39.2103,5.25,0.01],[7.46725,6.9419,5.25,0.22],[7.53497,1.9144,5.25,0.22],[7.56014,15.8267,5.25,0.05],[9.24014,-43.2275,5.25,-0.14],[9.63936,40.2397,5.25,0.22],[10.87525,-57.2406,5.25,0.16],[11.59878,-47.6417,5.25,0.25],[13.09569,35.7989,5.25,-0.08],[13.18978,-43.3689,5.25,1.05],[13.44533,-12.7078,5.25,1.52],[13.868,-52.8117,5.25,-0.09],[14.13814,49.4581,5.25,1.65],[15.10464,54.5564,5.25,0.96],[16.36353,69.1094,5.25,1.12],[16.50933,20.4792,5.25,1.29],[16.90992,-6.1539,5.25,1.08],[17.02678,33.5683,5.25,0.02],[17.38781,-47.4683,5.25,-0.11],[17.63489,-54.5003,5.25,0.2],[18.40506,-44.1103,5.25,-0.19],[18.38028,17.8267,5.25,1.27],[18.83136,32.5508,5.25,0.08],[20.45533,-18.2117,5.25,-0.07],[22.69128,40.2256,5.25,-0.14],[1.99389,64.6214,5.26,0.01],[2.81708,-62.8067,5.26,0.1],[3.07122,-7.6008,5.26,0.2],[3.83858,25.5794,5.26,0.21],[4.34342,15.0953,5.26,0.22],[4.56992,-8.9703,5.26,1.47],[5.59431,-4.8558,5.26,0.24],[6.78928,-37.9297,5.26,-0.08],[8.58761,-58.225,5.26,-0.14],[9.30161,-51.0511,5.26,-0.07],[9.97039,12.4447,5.26,-0.04],[10.51794,82.5586,5.26,0.37],[11.67975,21.3528,5.26,0.98],[12.01422,-19.6589,5.26,-0.2],[15.24144,29.1642,5.26,0.03],[15.60822,10.01,5.26,0.95],[19.95172,-58.9014,5.26,-0.01],[21.21753,-39.4253,5.26,0.44],[22.79253,-19.6133,5.26,0.94],[1.50172,47.0072,5.27,1],[2.21336,21.2108,5.27,0.43],[3.10931,-6.0886,5.27,1.6],[4.34453,65.1406,5.27,0.81],[4.73919,-59.7328,5.27,0.2],[5.80006,6.4542,5.27,0.23],[6.32856,-7.8231,5.27,-0.19],[6.49697,-50.2392,5.27,0.41],[6.58669,28.0222,5.27,-0.03],[6.62989,-32.3397,5.27,1.18],[6.85917,21.7611,5.27,-0.02],[7.7345,50.4339,5.27,0],[8.63117,-26.255,5.27,-0.04],[9.26386,56.7414,5.27,1.56],[9.23833,-55.5697,5.27,0.99],[9.92861,49.82,5.27,0.07],[11.78211,55.6283,5.27,1.27],[14.13217,43.8544,5.27,1.59],[16.34078,-78.6672,5.27,1.41],[16.46592,-64.0581,5.27,0.36],[18.31964,24.4461,5.27,1.53],[18.76297,74.0856,5.27,0.92],[18.99597,26.2306,5.27,1.24],[19.70944,11.8267,5.27,0.57],[20.02458,64.8211,5.27,1.56],[22.08347,62.7856,5.27,1.41],[22.21961,86.1081,5.27,-0.03],[0.16725,-82.2239,5.28,1.05],[1.64192,73.04,5.28,0.96],[2.21514,-30.7239,5.28,-0.02],[2.26561,33.3589,5.28,-0.01],[2.36572,0.3958,5.28,1.65],[2.52792,-79.1094,5.28,0.98],[3.0145,52.3517,5.28,-0.05],[3.35378,21.1469,5.28,-0.07],[3.94347,50.6953,5.28,0.41],[4.02556,-1.5497,5.28,-0.15],[4.42361,22.1997,5.28,0.25],[4.43508,31.4389,5.28,0.97],[5.39106,57.5444,5.28,-0.03],[7.31422,-26.5858,5.28,0.96],[8.41769,-24.0461,5.28,1.48],[10.14517,-65.8153,5.28,0.98],[10.223,-51.2333,5.28,0.25],[12.82044,83.4128,5.28,-0.03],[18.91303,-87.6058,5.28,1.28],[18.03975,20.8336,5.28,-0.09],[18.56606,-33.0167,5.28,-0.11],[19.12169,36.1003,5.28,-0.11],[19.29694,11.5953,5.28,0.2],[19.93731,11.4239,5.28,-0.01],[20.32322,-19.1186,5.28,1.4],[21.26247,-15.1714,5.28,1.64],[23.70775,-15.4478,5.28,1.37],[1.17758,68.7786,5.29,-0.02],[2.46944,29.6694,5.29,null],[3.387,49.2133,5.29,-0.07],[4.22586,7.7161,5.29,0.36],[4.71508,43.365,5.29,0],[5.70419,-34.6678,5.29,-0.05],[5.79525,13.8997,5.29,-0.17],[5.91394,-52.6353,5.29,0.31],[6.60914,38.4453,5.29,2.61],[6.78086,-14.4258,5.29,-0.04],[7.97239,2.2247,5.29,0.92],[8.36789,-73.4,5.29,0.01],[8.7875,-1.8972,5.29,0.04],[9.29039,-74.8944,5.29,0.02],[10.48128,-64.1722,5.29,1.86],[11.76219,-45.69,5.29,-0.12],[12.33019,48.9842,5.29,1.66],[12.48186,25.9128,5.29,-0.05],[14.24744,10.1006,5.29,1],[16.63344,56.0156,5.29,1.08],[17.05244,-53.2369,5.29,0.48],[17.44764,-45.8436,5.29,-0.07],[21.53497,-41.1792,5.29,1.1],[21.84842,-82.7192,5.29,0.75],[21.76789,22.9489,5.29,1.41],[21.83575,17.2856,5.29,0.37],[22.06469,63.1197,5.29,1.58],[22.41022,-72.2556,5.29,0.65],[23.76692,-18.6781,5.29,0.28],[2.32133,47.38,5.3,-0.01],[2.61736,34.2639,5.3,1.55],[2.67808,27.0608,5.3,0.09],[4.80008,56.7572,5.3,0.25],[5.13011,20.4183,5.3,0.09],[5.33308,-12.3156,5.3,-0.12],[6.25697,16.1431,5.3,-0.14],[6.92967,-22.9414,5.3,-0.18],[7.41617,11.6697,5.3,0.1],[7.77117,10.7683,5.3,0.01],[8.12939,21.5817,5.3,0.63],[11.44314,-61.1153,5.3,-0.08],[11.70789,66.745,5.3,1.28],[11.91181,-25.7139,5.3,0.88],[14.90558,-24.6422,5.3,1.32],[19.99758,-34.6978,5.3,0.17],[21.04944,-38.6317,5.3,0.41],[21.14267,-21.1936,5.3,0.01],[21.70431,5.68,5.3,1.64],[22.07983,-0.9067,5.3,0.23],[23.65231,50.4717,5.3,-0.06],[23.87697,10.9475,5.3,0.18],[0.93375,-11.2667,5.31,1.52],[1.76078,-25.0525,5.31,0.39],[2.22675,51.0658,5.31,0.93],[2.62344,-52.5431,5.31,0.27],[3.54064,46.0569,5.31,0.4],[4.62047,0.9983,5.31,-0.12],[4.71289,-50.4814,5.31,0.98],[5.04528,-71.3144,5.31,1],[5.62906,-28.6894,5.31,0.46],[5.77428,-46.5972,5.31,1.04],[6.12822,-19.1658,5.31,1.68],[7.20439,-40.4989,5.31,0.06],[7.73525,25.7842,5.31,1.54],[8.07117,-32.675,5.31,1.91],[8.82269,-3.4431,5.31,-0.09],[10.16831,-12.8161,5.31,0.36],[11.4845,39.3369,5.31,0.01],[12.23406,-45.7239,5.31,1.43],[12.71397,-63.0586,5.31,0.27],[13.42053,-64.4853,5.31,0.4],[14.82197,-14.1489,5.31,0.07],[17.50661,-1.0625,5.31,0.72],[20.03122,-66.9442,5.31,1.22],[20.38631,5.3431,5.31,0.97],[20.97122,22.3258,5.31,1.4],[21.45594,37.1167,5.31,-0.14],[21.44767,48.835,5.31,0.07],[23.67728,-32.0731,5.31,0.97],[3.04508,-7.6853,5.32,0.94],[6.21419,65.7183,5.32,1.34],[6.76647,-14.7961,5.32,0.07],[8.21356,68.4742,5.32,1.04],[9.23006,43.2178,5.32,-0.14],[9.67847,-57.9836,5.32,0.2],[9.86472,24.3953,5.32,0.23],[11.26442,13.3075,5.32,1.2],[11.79858,8.2458,5.32,0.02],[12.39317,-35.4128,5.32,-0.08],[12.9325,-56.8361,5.32,0.01],[12.99864,66.5972,5.32,1.29],[14.4135,-24.8064,5.32,0.96],[14.92908,-33.8558,5.32,0.04],[16.88281,31.7017,5.32,0.29],[20.18664,-36.1011,5.32,0.87],[20.27975,24.6711,5.32,0.95],[22.23833,-21.0742,5.32,0.8],[22.41567,-57.7972,5.32,0.67],[23.36525,31.8125,5.32,-0.11],[23.55781,22.4989,5.32,1.6],[0.68533,39.4586,5.33,0.89],[2.89517,38.3375,5.33,0.41],[4.06239,5.4356,5.33,-0.08],[4.88967,2.5081,5.33,1.64],[4.91328,7.7792,5.33,1.22],[6.2625,12.5511,5.33,-0.02],[6.88475,59.4486,5.33,0.65],[7.41114,-16.2011,5.33,-0.05],[7.58575,30.9611,5.33,1.01],[7.81714,-24.9122,5.33,0.76],[8.48464,-47.9292,5.33,-0.14],[8.54514,20.4411,5.33,1.25],[8.89742,-47.5208,5.33,0.26],[9.28256,-39.4014,5.33,1.17],[10.39147,-38.01,5.33,0.25],[11.68417,34.2017,5.33,0.72],[13.23636,-19.9308,5.33,0.87],[13.28767,13.6756,5.33,1.31],[15.25317,4.9394,5.33,1.09],[15.6965,12.8475,5.33,0.04],[16.37444,-49.5722,5.33,-0.04],[16.52825,-41.8169,5.33,0.33],[17.20772,10.5853,5.33,1.59],[18.28542,-56.0233,5.33,-0.05],[19.16464,-68.4247,5.33,0.91],[19.86406,-39.8744,5.33,-0.06],[22.21328,34.6047,5.33,1.13],[23.12758,46.3872,5.33,1.41],[1.09469,21.4733,5.34,-0.03],[1.76647,-5.7333,5.34,1.52],[4.32128,-44.2681,5.34,1.08],[5.13136,8.4983,5.34,0.33],[5.31978,2.5958,5.34,0.41],[5.55872,-1.1561,5.34,-0.18],[5.54989,-64.2275,5.34,1.04],[9.25383,14.9414,5.34,1.32],[10.30211,-28.9919,5.34,0.24],[10.77125,-64.515,5.34,-0.1],[10.82094,10.5453,5.34,0.03],[12.13742,-48.6928,5.34,-0.01],[14.96469,-76.6628,5.34,1.45],[18.04753,-24.2822,5.34,0.52],[18.38142,-36.6694,5.34,-0.14],[18.518,-32.9892,5.34,0.16],[19.21131,-7.9394,5.34,0.13],[21.47914,-69.5053,5.34,1.55],[22.28003,-12.8314,5.34,1.14],[23.69292,-18.0272,5.34,1.57],[2.02075,-30.0017,5.35,0.88],[2.41497,-60.3119,5.35,0.39],[2.53594,-1.035,5.35,1.02],[2.59633,34.6875,5.35,1.66],[3.76122,6.05,5.35,-0.12],[4.32392,21.1422,5.35,-0.08],[4.66614,53.4731,5.35,0.32],[5.54481,-1.5919,5.35,-0.19],[5.85611,-7.5181,5.35,-0.2],[6.26128,59.9992,5.35,1.34],[6.78042,57.1692,5.35,0.96],[7.23889,3.1114,5.35,1.19],[7.41217,-31.8089,5.35,1.07],[7.92775,19.8839,5.35,-0.04],[7.94942,-43.5003,5.35,-0.18],[8.52658,18.0944,5.35,1.56],[8.843,-66.7931,5.35,0.42],[9.53869,-40.6494,5.35,0.9],[9.72886,14.0217,5.35,1.63],[10.27067,29.3106,5.35,0.01],[12.07742,-68.3292,5.35,-0.01],[12.49925,58.4058,5.35,0.2],[15.35056,0.7153,5.35,1.19],[16.49508,-46.2433,5.35,0.56],[16.92283,18.4333,5.35,1.41],[17.38933,-28.1431,5.35,1.55],[18.77283,75.4339,5.35,0.05],[19.57811,42.4128,5.35,0.05],[19.80033,-56.3625,5.35,0.2],[20.8945,-39.81,5.35,1.32],[22.20053,60.7594,5.35,1.17],[22.83969,-80.1242,5.35,-0.15],[0.66544,21.4383,5.36,1.16],[1.047,-46.3975,5.36,0.9],[4.06942,2.8269,5.36,0.5],[5.57131,3.7669,5.36,0.05],[6.10975,38.4828,5.36,0.25],[6.16642,58.9358,5.36,1.09],[6.36281,53.4522,5.36,0.43],[6.31406,-9.3903,5.36,1.24],[7.25583,-30.6864,5.36,-0.17],[7.49889,49.6725,5.36,0.45],[8.1925,-7.7725,5.36,0.89],[9.40253,-80.7869,5.36,0.45],[10.01686,31.9236,5.36,0.66],[11.20919,-49.1011,5.36,0.18],[11.641,8.1342,5.36,1.57],[13.71769,3.5381,5.36,1.11],[14.75481,-62.8758,5.36,0.29],[18.56575,52.3536,5.36,1.09],[18.93803,-42.7106,5.36,1],[19.93369,16.6347,5.36,0.67],[20.10606,35.9725,5.36,0.85],[0.34331,8.1903,5.37,1.34],[1.12186,-61.7753,5.37,0.88],[3.93283,47.8714,5.37,-0.08],[4.15494,-16.3858,5.37,-0.15],[4.37636,25.6292,5.37,-0.05],[4.76714,11.7056,5.37,0.19],[7.75972,-34.1731,5.37,0.6],[8.33028,-71.515,5.37,-0.06],[8.68364,45.8339,5.37,0.99],[9.52567,35.1031,5.37,1.53],[11.99914,3.6553,5.37,0],[13.38364,-17.7353,5.37,0.99],[14.50581,-49.5192,5.37,0.05],[15.3635,32.9339,5.37,-0.07],[15.41247,-39.7103,5.37,-0.11],[15.91053,43.1386,5.37,1.65],[16.16403,-3.4669,5.37,1.45],[17.61044,48.5856,5.37,1.15],[18.65972,-43.1861,5.37,1.68],[18.77239,-22.3922,5.37,1.64],[18.73969,39.6128,5.37,null],[20.00092,17.5167,5.37,1.67],[21.01969,46.1558,5.37,-0.21],[22.16547,-34.0147,5.37,0.24],[22.30433,-53.6278,5.37,0.6],[22.33664,-7.8211,5.37,-0.06],[22.341,5.7894,5.37,-0.02],[23.07767,-53.965,5.37,1.45],[0.54319,20.2944,5.38,1.08],[0.77583,15.4756,5.38,1.65],[1.43758,19.1722,5.38,0.39],[2.08539,77.2814,5.38,0.31],[3.30622,-0.9303,5.38,1.04],[4.04353,-0.2689,5.38,0.5],[4.32686,21.7736,5.38,-0.14],[4.34417,-20.6397,5.38,-0.02],[4.99733,-10.2633,5.38,0.8],[5.04683,-49.1514,5.38,0.42],[5.59086,24.0394,5.38,-0.09],[6.11075,-4.1939,5.38,-0.13],[6.42461,-69.6903,5.38,0.97],[7.39142,-27.8342,5.38,1.53],[8.12167,-20.5547,5.38,0.1],[9.463,-6.0711,5.38,0.64],[10.58692,-39.5628,5.38,2.88],[10.71128,-59.2158,5.38,0.26],[12.31386,75.1606,5.38,-0.02],[13.70031,-58.7872,5.38,-0.03],[14.93814,-52.8097,5.38,0.13],[15.64847,-19.3019,5.38,0.86],[16.13544,-26.3267,5.38,1.65],[17.33606,25.5375,5.38,0.03],[18.25358,-20.7283,5.38,0.07],[18.94458,-37.3433,5.38,-0.14],[18.97075,17.3608,5.38,0.8],[19.00381,50.5336,5.38,-0.18],[19.082,53.3967,5.38,-0.01],[19.58081,29.4631,5.38,0.55],[20.56583,13.0272,5.38,0.07],[0.70789,-65.4681,5.39,0.5],[0.84544,64.2475,5.39,0.49],[2.83172,-27.9417,5.39,0.02],[4.36322,60.7356,5.39,1.49],[4.65172,7.8708,5.39,0.26],[6.28517,9.9425,5.39,0.1],[6.81606,-15.1447,5.39,-0.1],[7.11131,-11.2942,5.39,0.05],[7.34408,-52.0861,5.39,-0.07],[7.39219,-32.2022,5.39,-0.18],[8.90408,30.5794,5.39,1.05],[9.28811,-68.6894,5.39,0.42],[11.40064,1.4078,5.39,0.94],[11.56036,-40.5869,5.39,0.12],[12.38036,-57.6761,5.39,-0.1],[14.44094,19.2269,5.39,0.23],[14.64728,44.4044,5.39,0],[15.89828,-24.5331,5.39,-0.02],[16.37478,33.7036,5.39,1.53],[16.47611,0.665,5.39,1.46],[17.13389,35.9353,5.39,0.31],[17.24422,14.39,5.39,null],[17.34433,32.4678,5.39,0.62],[18.31931,7.2597,5.39,1.07],[18.33578,-15.8317,5.39,1.47],[18.49472,-1.9853,5.39,0.96],[18.60772,9.1225,5.39,0.37],[19.84633,-10.7636,5.39,0.38],[20.09244,61.9956,5.39,1.18],[20.7035,50.34,5.39,-0.1],[20.79261,80.5522,5.39,1.12],[23.16708,9.8219,5.39,-0.08],[0.41319,61.8311,5.4,0],[1.88814,40.7297,5.4,1.32],[3.80983,-37.6222,5.4,0.01],[4.51036,13.7244,5.4,0.26],[4.61267,-62.0775,5.4,1.58],[4.7405,11.1461,5.4,0.25],[5.64392,30.4925,5.4,0.45],[5.93036,20.175,5.4,0.99],[6.48042,-7.0344,5.4,-0.07],[6.78133,-51.2658,5.4,1.34],[6.8575,-70.9633,5.4,-0.11],[13.47419,59.9458,5.4,-0.01],[15.76822,-1.8044,5.4,-0.03],[16.28758,59.755,5.4,1.63],[16.40036,-39.1931,5.4,0.62],[19.27269,-45.4664,5.4,1.35],[19.65736,42.8183,5.4,-0.08],[22.18608,50.8233,5.4,0.15],[23.14469,2.1278,5.4,0.91],[0.19289,-27.7997,5.41,1.34],[0.79614,74.8475,5.41,-0.08],[1.27675,-2.5003,5.41,0.9],[1.99614,-20.8244,5.41,1.65],[2.70931,-50.8003,5.41,0.56],[4.18053,26.4808,5.41,0.34],[5.31667,33.7483,5.41,-0.19],[8.00325,73.9181,5.41,1.42],[8.93211,11.6261,5.41,1.46],[9.47778,45.6014,5.41,0.98],[9.47431,9.0567,5.41,0.6],[9.59433,35.8103,5.41,0.77],[10.27797,13.7283,5.41,1.61],[11.78864,-57.6964,5.41,1.67],[14.32119,13.0042,5.41,0.38],[14.62225,-46.1339,5.41,1.01],[15.73456,-15.6728,5.41,0.23],[16.01742,33.3036,5.41,0.6],[16.91533,20.9586,5.41,0.97],[17.36831,-70.1233,5.41,-0.04],[18.36908,23.2853,5.41,1.6],[19.82369,-72.5033,5.41,0.22],[20.82169,-68.7764,5.41,1.12],[21.40267,-20.8519,5.41,1.16],[21.46114,27.6086,5.41,0.04],[0.15583,-27.9878,5.42,0.42],[0.75478,55.2217,5.42,0.04],[0.96394,28.9922,5.42,1.08],[1.41133,-41.4925,5.42,1.04],[1.59972,-15.4003,5.42,1.21],[2.37011,-0.885,5.42,0.31],[5.50283,63.0672,5.42,1.71],[5.45281,17.9622,5.42,-0.1],[6.56375,-36.2322,5.42,1.44],[7.53011,17.0861,5.42,1.13],[7.68772,-38.5336,5.42,-0.15],[8.07975,79.4797,5.42,-0.06],[8.52525,-19.5775,5.42,-0.06],[8.94475,-85.6631,5.42,0.31],[10.78111,-17.2967,5.42,0.11],[11.22933,-0.0697,5.42,-0.03],[12.56081,33.2475,5.42,1],[14.47825,-6.9006,5.42,1.49],[15.89883,-23.9781,5.42,-0.04],[16.40881,-37.5658,5.42,-0.11],[18.61033,33.4689,5.42,-0.1],[19.04847,-3.6989,5.42,0],[19.08267,-4.0314,5.42,1.12],[19.84578,-59.1931,5.42,0.08],[21.22147,-27.6194,5.42,1.42],[22.01394,-28.4536,5.42,-0.09],[22.85061,-39.1569,5.42,1.43],[0.474,-39.915,5.43,1.56],[0.65275,49.3544,5.43,1.64],[1.05072,-4.8367,5.43,1.11],[2.05325,0.1283,5.43,0.15],[2.64694,21.9614,5.43,0.16],[2.73478,44.2969,5.43,0.9],[4.45078,80.8242,5.43,1.17],[5.20622,73.9467,5.43,-0.12],[5.15544,9.8294,5.43,0.24],[6.53058,-8.1581,5.43,1.38],[7.3835,-31.9239,5.43,-0.15],[7.48492,-38.8122,5.43,-0.16],[7.88431,-36.3639,5.43,1.16],[9.13336,29.6542,5.43,0.89],[11.08172,-35.8047,5.43,0.03],[12.79289,66.7903,5.43,1.56],[13.79039,-17.86,5.43,1.62],[14.25669,-18.2008,5.43,-0.03],[15.60336,-44.3969,5.43,1.5],[15.97633,-24.8314,5.43,-0.09],[16.20203,-8.5475,5.43,0.12],[18.74922,-39.6864,5.43,0.87],[19.29544,23.0256,5.43,0.02],[19.42492,-23.9622,5.43,1.43],[20.63031,11.3778,5.43,0.06],[21.29925,-17.9853,5.43,-0.12],[22.23856,-27.7669,5.43,-0.16],[22.8295,55.9028,5.43,1.17],[22.95125,48.6842,5.43,-0.09],[22.99094,0.9628,5.43,0.98],[23.08606,-7.6936,5.43,0.3],[23.81394,62.2144,5.43,0.67],[3.8205,70.8711,5.44,0.09],[4.17292,-6.9239,5.44,0.94],[4.86811,63.5053,5.44,1.57],[6.74597,28.9708,5.44,1.45],[7.13944,15.9308,5.44,1.03],[11.14553,-28.0806,5.44,0.07],[11.62608,-47.7472,5.44,1.24],[11.97089,-56.3172,5.44,-0.08],[12.47292,-39.0414,5.44,-0.08],[15.04981,-32.6433,5.44,-0.12],[15.64708,-52.3728,5.44,0],[15.90961,20.3108,5.44,1.59],[16.10547,67.8103,5.44,-0.02],[16.27864,-53.8111,5.44,1.73],[17.48047,0.3306,5.44,0.22],[18.23775,-21.7131,5.44,1.52],[18.9145,41.6028,5.44,1.03],[20.52189,49.2203,5.44,1.55],[21.46281,66.8092,5.44,-0.11],[23.32494,48.6253,5.44,1.03],[0.91675,-69.5269,5.45,1.09],[2.95658,-23.8619,5.45,0.23],[3.33881,77.7347,5.45,0.19],[3.80581,23.4211,5.45,-0.07],[4.32036,50.0489,5.45,0.22],[4.24686,-62.1919,5.45,1.1],[4.65547,-14.3592,5.45,1.06],[5.32281,-50.6061,5.45,0.51],[5.66383,-32.6292,5.45,0.92],[6.77058,79.5647,5.45,0.5],[6.90683,-1.1269,5.45,0.18],[6.94289,-79.4203,5.45,0.05],[7.18989,-0.3019,5.45,0.29],[7.38114,55.2814,5.45,null],[7.3495,-14.36,5.45,0.98],[7.91186,47.5647,5.45,1.46],[8.94906,32.9103,5.45,0.12],[9.04564,24.4528,5.45,-0.04],[9.50144,-51.5172,5.45,-0.1],[9.62008,-53.6686,5.45,0.15],[9.77239,-76.7761,5.45,0.89],[10.62411,-58.7333,5.45,0.5],[10.89547,-2.1292,5.45,0.96],[12.62839,-27.1389,5.45,0.32],[13.794,-50.3211,5.45,1.36],[15.45506,-36.7678,5.45,-0.15],[15.92989,37.9469,5.45,0.33],[16.32158,-42.6739,5.45,0.1],[16.9005,-41.8064,5.45,0.19],[17.91978,72.005,5.45,0.3],[18.61086,6.6719,5.45,0.37],[19.95386,40.3681,5.45,-0.1],[20.8885,45.1819,5.45,1.1],[21.62928,19.3186,5.45,0.3],[0.87794,-24.0058,5.46,1.24],[2.36706,-10.7778,5.46,0.35],[3.74672,24.2894,5.46,-0.04],[4.06572,8.1972,5.46,0.37],[4.50003,83.3406,5.46,0.87],[4.66761,12.1978,5.46,-0.12],[5.52069,3.2922,5.46,-0.18],[5.53728,17.0581,5.46,-0.04],[5.50264,-47.0778,5.46,0.62],[6.95942,-24.6306,5.46,0.36],[7.17206,-27.4914,5.46,1],[7.27069,-15.5858,5.46,0.08],[8.77517,-45.9128,5.46,0.27],[9.15986,-8.7878,5.46,1.01],[10.53661,14.1372,5.46,1.68],[12.18442,-23.6025,5.46,0.06],[12.51683,24.5672,5.46,0.05],[12.65203,21.0625,5.46,0.96],[12.91628,-85.1233,5.46,1.02],[13.65844,52.9214,5.46,0.1],[14.11189,-9.3133,5.46,0.34],[14.85733,59.2939,5.46,1.36],[14.94614,-11.4097,5.46,1.49],[15.31358,-60.4964,5.46,-0.1],[15.43817,34.3358,5.46,1.4],[16.33197,39.7086,5.46,0.4],[17.92367,26.05,5.46,0.34],[18.26464,-44.2067,5.46,0.96],[18.44831,-48.1169,5.46,0.84],[19.62981,-4.6475,5.46,0.43],[20.47072,81.4228,5.46,1.02],[21.93967,-37.2536,5.46,0.08],[22.17708,-11.565,5.46,-0.12],[22.45147,65.1322,5.46,0.37],[0.91611,23.6283,5.47,1],[2.41361,10.6106,5.47,-0.1],[2.84456,-35.6761,5.47,1.25],[2.99719,47.2208,5.47,0.89],[3.2965,44.025,5.47,-0.06],[3.53572,48.0236,5.47,-0.1],[4.07269,24.1058,5.47,0.86],[4.91978,-74.9369,5.47,1.52],[5.48792,25.1506,5.47,-0.04],[5.765,49.8264,5.47,0.03],[5.83797,-79.3614,5.47,-0.08],[6.10889,-23.1106,5.47,0.08],[7.22317,51.4289,5.47,1.67],[8.43108,-42.1533,5.47,-0.15],[8.57672,65.145,5.47,0.18],[8.62189,-62.8536,5.47,1.02],[8.68875,-78.9633,5.47,-0.1],[9.27814,-8.7447,5.47,-0.09],[9.36203,56.6992,5.47,1.61],[9.45178,-71.6022,5.47,1.08],[9.52675,-73.0808,5.47,1.56],[10.75436,-80.4697,5.47,0.95],[11.00408,45.5261,5.47,1.47],[12.92206,-42.9158,5.47,1.68],[16.00544,-16.5333,5.47,0.52],[16.60625,-42.8589,5.47,0.4],[17.39464,37.1467,5.47,null],[17.94658,-4.0819,5.47,1.16],[18.22017,-41.3361,5.47,-0.17],[18.39336,-75.0442,5.47,0.02],[21.14617,-88.9564,5.47,0.27],[19.62622,-14.3017,5.47,0.5],[20.22053,-1.0094,5.47,1.43],[20.67217,-33.4319,5.47,1.12],[20.89831,33.4378,5.47,1.52],[22.47756,-39.1319,5.47,0.95],[22.43356,70.7708,5.47,1.2],[0.62253,35.3994,5.48,0.88],[3.87822,-5.3614,5.48,-0.1],[4.51081,15.6919,5.48,0.26],[4.95619,17.1536,5.48,1.31],[5.30442,42.7922,5.48,1.65],[5.54758,-38.5131,5.48,1.22],[7.79908,-12.1931,5.48,0.48],[8.65661,-53.4397,5.48,-0.16],[8.82756,-40.3206,5.48,0.06],[9.49847,-26.5897,5.48,1.36],[9.99769,56.8119,5.48,1.46],[10.77369,14.1947,5.48,0.91],[11.53911,61.0825,5.48,0.5],[11.64447,-13.2019,5.48,0.52],[12.14847,-41.2314,5.48,-0.07],[12.49081,24.1089,5.48,0.43],[12.52786,-59.4239,5.48,0.63],[12.563,-9.4519,5.48,-0.03],[12.73347,-28.3239,5.48,1.34],[13.34383,-52.7481,5.48,-0.13],[14.03967,-27.43,5.48,1.34],[14.84156,37.2719,5.48,1.02],[16.22094,5.0211,5.48,1.47],[16.18042,75.8775,5.48,-0.11],[16.77994,-39.3772,5.48,0.98],[16.95308,-33.2594,5.48,1.59],[17.31756,-46.6339,5.48,0.8],[18.13394,36.4014,5.48,1.17],[18.54719,30.5542,5.48,-0.1],[18.87122,21.4253,5.48,-0.07],[19.01206,55.6583,5.48,0.86],[20.97386,10.8392,5.48,0.93],[22.49944,4.4317,5.48,0.38],[1.76828,-50.8164,5.49,1.6],[2.85822,15.0819,5.49,-0.09],[3.10217,79.4186,5.49,1.57],[3.94131,35.0811,5.49,-0.03],[5.79061,17.7292,5.49,0.3],[5.82681,-14.4836,5.49,0.88],[7.76728,-6.7725,5.49,1.38],[7.90306,-35.8775,5.49,-0.19],[10.77347,18.8914,5.49,1.12],[15.52522,-73.3894,5.49,-0.12],[16.32575,-30.9067,5.49,0.47],[16.83872,7.2478,5.49,0.1],[18.17392,-62.0022,5.49,0.58],[18.56486,-24.0325,5.49,1.79],[18.81403,-43.68,5.49,0.13],[19.34325,-0.8922,5.49,-0.04],[19.72597,-15.47,5.49,0.46],[19.72858,25.7719,5.49,0.93],[19.97722,30.9836,5.49,-0.06],[20.19667,26.8089,5.49,1.41],[21.40319,-12.8781,5.49,0.29],[21.42139,-3.5567,5.49,1.46],[21.71844,41.155,5.49,1.59],[22.95775,20.7689,5.49,0.67],[23.46769,-87.4822,5.49,1.27],[23.79903,-2.7617,5.49,0.94],[0.76994,-22.5219,5.5,0.98],[0.78375,11.9739,5.5,0.97],[1.04697,31.8044,5.5,-0.05],[1.04067,-31.5519,5.5,0.08],[1.44492,19.2403,5.5,1.11],[2.04944,33.2839,5.5,0.03],[3.40514,24.7242,5.5,1.19],[4.15278,19.6092,5.5,1.07],[5.13517,24.2653,5.5,0.06],[5.24558,5.1561,5.5,1.37],[5.2945,-13.5197,5.5,0.93],[5.46267,15.8742,5.5,0.01],[5.93914,-31.3825,5.5,null],[6.14942,-22.4275,5.5,-0.01],[6.13136,-42.1539,5.5,0],[7.05433,-59.1781,5.5,-0.11],[8.44553,12.6544,5.5,1.6],[9.63375,-43.1911,5.5,1],[10.49486,84.2522,5.5,null],[10.40239,33.7186,5.5,1.18],[11.05414,-11.3036,5.5,0.94],[11.58244,-49.1367,5.5,1.04],[12.45797,-58.9919,5.5,1.45],[12.60647,59.4869,5.5,null],[13.61972,71.2422,5.5,1.2],[13.78328,38.5428,5.5,1.03],[14.08883,-76.7967,5.5,1.55],[14.50239,-45.3217,5.5,-0.08],[15.27306,-22.3994,5.5,1.38],[15.37706,39.5814,5.5,1.59],[15.54867,-16.8528,5.5,-0.14],[16.26036,-8.3694,5.5,0.65],[16.57203,-70.9881,5.5,1.22],[17.83969,29.3222,5.5,1.05],[18.54536,-14.8656,5.5,1.97],[19.07364,-31.0469,5.5,0.03],[20.77225,-39.1992,5.5,-0.1],[21.98831,-38.3953,5.5,1],[22.17747,70.1328,5.5,0.38],[22.49803,78.8242,5.5,0.06],[0.095,13.3961,5.51,0.9],[0.16731,11.1456,5.51,-0.07],[0.34417,-69.625,5.51,-0.05],[0.59475,-48.0008,5.51,0.44],[1.54889,-36.8653,5.51,1.02],[2.00747,-8.5236,5.51,1.52],[2.28306,-6.4222,5.51,0.96],[4.1435,38.0397,5.51,0.46],[4.79342,-16.9344,5.51,0.63],[4.94006,-5.1714,5.51,-0.13],[8.22614,-50.1961,5.51,1.61],[8.39681,53.2197,5.51,0.11],[8.70444,-48.0992,5.51,-0.18],[10.71717,26.3256,5.51,0.17],[13.13528,-65.3064,5.51,-0.02],[13.76564,-12.4267,5.51,0.9],[15.05169,35.2058,5.51,1.02],[15.33569,29.6161,5.51,1.02],[15.54942,-1.1864,5.51,1.09],[15.71408,52.3608,5.51,-0.07],[16.85692,1.2161,5.51,0.05],[17.36211,39.9744,5.51,0.68],[18.17786,3.3242,5.51,1.19],[18.85972,52.975,5.51,0.84],[19.22097,-12.2825,5.51,1.44],[20.68406,32.3072,5.51,0.88],[20.94833,-9.6975,5.51,1.47],[20.99039,59.4386,5.51,1.4],[21.45044,-42.5478,5.51,0.39],[22.29736,-77.5117,5.51,0.31],[22.76131,-46.5475,5.51,1.32],[22.99328,-29.4622,5.51,0.25],[23.78386,57.4514,5.51,1.65],[1.1395,5.6497,5.52,0.34],[1.70814,-53.7406,5.52,0.53],[1.86647,55.1475,5.52,-0.18],[3.25569,30.5567,5.52,0.01],[3.36997,27.6075,5.52,1.1],[3.35667,-23.6353,5.52,0.88],[3.266,-77.3883,5.52,0.44],[4.91753,55.2592,5.52,0.04],[5.33744,41.0861,5.52,0.11],[5.84136,14.3056,5.52,1.01],[6.30381,-19.9669,5.52,-0.18],[6.60981,-5.2111,5.52,-0.08],[8.04578,-41.31,5.52,-0.15],[8.70525,-53.1,5.52,-0.15],[10.01214,-82.2147,5.52,0.03],[10.65158,53.6683,5.52,1.27],[10.66981,-65.1006,5.52,-0.16],[11.11506,1.9556,5.52,0.97],[11.50806,18.4097,5.52,1.05],[15.02217,-2.755,5.52,1.68],[15.54353,-19.6706,5.52,0.18],[16.59578,-65.4953,5.52,0.93],[17.69964,15.9519,5.52,0.38],[17.70789,24.5642,5.52,1.46],[18.13011,-17.1542,5.52,1.11],[19.49783,-26.9856,5.52,1.12],[19.767,-31.9086,5.52,0.02],[19.90864,24.3194,5.52,-0.02],[20.06897,7.2781,5.52,1.06],[20.17597,26.9042,5.52,0.08],[20.85019,-37.9133,5.52,1.38],[21.79036,60.6928,5.52,1.52],[23.08117,-68.8203,5.52,0.36],[23.4435,-52.7217,5.52,0.4],[0.15067,18.2119,5.53,1.04],[2.6,-7.8317,5.53,1.59],[3.03761,-71.9025,5.53,-0.14],[3.67731,-5.2106,5.53,-0.15],[4.45486,22.9964,5.53,-0.1],[4.73556,-18.6667,5.53,0.02],[6.28367,-37.7375,5.53,1.14],[6.34342,-34.1439,5.53,-0.19],[6.56003,14.1553,5.53,1.11],[7.42722,-79.0942,5.53,1.28],[8.08444,-53.1081,5.53,1.34],[8.45469,-70.0933,5.53,-0.03],[11.92792,15.6467,5.53,0.11],[14.95925,-0.1675,5.53,1.13],[15.81578,-3.8186,5.53,0.12],[16.60319,52.9003,5.53,-0.07],[17.25536,-33.5483,5.53,-0.01],[18.16825,-30.7286,5.53,0.97],[18.98994,-12.8406,5.53,-0.04],[19.28667,-66.6614,5.53,0.18],[19.32758,12.3747,5.53,0.26],[19.52203,50.3067,5.53,1.25],[19.96261,16.7892,5.53,-0.05],[21.10708,-41.3861,5.53,1.35],[21.51647,60.4594,5.53,0.12],[21.60067,45.3747,5.53,1.58],[21.84642,-69.6294,5.53,1.37],[21.87497,28.7933,5.53,0.42],[22.23036,45.4408,5.53,0.04],[22.39192,-24.7625,5.53,0.99],[23.30275,-40.8244,5.53,0.44],[23.63244,18.4006,5.53,0],[0.02222,-50.3372,5.53,1.6],[2.21319,-2.3936,5.54,0.57],[2.45769,31.8014,5.54,1.12],[3.29617,-62.5753,5.54,0.64],[3.79889,-30.1678,5.54,0.98],[4.71775,-70.9311,5.54,-0.12],[5.38064,41.0294,5.54,0.12],[5.61772,17.0403,5.54,0.22],[7.06592,-43.6081,5.54,0.64],[7.46644,-29.1558,5.54,-0.08],[7.56417,-36.3383,5.54,-0.06],[8.17772,-13.7992,5.54,0.49],[8.32561,75.7569,5.54,0.9],[8.44497,-12.5344,5.54,1.19],[8.85958,-7.1772,5.54,0.15],[9.21544,-59.4144,5.54,0.85],[12.33881,26.6194,5.54,1.09],[13.89244,-35.6642,5.54,0.44],[14.23478,12.9594,5.54,0.54],[15.18778,-55.3461,5.54,1.14],[15.35211,-5.8247,5.54,1.04],[15.95406,14.4144,5.54,1.14],[16.16461,-33.5458,5.54,-0.1],[16.42339,37.3939,5.54,0.17],[17.44697,20.0808,5.54,-0.13],[17.71417,-36.9458,5.54,1.55],[18.87419,-46.5953,5.54,1.63],[19.13797,-19.29,5.54,-0.11],[20.36761,24.4461,5.54,-0.06],[21.949,12.0764,5.54,0.05],[22.05456,-6.5225,5.54,0.96],[23.27842,53.2136,5.54,0.52],[0.56142,-29.5583,5.55,1.27],[0.94642,60.3628,5.55,-0.07],[1.13256,20.7392,5.55,0.13],[1.16367,19.6586,5.55,0.69],[1.19044,64.2028,5.55,-0.07],[2.23742,-67.8417,5.55,1.55],[3.74903,-0.2967,5.55,1.42],[4.33653,50.9208,5.55,-0.01],[4.47558,1.3808,5.55,-0.1],[5.51878,-20.8636,5.55,0],[6.02122,-33.9117,5.55,1.58],[6.47614,30.4931,5.55,0.68],[6.45567,2.9081,5.55,1.04],[6.45433,-0.2761,5.55,1.38],[7.10322,34.4739,5.55,0.91],[8.01314,17.3086,5.55,1.32],[9.02244,-41.8644,5.55,-0.14],[9.77511,-44.755,5.55,-0.18],[11.68883,-43.0958,5.55,null],[12.01236,-10.4461,5.55,0.77],[12.34744,57.8639,5.55,1.43],[12.44769,-32.83,5.55,0.01],[12.82914,-71.9864,5.55,1.17],[13.14236,-8.9844,5.55,1.18],[13.54769,-15.3631,5.55,1.23],[14.60528,-46.2453,5.55,1.48],[16.01322,-8.4114,5.55,0.05],[16.97167,-50.6411,5.55,0.02],[17.28436,-32.6628,5.55,0.5],[17.57956,-11.2419,5.55,0.02],[18.39136,-36.2383,5.55,1.02],[19.11047,28.6286,5.55,0.29],[20.335,68.8803,5.55,1.59],[20.86908,-5.5069,5.55,-0.08],[20.97208,44.4717,5.55,0.97],[22.47714,-67.4892,5.55,0.2],[23.02206,-28.8536,5.55,1.35],[23.25953,-3.4964,5.55,0.06],[23.32333,-5.1244,5.55,0.39],[23.86608,2.9303,5.55,1.53],[23.95236,55.7058,5.55,0.49],[0.02692,61.2231,5.55,0.41],[1.09492,21.4653,5.56,-0.07],[1.63544,57.9775,5.56,1.38],[2.99478,-2.465,5.56,-0.08],[3.20733,6.6608,5.56,1.08],[5.26781,11.3414,5.56,-0.04],[5.84947,27.9678,5.56,0.97],[6.15953,-14.5842,5.56,1.16],[6.37728,-69.9842,5.56,1.51],[7.64244,35.0486,5.56,0.93],[7.68678,48.1317,5.56,1.01],[7.70089,14.2083,5.56,1.64],[9.57575,-5.915,5.56,1.16],[9.61192,31.1617,5.56,1.59],[9.72839,-53.8917,5.56,-0.04],[10.49317,-30.6072,5.56,-0.04],[14.22122,-53.6658,5.56,1.44],[14.33603,-43.0589,5.56,0.92],[14.37214,-34.7869,5.56,-0.09],[14.69542,11.6606,5.56,0.94],[15.73314,32.5158,5.56,1.06],[16.05869,76.7936,5.56,null],[16.42864,78.9639,5.56,0.26],[16.75625,15.7453,5.56,1.66],[17.10503,22.0842,5.56,1.3],[17.16333,-10.5233,5.56,0.52],[17.20906,62.8744,5.56,0.21],[19.08275,31.7444,5.56,1.54],[19.48947,14.5958,5.56,1.05],[22.03461,58.0006,5.56,0.06],[22.91264,-16.2719,5.56,1.14],[23.22139,57.1683,5.56,1.01],[23.2605,70.8881,5.56,0.24],[23.37569,60.1336,5.56,1.68],[0.40433,52.02,5.57,-0.12],[0.57439,-52.3731,5.57,0.47],[0.62242,-24.7672,5.57,0.72],[0.80031,-21.7225,5.57,-0.06],[1.19483,65.0189,5.57,-0.09],[1.61831,12.1417,5.57,0.35],[1.99411,-42.0306,5.57,1.06],[3.12556,-78.9894,5.57,0.3],[3.59936,-11.1936,5.57,0.91],[3.68553,37.58,5.57,-0.07],[3.66419,3.0569,5.57,0.94],[4.47028,83.8078,5.57,-0.13],[5.47092,-37.2306,5.57,0.02],[5.91458,-39.9581,5.57,1.51],[8.44103,27.8936,5.57,1.4],[9.2085,-43.6136,5.57,-0.11],[9.84881,-62.7453,5.57,1.32],[10.42897,-7.0597,5.57,1.52],[11.11386,-70.8781,5.57,-0.05],[11.42678,16.4564,5.57,0.36],[11.86947,-56.9878,5.57,0.07],[11.96114,-62.4489,5.57,-0.15],[12.20258,20.5419,5.57,0.95],[13.65961,10.7461,5.57,0.33],[15.0905,48.1511,5.57,0],[15.72133,-84.4653,5.57,0.11],[16.15517,-57.9344,5.57,-0.04],[16.69825,-19.9244,5.57,0.43],[18.92431,6.6153,5.57,1.04],[18.95461,2.5353,5.57,0],[19.25558,15.0836,5.57,1.07],[19.86711,24.9922,5.57,0.71],[20.79703,47.8319,5.57,1.46],[21.35122,23.8558,5.57,1.05],[21.55653,-44.8486,5.57,1.04],[23.41411,32.385,5.57,-0.11],[1.10142,-9.8394,5.58,0.01],[1.39461,37.715,5.58,0.26],[1.64772,-21.2753,5.58,0.34],[2.05008,64.39,5.58,0.38],[2.26189,25.0431,5.58,0.49],[2.30039,1.7578,5.58,0.6],[3.48122,49.8483,5.58,-0.04],[4.50239,15.6381,5.58,0.32],[4.66856,-24.4825,5.58,0.92],[4.82022,31.4372,5.58,1.12],[6.16953,-40.3536,5.58,1.68],[7.26392,47.24,5.58,0.58],[7.24753,-27.0381,5.58,1.22],[8.30483,-35.4517,5.58,1.24],[8.35589,-20.0792,5.58,0.77],[8.94375,64.6039,5.58,0.86],[9.36414,-42.195,5.58,1.63],[10.44694,-54.8775,5.58,1.56],[10.49139,-29.6636,5.58,1.42],[10.51661,-13.5883,5.58,-0.04],[10.55858,34.9886,5.58,0.02],[10.85658,59.32,5.58,1.14],[11.91753,8.4439,5.58,0.94],[12.55953,-12.8303,5.58,0.86],[13.06281,-20.5831,5.58,0.56],[13.68208,-85.7861,5.58,0.18],[15.38675,30.2878,5.58,0.58],[15.75653,5.4469,5.58,0.04],[16.78875,-58.3414,5.58,-0.08],[16.94667,-23.15,5.58,-0.02],[17.93078,22.4642,5.58,1.24],[18.16639,36.4664,5.58,0.91],[18.89544,36.9717,5.58,-0.15],[19.34392,-22.4025,5.58,0.27],[20.30794,37,5.58,0.06],[20.36817,45.795,5.58,1.08],[20.71972,66.6575,5.58,0.22],[20.79675,6.0083,5.58,-0.02],[20.92739,12.5686,5.58,0.12],[21.77558,-11.3658,5.58,-0.01],[21.80439,-47.3036,5.58,0.6],[22.01806,0.605,5.58,1.28],[22.15378,33.1722,5.58,1],[22.229,-25.1808,5.58,0.49],[22.48556,9.1289,5.58,1.55],[23.45022,87.3075,5.58,0.23],[0.10736,64.1961,5.59,-0.03],[0.82378,-13.5614,5.59,1.3],[1.02175,-38.9167,5.59,1.18],[1.70569,68.0431,5.59,-0.07],[2.3495,50.1514,5.59,-0.13],[2.93247,61.5211,5.59,0.45],[3.49333,-12.6747,5.59,0.17],[3.74206,36.46,5.59,0.06],[4.09372,-27.6517,5.59,0.31],[4.33269,14.0353,5.59,0.28],[5.87286,14.1717,5.59,-0.05],[6.59003,-36.78,5.59,-0.14],[6.97664,-25.4139,5.59,-0.16],[7.48853,-1.9053,5.59,1.5],[7.55322,3.2903,5.59,0.31],[7.81853,-56.4106,5.59,1.13],[8.44089,-3.9875,5.59,0.22],[8.86017,-57.6336,5.59,-0.11],[9.16567,-30.3653,5.59,0.19],[9.42333,-5.1175,5.59,1.52],[11.40308,-72.2567,5.59,0.06],[11.63906,43.6256,5.59,0.33],[12.02764,36.0419,5.59,1.01],[12.69919,6.8067,5.59,0],[13.10975,-41.5886,5.59,1.05],[14.47717,49.8447,5.59,0.85],[15.31567,-40.7883,5.59,-0.1],[17.33919,46.2408,5.59,1.57],[17.52258,2.7244,5.59,0.84],[18.26078,42.1594,5.59,-0.1],[19.27528,4.8347,5.59,0.08],[19.32778,-35.4214,5.59,-0.13],[19.43867,-21.7767,5.59,1.22],[20.37431,-42.0497,5.59,0],[20.61797,26.4619,5.59,-0.07],[21.14414,30.2058,5.59,-0.1],[22.93989,41.6039,5.59,-0.14],[23.34711,30.415,5.59,1.5],[23.42206,-56.8492,5.59,1.07],[23.57708,40.2364,5.59,0.1],[0.07814,-71.4369,5.59,-0.12],[0.52811,52.8394,5.6,1.15],[3.72606,-10.4856,5.6,0.22],[3.99169,-12.5742,5.6,1.48],[4.48525,-13.0483,5.6,-0.23],[5.58706,10.24,5.6,0.12],[5.70733,65.6978,5.6,1.24],[6.48042,-7.0344,5.6,null],[6.53975,-5.8689,5.6,0.25],[6.52175,-51.8261,5.6,0.54],[7.72,-36.0503,5.6,-0.13],[7.8265,-33.2889,5.6,1.61],[7.96303,-60.3033,5.6,0.57],[9.14506,-8.5894,5.6,-0.06],[10.11931,-17.1417,5.6,1.5],[10.15608,-61.5492,5.6,1.6],[10.25875,-43.1125,5.6,1.52],[12.93344,38.3147,5.6,0.34],[13.10628,22.6161,5.6,1.59],[13.33861,40.1506,5.6,1.2],[13.56869,55.3486,5.6,-0.03],[13.6635,-40.0519,5.6,1.3],[13.74161,-16.1792,5.6,0.81],[14.88714,-73.19,5.6,0.82],[17.88981,-34.8953,5.6,1.14],[18.26136,-63.0556,5.6,0.92],[18.41708,-30.7567,5.6,1.14],[21.38347,-22.6689,5.6,1.63],[21.42211,46.7144,5.6,0.32],[22.01817,13.1197,5.6,0.34],[22.04908,44.65,5.6,-0.03],[22.85633,61.6969,5.6,0.78],[23.13917,-28.8233,5.6,0.88],[23.45461,70.3597,5.6,0.19],[0.97886,-11.38,5.61,0.97],[1.67772,43.2978,5.61,0.21],[3.03958,4.3528,5.61,-0.1],[3.53892,84.9111,5.61,0.92],[3.32633,-24.1231,5.61,1.66],[3.40825,33.5358,5.61,-0.03],[3.47244,33.8075,5.61,0.02],[4.07297,-12.7925,5.61,1.08],[4.84867,-53.4614,5.61,0.33],[5.06481,-24.3878,5.61,0.1],[5.33961,62.6536,5.61,1.75],[5.41711,-10.3292,5.61,1.56],[5.58569,9.935,5.61,0.04],[6.38217,-56.37,5.61,0.24],[6.78853,-55.54,5.61,1.52],[7.44983,-23.0861,5.61,-0.13],[7.83628,-9.1833,5.61,1.44],[8.40972,-3.7511,5.61,0.46],[8.6715,-53.0153,5.61,-0.14],[10.42089,8.7847,5.61,1.62],[10.8325,-34.0581,5.61,0.04],[11.97992,-64.3392,5.61,0.18],[14.24517,-41.8375,5.61,0.93],[14.41842,-68.1953,5.61,0.49],[15.77894,-34.6825,5.61,-0.11],[17.51539,31.1583,5.61,0.95],[18.59178,23.6056,5.61,1],[18.82639,-43.4339,5.61,-0.08],[19.556,-45.2719,5.61,-0.04],[19.91244,0.2736,5.61,0.1],[20.97503,50.4622,5.61,-0.15],[21.07631,5.5028,5.61,1.65],[23.11489,-38.8922,5.61,0.01],[23.91294,0.1092,5.61,1.59],[0.91475,83.7072,5.62,0.09],[2.06125,-4.1036,5.62,1.59],[2.30208,19.9011,5.62,0.01],[3.10658,13.1872,5.62,1.08],[6.40028,-36.7078,5.62,1.04],[6.57647,-32.7164,5.62,-0.08],[7.06811,-5.3236,5.62,1.29],[7.24239,12.1158,5.62,1.01],[7.74278,-24.6739,5.62,-0.19],[9.70008,39.7578,5.62,0.95],[9.8555,-46.1939,5.62,1.17],[13.68397,22.4958,5.62,1.01],[13.81075,31.1903,5.62,1.01],[15.62753,69.2833,5.62,1.35],[15.92503,-26.2658,5.62,0.15],[15.94839,-33.9642,5.62,0.05],[15.98269,36.6439,5.62,1.49],[17.53044,28.4075,5.62,0],[17.55831,-5.7447,5.62,0.18],[18.90367,27.9094,5.62,1.35],[19.86642,47.0275,5.62,-0.07],[20.45953,38.4403,5.62,0.06],[21.64933,57.4892,5.62,0.21],[21.83336,-64.7125,5.62,1.02],[22.09747,-59.6361,5.62,1.46],[22.38556,-45.9286,5.62,0.36],[23.99108,-29.485,5.62,1.6],[1.57717,-15.6761,5.63,0.07],[1.79578,63.8522,5.63,0.81],[2.06092,25.9356,5.63,0.54],[2.18133,39.0394,5.63,-0.02],[2.18919,8.5697,5.63,0.56],[2.94058,18.0231,5.63,0.43],[3.94781,22.4781,5.63,0.3],[5.87589,-37.6311,5.63,1.04],[6.08289,4.1586,5.63,1.04],[6.39886,-25.5778,5.63,1.56],[7.01831,-25.2153,5.63,-0.17],[7.45222,-17.8644,5.63,0.32],[7.86192,-21.1739,5.63,0.96],[7.91478,-57.3031,5.63,1.3],[8.20353,17.6478,5.63,0.54],[9.36389,-55.515,5.63,0.19],[9.61942,-32.1786,5.63,1.02],[9.77314,11.81,5.63,1.49],[11.58469,54.7853,5.63,1.02],[12.50486,-23.6967,5.63,1.67],[13.09786,45.2686,5.63,1.13],[13.62006,-61.6919,5.63,0.5],[14.76833,15.1319,5.63,1.57],[14.78958,-25.6244,5.63,null],[14.93972,49.6286,5.63,0.5],[15.26364,0.3722,5.63,0.18],[16.12708,9.8917,5.63,0.2],[16.26381,-57.9122,5.63,0.14],[16.19667,36.425,5.63,1.34],[16.54325,5.5211,5.63,-0.06],[18.34919,29.8589,5.63,0.21],[18.94044,65.2581,5.63,0.95],[19.27411,14.5447,5.63,-0.02],[19.437,20.0978,5.63,-0.01],[21.43969,-37.8294,5.63,1.19],[23.45417,-58.4761,5.63,0.98],[23.57728,33.4972,5.63,1.03],[0.04158,8.4856,5.63,0.29],[1.20464,79.6739,5.64,0.01],[1.70097,35.2456,5.64,-0.07],[3.75269,24.8392,5.64,-0.07],[4.39028,16.7772,5.64,0.3],[5.56508,14.3056,5.64,-0.14],[6.35686,-11.7733,5.64,-0.02],[6.4405,56.285,5.64,0.24],[6.66742,-80.8136,5.64,0.2],[6.88856,-19.0328,5.64,0.28],[7.51464,68.4656,5.64,1.11],[7.71336,-26.3511,5.64,0.99],[8.21914,29.6567,5.64,-0.07],[8.29733,59.5711,5.64,0.16],[8.65325,65.0208,5.64,0.62],[8.72008,12.6808,5.64,0.39],[9.72592,29.9744,5.64,0.12],[10.712,-32.7158,5.64,0],[11.53786,-29.2611,5.64,0.53],[11.54669,-40.4364,5.64,1.58],[11.85061,-5.3333,5.64,1.06],[14.94222,-47.8792,5.64,-0.04],[14.99358,39.2653,5.64,0.31],[14.839,82.5119,5.64,0.68],[15.47094,-16.7164,5.64,1.55],[16.24467,33.8586,5.64,0.51],[17.09231,-0.8919,5.64,0.16],[17.55633,19.2567,5.64,0.48],[18.47419,-38.9956,5.64,0.13],[18.49581,77.5469,5.64,1.18],[19.25483,21.2322,5.64,0.11],[19.61758,-18.2311,5.64,1.26],[20.07669,32.2186,5.64,0.54],[20.39811,-42.4228,5.64,0.2],[21.19672,59.9864,5.64,0.11],[21.78722,2.6861,5.64,0],[22.88397,16.8411,5.64,1.12],[23.35431,-26.9867,5.64,0.82],[1.17189,42.0814,5.65,0.6],[2.62828,-3.3961,5.65,1.02],[4.30644,21.5792,5.65,0.28],[5.40789,-16.9761,5.65,0],[5.61939,-80.4692,5.65,0.6],[6.07231,-32.1725,5.65,-0.19],[6.25953,-0.5122,5.65,0.5],[6.84042,13.4133,5.65,1.34],[6.86667,23.6017,5.65,1.45],[7.60878,46.1803,5.65,1.56],[8.0205,4.8797,5.65,0],[8.33353,-71.5053,5.65,-0.1],[8.50794,-32.1594,5.65,1.49],[9.77322,1.7856,5.65,0.34],[10.18217,-8.4183,5.65,1.3],[10.33797,-47.6992,5.65,1.67],[11.621,-75.8967,5.65,0.35],[13.48694,10.8183,5.65,1.05],[15.03078,-83.2278,5.65,0.95],[15.07964,-83.0383,5.65,1.3],[14.97756,-27.6572,5.65,0.24],[15.36339,-48.3178,5.65,0.65],[15.67256,-73.4467,5.65,-0.04],[16.52981,45.5983,5.65,0.12],[16.68897,-48.7631,5.65,0.13],[16.6945,-49.6517,5.65,-0.03],[17.00172,-54.5969,5.65,0.19],[17.01614,22.6322,5.65,1.33],[17.31347,28.8231,5.65,0.98],[17.42814,60.0483,5.65,0.03],[18.42744,8.0319,5.65,0.92],[18.55642,-38.7261,5.65,-0.06],[19.04103,-24.8469,5.65,1.23],[19.60047,-24.7192,5.65,0.19],[19.88853,-3.1144,5.65,0.2],[20.23861,-52.4456,5.65,1.5],[20.53992,-9.8533,5.65,0.69],[21.00769,19.3294,5.65,1.61],[21.72381,38.2839,5.65,0],[22.01922,8.2572,5.65,1.44],[22.5005,32.5725,5.65,-0.04],[23.00161,-25.1642,5.65,1.25],[23.62767,-13.0603,5.65,1.03],[0.76083,74.9881,5.66,0.05],[1.44767,-13.0567,5.66,0.35],[3.76647,45.6819,5.66,-0.07],[3.83458,44.9678,5.66,0.76],[4.85258,48.7408,5.66,0.99],[4.98369,-16.3758,5.66,0.43],[5.91211,-11.7739,5.66,1.53],[6.7775,-10.1072,5.66,-0.05],[7.27097,-46.7744,5.66,1.44],[7.55542,-19.4125,5.66,1.12],[8.15933,-56.0856,5.66,0.21],[8.6395,53.4014,5.66,0.96],[8.74583,10.0817,5.66,-0.11],[8.87628,32.4742,5.66,0.22],[9.48683,-20.7486,5.66,1.6],[10.04692,21.9492,5.66,-0.19],[10.90494,-13.7581,5.66,0.83],[12.19756,25.8703,5.66,1.41],[12.26878,40.6603,5.66,1.55],[12.80733,-27.5975,5.66,0.95],[15.33478,51.9586,5.66,0.11],[18.50331,-18.7289,5.66,1.06],[18.94583,57.815,5.66,1.15],[19.6215,16.4628,5.66,1.02],[20.00564,-33.7039,5.66,0.49],[20.25658,33.7294,5.66,0.91],[20.42792,21.4097,5.66,0.93],[21.32106,58.6236,5.66,1.38],[22.64764,-33.0814,5.66,0.05],[22.79522,-14.0564,5.66,-0.05],[23.28269,-62.0011,5.66,0.51],[0.26914,-31.4464,5.67,1.35],[0.53994,6.9556,5.67,0],[0.74067,47.8642,5.67,-0.12],[1.93592,37.2517,5.67,1.06],[2.14458,58.4236,5.67,0.61],[3.86672,6.5347,5.67,0.06],[4.02947,9.9978,5.67,0.02],[4.69003,48.3008,5.67,-0.02],[5.58358,-6.0092,5.67,-0.23],[6.01367,-51.2164,5.67,0.2],[6.08283,5.42,5.67,1.04],[8.95978,15.5814,5.67,0.2],[9.03278,-0.4828,5.67,1.15],[10.318,-64.6764,5.67,0.05],[10.58394,8.6503,5.67,0.05],[10.85308,56.5822,5.67,1.12],[11.07533,-47.6792,5.67,0.24],[12.77292,9.54,5.67,0.99],[13.24203,11.3317,5.67,1.5],[13.43058,-70.6275,5.67,-0.03],[14.68372,-36.135,5.67,-0.08],[15.13994,26.3011,5.67,1.24],[15.38622,-60.6569,5.67,0.48],[16.20442,-28.4175,5.67,0.01],[16.39639,61.6967,5.67,0.96],[17.2045,-39.5069,5.67,0.04],[17.36261,53.4206,5.67,1.47],[17.99894,45.5014,5.67,1.57],[19.44903,-29.7433,5.67,0],[19.67869,-0.6211,5.67,0.11],[19.98625,23.1014,5.67,null],[20.05833,16.0314,5.67,-0.1],[20.69903,41.7169,5.67,-0.12],[20.9305,47.4178,5.67,0.47],[21.64219,5.7717,5.67,0.25],[21.70281,1.2853,5.67,1.44],[0.07833,67.1667,5.67,1.07],[0.13431,-33.5294,5.68,1.12],[1.08483,14.9461,5.68,0.41],[2.61053,12.4475,5.68,0.49],[3.543,-50.3786,5.68,1.1],[4.56897,5.5686,5.68,0.05],[4.71925,-30.7656,5.68,1.41],[5.17858,46.9622,5.68,0.42],[5.18967,-11.8492,5.68,1.46],[5.35883,-0.4164,5.68,-0.12],[7.02264,70.8081,5.68,1.33],[7.00439,16.0789,5.68,1.66],[7.63839,-48.6011,5.68,0.65],[8.15792,-16.2489,5.68,-0.17],[8.41531,-23.1536,5.68,0.06],[11.14697,24.6583,5.68,0.06],[12.38933,-24.8406,5.68,1.16],[12.61619,17.0894,5.68,1.41],[14.82186,-24.2517,5.68,1.3],[16.49636,-14.5508,5.68,0.82],[18.00256,80.0042,5.68,0.5],[20.07311,-0.7094,5.68,1.3],[20.64986,30.3344,5.68,1.09],[21.15619,-73.1731,5.68,0.59],[21.10033,-30.125,5.68,1.03],[21.34725,32.4528,5.68,1.08],[21.40944,26.1744,5.68,0.31],[21.89372,19.6683,5.68,0.01],[22.53783,76.2264,5.68,0.05],[23.01875,-50.95,5.68,1.42],[23.48361,-63.1108,5.68,-0.17],[23.60647,2.1022,5.68,0.44],[0.50725,-48.215,5.69,0.35],[1.60233,-29.9075,5.69,0.33],[1.62444,-84.7697,5.69,0.94],[1.976,49.2042,5.69,1.01],[2.25792,-67.7464,5.69,1.3],[2.70611,20.0117,5.69,-0.02],[3.35189,3.6756,5.69,0.97],[3.70525,19.7003,5.69,-0.01],[4.29975,-80.2139,5.69,0.84],[5.55878,18.5403,5.69,0.01],[6.3345,14.6511,5.69,1.61],[6.54417,-32.0306,5.69,-0.17],[6.64431,39.3908,5.69,1.35],[7.16192,-25.2311,5.69,-0.16],[7.14506,-70.4972,5.69,0.4],[7.87192,-14.8464,5.69,0.37],[8.53467,-53.2122,5.69,0.58],[8.4055,-80.9142,5.69,1.02],[9.61739,16.4378,5.69,1.25],[9.70411,69.2375,5.69,1.14],[12.49533,20.8961,5.69,0.07],[13.36156,2.0872,5.69,0.06],[13.44892,-41.4981,5.69,1.47],[13.54331,-28.6928,5.69,0.04],[14.75839,0.7172,5.69,-0.03],[14.82814,48.7206,5.69,0.47],[15.19933,-48.7436,5.69,0.14],[16.25797,18.8083,5.69,1.12],[16.47089,-58.5997,5.69,0],[17.56094,16.3175,5.69,1.01],[17.80689,20.5656,5.69,0.94],[18.165,3.1197,5.69,0.47],[18.90003,-21.3597,5.69,1.23],[18.93506,18.1053,5.69,1.09],[19.0215,26.2914,5.69,-0.08],[19.42267,-13.8969,5.69,1.43],[19.46336,-54.3253,5.69,1.4],[19.84369,40.5997,5.69,-0.04],[20.35317,63.9803,5.69,1.56],[20.45064,49.3833,5.69,0.26],[21.36678,49.3889,5.69,1.1],[21.58083,-20.0844,5.69,0.4],[21.70636,41.0772,5.69,0.01],[0.10528,-49.075,5.7,0.52],[0.69622,-56.5017,5.7,0.2],[0.79536,-18.0614,5.7,1.3],[0.89386,-62.8714,5.7,1.56],[1.247,-0.9739,5.7,0.42],[1.55717,58.3275,5.7,1.52],[2.17711,19.5003,5.7,1.65],[3.49967,-78.3519,5.7,0.93],[4.17992,-8.8197,5.7,1.06],[4.28156,61.8503,5.7,-0.14],[4.91856,-16.7406,5.7,0.96],[5.39508,-0.1597,5.7,-0.21],[5.98144,12.8086,5.7,0.89],[6.53289,-58.7542,5.7,-0.06],[6.60633,-18.66,5.7,0.85],[6.83981,-31.7061,5.7,0.14],[7.32447,-16.395,5.7,0.35],[7.60108,-14.4928,5.7,-0.12],[7.87492,-54.3672,5.7,-0.15],[8.15267,-48.6844,5.7,-0.12],[8.76736,-2.0489,5.7,1.1],[9.61672,-25.2967,5.7,1.12],[10.0725,-24.2856,5.7,0.3],[10.609,-12.2303,5.7,0.52],[11.82825,34.9317,5.7,0.46],[11.84089,-62.6494,5.7,0.26],[12.29181,28.9372,5.7,0.16],[12.45975,55.7128,5.7,1.55],[12.81506,14.1225,5.7,0.02],[13.77658,54.4328,5.7,-0.08],[13.88692,17.9328,5.7,0.84],[13.8975,53.7286,5.7,-0.05],[14.63681,43.6419,5.7,1.48],[15.30681,20.5728,5.7,0.97],[16.09883,-72.4008,5.7,1.17],[16.19389,23.4947,5.7,1.56],[17.40031,-62.8642,5.7,-0.14],[17.57847,-32.5817,5.7,0.04],[18.49883,-47.2203,5.7,1.26],[18.731,31.9267,5.7,0.34],[20.94647,-26.2964,5.7,0.5],[21.42031,-9.7486,5.7,0.2],[22.09297,28.9639,5.7,-0.06],[22.94661,-47.9692,5.7,0.22],[23.12928,49.2958,5.7,0.44],[23.16225,59.3331,5.7,0.33],[1.69667,-60.7894,5.71,1.27],[2.21758,15.2797,5.71,1.55],[2.59411,37.3122,5.71,1.39],[2.68719,-0.6958,5.71,0.52],[2.99336,-25.2742,5.71,0.4],[3.31144,-18.5597,5.71,0.37],[3.45928,-35.6814,5.71,1.29],[3.61314,0.5878,5.71,0.92],[3.90644,-40.3572,5.71,0.6],[4.28561,57.8606,5.71,1.09],[4.87994,42.5867,5.71,0.11],[5.39,-39.6786,5.71,1.62],[6.16331,-22.7742,5.71,0.44],[6.10261,-66.0397,5.71,-0.03],[6.28781,5.1003,5.71,0.61],[6.6205,-36.9906,5.71,-0.12],[6.66186,-30.4703,5.71,1.14],[6.82814,32.6067,5.71,1.29],[7.12294,-23.8403,5.71,-0.1],[7.26586,27.8975,5.71,1.63],[8.32147,62.5072,5.71,0.89],[8.67647,-45.1914,5.71,1.65],[8.91997,-54.9656,5.71,0.48],[9.47478,8.1883,5.71,1.04],[9.90489,-45.2839,5.71,-0.11],[10.98719,-33.7372,5.71,0.37],[11.09933,-27.2878,5.71,-0.06],[11.587,-47.3725,5.71,1.66],[12.25236,70.2,5.71,1.19],[12.63956,1.8547,5.71,1.6],[13.12731,-53.4597,5.71,-0.07],[13.91358,-67.6525,5.71,1.49],[13.92006,-52.1611,5.71,-0.08],[14.95325,16.3883,5.71,0.94],[15.03025,-0.1406,5.71,1.52],[15.45919,-64.5314,5.71,1.64],[15.78814,14.1153,5.71,0.09],[16.74517,-40.8397,5.71,-0.12],[17.40875,16.3011,5.71,0.07],[17.72267,24.3278,5.71,0.65],[18.09711,32.2306,5.71,1.16],[18.77869,-10.125,5.71,0.59],[19.48997,-43.4458,5.71,0.22],[19.91044,-8.2272,5.71,-0.08],[20.03294,-13.6369,5.71,0.08],[20.06039,29.8967,5.71,0.73],[21.39967,24.2742,5.71,0.32],[21.86694,55.7969,5.71,-0.13],[21.90289,-4.2761,5.71,1.18],[22.24567,42.9539,5.71,0],[22.56128,56.625,5.71,0.96],[22.68131,14.5494,5.71,0.72],[23.1785,17.5944,5.71,1.34],[0.01792,-48.81,5.71,0.91],[0.22522,41.0353,5.72,0.31],[0.50067,-3.9572,5.72,1.56],[1.70083,-36.8325,5.72,-0.01],[3.16019,29.0769,5.72,0.12],[4.18306,33.5867,5.72,1.44],[4.18897,5.5231,5.72,0.36],[4.36764,14.0772,5.72,0.32],[4.46689,21.62,5.72,0.27],[4.56522,-6.7389,5.72,-0.13],[4.75117,-21.2836,5.72,1.47],[4.92183,-16.4178,5.72,0.88],[5.60992,-6.065,5.72,-0.22],[5.787,14.4883,5.72,0.04],[6.17628,-27.1542,5.72,1.07],[7.24608,-46.8497,5.72,-0.11],[7.481,48.1839,5.72,-0.1],[7.61219,-48.8303,5.72,-0.06],[8.59117,-7.9822,5.72,-0.03],[9.58156,72.2056,5.72,0.48],[9.91425,-50.2439,5.72,-0.01],[10.19625,-58.0606,5.72,-0.08],[10.91617,34.0347,5.72,1.01],[12.16761,5.8069,5.72,0.35],[12.85494,-60.3297,5.72,0.38],[15.39783,-12.3694,5.72,1.04],[16.84417,29.8067,5.72,1.6],[17.32694,80.1364,5.72,1.5],[17.78556,17.6972,5.72,0.01],[18.53228,-43.5078,5.72,1.34],[18.52381,-10.7958,5.72,0.24],[19.43642,-15.0531,5.72,0.02],[19.81169,11.8158,5.72,null],[20.32686,62.2575,5.72,-0.05],[20.64553,13.315,5.72,1.53],[22.91972,-4.9878,5.72,0.88],[23.73667,-64.4044,5.72,1.4],[23.84258,-14.4019,5.72,1.51],[3.46694,-11.2867,5.73,1.1],[3.75439,-47.3597,5.73,0.96],[4.40811,34.1306,5.73,-0.06],[5.08783,-26.1525,5.73,1.17],[5.60978,54.4289,5.73,1.63],[5.72267,-18.5575,5.73,-0.01],[6.01628,47.9019,5.73,-0.01],[6.14942,2.4994,5.73,0.07],[6.67467,77.9958,5.73,1.47],[6.92183,25.3756,5.73,0.57],[7.67072,38.3444,5.73,1.63],[7.66217,-38.1394,5.73,-0.12],[8.17422,25.5072,5.73,0.81],[8.42653,2.1022,5.73,1.53],[8.88961,61.9622,5.73,0.28],[9.15119,-18.3286,5.73,0],[9.19964,-19.7478,5.73,0.98],[9.845,-46.9344,5.73,1.08],[9.99339,29.6453,5.73,1.06],[11.69286,31.7461,5.73,0.43],[12.42272,-35.1864,5.73,-0.06],[12.84942,-52.7875,5.73,0.13],[13.59203,-5.3961,5.73,0.95],[14.72044,-24.9975,5.73,-0.01],[14.729,40.4592,5.73,1.39],[15.27678,-60.9039,5.73,-0.08],[15.85189,-55.0558,5.73,0.06],[16.12122,-36.7556,5.73,0.29],[16.14111,8.5342,5.73,1.61],[17.07353,-57.7122,5.73,-0.1],[18.15939,3.9933,5.73,0.37],[18.38672,-12.0147,5.73,0.01],[18.46633,6.1942,5.73,-0.03],[18.8105,-65.0778,5.73,0.24],[18.74672,37.5944,5.73,0.28],[19.57217,51.2367,5.73,0.48],[20.25483,-27.0328,5.73,0.88],[21.171,53.5633,5.73,-0.12],[21.60306,-26.1714,5.73,0.22],[22.59786,39.6342,5.73,-0.15],[23.78775,-11.9108,5.73,1.08],[23.95908,-82.17,5.73,1.05],[0.28253,61.5333,5.74,0.88],[0.41844,53.0469,5.74,-0.06],[0.90978,19.1883,5.74,-0.01],[1.93083,23.5772,5.74,1.19],[2.75764,-63.7044,5.74,0.93],[3.20922,-57.3217,5.74,2.28],[5.30369,73.2681,5.74,null],[5.45231,30.2086,5.74,0.16],[6.47756,-32.3711,5.74,-0.17],[6.82122,-2.2719,5.74,-0.1],[6.91742,-20.4047,5.74,0.08],[7.03817,15.3361,5.74,null],[7.61139,-19.7022,5.74,-0.19],[7.9385,-60.5264,5.74,1.55],[8.94722,45.6319,5.74,1.09],[9.539,-19.4003,5.74,0.14],[10.07675,53.8917,5.74,0.48],[10.53264,-45.0667,5.74,-0.15],[11.15531,36.3094,5.74,1.51],[11.22522,-59.6194,5.74,-0.1],[11.49497,15.4133,5.74,1.32],[11.60972,-33.57,5.74,1.02],[12.36997,-68.3075,5.74,1.04],[12.54333,-13.8592,5.74,0.4],[13.61642,24.6133,5.74,1.55],[14.61228,-40.2117,5.74,-0.12],[14.57767,49.3683,5.74,1.56],[14.77475,-47.4411,5.74,0.07],[14.82186,46.1161,5.74,0.48],[14.95778,-21.4156,5.74,1.11],[15.59919,54.6306,5.74,null],[16.40703,55.205,5.74,0],[16.69514,1.1811,5.74,0.32],[16.77256,-58.5036,5.74,-0.09],[17.40183,22.9603,5.74,0.21],[17.55203,41.2436,5.74,1.09],[17.98211,-36.8583,5.74,0.9],[18.62597,62.5267,5.74,-0.06],[19.05492,-38.2533,5.74,0.32],[19.44003,13.0239,5.74,0.47],[19.87711,-54.9711,5.74,0.92],[22.92903,36.3517,5.74,-0.05],[0.24847,-9.5697,5.75,-0.08],[0.80639,5.2806,5.75,0.88],[1.69575,-11.3247,5.75,0.44],[2.29997,57.8997,5.75,1.17],[2.57853,-7.8594,5.75,1.4],[2.60258,-30.0447,5.75,1.02],[3.01944,-7.6628,5.75,1.05],[4.46275,-62.5208,5.75,1.01],[4.93531,52.8694,5.75,0.11],[5.04581,-22.795,5.75,1.2],[6.16222,23.1133,5.75,0.21],[6.20036,19.7906,5.75,-0.07],[6.80528,-1.3192,5.75,0.28],[7.13042,7.4711,5.75,1.18],[7.23639,-3.9014,5.75,1.58],[7.48947,-10.3267,5.75,1.62],[8.36517,-17.5864,5.75,1.05],[8.46647,-35.1139,5.75,-0.15],[8.52514,24.0811,5.75,0.28],[8.78858,-46.1556,5.75,0.56],[8.92011,-18.2414,5.75,1.32],[9.06678,54.2839,5.75,0.02],[9.30722,35.3642,5.75,null],[9.37333,-46.0475,5.75,0.92],[10.69675,68.4433,5.75,1.3],[11.43253,55.8506,5.75,null],[12.14828,-44.3261,5.75,0.24],[13.40922,-5.1639,5.75,0.42],[13.67792,19.9556,5.75,0.01],[13.86317,-69.4014,5.75,1.73],[14.27739,-66.5878,5.75,-0.06],[15.63783,46.7978,5.75,0.36],[15.98281,-65.0378,5.75,-0.06],[15.92517,42.5661,5.75,-0.11],[16.28486,-67.9414,5.75,0.15],[16.60597,-2.3247,5.75,0.82],[17.00264,-24.9892,5.75,0.41],[17.03853,25.5056,5.75,1.02],[17.466,-52.2972,5.75,1.17],[17.63597,-10.9264,5.75,1.23],[17.73314,53.8017,5.75,0.01],[18.28656,-17.3739,5.75,1.58],[18.35642,-18.86,5.75,0.94],[18.62667,-0.3094,5.75,0.07],[19.45719,52.3206,5.75,0],[19.54828,-53.1858,5.75,0.3],[19.97814,-69.1639,5.75,0.23],[20.19303,62.0786,5.75,0.47],[20.70978,82.5311,5.75,0],[21.26275,-53.2631,5.75,0.19],[21.54906,49.9778,5.75,-0.03],[22.12461,19.4756,5.75,null],[22.28514,-5.3872,5.75,0.88],[22.30353,62.8044,5.75,1.26],[22.44372,4.3936,5.75,0.52],[22.98661,11.7289,5.75,0.32],[23.40364,-51.8914,5.75,1.59],[23.45206,42.9119,5.75,0],[23.74464,-78.7914,5.75,1.11],[23.88069,-8.9967,5.75,1.17],[0.03617,27.0819,5.75,0.67],[1.56192,-7.0253,5.76,0.64],[1.66328,-56.1947,5.76,0.87],[3.71186,59.9694,5.76,1.71],[3.76511,24.5547,5.76,-0.04],[3.89408,48.6506,5.76,1.05],[4.41039,33.9597,5.76,0.4],[5.24133,-35.9772,5.76,1.01],[5.35353,29.57,5.76,0.06],[6.42878,-48.1772,5.76,-0.06],[7.40928,27.6381,5.76,0.34],[7.66328,-38.2608,5.76,-0.07],[7.87997,-5.4281,5.76,0.41],[8.2,-46.6442,5.76,0.59],[8.74775,-37.1472,5.76,-0.15],[10.36958,41.2294,5.76,0.54],[11.22758,-53.2317,5.76,1.32],[11.49406,-24.4633,5.76,0.07],[12.22369,-38.9292,5.76,-0.13],[12.88939,-60.3286,5.76,0.33],[13.97747,21.6961,5.76,-0.03],[14.54192,55.3978,5.76,1.5],[15.15831,-67.0842,5.76,0.69],[15.17183,-26.3328,5.76,1.05],[15.935,-60.4828,5.76,0.06],[16.52039,22.1953,5.76,1.61],[17.31333,-44.1297,5.76,-0.05],[18.49908,-57.5231,5.76,0.98],[18.56083,-14.8536,5.76,0.04],[20.00639,-66.9494,5.76,1.04],[19.91342,36.9961,5.76,0.75],[20.30689,55.3972,5.76,0.11],[20.68992,-31.5983,5.76,1.53],[21.00597,-51.2653,5.76,0.47],[21.14247,-63.9289,5.76,1.18],[21.32467,49.5103,5.76,-0.15],[22.40753,-13.5294,5.76,0.97],[22.7695,44.5461,5.76,0.36],[0.22206,-84.9942,5.77,1.72],[0.42339,1.9397,5.77,0.86],[2.71744,55.1058,5.77,-0.13],[2.74247,15.3117,5.77,-0.01],[3.54333,9.3736,5.77,-0.08],[3.86492,34.3592,5.77,0],[4.34478,6.1308,5.77,0.92],[4.53383,53.9108,5.77,0.18],[4.80903,-16.3294,5.77,0.55],[5.46711,17.2389,5.77,1.63],[6.47703,-17.4661,5.77,1.12],[6.84719,-0.5408,5.77,0.39],[6.88039,8.3803,5.77,0.26],[7.35486,45.2281,5.77,0.32],[7.48469,-31.4564,5.77,-0.19],[7.57636,-27.0119,5.77,1.06],[7.69772,13.4806,5.77,1.67],[8.02242,59.0475,5.77,0.39],[9.15319,-12.3578,5.77,0.94],[9.42419,-61.9503,5.77,0.15],[10.21342,4.6147,5.77,1.18],[10.50178,38.9253,5.77,0.08],[10.73089,-64.2489,5.77,0],[11.57278,3.06,5.77,0.46],[12.57842,-44.6733,5.77,0.7],[13.20914,11.5561,5.77,1.51],[13.34936,-46.8806,5.77,1.12],[13.44908,78.6439,5.77,0.77],[13.86311,-46.8992,5.77,-0.16],[14.00003,-25.0103,5.77,0.48],[14.79931,-26.6464,5.77,-0.02],[14.937,14.4464,5.77,-0.06],[15.12386,-49.0883,5.77,0.92],[15.83525,-53.2094,5.77,-0.08],[15.92564,-60.1778,5.77,0.35],[16.34033,-55.14,5.77,0.97],[16.67742,4.2197,5.77,-0.02],[16.91622,-41.1511,5.77,0.15],[17.40519,-60.6736,5.77,-0.08],[17.39933,8.8528,5.77,1.25],[17.62531,24.31,5.77,0.11],[17.88728,6.1014,5.77,0.42],[18.03178,-22.7806,5.77,0],[18.11383,-43.4247,5.77,0.22],[18.11383,-43.4247,5.77,null],[18.10422,-4.7514,5.77,0.96],[18.51789,16.9286,5.77,0.04],[18.91308,48.8597,5.77,0.43],[19.11067,24.2508,5.77,0.09],[19.79106,38.4075,5.77,-0.06],[20.55486,-80.965,5.77,1.14],[20.85783,28.2506,5.77,0.72],[21.40689,-41.0067,5.77,-0.05],[21.58822,-3.9831,5.77,1.11],[21.8595,19.8267,5.77,-0.1],[22.52706,-85.9672,5.77,1.02],[23.24961,-41.1056,5.77,1.18],[23.34814,38.1822,5.77,0.46],[23.82431,1.0761,5.77,0.16],[1.72214,60.5511,5.78,-0.02],[2.62669,65.7456,5.78,1.56],[2.79656,81.4483,5.78,1.3],[2.67008,-9.4531,5.78,0.52],[3.49861,-42.6342,5.78,0.22],[4.68883,28.615,5.78,-0.03],[4.81008,-5.6739,5.78,0.62],[5.13894,-8.665,5.78,-0.06],[5.49856,1.7892,5.78,-0.2],[5.55206,-35.1397,5.78,1.07],[5.58761,-33.08,5.78,1.12],[5.57908,-73.7414,5.78,1.71],[6.116,-21.8128,5.78,1.64],[6.20558,32.6933,5.78,1.66],[6.32806,-34.3967,5.78,-0.08],[7.09419,9.1858,5.78,1.52],[7.18975,26.8567,5.78,0.1],[7.21867,-11.2514,5.78,1.51],[7.30061,40.8833,5.78,0.17],[7.41897,-13.7519,5.78,0.42],[7.42369,-25.2178,5.78,-0.1],[7.82025,-60.2836,5.78,0.42],[7.94983,15.7903,5.78,1.28],[8.237,-35.4906,5.78,1.02],[8.57883,36.4194,5.78,0.04],[8.89686,-60.3542,5.78,-0.08],[9.32589,-15.8344,5.78,1.29],[10.22444,-51.7561,5.78,0.14],[12.8215,27.5522,5.78,0.03],[13.15344,10.0222,5.78,1],[13.41853,23.8544,5.78,0.06],[13.61344,-26.495,5.78,0.22],[15.63003,-23.1417,5.78,1.1],[16.12678,-12.7456,5.78,0.01],[16.27911,29.1503,5.78,0.07],[17.85986,-60.1644,5.78,1],[18.58683,18.2033,5.78,0],[18.727,-64.5511,5.78,0.96],[20.56525,46.6939,5.78,-0.16],[20.73944,56.4881,5.78,1.67],[20.91331,-17.9231,5.78,1.12],[21.45411,-21.1961,5.78,1.44],[22.03072,52.8822,5.78,-0.11],[22.0865,26.6739,5.78,1.25],[22.13064,21.7028,5.78,-0.1],[22.17706,11.6244,5.78,1.58],[22.41958,-70.4317,5.78,0.38],[22.40192,-4.8369,5.78,-0.04],[0.07214,-16.5289,5.78,1.1],[0.24967,8.8208,5.79,0.31],[0.34597,32.9114,5.79,1.59],[0.60758,60.3261,5.79,0.29],[1.14258,58.2636,5.79,-0.01],[1.44947,-32.5431,5.79,3.86],[1.81156,32.6903,5.79,0.55],[1.86928,50.7928,5.79,-0.07],[2.26278,25.7831,5.79,0.44],[2.61628,-34.5783,5.79,0.66],[3.20394,27.2569,5.79,-0.12],[3.26333,57.1408,5.79,0.73],[4.19339,-20.3561,5.79,0.18],[4.34942,-81.58,5.79,0.35],[4.63594,16.0333,5.79,0.31],[4.55944,-62.8236,5.79,1.04],[4.96353,23.9486,5.79,1.11],[5.48989,-3.4464,5.79,1.15],[5.78114,9.5222,5.79,0.88],[6.63972,28.9842,5.79,0],[6.68483,0.4953,5.79,-0.1],[6.83942,-17.0839,5.79,1.44],[7.11864,-40.8933,5.79,-0.17],[7.46436,-11.5569,5.79,0.58],[7.82806,-66.1958,5.79,-0.04],[8.48544,-44.1606,5.79,-0.16],[8.76533,-79.5044,5.79,1.6],[9.01269,-60.9639,5.79,1.21],[9.19256,-46.5839,5.79,-0.21],[9.76944,6.7086,5.79,1.64],[9.85336,-59.4258,5.79,1.36],[10.72247,4.7478,5.79,1.17],[10.83836,-8.8978,5.79,0.16],[11.23383,8.0606,5.79,1.12],[11.38558,-56.7794,5.79,0.01],[12.39581,-38.9111,5.79,-0.08],[12.99431,-3.8119,5.79,0.18],[13.18578,-42.2331,5.79,0.52],[13.25889,40.8553,5.79,0.19],[13.43558,72.3914,5.79,1.63],[13.66969,-64.5769,5.79,0.39],[15.13669,-40.5839,5.79,-0.14],[15.37733,63.3414,5.79,1.27],[15.51547,64.2086,5.79,0.96],[16.47075,-37.1794,5.79,1.1],[16.60311,46.6133,5.79,1.04],[16.99272,-69.2683,5.79,-0.1],[17.68786,-46.9219,5.79,-0.01],[17.69944,72.1569,5.79,0.53],[17.51333,86.9681,5.79,0.25],[18.92528,-16.3767,5.79,0.36],[19.90228,-8.5742,5.79,1.64],[20.22436,60.6406,5.79,1.47],[22.20619,63.2914,5.79,1.67],[22.28128,-9.04,5.79,1.16],[22.48617,26.7631,5.79,1.25],[22.62028,75.3717,5.79,1.57],[23.06653,-41.4783,5.79,1.08],[23.33122,42.0781,5.79,1.48],[23.85589,9.3133,5.79,1.66],[0.76267,-47.5517,5.8,0.64],[1.17206,25.4578,5.8,1.47],[1.59856,17.4336,5.8,null],[1.88114,-16.9292,5.8,0.27],[2.86631,68.8886,5.8,0.64],[2.96811,20.6686,5.8,0.41],[3.76692,67.2017,5.8,0.35],[3.89536,57.975,5.8,0.18],[5.36211,8.4286,5.8,-0.13],[5.83406,9.8711,5.8,0.87],[6.09086,-35.5136,5.8,0.02],[6.19231,24.4203,5.8,1.11],[6.40381,-60.2811,5.8,0],[6.58772,0.89,5.8,0],[6.75869,-30.9489,5.8,-0.19],[6.76492,-52.41,5.8,1.53],[7.2755,-38.3189,5.8,-0.13],[7.41589,51.8872,5.8,1.61],[7.64553,-36.4969,5.8,-0.16],[7.736,-36.0628,5.8,0.31],[8.59781,-50.97,5.8,-0.13],[9.68394,-57.2597,5.8,1.09],[10.72869,57.1992,5.8,-0.02],[11.22075,-44.3722,5.8,1.66],[11.41636,11.4303,5.8,1.38],[11.60497,27.7811,5.8,0.23],[12.08753,76.9058,5.8,1.01],[12.49831,-56.5247,5.8,1.56],[12.60033,-39.87,5.8,0.01],[14.29122,15.2633,5.8,1.71],[14.83289,28.6158,5.8,0.05],[14.90636,-11.8983,5.8,0.97],[15.95592,-36.185,5.8,1.01],[17.08881,54.4703,5.8,0.48],[17.38525,-56.5253,5.8,1],[17.94497,-28.0653,5.8,0.21],[19.22047,-25.9067,5.8,1.38],[19.48361,1.9503,5.8,0.08],[20.06839,17.07,5.8,0.61],[20.33928,17.7931,5.8,1.49],[20.67569,-16.1242,5.8,1],[21.46897,32.2253,5.8,0.32],[21.91478,56.6114,5.8,0.73],[22.05528,11.3864,5.8,-0.07],[22.89131,-11.6167,5.8,-0.08],[23.62556,44.4292,5.8,-0.06],[0.08506,61.3142,5.8,-0.09],[1.18619,37.7242,5.81,-0.1],[1.5205,70.2647,5.81,0.47],[2.33175,-55.9447,5.81,1.55],[2.60975,7.7297,5.81,1.04],[3.55975,39.8994,5.81,0.11],[3.80994,-20.9031,5.81,1.64],[4.54372,-3.2092,5.81,-0.14],[4.93064,15.04,5.81,-0.08],[4.96928,25.0503,5.81,0],[5.97711,-44.0344,5.81,1.07],[6.10153,-29.7586,5.81,0.05],[6.31639,-20.9261,5.81,-0.15],[7.57106,3.3714,5.81,-0.02],[7.98069,-60.8244,5.81,-0.09],[8.56711,-2.1517,5.81,0],[10.15847,-68.6833,5.81,0.02],[10.31044,-56.11,5.81,0.48],[10.93375,6.1853,5.81,1.45],[10.99983,-43.8072,5.81,-0.08],[11.16483,-32.3675,5.81,0.04],[11.44647,-53.16,5.81,0.52],[11.53781,-29.2633,5.81,0.53],[12.29153,53.1911,5.81,1.3],[12.41756,56.7775,5.81,1.62],[13.76025,-26.1161,5.81,0.02],[14.76856,-23.1531,5.81,0.98],[15.14319,25.1086,5.81,1.24],[15.23864,-70.0794,5.81,3.38],[15.69853,18.4639,5.81,0.2],[15.87128,55.8267,5.81,0.96],[16.22294,-55.5408,5.81,0.34],[17.57686,9.5867,5.81,0.02],[18.64186,-23.505,5.81,0.02],[18.82428,-45.8103,5.81,0.9],[19.1405,52.4256,5.81,1.09],[19.44131,19.8914,5.81,1.55],[19.4825,24.7686,5.81,1.03],[20.01342,-45.1131,5.81,0.28],[20.94042,50.7286,5.81,0.3],[22.14972,-18.5197,5.81,-0.17],[22.89447,44.7492,5.81,0.26],[22.90194,40.3769,5.81,1.13],[23.16592,-42.8606,5.81,0.48],[23.55542,-77.3853,5.81,0.68],[1.1295,-9.7856,5.82,0.43],[1.52869,-30.2833,5.82,1.08],[1.82103,47.8969,5.82,0.29],[1.96217,27.8044,5.82,1.6],[2.38064,41.3964,5.82,0.27],[2.60136,6.8869,5.82,0.98],[2.80892,18.2836,5.82,1.2],[3.04886,-46.975,5.82,1.3],[3.51028,48.1036,5.82,-0.04],[5.64544,-40.7075,5.82,-0.09],[6.45111,-58.0022,5.82,1.28],[7.04264,16.6742,5.82,1.68],[7.24497,24.885,5.82,1.56],[7.26094,7.9778,5.82,1.6],[7.37372,-5.9828,5.82,0.35],[8.05114,-32.4639,5.82,1.22],[8.18642,-48.4619,5.82,-0.15],[8.88,-38.7242,5.82,1.5],[9.02336,32.2525,5.82,0],[10.30056,65.1083,5.82,0.12],[10.28739,23.1061,5.82,0.5],[12.93822,54.0994,5.82,0.19],[13.30772,34.0981,5.82,1.35],[14.91056,-33.3006,5.82,1.42],[15.51122,-16.6094,5.82,1.06],[15.56711,-40.0661,5.82,1.68],[17.93844,0.6703,5.82,0.09],[19.64478,54.9739,5.82,0.44],[21.10842,31.1847,5.82,0.56],[21.30308,-4.5194,5.82,-0.13],[21.35133,7.3544,5.82,1.66],[22.60983,-31.6639,5.82,1.09],[22.64794,19.5222,5.82,0.92],[23.22403,11.065,5.82,1.01],[0.70094,66.1475,5.83,1.04],[2.43342,-15.3411,5.83,0.15],[2.54792,34.5425,5.83,1.07],[2.63853,-30.1942,5.83,0.48],[3.03225,-9.9614,5.83,1.11],[3.51433,-66.4897,5.83,-0.06],[3.98119,-5.47,5.83,1],[4.38492,-24.8922,5.83,1.51],[5.61911,26.9242,5.83,-0.07],[6.11769,-34.3119,5.83,-0.13],[6.23175,-3.7414,5.83,0.94],[6.24353,-4.5683,5.83,-0.17],[7.57183,-23.4736,5.83,0.44],[8.01553,25.3928,5.83,1.02],[8.23997,-45.8344,5.83,-0.2],[8.33917,20.7478,5.83,1.13],[9.973,72.8794,5.83,1.14],[11.48461,61.7783,5.83,0.36],[11.60619,-61.0522,5.83,-0.09],[12.24989,-20.8442,5.83,1.05],[13.37117,-52.1831,5.83,0.12],[13.645,-29.5608,5.83,0.4],[13.93875,-46.5925,5.83,1.14],[14.45339,-46.1344,5.83,0.31],[14.52125,-67.7172,5.83,1],[16.01419,4.4275,5.83,1],[16.05539,36.6317,5.83,0.56],[16.22133,-53.6717,5.83,1.96],[16.64061,-43.3986,5.83,-0.02],[17.08883,54.4703,5.83,null],[18.433,29.8289,5.83,0.06],[18.74711,-25.0111,5.83,0.05],[18.75789,5.4997,5.83,0.04],[18.84958,-9.7742,5.83,0.61],[19.05894,1.8189,5.83,0.18],[19.37264,-0.2525,5.83,1.09],[21.03586,56.6697,5.83,-0.07],[21.20378,-40.2694,5.83,0.45],[21.32283,38.2375,5.83,0.5],[22.44514,78.7858,5.83,0.15],[23.01192,3.0117,5.83,1.34],[23.12075,-50.6864,5.83,0.48],[23.16939,-40.5917,5.83,1.62],[0.17189,-5.2486,5.84,0.98],[1.07211,61.5803,5.84,0.54],[1.39194,-30.9456,5.84,1.61],[1.80303,16.9556,5.84,-0.03],[2.71658,53.5261,5.84,1.12],[2.96825,-23.6061,5.84,1.33],[6.53867,4.8558,5.84,0.99],[6.52028,-35.2592,5.84,0.81],[7.19489,-20.8831,5.84,-0.04],[7.82025,-46.8578,5.84,-0.14],[9.28542,-14.5736,5.84,1.06],[9.94319,-33.4186,5.84,1.2],[10.27831,25.3714,5.84,1.2],[11.93289,56.5986,5.84,1.1],[12.68972,-46.1456,5.84,1.52],[12.91569,47.1967,5.84,1.55],[13.28719,-43.9794,5.84,0.2],[15.23147,-26.1936,5.84,1.14],[15.63786,-21.0161,5.84,1.08],[15.64286,50.4233,5.84,0.83],[15.83264,-48.9119,5.84,0.07],[16.41103,-29.7047,5.84,0.59],[17.19414,-48.8742,5.84,1.84],[17.55206,-41.1736,5.84,0.06],[17.87214,-34.4167,5.84,1.13],[18.54617,23.6169,5.84,1.46],[18.66681,-7.7906,5.84,1.55],[19.39903,43.3881,5.84,0.92],[19.72917,41.7731,5.84,1.57],[20.30194,40.7322,5.84,0.1],[23.24369,74.2311,5.84,null],[23.58306,71.6422,5.84,1.8],[0.17856,-12.58,5.85,1.01],[0.92844,-7.3472,5.85,1.52],[2.15258,-43.5167,5.85,1.19],[3.29072,-47.7517,5.85,1.24],[3.64144,-7.3917,5.85,0.98],[3.82686,63.2972,5.85,0.18],[4.34522,-7.5925,5.85,-0.13],[5.04597,-4.2097,5.85,1.21],[4.98081,-82.4706,5.85,0.93],[6.62736,56.8575,5.85,null],[6.8305,16.2028,5.85,-0.13],[7.20733,24.1283,5.85,0.36],[7.30117,-43.9867,5.85,-0.12],[7.55269,-24.7108,5.85,0.17],[8.23061,56.4522,5.85,1.01],[8.382,-52.1239,5.85,0.01],[9.04578,7.2981,5.85,1.11],[9.23561,-44.1458,5.85,-0.12],[9.512,33.6556,5.85,1.05],[9.50628,-15.5772,5.85,1.2],[9.94056,8.9331,5.85,1.13],[10.18689,37.4019,5.85,1.29],[10.65211,37.91,5.85,0.57],[11.86156,-30.835,5.85,0.56],[12.22386,10.2622,5.85,0.27],[12.58558,21.8814,5.85,1.22],[12.81094,60.32,5.85,0.46],[12.8185,83.4181,5.85,-0.06],[13.23811,-78.4472,5.85,1.07],[13.69164,64.8225,5.85,0.07],[14.45197,-65.8217,5.85,1.5],[14.63756,54.0233,5.85,-0.01],[14.83772,23.9119,5.85,0.56],[15.03511,-28.0606,5.85,0.16],[15.14419,-42.8678,5.85,-0.11],[15.80956,28.1567,5.85,0.77],[15.96122,-20.9831,5.85,0.02],[16.403,6.9481,5.85,-0.01],[17.41167,-21.4417,5.85,0.93],[17.44561,48.26,5.85,0.12],[18.20958,-73.6717,5.85,0.46],[18.10206,-8.3239,5.85,0.21],[19.25689,30.5264,5.85,1.67],[19.47244,2.9303,5.85,0.01],[20.10383,53.1658,5.85,0.39],[20.20719,-12.6175,5.85,0.48],[20.42411,-28.6633,5.85,1.1],[21.65031,20.2653,5.85,0.32],[1.83569,22.2753,5.86,0.74],[2.04961,-15.3058,5.86,0.98],[2.21692,-21.0003,5.86,1.01],[2.81275,25.1881,5.86,-0.07],[4.16708,86.6261,5.86,0.37],[4.35753,-0.0981,5.86,1.32],[4.82194,32.5883,5.86,0.24],[4.85783,-34.9064,5.86,0.08],[5.52669,-45.9253,5.86,1.35],[6.94889,46.705,5.86,1.08],[7.49047,-7.5511,5.86,0.48],[7.92539,8.8628,5.86,0.35],[8.97886,-16.1328,5.86,0.53],[9.24922,-37.6025,5.86,0.83],[9.29094,-74.7347,5.86,-0.02],[10.06747,-18.1017,5.86,-0.06],[10.82875,-9.8528,5.86,1.07],[12.77944,-33.3156,5.86,1.34],[15.79389,55.3767,5.86,0.25],[16.18825,-41.1197,5.86,0.27],[16.99933,-25.0919,5.86,1.62],[17.61911,72.4558,5.86,1.01],[18.18769,-75.8914,5.86,1.24],[18.13042,26.1014,5.86,0.12],[18.18489,-41.3592,5.86,0.29],[18.65397,-47.9097,5.86,0.23],[18.64817,-21.0519,5.86,0.68],[20.82156,-25.7814,5.86,-0.07],[21.92531,65.3208,5.86,-0.06],[22.61633,-40.5911,5.86,0.06],[0.04336,66.0989,5.86,1.09],[0.31064,31.5172,5.87,-0.01],[0.52378,33.5817,5.87,1.14],[0.65606,21.2506,5.87,0.85],[0.80253,72.675,5.87,1.01],[1.33008,-0.5089,5.87,0.64],[1.66317,-56.1981,5.87,0.9],[1.63211,-82.975,5.87,0.61],[1.99325,21.0583,5.87,1.03],[2.36806,-17.6622,5.87,1.23],[4.10086,68.68,5.87,1.54],[4.2945,-63.2556,5.87,-0.07],[4.72267,49.9739,5.87,0.02],[5.45147,-40.9436,5.87,0.23],[5.70386,-22.3736,5.87,0.11],[5.83153,-22.9717,5.87,0.06],[5.92508,-4.6164,5.87,1.18],[5.94708,11.5211,5.87,1.1],[6.08428,42.9817,5.87,0.3],[6.09083,-10.2428,5.87,0.37],[6.28597,-37.2531,5.87,0.14],[6.42122,-0.9461,5.87,0.56],[6.44433,-1.5072,5.87,0.08],[6.54089,32.4547,5.87,0.14],[6.94231,46.2742,5.87,-0.06],[7.35119,-25.8914,5.87,1.64],[7.49989,-52.6511,5.87,1.01],[7.57197,-23.4747,5.87,null],[8.01386,-54.1514,5.87,-0.14],[8.56208,4.7567,5.87,1.07],[8.78222,12.11,5.87,0.11],[8.83394,-29.4631,5.87,0.95],[8.9655,-48.5733,5.87,1.07],[9.31172,-51.5606,5.87,0.54],[9.52581,-35.715,5.87,1.29],[12.07128,21.4592,5.87,0.22],[12.61317,-5.8319,5.87,0.07],[13.36936,5.1547,5.87,0.12],[13.77042,41.0886,5.87,0.21],[13.85256,34.6644,5.87,1.62],[14.31689,-25.8156,5.87,0.5],[14.559,-54.9983,5.87,0.48],[14.55831,-52.68,5.87,1.09],[14.59208,-41.5172,5.87,-0.08],[14.87639,-63.81,5.87,0.72],[14.98156,-11.1442,5.87,1.26],[15.62556,54.5089,5.87,1.07],[15.91097,-25.2436,5.87,-0.06],[16.19656,42.3744,5.87,1.45],[16.69597,-33.1464,5.87,0.65],[16.78883,42.2389,5.87,1.61],[17.745,-42.7289,5.87,0.16],[17.99353,-4.8214,5.87,1.56],[19.36414,-18.3083,5.87,1.06],[19.52272,26.6172,5.87,0.93],[20.30039,-21.81,5.87,1],[20.96128,-16.0317,5.87,0.18],[21.10647,71.4319,5.87,0.4],[21.35119,-4.56,5.87,0.92],[22.67286,-30.6589,5.87,1.3],[23.16239,-28.0886,5.87,1.31],[23.56917,-1.2475,5.87,0.3],[23.875,-14.2511,5.87,1.28],[1.57128,37.2372,5.88,-0.07],[2.00256,3.0972,5.88,0.62],[2.44311,-20.0428,5.88,1.26],[2.86158,46.8419,5.88,0.89],[4.36439,56.5067,5.88,null],[4.458,11.2125,5.88,0.05],[4.57722,28.9611,5.88,-0.06],[5.63364,7.5414,5.88,-0.07],[6.24128,17.9064,5.88,0.22],[6.51311,58.1628,5.88,0.94],[6.58822,9.9883,5.88,1.51],[7.74283,-37.9431,5.88,-0.11],[7.76956,-37.9339,5.88,-0.11],[8.49617,67.2975,5.88,0.97],[8.61828,9.6556,5.88,0.09],[9.01903,-68.6839,5.88,1.63],[9.5065,-58.3617,5.88,1.7],[10.80394,-31.6883,5.88,0.03],[11.00322,-14.0833,5.88,1.5],[11.27831,49.4764,5.88,1.08],[11.81075,14.2842,5.88,0.29],[12.53611,-73.0017,5.88,1.11],[13.43794,46.0281,5.88,0.97],[14.67886,16.4178,5.88,0.24],[15.73383,2.515,5.88,0.68],[16.14547,-23.6856,5.88,0.02],[16.37469,-43.9122,5.88,1.16],[16.90747,-42.4789,5.88,0.64],[16.89033,-20.4156,5.88,0.68],[17.27547,1.2106,5.88,0.06],[17.52425,-80.8592,5.88,1.67],[17.38194,-58.0103,5.88,1.07],[18.19586,33.4469,5.88,0.01],[18.77864,52.9881,5.88,-0.09],[18.81483,19.3286,5.88,0.03],[19.05825,-68.7553,5.88,0.56],[19.16606,-41.8925,5.88,-0.08],[19.9965,-9.9583,5.88,0.58],[20.02908,24.8003,5.88,-0.12],[20.489,36.4547,5.88,0.52],[20.84494,-12.545,5.88,1.07],[21.71789,-14.3997,5.88,0.25],[22.27403,57.2203,5.88,0.93],[22.54067,39.7797,5.88,0.16],[0.07044,62.2878,5.88,0.3],[0.28586,47.9475,5.89,-0.09],[0.61314,15.2317,5.89,-0.15],[0.674,-59.4544,5.89,0.55],[1.58031,18.4606,5.89,1.52],[1.93178,37.2778,5.89,1.63],[2.48014,29.9319,5.89,0.58],[2.99442,41.0331,5.89,1.44],[3.02714,-28.0917,5.89,0.79],[3.12194,64.0578,5.89,-0.03],[4.01356,18.1939,5.89,0.32],[4.13317,17.3397,5.89,1.5],[5.13208,21.7047,5.89,0.19],[5.19592,1.0369,5.89,0.66],[5.43328,-19.6956,5.89,0.4],[5.98939,49.9244,5.89,1.23],[6.95014,33.6811,5.89,0.88],[7.32289,2.7406,5.89,1.07],[7.68292,23.0186,5.89,1.58],[8.34058,57.7433,5.89,0.39],[8.94181,40.2017,5.89,0.35],[9.69311,31.2781,5.89,1.6],[10.99192,-16.3539,5.89,1.63],[11.16069,43.2075,5.89,1.57],[11.42586,-37.7478,5.89,1.54],[12.04381,-69.1922,5.89,-0.08],[12.65097,-30.4222,5.89,1.21],[12.78858,62.7808,5.89,null],[12.83631,37.5169,5.89,0.15],[12.91625,-44.1519,5.89,0.64],[13.22319,-50.7,5.89,-0.02],[13.23669,-58.6839,5.89,1.08],[13.24531,-48.9567,5.89,1.06],[13.38858,-4.9244,5.89,1.43],[13.89531,-53.3736,5.89,0.01],[15.02028,-38.0583,5.89,1.24],[15.20119,18.9758,5.89,1.53],[15.30728,-0.4614,5.89,1.51],[15.43742,-68.3092,5.89,1.02],[17.22153,-67.1967,5.89,1.06],[17.93861,-15.8125,5.89,0.05],[18.37647,12.0289,5.89,0.04],[18.54869,-73.9656,5.89,0.98],[18.97969,13.9067,5.89,0.25],[18.96719,38.2661,5.89,-0.17],[19.56903,-40.0347,5.89,0.09],[21.06797,-5.8231,5.89,0.68],[22.22739,28.6083,5.89,1.15],[22.56747,-1.5742,5.89,0.99],[23.68581,-11.6806,5.89,1],[23.69908,7.2506,5.89,0.1],[0.34011,30.9358,5.9,-0.1],[0.73669,-38.4217,5.9,1.16],[0.82053,-24.1364,5.9,0.95],[1.84919,51.9333,5.9,0.43],[2.55194,-34.65,5.9,1.06],[2.61589,38.7328,5.9,0.48],[3.03169,26.4622,5.9,0.14],[3.22333,48.1769,5.9,0.97],[3.33217,27.0711,5.9,0.86],[3.54444,35.4617,5.9,-0.06],[3.77428,-29.3381,5.9,0.12],[4.08894,22.0089,5.9,0.62],[4.47317,14.7408,5.9,0.32],[4.73481,-8.5036,5.9,-0.11],[5.18867,-2.4908,5.9,0.46],[5.38847,-8.4158,5.9,-0.03],[5.91639,31.7017,5.9,0.14],[5.97344,1.8369,5.9,0.21],[6.50083,46.6856,5.9,1.44],[6.72742,3.9322,5.9,-0.02],[7.23764,-9.9475,5.9,1.52],[7.44508,-34.1408,5.9,-0.17],[7.53494,-8.8808,5.9,0.54],[7.78681,-22.5197,5.9,-0.19],[8.38053,-26.3481,5.9,0.37],[8.54861,38.0164,5.9,1.11],[8.68481,-48.9225,5.9,-0.21],[10.22942,-40.3458,5.9,1.21],[10.38508,33.9081,5.9,0.14],[10.53094,32.3794,5.9,0.11],[11.53886,-66.9622,5.9,1.13],[12.31119,-0.7872,5.9,0.17],[12.89697,-60.3769,5.9,0.2],[13.21358,-66.2269,5.9,0.06],[13.62325,-46.4283,5.9,-0.12],[13.88619,28.6481,5.9,0.2],[14.31064,-18.7161,5.9,0],[15.46428,60.6703,5.9,1.44],[16.07686,-37.8631,5.9,0.4],[17.87044,-34.7992,5.9,-0.1],[18.13042,26.0975,5.9,0.14],[18.49325,23.8661,5.9,-0.1],[18.77458,-0.9617,5.9,0.13],[20.39567,37.4764,5.9,-0.2],[20.94053,49.1958,5.9,1.04],[21.06322,53.2861,5.9,0.99],[21.91986,-61.8864,5.9,0.39],[22.69928,14.5164,5.9,1.11],[22.80303,37.4167,5.9,1.03],[22.85061,85.3736,5.9,1.32],[23.82806,36.4253,5.9,0.79],[0.67844,-4.3519,5.91,1.1],[1.40572,-6.9147,5.91,0.41],[1.80722,3.6856,5.91,0.97],[2.24222,-41.1667,5.91,0.97],[2.93014,18.3317,5.91,1.47],[3.30078,-28.7969,5.91,0.33],[3.76931,6.8031,5.91,0.99],[3.81081,0.2278,5.91,1.23],[4.373,20.8214,5.91,1.66],[5.21339,-6.0572,5.91,0.96],[6.25236,13.8511,5.91,-0.23],[6.25233,-20.2722,5.91,1.32],[7.12286,34.0094,5.91,1.51],[7.32989,7.1428,5.91,0.53],[7.60964,5.8617,5.91,0.6],[7.83997,-50.5097,5.91,1.09],[8.65489,52.7117,5.91,1.17],[8.87739,-48.3592,5.91,-0.15],[9.47517,-66.7019,5.91,0.01],[9.55728,-22.8639,5.91,0.02],[10.16875,-8.4083,5.91,0.02],[10.54267,-44.6189,5.91,0.92],[10.63403,-57.2564,5.91,-0.14],[10.82336,-59.3236,5.91,0],[10.92844,0.7369,5.91,0.42],[10.95219,-50.765,5.91,0.18],[11.31528,1.6506,5.91,1.04],[11.91661,-63.2789,5.91,0.19],[13.16328,16.8486,5.91,1.45],[13.19767,-69.9419,5.91,0.42],[13.16756,38.4989,5.91,0.29],[13.57792,-13.2144,5.91,0.02],[13.791,-50.2494,5.91,0.29],[13.71092,78.0644,5.91,1.01],[13.94108,1.0506,5.91,0.2],[13.98814,-50.37,5.91,0.96],[14.228,-0.8456,5.91,0.47],[14.63722,18.2983,5.91,1.1],[14.67844,13.5342,5.91,0.21],[14.81233,-66.5939,5.91,-0.07],[15.18564,-84.7875,5.91,-0.06],[16.14969,3.4544,5.91,1.47],[16.31978,49.0381,5.91,1.37],[16.68981,-68.2961,5.91,-0.08],[16.65144,-37.2175,5.91,0],[16.82628,13.2614,5.91,0.03],[17.06411,-38.1522,5.91,0.38],[17.32011,-59.6944,5.91,1.37],[17.31589,-34.9897,5.91,1.04],[18.82942,32.8128,5.91,-0.16],[19.33781,57.6453,5.91,1.58],[19.76108,7.6133,5.91,0.18],[19.86867,47.9319,5.91,-0.18],[20.01636,8.5581,5.91,1.52],[20.26683,45.5794,5.91,0.38],[20.6385,-81.2889,5.91,1.71],[20.49086,56.0681,5.91,-0.04],[20.64308,23.6806,5.91,0.98],[21.09147,78.1264,5.91,-0.07],[22.91739,37.0769,5.91,0.42],[1.06028,61.075,5.92,0.49],[1.21261,-37.8564,5.92,0.28],[1.60756,48.7228,5.92,1.21],[2.38183,-51.0922,5.92,0.22],[2.509,25.235,5.92,0.41],[2.83744,-35.8436,5.92,0.9],[2.89289,-38.4369,5.92,0.44],[3.57406,24.4644,5.92,0.13],[4.33733,41.8081,5.92,0.94],[4.63772,20.6847,5.92,-0.05],[5.03064,0.7222,5.92,1.27],[5.91575,19.7497,5.92,-0.17],[6.26881,-16.6178,5.92,-0.17],[6.67561,71.7489,5.92,1.19],[6.75633,-31.7936,5.92,0.48],[6.9405,9.9564,5.92,-0.08],[7.20339,-25.9425,5.92,-0.17],[7.29269,52.1308,5.92,1.26],[7.61306,55.7553,5.92,1.12],[7.63164,48.7736,5.92,0.22],[7.77781,65.4558,5.92,1.18],[9.22625,-47.3386,5.92,-0.05],[9.47972,-62.2731,5.92,1.1],[10.64983,-58.8169,5.92,1.65],[10.92144,-60.5169,5.92,1.08],[12.20611,-62.9508,5.92,0.29],[12.36597,-56.3747,5.92,1.57],[14.05728,-56.2136,5.92,1.22],[14.54236,22.26,5.92,0.35],[15.77633,55.4747,5.92,1.39],[16.10175,-23.6064,5.92,-0.08],[16.23953,-33.0114,5.92,1.02],[16.42642,-23.4461,5.92,null],[16.69353,26.9169,5.92,0.4],[17.45344,-50.6303,5.92,0.08],[17.84117,-53.6122,5.92,-0.08],[18.46375,-29.8164,5.92,0.52],[19.24436,-45.1933,5.92,0.9],[19.73847,69.3369,5.92,0.05],[19.87,-19.045,5.92,0.98],[19.98903,45.7722,5.92,0.16],[20.20019,26.4789,5.92,-0.11],[22.20222,24.95,5.92,1.51],[22.83939,41.9536,5.92,0.08],[23.27769,-44.4892,5.92,1.06],[0.55289,54.895,5.93,1.04],[0.59244,-0.5056,5.93,0.44],[0.80483,7.3,5.93,1.1],[1.41814,-64.3694,5.93,1.56],[1.50636,-26.2078,5.93,1.34],[2.06339,-0.3403,5.93,0.88],[2.19328,-1.8253,5.93,0.97],[3.20717,-44.4197,5.93,0.44],[3.36461,49.0708,5.93,0.43],[3.43958,-27.3175,5.93,0.94],[3.89258,-46.8936,5.93,1.24],[4.01131,-30.4908,5.93,0.04],[5.56778,-1.4706,5.93,1.55],[5.68489,0.3378,5.93,0.3],[6.07783,-45.0789,5.93,0.49],[6.159,22.19,5.93,1.63],[6.50314,-10.0814,5.93,1.38],[6.51286,-27.7694,5.93,-0.15],[6.77567,8.5872,5.93,-0.17],[7.05844,29.3372,5.93,0.6],[7.44897,20.2572,5.93,0.3],[7.67044,-19.6608,5.93,1.16],[7.82075,-35.2433,5.93,-0.05],[8.16772,58.2481,5.93,1.39],[9.14753,33.8822,5.93,0.6],[9.52561,-31.8719,5.93,0.26],[9.95378,57.4183,5.93,0.89],[9.89728,-51.1469,5.93,-0.15],[10.81128,-1.9589,5.93,1.6],[10.89186,69.8539,5.93,0.99],[10.90822,-61.8267,5.93,1.75],[11.92781,-28.4769,5.93,1.5],[12.72725,-1.5769,5.93,0.86],[12.88442,-54.9525,5.93,1.31],[12.94208,-72.1853,5.93,1.13],[15.00328,-77.1603,5.93,1.05],[14.98975,4.5678,5.93,1.6],[15.02419,60.2044,5.93,0.09],[15.60814,16.1189,5.93,0.29],[16.03486,52.9158,5.93,1.48],[17.06092,13.6053,5.93,0],[17.38192,-37.2206,5.93,1.08],[17.62422,-50.06,5.93,1.1],[18.9335,-23.1736,5.93,-0.02],[19.06594,-51.0186,5.93,1.24],[19.21019,21.5544,5.93,0.03],[19.41781,-29.3092,5.93,1.26],[20.29203,66.8539,5.93,0.58],[20.37925,41.0261,5.93,1.6],[20.76944,-21.5142,5.93,0.04],[21.48331,22.1794,5.93,1.53],[21.9815,62.6983,5.93,1.67],[22.39225,-7.1944,5.93,1],[22.67178,53.8461,5.93,0.93],[23.32336,-18.0753,5.93,1.52],[23.88211,-3.1556,5.93,1.07],[0.12967,-22.5089,5.94,0.14],[0.22836,-26.0219,5.94,1.55],[0.50553,59.9772,5.94,0.01],[0.74919,-42.6767,5.94,0.28],[1.19542,-2.2511,5.94,1.4],[1.64094,-36.5283,5.94,1.05],[1.81081,37.9528,5.94,0.97],[1.84778,11.0433,5.94,0.3],[1.84847,-50.2061,5.94,0.14],[2.04311,13.4767,5.94,1.59],[3.51261,6.1886,5.94,0.96],[4.28867,-6.4719,5.94,1.08],[4.55853,72.5286,5.94,0.3],[4.41814,-61.2383,5.94,1.54],[4.60672,64.2617,5.94,-0.03],[5.03967,-31.7714,5.94,1.17],[5.41069,31.1431,5.94,0.04],[5.44692,34.3917,5.94,0.14],[5.50725,15.3603,5.94,0.14],[5.61789,11.035,5.94,1.58],[5.77511,56.1156,5.94,0.17],[5.87231,-57.1561,5.94,0.66],[6.36767,59.3722,5.94,null],[6.62817,61.4811,5.94,0.89],[7.04042,17.7556,5.94,1.63],[7.24919,-41.4258,5.94,-0.16],[7.69311,3.6247,5.94,-0.04],[8.63861,32.8019,5.94,1.12],[9.54883,-13.5169,5.94,1.5],[9.65775,67.2722,5.94,1.52],[10.03333,-60.4208,5.94,0.26],[11.45264,-12.3567,5.94,0.49],[11.50864,43.1733,5.94,0.49],[13.16258,-10.3294,5.94,1.49],[13.77194,38.5039,5.94,0.94],[14.32331,-37.0036,5.94,0.08],[14.49736,0.8289,5.94,0.16],[14.78475,-38.2908,5.94,1.33],[15.73961,-41.8194,5.94,0],[15.91675,-19.3831,5.94,-0.01],[16.31678,-14.8725,5.94,1.52],[16.54047,60.8233,5.94,0.02],[16.90014,-57.9094,5.94,1.59],[16.94131,-52.2839,5.94,-0.08],[17.30647,38.8114,5.94,1],[17.47742,-55.1697,5.94,1.11],[17.44617,34.6958,5.94,-0.01],[17.62672,-15.5711,5.94,0.37],[17.79356,-14.7258,5.94,0.05],[18.05139,-8.1803,5.94,null],[18.5325,-1.0031,5.94,0.16],[18.63178,-21.3978,5.94,0.19],[19.71239,32.4267,5.94,0.11],[19.83717,-47.5572,5.94,1.7],[20.49831,-18.5833,5.94,0.08],[21.04089,-38.5306,5.94,1.11],[21.09075,5.9583,5.94,0.54],[21.42972,36.6675,5.94,-0.08],[21.74203,14.7719,5.94,0.59],[22.69336,41.5494,5.94,null],[23.02547,-4.7114,5.94,1],[23.17422,43.5442,5.94,0.44],[23.83742,-9.9742,5.94,1.13],[1.176,2.4456,5.95,1.51],[2.74714,67.8247,5.95,0.1],[2.89314,-22.3764,5.95,1.04],[3.01225,10.8703,5.95,1.59],[3.19522,81.4706,5.95,0.15],[4.15044,13.3983,5.95,0.05],[5.00508,39.3947,5.95,0.41],[5.77639,1.1681,5.95,0.78],[7.26197,-10.5839,5.95,1.18],[7.46192,-22.8597,5.95,-0.09],[8.02706,-37.2836,5.95,0.14],[8.07844,-50.5906,5.95,1.21],[8.38939,18.3322,5.95,0.17],[8.47703,14.2108,5.95,0.19],[8.87661,28.3308,5.95,0.87],[9.09003,48.5303,5.95,0.45],[9.17742,30.9631,5.95,1.67],[9.89525,5.9583,5.95,1.66],[10.4165,-58.5764,5.95,0.32],[10.8515,-3.0925,5.95,1.48],[11.06017,-0.0008,5.95,1.22],[11.54653,-7.8275,5.95,1.38],[11.57847,16.7969,5.95,-0.16],[12.16147,1.8978,5.95,1.12],[12.41992,-11.6103,5.95,0.03],[12.53217,-63.5061,5.95,0.27],[12.74986,39.2789,5.95,0.55],[13.77869,25.7022,5.95,0.49],[13.92742,-82.6661,5.95,1.46],[14.40025,8.2436,5.95,0.06],[15.26494,-48.0742,5.95,0.21],[15.6985,-76.0819,5.95,-0.04],[15.66569,-59.9083,5.95,0.48],[17.52306,-56.9206,5.95,-0.08],[17.69231,6.3128,5.95,1.26],[17.8765,1.305,5.95,1.58],[18.10658,-36.0197,5.95,0.62],[18.17544,54.2867,5.95,0.94],[18.25358,-20.3881,5.95,0.02],[18.48875,-80.2328,5.95,1.16],[18.25472,68.7558,5.95,1.06],[19.79683,25.3839,5.95,0.99],[20.00442,-37.7022,5.95,1],[20.33339,13.5481,5.95,0.31],[20.66753,43.4586,5.95,1.19],[21.26172,77.0122,5.95,1.5],[21.74814,62.4606,5.95,0.31],[22.05106,-76.1186,5.95,0.39],[22.19758,16.0406,5.95,0.95],[22.31689,-13.305,5.95,1.06],[22.49611,-27.1072,5.95,0.33],[22.73478,39.4656,5.95,1.48],[23.65289,75.2928,5.95,0.13],[23.77686,66.7822,5.95,-0.04],[0.10444,58.4367,5.96,0.67],[1.4385,43.4578,5.96,0.49],[2.21042,24.1678,5.96,1.37],[3.29606,39.2833,5.96,0.07],[3.42672,-69.3364,5.96,0.42],[3.52244,27.5719,5.96,null],[3.65031,-5.6261,5.96,0.92],[4.4775,-19.4583,5.96,1.22],[4.51119,-35.6536,5.96,1],[5.07772,74.0669,5.96,null],[5.27172,34.3119,5.96,0.22],[5.314,-18.13,5.96,0.58],[5.65511,29.2153,5.96,0.16],[5.64383,-6.5739,5.96,-0.23],[5.93731,-22.8403,5.96,1.11],[6.02864,48.9594,5.96,1.45],[6.86175,-36.2303,5.96,0.18],[7.00658,-8.4069,5.96,-0.08],[7.12036,-51.9678,5.96,1],[7.20714,-36.5444,5.96,-0.14],[7.50858,-54.3994,5.96,1.56],[8.38167,-7.5433,5.96,1.67],[8.56064,-38.8489,5.96,-0.14],[8.59133,-26.8436,5.96,0.37],[8.94281,-16.7094,5.96,1.54],[9.26461,72.9461,5.96,0.18],[10.35094,68.7475,5.96,0.2],[10.30783,-41.6683,5.96,-0.06],[11.63011,-67.6203,5.96,1.02],[11.6785,-53.9686,5.96,1.66],[11.98822,33.1675,5.96,1.15],[12.08253,-60.9692,5.96,1.67],[13.01933,17.1231,5.96,0.96],[13.82931,61.4892,5.96,0.96],[15.10925,-30.9189,5.96,-0.08],[16.74439,-53.1525,5.96,1.26],[16.89514,-43.0508,5.96,1.73],[17.25997,-38.5939,5.96,0.58],[17.26156,23.7428,5.96,1.31],[17.85911,-40.7725,5.96,1.59],[17.89858,-34.7525,5.96,-0.01],[17.90756,-34.4664,5.96,-0.01],[18.49633,-14.5817,5.96,-0.04],[19.51969,-68.4339,5.96,1.64],[19.56156,49.2625,5.96,1.64],[19.69692,50.5253,5.96,0.64],[19.97464,63.5342,5.96,0.09],[20.05456,18.5006,5.96,1.42],[20.49097,81.0914,5.96,0.92],[20.94297,44.925,5.96,0.05],[21.22192,-36.4239,5.96,0.98],[21.31444,11.2033,5.96,1.65],[22.07689,-26.8225,5.96,-0.14],[23.58039,-15.2458,5.96,1.36],[0.35794,-77.4269,5.97,1.4],[0.97531,66.3522,5.97,-0.02],[1.39025,20.4689,5.97,1.71],[1.66133,16.4058,5.97,1.12],[2.93717,8.3817,5.97,0.48],[3.88611,17.3269,5.97,0.34],[4.779,40.3128,5.97,0.93],[4.87975,27.8975,5.97,0.37],[5.12361,-12.4906,5.97,0.6],[5.80969,-4.0947,5.97,0.64],[5.83697,4.4233,5.97,1.36],[5.86878,-9.0414,5.97,0.1],[6.47072,70.5356,5.97,null],[6.61297,-13.3208,5.97,1.56],[6.66322,12.9831,5.97,0.06],[6.9825,3.6022,5.97,1.06],[7.05497,9.1383,5.97,0.12],[7.25583,-52.4997,5.97,1.1],[7.43083,-5.775,5.97,0.92],[8.35333,-57.9731,5.97,-0.09],[8.431,-64.6008,5.97,0.96],[9.25397,34.6336,5.97,0.86],[9.292,46.8172,5.97,0.04],[9.82447,-37.1864,5.97,1.24],[10.27564,23.5031,5.97,0.67],[10.39069,-4.0742,5.97,-0.1],[10.69758,-79.7833,5.97,-0.07],[12.33631,-22.1756,5.97,0.82],[13.4365,-1.1925,5.97,0.19],[14.0145,-66.2686,5.97,0.35],[14.51967,-38.8697,5.97,1.06],[15.58786,53.9219,5.97,1.18],[16.15311,6.3789,5.97,1],[17.01025,-35.9342,5.97,1.16],[17.14653,-30.4036,5.97,0.25],[17.95119,0.0664,5.97,0.1],[18.06456,-24.3606,5.97,0],[19.11544,-48.2992,5.97,-0.02],[19.09478,-15.6603,5.97,-0.02],[19.66864,-23.4286,5.97,1.04],[20.65139,15.8381,5.97,-0.14],[21.02025,36.0261,5.97,0.98],[21.53739,-33.9447,5.97,0.05],[21.41381,80.5247,5.97,0.92],[22.59347,-23.9911,5.97,0.99],[22.68025,-57.4222,5.97,1.46],[22.85581,-29.5361,5.97,0.91],[23.04564,-20.8706,5.97,0.94],[23.66531,9.6772,5.97,0.2],[23.82761,28.8425,5.97,0.19],[23.951,42.6583,5.97,0.69],[23.95553,-62.9564,5.97,0.11],[0.45408,-25.5472,5.98,1.03],[0.71161,-60.2625,5.98,1.32],[0.97061,33.9508,5.98,1],[1.04842,41.345,5.98,0.16],[1.23544,16.1336,5.98,-0.08],[2.30125,57.5167,5.98,1.05],[2.69278,-14.5494,5.98,0.43],[3.17747,11.8725,5.98,-0.06],[3.56083,54.9747,5.98,0.11],[4.41586,19.0417,5.98,0.37],[5.84167,2.0244,5.98,0.91],[5.87781,33.9175,5.98,1.6],[6.0195,31.0347,5.98,0.08],[6.42031,7.0858,5.98,1.22],[6.39381,-52.1811,5.98,1.04],[7.06433,12.5944,5.98,1.58],[8.34453,72.4072,5.98,1.54],[8.30664,-12.6319,5.98,0.76],[8.34225,24.0222,5.98,-0.03],[8.43211,-14.9297,5.98,0.17],[8.41589,-42.7694,5.98,-0.17],[9.14647,26.6292,5.98,0.66],[9.62453,-36.0958,5.98,1.12],[10.17719,-41.715,5.98,1.24],[11.57486,-32.8314,5.98,0.81],[11.72422,-37.1903,5.98,1.46],[12.68783,-13.015,5.98,0.42],[12.86578,-39.6808,5.98,-0.1],[13.61833,-44.1433,5.98,0.94],[13.71528,-41.4011,5.98,1.02],[13.72778,-42.0675,5.98,-0.08],[13.71206,34.9889,5.98,0.85],[13.70642,82.7525,5.98,1.01],[14.26783,18.9119,5.98,0.26],[15.16875,-38.7925,5.98,null],[15.37703,62.0472,5.98,-0.03],[16.24264,73.395,5.98,0.08],[16.71833,77.5142,5.98,0.42],[17.10564,-37.2275,5.98,0.07],[17.43178,16.9175,5.98,1.62],[17.84678,22.3164,5.98,null],[19.19611,31.2833,5.98,-0.07],[19.61458,11.2733,5.98,0.88],[20.82717,12.5453,5.98,0.43],[21.28731,55.7981,5.98,1.45],[22.46283,31.8403,5.98,1.45],[22.71025,-47.2106,5.98,0.58],[23.46122,25.1672,5.98,-0.06],[23.65586,74.0028,5.98,0.89],[0.13817,-8.8239,5.99,1.04],[0.78989,6.7408,5.99,0.94],[1.06733,52.5022,5.99,1.47],[1.69422,30.0472,5.99,1.01],[3.49419,-6.805,5.99,1.02],[3.51028,-47.3753,5.99,0.11],[4.39233,20.9822,5.99,0.03],[4.69731,38.2803,5.99,0.57],[4.91408,0.4675,5.99,-0.12],[5.32325,-27.3689,5.99,-0.04],[5.94111,9.5097,5.99,-0.07],[6.25825,-4.9153,5.99,0.09],[6.25486,-18.4767,5.99,1.06],[7.36764,0.1772,5.99,-0.07],[7.86575,19.3253,5.99,1.13],[7.97542,16.5186,5.99,1.47],[8.02508,16.4553,5.99,-0.02],[7.98383,-45.2161,5.99,-0.14],[8.10511,22.6356,5.99,1.66],[8.496,-46.3319,5.99,-0.15],[8.5975,6.62,5.99,0.52],[8.86989,45.3125,5.99,1.26],[8.86944,42.0025,5.99,1.25],[9.40158,-61.6489,5.99,1.06],[10.895,-70.7203,5.99,-0.02],[11.32125,-64.5825,5.99,0.46],[13.00997,-3.3686,5.99,1.12],[13.12339,-59.8606,5.99,0.48],[13.10589,21.1533,5.99,0.39],[14.02233,8.8947,5.99,0.09],[15.23503,31.7881,5.99,1.52],[16.73103,34.0389,5.99,0.29],[17.13747,-17.6092,5.99,1.01],[17.25564,-14.5839,5.99,1.1],[17.68939,51.8181,5.99,1.05],[18.01011,33.2139,5.99,1.51],[18.30214,18.1314,5.99,0.03],[18.33114,29.6661,5.99,1.29],[18.73839,61.0481,5.99,0.96],[18.82806,-5.9128,5.99,1.6],[20.13383,-0.6783,5.99,1.02],[20.68783,14.5831,5.99,1.24],[20.85714,-5.6264,5.99,0.46],[21.00108,7.5164,5.99,0.26],[21.38231,-9.3194,5.99,1.54],[21.73361,-14.7494,5.99,0.21],[23.12464,21.1342,5.99,0.26],[1.08128,5.6564,6,1.51],[2.04797,64.9014,6,0.03],[2.51256,0.2553,6,0.17],[3.92119,-12.0992,6,0.32],[4.30442,-20.7156,6,1.67],[5.5135,41.4619,6,1.11],[5.65867,-3.5647,6,0.27],[5.77931,15.8225,6,-0.06],[5.91225,0.9683,6,1.34],[6.27656,-39.2644,6,0.16],[6.37681,12.57,6,null],[6.98411,38.0522,6,1.23],[7.66611,-37.5794,6,-0.04],[8.48081,-9.7483,6,0.42],[8.83917,-42.09,6,-0.1],[8.90497,-5.4344,6,0.67],[9.19472,-39.2589,6,-0.11],[9.69661,-55.2142,6,-0.13],[10.32411,48.3969,6,1.02],[10.342,54.2169,6,1.13],[10.32133,-12.5281,6,0.26],[10.54656,-58.6669,6,0.32],[10.75111,67.4114,6,2.39],[10.8015,-59.9192,6,0.27],[10.99244,36.0931,6,1.59],[11.07533,38.2414,6,0.16],[12.18333,81.71,6,1.62],[12.45683,-63.7892,6,0.07],[12.64572,-18.2503,6,0.29],[12.71919,-56.1761,6,-0.08],[12.90519,-11.6486,6,0.08],[13.02967,63.6103,6,0.41],[13.66658,-49.9503,6,1.5],[13.71558,-56.7681,6,-0.08],[13.9425,-54.7044,6,0.78],[13.97775,14.6494,6,1.44],[14.15972,-51.5047,6,-0.06],[14.39678,-53.1767,6,1.1],[15.65617,36.6367,6,null],[15.80369,13.7886,6,1.25],[16.88822,47.4169,6,1.32],[17.00753,-48.6478,6,0.88],[17.30139,17.3181,6,0.01],[17.46042,-29.7244,6,0],[17.97842,36.2878,6,0.94],[18.08067,-35.9014,6,1.16],[18.28142,-3.0072,6,0.89],[18.66467,52.1961,6,-0.07],[19.25072,20.2033,6,0.88],[19.28094,46.9992,6,0.44],[20.70081,-76.1806,6,0.44],[21.33597,-45.0222,6,2.33],[21.77119,-9.2758,6,1.66],[22.00219,6.7175,6,-0.12],[23.64003,-76.87,6,0.9],[23.92603,57.4122,6,0.21],[23.926,47.3558,6,1.16]]"),vf={navBv:mf,stars:gf},_f=.25,xf=[2.741,2.668,2.595,2.602,2.639,2.619,2.54,2.504,2.576,2.641,2.627,2.625,2.621,2.721,2.728,2.716,2.669,2.585,2.597,2.612,2.591,2.603,2.667,2.743,2.77,2.755,2.658,2.68,2.603,2.541,2.496,2.517,2.475,2.506,2.475,2.397,2.41,2.353,2.252,2.239,2.225,2.158,2.128,2.186,2.263,2.313,2.451,2.431,2.416,2.388,2.364,2.482,2.573,2.578,2.596,2.617,2.572,2.582,2.629,2.544,2.62,2.721,2.828,2.93,2.926,2.926,2.974,2.973,2.96,2.893,2.809,2.798,2.785,2.744,2.811,2.852,2.878,2.795,2.71,2.669,2.615,2.551,2.545,2.53,2.497,2.479,2.458,2.397,2.424,2.469,2.501,2.516,2.519,2.556,2.603,2.594,2.548,2.467,2.366,2.364,2.489,2.608,2.645,2.688,2.821,2.971,3.06,3.143,3.216,3.293,3.381,3.45,3.552,3.634,3.717,3.83,3.938,4.002,4.062,4.021,4.082,4.189,4.28,4.363,4.476,4.539,4.611,4.7,4.773,4.853,4.93,4.998,5.142,5.246,5.336,5.397,5.522,5.61,5.637,5.671,5.726,5.811,5.891,6.015,6.073,6.103,6.138,6.185,6.195,6.188,6.169,6.136,6.093,5.915,5.796,5.768,5.773,5.863,5.9,5.931,5.897,5.865,5.826,5.738,5.696,5.649,5.535,5.389,5.246,5.137,5.019,4.955,4.873,4.72,4.717,4.737,4.745,4.775,4.802,4.884,4.888,4.884,4.878,4.86,4.843,4.842,4.778,4.719,4.685,4.57,4.541,4.547,4.563,4.497,4.485,4.472,4.448,4.426,4.415,4.411,4.409,4.332,4.367,4.373,4.454,4.591,4.668,4.716,4.771,4.846,4.882,4.896,4.896,4.874,4.82,4.797,4.765,4.741,4.718,4.687,4.872,5.011,5.115,5.155,5.19,5.227,5.21,5.261,5.37,5.449,5.513,5.572,5.616,5.634,5.646,5.757,5.893,6.035,6.128,6.179,6.217,6.262,6.309,6.357,6.417,6.492,6.579,6.67,6.765,6.863,6.961,7.065,7.206,7.322,7.426,7.508,7.562,7.631,7.669,7.707,7.767,7.86,7.926,7.948,7.952,7.946,7.895,7.871,7.872,7.87,7.892,7.94,8.003,8.077,8.139,8.152,8.143,8.148,8.15,8.123,8.141,8.144,8.137,8.145,8.14,8.162,8.199,8.231,8.281,8.274,8.209,8.127,8.043,8.015,8.035,8.096,8.135,8.167,8.18,8.178,8.172,8.147,8.098,8.026,7.937,7.905,7.842,7.78,7.76,7.746,7.704,7.738,7.758,7.778,7.79,7.798,7.801,7.803,7.754,7.705,7.672,7.645,7.624,7.64,7.683,7.693,7.66,7.595,7.532,7.513,7.494,7.432,7.409,7.397,7.334,7.354,7.354,7.334,7.305,7.262,7.248,7.255,7.262,7.283,7.299,7.31,7.332,7.356,7.379,7.412,7.482,7.564,7.637,7.688,7.684,7.668,7.626,7.56,7.512,7.478,7.444,7.416,7.383,7.342,7.289,7.231,7.213,7.27,7.377,7.448,7.487,7.504,7.5,7.474,7.449,7.425,7.383,7.376,7.369,7.368,7.37,7.353,7.32,7.309,7.323,7.343,7.393,7.411,7.435,7.466,7.501,7.514,7.497,7.453,7.408,7.361,7.331,7.297,7.267,7.216,7.175,7.15,7.12,7.099,7.087,7.039,6.976,6.911,6.839,6.754,6.661,6.57,6.508,6.461,6.416,6.349,6.268,6.192,6.12,6.065,6.016,5.967,5.917,5.872,5.829,5.795,5.77,5.743,5.707,5.673,5.636,5.604,5.566,5.526,5.494,5.516,5.55,5.573,5.637,5.711,5.75,5.741,5.685,5.544,5.344,5.269,5.343,5.4,5.425,5.444,5.458,5.476,5.495,5.503,5.511,5.529,5.556,5.591,5.638,5.637,5.627,5.593,5.578,5.557,5.495,5.424,5.373,5.322,5.272,5.316,5.373,5.427,5.466,5.479,5.418,5.369,5.318,5.263,5.198,5.15,5.121,5.088,5.048,5.014,4.979,4.925,4.888,4.844,4.788,4.732,4.672,4.597,4.519,4.446,4.423,4.427,4.437,4.435,4.441,4.456,4.474,4.534,4.613,4.688,4.761,4.822,4.866,4.897,4.916,4.92,4.914,4.907,4.899,4.892,4.881,4.859,4.831,4.783,4.704,4.609,4.503,4.388,4.259,4.121,3.975,3.831,3.749,3.669,3.62,3.611,3.611,3.702,3.797,3.881,3.957,4.032,4.113,4.166,4.228,4.276,4.35,4.412,4.469,4.547,4.6,4.664,4.741,4.785,4.851,4.937,5.012,5.094,5.178,5.274,5.345,5.434,5.542,5.674,5.804,5.906,6.007,6.096,6.198,6.316,6.434,6.554,6.634,6.696,6.733,6.742,6.75,6.769,6.799,6.825,6.846,6.867,6.889,6.911,6.931,6.947,6.949,6.948,6.943,6.948,6.946,6.935,6.937,6.932,6.937,6.988,7.092,7.173,7.24,7.294,7.317,7.357,7.394,7.403,7.376,7.343,7.293,7.224,7.149,7.078,7.042,7.021,7.012,7.026,7.096,7.145,7.168,7.18,7.185,7.195,7.207,7.215,7.218,7.219,7.216,7.217,7.21,7.196,7.183,7.167,7.15,7.132,7.113,7.093,7.072,7.059,7.034,7.011,6.982,6.934,6.869,6.788,6.696,6.606,6.509,6.4,6.298,6.215,6.133,6.083,6.091,6.079,6.047,5.981,5.87,5.766,5.653,5.56,5.444,5.341,5.219,5.115,4.999,4.885,4.767,4.651,4.565,4.502,4.502,4.492,4.482,4.491,4.486,4.483,4.478,4.471,4.437,4.362,4.241,4.117,4.021,3.951,3.875,3.772,3.642,3.48,3.302,3.153,3.026,2.921,2.829,2.888,2.95,2.981,2.991,2.954,2.891,2.817,2.758,2.705,2.639,2.568,2.497,2.446,2.405,2.38,2.342,2.283,2.18,2.08,1.982,1.897,1.859,1.921,1.869,1.782,1.713,1.676,1.668,1.688,1.641,1.623,1.597,1.58,1.572,1.509,1.434,1.414,1.472,1.441,1.394,1.314,1.241,1.184,1.119,1.028,.913,.903,.896,.877,.853,.831,.805,.779,.759,.74,.718,.694,.671,.633,.589,.548,.528,.512,.496,.481,.464,.449,.435,.422,.409,.395,.381,.387,.42,.431,.441,.433,.409,.382,.365,.349,.329,.36,.417,.421,.442,.468,.481,.566,.635,.701,.732,.707,.651,.668,.668,.651,.583,.496,.441,.412,.376,.341,.341,.341,.31,.324,.335,.361,.409,.355,.339,.303,.307,.295,.304,.253,.184,.048,-.011,-.039,-.043,-.041,-.061,-.058,-.037,-.041,-.056,-.058,-.058,-.059,-.06,-.061,-.063,-.064,.006,-.002,.064,.148,.18,.185,.2,.137,.109,.123,.155,.189,.245,.207,.187,.195,.081,.046,.047,.013,-.023,-.053,-.087,-.092,-.106,-.171,-.177,-.177,-.184,-.184,-.183,-.178,-.183,-.181,-.179,-.165,-.15,-.131,-.109,-.05,.01,.122,.26,.369,.451,.523,.583,.608,.656,.693,.734,.728,.714,.713,.757,.785,.754,.812,.834,.843,.837,.838,.846,.861,.879,.868,.844,.816,.764,.737,.756,.746,.76,.707,.678,.681,.738,.806,.861,.856,.822,.836,.832,.875,.932,.904,.93,.996,1.033,1.091,1.19,1.212,1.224,1.255,1.35,1.377,1.343,1.274,1.137,1.081,1.185,1.261,1.222,1.214,1.323,1.405,1.434,1.53,1.587,1.599,1.588,1.681,1.736,1.815,1.841,1.865,1.826,1.77,1.733,1.8,1.845,1.91,1.933,1.956,2.003,1.943,1.936,1.909,1.901,1.928,1.968,1.993,2.001,2.014,2.01,2.058,2.042,2.013,1.939,1.923,1.913,1.901,1.897,1.968,1.992,2.023,1.967,1.908,1.846,1.78,1.74,1.739,1.768,1.852,1.904,1.932,1.984,2.01,2.043,2.064,2.079,2.02,1.964,2.008,2.091,2.198,2.262,2.266,2.27,2.203,2.166,2.075,2.089,2.109,2.15,2.177,2.138,2.151,2.163,2.135,2.111,2.085,2.038,1.98,1.85,1.793,1.792,1.808,1.785,1.78,1.769,1.761,1.697,1.713,1.711,1.713,1.718,1.718,1.626,1.58,1.439,1.366,1.285,1.227,1.168,1.174,1.21,1.219,1.233,1.234,1.251,1.332,1.382,1.42,1.455,1.404,1.385,1.399,1.422,1.467,1.503,1.499,1.493,1.51,1.594,1.66,1.699,1.718,1.7,1.669,1.656,1.658,1.634,1.644,1.627,1.625,1.609,1.564,1.533,1.523,1.564,1.546,1.503,1.558,1.548,1.577,1.58,1.564,1.665,1.756,1.749,1.754,1.763,1.713,1.67,1.731,1.763,1.737,1.69,1.653,1.672,1.657,1.672,1.695,1.712,1.717,1.727,1.833,1.939,1.996,1.974,1.918,1.829,1.745,1.705,1.656,1.604,1.547,1.502,1.451,1.386,1.283,1.211,1.166,1.204,1.181,1.204,1.22,1.241,1.282,1.299,1.274,1.272,1.255,1.193,1.173,1.194,1.233,1.288,1.321,1.367,1.444,1.556,1.669,1.719,1.786,1.879,1.9,1.922,1.876,1.856,1.805,1.829,1.793,1.673,1.722,1.871,1.974,2.08,2.188,2.206,2.263,2.351,2.425,2.465,2.537,2.644,2.729,2.835,2.833,2.897,2.926,2.927,2.956,3.011,3.056,3.101,3.176,3.222,3.22,3.211,3.24,3.254,3.263,3.3,3.402,3.416,3.34,3.272,3.22,3.207,3.232,3.25,3.187,3.169,3.113,3.062,3.067,3.074,3.077,3.104,3.092,3.059,3.146,3.152,3.136,3.098,3.054,3.058,3.114,3.181,3.175,3.069,2.916,2.785,2.626,2.69,2.672,2.723,2.769,2.729,2.734,2.786,2.837,2.848,2.834,2.827,2.91,2.888,2.839,2.87,2.891,2.909,2.94,2.973,3.039,3.068,3.058,3.02,2.989,2.949,2.915,2.909,3.026,3.076,3.097,3.063,3.015,2.989,2.965,2.916,2.836,2.713,2.543,2.392,2.298,2.329,2.294,2.308,2.301,2.271,2.288,2.256,2.207,2.212,2.244,2.287,2.325,2.373,2.42,2.458,2.48,2.454,2.467,2.577,2.669,2.754,2.784,2.769,2.746,2.675,2.638,2.581,2.66,2.633,2.573,2.512,2.526,2.576,2.655,2.646,2.562,2.518,2.552,2.504,2.479,2.399,2.451,2.474,2.505,2.422,2.428,2.439,2.457,2.466,2.466,2.537,2.612,2.638,2.607,2.616,2.585,2.5,2.448,2.311,2.288,2.261,2.25,2.27,2.383,2.424,2.454,2.447,2.385,2.331,2.309,2.383,2.371,2.406,2.423,2.413,2.452,2.468,2.6,2.594,2.573,2.568,2.559,2.473,2.445,2.422,2.351,2.325,2.24,2.23,2.215,2.25,2.223,2.239,2.192,2.205,2.209,2.228,2.248,2.303,2.348,2.401,2.445,2.414,2.368,2.343,2.279,2.251,2.224,2.223,2.26,2.368,2.408,2.466,2.526,2.539,2.577,2.53,2.547,2.551,2.608,2.628,2.657,2.682,2.717,2.751,2.725,2.705,2.63,2.548,2.547,2.551,2.441,2.464,2.51,2.555,2.613,2.693,2.68,2.695,2.775,2.786,2.833,2.765,2.666,2.621,2.664,2.7,2.724,2.756,2.779,2.777,2.792,2.761,2.734,2.744,2.768,2.782,2.784,2.792,2.863,2.894,2.875,2.881,2.845,2.829,2.778,2.712,2.73,2.716,2.675,2.658,2.662,2.612,2.567,2.578,2.57,2.56,2.57,2.526,2.56,2.563,2.6,2.6,2.604,2.624,2.634,2.648,2.579,2.592,2.593,2.634,2.708,2.657,2.635,2.618,2.631,2.652,2.617,2.545,2.648,2.683,2.678,2.756,2.787],gs={stepDeg:_f,alt:xf},Mf=[{name:"大文字山",lat:35.01961,lon:135.81181,elevM:463.6,distKm:2.91,az:75.24,alt:8.14},{name:"比叡山",lat:35.06583,lon:135.83449,elevM:846.3,distKm:7.64,az:39.66,alt:5.94},{name:"愛宕山",lat:35.05996,lon:135.63429,elevM:921.6,distKm:14.34,az:291.37,alt:3.43},{name:"小塩山",lat:34.93196,lon:135.63462,elevM:629.6,distKm:16.08,az:235.95,alt:2.01}],Sf={peaks:Mf},vs=Math.PI/180;function yf(i,t){const e=t.length;return n=>{const r=(n/vs%360+360)%360/i,a=Math.floor(r),s=r-a,o=t[a%e],l=t[(a+1)%e];return(o+(l-o)*s)*vs}}const cs=yf(gs.stepDeg,gs.alt),mo={stepDeg:gs.stepDeg,altDeg:gs.alt};function Ml(i,t){return i<cs(t)}const ns=Sf.peaks.map(i=>({name:i.name,alt:i.alt*vs,az:i.az*vs})),an=10,Ef=[{name:"Mercury",body:Ut.Mercury,color:13222576},{name:"Venus",body:Ut.Venus,color:16774358},{name:"Mars",body:Ut.Mars,color:16740419},{name:"Jupiter",body:Ut.Jupiter,color:16769187},{name:"Saturn",body:Ut.Saturn,color:16771248}],wf=-1.46;function wn(i){return new D((i>>16&255)/255,(i>>8&255)/255,(i&255)/255)}const B2=vf,Tf=B2.stars;function Af(i){return 4600*(1/(.92*i+1.7)+1/(.92*i+.62))}function Sl(i,t,e){const n=yl(t,new de);yl(Af(i),e),e.r/=n.r,e.g/=n.g,e.b/=n.b;const r=Math.max(e.r,e.g,e.b);return e.multiplyScalar(1/r)}function yl(i,t){const e=i/100,n=e<=66?255:329.698727446*Math.pow(e-60,-.1332047592),r=e<=66?99.4708025861*Math.log(e)-161.1195681661:288.1221695283*Math.pow(e-60,-.0755148492),a=e>=66?255:e<=19?0:138.5177312231*Math.log(e-10)-305.0447927307,s=o=>Math.min(1,Math.max(0,o/255));return t.setRGB(s(n),s(r),s(a),on)}function K0(i,{epoch:t,observer:e,style:n}){const{altAzFromRaDec:r,altAzFromJ2000:a,bodyAltAz:s,eclToEq:o,whitePathBeta:l,nodeLon:c}=ff(t,e),u=new e2({antialias:!0});u.setPixelRatio(window.devicePixelRatio),u.setSize(window.innerWidth,window.innerHeight),i.appendChild(u.domElement);const h=new n2,f=new _n(60,window.innerWidth/window.innerHeight,.1,100);f.position.set(0,0,0);function p($,_t){return new D(Math.cos($)*Math.sin(_t),Math.sin($),-Math.cos($)*Math.cos(_t))}const g={attenuation:{value:0},refDist:{value:an},minCorePx:{value:0},maxScale:{value:1e6},spike:{value:0},spikeLen:{value:8},spikeWidthPx:{value:.8},spikeStrength:{value:.6},spikeMinU:{value:.38},spikeAngle:{value:0},soft:{value:0}},v=`
      uniform float attenuation, refDist, minCorePx, maxScale;
      varying float vDim;
      float gK;   
      
      float shrink(vec4 mv) {
        float k = min(pow(refDist / max(length(mv.xyz), 1e-3), attenuation), maxScale);   
        float floorPx = min(minCorePx, size);
        vDim = 1.0;
        if (minCorePx > 0.0 && size * k < floorPx) { float f = floorPx / (size * k); vDim = 1.0 / (f * f); k *= f; }
        gK = k;
        return k;
      }
      attribute float uStar;
      uniform float spike, spikeLen, spikeWidthPx, spikeMinU, soft;
      varying float vScale, vSpikeL, vSpikeW, vSpikeA;
      
      void spikeSetup(float base, float h) {
        
        float ua = uStar * max(gK, 1.0);
        vSpikeA = spike * smoothstep(spikeMinU, 1.0, ua);
        vSpikeL = spikeLen * min(ua, 1.3) / h;                   
        vSpikeW = spikeWidthPx * pixelRatio / max(base * 0.5, 1e-3);
        vScale = vSpikeA > 0.0 ? max(1.0, vSpikeL) : 1.0;
        if (soft > 0.0) vScale = max(vScale, 2.2 / h);           
      }`,m=`
      uniform float spikeStrength, spikeAngle, soft;
      varying float vScale, vSpikeL, vSpikeW, vSpikeA;
      
      float coreAt(float d, float rc, float px) {
        float hard = 1.0 - smoothstep(rc - px, rc, d);
        float s = d / (0.6 * rc);
        return mix(hard, exp(-0.5 * s * s), soft);
      }
      
      float spikeAt(vec2 pc) {
        if (vSpikeA <= 0.0) return 0.0;
        float ca = cos(spikeAngle), sa = sin(spikeAngle);
        vec2 q = abs(vec2(ca * pc.x + sa * pc.y, -sa * pc.x + ca * pc.y));
        float h1 = pow(max(0.0, 1.0 - q.x / vSpikeL), 2.0) * max(0.0, 1.0 - q.y / vSpikeW);
        float h2 = pow(max(0.0, 1.0 - q.y / vSpikeL), 2.0) * max(0.0, 1.0 - q.x / vSpikeW);
        return vSpikeA * spikeStrength * (h1 + h2);
      }`,d=new dn({uniforms:{...g,pixelRatio:{value:u.getPixelRatio()},haloFalloff:{value:n.haloFalloff},haloTint:{value:wn(n.haloTint)}},vertexShader:`
      attribute float size;
      attribute float halo;
      attribute float haloStr;
      uniform float pixelRatio;
      ${v}
      varying vec3 vColor;
      varying float vCore;
      varying float vPx;
      varying float vHalo;
      void main() {
        vColor = color;
        vHalo = haloStr;
        vec4 mv = modelViewMatrix * vec4(position, 1.0);
        gl_Position = projectionMatrix * mv;
        float base = size * halo * pixelRatio * shrink(mv);
        spikeSetup(base, halo);
        gl_PointSize = base * vScale;
        vCore = 1.0 / halo;
        vPx = 2.0 / base;
      }`,fragmentShader:`
      uniform float haloFalloff;
      uniform vec3 haloTint;
      varying vec3 vColor;
      varying float vCore;
      varying float vPx;
      varying float vHalo;
      varying float vDim;
      ${m}
      void main() {
        vec2 pc = (gl_PointCoord - 0.5) * 2.0 * vScale;
        float d = length(pc);
        float sp = spikeAt(pc);
        if (d > max(1.0, soft > 0.0 ? 2.2 * vCore : 0.0) && sp <= 0.0) discard;
        float core = coreAt(d, vCore, vPx);
        float t = clamp((d - vCore) / max(1.0 - vCore, 1e-4), 0.0, 1.0);
        float glare = vHalo * pow(1.0 - t, haloFalloff);
        vec3 c = vColor * core + mix(vColor, haloTint, 0.5) * (glare + sp) * (1.0 - core);
        gl_FragColor = vec4(c * vDim, 1.0);
      }`,vertexColors:!0,transparent:!0,blending:Ti,depthWrite:!1}),w=new dn({uniforms:{...g,pixelRatio:{value:u.getPixelRatio()},haloFalloff:{value:n.haloFalloff},haloTint:{value:wn(n.haloTint)},emph:{value:0},emphSel:{value:0},navTint:{value:wn(n.navTint??16765562)},navTintMix:{value:n.navTintMix??0},navHaloAdd:{value:n.navHaloAdd??0},navGlowAdd:{value:n.navGlowAdd??0}},vertexShader:`
      attribute float size;
      attribute float halo;
      attribute float haloStr;
      attribute float sel;
      uniform float pixelRatio, emph, emphSel, navHaloAdd, navGlowAdd;
      ${v}
      varying vec3 vColor;
      varying float vCore;
      varying float vPx;
      varying float vHalo;
      varying float vE;
      void main() {
        float e = max(emph, sel * emphSel);
        float h = halo + e * navHaloAdd;
        vColor = color;
        vHalo = haloStr + e * navGlowAdd;
        vE = e;
        vec4 mv = modelViewMatrix * vec4(position, 1.0);
        gl_Position = projectionMatrix * mv;
        float base = size * h * pixelRatio * shrink(mv);
        spikeSetup(base, h);
        gl_PointSize = base * vScale;
        vCore = 1.0 / h;
        vPx = 2.0 / base;
      }`,fragmentShader:`
      uniform float haloFalloff, navTintMix;
      uniform vec3 haloTint, navTint;
      varying vec3 vColor;
      varying float vCore;
      varying float vPx;
      varying float vHalo;
      varying float vE;
      varying float vDim;
      ${m}
      void main() {
        vec2 pc = (gl_PointCoord - 0.5) * 2.0 * vScale;
        float d = length(pc);
        float sp = spikeAt(pc);
        if (d > max(1.0, soft > 0.0 ? 2.2 * vCore : 0.0) && sp <= 0.0) discard;
        float core = coreAt(d, vCore, vPx);
        float t = clamp((d - vCore) / max(1.0 - vCore, 1e-4), 0.0, 1.0);
        float glare = vHalo * pow(1.0 - t, haloFalloff);
        vec3 hc = mix(mix(vColor, haloTint, 0.5), navTint, vE * navTintMix);
        vec3 c = vColor * core + hc * (glare + sp) * (1.0 - core);
        gl_FragColor = vec4(c * vDim, 1.0);
      }`,vertexColors:!0,transparent:!0,blending:Ti,depthWrite:!1});function S($,_t=1){const F=Math.pow(10,-.4*($-wf));return Math.min(_t,Math.pow(F,n.starGamma))}function _(){const $=[],_t=[],F=[],nt=[],Ct=[],I=[];return{add(ot,T,pt){$.push(ot.x,ot.y,ot.z),_t.push(n.sizeMin+(n.sizeMax-n.sizeMin)*Math.min(T,1)),F.push(1+(n.haloMax-1)*T*T),I.push(T),nt.push(n.haloStrength*Math.min(T,1.2));const ct=n.brightMin+(1-n.brightMin)*Math.min(T,1);Ct.push(pt.r*ct,pt.g*ct,pt.b*ct)},build(ot=d){const T=new Ke;return T.setAttribute("position",new be(new Float32Array($),3)),T.setAttribute("size",new be(new Float32Array(_t),1)),T.setAttribute("halo",new be(new Float32Array(F),1)),T.setAttribute("haloStr",new be(new Float32Array(nt),1)),T.setAttribute("uStar",new be(new Float32Array(I),1)),T.setAttribute("color",new be(new Float32Array(Ct),3)),T.setAttribute("sel",new be(new Float32Array($.length/3),1)),new a2(T,ot)}}}let L;{const $=new dn({uniforms:{zenith:{value:wn(n.skyZenith)},mid:{value:wn(n.skyMid)},horizon:{value:wn(n.skyHorizon)},glowAlt:{value:Math.max(.5,n.skyGlowAlt)*Tt},toGal:{value:new ae().set(...sf(t,e).flat())},milkyStrength:{value:n.milkyStrength},milkyWidth:{value:Math.max(1,n.milkyWidth)*Tt},milkyColor:{value:wn(n.milkyColor)},milkyAnticenter:{value:n.milkyAnticenter},milkyNoise:{value:n.milkyNoise},milkyLane:{value:n.milkyLane},fade:{value:1}},vertexShader:`
        varying vec3 vDir;
        void main() {
          vDir = normalize(position);
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }`,fragmentShader:`
        uniform vec3 zenith, mid, horizon;
        uniform float glowAlt, fade;
        uniform mat3 toGal;
        uniform float milkyStrength, milkyWidth, milkyAnticenter, milkyNoise, milkyLane;
        uniform vec3 milkyColor;
        varying vec3 vDir;

        
        float hash(vec3 p) { return fract(sin(dot(p, vec3(127.1, 311.7, 74.7))) * 43758.5453); }
        float vnoise(vec3 p) {
          vec3 i = floor(p), f = fract(p);
          f = f * f * (3.0 - 2.0 * f);
          return mix(mix(mix(hash(i), hash(i + vec3(1,0,0)), f.x), mix(hash(i + vec3(0,1,0)), hash(i + vec3(1,1,0)), f.x), f.y),
                     mix(mix(hash(i + vec3(0,0,1)), hash(i + vec3(1,0,1)), f.x), mix(hash(i + vec3(0,1,1)), hash(i + vec3(1,1,1)), f.x), f.y), f.z);
        }
        float fbm(vec3 p) { return 0.5 * vnoise(p) + 0.25 * vnoise(p * 2.03) + 0.125 * vnoise(p * 4.01) + 0.0625 * vnoise(p * 8.07); }

        
        float milky(vec3 d) {
          vec3 g = toGal * d;
          float b = asin(clamp(g.z, -1.0, 1.0));
          float cl = g.x / max(length(g.xy), 1e-4);                     
          float lon = mix(milkyAnticenter, 1.0, pow(0.5 + 0.5 * cl, 2.0));
          float band = exp(-pow(b / milkyWidth, 2.0));
          float n = fbm(g * 6.0);
          float clumps = mix(1.0, smoothstep(0.25, 0.75, n) * 1.6, milkyNoise);
          float lane = milkyLane * exp(-pow(b / (milkyWidth * 0.25), 2.0)) * smoothstep(0.35, 0.7, fbm(g * 11.0 + 3.1)) * (0.5 + 0.5 * cl);
          return max(0.0, band * lon * clumps * (1.0 - lane));
        }

        void main() {
          vec3 d = normalize(vDir);
          float alt = max(0.0, asin(clamp(d.y, -1.0, 1.0)));
          vec3 base = mix(mid, zenith, smoothstep(0.0, 1.0, alt / 1.5707963));
          base += milkyColor * milkyStrength * milky(d);
          vec3 c = mix(base, horizon, exp(-alt / glowAlt));
          
          float n = fract(sin(dot(gl_FragCoord.xy, vec2(12.9898, 78.233))) * 43758.5453);
          gl_FragColor = vec4((c + (n - 0.5) / 255.0) * fade, 1.0);
        }`,side:fn,depthTest:!1,depthWrite:!1});L=new ke(new aa(an*2,64,32),$),L.renderOrder=-100,L.frustumCulled=!1,h.add(L)}let R,b,U,E;{const $=_(),_t=new de,F=new de(1,1,1);for(const[nt,Ct,I,ot]of Tf){if(I>n.magLimit)continue;const{alt:T,az:pt}=a(nt,Ct);ot==null?_t.copy(F):Sl(ot,n.whiteK,_t).lerp(F,1-n.colorSaturation),$.add(p(T,pt).multiplyScalar(an),S(I),_t)}R=$.build(),h.add(R)}const M=[];let C,H=null;{const $=_(),_t=new de,F=new de(1,1,1);A0.forEach((nt,Ct)=>{const{alt:I,az:ot}=a(nt.ra,nt.dec);M.push({name:nt.name,alt:I,az:ot});const T=B2.navBv[Ct];T==null?_t.copy(F):Sl(T,n.whiteK,_t).lerp(F,1-n.colorSaturation),$.add(p(I,ot).multiplyScalar(an),S(nt.mag),_t)}),C=$.build(w),h.add(C)}const G=[];{const $=_(),_t=new de;for(const F of Ef){const{alt:nt,az:Ct}=s(F.body);G.push({name:F.name,alt:nt,az:Ct});const I=gl(F.body,t).mag;$.add(p(nt,Ct).multiplyScalar(an),S(I,n.planetCap),_t.set(F.color))}b=$.build(),h.add(b)}const K=[],tt=[],Z=[];for(let $=0;$<=360;$+=2){const _t=r($/15%24,0);K.push(p(_t.alt,_t.az).multiplyScalar(an));const F=o($,0),nt=r(F.ra,F.dec);tt.push(p(nt.alt,nt.az).multiplyScalar(an));const Ct=l($,c),I=o($,Ct),ot=r(I.ra,I.dec);Z.push(p(ot.alt,ot.az).multiplyScalar(an))}const at=e.latitude*Tt,X=[p(at,0).multiplyScalar(an),p(-at,Math.PI).multiplyScalar(an)],ft=s(Ut.Moon),st=s(Ut.Sun),Q=gl(Ut.Moon,t).phase_fraction,Mt=p(st.alt,st.az),wt=new dn({uniforms:{map:{value:null},useMap:{value:0},tint:{value:wn(n.moonColor)},sunColor:{value:wn(n.sunLightColor)},sunDir:{value:Mt},brightness:{value:n.moonBrightness},soft:{value:Math.max(.001,n.moonTerminator)},earthshine:{value:wn(n.earthshineColor).multiplyScalar(n.earthshineIntensity)},base:{value:wn(n.moonEmissive).multiplyScalar(n.moonEmissiveIntensity)},flash:{value:0},flatten:{value:0}},vertexShader:`
      uniform float flatten;
      varying vec2 vUv;
      varying vec3 vN;
      varying vec3 vW;
      varying vec3 vR;
      void main() {
        vUv = uv;
        vN = normalize(mat3(modelMatrix) * normal);
        vec4 w = modelMatrix * vec4(position, 1.0);
        vec3 c = modelMatrix[3].xyz, r = normalize(c);            
        vR = r;
        w.xyz -= flatten * dot(w.xyz - c, r) * r;                  
        vW = w.xyz;
        gl_Position = projectionMatrix * viewMatrix * w;
      }`,fragmentShader:`
      uniform sampler2D map;
      uniform float useMap, brightness, soft, flash, flatten;
      uniform vec3 tint, sunColor, sunDir, earthshine, base;
      varying vec2 vUv;
      varying vec3 vN;
      varying vec3 vW;
      varying vec3 vR;
      void main() {
        vec3 N = normalize(vN), L = normalize(sunDir), V = normalize(cameraPosition - vW);
        
        if (flatten > 0.0 && dot(N, vR) > 0.0) discard;
        vec3 albedo = (useMap > 0.5 ? texture2D(map, vUv).rgb : vec3(0.85)) * tint;
        float mu0 = dot(N, L), mu = flatten > 0.0 ? max(abs(dot(N, V)), 1e-3) : max(dot(N, V), 1e-3);
        float lit = smoothstep(-soft * 0.2, soft * 0.2, mu0);                       
        float ls = 2.0 * max(mu0, 0.0) / (max(mu0, 0.0) + mu);                       
        vec3 c = albedo * (sunColor * brightness * mix(ls, 1.0, 0.35) * lit + earthshine) + base;
        gl_FragColor = vec4(c * (1.0 + flash), 1.0);
      }`});n.moonMap&&new H6().load(pf,$=>{$.colorSpace=ri,$.anisotropy=u.capabilities.getMaxAnisotropy(),wt.uniforms.map.value=$,wt.uniforms.useMap.value=1});const W=Math.max(8,Math.round(n.moonSegments)),it=new ke(new aa(n.moonRadius,W,W),wt);it.position.copy(p(ft.alt,ft.az).multiplyScalar(an*n.moonDistance));{const $=of(t,e);it.quaternion.setFromRotationMatrix(new Se().set($[0][0],$[0][1],$[0][2],0,$[1][0],$[1][1],$[1][2],0,$[2][0],$[2][1],$[2][2],0,0,0,0,1))}h.add(it);{const $=1-n.moonGlowPhase+n.moonGlowPhase*Q,_t=new dn({uniforms:{tint:{value:wn(n.moonGlowColor)},strength:{value:n.moonGlowStrength*$},falloff:{value:n.moonGlowFalloff},inner:{value:1/Math.max(1,n.moonGlowSize)},hollow:{value:0},flatten:{value:0}},vertexShader:`
        uniform float flatten;
        varying vec2 vUv;
        void main() {
          vUv = uv;
          vec4 mv = modelViewMatrix * vec4(0.0, 0.0, 0.0, 1.0);
          mv.xy += position.xy;                                       
          if (flatten > 0.0) {                                        
            vec3 c = modelMatrix[3].xyz, r = normalize(c);
            vec3 a = abs(r.y) < 0.99 ? vec3(0.0, 1.0, 0.0) : vec3(1.0, 0.0, 0.0);
            vec3 t1 = normalize(cross(a, r)), t2 = cross(r, t1);
            vec4 mvP = viewMatrix * vec4(c + position.x * t1 + position.y * t2, 1.0);
            mv = mix(mv, mvP, flatten);
          }
          gl_Position = projectionMatrix * mv;
        }`,fragmentShader:`
        uniform vec3 tint;
        uniform float strength, falloff, inner, hollow;
        varying vec2 vUv;
        void main() {
          float d = length(vUv - 0.5) * 2.0;
          if (d > 1.0 || (hollow > 0.5 && d < inner)) discard;
          float t = clamp((d - inner) / max(1.0 - inner, 1e-4), 0.0, 1.0);
          gl_FragColor = vec4(tint * strength * pow(1.0 - t, falloff), 1.0);
        }`,transparent:!0,blending:Ti,depthWrite:!1,side:Tn}),F=n.moonRadius*Math.max(1,n.moonGlowSize)*2,nt=new ke(new va(F,F),_t);nt.position.copy(p(ft.alt,ft.az).multiplyScalar(an*n.moonDistance+n.moonRadius*1.05)),nt.frustumCulled=!1,h.add(nt),U=nt}const St=new ke(new aa(n.moonRadius*n.moonHitScale,8,8),new hs({visible:!1}));St.position.copy(it.position),h.add(St);{const $=mo.altDeg.length,_t=[],F=p(-Math.PI/2,0).multiplyScalar(an);for(let I=0;I<$;I++){const ot=I*mo.stepDeg*Tt,T=(I+1)%$*mo.stepDeg*Tt,pt=p(cs(ot),ot).multiplyScalar(an),ct=p(cs(T),T).multiplyScalar(an);_t.push(pt.x,pt.y,pt.z,ct.x,ct.y,ct.z,F.x,F.y,F.z)}const nt=new Ke;nt.setAttribute("position",new be(new Float32Array(_t),3));const Ct=new ke(nt,new hs({color:n.ridgeColor,side:Tn,depthTest:!1,depthWrite:!1,transparent:!0,opacity:1}));Ct.renderOrder=100,Ct.frustumCulled=!1,h.add(Ct),E=Ct}return{renderer:u,scene:h,camera:f,R:an,dir:p,stars:M,planets:G,moonAA:ft,sunAA:st,moonPhase:Q,moonMesh:it,moonHit:St,curves:{equator:K,ecliptic:tt,white:Z,axis:X},ridgeAlt:cs,hidden:Ml,moonHidden:Ml(ft.alt,ft.az),layers:{dome:L,bgStars:R,navStars:C,planets:b,moonGlow:U,ridge:E},pointUniforms:g,setMoonFlash($){wt.uniforms.flash.value=$},setMoonFlatten($){wt.uniforms.flatten.value=Ce.clamp($,0,.999),wt.side=$>0?Tn:ui;const _t=U.material.uniforms;_t.hollow.value=$>0?1:0,_t.flatten.value=Ce.clamp($,0,1)},setNavEmphasis($,_t,F){if(w.uniforms.emph.value=$,w.uniforms.emphSel.value=_t,F===H)return;H=F;const nt=C.geometry.getAttribute("sel");nt.array.fill(0);const Ct=F==null?-1:A0.findIndex(I=>I.name===F);Ct>=0&&nt.setX(Ct,1),nt.needsUpdate=!0}}}const go=Math.PI/180;function bf(i){return new D((i>>16&255)/255,(i>>8&255)/255,(i&255)/255)}function Wi(i,t,e,n,r=!0,a){const s=r&&i.length>2&&i[0].distanceTo(i[i.length-1])<1e-6?i.slice(0,-1):i,o=a?new l2(s[0],s[s.length-1]):new o2(s,r),l=a?a.sphereR:s[0].length(),c=l*Math.tan(e.wirePx/2*(n.fov*go/window.innerHeight)),u=r||a?720:Math.min(720,Math.max(4,(s.length-1)*4)),h=8,f=new B0(o,u,c,h,r),p=new Float32Array((u+1)*(h+1)*3);for(let _=0;_<=u;_++){const L=o.getPointAt(r?_%u/u:_/u);for(let R=0;R<=h;R++)p.set([L.x,L.y,L.z],(_*(h+1)+R)*3)}f.setAttribute("wireCenter",new be(p,3));const g=new Float32Array((u+1)*(h+1)*3);for(let _=0;_<=u;_++){const L=o.getTangentAt(r?_%u/u:_/u);for(let R=0;R<=h;R++)g.set([L.x,L.y,L.z],(_*(h+1)+R)*3)}f.setAttribute("wireTangent",new be(g,3));const v=e.wireLightTilt*go,m=e.wireLightAz*go,d=new D(Math.sin(v)*Math.cos(m),Math.sin(v)*Math.sin(m),Math.cos(v)).normalize(),w=new dn({uniforms:{metal:{value:bf(t)},lightDir:{value:d},shine:{value:e.wireShine},spec:{value:e.wireSpec},diffuse:{value:e.wireDiffuse},ambient:{value:e.wireAmbient},specWhite:{value:e.wireSpecWhite},fade:{value:1},farWidth:{value:a?1:0},widthRef:{value:l}},vertexShader:`
      attribute vec3 wireTangent;
      attribute vec3 wireCenter;
      uniform float farWidth, widthRef;
      varying vec3 vT;
      varying vec3 vN;
      varying vec3 vV;
      void main() {
        vec3 p = position;
        if (farWidth > 0.5) {
          float d = length((modelViewMatrix * vec4(wireCenter, 1.0)).xyz);
          p = wireCenter + (position - wireCenter) * max(1.0, d / widthRef);
        }
        vec4 mv = modelViewMatrix * vec4(p, 1.0);
        vT = normalize((modelViewMatrix * vec4(wireTangent, 0.0)).xyz);
        vN = normalize(normalMatrix * normal);
        vV = normalize(-mv.xyz);
        gl_Position = projectionMatrix * mv;
      }`,fragmentShader:`
      uniform vec3 metal, lightDir;
      uniform float shine, spec, diffuse, ambient, specWhite, fade;
      varying vec3 vT;
      varying vec3 vN;
      varying vec3 vV;
      void main() {
        vec3 T = normalize(vT), N = normalize(vN), V = normalize(vV), L = normalize(lightDir);
        vec3 H = normalize(L + V);
        float th = dot(T, H);
        float ks = pow(sqrt(max(0.0, 1.0 - th * th)), shine);          
        float kd = max(0.0, dot(N, L)) * 0.6 + 0.4 * sqrt(max(0.0, 1.0 - pow(dot(T, L), 2.0)));
        vec3 c = metal * (ambient + diffuse * kd) + mix(metal, vec3(1.0), specWhite) * spec * ks;
        gl_FragColor = vec4(c, fade);
      }`}),S=new ke(f,w);return S.frustumCulled=!1,S}const Z0=`
      
      
      .tip{--metal:150,180,240;--ground:12,18,32;position:fixed;left:0;top:0;transform:translate(-50%,-140%);padding:3px 8px;border-radius:7px;
        border:1px solid transparent;
        background:
          linear-gradient(180deg,rgba(255,255,255,.14),rgba(255,255,255,0) 45%,rgba(0,0,0,.18)) padding-box,
          linear-gradient(rgba(var(--ground),.82),rgba(var(--ground),.82)) padding-box,
          linear-gradient(180deg,rgba(255,255,255,.85),rgba(var(--metal),.9) 35%,rgba(var(--metal),.45) 65%,rgba(var(--metal),.8)) border-box;
        box-shadow:inset 0 1px 0 rgba(255,255,255,.18),0 1px 3px rgba(0,0,0,.6);
        color:#eef3ff;font:clamp(.95rem,1vw,1.15rem)/1.1 var(--font);font-variant-numeric:lining-nums tabular-nums;letter-spacing:.04em;white-space:nowrap;pointer-events:none;text-shadow:0 0 4px rgba(0,0,0,.8)}
      .tip.fixed{--metal:255,224,160;--ground:30,24,10;color:#fff2d8}
      .tip.flash{box-shadow:inset 0 1px 0 rgba(255,255,255,.18),0 0 14px 4px rgba(255,236,190,.9)}
      
      .ticklabel{position:fixed;left:0;top:0;transform:translate(-50%,-50%);color:#aeb8d8;font:clamp(.95rem,1vw,1.15rem)/1 var(--font);font-variant-numeric:lining-nums tabular-nums;letter-spacing:.04em;pointer-events:none;text-shadow:0 0 4px rgba(0,0,0,.9)}
`,Jr={vertical:9417727,tickMajor:10467560,tickMinor:5464463,arc:16769187,arcTick:16764800};function Un(i,t){return Math.acos(Ce.clamp(i.dot(t),-1,1))/Tt}function qn(i,t,e){const n=Math.acos(Ce.clamp(i.dot(t),-1,1));if(n<1e-6)return i.clone();const r=Math.sin(n);return i.clone().multiplyScalar(Math.sin((1-e)*n)/r).add(t.clone().multiplyScalar(Math.sin(e*n)/r)).normalize()}function yi(i){const t=i<0,e=Math.abs(i);let n=Math.floor(e),r=(e-n)*60;return r>=59.95&&(r=0,n+=1),`${t?"-":""}${n}°${r.toFixed(1)}′`}function El(i,t,e=4){const n=i.length(),r=i.clone().normalize(),a=t.clone().normalize();return Array.from({length:e+1},(s,o)=>qn(r,a,o/e).multiplyScalar(n))}function k2(i){const{scene:t,camera:e,R:n,dir:r,style:a,tipsEl:s}=i,o=[],l=new Set;function c(m,d,w){const S=document.createElement("div");S.className=m,S.textContent=d,s.appendChild(S);const _={el:S,world:w.clone()};return o.push(_),_}function u(m){m.el.remove();const d=o.indexOf(m);d>=0&&o.splice(d,1)}function h(m){m.el.classList.add("flash");const d=window.setTimeout(()=>{m.el.classList.remove("flash"),l.delete(d)},600);l.add(d)}function f(m){var d;(d=m.parent)==null||d.remove(m),m.traverse(w=>{w instanceof ke&&(w.geometry.dispose(),w.material.dispose())})}function p(m,d,w){m.grp.add(Wi(d,w,a,e,!1)),m.lines.push({pts:d,color:w})}function g(m){const d={grp:new Gi,lines:[],labels:[]},w=[];for(let S=0;S<=90;S+=1)w.push(r(S*Tt,m).multiplyScalar(n));p(d,w,Jr.vertical);for(let S=0;S<=90;S+=5){const _=S%10===0,L=(_?1.6:.8)*Tt/Math.max(Math.cos(S*Tt),.25),R=r(S*Tt,m-L).multiplyScalar(n),b=r(S*Tt,m+L).multiplyScalar(n);p(d,El(R,b),_?Jr.tickMajor:Jr.tickMinor),_&&a.tickLabels&&d.labels.push(c("ticklabel",`${S}°`,r(S*Tt,m+L*2.2).multiplyScalar(n)))}return t.add(d.grp),d}function v(m,d,w,S=t){const _={grp:new Gi,lines:[]},L=Un(m,d),R=Math.max(2,Math.round(L)),b=[];for(let U=0;U<=R;U++)b.push(qn(m,d,U/R).multiplyScalar(n));if(p(_,b,Jr.arc),w){const U=new D(0,1,0);for(let E=10;E<L;E+=10){const M=E/L,C=qn(m,d,M),G=qn(m,d,Math.min(1,M+.01)).sub(C).normalize().clone().cross(U).normalize().multiplyScalar(.15*n*.02+.12);p(_,El(C.clone().multiplyScalar(n).add(G),C.clone().multiplyScalar(n).sub(G)),Jr.arcTick)}}return S.add(_.grp),_}return{labels:o,addLabel:c,removeLabel:u,flashLabel:h,verticalCircle:g,arc:v,disposeGroup:f,dispose(){for(const m of l)window.clearTimeout(m);l.clear()}}}function Rf(i,t={}){const e=t.latlon?`<div id="latlon">Lat ${t.latlon.lat.toFixed(4)}°<br>Lon ${t.latlon.lon.toFixed(4)}°</div>`:"";i.innerHTML=`<style>
      
      #date,#clock{position:fixed;top:env(safe-area-inset-top,10px);color:#dfe8ff;font:19px/1.8 var(--font);font-variant-numeric:lining-nums tabular-nums;letter-spacing:.04em;pointer-events:none;text-shadow:0 0 6px rgba(0,0,0,.9)}
      #date{left:calc(env(safe-area-inset-left,0px) + 12px)}
      #clock{right:calc(env(safe-area-inset-right,0px) + 12px)}
      
      #latlon{position:fixed;top:calc(env(safe-area-inset-top,10px) + 19px * 1.8);right:calc(env(safe-area-inset-right,0px) + 12px);color:#dfe8ff;font:19px/1.8 var(--font);font-variant-numeric:lining-nums tabular-nums;letter-spacing:.04em;text-align:right;pointer-events:none;text-shadow:0 0 6px rgba(0,0,0,.9)}
      
      #hud{position:fixed;left:calc(env(safe-area-inset-left,0px) + 12px);bottom:calc(env(safe-area-inset-bottom,0px) + 12px);color:#dfe8ff;font-family:var(--font);font-size:clamp(.95rem,1vw,1.15rem);line-height:1.5;font-variant-numeric:lining-nums tabular-nums;letter-spacing:.04em;white-space:pre;pointer-events:none;text-shadow:0 0 6px rgba(0,0,0,.9)}
      #buttons{position:fixed;right:8px;bottom:calc(env(safe-area-inset-bottom,0px) + 12px);display:flex;gap:8px}
      #buttons button{appearance:none;-webkit-appearance:none;background:transparent;color:#e8e8e8;border:1px solid #e8e8e8;border-radius:0;padding:.15rem 0.45rem .15rem calc(0.45rem + .3em);font:inherit;font-family:var(--font);font-size:clamp(.95rem,1vw,1.15rem);letter-spacing:.3em;cursor:pointer;transition:background-color .2s ease,color .2s ease}
      #buttons button:active{background:#e8e8e8;color:#000}   
      
      #line{position:fixed;left:0;right:0;bottom:calc(env(safe-area-inset-bottom,0px) + 12px + 3 * clamp(.95rem,1vw,1.15rem) + 10px);padding:0 1rem;text-align:center;color:#eef;font:500 clamp(1.05rem,4.5vw,1.5rem)/1.9 var(--font);letter-spacing:.04em;text-shadow:0 0 12px rgba(0,0,0,.9);opacity:0;transition:opacity 600ms ease;pointer-events:none;-webkit-user-select:none;user-select:none}
      #line.show{opacity:1}
      
      .peak{position:fixed;left:0;top:0;transform:translate(-50%,-100%);display:flex;flex-direction:column;align-items:center;color:#aeb8d8;font:clamp(.95rem,1vw,1.15rem)/1 var(--font);letter-spacing:.04em;white-space:nowrap;pointer-events:none;text-shadow:0 0 4px rgba(0,0,0,.9)}
      .peak::after{content:'';width:1px;height:8px;margin-top:4px;background:#aeb8d8;box-shadow:0 0 4px rgba(0,0,0,.9)}
      
${Z0}
      #overlay{position:fixed;inset:0;display:flex;align-items:center;justify-content:center;color:#fff;background:rgba(0,0,0,.6);font:20px var(--font)}
    </style><div id="date"></div><div id="clock"></div>`+e+'<div id="peaks"></div><div id="tips"></div><div id="hud"></div><div id="line">さて、今の月の高度はいくらかしらね？</div><div id="buttons"><button id="north">指北</button><button id="compass">羅針</button></div><div id="overlay">タップで開始</div>';const n=$i.lat,r=$i.lon,a=bs(),s=new URLSearchParams(location.search),o=s.get("t"),l=t.epoch??(o?new Date(o):new Date),c=performance.now(),u=t.now??(()=>new Date(l.getTime()+(performance.now()-c))),h={magLimit:6,starGamma:.3,sizeMin:1,sizeMax:6,brightMin:.7,haloMax:6,haloStrength:.8,haloFalloff:2.2,haloTint:11059455,planetCap:1.3,colorSaturation:.7,wirePx:1.8,wireShine:90,wireSpec:.6,wireDiffuse:.5,wireAmbient:.25,wireSpecWhite:.5,wireLightTilt:65,wireLightAz:120,eclipticMetal:13936714,equatorMetal:12086091,whitePathMetal:13226723,whiteK:4500,milkyStrength:.35,milkyWidth:12,milkyColor:9413576,milkyAnticenter:.3,milkyNoise:.6,milkyLane:.5,skyZenith:396823,skyMid:1187888,skyHorizon:5926796,skyGlowAlt:3,ridgeColor:1055008,moonRadius:.34,moonDistance:.95,moonSegments:48,moonHitScale:2.6,moonMap:1,moonColor:16777215,moonBrightness:1.8,moonTerminator:1.6,sunLightColor:16771256,earthshineColor:1713984,earthshineIntensity:.6,moonEmissive:658968,moonEmissiveIntensity:1,moonGlowSize:3.4,moonGlowStrength:.8,moonGlowFalloff:5,moonGlowColor:16769704,moonGlowPhase:.7,moonFlashGain:6,moonFlashDecay:.05,curves:1};for(const ht of Object.keys(h)){const Xt=s.get(ht)??"",ve=/^(#|0x)?[0-9a-f]{6}$/i.test(Xt)&&["skyZenith","skyMid","skyHorizon","ridgeColor","haloTint","milkyColor","eclipticMetal","equatorMetal","whitePathMetal","moonColor","moonEmissive","sunLightColor","earthshineColor","moonGlowColor"].includes(ht)?parseInt(Xt.replace(/^(#|0x)/i,""),16):parseFloat(Xt);Number.isNaN(ve)||(h[ht]=ve)}const f=K0(i,{epoch:l,observer:a,style:h}),{renderer:p,scene:g,camera:v,dir:m,moonHit:d,moonAA:w,sunAA:S,moonPhase:_}=f,L=f.stars,R=f.planets,b=[];function U(ht,Xt,ve,Ae=1){if(!h.curves)return;const De=new Ke().setFromPoints(Xt),xn=new O0({color:ve,transparent:Ae<1,opacity:Ae});g.add(new r2(De,xn)),b.push(ht)}function E(ht,Xt,ve){h.curves&&(g.add(Wi(Xt,ve,h,v)),b.push(ht))}E("equator",f.curves.equator,h.equatorMetal),E("ecliptic",f.curves.ecliptic,h.eclipticMetal),E("whitePath",f.curves.white,h.whitePathMetal),U("axis",f.curves.axis,5925466,.8);const M=i.querySelector("#peaks"),C=ns.map(ht=>{const Xt=document.createElement("div");return Xt.className="peak",Xt.textContent=ht.name,M.appendChild(Xt),{el:Xt,world:m(f.ridgeAlt(ht.az),ht.az)}}),H=new D,G=new D;function K(){v.getWorldDirection(G);for(const ht of C){H.copy(ht.world).project(v);const Xt=ht.world.dot(G)>0&&Math.abs(H.x)<1.2&&Math.abs(H.y)<1.2;ht.el.style.display=Xt?"":"none",Xt&&(ht.el.style.left=`${(H.x*.5+.5)*window.innerWidth}px`,ht.el.style.top=`${(-H.y*.5+.5)*window.innerHeight}px`)}}const tt=46,Z=i.querySelector("#tips");let at=null,X;function ft(ht,Xt){let ve=null,Ae=1/0;for(const De of[...L,...R]){if(f.hidden(De.alt,De.az))continue;const xn=m(De.alt,De.az);if(xn.dot(v.getWorldDirection(G))<=0)continue;H.copy(xn).project(v);const bn=Math.hypot((H.x*.5+.5)*window.innerWidth-ht,(-H.y*.5+.5)*window.innerHeight-Xt);bn<Ae&&(Ae=bn,ve=De)}return ve&&Ae<=tt?ve:null}function st(){X!==void 0&&clearTimeout(X),at==null||at.el.remove(),at=null}function Q(ht){st();const Xt=document.createElement("div");Xt.className="tip flash",Xt.textContent=ht.name,Z.appendChild(Xt),at={el:Xt,world:m(ht.alt,ht.az),name:ht.name},X=setTimeout(()=>Xt.classList.remove("flash"),600),Mt()}function Mt(){if(!at)return;const ht=at.world.dot(v.getWorldDirection(G))>0;at.el.style.display=ht?"":"none",ht&&(H.copy(at.world).project(v),at.el.style.left=`${(H.x*.5+.5)*window.innerWidth}px`,at.el.style.top=`${(-H.y*.5+.5)*window.innerHeight}px`)}function wt(ht){const Xt=[...L,...R].find(ve=>ve.name===ht);return!Xt||f.hidden(Xt.alt,Xt.az)?!1:(Q(Xt),!0)}let W=!1,it=0;function St(){if(it=1,W)return;W=!0;const ht=v.quaternion,Xt={quaternion:[ht.x,ht.y,ht.z,ht.w],fov:v.fov,azOffset:I};window.dispatchEvent(new CustomEvent("stargaze:moon-tap",{detail:Xt}))}const $=new D(0,0,1),_t=new zn,F=new ln,nt=new ln(-Math.SQRT1_2,0,0,Math.SQRT1_2),Ct=new ln;let I=0;const ot=new ln;function T(){return(window.orientation??(screen.orientation&&screen.orientation.angle)??0)*Tt}function pt(){const ht=new D(0,0,-1).applyQuaternion(Ct);return Math.atan2(ht.x,-ht.z)}let ct="none",At={alpha:NaN,beta:NaN,gamma:NaN,compass:NaN};function xt(ht){ht.alpha==null||ht.beta==null||ht.gamma==null||(At={alpha:ht.alpha,beta:ht.beta,gamma:ht.gamma,compass:ht.webkitCompassHeading??NaN},_t.set(ht.beta*Tt,ht.alpha*Tt,-ht.gamma*Tt,"YXZ"),Ct.setFromEuler(_t).multiply(nt).multiply(F.setFromAxisAngle($,-T())),ct!=="active"&&(ct="active",I=pt()),ot.setFromAxisAngle($e.DEFAULT_UP,I),v.quaternion.copy(ot).multiply(Ct))}let Vt=(parseFloat(s.get("alt")??"20")||0)*Tt,bt=(parseFloat(s.get("az")??"0")||0)*Tt;function A(){v.lookAt(m(Vt,bt))}A();const x=new u2;let B=null,et=null;function ut(ht,Xt){if(x.setFromCamera(new Zt(ht/window.innerWidth*2-1,-(Xt/window.innerHeight)*2+1),v),!f.moonHidden&&x.intersectObject(d).length>0){St();return}const ve=ft(ht,Xt);ve?Q(ve):st()}const J=ht=>{B=et={x:ht.clientX,y:ht.clientY}},Ht=ht=>{if(!et||ct==="active")return;const Xt=v.fov*Tt/window.innerHeight;bt-=(ht.clientX-et.x)*Xt,Vt=Ce.clamp(Vt+(ht.clientY-et.y)*Xt,-Math.PI/2+.01,Math.PI/2-.01),et={x:ht.clientX,y:ht.clientY},A()},Dt=ht=>{B&&Math.hypot(ht.clientX-B.x,ht.clientY-B.y)<10&&ut(ht.clientX,ht.clientY),B=et=null};p.domElement.addEventListener("pointerdown",J),window.addEventListener("pointermove",Ht),window.addEventListener("pointerup",Dt);const Ft=i.querySelector("#overlay");let oe;async function vt(){Ft.remove();const ht=window.DeviceOrientationEvent;if(!ht){ct="none";return}if(t.orientationGranted!==!0&&typeof ht.requestPermission=="function")try{if(await ht.requestPermission()!=="granted"){ct="denied";return}}catch{ct="denied";return}ct="waiting",window.addEventListener("deviceorientation",xt),oe=setTimeout(()=>{ct==="waiting"&&(ct="none")},1500)}s.has("az")||s.has("alt")?Ft.remove():t.orientationGranted===!0?vt():Ft.addEventListener("click",vt,{once:!0});const Nt=i.querySelector("#north"),Yt=i.querySelector("#compass"),Kt=()=>{ct==="active"?I=pt():(bt=0,A())},zt=()=>{ct==="active"&&!Number.isNaN(At.compass)&&(I=pt()-At.compass*Tt)};Nt.addEventListener("click",Kt),Yt.addEventListener("click",zt);const se=1e4,te=i.querySelector("#line"),me=setTimeout(()=>te.classList.add("show"),se),N=i.querySelector("#date"),Pt=i.querySelector("#clock"),j=new Intl.DateTimeFormat("en-GB",{timeZone:"Asia/Tokyo",hour12:!1,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit"});function lt(){const ht=u(),Xt={};for(const ve of j.formatToParts(ht))Xt[ve.type]=ve.value;N.textContent=`${Xt.year}.${Xt.month}.${Xt.day}`,Pt.textContent=`${Xt.hour}:${Xt.minute}:${Xt.second}`}const Rt=i.querySelector("#hud"),Et=new D;function jt(){v.getWorldDirection(Et);const ht=Math.asin(Ce.clamp(Et.y,-1,1))/Tt,Xt=(Math.atan2(Et.x,-Et.z)/Tt+360)%360,ve=Ae=>Number.isNaN(Ae)?"  --":Ae.toFixed(0).padStart(4);Rt.textContent=`View  Alt ${ht.toFixed(1).padStart(6)}  Az ${Xt.toFixed(1).padStart(6)}
α ${ve(At.alpha)}  β ${ve(At.beta)}  γ ${ve(At.gamma)}`}const le=ht=>+(ht/Tt).toFixed(3);window.__sky={state(){return{time:l.toISOString(),fixed:!!o,observer:{lat:n,lon:r},sun:{alt:le(S.alt),az:le(S.az)},moon:{alt:le(w.alt),az:le(w.az),phase:+_.toFixed(4),tapped:W,hidden:f.moonHidden},ridge:ht=>le(f.ridgeAlt(ht*Tt)),planets:R.map(ht=>({name:ht.name,alt:le(ht.alt),az:le(ht.az)})),stars:L.map(ht=>({name:ht.name,alt:le(ht.alt),az:le(ht.az)})),curves:b,starName:at?at.name:null,peaks:C.map((ht,Xt)=>({name:ns[Xt].name,alt:le(ns[Xt].alt),az:le(ns[Xt].az),shown:ht.el.style.display!=="none"}))}},tapMoon(){return St(),!0},showName(ht){return wt(ht)},hideName(){return st(),!0},look(ht,Xt){return ct==="active"?!1:(Vt=ht*Tt,bt=Xt*Tt,A(),!0)},screen(ht,Xt){const ve=m(ht*Tt,Xt*Tt),Ae=ve.dot(v.getWorldDirection(G))>0;return H.copy(ve).project(v),{x:(H.x*.5+.5)*window.innerWidth,y:(-H.y*.5+.5)*window.innerHeight,front:Ae}}};const ee=()=>{v.aspect=window.innerWidth/window.innerHeight,v.updateProjectionMatrix(),p.setSize(window.innerWidth,window.innerHeight)};window.addEventListener("resize",ee);let he=0;function We(){it>0&&(it=Math.max(0,it-h.moonFlashDecay),f.setMoonFlash(it*h.moonFlashGain)),p.render(g,v),K(),Mt(),lt(),jt(),he=requestAnimationFrame(We)}return We(),function(){cancelAnimationFrame(he),oe!==void 0&&clearTimeout(oe),clearTimeout(me),st(),window.removeEventListener("deviceorientation",xt),window.removeEventListener("pointermove",Ht),window.removeEventListener("pointerup",Dt),window.removeEventListener("resize",ee),p.domElement.removeEventListener("pointerdown",J),Ft.removeEventListener("click",vt),Nt.removeEventListener("click",Kt),Yt.removeEventListener("click",zt),p.dispose(),delete window.__sky}}const Cf={magLimit:6,starGamma:.3,sizeMin:1,sizeMax:6,brightMin:.7,haloMax:6,haloStrength:.8,haloFalloff:2.2,haloTint:11059455,planetCap:1.3,colorSaturation:.7,wirePx:1.8,wireShine:90,wireSpec:.6,wireDiffuse:.5,wireAmbient:.25,wireSpecWhite:.5,wireLightTilt:65,wireLightAz:120,eclipticMetal:13936714,equatorMetal:12086091,whitePathMetal:13226723,whiteK:4500,milkyStrength:.35,milkyWidth:12,milkyColor:9413576,milkyAnticenter:.3,milkyNoise:.6,milkyLane:.5,moonRadius:.34,moonDistance:.95,moonSegments:48,moonHitScale:2.6,moonMap:1,moonColor:16777215,moonBrightness:1.8,moonTerminator:1.6,sunLightColor:16771256,earthshineColor:1713984,earthshineIntensity:.6,moonEmissive:658968,moonEmissiveIntensity:1,moonGlowSize:3.4,moonGlowStrength:.8,moonGlowFalloff:5,moonGlowColor:16769704,moonGlowPhase:.7,moonFlashGain:6,moonFlashDecay:.05,skyZenith:396823,skyMid:1187888,skyHorizon:5926796,skyGlowAlt:3,ridgeColor:1055008,curves:1,pickPx:46,tickLabels:1,navTint:16765562,navTintMix:.85,navHaloAdd:2,navGlowAdd:.18,navFade:2e3},Pf=["skyZenith","skyMid","skyHorizon","ridgeColor","haloTint","milkyColor","eclipticMetal","equatorMetal","whitePathMetal","moonColor","moonEmissive","sunLightColor","earthshineColor","moonGlowColor","navTint"];function H2(i){const t={...Cf};for(const e of Object.keys(t)){const n=i.get(e)??"",r=/^(#|0x)?[0-9a-f]{6}$/i.test(n)&&Pf.includes(e)?parseInt(n.replace(/^(#|0x)/i,""),16):parseFloat(n);Number.isNaN(r)||(t[e]=r)}return t}function Lf(i,t={}){i.innerHTML=`<style>
      
      #date,#clock{position:fixed;top:env(safe-area-inset-top,10px);color:#dfe8ff;font:19px/1.8 var(--font);font-variant-numeric:lining-nums tabular-nums;letter-spacing:.04em;pointer-events:none;text-shadow:0 0 6px rgba(0,0,0,.9)}
      #date{left:calc(env(safe-area-inset-left,0px) + 12px)}
      #clock{right:calc(env(safe-area-inset-right,0px) + 12px)}
      
      #prompt{position:fixed;top:env(safe-area-inset-top,10px);left:0;right:0;text-align:center;color:#dfe8ff;font:19px/1.8 var(--font);letter-spacing:.04em;pointer-events:none;text-shadow:0 0 6px rgba(0,0,0,.9)}
${Z0}
      
      .tip.guide{animation:tip-guide 1.8s ease-in-out infinite}
      @keyframes tip-guide{
        0%,100%{box-shadow:inset 0 1px 0 rgba(255,255,255,.18),0 1px 3px rgba(0,0,0,.6)}
        50%{box-shadow:inset 0 1px 0 rgba(255,255,255,.18),0 0 10px 2px rgba(190,210,255,.55)}}
      
      #hud{position:fixed;left:calc(env(safe-area-inset-left,0px) + 12px);bottom:calc(env(safe-area-inset-bottom,0px) + 12px);color:#dfe8ff;font-family:var(--font);font-size:clamp(.95rem,1vw,1.15rem);line-height:1.5;font-variant-numeric:lining-nums tabular-nums;letter-spacing:.04em;white-space:pre;pointer-events:none;text-shadow:0 0 6px rgba(0,0,0,.9)}
      #buttons{position:fixed;right:8px;bottom:calc(env(safe-area-inset-bottom,0px) + 12px);display:flex;gap:8px}
      #buttons button{appearance:none;-webkit-appearance:none;background:transparent;color:#e8e8e8;border:1px solid #e8e8e8;border-radius:0;padding:.15rem 0.45rem .15rem calc(0.45rem + .3em);font:inherit;font-family:var(--font);font-size:clamp(.95rem,1vw,1.15rem);letter-spacing:.3em;cursor:pointer;transition:background-color .2s ease,color .2s ease}
      #buttons button:active{background:#e8e8e8;color:#000}   
      
      #line{position:fixed;left:0;right:0;bottom:calc(env(safe-area-inset-bottom,0px) + 12px + 3 * clamp(.95rem,1vw,1.15rem) + 10px);padding:0 1rem;text-align:center;color:#eef;font:500 clamp(1.05rem,4.5vw,1.5rem)/1.9 var(--font);letter-spacing:.04em;text-shadow:0 0 12px rgba(0,0,0,.9);opacity:0;transition:opacity 600ms ease;pointer-events:none;-webkit-user-select:none;user-select:none}
      #line.show{opacity:1}
      #overlay{position:fixed;inset:0;display:flex;align-items:center;justify-content:center;color:#fff;background:rgba(0,0,0,.6);font:20px var(--font)}
    </style>
      <div id="date"></div>
      <div id="clock"></div>
      <div id="prompt"></div>
      <div id="tips"></div>
      <div id="hud"></div>
      <div id="line"></div>
      <div id="buttons">
        <button id="north">指北</button>
        <button id="compass">羅針</button>
      </div>
      <div id="overlay">タップで開始</div>
    `;let e=0,n=0;const r=3*Tt,a=3,s=$i.lat,o=$i.lon,l=bs(),c=new URLSearchParams(location.search),u=c.get("t"),h=t.epoch??(u?new Date(u):new Date),f=performance.now(),p=t.now??(()=>new Date(h.getTime()+(performance.now()-f))),g=c.has("az")||c.has("alt"),v=H2(c),m=K0(i,{epoch:h,observer:l,style:v}),{renderer:d,scene:w,camera:S,R:_,dir:L,moonHit:R,moonAA:b}=m,U=m.stars,E=L(b.alt,b.az);function M(k,dt,$t=1){if(!v.curves)return;const pe=new Ke().setFromPoints(k);w.add(new r2(pe,new O0({color:dt,transparent:$t<1,opacity:$t})))}v.curves&&(w.add(Wi(m.curves.equator,v.equatorMetal,v,S)),w.add(Wi(m.curves.ecliptic,v.eclipticMetal,v,S)),w.add(Wi(m.curves.white,v.whitePathMetal,v,S))),M(m.curves.axis,5925466,.8);let C=0;const H=k2({scene:w,camera:S,R:_,dir:L,style:v,tipsEl:i.querySelector("#tips")}),{labels:G,addLabel:K,removeLabel:tt,flashLabel:Z}=H,at=new D,X=new D;function ft(k){S.getWorldDirection(X);const dt=at.copy(k).dot(X)>0;return at.copy(k).project(S),{x:(at.x*.5+.5)*window.innerWidth,y:(-at.y*.5+.5)*window.innerHeight,front:dt}}let st=null;const Q=[];let Mt=0,wt=null;function W(){st&&(H.disposeGroup(st.grp),st.labels.forEach(tt),st=null)}function it(){st&&Q.push(st),st=null}function St(){for(const k of Q)H.disposeGroup(k.grp),k.labels.forEach(tt);Q.length=0}function $(){wt&&(H.disposeGroup(wt.grp),wt=null)}function _t(k){W(),Mt=k,st=H.verticalCircle(k)}function F(k,dt,$t){$(),wt=H.arc(k,dt,$t)}let nt="moon-await",Ct=null,I=null,ot=!1;const T={moonAlt:NaN,starAlt:NaN,lunarDist:NaN};let pt=null;function ct(k,dt){pt||(pt=K("tip",dt,k)),pt.world.copy(k),pt.el.textContent=dt}function At(){Ht(),pt&&(tt(pt),pt=null)}const xt={maxDeg:15,fovFrac:.25,minDeg:5,ridgeMarginDeg:2,topDeg:88,nudgeDeg:1.5,periodMs:1800};let Vt=null;function bt(k){const dt=Ce.clamp(Math.min(xt.maxDeg,S.fov*xt.fovFrac),xt.minDeg,xt.maxDeg)*Tt,$t=k-dt;return $t>=m.ridgeAlt(Mt)+xt.ridgeMarginDeg*Tt?$t:Math.min(k+dt,xt.topDeg*Tt)}function A(k,dt){ct(k.at(0).multiplyScalar(_),dt),pt.el.classList.add("guide"),Vt={...k,t0:performance.now()}}function x(k){const dt=bt(k),$t=Math.sign(k-dt),pe=Mt;A({at:je=>L(dt+$t*je,pe),kind:"alt",value:dt/Tt},yi(dt/Tt))}const B={delayMs:3e3,maxDeg:8,fovFrac:1/6,minDeg:3,moonMarginDeg:6};let et=0;function ut(){window.clearTimeout(et),et=0}function J(){if(nt!=="lunar-await"||!I)return;const k=Un(I,E),dt=Math.min(Ce.clamp(Math.min(B.maxDeg,S.fov*B.fovFrac),B.minDeg,B.maxDeg),k-B.moonMarginDeg);if(dt<=0)return;const $t=I.clone();F($t,qn($t,E,dt/k),!1),A({at:pe=>qn($t,E,(dt+pe/Tt)/k),kind:"lunar",value:dt},yi(dt))}function Ht(){Vt=null,pt==null||pt.el.classList.remove("guide")}function Dt(k){if(!Vt||!pt)return;const dt=(k-Vt.t0)%xt.periodMs/xt.periodMs,$t=dt<.5?Math.sin(Math.PI*dt*2)*xt.nudgeDeg*Tt:0;pt.world.copy(Vt.at($t)).multiplyScalar(_)}function Ft(k,dt){if(!Vt||!pt)return!1;const $t=pt.el.getBoundingClientRect();return k>=$t.left-8&&k<=$t.right+8&&dt>=$t.top-8&&dt<=$t.bottom+8}const oe={"moon-await":"月をタップ"},vt=i.querySelector("#prompt");function Nt(){vt.textContent=nt==="moon-await"&&m.moonHidden?"月は山の陰に隠れている":oe[nt]??""}const Yt=1e4,Kt=i.querySelector("#line");let zt=0;const se={star:"今日の明るい星も見つけておかないとね",lunar:"月までの距離は、っと？"};function te(k){window.clearTimeout(zt),zt=window.setTimeout(()=>{Kt.textContent=k,Kt.classList.add("show")},Yt)}function me(){window.clearTimeout(zt),Kt.classList.remove("show")}function N(){return nt!=="moon-await"||m.moonHidden?!1:(_t(b.az),nt="moon-trace",Nt(),O(),x(b.alt),!0)}function Pt(k){if(nt!=="star-await")return!1;const dt=U.find($t=>$t.name===k);return!dt||m.hidden(dt.alt,dt.az)?!1:(Ct=dt,I=L(dt.alt,dt.az),me(),_t(dt.az),nt="star-trace",Nt(),x(dt.alt),!0)}function j(k){const dt=Ce.clamp(Math.asin(Ce.clamp(k.y,-1,1)),0,Math.PI/2);ct(L(dt,Mt).multiplyScalar(_),yi(dt/Tt));const $t=nt==="moon-trace"?b.alt:Ct.alt;Math.abs(dt-$t)<r&&lt()}function lt(){const k=nt==="moon-trace",dt=k?b.alt:Ct.alt,$t=k?"Moon":Ct.name,pe=K("tip fixed",`${$t} h ${yi(dt/Tt)}`,L(dt,Mt).multiplyScalar(_));Z(pe),k?(T.moonAlt=dt/Tt,C=1,nt="star-await",te(se.star)):(T.starAlt=dt/Tt,nt="lunar-await",te(se.lunar),ut(),et=window.setTimeout(J,B.delayMs)),At(),it(),Nt()}function Rt(k){F(I,k,!1),ct(k.clone().multiplyScalar(_),yi(Un(I,k))),Un(k,E)<a&&ee()}const Et={holdMs:2500,flashAtMs:[0,1250]};let jt=[];function le(){jt.forEach(k=>window.clearTimeout(k)),jt=[]}function ee(){if(nt!=="lunar-await"&&nt!=="lunar-trace")return NaN;const k=Un(I,E);F(I,E,!0);const dt=qn(I,E,.5).multiplyScalar(_),$t=K("tip fixed",`Lunar Distance ${yi(k)}`,dt);T.lunarDist=k,At(),nt="done",ot=!0,Nt(),le();for(const pe of Et.flashAtMs)jt.push(window.setTimeout(()=>Z($t),pe));return jt.push(window.setTimeout(()=>{jt=[],window.dispatchEvent(new CustomEvent("lunar-distance:done",{detail:{moonAlt:T.moonAlt,star:{name:Ct.name,alt:T.starAlt},lunarDistance:k,view:Y()}}))},Et.holdMs)),k}function he(){le(),ut(),W(),St(),$(),At(),G.filter(k=>k.el.classList.contains("fixed")).forEach(tt),Ct=null,I=null,ot=!1,T.moonAlt=T.starAlt=T.lunarDist=NaN,me(),nt="moon-await",Nt(),O()}const We=new D(0,0,1),ht=new zn,Xt=new ln,ve=new ln(-Math.SQRT1_2,0,0,Math.SQRT1_2),Ae=new ln;let De=0,xn=!1,bn=null;const Bn=new ln;function Ri(){return(window.orientation??(screen.orientation&&screen.orientation.angle)??0)*Tt}function mn(){const k=new D(0,0,-1).applyQuaternion(Ae);return Math.atan2(k.x,-k.z)}let Le="none",Rn={alpha:NaN,beta:NaN,gamma:NaN,compass:NaN};function fi(k){k.alpha==null||k.beta==null||k.gamma==null||(Rn={alpha:k.alpha,beta:k.beta,gamma:k.gamma,compass:k.webkitCompassHeading??NaN},Le!=="active"&&(Le="active"),ht.set(k.beta*Tt,k.alpha*Tt,-k.gamma*Tt,"YXZ"),Ae.setFromEuler(ht).multiply(ve).multiply(Xt.setFromAxisAngle(We,-Ri())),xn||(xn=!0,De=bn===null?mn():mn()-bn),Bn.setFromAxisAngle($e.DEFAULT_UP,De),S.quaternion.copy(Bn).multiply(Ae))}let kn=(parseFloat(c.get("alt")??"20")||0)*Tt,Mn=(parseFloat(c.get("az")??"0")||0)*Tt;function y(){S.lookAt(L(kn,Mn))}function O(){if(t.moonTap||nt!=="moon-await"&&nt!=="moon-trace")return;const k=E;S.fov=55,S.updateProjectionMatrix(),!g&&Le!=="active"&&(kn=Math.asin(Ce.clamp(k.y,-1,1)),Mn=Math.atan2(k.x,-k.z),y())}if(t.moonTap){const[k,dt,$t,pe]=t.moonTap.quaternion;S.quaternion.set(k,dt,$t,pe),S.fov=t.moonTap.fov,S.updateProjectionMatrix(),De=t.moonTap.azOffset;const je=new D;S.getWorldDirection(je),kn=Math.asin(Ce.clamp(je.y,-1,1)),Mn=Math.atan2(je.x,-je.z),bn=Mn}else y();function Y(){const k=S.quaternion;return{quaternion:[k.x,k.y,k.z,k.w],fov:S.fov,azOffset:De}}const q=new u2;let z=null,mt=null,Lt=!1,kt=null;function Gt(k,dt){return q.setFromCamera(new Zt(k/window.innerWidth*2-1,-(dt/window.innerHeight)*2+1),S),q.ray.direction.clone().normalize()}function Qt(k,dt){return q.setFromCamera(new Zt(k/window.innerWidth*2-1,-(dt/window.innerHeight)*2+1),S),q.intersectObject(R).length>0}function re(k,dt){let $t=null,pe=1/0;for(const je of U){if(m.hidden(je.alt,je.az))continue;const kr=ft(L(je.alt,je.az).multiplyScalar(_));if(!kr.front)continue;const Ji=Math.hypot(kr.x-k,kr.y-dt);Ji<pe&&(pe=Ji,$t=je)}return $t&&pe<=v.pickPx?$t:null}function Wt(k,dt,$t){const pe=ft($t);return pe.front&&Math.hypot(pe.x-k,pe.y-dt)<=v.pickPx}function ue(k,dt){const $t=Gt(k,dt),pe=$t.x*Math.sin(Mt)-$t.z*Math.cos(Mt),je=Ce.clamp(Math.atan2($t.y,pe),0,Math.PI/2);return Wt(k,dt,L(je,Mt).multiplyScalar(_))}function ye(k,dt){return I&&Wt(k,dt,I.clone().multiplyScalar(_))||Ft(k,dt)?!0:nt==="lunar-trace"&&!!pt&&Wt(k,dt,pt.world)}function xe(k,dt){nt==="moon-trace"||nt==="star-trace"?j(Gt(k,dt)):nt==="lunar-trace"&&Rt(Gt(k,dt))}function Be(k){z=mt={x:k.clientX,y:k.clientY},Lt=!1,kt="view",(nt==="moon-trace"||nt==="star-trace")&&(ue(k.clientX,k.clientY)||Ft(k.clientX,k.clientY))?(Ht(),kt="trace"):(nt==="lunar-await"||nt==="lunar-trace")&&ye(k.clientX,k.clientY)&&(nt==="lunar-await"&&(nt="lunar-trace",me(),ut(),Nt()),Ht(),kt="trace"),kt==="trace"&&xe(k.clientX,k.clientY)}function ge(k){if(mt){if(Math.hypot(k.clientX-z.x,k.clientY-z.y)>6&&(Lt=!0),kt==="trace")xe(k.clientX,k.clientY);else if(kt==="view"&&Le!=="active"){const dt=S.fov*Tt/window.innerHeight;Mn-=(k.clientX-mt.x)*dt,kn=Ce.clamp(kn+(k.clientY-mt.y)*dt,-Math.PI/2+.01,Math.PI/2-.01),y()}mt={x:k.clientX,y:k.clientY}}}function qt(k){if(z&&!Lt){if(nt==="moon-await"&&Qt(k.clientX,k.clientY))N();else if(nt==="star-await"){const dt=re(k.clientX,k.clientY);dt&&Pt(dt.name)}}kt=null,z=mt=null}d.domElement.addEventListener("pointerdown",Be),window.addEventListener("pointermove",ge),window.addEventListener("pointerup",qt);const Ze=i.querySelector("#overlay");async function fe(){Ze.remove();const k=window.DeviceOrientationEvent;if(!k){Le="none";return}if(typeof k.requestPermission=="function")try{if(await k.requestPermission()!=="granted"){Le="denied";return}}catch{Le="denied";return}Le="waiting",window.addEventListener("deviceorientation",fi),n=window.setTimeout(()=>{Le==="waiting"&&(Le="none")},1500)}t.orientationGranted===!0?(Ze.remove(),window.DeviceOrientationEvent?(Le="waiting",window.addEventListener("deviceorientation",fi),n=window.setTimeout(()=>{Le==="waiting"&&(Le="none")},1500)):Le="none"):g?Ze.remove():Ze.addEventListener("click",fe,{once:!0});const Je=i.querySelector("#north"),Sn=i.querySelector("#compass");function Xe(){Le==="active"?De=mn():(Mn=0,y())}function Hn(){Le==="active"&&!Number.isNaN(Rn.compass)&&(De=mn()-Rn.compass*Tt)}Je.addEventListener("click",Xe),Sn.addEventListener("click",Hn);const Ee=i.querySelector("#date"),qe=i.querySelector("#clock"),Yn=new Intl.DateTimeFormat("en-GB",{timeZone:"Asia/Tokyo",hour12:!1,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit"});function tn(){const k=p(),dt={};for(const $t of Yn.formatToParts(k))dt[$t.type]=$t.value;Ee.textContent=`${dt.year}.${dt.month}.${dt.day}`,qe.textContent=`${dt.hour}:${dt.minute}:${dt.second}`}const yn=i.querySelector("#hud"),en=new D;function $n(){S.getWorldDirection(en);const k=Math.asin(Ce.clamp(en.y,-1,1))/Tt,dt=(Math.atan2(en.x,-en.z)/Tt+360)%360,$t=pe=>Number.isNaN(pe)?"  --":pe.toFixed(0).padStart(4);yn.textContent=`View  Alt ${k.toFixed(1).padStart(6)}  Az ${dt.toFixed(1).padStart(6)}
α ${$t(Rn.alpha)}  β ${$t(Rn.beta)}  γ ${$t(Rn.gamma)}`}const Cn=k=>+(k/Tt).toFixed(4),Fr=k=>Number.isNaN(k)?null:+k.toFixed(4);window.__measure={state(){return{time:h.toISOString(),fixed:!!u,observer:{lat:s,lon:o},step:nt,star:Ct?Ct.name:null,starPos:Ct?{alt:Cn(Ct.alt),az:Cn(Ct.az)}:null,moon:{alt:Cn(b.alt),az:Cn(b.az)},vcAz:Cn(Mt),measured:{moonAlt:Fr(T.moonAlt),starAlt:Fr(T.starAlt),lunarDist:Fr(T.lunarDist)},truth:{moonAlt:Cn(b.alt),starAlt:Ct?Cn(Ct.alt):null,lunarDist:Ct?+Un(L(Ct.alt,Ct.az),E).toFixed(4):null},done:ot,tip:pt?{text:pt.el.textContent,guide:Vt?Vt.kind:null,value:Vt?+Vt.value.toFixed(4):null}:null}},stars(){return U.filter(k=>!m.hidden(k.alt,k.az)).map(k=>({name:k.name,alt:Cn(k.alt),az:Cn(k.az),sep:+Un(L(k.alt,k.az),E).toFixed(2)}))},start(){return N()},look(k,dt){return Le==="active"?!1:(kn=k*Tt,Mn=dt*Tt,y(),!0)},probe(k){if(nt!=="moon-trace"&&nt!=="star-trace")return null;const dt=Ce.clamp(k,0,90);return Ht(),ct(L(dt*Tt,Mt).multiplyScalar(_),yi(dt)),{alt:dt,label:yi(dt)}},fix(){if(nt!=="moon-trace"&&nt!=="star-trace")return null;const k=nt==="moon-trace";return lt(),k?T.moonAlt:T.starAlt},selectStar(k){return Pt(k)},fixLunar(){return ee()},screen(k,dt){return ft(L(k*Tt,dt*Tt).multiplyScalar(_))},reset(){return he(),!0}};function _a(){S.aspect=window.innerWidth/window.innerHeight,S.updateProjectionMatrix(),d.setSize(window.innerWidth,window.innerHeight)}window.addEventListener("resize",_a),Nt(),O(),t.moonTap&&N();let Or=0,pi=0,zr=performance.now();function xa(k,dt,$t){const pe=$t/Math.max(1,v.navFade);return k<dt?Math.min(dt,k+pe):Math.max(dt,k-pe)}function Br(){const k=performance.now(),dt=k-zr;zr=k,Or=xa(Or,nt==="star-await"?1:0,dt),pi=xa(pi,Ct?1:0,dt),m.setNavEmphasis(Or,pi,Ct?Ct.name:null),C>0&&(C=Math.max(0,C-v.moonFlashDecay),m.setMoonFlash(C*v.moonFlashGain)),Dt(k),kt==="trace"&&mt&&xe(mt.x,mt.y),d.render(w,S);for(const $t of G){const pe=ft($t.world);pe.front?($t.el.style.display="",$t.el.style.left=`${pe.x}px`,$t.el.style.top=`${pe.y}px`):$t.el.style.display="none"}tn(),$n(),e=requestAnimationFrame(Br)}return Br(),function(){cancelAnimationFrame(e),window.clearTimeout(n),window.clearTimeout(zt),le(),ut(),H.dispose(),window.removeEventListener("deviceorientation",fi),window.removeEventListener("pointermove",ge),window.removeEventListener("pointerup",qt),window.removeEventListener("resize",_a),d.domElement.removeEventListener("pointerdown",Be),Je.removeEventListener("click",Xe),Sn.removeEventListener("click",Hn),Ze.removeEventListener("click",fe),d.dispose(),delete window.__measure}}function Df(i,t={}){var e1;i.innerHTML=`<style>
${Z0}
      
      #stage{position:fixed;inset:0;pointer-events:none;opacity:0;transition:opacity .4s linear}

      
      #table{position:fixed;left:50%;top:50%;transform:translate(-50%,-50%);will-change:transform;
        opacity:.34;color:#dbe8ff;font:11px/1.35 var(--font);font-variant-numeric:lining-nums tabular-nums;letter-spacing:.02em;
        text-shadow:0 0 6px rgba(0,0,0,.95)}
      #table table{border-collapse:collapse}
      #table caption{font:12px/1.4 var(--font);letter-spacing:.14em;padding-bottom:4px;white-space:nowrap}
      #table th,#table td{padding:1px 10px;text-align:right;white-space:nowrap;border-bottom:1px solid rgba(170,200,245,.4)}
      #table th{font-weight:400;color:#bcd0f2}
      #table td:first-child,#table th:first-child{text-align:left;color:#bcd0f2}

      
      #formulas .f{position:fixed;left:0;top:0;transform-origin:center;will-change:transform,opacity;
        color:#eaf0ff;font:18px/1 var(--font);white-space:nowrap;text-shadow:0 0 10px rgba(120,160,255,.5)}
      #formulas .f img{display:block;max-width:none;filter:drop-shadow(0 0 4px rgba(120,160,255,.55)) drop-shadow(0 0 10px rgba(120,160,255,.35))}

      
      
      #dial{position:fixed;left:0;right:0;bottom:calc(env(safe-area-inset-bottom,0px) + 12vh);
        display:flex;flex-direction:column;align-items:center;gap:10px;pointer-events:none;opacity:0}
      .coord{display:flex;align-items:center;gap:14px;color:#f3f7ff;text-shadow:0 0 14px rgba(120,160,255,.6)}
      .coord .lbl{width:5.6em;text-align:right;font:16px/1 var(--font);letter-spacing:.06em;color:#aebfe6}
      
      .reels{display:inline-flex;align-items:center;font:400 clamp(28px,8vw,56px)/1 var(--font);font-variant-numeric:lining-nums tabular-nums}
      .reels .sep{padding:0 .02em;opacity:.9}
      
      .reel{display:inline-block;width:.62em;height:calc(1em * 3);overflow:hidden;position:relative;vertical-align:middle;
        --dim:linear-gradient(transparent,rgba(0,0,0,.18) 12%,rgba(0,0,0,.18) 30%,#000 35%,#000 65%,rgba(0,0,0,.18) 70%,rgba(0,0,0,.18) 88%,transparent);
        -webkit-mask-image:var(--dim);mask-image:var(--dim)}
      .reel .inner{position:absolute;left:0;top:0;width:100%;will-change:transform}
      .reel .cell{display:block;height:1em;line-height:1em;text-align:center}
      .reel .cell.near{opacity:.28}
      .reel.locked{color:#fff}

      
      #black{position:fixed;inset:0;background:#000;opacity:0;pointer-events:none}

      
      #hud,#skip{display:none}
      #hud{position:fixed;left:8px;top:env(safe-area-inset-top,8px);color:#9cf;font:11px/1.4 monospace;white-space:pre;pointer-events:none;opacity:.8}
      #skip{position:fixed;right:calc(env(safe-area-inset-right,0px) + 12px);bottom:calc(env(safe-area-inset-bottom,0px) + 12px);
        color:#bcd;font:12px var(--font);opacity:.5;pointer-events:none}
    </style>
      <div id="tips"></div>
      <div id="stage">
        <div id="table"></div>
        <div id="formulas"></div>
      </div>
      <div id="black"></div>
      <div id="dial">
        <div class="coord"><span class="lbl">Latitude</span><span class="reels" id="latReels"></span></div>
        <div class="coord"><span class="lbl">Longitude</span><span class="reels" id="lonReels"></span></div>
      </div>
      <div id="hud"></div>
      <div id="skip">ダブルタップでスキップ</div>
    `;const e=55,n=60,r=35.012949,a=135.780958,s=r.toFixed(6),o=a.toFixed(6),l=new URLSearchParams(location.search),c={turnStart:1,hold:5,tilt:1,T:18,rMax:35,turns:1.5,period:60,attenuation:1,hold2:1,Tproj:5,projection:1,longAxis:0,poleU:.5,poleV:.25,roll:0,poleMotion:0,poleR:.1,polePeriod:20,rollRate:4,center:1,rollEase:2,latMax:85,dipNear:10,dipPeak:.7,dipFrom:0,dipTo:1},u={domeFadeR:12,swap:.3,moonPx:9,moonGlare:4,dotPx:1.6,dotStepDeg:.25,labelEdge:.2,starMaxScale:6,starMinPx:1.5,spikeIn:.6,spikeLen:8,spikeWidthPx:.8,spikeStrength:.6,spikeMinU:.3,spikeAngleDeg:0,axisLength:2e3},h={tableFill:1,tableOpacity:.18,handPx:.3},f={dialStart:1.5,perDigit:.55,settle:.8,hold:5,black:1.5,dialHold:1,dialFade:1,spin:3.2},p=["hold","from","t"];function g(P){for(const V of Object.keys(P).filter(rt=>!p.includes(rt))){const rt=parseFloat(l.get(V)??"");Number.isNaN(rt)||(P[V]=rt)}}g(c),g(u),g(f),g(h);const v=2*Math.PI/c.period,m=c.hold+c.tilt+c.T,d=m+c.hold2+c.Tproj;function w(P){return P=Ce.clamp(P,0,1),P*P*(3-2*P)}function S(P){return new de().setRGB((P>>16&255)/255,(P>>8&255)/255,(P&255)/255,Ki)}const _=t.epoch??new Date,L=bs(),R=H2(l),b=K0(i,{epoch:_,observer:L,style:R}),{renderer:U,scene:E,camera:M,R:C,dir:H,moonAA:G}=b,K=H($i.lat*Tt,0),tt=H(G.alt,G.az),Z=(e1=t.lunar)==null?void 0:e1.view;if(Z){const[P,V,rt,gt]=Z.quaternion;M.quaternion.set(P,V,rt,gt),M.fov=Z.fov}else M.lookAt(tt),M.fov=e;M.updateProjectionMatrix();const at=M.quaternion.clone(),X=M.fov,ft=(()=>{const P=new D;return M.getWorldDirection(P),Math.atan2(P.x,-P.z)})(),st=new ln().setFromRotationMatrix(new Se().lookAt(new D,H(0,ft),M.up)),Q=b.stars.filter(P=>!b.hidden(P.alt,P.az)),Mt=Q.find(P=>{var V;return P.name===((V=t.lunar)==null?void 0:V.star)})??Q.reduce((P,V)=>Un(H(P.alt,P.az),tt)<=Un(H(V.alt,V.az),tt)?P:V),wt=H(Mt.alt,Mt.az);b.setNavEmphasis(0,1,Mt.name);const W=new Gi;E.add(W);for(const P of[b.layers.bgStars,b.layers.navStars,b.layers.planets,b.moonMesh,b.layers.moonGlow,b.moonHit])W.attach(P);const it=b.moonMesh.position.clone(),St=b.layers.moonGlow.position.clone(),$=[],_t=[];if(R.curves)for(const[P,V]of[[b.curves.equator,R.equatorMetal],[b.curves.ecliptic,R.eclipticMetal],[b.curves.white,R.whitePathMetal]]){const rt=Wi(P,V,R,M);W.add(rt),$.push(rt),_t.push({pts:P,color:V,closed:!0})}const F=5925466,nt=[];if(R.curves){const P=u.axisLength,V=Wi([K.clone().multiplyScalar(-P),K.clone().multiplyScalar(P)],F,R,M,!1,{sphereR:C});E.add(V),nt.push(V)}const Ct=k2({scene:E,camera:M,R:C,dir:H,style:R,tipsEl:i.querySelector("#tips")}),I=Ct.verticalCircle(G.az),ot=Ct.verticalCircle(Mt.az);Ct.addLabel("tip fixed",`Moon h ${ue(G.alt/Tt)}`,tt.clone().multiplyScalar(C)),Ct.addLabel("tip fixed",`${Mt.name} h ${ue(Mt.alt/Tt)}`,wt.clone().multiplyScalar(C));const T=[];for(const P of[I,ot])P.grp.traverse(V=>{V instanceof ke&&T.push(V)});const pt=Un(wt,tt),ct=Ct.arc(wt,tt,!0,W),At=[];ct.grp.traverse(P=>{P instanceof ke&&At.push(P)});const xt=qn(wt,tt,.5).multiplyScalar(C),Vt=Ct.addLabel("tip fixed",`Lunar Distance ${ue(pt)}`,xt);Ct.flashLabel(Vt);for(const P of[...$,...T,...At,...nt]){const V=P.material;V.transparent=!0,V.needsUpdate=!0}function bt(P,V){for(const rt of P)rt.material.uniforms.fade.value=V,rt.visible=V>0}function A(){return c.longAxis===1?!0:c.longAxis===2?!1:window.innerWidth>=window.innerHeight}function x(){return Math.log(Math.tan(Math.PI/4+c.latMax*Tt/2))}function B(P,V){const rt=(gt,yt,It)=>Math.min(It,Math.max(yt,gt));switch(P=rt(P,-1,1),V=rt(V,-1,1),Math.round(c.projection)){case 1:return{lon:P*Math.PI,lat:Math.asin(V)};case 2:return{lon:P*Math.PI,lat:2*Math.atan(Math.exp(V*x()))-Math.PI/2};case 3:{let gt=P*P+V*V;if(gt>1){const ie=1/Math.sqrt(gt);P*=ie,V*=ie}const yt=2*Math.SQRT2*P,It=Math.SQRT2*V,ne=Math.sqrt(Math.max(0,1-(yt/4)**2-(It/2)**2));return{lon:2*Math.atan2(ne*yt,2*(2*ne*ne-1)),lat:Math.asin(rt(ne*It,-1,1))}}case 4:{const gt=V*(Math.PI/2),yt=Math.max(Math.cos(gt),1e-6);let It=P*Math.PI/yt;return Math.abs(It)>Math.PI&&(It=Math.sign(It)*Math.PI),{lon:It,lat:gt}}default:return{lon:P*Math.PI,lat:V*(Math.PI/2)}}}function et(P){const V=Math.asin(Ce.clamp(P.y,-1,1)),rt=Math.atan2(P.x,-P.z);switch(Math.round(c.projection)){case 1:return{x:rt/Math.PI,y:Math.sin(V)};case 2:{const gt=Ce.clamp(V,-c.latMax*Tt,c.latMax*Tt);return{x:rt/Math.PI,y:Math.log(Math.tan(Math.PI/4+gt/2))/x()}}case 3:{const gt=Math.sqrt(1+Math.cos(V)*Math.cos(rt/2));return{x:Math.cos(V)*Math.sin(rt/2)/gt,y:Math.sin(V)/gt}}case 4:return{x:rt*Math.cos(V)/Math.PI,y:V/(Math.PI/2)};default:return{x:rt/Math.PI,y:V/(Math.PI/2)}}}function ut(P,V){return new D(Math.cos(V)*Math.sin(P),Math.sin(V),-Math.cos(V)*Math.cos(P))}const J={mixAmount:{value:0},mapFrame:{value:new ae},projection:{value:c.projection},lonHorizontal:{value:1},mercK:{value:x()},latMax:{value:c.latMax*Tt},refDist:{value:C}},Ht=`
        uniform float mixAmount; uniform mat3 mapFrame; uniform float projection; uniform float lonHorizontal;
        uniform float mercK; uniform float latMax;
        const float PI = 3.141592653589793;
        float vFadeM;
        vec2 project(vec3 d) {
          float la = asin(clamp(d.y, -1.0, 1.0));
          float lo = atan(d.x, -d.z);
          vFadeM = 0.0;
          int p = int(projection + 0.5);
          if (p == 1) return vec2(lo / PI, sin(la));
          if (p == 2) {
            if (abs(la) > latMax) vFadeM = 1.0;
            float lc = clamp(la, -latMax, latMax);
            return vec2(lo / PI, log(tan(PI / 4.0 + lc / 2.0)) / mercK);
          }
          if (p == 3) {
            float den = sqrt(1.0 + cos(la) * cos(lo / 2.0));
            return vec2(cos(la) * sin(lo / 2.0) / den, sin(la) / den);
          }
          if (p == 4) return vec2(lo * cos(la) / PI, la / (PI / 2.0));
          return vec2(lo / PI, la / (PI / 2.0));
        }
        
        vec4 mixPosition(vec4 mv, vec3 pos) {
          vec4 clip = projectionMatrix * mv;
          if (mixAmount <= 0.0) return clip;
          vec4 world = modelMatrix * vec4(pos, 1.0);
          vec2 ndcP = clip.w > 0.0 ? clip.xy / clip.w : vec2(1e4);
          vec2 xy = project(mapFrame * normalize(world.xyz));
          vec2 ndcM = lonHorizontal > 0.5 ? xy : vec2(-xy.y, xy.x);
          return vec4(mix(ndcP, ndcM, mixAmount), 0.0, 1.0);
        }`;{const P=new Set([b.layers.bgStars,b.layers.navStars,b.layers.planets].map(V=>V.material));for(const V of P)Object.assign(V.uniforms,{mixAmount:J.mixAmount,mapFrame:J.mapFrame,projection:J.projection,lonHorizontal:J.lonHorizontal,mercK:J.mercK,latMax:J.latMax}),V.vertexShader=V.vertexShader.replace("void main() {",Ht+`
      void main() {`).replace("gl_Position = projectionMatrix * mv;","gl_Position = mixPosition(mv, position);"),V.needsUpdate=!0}function Dt(P){return new dn({uniforms:{...J,pixelRatio:{value:U.getPixelRatio()},glareRadius:{value:Math.max(1,P.glareRadius)},glareStrength:{value:P.glareStrength},glareFalloff:{value:P.glareFalloff},attenuation:{value:P.attenuation},opacity:{value:0}},vertexShader:`
        attribute float size;
        uniform float pixelRatio; uniform float glareRadius; uniform float refDist; uniform float attenuation;
        varying vec3 vColor; varying float vCore; varying float vPx; varying float vFade;
        ${Ht}
        void main() {
          vColor = color;
          vec4 mv = modelViewMatrix * vec4(position, 1.0);
          gl_Position = mixPosition(mv, position);
          vFade = vFadeM;
          float scale = mix(pow(refDist / max(length(mv.xyz), 1e-3), attenuation), 1.0, mixAmount);
          gl_PointSize = size * glareRadius * pixelRatio * scale;
          vCore = 1.0 / glareRadius;
          vPx = 2.0 / gl_PointSize;
        }`,fragmentShader:`
        uniform float glareStrength; uniform float glareFalloff; uniform float mixAmount; uniform float opacity;
        varying vec3 vColor; varying float vCore; varying float vPx; varying float vFade;
        void main() {
          float d = length(gl_PointCoord - 0.5) * 2.0;
          float core = 1.0 - smoothstep(vCore - vPx, vCore, d);
          float t = clamp((d - vCore) / max(1.0 - vCore, 1e-4), 0.0, 1.0);
          float glare = glareStrength * pow(1.0 - t, glareFalloff);
          float a = max(core, glare) * (1.0 - mixAmount * vFade) * opacity;
          if (d > 1.0) discard;
          gl_FragColor = vec4(vColor * a, a);
        }`,vertexColors:!0,transparent:!0,blending:Ti,depthWrite:!1,depthTest:!1})}function Ft(P,V,rt,gt){const yt=new Ke;yt.setAttribute("position",new be(new Float32Array(P),3)),yt.setAttribute("size",new be(new Float32Array(V),1)),yt.setAttribute("color",new be(new Float32Array(rt),3));const It=new a2(yt,gt);return It.frustumCulled=!1,It}const oe=Dt({glareRadius:u.moonGlare,glareStrength:.6,glareFalloff:2,attenuation:c.attenuation});{const P=tt.clone().multiplyScalar(C),V=S(R.moonGlowColor);W.add(Ft([P.x,P.y,P.z],[u.moonPx],[V.r,V.g,V.b],oe))}const vt=Dt({glareRadius:1,glareStrength:0,glareFalloff:1,attenuation:c.attenuation});{const P=[],V=[],rt=[],gt=[..._t,...ct.lines.map(yt=>({...yt,closed:!1}))];for(const{pts:yt,color:It,closed:ne}of gt){const ie=S(It),Me=yt.length-(ne&&yt[0].distanceTo(yt[yt.length-1])<1e-6?1:0),Ie=ne?Me:Me-1;for(let Ue=0;Ue<Ie;Ue++){const Gn=yt[Ue].clone().normalize(),Pn=yt[(Ue+1)%Me].clone().normalize(),Sa=Math.max(1,Math.ceil(Un(Gn,Pn)/u.dotStepDeg));for(let Hr=0;Hr<Sa;Hr++){const ji=qn(Gn,Pn,Hr/Sa).multiplyScalar(C);P.push(ji.x,ji.y,ji.z),V.push(u.dotPx),rt.push(ie.r,ie.g,ie.b)}}}W.add(Ft(P,V,rt,vt))}const Nt=(()=>{const rt=[],gt=[];for(let ie=0;ie<=360;ie++){const Me=ie%360*Tt*1,Ie=b.ridgeAlt(Me);for(let Ue=0;Ue<=24;Ue++){const Gn=Ie+(-Math.PI/2-Ie)*(Ue/24),Pn=H(Gn,Me).multiplyScalar(C);rt.push(Pn.x,Pn.y,Pn.z)}}for(let ie=0;ie<360;ie++)for(let Me=0;Me<24;Me++){const Ie=ie*25+Me,Ue=(ie+1)*25+Me;gt.push(Ie,Ue,Ie+1,Ue,Ue+1,Ie+1)}const yt=new Ke;yt.setAttribute("position",new be(new Float32Array(rt),3)),yt.setIndex(gt);const It=b.layers.ridge,ne=new ke(yt,It.material);return ne.renderOrder=It.renderOrder,ne.frustumCulled=!1,It.visible=!1,E.add(ne),ne})(),Yt=c.hold+c.tilt,Kt=c.rMax>C?Yt+(.5-Math.sin(Math.asin(1-2*(C/c.rMax))/3))*c.T:m;function zt(P){return 1-w((P-Yt)/Math.max(.001,Kt-Yt))}b.pointUniforms.minCorePx.value=u.starMinPx,b.pointUniforms.maxScale.value=u.starMaxScale,b.pointUniforms.spikeLen.value=u.spikeLen,b.pointUniforms.spikeWidthPx.value=u.spikeWidthPx,b.pointUniforms.spikeStrength.value=u.spikeStrength,b.pointUniforms.spikeMinU.value=u.spikeMinU,b.pointUniforms.spikeAngle.value=u.spikeAngleDeg*Tt,M.far=Math.max(M.far,u.axisLength+c.rMax+C),M.updateProjectionMatrix();const se=b.layers.dome.material,te=se.uniforms.toGal.value.clone(),me=new ae;let N=0,Pt=performance.now(),j=!1,lt=null;function Rt(){if(j)return N;const P=N+(performance.now()-Pt)/1e3;return lt!=null&&P>=lt?(N=lt,j=!0,lt=null,N):P}function Et(P){N=P,Pt=performance.now()}function jt(P){P>Rt()&&Et(P)}function le(P=null){Pt=performance.now(),j=!1,lt=P}const ee={phase:"静止",s:0,r:0,theta:0,m:0};function he(P){Math.abs(M.fov-P)>1e-6&&(M.fov=P,M.updateProjectionMatrix())}function We(P){const V=Math.min(c.turnStart,c.hold+c.tilt);if(P<V){ee.phase="静止",ee.s=0,ee.r=0,ee.theta=NaN,M.position.set(0,0,0),M.quaternion.copy(at),he(X);return}const rt=P-c.hold;if(rt<c.tilt){ee.phase="出発",ee.s=0,ee.r=0;const It=w((P-V)/Math.max(.001,c.hold+c.tilt-V));M.position.set(0,0,0),M.quaternion.slerpQuaternions(at,st,It),he(X+(n-X)*It);return}he(n);const gt=Ce.clamp((rt-c.tilt)/c.T,0,1),yt=w(gt);ee.phase=gt<1?"移動":"固定",ee.s=yt,ee.r=c.rMax*yt-ht(P),ee.theta=ft+Math.PI+2*Math.PI*c.turns*yt,M.position.copy(H(0,ee.theta)).multiplyScalar(ee.r),ee.r>1e-6?M.lookAt(0,0,0):M.quaternion.copy(st)}function ht(P){const rt=((P-(m+c.hold2))/Math.max(.001,c.Tproj)-c.dipFrom)/Math.max(.001,c.dipTo-c.dipFrom);if(rt<=0||rt>=1)return 0;const gt=Ce.clamp(c.dipPeak,.05,.95),yt=rt<gt?.5*rt/gt:.5+.5*(rt-gt)/(1-gt);return Math.max(0,c.rMax-c.dipNear)*Math.sin(Math.PI*yt)**2}function Xt(P){if(P<c.hold)return 0;const V=P-c.hold;if(c.tilt<=0)return v*V;if(V<c.tilt){const rt=V/c.tilt;return v*c.tilt*(rt**3-rt**4/2)}return v*(c.tilt/2+(V-c.tilt))}const ve=new Se;function Ae(P){W.quaternion.setFromAxisAngle(K,-Xt(P)),ve.makeRotationFromQuaternion(W.quaternion),me.setFromMatrix4(ve).transpose(),se.uniforms.toGal.value.copy(te).multiply(me);const V=1-w(ee.r/Math.max(.001,u.domeFadeR));se.uniforms.fade.value=V,b.layers.dome.visible=V>0;const rt=P<c.hold?1:c.tilt<=0?0:1-w((P-c.hold)/c.tilt);bt(T,rt),De=rt}let De=1;function xn(){return{u:c.poleU,v:c.poleV}}function bn(P){return(c.roll+c.rollRate*P)*Tt}const Bn=new ln,Ri=new ln,mn=new Se;function Le(P){const V=P<m+c.hold2?0:w((P-m-c.hold2)/c.Tproj);ee.m=V,V>0&&(ee.phase=V<1?"推移":"図"),J.mixAmount.value=V,b.pointUniforms.attenuation.value=c.attenuation*(1-V);const rt=Math.max(C,M.position.length());b.pointUniforms.refDist.value=rt,J.refDist.value=rt,bt(nt,1-V);for(const tc of nt)tc.material.uniforms.widthRef.value=Math.max(C,M.position.length());const gt=w(V/Math.max(.001,u.swap));bt([...$,...At],1-gt);const yt=1-gt;b.moonMesh.scale.setScalar(Math.max(yt,.001)),b.moonMesh.visible=yt>0,b.layers.moonGlow.scale.setScalar(Math.max(yt,.001)),b.layers.moonGlow.visible=yt>0,oe.uniforms.opacity.value=gt,vt.uniforms.opacity.value=gt;const It=w((P-Kt)/Math.max(.001,u.spikeIn))*(1-gt);b.pointUniforms.spike.value=It,b.pointUniforms.soft.value=It;const ne=zt(P)*(1-gt),ie=1-zt(P);b.setMoonFlatten(ie),b.moonMesh.position.copy(it).setLength(Ce.lerp(it.length(),C,ie)),b.layers.moonGlow.position.copy(St).setLength(Ce.lerp(St.length(),C,ie)),b.layers.ridge.material.opacity=ne,Nt.visible=ne>0;const Me=A();J.lonHorizontal.value=Me?1:0,J.projection.value=c.projection,J.mercK.value=x(),J.latMax.value=c.latMax*Tt;const{u:Ie,v:Ue}=xn(),Gn=2*Ie-1,Pn=1-2*Ue,Sa=Me?Gn:Pn,Hr=Me?Pn:-Gn,{lon:ji,lat:n1}=B(Sa,Hr);c.center===1?q(P,Me,ji,n1):(Bn.setFromUnitVectors(K,ut(ji,n1)),Ri.setFromAxisAngle(K,bn(P)),mn.makeRotationFromQuaternion(Bn.multiply(Ri))),J.mapFrame.value.setFromMatrix4(mn)}const Rn=new D,fi=new D,kn=new D,Mn=new Se,y=new Se,O=new Se,Y=qn(wt,tt,.5);function q(P,V,rt,gt){const yt=Rn.copy(Y).applyQuaternion(W.quaternion).normalize(),It=kn.copy(tt).applyQuaternion(W.quaternion).sub(fi.copy(wt).applyQuaternion(W.quaternion));It.addScaledVector(yt,-It.dot(yt)),It.lengthSq()<1e-12&&It.set(1,0,0).addScaledVector(yt,-yt.x),It.normalize();const ne=fi.crossVectors(It,yt),ie=ut(rt,gt),Me=V?new D(-Math.sin(gt)*Math.sin(rt),Math.cos(gt),Math.sin(gt)*Math.cos(rt)):new D(Math.cos(rt),0,Math.sin(rt)),Ie=new D().crossVectors(ie,Me);y.makeBasis(Ie,Me,ie),Mn.makeBasis(It,ne,yt).transpose(),O.makeRotationAxis(yt,z(P)),mn.multiplyMatrices(y,Mn).multiply(O)}function z(P){const V=Math.max(.001,c.rollEase),rt=d-V,gt=yt=>{if(yt<=rt)return yt;const It=Math.min(1,(yt-rt)/V);return rt+V*(It-It**3+It**4/2)};return(c.roll+c.rollRate*(gt(P)-gt(d)))*Tt}const mt=new D,Lt=new D,kt=new D,Gt=new D;function Qt(){const P=window.innerWidth,V=window.innerHeight,rt=ee.m;M.getWorldDirection(Gt);for(const gt of Ct.labels){const yt=gt===Vt;mt.copy(gt.world),yt&&mt.applyQuaternion(W.quaternion);let It;ee.r<C?It=Lt.copy(mt).sub(M.position).dot(Gt)>0?1:0:It=w(Lt.copy(mt).normalize().dot(kt.copy(M.position).normalize())/Math.max(.001,u.labelEdge)),It=It+(1-It)*rt,yt||(It*=De),Lt.copy(mt).project(M);let ne=Lt.x,ie=Lt.y;if(rt>0){const Me=et(kt.copy(mt).normalize().applyMatrix3(J.mapFrame.value)),Ie=J.lonHorizontal.value>.5?Me:{x:-Me.y,y:Me.x};ne=ne+(Ie.x-ne)*rt,ie=ie+(Ie.y-ie)*rt}if(It<=.001){gt.el.style.display="none";continue}gt.el.style.display="",gt.el.style.opacity=It.toFixed(3),gt.el.style.left=`${(ne*.5+.5)*P}px`,gt.el.style.top=`${(-ie*.5+.5)*V}px`}}function re(P){if(P.kind==="image"){const rt=document.createElement("img");return rt.alt=P.alt,rt.onload=()=>{rt.style.width=`${rt.naturalWidth*P.scale}px`},rt.src=P.src,rt}const V=document.createElement("span");return V.textContent=P.text,V}function Wt(P){const V=document.createElement("table"),rt=document.createElement("caption");rt.textContent=P.title,V.appendChild(rt);const gt=document.createElement("thead"),yt=document.createElement("tr");for(const ne of["GMT",...P.cols]){const ie=document.createElement("th");ie.textContent=ne,yt.appendChild(ie)}gt.appendChild(yt),V.appendChild(gt);const It=document.createElement("tbody");for(const ne of P.rows){const ie=document.createElement("tr"),Me=document.createElement("td");Me.textContent=ne.time,ie.appendChild(Me);for(const Ie of ne.cells){const Ue=document.createElement("td");Ue.textContent=Ie,ie.appendChild(Ue)}It.appendChild(ie)}return V.appendChild(It),V}function ue(P){const V=Math.floor(P),rt=(P-V)*60;return`${V}°${rt.toFixed(1).padStart(4,"0")}′`}const ye=[[{x:.08,y:.18},{x:.42,y:.1},{x:.78,y:.16}],[{x:.88,y:.3},{x:.8,y:.55},{x:.9,y:.8}],[{x:.82,y:.9},{x:.45,y:.94},{x:.12,y:.88}],[{x:.1,y:.78},{x:.06,y:.55},{x:.12,y:.3}],[{x:.2,y:.4},{x:.35,y:.3},{x:.22,y:.62}],[{x:.8,y:.42},{x:.66,y:.3},{x:.78,y:.66}],[{x:.15,y:.32},{x:.5,y:.36},{x:.85,y:.3}]],xe=[[{x:.32,y:.45},{x:.5,y:.42},{x:.68,y:.46}],[{x:.68,y:.44},{x:.5,y:.47},{x:.32,y:.43}],[{x:.4,y:.42},{x:.6,y:.46},{x:.45,y:.44}]],Be={first:.5,step:2.8,on:2.6,cycle:8.4},ge=h.handPx/l0;let qt=0,Ze=0;const fe=c0.map((P,V)=>{const rt=P.image?{kind:"image",src:P.image,scale:ge*P.scale,alt:P.text}:{kind:"text",text:P.text};if(P.kind==="figure"){const yt=qt++,{first:It,step:ne,on:ie,cycle:Me}=Be;return{id:"f"+V,source:rt,path:xe[yt%xe.length],scale:[.7,1.25],appear:It+yt*ne,loop:20+yt*2,blink:[ie,Me-ie]}}const gt=Ze++;return{id:"f"+V,source:rt,path:ye[gt%ye.length],scale:[.7,1.25],appear:gt*.5,loop:16+gt*2,blink:[6,2.5]}});function Je(P){const V=A0.find(rt=>rt.name===P);if(!V)throw new Error(`航海星 ${P} が無い`);return{ra:V.ra,dec:V.dec}}const Sn=[{label:"☉Sun",target:{body:"Sun"}},{label:"♀Venus",target:{body:"Venus"}},{label:"♂Mars",target:{body:"Mars"}},{label:"♃Jupiter",target:{body:"Jupiter"}},{label:"αTau",target:Je("Aldebaran")},{label:"αLeo",target:Je("Regulus")}];function Xe(){const P=Date.UTC(_.getUTCFullYear(),_.getUTCMonth(),_.getUTCDate()),V=[];for(let rt=0;rt<=21;rt+=3){const gt=new Date(P+rt*36e5);V.push({time:`${String(rt).padStart(2,"0")}ʰ`,cells:Sn.map(yt=>ue(uf(gt,yt.target)))})}return{kind:"synthetic",title:`LUNAR DISTANCES — ${Hn(_)} (GMT)`,cols:Sn.map(rt=>rt.label),rows:V}}function Hn(P){const V=["Jan.","Feb.","Mar.","Apr.","May","June","July","Aug.","Sept.","Oct.","Nov.","Dec."];return`${P.getUTCFullYear()} ${V[P.getUTCMonth()]} ${P.getUTCDate()}`}const Ee=i.querySelector("#stage"),qe=i.querySelector("#table"),Yn=i.querySelector("#formulas"),tn=i.querySelector("#latReels"),yn=i.querySelector("#lonReels"),en=i.querySelector("#black"),$n=i.querySelector("#dial"),Cn=Array.from($n.querySelectorAll(".coord")),Fr=i.querySelector("#hud");let _a=Xe();qe.appendChild(Wt(_a)),qe.style.opacity=String(h.tableOpacity);const Or=fe.map(P=>{const V=document.createElement("div");return V.className="f",V.id=P.id,V.appendChild(re(P.source)),Yn.appendChild(V),V}),pi=[];function zr(P,V){for(const rt of V){if(rt<"0"||rt>"9"){const It=document.createElement("span");It.className="sep",It.textContent=rt,P.appendChild(It);continue}const gt=document.createElement("span");gt.className="reel";const yt=document.createElement("span");yt.className="inner";for(let It=0;It<30;It++){const ne=document.createElement("span");ne.className="cell",ne.textContent=String(It%10),yt.appendChild(ne)}gt.appendChild(yt),P.appendChild(gt),pi.push({inner:yt,reel:gt,target:rt.charCodeAt(0)-48,lockIndex:pi.length})}}zr(tn,s),zr(yn,o);const xa=pi.length-1;function Br(P){return f.dialStart+P*f.perDigit}const k=Br(xa),dt=k+f.hold,$t=dt+f.black+f.dialHold,pe=$t+f.dialFade,je=d+k+.4;function kr(P,V){const rt=Br(P.lockIndex);if(V>=rt)return{val:P.target,locked:!0};const gt=Ie=>Ie*f.spin+P.lockIndex*2.3,yt=rt-f.settle;if(V<yt)return{val:gt(V),locked:!1};const It=gt(yt);let ne=Math.ceil((It-P.target)/10)*10+P.target;ne<It&&(ne+=10);const ie=ne+10;return{val:It+(ie-It)*w((V-yt)/f.settle),locked:!1}}let Ji=s.replace(/\d/g,"0"),Rs=o.replace(/\d/g,"0");function G2(P){const V=[];for(const yt of pi){const{val:It,locked:ne}=kr(yt,P),ie=(It%10+10)%10;yt.inner.style.transform=`translateY(${-(9+ie)}em)`,yt.reel.classList.toggle("locked",ne),V.push(Math.floor(ie+1e-6)%10)}let rt=0;const gt=yt=>yt.replace(/\d/g,()=>String(V[rt++]));Ji=gt(s),Rs=gt(o)}function V2(P,V){const rt=P.length-1,gt=Ce.clamp(V,0,1)*rt,yt=Math.min(rt-1,Math.floor(gt)),It=gt-yt;return{x:P[yt].x+(P[yt+1].x-P[yt].x)*It,y:P[yt].y+(P[yt+1].y-P[yt].y)*It}}function W2(P){const V=P.getBoundingClientRect(),rt=gt=>V.left<gt.right&&gt.left<V.right&&V.top<gt.bottom&&gt.top<V.bottom;if(parseFloat($n.style.opacity||"0")>0){for(const gt of Cn)if(rt(gt.getBoundingClientRect()))return!0}return rt(Vt.el.getBoundingClientRect())}function X2(P){const V=window.innerWidth,rt=window.innerHeight;fe.forEach((gt,yt)=>{const It=Or[yt];if(P<gt.appear){It.style.opacity="0";return}const ne=P-gt.appear,ie=ne/gt.loop%1,Me=V2(gt.path,ie),Ie=gt.scale[0]+(gt.scale[1]-gt.scale[0])*(.5-.5*Math.cos(2*Math.PI*ie)),[Ue,Gn]=gt.blink,Pn=Ue+Gn<=0?!0:ne%(Ue+Gn)<Ue;It.style.transform=`translate(${Me.x*V}px, ${Me.y*rt}px) translate(-50%, -50%) scale(${Ie.toFixed(3)})`,It.style.opacity=Pn&&!W2(It)?"0.5":"0"})}const Cs=8,q2=.05,J0=.045;function Y2(){const P=qe.offsetWidth,V=qe.offsetHeight;if(!P||!V)return 1;const rt=window.innerHeight*(1-2*J0),gt=window.innerWidth,yt=Math.cos(Cs*Tt),It=Math.sin(Cs*Tt),ne=rt/(P*It+V*yt);return(ne*P*yt>gt?Math.max(ne,(rt-gt*It)/(V*yt)):ne)*h.tableFill}function $2(P){const V=Math.sin(P*.13)*q2*window.innerWidth,rt=Math.cos(P*.1)*J0*window.innerHeight;qe.style.transform=`translate(calc(-50% + ${V.toFixed(1)}px), calc(-50% + ${rt.toFixed(1)}px)) rotate(-${Cs}deg) scale(${Y2().toFixed(4)})`}let Ma=!1;function K2(){Ma||(Ma=!0,window.dispatchEvent(new CustomEvent("longitude:done",{detail:{lat:r,lon:a}})))}function Z2(P){const V=P>=d;if(Ee.style.opacity=V?"1":"0",!V){en.style.opacity="0",$n.style.opacity="0";return}const rt=P-d,gt=Math.min(1,rt/.4),yt=1-w((rt-$t)/Math.max(.001,f.dialFade));$n.style.opacity=String(gt*yt),$2(rt),X2(rt),G2(rt);const It=rt<=dt?0:w((rt-dt)/f.black);en.style.opacity=String(It),rt>=pe&&K2()}function j0(){const P=Rt();return P<m?"camera":P<d?"projection":P-d<dt?"compute":"end"}const Ps={camera:0,projection:m,compute:d,end:d+dt};function Q0(P){if(P==null)return 0;if(P in Ps)return Ps[P];const V=parseFloat(P);return Number.isFinite(V)&&V>=0?V:0}{const P=t.hold!=null?Q0(t.hold):null,V=t.from!=null?Q0(t.from):null;V!=null&&P!=null&&V<P?(Et(V),le(P)):P!=null?(Et(P),j=!0):Et(V??0)}function J2(){const P=Rt(),V=[m,d,d+dt,d+pe];for(const rt of V)if(rt>P+1e-6)return rt;return d+pe}const j2=d2(()=>{const P=Rt();P>=c.hold&&P<je&&jt(je)});window.__longitude={state(){return{phase:j0(),projectionActive:J.mixAmount.value>0,dial:{latTarget:s,lonTarget:o,latNow:Ji,lonNow:Rs,locked:Rt()-d>=k},overlays:{formulaCount:fe.length,tableVisible:Rt()>=d},carry:{epoch:_.toISOString(),star:Mt.name,fromLunar:!!t.lunar,view:!!Z,lunarDist:+pt.toFixed(4),spinDeg:+(Xt(Rt())/Tt).toFixed(3),camR:+ee.r.toFixed(3),m:+ee.m.toFixed(3),fov:+M.fov.toFixed(2),tAxis:Yt,tCross:+Kt.toFixed(3),ground:+b.layers.ridge.material.opacity.toFixed(3),spike:+b.pointUniforms.spike.value.toFixed(3)},done:Ma}},next(){Et(J2())},seek(P){Et(Ps[P]??0)},seekTime(P){Et(P)},play(P){le(P??null)},pause(){Et(Rt()),j=!0},finish(){Et(d+pe+.05)}};function Q2(P){Fr.textContent=`t ${P.toFixed(1)}s  phase ${j0()}  cam ${ee.phase}  m ${ee.m.toFixed(2)}
lat ${Ji}  lon ${Rs}  done ${Ma}`}const t1=()=>{M.aspect=window.innerWidth/window.innerHeight,M.updateProjectionMatrix(),U.setSize(window.innerWidth,window.innerHeight)};return window.addEventListener("resize",t1),U.setAnimationLoop(()=>{const P=Rt();We(P),Ae(P),Le(P),Z2(P),U.render(E,M),Qt(),Q2(P)}),function(){U.setAnimationLoop(null),j2(),window.removeEventListener("resize",t1),Ct.dispose(),U.dispose(),delete window.__longitude}}const If=new Date("2036-11-09T02:25:00+09:00");function Uf(i,t){if(i&&!/^\d+(\.\d+)?$/.test(i)){const e=new Date(i);if(!Number.isNaN(e.getTime()))return e}return new Date(If)}const vo={"boot-check":ic,"boot-effect":ld,stargaze:Rf,"lunar-distance":Lf,longitude:Df},wl=1500,Nf="所定の時空間点に到着。さあメリー、倶楽部活動の開始よ！",ti={fadeIn:700,hold1:400,reveal:700,lineFade:600,lineHold:3600,afterLine:600};function Ff(i){var st;const t=new URLSearchParams(location.search),e=Uf(t.get("t")),n=e.getTime(),r=performance.now(),a=()=>new Date(n+(performance.now()-r)),s=null,o=t.get("hold")??void 0,l=t.get("from")??void 0,c=typeof((st=window.DeviceOrientationEvent)==null?void 0:st.requestPermission)=="function";let u=!c,h,f=null,p=!1;const g=[];let v=null;function m(){for(const Q of g)window.clearTimeout(Q);g.length=0}function d(){if(f){try{f.dispose()}catch(Q){console.error("dispose failed for",f.name,Q)}f.host.remove(),f=null}}function w(Q,Mt){const wt=document.createElement("div");wt.className="screen",wt.dataset.screen=Q,i.appendChild(wt);const W=vo[Q](wt,{...Mt,hold:o,from:l});f={name:Q,dispose:W,host:wt}}function S(Q,Mt={}){m(),R(),d(),w(Q,Mt)}function _(Q){return{epoch:e,now:a,orientationGranted:u,...Q}}function L(){if(v)return v;const Q=document.createElement("div");return Q.id="shell-overlay",Q.innerHTML=`
      <style>
        #shell-overlay { position: fixed; inset: 0; z-index: 50; pointer-events: none;
          background: #000; opacity: 0; transition: opacity var(--fade, 700ms) ease; }
        #shell-overlay.black { opacity: 1; }
        #shell-overlay.dim { opacity: 0.55; }
        #shell-overlay .line { position: absolute; inset: 0; display: flex;
          align-items: center; justify-content: center; padding: 2rem;
          color: #eef; text-align: center; opacity: 0;
          transition: opacity var(--linefade, 600ms) ease;
          font: 500 clamp(1.05rem, 4.5vw, 1.5rem)/1.9 var(--font);
          letter-spacing: 0.04em; text-shadow: 0 0 12px rgba(0,0,0,0.9); }
        #shell-overlay .line.show { opacity: 1; }
      </style>
      <div class="line"></div>`,i.appendChild(Q),v=Q,Q}function R(){v&&(v.remove(),v=null)}function b(Q,Mt){if(p)return;p=!0,h={lat:Q,lon:Mt};const wt=L(),W=wt.querySelector(".line");W.textContent=Nf,wt.style.setProperty("--fade",`${ti.fadeIn}ms`),wt.style.setProperty("--linefade",`${ti.lineFade}ms`);const it=[];let St=0;it.push([St,()=>wt.classList.add("black")]),St+=ti.fadeIn+ti.hold1,it.push([St,()=>{d(),w("stargaze",_({latlon:h}))}]),it.push([St+50,()=>{wt.style.setProperty("--fade",`${ti.reveal}ms`),wt.classList.add("dim"),wt.classList.remove("black"),W.classList.add("show")}]),St+=50+Math.max(ti.reveal,ti.lineFade)+ti.lineHold,it.push([St,()=>{W.classList.remove("show"),wt.classList.remove("dim")}]),St+=ti.afterLine,it.push([St,()=>{R(),p=!1}]);for(const[$,_t]of it)g.push(window.setTimeout(_t,$))}const U=()=>{(f==null?void 0:f.name)==="boot-check"&&S("boot-effect")},E=()=>{(f==null?void 0:f.name)==="boot-effect"&&(S("stargaze",_()),M())};function M(){const Q=L();Q.style.background="#fff",Q.style.transition="none",Q.style.opacity="1",requestAnimationFrame(()=>requestAnimationFrame(()=>{v===Q&&(Q.style.transition=`opacity ${wl}ms ease-in-out`,Q.style.opacity="0",g.push(window.setTimeout(()=>{v===Q&&R()},wl)))}))}const C=Q=>{const Mt=Q.detail??void 0;(f==null?void 0:f.name)==="stargaze"&&!p&&S("lunar-distance",_({moonTap:Mt}))},H=Q=>{var W;const Mt=Q.detail??{},wt={star:((W=Mt.star)==null?void 0:W.name)||void 0,view:Mt.view};(f==null?void 0:f.name)==="lunar-distance"&&S("longitude",_({lunar:wt}))},G=Q=>{if((f==null?void 0:f.name)!=="longitude")return;const Mt=Q.detail??{};b(Mt.lat??35.012949,Mt.lon??135.780958)};window.addEventListener("boot-check:done",U),window.addEventListener("boot-effect:done",E),window.addEventListener("stargaze:moon-tap",C),window.addEventListener("lunar-distance:done",H),window.addEventListener("longitude:done",G);function K(Q){const Mt=document.createElement("nav");Mt.className="info-links",Mt.style.cssText="position:fixed;left:0;right:0;bottom:calc(env(safe-area-inset-bottom) + 1.2rem);z-index:10;display:flex;justify-content:center;gap:2.5rem;font:15px var(--font);letter-spacing:0.15em";for(const[wt,W]of[["./manual.html","使い方"],["./credits.html","出典"]]){const it=document.createElement("a");it.href=wt,it.textContent=W,it.style.cssText="color:#999;text-decoration:none;padding:0.6rem 0.4rem",it.addEventListener("click",St=>St.stopPropagation()),Mt.appendChild(it)}Q.appendChild(Mt)}function tt(){w("boot-check",{}),f&&K(f.host)}function Z(){const Q=document.createElement("div");Q.className="screen",Q.style.cssText="display:flex;align-items:center;justify-content:center;color:#fff;background:#000;font:20px var(--font);-webkit-user-select:none;user-select:none;cursor:pointer",Q.textContent="タップで開始",K(Q),i.appendChild(Q);const Mt=()=>{Q.remove(),tt()};Q.addEventListener("click",()=>{let wt;try{wt=window.DeviceOrientationEvent.requestPermission()}catch{Mt();return}Promise.resolve(wt).then(W=>{u=W==="granted"}).catch(()=>{}).finally(Mt)},{once:!0})}function at(){const Q=f==null?void 0:f.name;if(!p)switch(Q){case"boot-check":window.dispatchEvent(new CustomEvent("boot-check:done"));break;case"boot-effect":window.dispatchEvent(new CustomEvent("boot-effect:done"));break;case"stargaze":window.dispatchEvent(new CustomEvent("stargaze:moon-tap"));break;case"lunar-distance":window.dispatchEvent(new CustomEvent("lunar-distance:done",{detail:{moonAlt:0,star:{name:"",alt:0},lunarDistance:0}}));break;case"longitude":window.dispatchEvent(new CustomEvent("longitude:done",{detail:{lat:35.012949,lon:135.780958}}));break}}function X(Q){u=!0;const Mt=Q==="stargaze"||Q==="lunar-distance"||Q==="longitude"?_():{};S(Q,Mt)}window.__app={state:()=>({screen:(f==null?void 0:f.name)??null,closing:p,epoch:e.toISOString(),orientationGranted:u,latlon:h,stopAt:s,hold:o,from:l}),advance:at,jump:X,screens:Object.keys(vo)};const ft=t.get("screen");if(ft&&ft in vo){u=!0;const Q=ft==="stargaze"||ft==="lunar-distance"||ft==="longitude"?_():{};w(ft,Q)}else c?Z():tt()}V6();const Of=document.getElementById("app");Ff(Of);"serviceWorker"in navigator&&window.addEventListener("load",()=>{navigator.serviceWorker.register("./sw.js").catch(i=>console.warn("[sw] register failed",i))});
