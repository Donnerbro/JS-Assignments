var menuState = {
    create: function() {
        game.add.sprite(0, 0, 'bg');
        var nameLabel = game.add.text(game.width /2, 120, 'Catch Me If You Can', {font: '50px Arial', fill: '#ffffff'});
        
        var startLabel = game.add.text(game.width /2, game.world.height - 120, 'Press space to start', {font: '25px Arial', fill: '#ffffff'});
        
        nameLabel.anchor.set(0.5, 0.5);
        startLabel.anchor.set(0.5, 0.5);
        
        var space_key = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
        
        space_key.onDown.addOnce(this.start, this);
    },
        
    start: function() {
        game.state.start('splash_1');
    }
}