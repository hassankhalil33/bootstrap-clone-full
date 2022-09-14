// Init Variables
const tableBody = document.querySelector(".tbody");

// Functions

function getResponse() {
    fetch("http://localhost/fswo5/bootstrap-clone/read-table.php")
    .then((res) => res.json())
    .then(data => {
        console.log(data);

        let output = "";
        for(let i in data) {
            output += `<tr>
                <td>${data[i].id}</td>
                <td>${data[i].name}</td>
                <td>${data[i].email}</td>
                <td>${data[i].phone}</td>
                <td class="table-wrap">${data[i].message}</td>
            </tr>`;
        }

        tableBody.innerHTML = output;
    })
};

// Script

window.addEventListener('load', function () {
    getResponse();
});
