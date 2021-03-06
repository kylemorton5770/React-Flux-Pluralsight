'use strict';

var React = require('react');
var Router = require('react-router');
var Link = Router.Link;
var AuthorActions = require('../../actions/authorActions');
var AuthorStore = require('../../stores/authorStore');
var AuthorList = require('./authorList');

var AuthorPage = React.createClass({
    componentWillMount: function() {
        //any change in store, call onChange method
        AuthorStore.addChangeListener(this._onChange);
    },
    componentWillUnmount: function() {
        //any change in store, call onChange method
        AuthorStore.removeChangeListener(this._onChange);
    },
    getInitialState: function() {
        return {
            authors: AuthorStore.getAllAuthors()
        };
    },
    _onChange: function() {
        this.setState({authors: AuthorStore.getAllAuthors() });
    },
    render: function() {
        return (
            <div>
                <h1>Authors</h1>
                <Link to="addAuthor" className="btn btn-default">Add Author</Link>
                <AuthorList authors={this.state.authors} />
            </div>
        );
    }
});

module.exports = AuthorPage;