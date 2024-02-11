$(document).ready(function() {

    var selectedAmenities = {};

    $('input[type="checkbox"]').change(function() {
        var amenityId = $(this).data('id');
        var amenityName = $(this).data('name');

        if ($(this).is(':checked')) {
        selectedAmenities[amenityId] = amenityName;
        } else {
        delete selectedAmenities[amenityId];
        }

        var amenitiesList = Object.values(selectedAmenities).join(', ');
        $('div.Amenities h4').text(amenitiesList || 'No amenities selected');
    });

});
