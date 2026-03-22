(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();function e(e){var t=document.getElementById(`number`),n=document.getElementById(`type`),r=document.getElementById(`segno`),i=document.getElementById(`esp`),a=document.getElementById(`mantissa`),o=0;let s=e=>{let t=e.split(`.`),r=``;var i=``,a=``;let s=parseInt(n.value),c=23;if(s==1&&(c=53),t[0]!=null){let e=parseInt(t[0]);for(;e>0;)i=`${(e%2).toString()}${i}`,e=Math.floor(e/2)}if(t[1]!=null){c-=i.length;let e=parseFloat(`0.${t[1]}`);for(;e!=0&&a.length<=c;){e*=2;let t=e.toString().split(`.`);a+=t[0],e=parseFloat(`0.${t[1]}`)}}if(i!=``)o=i.length-1,i=i.replace(`1`,``),console.log(o);else{let e=a.indexOf(`1`);e!==-1&&(o=-(e+1),a=a.slice(e+1))}r=`${i}${a}`;let l=(s===1?53:23)-r.length;return r+=`0`.repeat(l),console.log(r),r},c=()=>{let e=parseInt(n.value),t=127,r=e===1?11:8;e==1&&(t=1023),t+=o;let i=``;for(;t>0;)i=`${(t%2).toString()}${i}`,t=Math.floor(t/2);return i=`0`.repeat(r-i.length)+i,i};e.addEventListener(`click`,()=>{let e=t.value;e.startsWith(`-`)?(r.innerText=`1`,e=e.replace(`-`,``)):r.innerText=`0`,a.innerText=s(e),i.innerText=c(),e===`0`&&(i.innerText=`0`.repeat(n.value===`1`?11:8))})}document.querySelector(`#app`).innerHTML=`
  <h1>IEEE 754 convertor</h1>
  <div class="container">
    <input id="number" type="text" placeholder="Inserisci un numero:" required/>
    <select id="type">
      <option value="0">32 bit</option>
      <option value="1">64 bit</option>
    </select>
  </div>

  <button id="calcola">Calcola</button>

  <table>
    <tbody>
      <td id="segno">Segno</td>
      <td id="esp">Esponente</td>
      <td id="mantissa">Mantissa</td>
    </tbody>
  </table>
`,e(document.querySelector(`#calcola`));