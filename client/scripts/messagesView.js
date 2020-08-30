var MessagesView = {
  // DOM
  $chats: $('#chats'),

  initialize: function () {
    $('button.update').on('click', function () { App.fetch(App.stopSpinner); } );

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
    // this.$chats.empty();
    MessagesView.$chats.html('');
    for (var message of arrayOfMessages) {
      //  call MassagesView.renderMessage(data[i])
      MessagesView.renderMessage(message);
    }

    $('.username').on('click', function(event) {
      event.preventDefault();
      var $friend = $('.username').val();
      console.log($('.username'));
      console.log($friend);
    });
  }
};

