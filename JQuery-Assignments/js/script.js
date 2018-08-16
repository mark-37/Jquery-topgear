$(document).ready(function(){
   
    str = `
    <div>
    <h1>Jquery</h1>
    <p>
        jQuery is a fast and concise Javascript Library created by John Resig
        in 2006 with a nice motto - write less, do more.
    </p>
</div>
    `;

    $('#one').append(str);

    $('#animateThis').on('click', function(){
        
      $("#animateThis").animate({ opacity : "0.5" }, 500);
    
    });

    $('#check1').change(function(){
        if(this.checked) {
           $('#btn1').removeAttr('disabled');
        }
    });

    /* Four */

    $('#four>p').dblclick(function(){
         $('#four > p').toggleClass('dbl');
         $('#four > p').toggleClass('normal');
    });

    /* Five */
    //var child = $('#five>form').children('input:only-of-type');
    var child = $('#five>form').children('input:only-of-type')
                .css({"border": "5px solid red"});
    
    
    

    $('#button1').on("click", function(e){

        var child = $('#six').children("div");
        
        child = child[3];

        $(child).addClass('red');
    });
    
    

});