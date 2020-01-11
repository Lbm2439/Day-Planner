
//moment here:

var today = moment();

$("#date").text(moment().format('LLL'));




// hsve a function that checks local storage for tasks object
    // if tasks exist, then populate inputs with data
    // else create a new tasks object within local storage


// save button
$(".save-btn").on("click", function() {
  
    let inputInfo = $('.form-control');
 
    
    for (let i = 0; i < inputInfo.length; i++){
        let currentInfo = inputInfo[i];
        let textInfo = $(currentInfo).val();
        let textAttr = $(currentInfo).attr("id");
        localStorage.setItem(textAttr, textInfo)

    }
});


$("#hour-9").val(localStorage.getItem("hour-9"));
$("#hour-10").val(localStorage.getItem("hour-10"));
$("#hour-11").val(localStorage.getItem("hour-11"));
$("#hour-12").val(localStorage.getItem("hour-12"));
$("#hour-13").val(localStorage.getItem("hour-13"));
$("#hour-14").val(localStorage.getItem("hour-14"));
$("#hour-15").val(localStorage.getItem("hour-15"));
$("#hour-16").val(localStorage.getItem("hour-16"));
$("#hour-17").val(localStorage.getItem("hour-17"));
   
    //var time = $();

 // get the local storage object and convert it from a string to an object (JSON.parse())
 // only modify the key that corresponds to the taskIndex
 // convert object back into a string (JSON.stringify())
 // save to localStorage



//save values without overwriting-create object with 9 keys to reflect fields
// var tasks = {
//     0: "",
//     1: "",
//     2: "",
//     3: "",
//     4: "",
//     5: "",
//     6: "",
//     7: "",
//     8: ""
// }

//check for local storage and pop into where it belongs
//empty local storage at end of day




//     $('input[type="text"]').each(function(){    
//         var id = $(this).attr('class');
//         var value = $(this).val();
//        localStorage.setItem(id, value);

//     });   
// });
// $('.save-btn').on('click', function(){
//     $('input[type="text"]').each(function(){    
//         var id = $(this).attr('class');
//         var value = localStorage.getItem(id);

//         $(this).val(value);

//     }); 






//   document.getElementById("save-btn").innerHTML = "Item Saved";
//   document.getElementById("save-btn").addEventListener("click", clickSave);
// }

