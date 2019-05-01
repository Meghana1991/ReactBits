import React, { Component } from 'react';

class Counter extends Component {
    state = {
        count: 0,
        imageUrl: "https://picsum.photos/200",
        tags: ["tag1", "tag2", "tag3", "tag4"]
    };

    incrementFunction(){
        console.log('Increment Called')
    }

    renderTags() {
        if (this.state.tags.length === 0) return <p>There are no tags!</p>;
        return <ul>
                    {this.state.tags.map(tag => 
                    <li onClick={this.incrementFunction} key={tag}>{tag}</li>
                    )}
               </ul>
    }

    render() {
        /**
         * Since more than 1 el is there
         * you need to wrap it into single el
         */
        // return (<div><h1>hey There!</h1><button>Click me</button></div>);
        // or
        return (
            /** <React.Fragment>
                <img src={this.state.imageUrl} />
                <span className="badge badge-primary m-2">{this.formatCount()}</span>
                <button className="btn btn-primary">Increment</button>
            </React.Fragment>*/
            <div>
                { this.renderTags() }
            </div>
        );
    }

    formatCount() {
        // return (this.state.count == 0 ? "Zero" : this.state)
        // or
        return (this.state.count == 0 ? <h1>Zero</h1> : this.state)
    }
}

export default Counter
