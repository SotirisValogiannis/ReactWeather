var React = require('react');

var ErrorModal = React.createClass({

  getDefaultProps: function(){
    return {
      title: 'Error'
    }
  },
  propTypes:  {
    title: React.PropTypes.string,
    message: React.PropTypes.string.isRequired
  },
  componentDidMount: function(){
    //console.log(this.props);
    var modal = new Foundation.Reveal($('#error-modal'));
    modal.open();
  },
  render: function(){
    console.log(this.props);
    var {title, message} = this.props;
    return (
      <div id="error-modal" className="reveal tiny text-center" data-reveal="">
        <h4>{title}</h4>
        <p>{message}</p>
        <p>
          <button className="button hollow" data-close="">
            Okay
          </button>
        </p>
      </div>
    );
  }

});

module.exports = ErrorModal;
