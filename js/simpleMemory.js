function SimpleMemory() 
{
 	 this.hiddenPics = Array();
	 this.hiddenCoords = Array();
	 this.pics = Array("images/dvd.gif","images/box.gif","images/hardware.gif","images/gadget.png","images/notifications.gif");
	 this.shownPics = Array("images/dvd.gif","images/hardware.gif");
     this.revilled = Array();
	 this.revilledIndex = Array();
	 this.revPic="";
	 this.inProgress = false;
	 this.timeOut;
     this.revCount=0; 
	
	this.populate =  function(n)
						{
							
							// populates the grid with wall images and calls this.generatePic() to hide a random images inside 
                            // this.hiddenPic 
						var index = "";
					
						for(var i=1;i<=n;i++)
						   {
							
						     for(var x=0;x<=n;x++)
							       {
									
								 index = i+""+x;
								  
								 document.getElementById(index).innerHTML = "<img src='images/wall.gif'  id='"+index+"' alt='wall' />";
								 this.hiddenPics.push("<img src='"+this.generatePic(index)+"' alt='photo' />"); 
									 
							    	}	
						
						    }								
							
							
						}

						this.emptyGrid = function () {
                            // removes all the wall pictures from the grid
						    var index = "";
						    var n = 5;

						    for (var i = 1; i <= n; i++) {

						        for (var x = 0; x <= n; x++) {

						            index = i + "" + x;

						            document.getElementById(index).innerHTML = "";


						        }



						    }
						}


						this.generatePic = function (n) {

                            // generates a random number less than or equal to the number of images in variable
                            // this.pics. It then pushes the generated number in variable this.hiddenCoords
                            // and returns an image  
						    var randNum = Math.floor(Math.random() * this.pics.length);
						    this.hiddenCoords.push(n);
						   
						    return this.pics[randNum];


						}

						this.rev = function (n) {


						    // reveals a hidden picture on index n of the grid
						    for (var i = 0; i < this.hiddenCoords.length; ++i) {

						        if (this.hiddenCoords[i] === n) {

						            $("#" + n).html(this.hiddenPics[i]);
						            this.shownPics.push(this.hiddenPics[i]);
						        }
						    }


						}

						this.countRevealed = function (coord) {


						    this.revCount;
						    try {
						        // if sessionStorage['rev'] is a null object then set revCount to empty

						        this.revCount = parseInt(sessionStorage['rev']);
						    } catch (ex) {
						        this.revCount = "empty";
						        sessionStorage['rev'] = this.revCount;
						    }

						    if (this.revCount == "empty" || this.revCount == 2) {
						        sessionStorage['rev'] = 1;
						        sessionStorage['coord1'] = coord;
						    }
						    else {
						        sessionStorage['rev'] = 2;
						        sessionStorage['coord2'] = coord;
						        this.inProgress = false;
						    }


						}

						this.hide = function () {
						    // It is suppose to clear the revealed images from the grid if there are the same
						    // replace the wall picture if there are not the same

						    //this.revPic.length == 1 this.revPicalert("picRev " + this.shownPics[this.shownPics.length-2].toString() + " getPic " + this.shownPics[this.shownPics.length-1].toString());
						    
						    if ((this.shownPics[this.shownPics.length - 2].toString() != this.shownPics[this.shownPics.length - 1].toString()) && this.revCount == 2) {
						        alert(this.shownPics[this.shownPics.length - 2].toString() == this.shownPics[this.shownPics.length - 1].toString());
                                setTimeout(function () {
						            $("#" + sessionStorage['coord1']).html("<img src='images/wall.gif' alt='wall' />");
						            $("#" + sessionStorage['coord2']).html("<img src='images/wall.gif' alt='wall' />");


						        }, 1000);

						    }
						    else {
						        setTimeout(function () {
						            $("#" + sessionStorage['coord1']).html("");
						            $("#" + sessionStorage['coord2']).html("");
						        }, 1000);
						    }


						    this.inProgress = true;
						}

						this.getPic = function (tdIndex) {
                           
                            // if a hiddenCoords index has the value of tdIndex then at that very index hiddenPics has the picture which
                            // will be revealed when a td with this tdIndex is clicked 
						    for(var i=0;i<this.hiddenCoords.length;i++)
                                  {
						        if (tdIndex === this.hiddenCoords[i])
						            return this.hiddenPics[i];
						    }

						  

						}
					
					
		this.indexOfPic = function(n){
			
			      var picIndex=0;
				  for(var i=0;i<this.hiddenCoords.length;i++)
				         	{
							
							alert("hiddenCoords "+this.hiddenCoords[i]+" n: "+n)
						if(this.hiddenCoords[i]==n)
						  		{
							picIndex = i;
						     	}
						     	else if(i==this.hiddenCoords.length-1)
						     	   {
										
									alert("Could not find match");	
										
									}
								 
							
							
							} 
			
			return picIndex;
					}			
	
} 