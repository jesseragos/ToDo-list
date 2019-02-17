// Start of JQuery code
$(function() {
// Check off specific todos by clicking
    $("ul").on("click", "li", function() {
        $(this).toggleClass("completed");
    });

// Delete items from list
    $("ul").on("click", "span.delete", function(event) {
        // Since .delete span is inside li, it will also call its event
        // This event is called a bubble event as it also affects its parent elements
        // with its own events to be called.
        // This is prevented by calling the method below 
        event.stopPropagation();

        // Get the parent level of .delete span which is li
        // so that is the one to be fadedOut then removed
        $(this).parent().fadeOut(500, function() {
            $(this).remove();
        });
    });

// Enter todo item from input field
    $("input[type='text']").keypress(function(event) {
        if(event.which === 13) {
            // grabbing new todo text from input
            var todoText = $(this).val();
            $(this).val("");
            // create a new li and add to ul
            $("ul").append("<li><span class='delete'><i class='fa fa-trash'></i></span> " + todoText + "</li>");
        }
    })

// Add toggle hiding for input
    $(".fa-plus").click(function() {
        $("input[type='text']").fadeToggle();
    })
})