/**
 * Created by Wallace on 2016/12/8 0008.
 */
$(function(){
    $.ajax({
        url:'./aside.html',
        type:'get',
        success:function(data){
            $('.aside-box').append(data);
        }
    });
});