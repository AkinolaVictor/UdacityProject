
//this is a pixel art work
// Select color input of your choice
// Select size input to use for this session here

// When size is submitted by the user, call makeGrid()

/*the document must be ready before being used, i mean the DOM*/
$(document).ready(function (){
	//what happens when user clicks submit
	$("#sizePicker").submit(function (theEvent){
		//i dont want the default action of the form to just occur
		theEvent.preventDefault();

	//to set the value of inputHeight and inputWeight to N and M
	var N= $("#inputHeight").val();
	var M= $("#inputWeight").val();
	

	//after clicking on the submit button , call these functions
	makeGrid(N,M);
	useColor();
	});
});

//function to make a grid with the form values
function makeGrid(height, width) {
	//remove 
	$('tr').remove();
//nested for loop for adding rows and columns based on the form value
for (var i = 1; i <= height; i++) {
	$("#pixelCanvas").append("<tr id=use"+i+"></tr>");
	for (var j = 1; j <= width; j++) {
		$("#use"+i).append("<td></td>");

	}
} 
// Your code goes right here!

};
//function for making the cells of the grid equal to the value of the color picker when it is clicked
 function useColor(){
 	 //what happens when a cell is clicked upon
	 $('td').click(function () {

    //extract the current value of the color picker
    var color = $('#colorPicker').val();

    //check for style attribute and remove or add it.
    if ($(this).attr('style')) {
      $(this).removeAttr('style');
    } else {
      $(this).attr('style', 'background-color:' + color);
    }
  });
};
