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
        alert('on devoured...');
        alert($(this).data('id'));
    })
})




