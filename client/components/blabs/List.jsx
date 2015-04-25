var React = require('react');
var Blab = require('./Blab.jsx');

module.exports = React.createClass({
    render: function () {
        console.log(this.props.data)
        var blabs = this.props.data.map(function (blab) {
            return (
                <Blab key={blab.id} content={blab.content} />
            );
        });
        return (
            <ul className="blabs-list">
        {blabs}
            </ul>
        );
    }
});