var level1State = {
    create: function() {
        //world building / game setup - actually placing the elements
            game.add.sprite(0, 0, 'bg');
            catcher = game.add.sprite(game.width / 2, game.height / 2, 'catcher');
            cat = game.add.sprite(game.width * Math.random(), game.height * Math.random(), 'cat');
            scoreText = game.add.text(550, 50, 'Score: 0', {font: '20px Arial',fill: '#fff'});
            GameOver = game.add.text(game.width / 2, game.height / 2, '', { fontSize: '40px', fill: 'red' });
            //activate the physics engine in order to move elements and place anchor points
            //takes 2 arguments: object and engine type
            game.physics.enable(catcher, Phaser.Physics.ARCADE);
            game.physics.enable(cat, Phaser.Physics.ARCADE);
            
            cat.anchor.set(0.5, 0.5);
            catcher.anchor.set(0.5, 0.5);
            GameOver.anchor.set(0.5,0.5);
            
            //invoke the games controls
            cursors = game.input.keyboard.createCursorKeys();
        
            //sounds        
            cat_sound = game.add.audio('cat');

        
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
            if(score == 10){
                this.level2();
            }
            //if left arrow key is pressed
            if(cursors.left.isDown && catcher.x > 5){
                catcher.x -= 5;
                //scalling 100% to point the element in opposite direction
                catcher.scale.x = 1
            }
            if(cursors.right.isDown && catcher.x < game.width - 5){
                catcher.x += 5;
                catcher.scale.x = -1
            }
            if(cursors.up.isDown && catcher.y > 5){
                catcher.y -= 5;
            }
            if(cursors.down.isDown && catcher.y < game.height - 5){
                catcher.y += 5;
            }
            
            game.physics.arcade.overlap(catcher, cat, this.catHitHandler);
            
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
    catHitHandler: function() {
        console.log('cat caught');
        score += 1;
        cat_sound.play();
        cat.x = game.width * Math.random();
        cat.y = game.height * Math.random();
        scoreText.text = 'Score: ' + score;
    },
    
    level2: function() {
        game.state.start('splash_2');
    },
    
     lost: function() {
        game.state.start('lost');
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