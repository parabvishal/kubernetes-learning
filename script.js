$(document).ready(function () {
    $.getJSON("/api/", function (result) {
        $("#backend").test(
            result['message']
        );
    });
});