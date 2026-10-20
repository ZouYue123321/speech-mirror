// 统一顶栏（Logo + 返回）与底部致谢。用法：<script src="shared/demo.js" ...></script>
(function(){var s=document.currentScript,d=s.dataset,emb=/[?&]embed=1/.test(location.search);try{emb=emb||window.self!==window.top}catch(e){emb=true}if(emb)document.documentElement.classList.add('mz-embed');function go(){
if(!emb){var b=document.createElement('div');b.className='mz-bar';b.innerHTML='<a href="https://github.com/ZouYue123321" aria-label="MelodyZ 首页"><img src="shared/melodyz-black.svg" alt="MelodyZ"></a><a class="back" href="https://github.com/ZouYue123321">GitHub ↗</a>';document.body.appendChild(b);}
if(d.noCredit)return;var c=document.createElement('div');c.className='mz-credit';var L='<a href="'+d.repo+'" target="_blank" rel="noopener">'+d.name+'</a>';c.innerHTML=d.inspired?'灵感来自 '+L+' · 独立实现，使用 Transformers.js（Apache-2.0）':'基于 '+L+' 开源项目改编 · '+d.license;document.body.appendChild(c);}
document.readyState==='loading'?document.addEventListener('DOMContentLoaded',go):go();})();
