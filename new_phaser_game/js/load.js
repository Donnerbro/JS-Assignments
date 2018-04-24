var loadState = {
    preload: function() {
        var loadingLabel = game.add.text(80, 150, 'loading...', {font: '30px Courier', fill: '#ffffff'});
        
        //level 1
        game.load.image('bg', 'images/bg.png');
        game.load.image('catcher', 'images/catcher.png');
        game.load.image('cat', 'images/cat.png');
        
        //level 2
        game.load.image('space_bg', 'images/space_bg.png');
        game.load.image('astronaut', 'images/astronaut.png');
        game.load.image('star', 'images/star.png');
        game.load.image('asteroid', 'images/asteroid.png');
        
        //Sounds
        game.load.audio('android', 'sounds/Android.wav');
        game.load.audio('star', 'sounds/star.mp3');
        game.load.audio('cat', 'sounds/cat.wav');
    },
    
    create: function(){
        game.add.sprite(0, 0, 'bg');
        game.state.start('menu');
        
        music = game.add.audio('android');
        music.loop = true;
        music.play();
    }
}