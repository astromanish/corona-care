const navToggle = document.querySelector(".hamburger");

navToggle.addEventListener("click", () =>{
    document.body.classList.toggle("nav-open");
});

const getData = () => {
    axios({
        method : "get",
        url : "https://api.quarantine.country/api/v1/summary/latest"
    })
    .then(res => showData(res.data))
    .catch(err => console.error(err))
}

const showData = (data) => {
    console.log(Object.entries(data.data.regions))

    const arrayRegions = Object.entries(data.data.regions);
    const tbody = document.querySelector("#table-body");
    arrayRegions.forEach((cntry) => {
        const row = document.createElement("tr");
        const col1 = document.createElement("td");
        col1.appendChild(document.createTextNode(cntry[1].name));
        const col2 = document.createElement("td");
        col2.appendChild(document.createTextNode(cntry[1].total_cases));
        const col3 = document.createElement("td");
        col3.className = "text-success";
        col3.appendChild(document.createTextNode(cntry[1].recovered));
        const col4 = document.createElement("td");
        col4.className = "text-danger";
        col4.appendChild(document.createTextNode(cntry[1].deaths));
        row.appendChild(col1);
        row.appendChild(col2);
        row.appendChild(col3);
        row.appendChild(col4);
        tbody.appendChild(row);
    })

}

getData();

