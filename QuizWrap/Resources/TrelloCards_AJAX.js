if (!users) {
    users = {};
}
var users = users || {};
var api = "https://pacoima-ypi.azurewebsites.net/api/";

const register = function(data, onSuccess, onError) {
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
    $.ajax(api + "users/register/employer", settings);
};

const login = function(data, onSuccess, onError) {
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
    $.ajax(api + "/users/login/force", settings);
};

const currentUser = function(onSuccess, onError) {
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
    $.ajax(api + "people/currentuser", settings);
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
        $.ajax(api + "users/logout", settings);
};

const faq = function(onSuccess, onError) {
    var settings = {
        type: "GET",
        success: onSuccess,
        error: onError,
        xhrFields: {
            withCredentials: true
        }
    };
    $.ajax(api + "faqcategories", settings);
};

const submitFaq = function(data, onSuccess, onError) {
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
    $.ajax(api + "faqs", settings);
}

const getUserFaq = function(onSuccess, onError) {
    var settings = {
        type: "GET",
        success: onSuccess,
        error: onError,
        xhrFields: {
            withCredentials: true
        }
    };
    $.ajax(api + "faqs/user", settings);
}

const getIdUserFaq = function (onSuccess, onError) {
    var settings = {
        type: "GET",
        success: onSuccess,
        error: onError,
        xhrFields: {
            withCredentials: true
        }
    };
    $.ajax(api + "faqs/{id}", settings);
}
