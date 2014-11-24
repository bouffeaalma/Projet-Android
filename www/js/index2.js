$.getJSON(geocodingAPI, function (data) {

    // Set the variables from the results array
    var boissons = data.results[0].formatted_address;
    console.log('Boissons : ', boisson);
    
    var sandwich = data.results[0].geometry.location.lat;
    console.log('Sandwich : ', Sandwich);
    
    var chauds = data.results[0].geometry.location.lng;
    console.log('Les Chauds : ', Les Chauds);

    // Set the table td text
    $('#boissons').text(boissons);
    $('#sandwich').text(sandwich);
    $('#chauds').text(chauds);
});

// Caching the link jquery object
var $myLink = $('a.myLink');

// Set the links properties
$myLink.prop({
    href: geocodingAPI,
    title: 'Click on this link to open in a new window.'
}).click(function (e) {
    e.preventDefault();
    window.open(this.href, '_blank');
});