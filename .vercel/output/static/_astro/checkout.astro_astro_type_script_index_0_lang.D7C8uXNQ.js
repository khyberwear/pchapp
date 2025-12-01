import{$ as c,c as d}from"./cartStore.DRyQvXMF.js";import"./index.daetGfa_.js";const i=document.getElementById("order-items"),a=document.getElementById("order-total"),l=document.getElementById("checkout-form");let n={};c.subscribe(r=>{if(n=r,!i||!a)return;const t=Object.values(r);let o=0;i.innerHTML=t.map(e=>(o+=e.price*e.quantity,`
        <div class="flex justify-between text-sm text-gray-600 dark:text-neutral-400">
          <span>${e.title} x ${e.quantity}</span>
          <span>$${(e.price*e.quantity).toFixed(2)}</span>
        </div>
      `)).join(""),a.textContent=`$${o.toFixed(2)}`});l&&l.addEventListener("submit",async r=>{if(r.preventDefault(),Object.keys(n).length===0){alert("Your cart is empty!");return}const t=new FormData(r.target),o={customerName:t.get("full-name"),customerEmail:t.get("email"),customerPhone:t.get("phone"),shippingAddress:t.get("address"),shippingCity:t.get("city"),shippingPostalCode:t.get("postal-code"),items:n,total:parseFloat(a?.textContent?.replace("$","")||"0")};try{const e=await fetch("/api/orders",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(o)}),s=await e.json();e.ok?(d(),alert(`Order placed successfully! Order Number: ${s.orderNumber}

You will receive a confirmation email shortly.`),window.location.href="/"):alert(`Order failed: ${s.error}`)}catch(e){console.error("Order submission error:",e),alert("Failed to place order. Please try again.")}});
