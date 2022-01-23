$( document ).ready(function() {
   
    var newsHeightString = $(".news").css("height");
    var newsHeightFloat = parseInt(newsHeightString) ;
    var buttonHeight = $(".np-buttons").css("height");
    var npWritersHeight = $(".np-category").css("height");
    var $leftNav = $('.dh-container-left').clone(); /* Left containeri mobil uyumda kullanmak için klonladım */
    var $contact = $('.dropdown').clone(); /* Left containeri mobil uyumda kullanmak için klonladım */
    var $relatedNews = $('.related-news').clone(); /* Mobilde alakalı haberleri aşşağıya almak için  */
    var heightClone = $('.dh-container-left').css("width"); /* Clone olan headerin right özelliğinin ve animasyonlarının çalışması için genişliğini hesaplatıyorum */
    var $settingsClone = $('.dh-dropdown').clone(); /* Ekran küçüldüğünde ayarları yandan açılan menüye alıyorum */
    var $npTagsClone = $('.np-tags').clone(); /* Ekran küçüldüğünde ayarları yandan açılan menüye alıyorum */
    $(".news").css("max-height",(newsHeightFloat+420)/2) /* Haber akışının uzunluğunu belirler */
    $(".np-writers").css("height",npWritersHeight)
    $(".np-buttons .np-button").css("width",buttonHeight);
    $( ".np-header" ).css("right","-270px");
    $('.mobile-related-news').html($relatedNews);
    $('.contact-clone').html($contact);
    $('.mobile-related-news .related-news').removeClass("desktop-related-news");
    
    $.fn.calcNewsSize = function(){ 
        $(".news").css("display","block")
        $(".news").css("max-height","initial") /* Haber akışının uzunluğunu belirler */
        var newsHeightString = $(".news").css("height");
        $(".news").css("display","flex")
        var newsHeightFloat = parseInt(newsHeightString) ;
        $(".news").css("max-height",(newsHeightFloat+600)/2) /* Haber akışının uzunluğunu belirler */
    }

    setInterval(function(){  $.fn.calcNewsSize(); }, 1000);


    $( ".dropbtn" ).click(function() {
        if($(".dropdown-content").hasClass("show")){
          $(".dropdown-content").removeClass("show")
          }
          else{
              $(".dropdown-content").addClass("show")
          }
    })
   if (window.innerWidth < 1440) {
        $('.clone').html($leftNav);
        $(".clone") .css("right","0px");
    }
    if (window.innerWidth < 900) {
         
        $('.np-tags-clone').html($npTagsClone);
    }
    if (window.innerWidth < 575) {
        
        $('.settings-clone').html($settingsClone);
    }

   $( window ).resize(function() {

        if (window.innerWidth < 1440) {
            $('.clone').html($leftNav);
            $(".clone") .css("right","0px");
        }
        if (window.innerWidth < 900) {
            $('.np-tags-clone').html($npTagsClone);
        }
        if (window.innerWidth < 575) {
            $('.settings-clone').html($settingsClone);
        }
   });
  
   var mobileLineMove = 1;
   
    $(".mobile-nav").click(function(){
        console.log("hello");
        if(mobileLineMove % 2 === 1){
            $( ".mobile-line:first-child" ).css("transform","rotate(45deg)");
            $( ".mobile-line:nth-of-type(2)" ).css("opacity","0");
            $( ".mobile-line:last-child" ).css("transform","rotate(-45deg)").css("margin-top","-20px");
            $( ".clone" ).animate({
                right: heightClone,
                opacity: 1,
              }, 100);

              $( ".np-header" ).animate({
                right: 0,
                opacity: 1,
              }, 100);
              mobileLineMove+=1;
        }else{
            $( ".mobile-line:first-child" ).css("transform","rotate(0deg)");
            $( ".mobile-line:nth-of-type(2)" ).css("opacity","1");
            $( ".mobile-line:last-child" ).css("transform","rotate(0deg)").css("margin-top","0");
            console.log(mobileLineMove);
            $( ".clone" ).animate({
                right: "0px",
                opacity: 0,
              }, 100);
              $( ".np-header" ).animate({
                right: "-270px",
                opacity: 0,
              }, 100);
              mobileLineMove+=1;
        }
    });
        
    if(localStorage.getItem("mode")==="dark"){
        $("div#dark").removeClass("inactive-mode").addClass( "active-mode" );
        $( "div#light" ).removeClass( "active-mode" ).addClass("inactive-mode");
        document.documentElement.style.setProperty('--pageMode', "#000");
        document.documentElement.style.setProperty('--shadowColor', "#fff");
        document.documentElement.style.setProperty('--mainTitle', "#fff");
        document.documentElement.style.setProperty('--newsDetail', "#ffffff90");
        document.documentElement.style.setProperty('--leftNavBg', "#1c1f23");
        document.documentElement.style.setProperty('--headerColor', "#1c1f23");
        document.documentElement.style.setProperty('--relatedBg', "#353535");
        document.documentElement.style.setProperty('--newsFooter', "#fff");
        document.documentElement.style.setProperty('--writerBorder', "#fff");
        document.documentElement.style.setProperty('--newHead', "#fff");

        $("#gold-icon").attr("src","images/goldLight.png");
        $("#bist-icon").attr("src","images/bistLight.png");
        $(".np-dikkat-logo").attr("src","images/npDikkatLogoWhite.png");
        $(".np-farkındalık").attr("src","images/npDikkatLogoWhite.png");
        $(".login-logo").attr("src","images/npDikkatLogoWhite.png");  
    }

    $( ".mode-changer" ).click(function() {
        $( ".inactive-mode" ).removeClass( "inactive-mode" ).addClass("active-mode");
        $( this ).addClass( "inactive-mode" ).removeClass("active-mode");
        var elmId = $(".active-mode").attr("id");
        if(elmId==="dark"){
            document.documentElement.style.setProperty('--pageMode', "#000");
            document.documentElement.style.setProperty('--shadowColor', "#fff");
            document.documentElement.style.setProperty('--mainTitle', "#fff");
            document.documentElement.style.setProperty('--newsDetail', "#ffffff90");
            document.documentElement.style.setProperty('--leftNavBg', "#1c1f23");
            document.documentElement.style.setProperty('--headerColor', "#1c1f23");
            document.documentElement.style.setProperty('--relatedBg', "#353535");
            document.documentElement.style.setProperty('--newsFooter', "#fff");
            document.documentElement.style.setProperty('--writerBorder', "#fff");
            document.documentElement.style.setProperty('--newHead', "#fff");
            $("#gold-icon").attr("src","images/goldLight.png");
            $("#bist-icon").attr("src","images/bistLight.png");
            $(".np-dikkat-logo").attr("src","images/npDikkatLogoWhite.png");
            $(".np-farkındalık").attr("src","images/npDikkatLogoWhite.png");
            $(".login-logo").attr("src","images/npDikkatLogoWhite.png");
            localStorage.setItem("mode", "dark");
        }
        else{
            document.documentElement.style.setProperty('--pageMode', "#fff");
            document.documentElement.style.setProperty('--shadowColor', "rgba(0,0,0, 0.25)");
            document.documentElement.style.setProperty('--mainTitle', "#000");
            document.documentElement.style.setProperty('--newsDetail', "#353535");
            document.documentElement.style.setProperty('--leftNavBg', "#F8F8F8");
            document.documentElement.style.setProperty('--headerColor', "#eff6ff");
            document.documentElement.style.setProperty('--relatedBg', "#FDFFE7");
            document.documentElement.style.setProperty('--newsFooter', "#232323");
            document.documentElement.style.setProperty('--writerBorder', "#c7c7c7");
            $("#gold-icon").attr("src","images/goldDark.png");
            $("#bist-icon").attr("src","images/bistDark.png");
            $(".np-dikkat-logo").attr("src","images/dikkatNewsLogo.png");
            $(".np-farkındalık").attr("src","images/npFarkındalıkLogo.png");
            $(".login-logo").attr("src","images/dikkatNewsLogo.png");
            document.documentElement.style.setProperty('--newHead', "#221096");

            localStorage.setItem("mode", "light");
        }
    });

    /* Form kısmında telefon bölgesinin doğru girilmesi için gerekli olan regular expression */
    $('#phone-number-field').keyup(function(){
        $(this).val($(this).val().replace(/(\d{3})\-?(\d{3})\-?(\d{4})/,'$1-$2-$3'))
    });

    /* Haber detay kısmında bağlantılı haber yoksa bağlantı kısmının görünmemesi */
    var numItems =  $('.related-new-link ul').children('li').length;
    if(numItems<=0){
        $('.related-new-link').css("display","none");

    }

    // Haber Detay sayfasındaki iletişim dropboxı
    $( ".list-group-item" ).click(function() {
        var clickedId = $(this).attr("data-id");
        $(".list-group .active").removeClass("active");
        $(this).addClass("active")
        $(".tab-content .active").removeClass("active show")
        $("#"+clickedId).addClass("active show")


    });

});