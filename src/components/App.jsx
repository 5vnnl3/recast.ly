class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      done: false,
      currentVideo: window.fakeVideoData
    };
  }

  render() {
    return (
      <div className='test'>
        <Nav />
        <div className="col-md-7">
          <VideoPlayer video={this.state.currentVideo[0]} />
        </div>
        <div className="col-md-5">
          <VideoList videos={this.state.currentVideo} />
        </div>
      </div>
    );
  }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;

