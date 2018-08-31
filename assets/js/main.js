(function () {
    $(function() {
        var siteContent = $.makeArray($('.article > .title-container > *, .article > .body > *:not(.projects), .projects > *' ));
    $('.social img').each(function(index,item) {
        $(item).addClass('in');
    })
    $('.menu-item').each(function(index,item) {
        item.addEventListener("click", function() {                
            $('body')[0].style.overflow= "initial";
            document.getElementById("check").checked = false;
            setTimeout(() => {
                $("html, body").animate({
                    scrollTop: $('.'+item.dataset.name).offset().top - $('.topbar-container').height()
                }, 700);
            }, 250);
        })
   })
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();
        siteContent.forEach((element,i) => {
            if( $(element).offset().top + 100  < window.innerHeight + scroll) {
                $(element).addClass('in');
                siteContent.splice(i,1);
            }
        });
    });
      });
})();