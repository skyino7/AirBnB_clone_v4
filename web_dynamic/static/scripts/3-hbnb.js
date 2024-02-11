$(document).ready(function() {

    function handlePlacesResponse(data) {
        var places = data;
        var placesSection = $('.places');
        places.forEach(function(place) {
            var article = $('<article></article>');
            var title = $('<div class="title"><h2>' + place.name + '</h2><div class="price_by_night">$' + place.price_by_night + '</div></div>');
            var information = $('<div class="information"><div class="max_guest">' + place.max_guest + ' Guests</div><div class="number_rooms">' + place.number_rooms + ' Bedrooms</div><div class="number_bathrooms">' + place.number_bathrooms + ' Bathrooms</div></div>');
            var description = $('<div class="description">' + place.description + '</div>');
            article.append(title).append(information).append(description);
            placesSection.append(article);
        });
    }

    function updatedPlace() {
        $.ajax({
            type: 'POST',
            url: 'http://0.0.0.0:5001/api/v1/places_search/',
            contentType: 'application/json',
            data: JSON.stringify({}),
            success: handlePlacesResponse
        });
    }

    updatedPlace();

});
