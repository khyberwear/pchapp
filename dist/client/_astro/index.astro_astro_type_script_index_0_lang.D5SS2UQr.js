import{$ as f}from"./authStore.CZ78RdFN.js";import"./index.daetGfa_.js";let o=[],i="all";const d=document.getElementById("orders-table-body"),x=document.getElementById("order-modal"),c=document.getElementById("modal-backdrop"),g=document.getElementById("modal-title"),m=document.getElementById("modal-content");document.addEventListener("DOMContentLoaded",()=>{const t=f.get();!t||t.role!=="admin"?window.location.href="/":(u(),h())});function h(){document.getElementById("refresh-orders")?.addEventListener("click",u),document.querySelectorAll(".filter-tab").forEach(t=>{t.addEventListener("click",e=>{const a=e.target.dataset.filter||"all";v(a)})}),document.getElementById("hs-table-search")?.addEventListener("input",t=>{const e=t.target.value.toLowerCase();p(e)}),document.getElementById("close-modal-x")?.addEventListener("click",l),document.getElementById("close-modal-btn")?.addEventListener("click",l),c?.addEventListener("click",l),d?.addEventListener("click",async t=>{const r=t.target.closest("button[data-action]");if(!r)return;const a=r.dataset.order,s=r.dataset.action;!a||!s||(s==="view"?C(a):await L(a,s))})}function v(t){i=t,document.querySelectorAll(".filter-tab").forEach(r=>{r.classList.remove("active","border-orange-500","text-orange-600","dark:text-orange-400"),r.classList.add("border-transparent","text-gray-500","dark:text-neutral-400")});const e=document.querySelector(`[data-filter="${t}"]`);e&&(e.classList.add("active","border-orange-500","text-orange-600","dark:text-orange-400"),e.classList.remove("border-transparent","text-gray-500","dark:text-neutral-400")),p()}function p(t=""){let e=o;i!=="all"&&(e=e.filter(r=>r.status.toLowerCase()===i)),t&&(e=e.filter(r=>r.order_number.toLowerCase().includes(t)||r.customer_name.toLowerCase().includes(t)||r.customer_email.toLowerCase().includes(t))),w(e)}function y(){const t={pending:o.filter(n=>n.status.toLowerCase()==="pending").length,processing:o.filter(n=>n.status.toLowerCase()==="processing").length,dispatched:o.filter(n=>n.status.toLowerCase()==="dispatched").length,completed:o.filter(n=>n.status.toLowerCase()==="completed").length},e=document.getElementById("stat-pending"),r=document.getElementById("stat-processing"),a=document.getElementById("stat-dispatched"),s=document.getElementById("stat-completed");e&&(e.textContent=t.pending.toString()),r&&(r.textContent=t.processing.toString()),a&&(a.textContent=t.dispatched.toString()),s&&(s.textContent=t.completed.toString())}function b(t){const e=t.toLowerCase(),r={pending:"bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400",processing:"bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400",dispatched:"bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-400",completed:"bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400",cancelled:"bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400"};return r[e]||r.pending}function k(t){const e=t.status.toLowerCase(),r=[];return e==="pending"&&r.push(`<button data-order="${t.order_number}" data-action="processing" class="inline-flex items-center gap-1 rounded-lg bg-blue-50 px-3 py-1.5 text-xs font-medium text-blue-600 hover:bg-blue-100 dark:bg-blue-900/30 dark:text-blue-400 dark:hover:bg-blue-900/50">
        <svg class="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" /></svg>
        Process
      </button>`),e==="processing"&&r.push(`<button data-order="${t.order_number}" data-action="dispatched" class="inline-flex items-center gap-1 rounded-lg bg-purple-50 px-3 py-1.5 text-xs font-medium text-purple-600 hover:bg-purple-100 dark:bg-purple-900/30 dark:text-purple-400 dark:hover:bg-purple-900/50">
        <svg class="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" /></svg>
        Dispatch
      </button>`),e==="dispatched"&&r.push(`<button data-order="${t.order_number}" data-action="completed" class="inline-flex items-center gap-1 rounded-lg bg-green-50 px-3 py-1.5 text-xs font-medium text-green-600 hover:bg-green-100 dark:bg-green-900/30 dark:text-green-400 dark:hover:bg-green-900/50">
        <svg class="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
        Complete
      </button>`),e!=="cancelled"&&e!=="completed"&&r.push(`<button data-order="${t.order_number}" data-action="cancelled" class="inline-flex items-center gap-1 rounded-lg bg-red-50 px-3 py-1.5 text-xs font-medium text-red-600 hover:bg-red-100 dark:bg-red-900/30 dark:text-red-400 dark:hover:bg-red-900/50">
        <svg class="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
        Cancel
      </button>`),r.join("")}function w(t){if(d){if(t.length===0){d.innerHTML=`
        <tr>
          <td colspan="6" class="px-6 py-12 text-center">
            <div class="flex flex-col items-center">
              <svg class="h-12 w-12 text-gray-300 dark:text-neutral-600" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5m6 4.125l2.25 2.25m0 0l2.25 2.25M12 13.875l2.25-2.25M12 13.875l-2.25 2.25M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" /></svg>
              <p class="mt-4 text-sm text-gray-500 dark:text-neutral-400">No orders found</p>
            </div>
          </td>
        </tr>
      `;return}d.innerHTML=t.map(e=>`
      <tr class="hover:bg-gray-50 dark:hover:bg-neutral-700/50 transition-colors">
        <td class="px-6 py-4 whitespace-nowrap">
          <span class="text-sm font-semibold text-gray-800 dark:text-neutral-200">${e.order_number}</span>
        </td>
        <td class="px-6 py-4 whitespace-nowrap">
          <div class="flex items-center gap-3">
            <div class="flex h-9 w-9 items-center justify-center rounded-full bg-orange-100 dark:bg-orange-900/30">
              <span class="text-sm font-medium text-orange-600 dark:text-orange-400">${e.customer_name.charAt(0).toUpperCase()}</span>
            </div>
            <div>
              <p class="text-sm font-medium text-gray-800 dark:text-neutral-200">${e.customer_name}</p>
              <p class="text-xs text-gray-500 dark:text-neutral-400">${e.customer_email}</p>
            </div>
          </div>
        </td>
        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-600 dark:text-neutral-300">${new Date(e.created_at).toLocaleDateString("en-US",{month:"short",day:"numeric",year:"numeric"})}</td>
        <td class="px-6 py-4 whitespace-nowrap">
          <span class="text-sm font-semibold text-gray-800 dark:text-neutral-200">Rs ${parseFloat(e.total).toLocaleString()}</span>
        </td>
        <td class="px-6 py-4 whitespace-nowrap">
          <span class="inline-flex items-center gap-x-1.5 py-1.5 px-3 rounded-full text-xs font-medium ${b(e.status)}">
            ${e.status.charAt(0).toUpperCase()+e.status.slice(1)}
          </span>
        </td>
        <td class="px-6 py-4 whitespace-nowrap text-end">
          <div class="flex items-center justify-end gap-2 flex-wrap">
            <button data-order="${e.order_number}" data-action="view" class="inline-flex items-center gap-1 rounded-lg bg-gray-50 px-3 py-1.5 text-xs font-medium text-gray-600 hover:bg-gray-100 dark:bg-neutral-700 dark:text-neutral-300 dark:hover:bg-neutral-600">
              <svg class="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" /><path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
              View
            </button>
            ${k(e)}
          </div>
        </td>
      </tr>
    `).join("")}}async function u(){if(d)try{d.innerHTML=`
        <tr>
          <td colspan="6" class="px-6 py-12 text-center">
            <div class="flex flex-col items-center">
              <div class="h-8 w-8 animate-spin rounded-full border-4 border-orange-200 border-t-orange-500"></div>
              <p class="mt-4 text-sm text-gray-500 dark:text-neutral-400">Loading orders...</p>
            </div>
          </td>
        </tr>
      `;const t=await fetch("/api/admin/orders"),e=await t.json();if(!t.ok)throw new Error(e.error||"Failed to fetch orders");o=e.orders||[],y(),p()}catch(t){console.error("Error loading orders:",t),d.innerHTML=`
        <tr>
          <td colspan="6" class="px-6 py-12 text-center">
            <div class="flex flex-col items-center">
              <svg class="h-12 w-12 text-red-300" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" /></svg>
              <p class="mt-4 text-sm text-red-500">Failed to load orders. Please refresh the page.</p>
            </div>
          </td>
        </tr>
      `}}async function L(t,e){if(confirm({processing:"Mark this order as processing? An email will be sent to the customer.",dispatched:"Mark this order as dispatched? An email will be sent to the customer.",completed:"Mark this order as completed? An email will be sent to the customer.",cancelled:"Cancel this order? This action cannot be undone. An email will be sent to the customer."}[e]||`Update status to ${e}?`))try{const a=await fetch("/api/admin/update-order-status",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({orderNumber:t,status:e})}),s=await a.json();if(!a.ok)throw new Error(s.error||"Failed to update order status");await u(),alert(`Order status updated to ${e}. Email notification sent to customer.`)}catch(a){console.error("Error updating order status:",a),alert("Failed to update order status. Please try again.")}}function C(t){const e=o.find(a=>a.order_number===t);if(!e)return;g&&(g.textContent=`Order #${e.order_number}`);let r=[];try{r=Array.isArray(e.items)?e.items:JSON.parse(e.items)}catch{r=[]}m&&(m.innerHTML=`
        <div class="space-y-6">
          <div class="grid grid-cols-2 gap-4">
            <div class="rounded-lg bg-gray-50 p-4 dark:bg-neutral-700">
              <p class="text-xs font-medium text-gray-500 dark:text-neutral-400">Status</p>
              <span class="mt-1 inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${b(e.status)}">
                ${e.status.charAt(0).toUpperCase()+e.status.slice(1)}
              </span>
            </div>
            <div class="rounded-lg bg-gray-50 p-4 dark:bg-neutral-700">
              <p class="text-xs font-medium text-gray-500 dark:text-neutral-400">Order Date</p>
              <p class="mt-1 text-sm font-medium text-gray-800 dark:text-white">${new Date(e.created_at).toLocaleString()}</p>
            </div>
          </div>

          <div class="rounded-lg border border-gray-200 dark:border-neutral-600">
            <div class="border-b border-gray-200 bg-gray-50 px-4 py-3 dark:border-neutral-600 dark:bg-neutral-700">
              <h4 class="text-sm font-semibold text-gray-800 dark:text-white">Customer Information</h4>
            </div>
            <div class="p-4 space-y-2">
              <p class="text-sm"><span class="text-gray-500 dark:text-neutral-400">Name:</span> <span class="font-medium text-gray-800 dark:text-white">${e.customer_name}</span></p>
              <p class="text-sm"><span class="text-gray-500 dark:text-neutral-400">Email:</span> <span class="font-medium text-gray-800 dark:text-white">${e.customer_email}</span></p>
              <p class="text-sm"><span class="text-gray-500 dark:text-neutral-400">Phone:</span> <span class="font-medium text-gray-800 dark:text-white">${e.customer_phone||"N/A"}</span></p>
              <p class="text-sm"><span class="text-gray-500 dark:text-neutral-400">Address:</span> <span class="font-medium text-gray-800 dark:text-white">${e.shipping_address||""}, ${e.shipping_city||""} ${e.shipping_postal_code||""}</span></p>
            </div>
          </div>

          <div class="rounded-lg border border-gray-200 dark:border-neutral-600">
            <div class="border-b border-gray-200 bg-gray-50 px-4 py-3 dark:border-neutral-600 dark:bg-neutral-700">
              <h4 class="text-sm font-semibold text-gray-800 dark:text-white">Order Items</h4>
            </div>
            <div class="divide-y divide-gray-200 dark:divide-neutral-600">
              ${r.length>0?r.map(a=>`
                <div class="flex items-center justify-between px-4 py-3">
                  <div>
                    <p class="text-sm font-medium text-gray-800 dark:text-white">${a.title||a.name||"Item"}</p>
                    <p class="text-xs text-gray-500 dark:text-neutral-400">Qty: ${a.quantity||1}</p>
                  </div>
                  <p class="text-sm font-medium text-gray-800 dark:text-white">Rs ${((a.price||0)*(a.quantity||1)).toLocaleString()}</p>
                </div>
              `).join(""):'<div class="px-4 py-3 text-sm text-gray-500 dark:text-neutral-400">No items found</div>'}
            </div>
            <div class="border-t border-gray-200 bg-gray-50 px-4 py-3 dark:border-neutral-600 dark:bg-neutral-700">
              <div class="flex items-center justify-between">
                <p class="text-sm font-semibold text-gray-800 dark:text-white">Total</p>
                <p class="text-lg font-bold text-orange-600 dark:text-orange-400">Rs ${parseFloat(e.total||0).toLocaleString()}</p>
              </div>
            </div>
          </div>
        </div>
      `),x?.classList.remove("hidden"),c?.classList.remove("hidden"),document.body.style.overflow="hidden"}function l(){x?.classList.add("hidden"),c?.classList.add("hidden"),document.body.style.overflow=""}
