const o={method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify({title:"Большая новая тестовая книга по HTML"})};fetch("http://localhost:7777/books/13",o).then((o=>o.json())).then((o=>console.log(o)));
//# sourceMappingURL=index.a63d3f01.js.map
