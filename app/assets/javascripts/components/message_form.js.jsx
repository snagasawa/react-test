var MessageForm = React.createClass({
  render: function(){
    return (
      <form className="commentForm">
        <input type="text" placeholder="Your name" />
        <input type="text" placeholder="Message" />
        <input type="submit" placeholder="Post" />
      </form>
    );
  }
});
