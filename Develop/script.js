
$(function () {
  $('#currentDay').text(dayjs().format("ddd MMMM D"))
  
  for (i = 9; i < 18; i++){
    if (dayjs().hour()>i){
      $("#hour-"+i).addClass("past") 
     }
     else if (dayjs().hour()===i){
       $("#hour-"+i).addClass("present")
   
     }
     else {
       $("#hour-"+i).addClass("future")
   
     } 
  }
  $(".saveBtn").on("click",function(){
    console.log($(this))
  })
  $(document).ready(function (){
    $('.saveBtn').on('click', function (){
      var description = $(this).siblings('.description').val();
      var time = $(this).parent().attr('id');
      console.log(description)
      console.log(time);
      localStorage.setItem(time, description);
    })
  })
  
  

});
