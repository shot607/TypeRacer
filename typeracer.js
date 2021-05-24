var jq = document.createElement('script');
jq.addEventListener("load", () => {
    var text = $('.inputPanel tr:first').text();
    var i = 0;
    input = $('.txtInput');
    $('body').on('keypress','.txtInput',function(e)
    {
        e.preventDefault();
        input.val(input.val()+text[i]);
        i++;
    });
});
jq.src = "//ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js";
document.getElementsByTagName('head')[0].appendChild(jq);
