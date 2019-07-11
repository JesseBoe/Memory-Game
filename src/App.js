import React from 'react';
import bg from './images/bg.png';
import Memcard from './components/MemoryBlock';

class App extends React.Component{

  emojiList = ['😀', '😁', '😂', '😘', '🙄', '😋', '😐', '😑', '😶', '😕', '🙃', '😭', '😠', '🤢', '😬', '🤡', '🥴', '😌'];

  state = {
    CurrentDisplay: [],
    clickedList : [],
    currentScore : 0,
    bestScore : 0,
    lastGuess : "Click an Emoji to start!"
  }

  componentWillMount() {
    this.randomEmoji();
  }

  compareClicked(num) {
    console.log(this.state.CurrentDisplay[num]);
    var correct = true;
    for (let i = 0; i < this.state.clickedList.length; i++) {
      const element = this.state.clickedList[i];
      if (element === this.state.CurrentDisplay[num]) {
        correct = false;
      }  
    }

    if (correct) {
      var newClicked = this.state.clickedList;
      var newScore = this.state.currentScore + 1;
      newClicked.push(this.state.CurrentDisplay[num]);

      if (this.state.bestScore < newScore) {
        this.setState({
          currentScore: newScore,
          clickedList: newClicked,
          bestScore: newScore,
          lastGuess: "Correct!"
        })
      }
      else {
        this.setState({
          currentScore: newScore,
          clickedList: newClicked,
          lastGuess: "Correct!"
        })
      }
    }
    else {
      this.setState({
        currentScore : 0,
        clickedList : [],
        lastGuess: "Incorrect!"
      })
    }
    this.randomEmoji();
  }

  randomEmoji = () => {
    var newDisplay = [];
    for (let i = 0; i < 12; i++) {
      newDisplay[i] = this.emojiList[Math.floor(Math.random() * this.emojiList.length)]
    }
    this.setState({
      CurrentDisplay: newDisplay
    });
  }

  render() {
    return (
      <div>
        <div style={{ backgroundImage: `url(${bg})`, height: "418px", boxShadow: "0 6px 12px rgba(0,0,0,.24), 0 6px 12px rgba(0,0,0,.4)" }}>
          <nav className="navbar row sticky-top" style={{ backgroundColor: "rgba(81, 51, 164, 1)", color: "white" }}>
            <span className="navbar-brand mb-0 h1 col-sm"><h3>Clicky Game!</h3></span>
            <span className="col-sm d-flex justify-content-center">
              <h1>{this.state.lastGuess}</h1>
            </span>
            <span className="col-sm d-flex justify-content-end">
              <h3>Score: {this.state.currentScore} | Top Score: {this.state.bestScore}</h3>
            </span>
          </nav>
          <div className="header" style={{ margin: "100px", color: "white" }}>
            <h1 className="mt-6 d-flex justify-content-center">Clicky Game!</h1>
            <h5 className="mt-4 d-flex justify-content-center" style={{ paddingBottom: "150px" }}>Click on an image to earn points, but don't click on any more than once!</h5>
          </div>
        </div>
        <div className="container" style={{ width: "50%" }}>
          <div class="card-deck" style={{ marginTop: "30px" }}>
            <div className="card" style={{ boxShadow: "0 6px 12px rgba(0,0,0,.24), 0 6px 12px rgba(0,0,0,.4)", cursor: "pointer" }} onClick={() => this.compareClicked(0)}>
              <Memcard emoji={this.state.CurrentDisplay[0]}></Memcard>
            </div>
            <div className="card" style={{ boxShadow: "0 6px 12px rgba(0,0,0,.24), 0 6px 12px rgba(0,0,0,.4)", cursor: "pointer" }} onClick={() => this.compareClicked(1)}>
              <Memcard emoji={this.state.CurrentDisplay[1]}></Memcard>
            </div>
            <div className="card" style={{ boxShadow: "0 6px 12px rgba(0,0,0,.24), 0 6px 12px rgba(0,0,0,.4)", cursor: "pointer" }} onClick={() => this.compareClicked(2)}>
              <Memcard emoji={this.state.CurrentDisplay[2]}></Memcard>
            </div>
            <div className="card" style={{ boxShadow: "0 6px 12px rgba(0,0,0,.24), 0 6px 12px rgba(0,0,0,.4)", cursor: "pointer" }} onClick={() => this.compareClicked(3)}>
              <Memcard emoji={this.state.CurrentDisplay[3]}></Memcard>
            </div>
          </div>
          <div class="card-deck" style={{ marginTop: "30px" }}>
            <div className="card" style={{ boxShadow: "0 6px 12px rgba(0,0,0,.24), 0 6px 12px rgba(0,0,0,.4)", cursor: "pointer" }} onClick={() => this.compareClicked(4)}>
              <Memcard emoji={this.state.CurrentDisplay[4]}></Memcard>
            </div>
            <div className="card" style={{ boxShadow: "0 6px 12px rgba(0,0,0,.24), 0 6px 12px rgba(0,0,0,.4)", cursor: "pointer" }} onClick={() => this.compareClicked(5)}>
              <Memcard emoji={this.state.CurrentDisplay[5]}></Memcard>
            </div>
            <div className="card" style={{ boxShadow: "0 6px 12px rgba(0,0,0,.24), 0 6px 12px rgba(0,0,0,.4)", cursor: "pointer" }} onClick={() => this.compareClicked(6)}>
              <Memcard emoji={this.state.CurrentDisplay[6]}></Memcard>
            </div>
            <div className="card" style={{ boxShadow: "0 6px 12px rgba(0,0,0,.24), 0 6px 12px rgba(0,0,0,.4)", cursor: "pointer" }} onClick={() => this.compareClicked(7)}>
              <Memcard emoji={this.state.CurrentDisplay[7]}></Memcard>
            </div>
          </div>
          <div class="card-deck" style={{ marginTop: "30px" }}>
            <div className="card" style={{ boxShadow: "0 6px 12px rgba(0,0,0,.24), 0 6px 12px rgba(0,0,0,.4)", cursor: "pointer" }} onClick={() => this.compareClicked(8)}>
              <Memcard emoji={this.state.CurrentDisplay[8]}></Memcard>
            </div>
            <div className="card" style={{ boxShadow: "0 6px 12px rgba(0,0,0,.24), 0 6px 12px rgba(0,0,0,.4)", cursor: "pointer" }} onClick={() => this.compareClicked(9)}>
              <Memcard emoji={this.state.CurrentDisplay[9]}></Memcard>
            </div>
            <div className="card" style={{ boxShadow: "0 6px 12px rgba(0,0,0,.24), 0 6px 12px rgba(0,0,0,.4)", cursor: "pointer" }} onClick={() => this.compareClicked(10)}>
              <Memcard emoji={this.state.CurrentDisplay[10]}></Memcard>
            </div>
            <div className="card" style={{ boxShadow: "0 6px 12px rgba(0,0,0,.24), 0 6px 12px rgba(0,0,0,.4)", cursor: "pointer" }} onClick={() => this.compareClicked(11)}>
              <Memcard emoji={this.state.CurrentDisplay[11]}></Memcard>
            </div>
          </div>
        </div>
        <footer className="footer" style={{ marginTop: "30px", backgroundColor: "rgba(81, 51, 164, 0.95)", color: "white", height: "40px" }}>
        </footer>
      </div>
    )
  }
}

export default App;
