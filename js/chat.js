$(document).ready(function(){
  var socket = io();
  socket.on('connect', function() {

    $("#chatForm").submit(function(e) {
      e.preventDefault();
      socket.emit('sendMsg',{
        msg: $("#msg").val(),
      });
      $("#msg").val("");
      $("#msg").focus();
    }); //chatform event
    socket.on('updateMsgs', function(data) {
      $(".msgs").append("<p>"+data.msg+"</p>");
   }); //updateMessages
}); //socket

});
