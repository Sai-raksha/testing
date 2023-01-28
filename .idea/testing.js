jQuery(document).ready(function() {
    jQuery("#jira-form").submit(function(e) {
        e.preventDefault();
        var data = {
            "fields": {
                "project":
                    {
                        "key": "PAN"
                    },
                "summary": jQuery("#summary").val(),
                "description": jQuery("#description").val(),
                "issuetype": {
                    "name": "Bug"
                }
            }
        };
        jQuery.ajax({
            type: "POST",
            url: "https://svce2.atlassian.net/rest/api/3/issue/",
            dataType: "json",
            contentType: "application/json",
            headers: {
                "Access-Control-Allow-Origin": "*"
            },
            data: JSON.stringify(data),
            beforeSend: function (xhr) {
                let authUsername = jQuery("#username").val();
                let authPassword = jQuery("#token").val();
                xhr.setRequestHeader("Authorization", "Basic " + btoa(`${authUsername}:${authPassword}`));
                xhr.setRequestHeader("Access-Control-Allow-Origin", "*");
            },
            success: function() {
                alert("Issue created successfully!");
            },
            error: function() {
                alert("An error occurred while creating the issue.");
            }
        });
    });
});
