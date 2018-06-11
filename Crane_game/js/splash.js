var splashState = {

	create: function () {
        game.add.sprite(0, 0, 'worldmap');
		logo = game.add.image(game.world.centerX, 0, 'gameName');
		
		logo.anchor.set(0.5);
		
		tween = game.add.tween(logo).to({
			y: game.world.centerY
		}, 1500, Phaser.Easing.Bounce.Out, true);
		tween.onComplete.add(onComplete, this);

		setTimeout(function () {
			game.state.start("menu");
		}, 5000);
		
		function onComplete() {

    		this.tween = game.add.tween(logo).to( { y: 800 }, 1000, Phaser.Easing.Exponential.Out, true, 2500);

			}
	},

}