

var Leaderboard = function () {
    this.scores = Array();
    this.names = Array();
    this.highScore = 0;
    this.numberOfScores = 0;
    this.tempIndex = -1;
    this.tempScore = -1;

    this.init = function(){
        this.getScores();
        this.getNames();
        this.getHighScore();
        this.getNumberOfScores();



    }

    this.getScores = function () {
        try {
            this.scores = parseInt(JSON.parse(localStorage['scores']));
        }
        catch (ex) {
            this.scores = {
                1: 0,
                2: 0,
                3: 0,
                4: 0,
                5: 0
            };

            localStorage['scores'] = JSON.stringify(this.scores);
        }

    }

    this.getNames = function(){
        
         try {
            this.names = JSON.parse(localStorage['names']);
        }
        catch (ex) {
            this.names = {
                1: "Teddy Roxpin",
                2: "Ritz Raynolds",
                3: "Hannibal King",
                4: "Iman Omari",
                5: "Sir Michael Rocks"
            };

            localStorage['names'] = JSON.stringify(this.names);
        }


    }

    this.getHighScore = function () {
        $.each(this.scores, function (index, value) {
            if (this.highScore < value)
                this.highScore = value;

        });

    }

    this.getNumberOfScores = function(){
        
        this.numberOfScores = this.scores.length; 
    }

    this.checkForHighScore = function(score){
        
        
        $.each(this.scores,function(index,value){
            if(score>value)
            this.tempIndex = index;

        });
       if(this.tempIndex != -1)
       {
        this.tempScore = score;
        var eventClick = $.Event('click');
        $("#highscoredialog").trigger(eventClick);

        }
        
    }

    this.setHighScore = function(name){
        this.names[this.tempIndex] = name;
        this.scores[this.tempIndex] = this.tempScore;

        localStorage['scores'] = JSON.stringify(this.scores);
        localStorage['names'] = JSON.stringify(this.names);

        this.tempIndex = -1;
        this.tempScore = -1;

    }

    this.displayLeaderboard = function(){
        
        $("#leaderboard").append("<div class'ui-grid-a'>");
        $("#leaderboard").append("<div class'ui-block-a'>Name</div><div class='ui-block-b'>Score</div>");
        $.each(this.scores,function(index,value){
            
            $("#leaderboard").append("<div class'ui-block-a'>"+this.names[index]+"</div><div class='ui-block-b'>"+value+"</div>")
        });
        $("#leaderboard").append("</div>");
    }


    }








}