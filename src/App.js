
import React, { Component } from "react";
import SearchBar from './components/searchbar.js';
import VideoDetail from "./components/videodetail.js";
import VideoList from "./components/videolist.js";
import axios from 'axios';
import('../src/css/index.css');

class App extends Component {
  state = {
    searchTerm: '',
    data: '',
    videoId: '',
    description: '',
    title: ''
  }
  //constructor should always be a traditional function
  constructor(props) {
    super(props);
    console.log('constructor');
  }


  handleChange = ({ target: { value: searchTerm } }) => this.setState({ ...this.state, searchTerm });



  componentDidMount() {
  }
  componentDidUpdate(prevProps, prevState) {

    const getYouTubeVideos = () => {
      const baseUrl = 'https://www.googleapis.com/youtube/v3/search';
      const key = 'AIzaSyAQ-SSDHyo_eaUZGpp7prn7VKO6FQWLMRk';
      const type = 'video';
      const part = 'snippet';
      const q = this.state.searchTerm;
      const realtUrl = `${baseUrl}?key=${key}&part=${part}&type=${type}&q=${q}`;
      //It will return a promise(axios.get)
      axios.get(realtUrl).then(response => { this.setState({ ...this.state, data: response.data }); }).catch(error => console.log(error));
    }
    if (prevState.searchTerm !== this.state.searchTerm) {
      getYouTubeVideos();
    }
  }
  handleSelect = (videoId, description, title) => this.setState({ ...this.state, videoId, description, title });

  render() {
    const { data, description, title, videoId } = this.state;
    const items = data.items || [];
    return (
      <div className="container">
        <SearchBar handleChange={this.handleChange} />
        <div className="row">
          <VideoDetail videoId={videoId} description={description} title={title} />

          <VideoList items={items} handleSelect={this.handleSelect} />
        </div>
      </div>
    );
  }
}

export default App;
