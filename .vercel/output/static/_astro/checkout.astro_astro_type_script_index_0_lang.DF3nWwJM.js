import{$ as p,d as b,i as f,c as h}from"./cartStore.3j2GDZ6Y.js";import"./index.daetGfa_.js";const l=document.getElementById("order-items"),c=document.getElementById("subtotal-display"),d=document.getElementById("delivery-label"),u=document.getElementById("delivery-cost"),y=document.getElementById("total-display"),g=document.getElementById("checkout-form"),x=document.querySelectorAll('input[name="delivery"]');let i={},s=0,n=250;function m(){const r=s+n;c&&(c.textContent=`Rs ${s}`),u&&(u.textContent=`Rs ${n}`),y&&(y.textContent=`Rs ${r}`)}x.forEach(r=>{r.addEventListener("change",t=>{t.target.value==="normal"?(n=250,d&&(d.textContent="Delivery (Normal)")):(n=400,d&&(d.textContent="Delivery (Express)")),m()})});p.subscribe(r=>{if(i=r,!l)return;const t=Object.values(r);s=0,l.innerHTML=t.map(e=>(s+=e.price*e.quantity,`
        <div class="flex justify-between items-start pb-4 border-b border-gray-200 dark:border-neutral-700 last:border-b-0">
          <div class="flex gap-4">
            <div>
              <p class="text-sm font-medium text-gray-800 dark:text-neutral-200">${e.title}</p>
              <p class="text-sm text-gray-500 dark:text-neutral-400">Rs ${e.price} each</p>
              ${e.color||e.size?`
                <p class="text-xs text-gray-500 dark:text-gray-400 mt-0.5">
                  ${e.color?`Color: ${e.color}`:""}
                  ${e.color&&e.size?" | ":""}
                  ${e.size?`Size: ${e.size}`:""}
                </p>
              `:""}
              
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
      `)).join(""),document.querySelectorAll(".checkout-decrease-btn").forEach(e=>{e.addEventListener("click",a=>{const o=a.target.dataset.id;o&&b(o)})}),document.querySelectorAll(".checkout-increase-btn").forEach(e=>{e.addEventListener("click",a=>{const o=a.target.dataset.id;o&&f(o)})}),m()});g&&g.addEventListener("submit",async r=>{if(r.preventDefault(),Object.keys(i).length===0){alert("Your cart is empty!");return}const t=new FormData(r.target),e={customerName:t.get("full-name"),customerEmail:t.get("email"),customerPhone:t.get("phone"),shippingAddress:t.get("address"),shippingCity:t.get("city"),shippingPostalCode:t.get("postal-code"),shippingCountry:t.get("country"),deliveryMethod:t.get("delivery"),paymentMethod:t.get("payment"),orderNotes:t.get("notes"),items:Object.values(i),subtotal:s,deliveryCost:n,total:s+n};try{const a=await fetch("/api/orders",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}),o=await a.json();a.ok?(h(),window.location.href=`/thank-you?orderNumber=${o.orderNumber}`):alert(`Order failed: ${o.error}`)}catch(a){console.error("Order submission error:",a),alert("Failed to place order. Please try again.")}});
