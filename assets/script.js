var fetchButton = document.querySelector(".fetchbtn")
const api = 'f18d365e081872f946b3849bff8f041f';

window.addEventListener('load', (event) => {
    event.preventDefault();
    let long;
    let lat;
    // Accesing Geolocation of User
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
            // Storing Longitude and Latitude in variables
            long = position.coords.longitude;
            lat = position.coords.latitude;
            const base = 'api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}';

            fetch(base)
                .then((response) => {
                    return response.json();
                })
                .then(function (data) {
                    console.log(data)
                    //Loop over the data to generate a table, each table row will have a link to the repo url
                    for (var i = 0; i < data.length; i++) {
                        // Creating elements, tablerow, tabledata, and anchor
                        var createTableRow = document.createElement('tr');
                        var tableData = document.createElement('td');
                        var link = document.createElement('a');

                        // Setting the text of link and the href of the link
                        link.textContent = data[i].html_url;
                        link.href = data[i].html_url;

                        // Appending the link to the tabledata and then appending the tabledata to the tablerow
                        // The tablerow then gets appended to the tablebody
                        tableData.appendChild(link);
                        createTableRow.appendChild(tableData);
                        tableBody.appendChild(createTableRow);
           }   });
        });
    }
});




fetchButton.addEventListener('click', base);
base.preventDefault();



























