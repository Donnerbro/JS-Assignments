var menuState = {
	
	create: function () {
		//world building / game setup - actually placing the elements
		game.add.sprite(0, 0, 'worldmap');

        //signs = game.add.group();
        
        //signs.create(50, 470, 'sign');
        //signs.create(360, 200, 'sign');
        //signs.create(650, 470, 'sign');
        
        //signs.inputEnabled = true;
        
        if(level == 1){
            sign1 = game.add.sprite(50, 470, 'sign');
            sign2 = game.add.sprite(360, 200, 'sign');
            sign3 = game.add.sprite(700, 470, 'sign');
        } else if(level == 2){
            level_1_preview = game.add.sprite(100, 420, 'block_level1');
            level_1_preview.scale.set(0.5);
            sign2 = game.add.sprite(360, 200, 'sign');
            sign3 = game.add.sprite(700, 470, 'sign');
        } else if(level == 3){
            level_1_preview = game.add.sprite(100, 420, 'block_level1');
            level_1_preview.scale.set(0.5);
            level_2_preview = game.add.sprite(390, 130, 'level_2preview');
            level_2_preview.scale.set(1);
            sign3 = game.add.sprite(700, 470, 'sign');
        }
        
        /*sign1 = game.add.sprite(50, 470, 'sign');
        sign2 = game.add.sprite(360, 200, 'sign');
        sign3 = game.add.sprite(700, 470, 'sign');
        */
        if(level == 1){
            start = game.add.sprite(150, 500, 'start');
        } else if(level == 2){
            start = game.add.sprite(430, 230, 'start');
        }
		
        //start = game.add.sprite(150, 500, 'start');
        if(level != 3){
            start.inputEnabled = true;
            start.events.onInputOver.add(this.mouseOver, this);
            start.events.onInputOut.add(this.mouseOut, this);
            start.events.onInputDown.add(this.actionOnClick, this);
        }
        //block1.scale.set(1);
        //platform.scale.set(1);

		//invoke the games controls
		//cursors = game.input.keyboard.createCursorKeys();
        //spacebar = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
	},
	
	update: function () {
		
	},
    
    mouseOver: function(item){
        item.alpha = 0.5;
        this.game.canvas.style.cursor = "pointer";
    },
    
    mouseOut: function(item){
        item.alpha = 1;
        this.game.canvas.style.cursor = "default";
    },
    
     actionOnClick: function(item){
        if(level == 1){
            game.state.start("before_level1");
        } else if(level == 2){
            game.state.start("before_level2");
        }
    }
}