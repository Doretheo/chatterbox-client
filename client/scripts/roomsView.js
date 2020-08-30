var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function () {
  },

  render: _.template(`
    <option value="rooms"><%- roomname%></option>
  `),

  // addRoom: function(newRoom) {

  // },

  // getRoomname: function (message) {
  //   var name = RoomsView.render(message);
  //   console.log(name);
  // },

  // renderRoom: function (getRoomname(message)) {
  //   var $room = $(RoomsView.render(roomname));
  //   console.log(RoomsView.render(message.roomname));
  //   console.log($room);
  //   // $room.appendTo(this.$select);
  // }
};
