(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();function e(e,t){return e>0&&e<=12&&t>0&&t<=[31,29,31,30,31,30,31,31,30,31,30,31][e-1]}function t(e,t){let n=Array(7).fill(0);for(let r=2e3;r<2400;++r){let i=new Date(Date.UTC(r,e-1,t));if(i.getUTCDate()!==t)continue;let a=i.getUTCDay();n[a]++}return n}var n=document.getElementById(`form`),r=document.getElementById(`month`),i=document.getElementById(`day`),a=document.getElementById(`result`),o=`日月火水木金土`;n.addEventListener(`submit`,n=>{n.preventDefault();let s=Number(r.value),c=Number(i.value);e(s,c)?a.innerHTML=`
      <h2>${s}月${c}日</h2>
      <table>
        <tbody>
          ${t(s,c).map((e,t)=>`
              <tr>
                <th>${o[t]}曜日</th>
                <td>${e}</td>
              </tr>
            `).join(``)}
        </tbody>
      </table>
    `:a.innerHTML=`<p>日付が不正です</p>`});