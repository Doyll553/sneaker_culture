

console.log("airtable demo");

var Airtable = require('airtable');
console.log("Airtable");
var base = new Airtable({apiKey: 'keyDvpfoibL19TD8A'}).base('app68AKsQa0Jgl05p');

let sneakersRegular = [];
base('sneakers').select({
    view: "Grid view"

}).eachPage(function page(records, fetchNextPage) {

    records.forEach(function(record) {
        console.log('Retrieved', record.get('sneaker_name'));
            var sneakerName = document.createElement("h1");
            sneakerName.innerHTML = record.fields.sneaker_name;
            document.body.append(sneakerName);
            sneakersRegular.push(record);
            console.log(record.fields);
    });
 
    fetchNextPage();

}, function done(err) {
    if (err) { console.error(err); return; }




});

let sneakersRetail = [];
base('sneakers').select({
    view: "retail_high_to_low"

}).eachPage(function page(records, fetchNextPage) {

    records.forEach(function(record) {
        // console.log('Retrieved', record.get('sneaker_name'));
        //     var sneakerName = document.createElement("h1");
        //     sneakerName.innerHTML = record.fields.sneaker_name;
            // document.body.append(sneakerName);
            sneakersRetail.push(record);
            console.log(record.fields);

    });
    fetchNextPage();

}, function done(err) {
    if (err) { console.error(err); return; }




});

        addEventListener

/* globals require */
// console.log("Hello, Airtable");

// // load the airtable library, call it "Airtable"
// var Airtable = require("airtable");

// // use the airtable library to get a variable that represents one of our bases
// // We needed to put in the right apiKey and
// // base ID here!
// var base = new Airtable({ apiKey: "keyDvpfoibL19TD8A" }).base(
//   "app68AKsQa0Jgl05p"
// );

// // Get the "songs" table from the base, specify the view to be "View 2" (which is FILTERED for indie songs and SORTED by rating) and specify the callback functions that will receive each page of data
// base("sneakers").select({
//   // add your view in here
//   view: "Grid view"
// }).eachPage(gotPageOfData, gotAllData);

// // an empty array to hold our people data
// let sneakers = [];

// let originalSneakers = [];

// // callback function that receives each page of data (considered here as records) and adds them to our list of songs
// function gotPageOfData(records, fetchNextPage) {
//   console.log("gotPageOfData()");
//   console.log("There are "+records.length+" items in records");
//   // This takes the list of records and add them to the songs array
//   sneakers.push(...records);
//   // request more pages
//   fetchNextPage();
// }

// // call back function that is called when ALL pages are loaded
// function gotAllData(err) {
//   console.log("gotAllData()");

//   // report an error, you'd want to do something better than this in production
//   if (err) {
//     console.log("error loading data");
//     console.error(err);
//     return;
//   }

//   // call function to show the data
//   showData();

//   //record the original order of our data
//   originalSneakers = sneakers;
// }

// // show the data on the page
// function showData() {
//   console.log("showData()");

//   // find the shelf element
//   const sneakersContainer = document.querySelector("#container");

//   // loop through all the people listed in the Airtable data. Inside is the code we are applying for EACH person in the list of people.
//   sneakers.forEach((sneaker) => {

//     // Print out what a single songs's data feidls looks like
//     console.log("SHOWING THE SNEAKERS")
//     console.log(sneaker.fields);


//     /** CREATE CONTAINER */
//     const sneakersContainer = document.createElement("div");
//     sneakersContainer.classList.add("sneakersContainer");

//     /*******************
//     ADD THE TITLE
//     *******************/

//     const titleElement = document.createElement("h1");
//     titleElement.innerText = sneakers.fields.sneaker_name;
//     sneakersContainer.appendChild(titleElement);
    
//     /*******************
//     ADD ARTIST TITLE
//     *******************/

//     const retailElement = document.createElement("p");
//     retailElement.innerText = sneakers.fields.retail_price;
//     songContainer.appendChild(retailElement);

//     /*******************
//     ADD SONG RATING
//     *******************/

//     let resaleElement = document.createElement("p");
//     resaleElement.innerText = "Rating: "+ sneakers.fields.current_resell_price;
    
//     sneakersContainer.appendChild(resaleElement);


//     /*******************
//     ADD GENRES
//     *******************/

//     let designerElement = song.fields.designer;

//     designer.forEach(function(designer){
//       const designerElement = document.createElement("span");
//       designerElement.classList.add("genreTag");
//       designerElement.innerText = genre;
//       sneakersContainer.appendChild(designerElement);
//       // TODO: Add this genre name as a class to the songContainer

//       sneakersContainer.classList.add(designer);

//     });


//     /***********
//      TODO: CREATE FILTER-BY-GENRE FUNCTIONALITY
//      **********/

//      let classicalButton = document.getElementById('showClassicalButton');
//     classicalButton.addEventListener("click", function(){
//       if (songContainer.classList.contains('classical')){
//         songContainer.style.display = "block";
//       } else {
//         songContainer.style.display = "none";
//       }
//     });
     
//     let indieButton = document.getElementById('showIndieButton');
//     indieButton.addEventListener("click", function(){
//       if (songContainer.classList.contains('indie')){
//         songContainer.style.display = "block";
//       } else {
//         songContainer.style.display = "none";
//       }
//     });

//     let dreampopButton = document.getElementById('showDreampopButton');
//     dreampopButton.addEventListener("click", function(){
//       if (songContainer.classList.contains('dreampop')){
//         songContainer.style.display = "block";
//       } else {
//         songContainer.style.display = "none";
//       }
//     });
//     let popButton = document.getElementById('showPopButton');
//     popButton.addEventListener("click", function(){
//       if (songContainer.classList.contains('pop')){
//         songContainer.style.display = "block";
//       } else {
//         songContainer.style.display = "none";
//       }
//     });

//     let resetButtton = document.getElementById('resetButton');
//     resetButtton.addEventListener("click", function(){
//         songContainer.style.display = "block";

//         //Reset the songs to the original
//         songsContainer.innerHTML = "";
//         songs = originalSongs;
//         showData();
//     });

//     songsContainer.appendChild(songContainer);

//   });
// }

// let sortHighLow = document.getElementById('sortHighLow');
// sortHighLow.addEventListener("click", function(){
//     // Clear the container div (remove all the previous elements)
//     const songsContainer = document.querySelector("#container");
//     songsContainer.innerHTML = "";
//     // Sort the songs array according to rating from high to low
//     sortRatingHighLow();
//     showData();
// });


// function sortRatingHighLow(){
//   songs.sort(function(a, b) {
//     // For any two songs in the songs array, compare them by their rating number
//     return b.fields.rating - a.fields.rating;
//   });
// }


// let sortLowHigh = document.getElementById('sortLowHigh');
// sortLowHigh.addEventListener("click", function(){
//     // Clear the container div (remove all the previous elements)
//     const songsContainer = document.querySelector("#container");
//     songsContainer.innerHTML = "";
//     // Sort the songs array according to rating from low to high
//     sortRatingLowHigh();
//     showData();
// });


// function sortRatingLowHigh(){
//   songs.sort(function(a, b) {
//     // For any two songs in the songs array, compare them by their rating number
//     // (NOTE THE ORDER HAS SWITCHED)
//     return a.fields.rating - b.fields.rating;
//   });
// }








