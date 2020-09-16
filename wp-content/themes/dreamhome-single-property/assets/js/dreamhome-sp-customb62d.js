jQuery(document).ready(function(){
    "use strict";

    jQuery('[data-toggle="tooltip"]').tooltip();

    jQuery('.TabArea').hide();
	var active_tab = jQuery('.room_dimensions_type a.active').attr('id');
	jQuery('.TabArea.'+active_tab).show();

    jQuery('.room_dimensions_type a').click(function(){
    	var current_tab = jQuery(this).attr('id');
    	jQuery('.TabArea').hide();
    	jQuery('.'+current_tab).show();
    	jQuery('.room_dimensions_type a.active').removeClass();
    	jQuery(this).addClass('active');    	
    });

    jQuery(".show-hide-detail").hide();
    jQuery(".show-hide-detail:first").show();
    jQuery(".show-hide-btn a").click(function() {
        var thid_data = jQuery(this).attr('data-id');
        jQuery(".show-hide-btn a").removeClass('active');
        jQuery(this).addClass('active');
        if (!jQuery("#" + thid_data).is(":visible")) {
            jQuery(".show-hide-detail").hide();
            jQuery("#" + thid_data).show();
        }
    });

    jQuery('.inner-faq-panel-heading img').click(function(){
        jQuery(this).next().trigger("click");
    });             
    jQuery('.inner-faq-panel-heading a').first().trigger("click");

    var j=0;
    jQuery(".carousel-inner.inner-page").each(function(){
        var carosusel_slider_img = jQuery(this).find(".item").length;
            for(var i=0;i<carosusel_slider_img;i++){
                if(i==0){
                    var html_code='<li data-target="#myCarousel'+j+ '" data-slide-to="'+ i +'" class="active"></li>';    
                } else {
                    var html_code='<li data-target="#myCarousel'+j+ '" data-slide-to="'+ i +'"></li>';
                }
            jQuery(this).parent().find(".carousel-indicators").append(html_code);
        }
        jQuery(this).parent().attr("id","myCarousel"+j);
        jQuery(this).find(".item").first().addClass("active");
        j++;
    });

    jQuery(".screen_height").css("min-height",jQuery(document).height());

    /*var j=0;
    jQuery(".carousel-inner").each(function(){
         var carosusel_slider_img = jQuery(this).find(".item").length;
         for(var i=0;i<carosusel_slider_img;i++)
         {
              if(i==0)
              {
                  var html_code='<li data-target="#myCarousel'+j+ '" data-slide-to="'+ i +'" class="active"></li>';
              }
              else
              {
                  var html_code='<li data-target="#myCarousel'+j+ '" data-slide-to="'+ i +'"></li>';
              }
              jQuery(this).parent().find(".carousel-indicators").append(html_code);
         }
         jQuery(this).find(".item").first().addClass("active");
         jQuery(this).parent().attr("id","myCarousel"+j);
         j++;   
    });*/
    
});