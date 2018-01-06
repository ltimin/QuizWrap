$(document).ready(function () {
    faq(success, error);
    getUserFaq(faqPostsSuccess, error);
    $(".modal-trigger").on("click", modalButton);
});
//********************Modal******************
const modalButton = () => {
    $("select").material_select();
    $("#submit").on("click", submit);
    initializeValidation();
    validateSubmit();
};
const submit = function(data, onSuccess, onError) {
        let submitFormData = submitReadForm();
        submitFaq(submitFormData, success, error);
        Materialize.toast('Submitted', 1500);
        location.reload();
        clearForm();
        console.log("working");
};
const submitReadForm = () => {
   let formData = {
       faqCategoryId: $("#faqCategoryDropDown").val(),
        question: $("#question").val(),
        answer: $("#answer").val(),
        displayOrder: $("#displayO").val()
    }
    return formData;
};
//*************************Success And Error***********
                //-----------------Success-------
const success = function(data, status, successText) {
        //Appending FAQ categories
    let fam = data.items;
    fam.forEach(function (element) {
        $("#faqCategoryDropDown").append("<option value =' " + element.id + " '>" + element.name + "</option>");
    });
    $('select').material_select();
};
const faqPostsSuccess = function(stuff, status, successText) {
    let  posts = stuff.items;
    console.log(posts);
};
               //---------------Error---------
const error = function (xhr, status, errorText) {
    alert("error");
};
//**************************Form Client Side Validation************************
const initializeValidation = () => {
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
};   
        //---------Validating Submit Button---------
const validateSubmit = () => {
    $("#faqValidate").on("keyup blur", function () { // fires on every keyup & blur
        if ($("#faqValidate").valid()) {                   // checks form for validity
            $("#submit").prop("disabled", false);        // enables button
        } else {
            $("#submit").prop("disabled", "disabled");   // disables button
        }
    });
};
//*****************Clear Form*********************
function clearForm() {
    $("form")[0].reset();
};