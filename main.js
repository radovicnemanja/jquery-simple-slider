var $slider = $('.slider');
var $slide = 'li';
var $nextTime = 1000;
var $waitTime = 4000;

function slides() {
    return $slider.find($slide);
}

slides().fadeOut();
slides().first().addClass('active');
slides().first().fadeIn($nextTime);


setInterval(function () {
        var i = $slider.find($slide + '.active').index();

        slides().eq(i).removeClass('active');
        slides().eq(i).fadeOut($nextTime);

        if (slides().length === i + 1) {
            i = -1
        }

        slides().eq(i + 1).fadeIn($nextTime);
        slides().eq(i + 1).addClass('active');
    }, $nextTime + $waitTime
);

