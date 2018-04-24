var splash_2_State = {
    create: function() {
        game.add.sprite(0, 0, 'space_bg');
        var nameLabel1 = game.add.text(game.width /2, 120, 'Catch the star 10 times', {font: '40px Arial', fill: '#ffffff'});
        
        var nameLabel2 = game.add.text(game.width /2, 160, 'Avoid the asteroids', {font: '40px Arial', fill: '#ffffff'});
        
        nameLabel1.anchor.set(0.5, 0.5);
        nameLabel2.anchor.set(0.5, 0.5);
        
        setTimeout(function () {
            level = 'level_2';
            game.state.start("level2");
        }, 4000);
    }
}