var React = require('react');
var {Link} = require('react-router');

var Examples = function(props) {
  return (
    <div>
      <h1 className="text-center">Examples</h1>
      <p>Here are a few example locations to try out</p>
      <ol>
        <li>
          <Link to="/?location=Heraklion">Heraklion, GR</Link>
        </li>
        <li>
          <Link to="/?location=Chania">Chania, GR</Link>
        </li>
      </ol>
    </div>
  )
}

module.exports = Examples;
