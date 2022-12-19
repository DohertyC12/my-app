import React, { Component } from 'react';
import NewSingle from './NewSingle';
import { mergeStyles } from '@uifabric/merge-styles';

const blueBackgroundClassName = mergeStyles({
    backgroundColor: 'light-blue'
});

const className = mergeStyles(blueBackgroundClassName, {
    padding: 50, // px is assumed if no units are given
    selectors: {
        ':hover': {
            backgroundColor: 'pink'
        }
    }
});

class News extends Component {
    constructor(props) {
        super(props);
        this.state = {
            news: [],
        };
    }

    componentDidMount() {
        const url = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=c732e6a3336d40e7a32d2aaf98899f6e';

        fetch(url)
            .then((response) => {
                //first return response then do something with it
                return response.json();
            })
            .then((data) => {
                this.setState({
                    news: data.articles
                })
            })
            .catch((error) => console.log(error));

    }

    renderItems() {
        return this.state.news.map((item) => (
            <div className={className}>
                <NewSingle key={item.id} item={item} />
            </div>

        ));
    }
    render() {
        return (
            <div>
                <h2>News API Tester</h2>
            <ul>
                {this.renderItems()}
            </ul></div>
        );
    }
}

export default News;
