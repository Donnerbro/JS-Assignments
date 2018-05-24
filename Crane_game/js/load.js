var loadState = {
    preload: function() {
        var loadingLabel = game.add.text(80, 150, 'loading...', {font: '30px Courier', fill: '#ffffff'});
        
        game.load.image('bg', 'images/bg.png');
        game.load.image('catcher', 'images/catcher.png');
        game.load.image('cat', 'images/cat.png');
    },
    
    create: function(){
        game.state.start('menu');
    }
}