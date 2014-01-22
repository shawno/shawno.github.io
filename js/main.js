$( document ).ready(function() {
    var source = $("#job-template").html();
    var template = Handlebars.compile(source);
    alert(template);
    $("#jobs-target").html(template);    
});

