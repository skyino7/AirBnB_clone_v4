$(document).ready(function() {

    function updateAPIStatus() {
        $.get('http://0.0.0.0:5001/api/v1/status/', function(data) {
            if (data.status === 'OK') {
                $('#api_status').addClass('available');
            } else {
                $('#api_status').removeClass('available');
            }
        }).fail(function() {
            $('#api_status').removeClass('available');
        });
    }

    // Initial call to update API status
    updateAPIStatus();

    // Interval to periodically update API status
    setInterval(updateAPIStatus, 5000);
});
