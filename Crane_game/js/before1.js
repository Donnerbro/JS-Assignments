var before1State = {
	create: function () {
		game.add.sprite(0, 0, 'world');
		fun_fact = game.add.sprite(0, 0, 'fun_fact1');
        
		
		tween = game.add.tween(fun_fact).to( { alpha: 1 }, 3000, "Linear", true, 0, -1);
		tween.yoyo(true, 1000);

		setTimeout(function () {
			game.state.start("level1")
		}, 7000);
	},
}// JavaScript Document