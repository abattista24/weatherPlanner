$(document).ready(function(){


var pastSearch = document.querySelector(".savedCity");


// Weather Dashboard 
var searchCity =[];
var userInput =$("#search").val();
    console.log(userInput);

    //search area
        //search bar, with button
            $(".btn").on("click", function(e){
                e.preventDefault;
                 // take user input from #search
                var userInput = $("#search").val();
                 console.log (userInput);
                // save user inpup
                 userInput = "" ;// save.localstorage
                //update to current city and 5 day forcast
                // Var userDisplay = ""; //display. userInput
            })
        // Major city side display
        
        

        //click on city
            // becomes current ctiy


    // current city and Day area
        //display searched city 
            //name & current date
            //temperature
            //humidity
            //wind speed
            //uv index
                //color coding
            
    //5 day forcast
        //current date
        //weather picture
        //temp
        //humidity
 });
