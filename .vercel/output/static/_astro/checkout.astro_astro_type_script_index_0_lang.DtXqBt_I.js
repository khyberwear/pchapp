import{$ as p,d as b,i as f,c as h}from"./cartStore.wrkIm_xd.js";import"./index.daetGfa_.js";const l=document.getElementById("order-items"),c=document.getElementById("subtotal-display"),d=document.getElementById("delivery-label"),u=document.getElementById("delivery-cost"),y=document.getElementById("total-display"),m=document.getElementById("checkout-form"),v=document.querySelectorAll('input[name="delivery"]');let i={},n=0,s=250;function g(){const r=n+s;c&&(c.textContent=`Rs ${n}`),u&&(u.textContent=`Rs ${s}`),y&&(y.textContent=`Rs ${r}`)}v.forEach(r=>{r.addEventListener("change",t=>{t.target.value==="normal"?(s=250,d&&(d.textContent="Delivery (Normal)")):(s=400,d&&(d.textContent="Delivery (Express)")),g()})});p.subscribe(r=>{if(i=r,!l)return;const t=Object.values(r);n=0,l.innerHTML=t.map(e=>(n+=e.price*e.quantity,`
        <div class="flex justify-between items-start pb-4 border-b border-gray-200 dark:border-neutral-700 last:border-b-0">
          <div class="flex gap-4">
            <img src="${e.image}" alt="${e.title}" class="w-16 h-16 object-cover rounded-md">
            <div>
              <p class="text-sm font-medium text-gray-800 dark:text-neutral-200">${e.title}</p>
              <p class="text-sm text-gray-500 dark:text-neutral-400">Rs ${e.price} each</p>
              
              <!-- Quantity Controls -->
              <div class="flex items-center gap-2 mt-2">
                <button 
                  data-id="${e.id}" 
                  class="checkout-decrease-btn flex h-6 w-6 items-center justify-center rounded border border-gray-300 text-xs hover:bg-gray-50 dark:border-neutral-600 dark:hover:bg-neutral-700"
                >
                  -
                </button>
                <span class="text-sm font-medium text-gray-800 dark:text-white min-w-[2rem] text-center">${e.quantity}</span>
                <button 
                  data-id="${e.id}" 
                  class="checkout-increase-btn flex h-6 w-6 items-center justify-center rounded border border-gray-300 text-xs hover:bg-gray-50 dark:border-neutral-600 dark:hover:bg-neutral-700"
                >
                  +
                </button>
              </div>
            </div>
          </div>
          <span class="text-sm font-medium text-gray-800 dark:text-neutral-200">Rs ${e.price*e.quantity}</span>
        </div>
      `)).join(""),document.querySelectorAll(".checkout-decrease-btn").forEach(e=>{e.addEventListener("click",a=>{const o=a.target.dataset.id;o&&b(o)})}),document.querySelectorAll(".checkout-increase-btn").forEach(e=>{e.addEventListener("click",a=>{const o=a.target.dataset.id;o&&f(o)})}),g()});m&&m.addEventListener("submit",async r=>{if(r.preventDefault(),Object.keys(i).length===0){alert("Your cart is empty!");return}const t=new FormData(r.target),e={customerName:t.get("full-name"),customerEmail:t.get("email"),customerPhone:t.get("phone"),shippingAddress:t.get("address"),shippingCity:t.get("city"),shippingPostalCode:t.get("postal-code"),shippingCountry:t.get("country"),deliveryMethod:t.get("delivery"),paymentMethod:t.get("payment"),orderNotes:t.get("notes"),items:Object.values(i),subtotal:n,deliveryCost:s,total:n+s};try{const a=await fetch("/api/orders",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}),o=await a.json();a.ok?(h(),window.location.href=`/thank-you?orderNumber=${o.orderNumber}`):alert(`Order failed: ${o.error}`)}catch(a){console.error("Order submission error:",a),alert("Failed to place order. Please try again.")}});
