$(document).ready(function() {
    function generateMap(){
        let userX = 8;
        let userY = 12;

        for (var i = 1; i <= (userX * userY); i++){
            $('#gameSpace').append('<div id="hex' + i + '" class="hex col-lg-1">' + i + '</div>');
        };
    };
    generateMap();
});