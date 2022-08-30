import React, {Component} from 'react';
import NewSingle from './NewSingle';

class News extends Component {
    constructor(props) {
        super(props);
        this.state = {
            news: [],
        };
    }

    componentDidMount(){
        const url = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=c732e6a3336d40e7a32d2aaf98899f6e';

        fetch(url)
            .then((response)=> {
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
            <NewSingle key={item.id} item = {item} />
        ));
    }
    render() {
        return (
            <ul>
                {this.renderItems()}
            </ul>
        );
    }
}

export default News;
