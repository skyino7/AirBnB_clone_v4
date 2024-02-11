$(document).ready(function() {

    const amenities = {};
    $('input[type="checkbox"]').change(function() {
        if ($(this).is(':checked')) {
            amenities[$(this).data('id')] = $(this).data('name');
        } else {
            delete amenities[$(this).data('id')];
        }
        const amenitiesList = Object.values(amenities).join(', ');
        $('.amenities h4').text(amenitiesList || 'None');
    });

    function updatePlace() {
    $.ajax({
        type: 'POST',
        url: 'http://0.0.0.0:5001/api/v1/places_search/',
        contentType: 'application/json',
        data: JSON.stringify({
            amenities: checkAmenities
        }),
            success: function (data) {
                $('.places').empty();
                data.forEach(function (place) {
                    $('.places').append('<article><div class="title"><h2>' + place.name + '</h2><div class="price_by_night">$' + place.price_by_night + '</div></div><div class="information"><div class="max_guest">' + place.max_guest + ' Guests</div><div class="number_rooms">' + place.number_rooms + ' Bedrooms</div><div class="number_bathrooms">' + place.number_bathrooms + ' Bathrooms</div></div><div class="description">' + place.description + '</div></article>');
                });
            },
            error: function () {
                console.log("Error: Can't load places");
            }
        });
    }

    $('.filters button').click(updatePlace);

});