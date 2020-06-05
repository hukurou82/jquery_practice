$(function(){
    var count =0;

    countFunc();

    var timer = setInterval(countFunc, 1000);

    function countFunc(){
        count++;
        $('p').html("変数countの値は" + count + "です");

        if(count >= 10){
            clearInterval(timer);
            $('p').html('タイムアップです。');
        }
    }
});