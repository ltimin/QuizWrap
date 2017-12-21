if (!users) {
    users = {};
}

var users = users || {};
var api = "https://pacoima-ypi.azurewebsites.net/api";

function register(data, onSuccess, onError) {
    var settings = {
        cache: false,
        // headers: { "Content-Type": "application/x-www-form-urlencoded" },
        type: "POST",
        success: onSuccess,
        error: onError,
        contentType: "application/json",
        data: JSON.stringify(data),
        xhrFields: {
            withCredentials: true
        }
    }
    $.ajax(api + "/users/register/employer", settings);
};

function login(data, onSuccess, onError) {
    var settings = {
        cache: false,
        //headers: { "Content-Type": "application/x-www-form-urlencoded" },
        type: "POST",
        success: onSuccess,
        error: onError,
        contentType: "application/json",
        data: JSON.stringify(data),
        xhrFields: {
            withCredentials: true
        }
    }
    $.ajax(api + "/users/login/force", settings);
};

function currentUser(onSuccess, onError) {
    var settings = {
        cache: false,
        //headers: { "Content-Type": "application/x-www-form-urlencoded" },
        type: "GET",
        success: onSuccess,
        error: onError,
        contentType: "application/json",
        xhrFields: {
            withCredentials: true
        }
    }
    $.ajax(api + "/people/currentuser", settings);
};

function logout(onSuccess, onError) {
    var settings = {
            cache: false,
            type: "GET",
            success: onSuccess,
            error: onError,
            xhrFields: {
                withCredentials: true
            }
        };
        $.ajax(api + "/users/logout", settings);
};

function faq(onSuccess, onError) {
    var settings = {
        type: "GET",
        success: onSuccess,
        error: onError,
        xhrFields: {
            withCredentials: true
        }
    };
    $.ajax(api + "/faqcategories", settings);
};

function submitFaq(data, onSuccess, onError) {
    var settings = {
        cache: false,
        //headers: { "Content-Type": "application/x-www-form-urlencoded" },
        type: "POST",
        success: onSuccess,
        error: onError,
        contentType: "application/json",
        data: JSON.stringify(data),
        xhrFields: {
            withCredentials: true
        }
    }
    $.ajax(api + "/faqs", settings);
    
}