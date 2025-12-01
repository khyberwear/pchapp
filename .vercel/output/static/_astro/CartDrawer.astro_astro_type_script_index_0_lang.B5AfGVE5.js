import{$ as c,r as i}from"./cartStore.DRyQvXMF.js";import"./index.daetGfa_.js";const e=document.getElementById("cart-items"),r=document.getElementById("cart-total");c.subscribe(d=>{if(!e||!r)return;const a=Object.values(d);if(a.length===0){e.innerHTML='<p class="text-center text-gray-500 dark:text-gray-400">Your cart is empty.</p>',r.textContent="$0.00";return}let n=0;e.innerHTML=a.map(t=>(n+=t.price*t.quantity,`
        <div class="flex gap-x-4 rounded-lg border p-3 dark:border-neutral-700">
          <div class="flex-1">
            <h4 class="text-sm font-medium text-gray-800 dark:text-white">${t.title}</h4>
            <p class="text-xs text-gray-500 dark:text-gray-400">Qty: ${t.quantity}</p>
            <p class="text-sm font-semibold text-gray-800 dark:text-white">$${(t.price*t.quantity).toFixed(2)}</p>
          </div>
          <button 
            data-id="${t.id}" 
            class="remove-btn text-sm text-red-600 hover:text-red-800 dark:text-red-500 dark:hover:text-red-400"
          >
            Remove
          </button>
        </div>
      `)).join(""),r.textContent=`$${n.toFixed(2)}`,document.querySelectorAll(".remove-btn").forEach(t=>{t.addEventListener("click",s=>{const o=s.target.dataset.id;o&&i(o)})})});
