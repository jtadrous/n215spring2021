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

        if(btnId === "home") {
            $("#white-logo").css("display", "flex");
            $("#black-logo").css("display", "none");
            $("nav").addClass("white");
            $(".contain").addClass("hero");
            $(".title").css("display", "block");
            MODEL.getPageContent(contentId);

        } else if (contentId == "galleryContent") {
            $("#white-logo").css("display", "none");
            $("#black-logo").css("display", "flex"); 
            $("nav").removeClass("white");
            $(".contain").removeClass("hero");
            $(".title").css("display", "none");
            MODEL.getPageContent(contentId);

            $(".collage div").click(function(event) {
                //gets the tour button id and loads the specific gallery page
                let galleryBtnId = this.id;
                let galleryContentId = galleryBtnId + "Content";
                MODEL.getPageContent(galleryContentId);
            });
            
        }  else if (contentId == "blogContent") {
            $("#white-logo").css("display", "none");
            $("#black-logo").css("display", "flex"); 
            $("nav").removeClass("white");
            $(".contain").removeClass("hero");
            $(".title").css("display", "none");
            MODEL.getPageContent(contentId);

            $(".date").click(function(event) {
                //gets the tour button id and loads the specific blog post page
                let dateBtnId = this.id;
                let dateContentId = dateBtnId + "Content";
                MODEL.getPageContent(dateContentId);
            });
            
        } else {
            $("#white-logo").css("display", "none");
            $("#black-logo").css("display", "flex"); 
            $("nav").removeClass("white");
            $(".contain").removeClass("hero");
            $(".title").css("display", "none");
            MODEL.getPageContent(contentId);
        }
    });
}

//first part means we are working in the document
//ready means has the brower read through every line of code or all the page elements
$(document).ready(function() { //starting an annonymous function
    init();
    $("#black-logo").css("display", "none");
    MODEL.getPageContent("homeContent");
})