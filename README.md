# Weather-Dashboard
* This weather Dashboard project has features to search bar for city,state location to provide the current weather,location,Temperature,Humidity,Wind Speed, UV index

## Summary

- HTML and CSS,Javascript and Bootstrap documents create a weather application
- This project use of using an API call and JQuery to make changes to an HMTL document
- This project make use of appending HTML pages


## Image
 ![alt text](https://lh3.googleusercontent.com/yzL7aPhT8iGXoRfJE3IBQh5L8q_hbRMoaQZEZyHq-hlknk5nzpVEaSUfOO_1W6le8rLwhA=s600)

## Code Snippet
- HTML
       
       <div class="container-fluid">
        <div class="card">
            <div class="card-body text-center bg-dark text-white">
                <h1>Weather Dashboard</h1>
            </div>
        </div>

        <div class="container-fluid">
            <div class="row">
                <div class="col-4 bg-light">
                    <p class="search-header mb-2 text-center">Search For A City</p>
                    <div class="input-group mb-3">
                        <input type="text" class="form-control searchInput" id="searchInput"
                            placeholder="Enter city name" aria-label="Enter city name"
                            aria-describedby="searchButton">
                        <div class="input-group-append">
                            <button class="searchButton btn btn-outline-secondary bg-primary " type="button"
                                id="searchButton"><i class="fas fa-search"></i></button>


 
 
 
 
 
 
 
 
- Javascript
    
          i $("#searchButton").on("click", searchWeather);
       var searchInput = $("#searchInput");
       // API key
       var APIKEY="bc0a3b94be4fd3f7064fb436fc2e3222";
          function searchWeather() {

        console.log(searchInput.val());
        // add to history
        addHistory(searchInput.val());
       var cityName=searchInput.val();
        var weatherAPIurl="https://api.openweathermap.org/data/2.5/weather?q="+cityName+"&appid="+APIKEY;
    
        $.ajax({
        url:weatherAPIurl,
        method:"GET",
         }).then(function(response){
        console.log(response);
    







## Author Links
* [GitHub](https://github.com/AbuyeM1/Weather-Dashboard) <br>
* [GitHub.io](https://abuyem1.github.io/Weather-Dashboard/) <br>
* [LinkedIn](https://www.linkedin.com/in/abuye-mamuye-5a49921b0/)
