var winState = {
    create: function() {
        game.add.sprite(0, 0, 'space_bg');
        var winLabel = game.add.text(game.width /2, 120, 'YOU WON!', {font: '50px Arial', fill: '#00FF00'});
        
        var startLabel = game.add.text(game.width /2, game.world.height - 120, 'Press space to restart', {font: '25px Arial', fill: '#ffffff'});
        
        winLabel.anchor.set(0.5, 0.5);
        startLabel.anchor.set(0.5, 0.5);
        
        var space_key = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
        
        space_key.onDown.addOnce(this.restart, this);
    },
    
    restart: function() {
        score = 0;
        game.state.start('menu');
    }
}