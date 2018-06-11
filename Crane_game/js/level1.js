var level1State = {
	
	create: function () {
		//world building / game setup - actually placing the elements
		game.add.sprite(0, 0, 'bg-small');

		crane = game.add.sprite(game.width / 2, 0, 'crane');
        block1 = game.add.sprite(game.width / 2, 200, 'block_level1');
        platform = game.add.sprite(615, 570, 'platform');
        block_placeholder = game.add.sprite(platform.x, platform.y - 120, 'placeholder');
        
		//activate the physics engine in order to move elements and place anchor points
		//takes 2 arguments: object and engine type
		game.physics.enable(crane, Phaser.Physics.ARCADE);
		game.physics.enable(block1, Phaser.Physics.ARCADE);
		game.physics.enable(platform, Phaser.Physics.ARCADE);
        
		crane.anchor.set(0.5, 0.5);
		block1.anchor.set(0.5, 0.5);
        platform.anchor.set(0.5, 0.5);
        
        block1.scale.set(1);
        platform.scale.set(1);
        block_placeholder.anchor.set(0.5);
        block_placeholder.scale.set(1);

		//invoke the games controls
		cursors = game.input.keyboard.createCursorKeys();
        spacebar = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
        
        //set gravity
        game.physics.arcade.gravity.y = 100;
        
        crane.body.allowGravity = false;
        
        block1.body.allowGravity = false;
        block1.body.collideWorldBounds = true;
        block1.body.bounce.y = 0.2;
        block1.body.gravity.y = 200;

        platform.body.allowGravity = false;
        platform.body.collideWorldBounds = true;
        platform.body.static = true;
        platform.body.immovable = true;
        
        block_number = 1;
        up_limit = 150;
        low_limit = 215;
	},
	
	update: function () {

        var hitPlatform = game.physics.arcade.collide(block1, platform);
        
        if (cursors.left.isDown) { 
            switch(block_number) {
                case 1:
                    this.moveLeft(block1);
                    break;
            }
		}
		if (cursors.right.isDown) {
            switch(block_number) {
                case 1:
                    this.moveRight(block1);
                    break;
            }
		}
		if (cursors.up.isDown) {
            switch(block_number) {
                case 1:
                    this.moveUp(block1, up_limit);
                    break;
            }
		}
		if (cursors.down.isDown) {
            switch(block_number) {
                case 1:
                    this.moveDown(block1);
                    break;
            }
		}
        
        if (spacebar.justDown) {
            switch(block_number) {
                case 1:
                    this.dropBlock(block1, '');
                    break;
            }
            
		}  
		
	},

	//Exstra functions
	moveLeft: function (block) {
		if(crane.overlap(block) && block.body.allowGravity == false){
            block.x -= 5;
        }
        if(block.x > 135 || block.body.allowGravity == true){
            crane.x -= 5;
        }
        //scalling 100% to point the element in opposite direction
        crane.scale.x = 1
	},
    
    moveRight: function (block) {
		if(crane.overlap(block) && block.body.allowGravity == false){
		  block.x += 5;
        }
        if(block.x < game.width - 135 || block.body.allowGravity == true){
            crane.x += 5;
        }
        crane.scale.x = -1
	},
    
    moveUp: function (block, up_limit) {
		if(block.y > up_limit || block.body.allowGravity == true){
            crane.y -= 5;
        }
        if(block.y > up_limit && block.body.allowGravity == false){
            block.y -= 5;
        }
        console.log('block y-axis: '+block.y);
        console.log('up_limit: '+up_limit);
        //console.log(block.y);
	},
    
    moveDown: function (block) {
		if(crane.overlap(block) && block.body.allowGravity == false && block.y < low_limit){
            block.y += 5;
        }
        if(block.y < low_limit || block.body.allowGravity == true){
			 crane.y += 5;
        }
        console.log('block y-axis: '+block.y);
        console.log('low_limit: '+low_limit);
	},
    
    dropBlock: function (block, next_block) {
		block.body.allowGravity = true;
        game.time.events.add(3000, function () {
            
        
        if(platform.body.touching.up){
            if(block.x > platform.x - 20 && block.x < platform.x + 20){
                game.camera.y -= 100 ;
                crane.y -= 100;
                up_limit -= 100;
                low_limit -= 100;
                console.log(low_limit);
                console.log(block1.y);
                
                if(next_block.visible == false && next_block != ''){
                    next_block.x = crane.x;
                    next_block.y = crane.y + 320;
                    next_block.visible = true;
                    block_placeholder.y = block.y - 180; 
                    block_number++;
                } else{
                    game.time.events.add(1000, function () {
                        level = 2;
                        game.state.start("menu");
                    });
                }
            } else {
                console.log('block: '+block.x);
                console.log('platform: '+platform.x);
            }
        }
       }); 
	}


}