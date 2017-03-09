var MessageBox = React.createClass({
  getInitialState: function() {
    return {
      messages: [
        { id: 1, user: 'Tom', text: 'Good morning' },
        { id: 2, user: 'John', text: 'Good afternoon' },
        { id: 3, user: 'Emily', text: 'Good evening' }
      ]
    };
  },

  handleMessageSubmit: function(message) {
    message.id = new Date();
    var newMessages = this.state.messages.concat(message);
    this.setState({ messages: newMessages });
  },

  render: function() {
    var messageItems = this.state.messages.map(function(message) {
      return (
        <MessageItem key={message.id} message={message}/>
      );
    });

    return (
      <div className="messageBox">
        {messageItems}
        <MessageForm onMessageSubmit={this.handleMessageSubmit}/>
      </div>
    );
  }
});
