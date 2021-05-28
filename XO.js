$(function(){
     gameplay();   
     $('#restart').on('click',function(){
            $('table').remove();
            $('#centerbox p').remove();
               $('#centerbox').append($(' <table id="gamepart"><tr class="tic">'+
                 '<td></td><td></td ><td></td></tr>'+
                '<tr class="tic"><td></td><td></td><td></td></tr>'+
                '<tr class="tic"><td></td><td></td><td></td></tr>'+'</table>').hide().fadeIn(500));
                $('#bt1').css('border-bottom','3px solid #374785');
                $('#bt2').css('border-bottom','none');
                gameplay();
     });
});
function gameplay() {
    var i=0;
    var count=0;
    $('td').addClass("empty");
    $('.empty').on('click',function(e){
        e.preventDefault();
        if(i==0 && $(this).text()==""){
            $(this).text("X").css('color','#374785').hide().fadeIn(200);
            $('#bt1').css('border-bottom','none');
            $('#bt2').css('border-bottom','3px solid #32a3b1');
            $(this).removeClass('empty');
            i=1;
            count++;
        }
        else if($(this).text() == ""){
            $(this).text("O").css('color','#32a3b1').hide().fadeIn(200);
            $('#bt2').css('border-bottom','none');
            $('#bt1').css('border-bottom','3px solid #374785');
            $(this).removeClass('empty');
         
            i=0;
            count++;
        }
        if (count>4)
        {
           console.log(count);
           var a = CheckWin(i);
           if(a=="Winner")
           {
             $('td').off("click");
             $('table').remove();
             if(i==1)
             {
             $('#centerbox').html("<p>X</p><p>!! Winner !!</p>");
             $('#bt2').css('border-bottom','none');
             $('#bt1').css('border-bottom','3px solid #374785');
             if($(window).width() < 600)
             {  
                 console.log("reached Inside this 500px");
                $('#centerbox p').css({'color':'#374785','font-size':'+=10','font-family':'sans-serif'}).hide().fadeIn(500);
             }
             else
             {
             $('#centerbox p').css({'color':'#374785','font-size':'+=12','font-family':'sans-serif'}).hide().fadeIn(500);
             }
            }
            else
            {
            $('#centerbox').html("<p>O</p><p>!! Winner !!</p>");
            $('#bt1').css('border-bottom','none');  
            $('#bt2').css('border-bottom','3px solid #32a3b1');
            if($(document).width() < 600)
            {
                $('#centerbox p').css({'color':'#32a3b1','font-size':'+=10','font-family':'sans-serif'}).hide().fadeIn(500);
            }
            else
            {
                $('#centerbox p').css({'color':'#32a3b1','font-size':'+=12','font-family':'sans-serif'}).hide().fadeIn(500);
            }
        }
       }
           if(a === undefined && count==9)
           {
            console.log(a);
            $('table').fadeOut(1000).remove();
            $('#centerbox').append("<p>X O</p><p>Draw!</p>");
            $('#bt2').css('border-bottom','#32a3b1');
            $('#bt1').css('border-bottom','#374785');
            if($(document).width() < 600)
            {
                $('#centerbox p').css({'color':'#374785','font-size':'+=10','font-family':'sans-serif'}).hide().fadeIn(500);
            }
            else
            {
                $('#centerbox p').css({'color':'#374785','font-size':'+=12','font-family':'sans-serif'}).hide().fadeIn(500);
            }
           }
    
           }
      
    });
}
function CheckWin()
{
    if($('tr:first-child td:nth-child(1)').text() == $('tr:first-child td:nth-child(2)').text() && 
    $('tr:first-child td:nth-child(2)').text() == $('tr:first-child td:nth-child(3)').text() && 
    $('tr:first-child td:nth-child(1)').text() != '' ) {
    
        console.log("1success");
        return "Winner"
    }
    else if($('tr:nth-child(2) td:nth-child(1)').text() == $('tr:nth-child(2) td:nth-child(2)').text() && 
    $('tr:nth-child(2) td:nth-child(2)').text() == $('tr:nth-child(2) td:nth-child(3)').text() && 
    $('tr:nth-child(2) td:nth-child(1)').text() != '' ) {
        console.log("2 success");
        return "Winner";
    }
    else if($('tr:nth-child(3) td:nth-child(1)').text() == $('tr:nth-child(3) td:nth-child(2)').text() && 
    $('tr:nth-child(3) td:nth-child(2)').text() == $('tr:nth-child(3) td:nth-child(3)').text() && 
    $('tr:nth-child(3) td:nth-child(1)').text() != '' ) {
        console.log("3 success");
        return "Winner";
    }
    else if($('tr:nth-child(1) td:nth-child(1)').text() == $('tr:nth-child(2) td:nth-child(1)').text() && 
    $('tr:nth-child(2) td:nth-child(1)').text() == $('tr:nth-child(3) td:nth-child(1)').text() && 
    $('tr:nth-child(3) td:nth-child(1)').text() != '' ) {
        console.log("column 1 success");
        return "Winner";
    }
    else if($('tr:nth-child(1) td:nth-child(2)').text() == $('tr:nth-child(2) td:nth-child(2)').text() && 
    $('tr:nth-child(2) td:nth-child(2)').text() == $('tr:nth-child(3) td:nth-child(2)').text() && 
    $('tr:nth-child(3) td:nth-child(2)').text() != '' ) {
        console.log("column 2 success");
        return "Winner";
    }
    else if($('tr:nth-child(1) td:nth-child(3)').text() == $('tr:nth-child(2) td:nth-child(3)').text() && 
    $('tr:nth-child(2) td:nth-child(3)').text() == $('tr:nth-child(3) td:nth-child(3)').text() && 
    $('tr:nth-child(1) td:nth-child(3)').text() != '' ) {
        console.log("column 3 success");
        return "Winner";
    }
    else if($('tr:nth-child(1) td:nth-child(1)').text() == $('tr:nth-child(2) td:nth-child(2)').text() && 
    $('tr:nth-child(2) td:nth-child(2)').text() == $('tr:nth-child(3) td:nth-child(3)').text() && 
    $('tr:nth-child(1) td:nth-child(1)').text() != '' ) {
        console.log("diagonal success");
        return "Winner";
    }
    else if($('tr:nth-child(1) td:nth-child(3)').text() == $('tr:nth-child(2) td:nth-child(2)').text() && 
    $('tr:nth-child(2) td:nth-child(2)').text() == $('tr:nth-child(3) td:nth-child(1)').text() && 
    $('tr:nth-child(1) td:nth-child(3)').text() != '' ) {
        console.log("daigonal 2 success");
        return "Winner";
    }
    
}