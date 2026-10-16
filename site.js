(function(){
  var C = window.ATPT || {}, ck = C.checkout || {}, sp = C.suporte || {};
  // links de checkout
  document.querySelectorAll('[data-checkout]').forEach(function(a){
    var url = ck[a.getAttribute('data-checkout')];
    if (url) { a.href = url + (url.indexOf('?')<0 ? location.search : location.search.replace(/^\?/,'&')); }
    else { a.href = '#'; a.addEventListener('click', function(e){ e.preventDefault(); alert('Link de pagamento ainda por configurar (config.js).'); }); }
  });
  // contactos: se faltar o valor, esconde a linha onde aparece
  document.querySelectorAll('[data-cfg]').forEach(function(el){
    var k = el.getAttribute('data-cfg'), v = '';
    if (k === 'email') v = sp.email; else if (k === 'whatsapp') v = sp.whatsapp; else if (k === 'vendedor') v = C.vendedor;
    if (!v) { var row = el.closest('[data-cfg-row]'); if (row) row.hidden = true; return; }
    if (k === 'email') { el.textContent = v; if (el.tagName === 'A') el.href = 'mailto:' + v; }
    else if (k === 'whatsapp') { el.textContent = '+' + v; if (el.tagName === 'A') el.href = 'https://wa.me/' + v; }
    else el.textContent = v;
  });
  var y = document.getElementById('year'); if (y) y.textContent = new Date().getFullYear();
  // cookies + Meta Pixel (só com consentimento)
  function pixel(){
    if (!C.pixel || window.fbq) return;
    !function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');
    fbq('init', C.pixel); fbq('track','PageView');
    var ev = document.body.getAttribute('data-event'); if (ev) fbq('track', ev);
  }
  var choice = null; try { choice = localStorage.getItem('atpt_cookies'); } catch(e){}
  if (choice === 'sim') pixel();
  else if (choice !== 'nao' && C.pixel) {
    var b = document.createElement('div'); b.className = 'cookie'; b.setAttribute('role','dialog');
    b.innerHTML = '<p>Usamos cookies de medição (Meta) para saber que anúncios funcionam. Só os ativamos se aceitares. <a href="privacidade.html">Saber mais</a></p><div><button class="n" type="button">Recusar</button><button class="y" type="button">Aceitar</button></div>';
    document.body.appendChild(b);
    function set(v){ try{ localStorage.setItem('atpt_cookies', v); }catch(e){} b.remove(); if (v==='sim') pixel(); }
    b.querySelector('.y').onclick = function(){ set('sim'); };
    b.querySelector('.n').onclick = function(){ set('nao'); };
  }
})();
