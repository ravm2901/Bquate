import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {








  getString = (n)  => {

    var mul3 = ['Multi'];
    var mul5 = ['IT'];


    var list = n.map((i) => {

      let a = i%3,
          b = i%5;


      if( a==0 && b==0)
        return (<span> Multipli </span>);

      return (<span> {(mul3[a] || mul5[b]) || i} </span>);
    });

    return (list);
  }





  render() {


    let numbers = [];

    for(let i=1; i <= 100; i++ ){
      numbers.push(i);
    }


    let str = this.getString(numbers);



    return (
      <div className="App">
        <header className="row App-header">
          <div className="col-2">
            <img src={logo} className="App-logo" alt="logo" />
          </div>
          <div className="col-9">
            <p className="App-text">
              Write a program that prints all the numbers from 1 to 100. However, for multiples of 3, instead of the
              number, print "Multi". For multiples of 5 print "IT". For numbers which are multiples of both 3 and 5,
              print "Multipli". But here's the catch: you can use only one `if`. No multiple branches, ternary operators or `else`.
              Requirements
              <ul>
                <li> 1 if </li>
                <li> You can't use `else`, `else if` or ternary</li>
                <li> Unit tests</li>
                <li> We are big fans of JS, Node.JS and React.</li>
              </ul>
            </p>
          </div>
        </header>
        <main>

          <div className="row list-content">
            <div className="col-6 mx-auto">
              {str}
            </div>
          </div>
        </main>
      </div>
    );
  }
}

export default App;
