console.log("airtable demo");

var Airtable = require('airtable');
console.log("Airtable");
var base = new Airtable({apiKey: 'keyDvpfoibL19TD8A'}).base('app68AKsQa0Jgl05p');

base('sneakers').select({
    view: "Grid view"

}).eachPage(function page(records, fetchNextPage) {

    records.forEach(function(record) {
        console.log('Retrieved', record.get('sneaker_name'));
            var sneakerName = document.createElement("h1");
            sneakerName.innerHTML = record.fields.sneaker_name;
            document.body.append(sneakerName);

            console.log(record.fields);

            

    });
 
    fetchNextPage();

}, function done(err) {
    if (err) { console.error(err); return; }




});



