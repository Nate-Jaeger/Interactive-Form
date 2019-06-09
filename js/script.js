const nameInput = document.getElementById("name");
const $otherTitle = $("#other-title");



//Set focus on first text feild
nameInput.focus();

//Hide the 'other-title' input until the 'other' option is selected
$otherTitle.hide();

$("#title").change((e) => {
    if(e.target.value === "other"){
        $otherTitle.show();
    }else{ $otherTitle.hide(); }
});