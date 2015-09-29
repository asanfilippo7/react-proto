var data = [
    {title: "Preprint 1", author: "Bob", category: "Psychology", abstract: "An example preprint"},
    {title: "Preprint 2", author: "Steve", category: "Psychology", abstract: "Another example preprint"},
    {title: "Preprint 3", author: "Joe", category: "Sociology", abstract: "A third example preprint"},
    {title: "Preprint 4", author: "Rich", category: "Psychology", abstract: "A last example preprint"}
]

var PreprintService = React.createClass({
    render: function() {
        return (
            <div className = "preprintService">
                <h1>This is an example preprint service built using React.js</h1>
                <div id="holdsList">
                    <PreprintList data = {this.props.data} />
                </div>
            </div>
            );
    }
});


var PreprintList = React.createClass({
    getInitialState: function() {
        return {filterPsych: false, filterSoc: false, listName: '' };
    },
    registerPsychFilter: function() {
        if(this.state.filterSoc) {
            this.setState({filterSoc: false, listName: ''});
        }
        this.setState({filterPsych: true, listName: 'psych '});
    },
    registerSocFilter: function() {
        if(this.state.filterPsych) {
            this.setState({filterPsych: false, listName: ''});
        }
        this.setState({filterSoc: true, listName: 'soc '});
    },
    clearFilters: function() {
        this.setState({filterPsych: false});
        this.setState({filterSoc: false});
        this.setState({listName: ''});
    },
    handleClick: function(i) {
        var insert = <SinglePreprint data={this.props.data[i]} returnData={this.props.data} />
        React.render(insert, document.getElementById('preprintList'));
    },
    render: function() {
    var filters = this.state.filterPsych || this.state.filterSoc;
    if(!filters) {
    return (
        <div className="preprintList" id="preprintList">
        <h2>This is a list of all {this.state.listName} preprints</h2>
            <ul>
                {this.props.data.map(function(singlePreprint, i) {
                  return (
                    <li>
                    <h2 onClick={this.handleClick.bind(this, i)} key={i}>{singlePreprint.title}</h2>
                  <p>{singlePreprint.author}</p>
                  <p>{singlePreprint.category}</p>
                  <p>{singlePreprint.abstract}</p>
                    </li>
                  );
                }, this)}
            </ul>
            <ul>
                <li onClick={this.registerPsychFilter}>Psychology</li>
                <li onClick={this.registerSocFilter}>Sociology</li>
                <li onClick={this.clearFilters}>All</li>
            </ul>
        </div>                     
    );
    }
    else if (this.state.filterPsych) {
        return (
            <div className="preprintList" id="preprintList">
            <h2>This is a list of all {this.state.listName} preprints</h2>
            <ul>
                {this.props.data.map(function(singlePreprint, i) {
                if(singlePreprint.category === 'Psychology') {
                  return (
                    <li>
                    <h2 onClick={this.handleClick.bind(this, i)} key={i}>{singlePreprint.title}</h2>
                  <p>{singlePreprint.author}</p>
                  <p>{singlePreprint.category}</p>
                  <p>{singlePreprint.abstract}</p>
                    </li>
                  ); }
                }, this)}
            </ul>
            <ul>
                <li onClick={this.registerPsychFilter}>Psychology</li>
                <li onClick={this.registerSocFilter}>Sociology</li>
                <li onClick={this.clearFilters}>All</li>
            </ul>
            </div> 
        );
    }
    else if (this.state.filterSoc) {
        return (
            <div className="preprintList" id="preprintList">
            <h2>This is a list of all {this.state.listName} preprints</h2>
            <ul>
                {this.props.data.map(function(singlePreprint, i) {
                if(singlePreprint.category === 'Sociology') {
                  return (
                    <li>
                    <h2 onClick={this.handleClick.bind(this, i)} key={i}>{singlePreprint.title}</h2>
                  <p>{singlePreprint.author}</p>
                  <p>{singlePreprint.category}</p>
                  <p>{singlePreprint.abstract}</p>
                    </li>
                  ); }
                }, this)}
            </ul>
            <ul>
                <li onClick={this.registerPsychFilter}>Psychology</li>
                <li onClick={this.registerSocFilter}>Sociology</li>
                <li onClick={this.clearFilters}>All</li>
            </ul>
            </div> 
        );
    }
  }
});

var SinglePreprint = React.createClass({
    backStep: function() {
        
    },
    render:function() {
        return (
            <div className="singlePreprint">
            <h2>{this.props.data.title}</h2>
            <p>{this.props.data.author}</p>
            <p>{this.props.data.category}</p>
            <p>{this.props.data.abstract}</p>
            </div>
        );
    }
});


React.render(
    <PreprintService data = {data}/>, document.getElementById('content')
);