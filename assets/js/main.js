console.log("Hello World from main.js!");


/* -----hamburger accordian menu------*/
$(function() {
  function slideMenu() {
    
    var activeState = $("#menu-container .menu-list").hasClass("active");
    $("#menu-container .menu-list").animate(
      {
        left: activeState ? "0%" : "-100%"
      },
      400
    );
  } 
  $("#menu-wrapper").click(function(event) {
    event.stopPropagation();
    $("#hamburger-menu").toggleClass("open");
    $("#menu-container .menu-list").toggleClass("active"); //toggle class of active
    slideMenu();

    $("body").toggleClass("overflow-hidden");
  });

  $(".menu-list").find(".accordion-toggle").click(function() {
    $(this).next().toggleClass("open").slideToggle("fast");
    $(this).toggleClass("active-tab").find(".menu-link").toggleClass("active");

    $(".menu-list .accordion-content")
      .not($(this).next())
      .slideUp("fast")
      .removeClass("open");
    $(".menu-list .accordion-toggle")
      .not(jQuery(this))
      .removeClass("active-tab")
      .find(".menu-link")
      .removeClass("active");
  });
}); 


/*-----------tabs----------------*/

 // tabbed content
    // http://www.entheosweb.com/tutorials/css/tabs.asp
    $(".tab_content").hide(); // hide the rest of the tabs
    $(".tab_content:first").show(); // show this tab first

  /* if in tab mode */
    $("ul.tabs li").click(function() { // click tab item/li
    
      $(".tab_content").hide(); //hide content
      var activeTab = $(this).attr("rel"); 
      $("#"+activeTab).fadeIn();    
    
      $("ul.tabs li").removeClass("active"); //remove active class from tab/li
      $(this).addClass("active"); //add class of active to tab/li

    $(".tab_drawer_heading").removeClass("d_active"); 
    $(".tab_drawer_heading[rel^='"+activeTab+"']").addClass("d_active");
    
    });

  /* if in drawer mode */
  $(".tab_drawer_heading").click(function() {
      
      $(".tab_content").hide();
      var d_activeTab = $(this).attr("rel"); 
      $("#"+d_activeTab).fadeIn();
    
    $(".tab_drawer_heading").removeClass("d_active"); // tab heading remove active class
      $(this).addClass("d_active"); //add class of active 
    
    $("ul.tabs li").removeClass("active"); //remove active class 
    $("ul.tabs li[rel^='"+d_activeTab+"']").addClass("active"); //add active class
    });
  
  
  /* Extra class "tab_last" to add border to right side of last tab */
  $('ul.tabs li').last().addClass("tab_last");
