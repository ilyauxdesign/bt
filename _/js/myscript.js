$(function(){var a=window.location.hash;a&&$('ul.nav a[href="'+a+'"]').tab("show"),$("#home a:contains('Home')").parent().addClass("active"),$("#registration a:contains('Registration')").parent().addClass("active"),$("#program a:contains('Program')").parent().addClass("active"),$("#venue a:contains('Venue')").parent().addClass("active"),$("#contact a:contains('Contact')").parent().addClass("active"),$("ul.nav li.dropdown").hover(function(){$(".dropdown-menu",this).fadeIn()},function(){$(".dropdown-menu",this).fadeOut("fast")}),$("[data-toggle='tooltip']").tooltip({animation:!0}),$(".modalphotos img").on("click",function(){$("#modal").modal({show:!0});var a=this.src.substr(0,this.src.length-7)+".jpg";$("#modalimage").attr("src",a),$("#modalimage").on("click",function(){$("#modal").modal("hide")})})});