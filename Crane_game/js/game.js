//initializing a  new game
var game = new Phaser.Game(800, 600, Phaser.CANVAS, '');

var cursors;
var crane, block1, block2, block3, spacebar, platform, moveLeft, block, block_number, up_limit, space_check, camera_check;


//Adding each state
game.state.add('boot', bootState);
//game.state.add('menu', bootState);
game.state.add('before_level1', before1State);
game.state.add('level1', level1State);
//game.state.add('menu', bootState);
game.state.add('before_level2', before2State);
game.state.add('level2', level2State);
//game.state.add('menu', bootState);

//Call first state
game.state.start('boot');