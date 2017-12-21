// JavaScript source code//

$(document).ready(function () {
    currentUser(success, error);
    $("#logout").on("click", confirmLogOut);
});

function confirmLogOut() {
    logout(logOutSuccess, error)
};
function success(data, status, successText) {
    $("#userName").text(data.item.firstName + " " + data.item.lastName);
};

function logOutSuccess(data, status, successText) {
    window.location = "TrelloCards(Login)_2HTML.html";
    Materialize.toast("Log Out Successful", 900);
}
function error(xhr, status, errorText) {
    alert("error");
};

