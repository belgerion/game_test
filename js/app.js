$(document).ready(function() {
    let gameStart = document.getElementById('gameStart');

    gameStart.addEventListener('click', function(){
        $('#gameStart').addClass('hidden');

        let userX = 8;
        let userY = 24;
        

        for (var i = 1; i <= (userX * userY); i++){
            let random = Math.round(((Math.random() * 10) * 3) / 10);
            $('#gameSpace').append('<div id="hex' + i + '" class="hex col-lg-1">' + i + '<br>Height:' + random + '</div>');
            document.getElementById('hex'+i).style.backgroundImage = "url('board_tiles/BigGrass" + random + ".jpg')";
            console.log(random);
        };
    })
});//https://github.com/belgerion/game_test/blob/master/board_tiles/BigGrass1.jpg?raw=true
