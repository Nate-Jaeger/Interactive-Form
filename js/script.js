const nameInput = document.getElementById("name");
const $otherTitle = $("#other-title");



//Set focus on first text feild
nameInput.focus();

//Hide the 'other-title' input until the 'other' option is selected
$otherTitle.hide();
if($('#title').children("option:selected").val() === "other"){
    $otherTitle.show();
}