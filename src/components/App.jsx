class App extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
    props.searchYouTube(_, () => { window.fakeVideoData; });
    this.state = {
      currentVideo: window.fakeVideoData[0],
      videoList: window.fakeVideoData,
      // initialize: console.log(props)
    };
  }

  // componentDidMount() {
  //   this.state.initialize();
  //   // window.searchYoutube
  //   // this.searchYoutube;
  // }

  onTitleClick(currentVideo) {
    this.setState({currentVideo});
  }

  render() {
    return (
      <div>
        <Nav />
        <div className="col-md-7">
          <VideoPlayer video={this.state.currentVideo} />
        </div>
        <div className="col-md-5">
          <VideoList videos={this.state.videoList} nextVideo={this.onTitleClick.bind(this)} />
        </div>
      </div>
    );
  }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;
