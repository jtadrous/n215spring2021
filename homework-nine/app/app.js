import * as MODEL from "../model/model.js";

function init() {
    //adding an event listener to the anchor tags in the nav
    //function click takes an annonymous function with an event
    $("nav a").click(function(event) {
        //this is a click listener that will get the link id
        let btnId = this.id;
        //concatenation, to create the global variable names above
        let contentId = btnId + "Content";
        console.log("clicked ", btnId);

        MODEL.getPageContent(contentId);
    });
}

//first part means we are working in the document
//ready means has the brower read through every line of code or all the page elements
$(document).ready(function() { //starting an annonymous function
    init();
    MODEL.getPageContent("homeContent");
})