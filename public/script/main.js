$(document).ready(function(){ 
    $('#callBtn').click(function(){
        var num1 =  $("#num1").val(); 
        var num2 =  $("#num2").val(); 
        var numbers = {num1:num1, num2:num2};
        $.get('/adder', numbers, function(data) {
            $("#result").val(data); 
            reset_inputs();
        });
    });
}); 

 function reset_inputs() { // reset inputs
    $("#num1").val('');
    $("#num2").val('');
}       