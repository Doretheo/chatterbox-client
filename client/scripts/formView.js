var FormView = {

  $form: $('form'),

  initialize: function() {
    FormView.$form.on('submit', FormView.handleSubmit);
  },

  handleSubmit: function(event) {
    // Stop the browser from submitting the form
    event.preventDefault();
    var $postMessage = $('#message').val();
    console.log($postMessage);
    var message = {
      username: App.username,
      text: $postMessage
    };
    var success = function () {
      // call a get request so it pulls all the new messages from the server and
      //console.log('success');
      App.fetch(App.stopSpinner);
    };
    Parse.create(message, success);

  },

  setStatus: function(active) {
    var status = active ? 'true' : null;
    FormView.$form.find('input[type=submit]').attr('disabled', status);
  }

};