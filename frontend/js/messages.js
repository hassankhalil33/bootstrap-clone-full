// Init Variables

// Functions

function getResponse() {
    fetch("http://localhost/fswo5/bootstrap-clone/read-table.php")
    .then((res) => res.json())
    .then(data => {
        console.log(data);
    })
};

// Script

window.addEventListener('load', function () {
    getResponse();
});
