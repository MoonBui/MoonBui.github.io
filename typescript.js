// Code for fade in while scrolling
// $(document).ready(function() {


document.addEventListener("DOMContentLoaded", function(event) {
    $('.fade-onload-down').each(function(i) {
        $(this).animate({ 'opacity': '1', 'margin-top': '0px' }, 600);
    });

    // $('.fade-onload-up').each(function() {
    //     $this.animate({ 'opacity': '1', 'margin-bottom': '0px' }, 500);
    // });

    $(window).scroll(function() {
        $('.fade-in-down').each(function(i) {
            var bottom_of_element = $(this).offset().top +
                $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() +
                $(window).height();

            if (bottom_of_window >= bottom_of_element) {
                $(this).animate({ 'opacity': '1', 'margin-top': '0px' }, 500);
            }
        });
    });
});


// Code to add code for model
var modelUI = {};


// Code for display form in modal box
var modal = document.getElementById("myModal");
var linkModal = document.getElementById("box_modal");
var spanX = document.getElementsByClassName("close")[0];

linkModal.onclick = function() {
    modal.style.display = "block";
}

spanX.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// code to submit form

// submitButton.addEventListener("click", handleSubmit);
// var submitButton = document.getElementById("form-btn");
// handleSubmit.onclick = function(e) {
//     e.preventDefault();
//     let myForm = document.getElementById("contacts");
//     let formData = new FormData(myForm);
//     let formData = new FormData(myForm)
//     fetch('/', {
//         method: 'POST',
//         headers: { "Content-Type": "application/x-www-form-urlencoded" },
//         body: new URLSearchParams(formData).toString()
//     }).then(() => console.log('Form successfully submitted')).catch((error) =>
//         alert(error))
// }