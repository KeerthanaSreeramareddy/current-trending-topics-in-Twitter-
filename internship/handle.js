$(function () {
    // Grab the template script
    var theTemplateScript = $("#address-template").html();
  
    // Compile the template
    var theTemplate = Handlebars.compile(theTemplateScript);
  
    // Define our data object
    var context={
      "city": "London",
      "street": "Baker Street",
      "number": "221B"
    };
  
    // Pass our data to the template
    var theCompiledHtml = theTemplate(context);
  
    // Add the compiled html to the page
    $('.content-placeholder').html(theCompiledHtml);
  });
  