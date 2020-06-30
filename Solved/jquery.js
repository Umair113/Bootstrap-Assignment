//ZOOM IN the large logos pics to front when hovered.
$(".card-img-top").mouseenter(function(){
    $(this).siblings(".card-body").toggle();    
    $(this).css('transform','scale(1.1)');
})

$(".card-img-top").mouseleave(function(){
    $(this).siblings(".card-body").toggle();
    $(this).css('transform','scale(1)');
 })
 
 
 
 
 
 
 /*Not in Requirements
 //To Bring the small logos pic to front when hovered.
 $(".smallCardsBorder").mouseenter(function(){
    $(this).css('transform','scale(1.1)');
})

$(".smallCardsBorder").mouseleave(function(){
   
    $(this).css('transform','scale(1)');
 })
 */