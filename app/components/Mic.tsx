/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable class-methods-use-this */
import React from 'react';
import { Link } from 'react-router-dom';
import { ReactMicPlus } from 'react-mic-plus';

class Mic extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      record: false
    };
  }

  onStop(recordedBlob) {
    // eslint-disable-next-line no-console
    console.log('recordedBlob is: ', recordedBlob);
  }

  startRecording = () => {
    this.setState({
      record: true
    });
  };

  stopRecording = () => {
    this.setState({
      record: false
    });
  };

  render() {
    return (
      <div>
        <Link to={routes.HOME}>
          <i className="fa fa-arrow-left fa-3x" />
        </Link>
        <ReactMicPlus
          // eslint-disable-next-line react/destructuring-assignment
          record={this.state.record}
          className="sound-wave"
          onStop={this.onStop}
          strokeColor="#000000"
          backgroundColor="#FF4081"
          nonstop
          duration={5}
        />
        <button onTouchTap={this.startRecording} type="button">
          Start
        </button>
        <button onTouchTap={this.stopRecording} type="button">
          Stop
        </button>
      </div>
    );
  }
}

ReactDOM.render(<Mic />, document.getElementById('sound-wave'));
