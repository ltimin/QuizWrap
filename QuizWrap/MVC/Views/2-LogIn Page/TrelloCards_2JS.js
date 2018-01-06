// JavaScript source code
$(document).ready(function () {
    $(".btn").on("click", submit);
});

function submit() {
    var data = readForm();
    login(data, success, error);
};

function readForm() {
    var formData = {
        Email: $("#email").val(),
        Password: $("#pword").val(),
    }
    return formData;
};

function success(data, status, successText) {
    window.location = "TrelloCards(HomePage)_3HTML.html";
    Materialize.toast("Login Successful!", 900);
};

function error(xhr, status, errorText) {
    Materialize.toast("Houston, we have a problem!!", 3000);
};