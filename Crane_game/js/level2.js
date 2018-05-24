var level2State = {
	
	create: function () {
		//world building / game setup - actually placing the elements
		game.add.sprite(0, 0, 'bg');
        game.world.setBounds(0, 0, 800, 1200);
		crane = game.add.sprite(game.width / 2, 500, 'crane');
        game.camera.y = 560;
        
        /*blocks = game.add.group();
        blocks.enableBody = true;
        blocks.x = game.width / 2;
        blocks.y = 300;*/
        
        block1 = game.add.sprite(crane.x, crane.y + 250, 'block1');
        block2 = game.add.sprite(crane.x, crane.y + 250, 'block2');
        block3 = game.add.sprite(crane.x, crane.y + 250, 'block3');
        
        //block = game.add.sprite(game.width / 2, 200, 'block');
        platform = game.add.sprite(615, 1125, 'platform');
        block_placeholder = game.add.sprite(platform.x, platform.y - 120, 'placeholder');
        
		//activate the physics engine in order to move elements and place anchor points
		//takes 2 arguments: object and engine type
		game.physics.enable(crane, Phaser.Physics.ARCADE);
		game.physics.enable(block1, Phaser.Physics.ARCADE);
		game.physics.enable(block2, Phaser.Physics.ARCADE);
		game.physics.enable(block3, Phaser.Physics.ARCADE);
		game.physics.enable(platform, Phaser.Physics.ARCADE);
        
		crane.anchor.set(0.5, 0.5);
        
        platform.anchor.set(0.5, 0.5);
        platform.scale.set(1);
        block_placeholder.anchor.set(0.5, 0.5);
        block_placeholder.scale.set(1);

		//invoke the games controls
		cursors = game.input.keyboard.createCursorKeys();
        spacebar = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
        
        //set gravity
        game.physics.arcade.gravity.y = 100;
        
        crane.body.allowGravity = false;
        
        block1.anchor.setTo(0.5,0.5);
        block1.scale.set(1);
        block1.body.allowGravity = false;
        block1.body.collideWorldBounds = true;
        block1.body.bounce.y = 0.2;
        block1.body.gravity.y = 200;
        
        block2.anchor.setTo(0.5,0.5);
        block2.scale.set(1);
        block2.body.allowGravity = false;
        block2.body.collideWorldBounds = true;
        block2.body.bounce.y = 0.2;
        block2.body.gravity.y = 200;
        block2.visible = false;
        
        block3.anchor.setTo(0.5,0.5);
        block3.scale.set(1);
        block3.body.allowGravity = false;
        block3.body.collideWorldBounds = true;
        block3.body.bounce.y = 0.2;
        block3.body.gravity.y = 200;
        block3.visible = false;

        platform.body.allowGravity = false;
        platform.body.collideWorldBounds = true;
        platform.body.static = true;
        platform.body.immovable = true;
        
        block_number = 1;
        up_limit = 640;
        low_limit = 750;
	},
	
	update: function () {
        
        //console.log('crane: '+crane.y);
        //console.log('block_3: '+block3.y);
        //console.log('block_2: '+block2.y);
        //console.log('block_1: '+block1.y);
        
        var hitPlatform = game.physics.arcade.collide(block1, platform);
        var hitPlatform = game.physics.arcade.collide(block2, block1);
        var hitPlatform = game.physics.arcade.collide(block3, block2);
        
        if (cursors.left.isDown) { 
            switch(block_number) {
                case 1:
                    this.moveLeft(block1);
                    break;
                case 2:
                    this.moveLeft(block2);
                    break;
                case 3:
                    this.moveLeft(block3);
                    break;
            }
		}
		if (cursors.right.isDown) {
            switch(block_number) {
                case 1:
                    this.moveRight(block1);
                    break;
                case 2:
                    this.moveRight(block2);
                    break;
                case 3:
                    this.moveRight(block3);
                    break;
            }
		}
		if (cursors.up.isDown) {
            switch(block_number) {
                case 1:
                    this.moveUp(block1, up_limit);
                    break;
                case 2:
                    this.moveUp(block2, up_limit);
                    break;
                case 3:
                    this.moveUp(block3, up_limit);
                    break;
            }
		}
		if (cursors.down.isDown) {
            switch(block_number) {
                case 1:
                    this.moveDown(block1);
                    break;
                case 2:
                    this.moveDown(block2);
                    break;
                case 3:
                    this.moveDown(block3);
                    break;
            }
		}
        
        if (spacebar.justDown) {
            switch(block_number) {
                case 1:
                    this.dropBlock(block1, block2);
                    break;
                case 2:
                    this.dropBlock(block2, block3);
                    break;
                case 3:
                    this.dropBlock(block3, '');
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
        if(block.y > up_limit){
            block.y -= 5;
        }
        console.log('block y-axis: '+block.y);
        console.log('low_limit: '+low_limit);
        //console.log(block.y);
	},
    
    moveDown: function (block) {
		if(crane.overlap(block) && block.body.allowGravity == false && block.y < low_limit){
            block.y += 5;
        }
        if(block.y < low_limit){
			 crane.y += 5;
        }
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
                }
            } else {
                console.log('block: '+block.x);
                console.log('platform: '+platform.x);
            }
        }
       }); 
	}
}