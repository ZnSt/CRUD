const n=document.querySelector(".btn"),e=document.querySelector(".user-list");n.addEventListener("click",(async()=>{try{!function(n){const a=n.map((n=>`<li class="item">\n        <p><b>Name</b>: ${n.name}</p>\n        <p><b>Email</b>: ${n.email}</p>\n        <p><b>Company</b>: ${n.company.name}</p>\n      </li>`)).join("");e.innerHTML=a}(await async function(){const n="https://jsonplaceholder.typicode.com",e=[1,2,3,4,5].map((async e=>(await fetch(`${n}/users/${e}`)).json()));return await Promise.all(e)}())}catch(n){console.log(n.message)}}));
//# sourceMappingURL=index.d4404a06.js.map