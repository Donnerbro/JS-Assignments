//initializing a  new game
var game = new Phaser.Game(800, 600, Phaser.CANVAS, '');

var cursors;
var cat, catcher, cursors, scoreText, GameOver;
var score = 0;

var level = 'level_1';

var timer, timerEvent, text;
var countDown = 30;

//Adding each state
game.state.add('boot', bootState);
game.state.add('load', loadState);
game.state.add('menu', menuState);
game.state.add('splash_1', splash_1_State);
game.state.add('level1', level1State);
game.state.add('splash_2', splash_2_State);
game.state.add('level2', level2State);
game.state.add('win', winState);
game.state.add('lost', lostState);

//Call first state
game.state.start('boot');