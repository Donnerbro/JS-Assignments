var level2State = {
    create: function() {
        //world building / game setup - actually placing the elements
            game.add.sprite(0, 0, 'space_bg');
            astronaut = game.add.sprite(game.width / 2, game.height / 2, 'astronaut');
            star = game.add.sprite(game.width * Math.random(), game.height * Math.random(), 'star');
            
            asteroid1 = game.add.sprite(game.width + (game.width * Math.random()), game.height + (game.height * Math.random()), 'asteroid');
        
            asteroid2 = game.add.sprite(game.width + (game.width * Math.random()), game.height + (game.height * Math.random()), 'asteroid');
        
            asteroid3 = game.add.sprite(game.width + (game.width * Math.random()), game.height + (game.height * Math.random()), 'asteroid');
            
            asteroid4 = game.add.sprite(game.width + (game.width * Math.random()), game.height + (game.height * Math.random()), 'asteroid');
            
            asteroid5 = game.add.sprite(game.width + (game.width * Math.random()), game.height + (game.height * Math.random()), 'asteroid');
            

            scoreText = game.add.text(550, 50, 'Score: '+score, {font: '20px Arial',fill: '#fff'});
            GameOver = game.add.text(game.width / 2, game.height / 2, '', { fontSize: '40px', fill: 'red' });
            //activate the physics engine in order to move elements and place anchor points
            //takes 2 arguments: object and engine type
            game.physics.enable(astronaut, Phaser.Physics.ARCADE);
            game.physics.enable(star, Phaser.Physics.ARCADE);
            game.physics.enable(asteroid1, Phaser.Physics.ARCADE);
            game.physics.enable(asteroid2, Phaser.Physics.ARCADE);
            game.physics.enable(asteroid3, Phaser.Physics.ARCADE);
            game.physics.enable(asteroid4, Phaser.Physics.ARCADE);
            game.physics.enable(asteroid5, Phaser.Physics.ARCADE);
            
            star.anchor.set(0.5, 0.5);
            astronaut.anchor.set(0.5, 0.5);
            GameOver.anchor.set(0.5,0.5);
            
            //invoke the games controls
            cursors = game.input.keyboard.createCursorKeys();
            
            star_sound = game.add.audio('star');
        
            //Timer
            timer = game.time.create();

            // Create a delayed event 1m and 30s from now
            timerEvent = timer.add(Phaser.Timer.SECOND * countDown, this.endTimer, this);

            // Start the timer
            timer.start();

            text = game.add.text(game.width - 80, game.height - 80, this.formatTime(Math.round((timerEvent.delay - timer.ms) / 1000)), 
                                 { font: "30px Arial", fill: "#ff0044", align: "center" });
        
            text.anchor.set(0.5);

            this.scoreLabelTween = game.add.tween(text.scale).to({ x: 1.2, y: 1.2}, 2000, Phaser.Easing.Linear.In);
    },
        
    update: function() {
        // run the game loop
            if(score == 20){
                this.Win();
            }
            //if left arrow key is pressed
            if(cursors.left.isDown && astronaut.x > 5){
                astronaut.x -= 5;
                //scalling 100% to point the element in opposite direction
                astronaut.scale.x = 1
            }
            if(cursors.right.isDown && astronaut.x < game.width - 5){
                astronaut.x += 5;
                astronaut.scale.x = -1
            }
            if(cursors.up.isDown && astronaut.y > 5){
                astronaut.y -= 5;
            }
            if(cursors.down.isDown && astronaut.y < game.height - 5){
                astronaut.y += 5;
            }
            
            game.physics.arcade.overlap(astronaut, star, this.starHitHandler);
            game.physics.arcade.overlap(astronaut, asteroid1, this.asteroidHitHandler);
            game.physics.arcade.overlap(astronaut, asteroid2, this.asteroidHitHandler);
            game.physics.arcade.overlap(astronaut, asteroid3, this.asteroidHitHandler);
            game.physics.arcade.overlap(astronaut, asteroid4, this.asteroidHitHandler);
            game.physics.arcade.overlap(astronaut, asteroid5, this.asteroidHitHandler);
        
            asteroid1.x -= 8;
            asteroid1.y -= 8;
            asteroid2.x -= 5;
            asteroid2.y -= 5;
            asteroid3.x -= 7;
            asteroid3.y -= 7;
            asteroid4.x -= 6;
            asteroid4.y -= 6;
            asteroid5.y -= 4;
            asteroid5.y -= 4;
            
            
            if(asteroid1.x < 0 || asteroid1.y < 0){
                asteroid1.x = game.width + (game.width * Math.random());
                asteroid1.y = game.height + (game.height * Math.random());
            }
            if(asteroid2.x < 0 || asteroid2.y < 0){
                asteroid2.x = game.width + (game.width * Math.random());
                asteroid2.y = game.height + (game.height * Math.random());
            }
            if(asteroid3.x < 0 || asteroid3.y < 0){
                asteroid3.x = game.width + (game.width * Math.random());
                asteroid3.y = game.height + (game.height * Math.random());
            }
            if(asteroid4.x < 0 || asteroid4.y < 0){
                asteroid4.x = game.width + (game.width * Math.random());
                asteroid4.y = game.height + (game.height * Math.random());
            }
            if(asteroid5.x < 0 || asteroid5.y < 0){
                asteroid5.x = game.width + (game.width * Math.random());
                asteroid5.y = game.height + (game.height * Math.random());
            }
        
            //Timer
            var tmp = this.formatTime(Math.round((timerEvent.delay - timer.ms) / 1000));
 
            if (timer.running && tmp >= 1) {
              text.text = this.formatTime(Math.round((timerEvent.delay - timer.ms) / 1000));
              this.scoreLabelTween.start();
            }
        
            if(tmp <= 0){
                this.lost()
            }
    },
    
    //Exstra functions
    starHitHandler: function() {
        console.log('star caught');
        score += 1;
        star_sound.play();
        star.x = game.width * Math.random();
        star.y = game.height * Math.random();
        scoreText.text = 'Score: ' + score;
    },
    
    asteroidHitHandler: function() {
        console.log('HIT');
        game.state.start('lost');
    },
    
    Win: function() {
        game.state.start('win');
    },
    
    //Timer functions
    render: function () {
        // If our timer is running, show the time in a nicely formatted way, else show 'Done!'
        if (!timer.running) {
            text.kill();
        }
    },
    endTimer: function() {
        // Stop the timer when the delayed event triggers
        timer.stop();
    },
    formatTime: function(s) {
        // Convert seconds (s) to a nicely formatted and padded time string
        var minutes = "0" + Math.floor(s / 60);
        var seconds = "" + (s - minutes * 60);
        return seconds.substr(-2);   
    }
        
}