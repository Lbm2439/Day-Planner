
//moment here:

var today = moment();

$("#date").text(moment().format('LLL'));




// save button
$(".save-btn").on("click", function() {

    $('input[type="text"]').each(function(){    
        var id = $(this).attr('class');
        var value = $(this).val();
       localStorage.setItem(id, value);

    });   
});
$('.save-btn').on('click', function(){
    $('input[type="text"]').each(function(){    
        var id = $(this).attr('class');
        var value = localStorage.getItem(id);

        $(this).val(value);

    }); 
});

console.log('hello');




//   document.getElementById("save-btn").innerHTML = "Item Saved";
//   document.getElementById("save-btn").addEventListener("click", clickSave);
// }

