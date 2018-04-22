import _ from 'lodash';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

const API_KEY='AIzaSyAVyiTgNrRHDaNSHJA7CL92qaZpmn8by9Y';



class App extends Component{

  constructor(props){
    super(props);

    this.state={
      videos:[],
      selectedVideo: null
     };

     this.videoSearch('Rajni');
    }

  videoSearch(term){
    YTSearch({ key: API_KEY, term: term}, (videos) => {
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
       });//ES6 code, it can be used when both key and value are represented by same name.
      //the above code equals this.setState({ videos: videos })
    });
  }

  render() {

    const videoSearch= _.debounce((term) => { this.videoSearch(term)}, 300);//throttle input

    return(
      <div>
        <SearchBar onSearchTemChange={ videoSearch} />
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList
        onVideoSelect= {selectedVideo => this.setState({selectedVideo}) }
        videos= { this.state.videos } />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('.container'));
