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
    console.log(data)

    const arrayRegions = Object.entries(data.data.regions);
    const tbodyCountry = document.querySelector("#table-country-body");
    const tbodySummary = document.querySelector("#table-overview-body");
    arrayRegions.forEach((cntry) => {
        const row = document.createElement("tr");
        const col1 = document.createElement("td");
        col1.className = "text-dark"
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
        tbodyCountry.appendChild(row);
    })

    const row1 = document.createElement("tr");
    const col5 = document.createElement("td");
    col5.appendChild(document.createTextNode(data.data.summary.total_cases));
    const col6 = document.createElement("td");
    col6.className = "text-success";
    col6.appendChild(document.createTextNode(data.data.summary.recovered));
    const col7 = document.createElement("td");
    col7.className = "text-danger";
    col7.appendChild(document.createTextNode(data.data.summary.deaths));
    row1.appendChild(col5);
    row1.appendChild(col6);
    row1.appendChild(col7);
    tbodySummary.appendChild(row1);

}

getData();

