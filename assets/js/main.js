(function () {
    $(function() {
        var siteContent = $.makeArray($('.article > .title-container > *, .article > .body > *:not(.projects), .projects > *' ));
        $($('.welcome')[0]).height(window.innerHeight - $('.topbar-container').height());
       setTimeout(function () {
           $('.pic').addClass('in');
           $('.welcome-text .title').addClass('in');
       }, 1);
        document.getElementById('check').addEventListener("click",function() {
            if (document.getElementById('check').checked) {
                $('body')[0].style.overflow= "hidden";
                addRemoveAnimation('menu-item', true);
                addRemoveAnimation('menu-social-btn', true);
            }    
            else {
                $('body')[0].style.overflow= "initial";
                addRemoveAnimation('menu-item', false);
                addRemoveAnimation('menu-social-btn', false);
            }
       }); 
       function addRemoveAnimation(querySelector, isAdd) {
            $('.'+querySelector).each(function(index,item) {
                if(isAdd)
                    item.classList.add('anim');
                else
                    item.classList.remove('anim');
            })
        }
        $('.social img').each(function(index,item) {
            $(item).addClass('in');
        })
        $('.menu-item').each(function(index,item) {
            $(item).on("click", function() {                
                $('body')[0].style.overflow= "initial";
                $("#check").prop('checked', false);
                setTimeout(function () {
                    $("html, body").animate({
                        scrollTop: $('.'+item.dataset.name).offset().top - $('.topbar-container').height()
                    }, 700);
                }, 250);
        })
   })
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();
        siteContent.forEach(function (element,i) {
            if($(element).offset().top + 100  < window.innerHeight + scroll) {
                $(element).addClass('in');
                siteContent.splice(i,1);
            }
        });
    });
      });
})();