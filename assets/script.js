var fetchButton = document.querySelector(".fetchbtn")
var APIKey = "308e27bc851bb1f5720b52c84ffa6ee2";
var city = document.getElementById('city');
var card = document.querySelector('.card');
var api = document.querySelector('.api');
var tableBody =document.getElementById('weather-table');
var form = document.getElementById("user-form");


form.addEventListener('submit', function (event) {
    event.preventDefault()
    weatherReport()
    localStorage.setItem("city" , JSON.stringify
    (city));
});


function weatherReport() {
    // console.log(queryURL)

    var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city.value + "&appid=" + APIKey;
    fetch(queryURL)
        .then(response => {
            if (!response.ok) {
                throw response; //check the http response code and if isn't ok then throw the response as an error
            }
            // console.log(response)
            return response.json(); //parse the result as JSON

        }).then(data => {
            //response now contains parsed JSON ready for use
            console.log(data.coord.lat, data.coord.lon)
    
            var lon = data.coord.lon
            var lat = data.coord.lat
            var forcastURL = "https://api.openweathermap.org/data/2.5/onecall?lat=" + lat + '&lon=' + lon + '&units=imperial&appid=' + APIKey;
            fetch(forcastURL)
                .then(response => {
                    if (!response.ok) {
                        throw response; //check the http response code and if isn't ok then throw the response as an error
                    }
                    // console.log(response)
                    return response.json(); //parse the result as JSON

                }).then(data => {
                    //response now contains parsed JSON ready for use
                    
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
                    }
                    console.log(data)
                }).catch((errorResponse) => {
                    if (errorResponse.text) { //additional error information
                        errorResponse.text().then(errorMessage => {
                            //errorMessage now returns the response body which includes the full error message
                        })
                    } else {
                        //no additional error information 
                    }
                });
        });
        };








console.log(weatherReport)




























