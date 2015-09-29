"use strict";

var data = [{ title: "Preprint 1", author: "Bob", category: "Psychology", abstract: "An example preprint" }, { title: "Preprint 2", author: "Steve", category: "Psychology", abstract: "Another example preprint" }, { title: "Preprint 3", author: "Joe", category: "Sociology", abstract: "A third example preprint" }, { title: "Preprint 4", author: "Rich", category: "Psychology", abstract: "A last example preprint" }];

var PreprintService = React.createClass({
    displayName: "PreprintService",

    render: function render() {
        return React.createElement(
            "div",
            { className: "preprintService" },
            React.createElement(
                "h1",
                null,
                "This is an example preprint service built using React.js"
            ),
            React.createElement(
                "div",
                { id: "holdsList" },
                React.createElement(PreprintList, { data: this.props.data })
            )
        );
    }
});

var PreprintList = React.createClass({
    displayName: "PreprintList",

    getInitialState: function getInitialState() {
        return { filterPsych: false, filterSoc: false, listName: '' };
    },
    registerPsychFilter: function registerPsychFilter() {
        if (this.state.filterSoc) {
            this.setState({ filterSoc: false, listName: '' });
        }
        this.setState({ filterPsych: true, listName: 'psych ' });
    },
    registerSocFilter: function registerSocFilter() {
        if (this.state.filterPsych) {
            this.setState({ filterPsych: false, listName: '' });
        }
        this.setState({ filterSoc: true, listName: 'soc ' });
    },
    clearFilters: function clearFilters() {
        this.setState({ filterPsych: false });
        this.setState({ filterSoc: false });
        this.setState({ listName: '' });
    },
    handleClick: function handleClick(i) {
        var insert = React.createElement(SinglePreprint, { data: this.props.data[i], returnData: this.props.data });
        React.render(insert, document.getElementById('preprintList'));
    },
    render: function render() {
        var filters = this.state.filterPsych || this.state.filterSoc;
        if (!filters) {
            return React.createElement(
                "div",
                { className: "preprintList", id: "preprintList" },
                React.createElement(
                    "h2",
                    null,
                    "This is a list of all ",
                    this.state.listName,
                    " preprints"
                ),
                React.createElement(
                    "ul",
                    null,
                    this.props.data.map(function (singlePreprint, i) {
                        return React.createElement(
                            "li",
                            null,
                            React.createElement(
                                "h2",
                                { onClick: this.handleClick.bind(this, i), key: i },
                                singlePreprint.title
                            ),
                            React.createElement(
                                "p",
                                null,
                                singlePreprint.author
                            ),
                            React.createElement(
                                "p",
                                null,
                                singlePreprint.category
                            ),
                            React.createElement(
                                "p",
                                null,
                                singlePreprint.abstract
                            )
                        );
                    }, this)
                ),
                React.createElement(
                    "ul",
                    null,
                    React.createElement(
                        "li",
                        { onClick: this.registerPsychFilter },
                        "Psychology"
                    ),
                    React.createElement(
                        "li",
                        { onClick: this.registerSocFilter },
                        "Sociology"
                    ),
                    React.createElement(
                        "li",
                        { onClick: this.clearFilters },
                        "All"
                    )
                )
            );
        } else if (this.state.filterPsych) {
            return React.createElement(
                "div",
                { className: "preprintList", id: "preprintList" },
                React.createElement(
                    "h2",
                    null,
                    "This is a list of all ",
                    this.state.listName,
                    " preprints"
                ),
                React.createElement(
                    "ul",
                    null,
                    this.props.data.map(function (singlePreprint, i) {
                        if (singlePreprint.category === 'Psychology') {
                            return React.createElement(
                                "li",
                                null,
                                React.createElement(
                                    "h2",
                                    { onClick: this.handleClick.bind(this, i), key: i },
                                    singlePreprint.title
                                ),
                                React.createElement(
                                    "p",
                                    null,
                                    singlePreprint.author
                                ),
                                React.createElement(
                                    "p",
                                    null,
                                    singlePreprint.category
                                ),
                                React.createElement(
                                    "p",
                                    null,
                                    singlePreprint.abstract
                                )
                            );
                        }
                    }, this)
                ),
                React.createElement(
                    "ul",
                    null,
                    React.createElement(
                        "li",
                        { onClick: this.registerPsychFilter },
                        "Psychology"
                    ),
                    React.createElement(
                        "li",
                        { onClick: this.registerSocFilter },
                        "Sociology"
                    ),
                    React.createElement(
                        "li",
                        { onClick: this.clearFilters },
                        "All"
                    )
                )
            );
        } else if (this.state.filterSoc) {
            return React.createElement(
                "div",
                { className: "preprintList", id: "preprintList" },
                React.createElement(
                    "h2",
                    null,
                    "This is a list of all ",
                    this.state.listName,
                    " preprints"
                ),
                React.createElement(
                    "ul",
                    null,
                    this.props.data.map(function (singlePreprint, i) {
                        if (singlePreprint.category === 'Sociology') {
                            return React.createElement(
                                "li",
                                null,
                                React.createElement(
                                    "h2",
                                    { onClick: this.handleClick.bind(this, i), key: i },
                                    singlePreprint.title
                                ),
                                React.createElement(
                                    "p",
                                    null,
                                    singlePreprint.author
                                ),
                                React.createElement(
                                    "p",
                                    null,
                                    singlePreprint.category
                                ),
                                React.createElement(
                                    "p",
                                    null,
                                    singlePreprint.abstract
                                )
                            );
                        }
                    }, this)
                ),
                React.createElement(
                    "ul",
                    null,
                    React.createElement(
                        "li",
                        { onClick: this.registerPsychFilter },
                        "Psychology"
                    ),
                    React.createElement(
                        "li",
                        { onClick: this.registerSocFilter },
                        "Sociology"
                    ),
                    React.createElement(
                        "li",
                        { onClick: this.clearFilters },
                        "All"
                    )
                )
            );
        }
    }
});

var SinglePreprint = React.createClass({
    displayName: "SinglePreprint",

    backStep: function backStep() {},
    render: function render() {
        return React.createElement(
            "div",
            { className: "singlePreprint" },
            React.createElement(
                "h2",
                null,
                this.props.data.title
            ),
            React.createElement(
                "p",
                null,
                this.props.data.author
            ),
            React.createElement(
                "p",
                null,
                this.props.data.category
            ),
            React.createElement(
                "p",
                null,
                this.props.data.abstract
            )
        );
    }
});

React.render(React.createElement(PreprintService, { data: data }), document.getElementById('content'));