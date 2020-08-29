var MessagesView = {
  // DOM
  $chats: $('#chats'),

  initialize: function() {
  },

  // this function should call template
  // render the message
  render: function() {
  },

  renderMessage: function(message) {
    //message.appendTo($('#chats'));
    console.log($('#chats'));
    var newMessage = message.username + ': ' + message.text;
    console.log(newMessage);
    ('#chats').append.render(message);
    console.log(MessagesView.$chats.children());
  }


};