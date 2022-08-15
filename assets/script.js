var fetchButton = document.querySelector(".fetchbtn")
var APIKey = '308e27bc851bb1f5720b52c84ffa6ee2';
var city;
var card = document.querySelector('.card');
var api = document.querySelector('.api');
var queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + APIKey;
                
fetchButton.addEventListener('click' , card);
    

            fetch(queryURL)
            .then(response => {
                if (!response.ok) {
                  throw response; //check the http response code and if isn't ok then throw the response as an error
                }
                          
                return response.json(); //parse the result as JSON
              
              }).then(response => {
                //response now contains parsed JSON ready for use
                processWeatherData(response);
              
              }).catch((errorResponse) => {
                if (errorResponse.text) { //additional error information
                  errorResponse.text().then( errorMessage =>  {
                    //errorMessage now returns the response body which includes the full error message
                  })
                } else {
                  //no additional error information 
                } 
              });


console.log(fetchButton)
console.log(queryURL)



























