$('#frm').validate({
rules: {
   firstname: "required",
   lastname: "required",
   email: "required",
   password:{
      required:true,
      maxlength:5,
   },
},messages:{
   firstname: "firstname mandatory",
   lastname: "enter last name",
   email: "enter valid email",
   password:{
      required:"please enter password",
      maxlength:"5 character long"

   },
},
submithandlr:function(form){
   form.submit();
}

});