


function clock()
{

var date = new Date();
var hour = date.getHours();
var minute = date.getMinutes();
var second = date.getSeconds();

    var bodyUrl = "img/clockbody{id}.png";
    $("#clockbody").attr("src",bodyUrl.replace("{id}", (second%2)));

    var updown = 5;
    $("#clockcircle").css(
        {
            'margin-top': ((second%2)==0?0:updown)+"px"
        }
    );

    var hourRot = hour * 30 + minute * 0.5;
    var minuteRot = minute * 6 + second * 0.1;
    var secondRot = second * 6;


    //update visual
    rotate("#clockhour", hourRot);
    rotate("#clockminute", minuteRot);
    rotate("#clocksecond", secondRot);
    setTimeout(() => {
        clock();
    }, 100);
}

function rotate(id, rotation)
{
    $(id).css(
        {
            'transform': 'rotate('+rotation+'deg)',
            '-webkit-transform': 'rotate('+rotation+'deg)',
            '-moz-transform': 'rotate('+rotation+'deg)',
            '-ms-transform': 'rotate('+rotation+'deg)',

        }
    );
}
