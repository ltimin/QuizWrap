$(document).ready(function () {
    initializeValidation();
    faq(success, error);
    $(".modal-trigger").on("click", modalButton);
});

//********************Modal******************
function modalButton() {
    $('select').material_select();
    $("#submit").on("click", submit);
};

function submit(data, onSuccess, onError) {
    var data = readForm();
    submitFaq(data, success, error);
    clearForm();
    Materialize.toast('Submitted', 900);
};
function readForm() {
    var formData = {
        faqCategoryId: $("#faqCategoryDropDown").val(),
        question: $("#question").val(),
        answer: $("#answer").val(),
        displayOrder: $("#displayO").val()
    }
    return formData;
};

//*************************Success And Error***********
function success(data, status, successText) {
    var fam = data.items;
    fam.forEach(function (element) {
        $("#faqCategoryDropDown").append("<option value =' " + element.id + " '>" + element.name + "</option>");
        $("#faq").append("<li class='tab col s3' value='" + element.id + "'><a href='#" + element.name + "'>" + element.name + "</a></li>");
    });
    $('select').material_select();
};

function error(xhr, status, errorText) {
    alert("error");
};

//**************************Form Client Side Validation************************
function initializeValidation() {
    jQuery.validator.setDefaults({
        debug: true

    });
    let validationRules = {
        "Question": {
            required: true
            , minlength: 5
        }
        , "Answer": {
            required: true
            , minlength: 5
        }
        , "Display Order": {
            required: true
        }
    }
    let validationMessages = {
        "Question": {
            required: "Question is required"
            , minlength: "At least 5 characters are required"
        }
        , "Answer": {
            required: "Answer is required"
            , minlength: "At least 5 characters are required"
        }
        , "Display Order": {
            required: "This field is required"
        }
    }
    let validationOptions = {
        rules: validationRules
        , messages: validationMessages
    }
    $("#faqValidate").validate(validationOptions);
}
//*****************Clear Form*********************
function clearForm() {
    $("form")[0].reset();
}
