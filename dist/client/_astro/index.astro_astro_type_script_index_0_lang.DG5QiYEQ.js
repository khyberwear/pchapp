import{$ as o}from"./authStore.DinBIN4p.js";import"./index.daetGfa_.js";window.addEventListener("DOMContentLoaded",()=>{const t=o.get();!t||t.role!=="admin"?window.location.href="/":s()});const r=document.getElementById("orders-table-body");async function s(){if(r)try{r.innerHTML=`
        <tr>
          <td colspan="6" class="px-6 py-4 text-center text-sm text-gray-500 dark:text-neutral-400">Loading orders...</td>
        </tr>
      `;const t=await fetch("/api/admin/orders"),a=await t.json();if(!t.ok)throw new Error(a.error||"Failed to fetch orders");const n=a.orders||[];if(n.length===0){r.innerHTML=`
          <tr>
            <td colspan="6" class="px-6 py-4 text-center text-sm text-gray-500 dark:text-neutral-400">No orders found</td>
          </tr>
        `;return}r.innerHTML=n.map(e=>`
        <tr>
          <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-neutral-200">${e.order_number}</td>
          <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">
            ${e.customer_name}<br>
            <span class="text-xs text-gray-500">${e.customer_email}</span>
          </td>
          <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">${new Date(e.created_at).toLocaleDateString()}</td>
          <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">$${parseFloat(e.total).toFixed(2)}</td>
          <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">
            <span class="inline-flex items-center gap-x-1.5 py-1.5 px-3 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800 dark:bg-yellow-800/30 dark:text-yellow-500">
              ${e.status}
            </span>
          </td>
          <td class="px-6 py-4 whitespace-nowrap text-end text-sm font-medium">
            <button type="button" class="inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-blue-600 hover:text-blue-800 disabled:opacity-50 disabled:pointer-events-none dark:text-blue-500 dark:hover:text-blue-400 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">View</button>
          </td>
        </tr>
      `).join("")}catch(t){console.error("Error loading orders:",t),r.innerHTML=`
        <tr>
          <td colspan="6" class="px-6 py-4 text-center text-sm text-red-500">Failed to load orders. Please refresh the page.</td>
        </tr>
      `}}s();
