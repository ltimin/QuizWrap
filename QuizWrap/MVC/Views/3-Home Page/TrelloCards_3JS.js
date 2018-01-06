// JavaScript source code//

$(document).ready(function () {
    currentUser(success, error);
    $("#logout").click(confirmLogOut);
});

const confirmLogOut = function() {
    console.log("works!")
    logout(logOutSuccess, error);
}
function success(data, status, successText) {
    $("#userName").text(data.item.firstName + " " + data.item.lastName);
};

function logOutSuccess(data, status, successText) {
    Materialize.toast("Log Out Successful", 900);
    window.location = "TrelloCards(Login)_2HTML.html";
};

function error(xhr, status, errorText) {
    alert("error");
};

