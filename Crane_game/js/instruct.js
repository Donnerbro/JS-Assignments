var instructState = {
    create: function() {
		game.add.sprite(0, 0, 'bg');
		
		var titleShadow = game.add.text(33 , 53, 'Kitten Catcher', {
			font: "55px Poppins",
			fill: "#000000"
		});
		
		 var title = game.add.text(30 , 53, 'Kitten Catcher', {
			font: "55px Poppins",
			fill: "#ffffff"
		});     
		
        game.add.text(30, game.world.height - 80, 'press space to start', {
			font: '25px Poppins', 
			fill: '#ffffff'
		});
        
        var space_key = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
        
        space_key.onDown.addOnce(this.start, this);
    },
        
    start: function() {
        game.state.start('before1');
    }
}