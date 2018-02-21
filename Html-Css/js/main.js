/* tooltip function */
$(function () {
    $('[data-toggle="tooltip"]').tooltip();
})

/* input field validate function */
const validate = document.querySelector('button');
validate.addEventListener('click',validateInput);
/* validate input function */
function validateInput(){
    const input = document.getElementById('searchInput'); //grab the input element
    console.log(input.value);
    if (input.value==="") //check for empty string
    {
        alert('Please enter a text');
    }
    else{
        alert(input.value);
    }
}