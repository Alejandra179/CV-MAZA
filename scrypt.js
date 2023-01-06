console.log("d")
fetch("./data.json", { mode: "no-cors" }) // desactivar CORS porque la ruta no contiene http(s)
.then((res) => res.json())
.then((data) => console.log(data));