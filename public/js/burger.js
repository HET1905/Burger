$(function(){
    $('.btnSubmit').on('click',function(){
        
        // alert($('#txtIput').val());

        let newBurger = {
            burger_name:$('#txtIput').val().trim(),
            devoured:0
        }

        $.ajax("/api/burgers",{
            type:'POST',
            data:newBurger
        }).then(function(){
            console.log("Burger added....");
            location.reload();
        });

        
    });
    $('.btnDevoured').on('click',function(){
        // alert('on devoured...');
        // alert($(this).data('id'));

        var id = $(this).data("id");
    var devourState = 1;

    var newDevourState = {
      devoured:devourState
    };

    // Send the PUT request.
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: newDevourState
    }).then(
      function() {
        console.log("changed Devoured to", devourState);
        // Reload the page to get the updated list
        location.reload();
      }
    );

    })
})




