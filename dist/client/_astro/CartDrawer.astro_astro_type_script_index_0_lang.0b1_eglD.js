import{$ as a,r as l}from"./cartStore.3j2GDZ6Y.js";import"./index.daetGfa_.js";const o=document.getElementById("cart-items"),s=document.getElementById("cart-total");a.subscribe(u=>{if(!o||!s)return;const c=Object.values(u);if(c.length===0){o.innerHTML='<p class="text-center text-gray-500 dark:text-gray-400">Your cart is empty.</p>',s.textContent="Rs 0.00";return}let d=0;o.innerHTML=c.map(t=>(d+=t.price*t.quantity,`
        <div class="flex gap-x-4 rounded-lg border p-3 dark:border-neutral-700">
          <div class="flex-1 min-w-0">
            <h4 class="text-sm font-medium text-gray-800 dark:text-white truncate">${t.title}</h4>
            ${t.color||t.size?`
              <p class="text-xs text-gray-500 dark:text-gray-400 mt-0.5">
                ${t.color?`Color: ${t.color}`:""}
                ${t.color&&t.size?" | ":""}
                ${t.size?`Size: ${t.size}`:""}
              </p>
            `:""}
            <p class="text-sm font-semibold text-gray-800 dark:text-white mt-1">Rs ${(t.price*t.quantity).toFixed(2)}</p>
            
            <!-- Quantity Controls -->
            <div class="flex items-center gap-2 mt-2">
              <button 
                data-id="${t.id}" 
                class="decrease-btn flex h-6 w-6 items-center justify-center rounded border border-gray-300 text-xs hover:bg-gray-50 dark:border-neutral-600 dark:hover:bg-neutral-700"
              >
                -
              </button>
              <span class="text-sm font-medium text-gray-800 dark:text-white min-w-[2rem] text-center">${t.quantity}</span>
              <button 
                data-id="${t.id}" 
                class="increase-btn flex h-6 w-6 items-center justify-center rounded border border-gray-300 text-xs hover:bg-gray-50 dark:border-neutral-600 dark:hover:bg-neutral-700"
              >
                +
              </button>
            </div>
          </div>
          <button 
            data-id="${t.id}" 
            class="remove-btn text-sm text-red-600 hover:text-red-800 dark:text-red-500 dark:hover:text-red-400 self-start"
          >
            <svg class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
            </svg>
          </button>
        </div>
      `)).join(""),s.textContent=`Rs ${d.toFixed(2)}`,document.querySelectorAll(".remove-btn").forEach(t=>{t.addEventListener("click",n=>{const e=n.target.closest(".remove-btn")?.dataset.id;e&&l(e)})}),document.querySelectorAll(".increase-btn").forEach(t=>{t.addEventListener("click",n=>{const e=n.target.closest(".increase-btn")?.dataset.id;if(e){const r=a.get()[e];r&&a.setKey(e,{...r,quantity:r.quantity+1})}})}),document.querySelectorAll(".decrease-btn").forEach(t=>{t.addEventListener("click",n=>{const e=n.target.closest(".decrease-btn")?.dataset.id;if(e){const r=a.get()[e];r&&(r.quantity>1?a.setKey(e,{...r,quantity:r.quantity-1}):l(e))}})})});
