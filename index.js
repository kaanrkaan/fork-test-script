$(function() {
console.log('test');
// Page has Manual Payment Option
if ($('#customRadioManual').length === 1) {

}

var thankYou = $('.div-pays-thankyou');
// Page has transaction id 
if (thankYou.length === 1) {
    var child1 = thankYou.children()[0];
    var child2 = thankYou.children()[1];
    $(child2).remove();
    $(child1).text('Thank you');

    var sec = document.createElement('p');
    sec.classList = "mt-2";
    $(sec).html("You will be redirected to the payment page in <span id='redirect-timer'>3</span> seconds.");
    $(thankYou).append(sec);
    $('.div-notification').remove();

    var timerId = setInterval(() => {
        console.log('test');
        var text = parseInt($('#redirect-timer').text());
        console.log(text);
        if (text <= 0) {
            clearInterval(timerId);
            console.log('finish');

            var transactionId = $('.div-mes').children('p').children('span').text();   
            window.location.href = "http://127.0.0.1/test?tId=" + transactionId        
        } else {
            $('#redirect-timer').text(text - 1);
        }
    }, 1000);
}
});