$(document).ready(function(){

var date = moment().format('l');
var apiKey = "2438514b47bcb93a29fc4d3ba5ba4849";


var city ="";


// var pastSearch = document.querySelector(".savedCity");


// Weather Dashboard 
var days = [".day1", ".day2",".day3",".day4",".day5",]
var searchCity =[];
// var userInput =$("#search").val();
//     console.log(userInput);

//search area
  //search bar, with button
$(".btn").on("click", function(){
  
 // take user input from #search & save it
  console.log("click");
  // var weatherApi = "" ;
  var userInput = $(".city").val();
  console.log(userInput);
   // save user input
  // localStorage.setItem(weatherApi.city);
  todaysWeather(userInput);

  
  // var userInput = $("#search").val();
  // console.log (userInput);
               
                //  userInput = "" ;// save.localstorage
                //update to current city and 5 day forcast
                // Var userDisplay = ""; //display. userInput
})
        // Major city side display
        
        var weatherURL = "https://api.openweathermap.org/data/2.5/weather?q="+"denver"+"&appid=" + apiKey + "&units=imperial";
        console.log(weatherURL);
      $.ajax({
        type: "GET",
        url: weatherURL,
        dataType: "json",
        success: function (response){
          console.log(response)
          var wind = $("<p>").addClass("card-text").text(response.wind.speed);
          var temp = $("<p>").addClass("card-text").text(response.main.temp);
          var humidity =$("<p>").addClass("card-text").text (response.main.humidity)
          var cityName = $("<h2>").addClass("card-title").text(response.name+new Date().toLocaleDateString())
          $(".place").append(cityName,temp,wind,humidity);
        }
        
      })
function todaysWeather(userInput){


// .then(function (response){
// console.log (response);

// })



}
        
        

        //click on city
            // becomes current ctiy


    // current city and Day area
        //display searched city 
        // var currentCity = $(userInput).val(localStorage.getItem);
        //     //name & current date
        //   function currentCity (){};
          
        // $.ajax({url: queryURl, success: function(result){
        //   console.log(result)
        // }});
  
          
            //temperature
            //humidity
            //wind speed
            //uv index
                //color coding
            
    //5 day forcast
    // for ("days", function(){
    //   var i=0;i < days.length; i++;
    // });
  //current date
  // var currentDate = [i].text(date);
        //weather picture
        //temp
        //humidity
 });
