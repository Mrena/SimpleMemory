
var GameController = function () {
    this.playVal;
    this.moments = 0;
    this.sec = 0;
    this.min = 0;
    this.timer;

    this.win = 0;
    this.isWin;
    this.flag = 0;
    this.limit;
    this.reset;
    this.init = true;
    this.timer = "";

    this.countPlay = 0;


    this.refresher = function () {

        window.location = "index.html";


    }





    this.pause = function () {

        clearInterval(this.timer);
        

    }

    this.count = function () {


        this.displayTime();




        this.moments++;
        if (this.moments == 60) {
            this.moments = 0;
            this.sec++;
            if (this.sec == 60) {
                this.sec = 0;
                this.min++;

            }

        }

    }

    this.displayTime = function () {


        if (this.min < 10) {
            this.min = "0" + this.min.toString();
        }
        if (this.sec < 10) {

            this.sec = "0" + this.sec.toString();
        }
        if (this.moments < 10) {
            this.moments = "0" + this.moments.toString();
        }

        document.getElementById("timer").innerHTML = this.min + ":" + this.sec + ":" + this.moments;
        status = this.min + ":" + this.sec + ":" + this.moments;
        if (this.min < 10)
            this.min = parseInt(this.min.charAt(1));
        if (this.sec < 10)
            this.sec = parseInt(this.sec.charAt(1));
        if (this.moments < 10)
            this.moments = parseInt(this.moments.charAt(1));



    }


    this.startGame = function () {
       
            this.timer = setInterval("callCount()", 100);
           
    }


}



var gameC = new GameController();
var simple = new SimpleMemory();
var rowAndColumn = 5;


function callCount(){
gameC.count();   

}





    $(document).ready(function () {
        // when the document is ready we call init to initialize game state
        init();


        $("#road td").click(function () {
            // if the game is in progress a picture can be revealed
            // we can count how many pictures have been revealed
            // and then hide pictures that do not match
            if (simple.inProgress) {
                simple.rev($(this).attr('id'));
                simple.countRevealed($(this).attr('id'));
                simple.hide();
            }
            
        });
    });
    

    function init() {
        simple.populate(rowAndColumn);
        

    }