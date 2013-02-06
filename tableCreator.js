// Table Creator
var Table = function()
   {
	
	this.init = function(width,height){
		
		
					document.write("<table border='4'>");
						for(var i=0;i<height;i++)
						      		{
								document.write("<tr>");
								for(var x=0;i<width;x++)
								           	{
											
									document.write("<td>"+ x+" </td>");		
											
											}
								
								document.write("</tr>");
									}
									
								document.write("</table>");	
		
							}
	
	
	
	
	
}