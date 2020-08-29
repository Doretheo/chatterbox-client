var MessagesView = {
  // DOM
  $chats: $('#chats'),

  initialize: function () {
  },

  // this function should call template
  // render the message
  render: _.template(`
    <div class="chat">
      <div class="username"> <%- username %> </div>
      <div> <%- text %> </div>
    </div>
  `),


  renderMessage: function (message) {
    //var copyMessage = message;
    message.username = message.username || '';
    message.text = message.text || '';
    var $message = $(MessagesView.render(message));
    $message.appendTo(this.$chats);
  },

  displayMessages: function (arrayOfMessages) {
    //loop over data array
    for (var message of arrayOfMessages) {
      //  call MassagesView.renderMessage(data[i])
      MessagesView.renderMessage(message);
    }
  }
};

