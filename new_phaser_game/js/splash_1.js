var splash_1_State = {
    create: function() {
        game.add.sprite(0, 0, 'bg');
        var nameLabel = game.add.text(game.width /2, 120, 'Catch the cat 10 times', {font: '40px Arial', fill: '#ffffff'});
        
        nameLabel.anchor.set(0.5, 0.5);
        
        setTimeout(function () {
            game.state.start("level1");
        }, 4000);
    }
}