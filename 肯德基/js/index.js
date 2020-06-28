// 肯德基nav导航切换图
var lis = document.querySelectorAll('.nav_center li a img');
for (let i = 0; i < lis.length; i++) {
    lis[i].onmouseenter = function () {
        lis[i].index = i;
        lis[this.index].src = './images/bnav' + (i + 1) + '.jpg';
        console.log(i);
    }
    lis[i].onmouseleave = function () {
        lis[i].index = i;
        lis[this.index].src = './images/nav' + (i + 1) + '.jpg';
        console.log(i);
    }
}

// 轮播图
$(".slider-container").ikSlider({
    speed: 500
});
$(".slider-container").on('changeSlide.ikSlider', function (evt) { console.log(evt.currentSlide); });
var $preview = $('.preview a');

function changeActivePreview(i) {
    $('.active').removeClass('active');
    $preview.eq(i).addClass('active');
}

$preview.on('click', function (e) {
    e.preventDefault();
    var index = $(this).index();
    $('.slider-container').ikSlider(index);
});

$('.slider-container').on('changeSlide.ikSlider', function (e) {
    changeActivePreview(e.currentSlide);
});

changeActivePreview(0)


// 肯德基新闻滚动
$(function () {
    var $this = $("#new_txscroll");
    var scrollTimer;

    //设置鼠标移入清楚定时器,移出时恢复滚动
    $this.hover(function () {
        clearInterval(scrollTimer);
    }, function () {
        scrollTimer = setInterval(function () {
            scrollNews($this);
        }, 2500);
    }).trigger("mouseleave");


    //设置滚动效果***marinTop的值为负值向上滚动
    function scrollNews(obj) {
        var $self = obj.find(".new_overa");
        var lineHeight = $self.find("ul:first").height();
        $self.animate({
            // "scrollTop": -lineHeight + "px"
            "marginTop": -lineHeight + 0 + "px"
        }, 800, function () {
            $self.css({
                marginTop: 0
            }).find("ul:first").appendTo($self);//将滚出去的在给添加到列表的尾部实现无限循环滚动
        })
    }
})

// 轮播图边新闻模块表
function module() {
    // 第一行
    $('#shows_1').mouseenter(function () {
        $('#shows_1').hide();
        $('#shows_2').hide();
        $('#shows_3').show();
    })
    $('#shows_3').mouseleave(function () {
        $('#shows_1').show();
        $('#shows_2').show();
        $('#shows_3').hide();
    })
    $('#shows_2').mouseenter(function () {
        $('#shows_1').hide();
        $('#shows_2').hide();
        $('#shows_4').show();
    })
    $('#shows_4').mouseleave(function () {
        $('#shows_1').show();
        $('#shows_2').show();
        $('#shows_4').hide();
    })
    
    // 第二行
    $('#shows_5').mouseenter(function () {
        $('#shows_5').hide();
        $('#shows_6').hide();
        $('#shows_7').show();
    })
    $('#shows_7').mouseleave(function () {
        $('#shows_5').show();
        $('#shows_6').show();
        $('#shows_7').hide();
    })
    $('#shows_6').mouseenter(function () {
        $('#shows_5').hide();
        $('#shows_6').hide();
        $('#shows_8').show();
    })
    $('#shows_8').mouseleave(function () {
        $('#shows_5').show();
        $('#shows_6').show();
        $('#shows_8').hide();
    })
    
    // 第三行
    $('#shows_9').mouseenter(function () {
        $('#shows_9').hide();
        $('#shows_10').hide();
        $('#shows_11').show();
    })
    $('#shows_11').mouseleave(function () {
        $('#shows_9').show();
        $('#shows_10').show();
        $('#shows_11').hide();
    })
    $('#shows_10').mouseenter(function () {
        $('#shows_9').hide();
        $('#shows_10').hide();
        $('#shows_12').show();
    })
    $('#shows_12').mouseleave(function () {
        $('#shows_9').show();
        $('#shows_10').show();
        $('#shows_12').hide();
    })
    
    // 第四行
    $('#shows_13').mouseenter(function () {
        $('#shows_13').hide();
        $('#shows_14').hide();
        $('#shows_15').show();
    })
    $('#shows_15').mouseleave(function () {
        $('#shows_13').show();
        $('#shows_14').show();
        $('#shows_15').hide();
    })
    $('#shows_14').mouseenter(function () {
        $('#shows_13').hide();
        $('#shows_14').hide();
        $('#shows_16').show();
    })
    $('#shows_16').mouseleave(function () {
        $('#shows_13').show();
        $('#shows_14').show();
        $('#shows_16').hide();
    })
}
module();