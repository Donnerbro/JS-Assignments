var bootState = {
	
	preload: function() {
        var loadingLabel = game.add.text(80, 150, 'loading...', {font: '30px Courier', fill: '#ffffff'});
        
        game.load.image('bg', 'images/bg-construct-high.png');
        game.load.image('block1', 'images/block2-bund.png');
        game.load.image('block2', 'images/block2-mid.png');
        game.load.image('block3', 'images/block2-top.png');
        game.load.image('crane', 'images/krog.png');
        game.load.image('platform', 'images/block-start.png');
        game.load.image('placeholder', 'images/block-placeholder.png');
        game.load.image('gameName', 'images/game-name.png');
        
        //Menu 
        game.load.image('worldmap', 'images/worldmap.png');
        game.load.image('sign', 'images/sign.png');
        game.load.image('start', 'images/start-btn.png');
        game.load.image('level_2preview', 'images/finish-1.png');
        
        //before level 1
        game.load.image('fun_fact1', 'images/before-level1.png');
        game.load.image('world', 'images/worldmap.png');
        
        // level 1
        game.load.image('bg-small', 'images/bg-construct.png');
        game.load.image('block_level1', 'images/block1-top.png');
        
         //before level 1
        game.load.image('fun_fact2', 'images/before-level2-eiffel.png');

    },
	
    create: function () {
        game.physics.startSystem(Phaser.Physics.ARCADE)
        game.state.start('splash');
    }
}