$(document).ready(function() {
    $(".btn").on("click", submit);
});

 function submit() {
    var pwd = $("#pword").val();
    var cpwd = $("#conpword").val();
    password(pwd, cpwd);
    clearForm();
};

function continuedSubmit() {
    var data = readForm();
    register (data, success, error);
};

function password (pwd, cpwd) {
    if (pwd !== cpwd) {
        alert("Passwords don't match. Try Again");
    }
    else{
        continuedSubmit();
    }
};

function readForm() {
    var formData = { 
        firstName: $("#fname").val(),
        lastName: $("#lname").val(),
        password: $("#pword").val(),
        email: $("#email").val()        
    }
    return formData;
};

function success (data, status, successText) {
    window.location = "TrelloCards(HomePage)_3HTML.html";
};

function error (xhr, status, errorText) {
    alert ("error");  
};

function clearForm() {
    $("form")[0].reset();
}