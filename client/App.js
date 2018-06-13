import React, { Component } from 'react';
import * as _ from 'lodash';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      asyncAwaitWorks: false
    }
  }

  defaultParams() {
    let closure = (num=3) => num;
    return closure() === 3;
  }

  restParams() {
    let closure = (first, ...rest) => rest;
    let nums = closure(null, 1, 2, 3);
    return _.isEqual([1, 2, 3], nums);
  }

  spreadOperator() {
    let originalArr = [1, 2, 3, 4];
    let forArrays = _.isEqual([...originalArr], originalArr);
    let obj1 = { foo: 'bar', x: 42 };
    let obj2 = {...obj1};
    let forObjects = _.isEqual(obj1, obj2);
    return forArrays && forObjects;
  }

  templateLiteralString() {
    let world = "world";
    return "hello, world" === `hello, ${world}`;
  }

  objectDestructuring() {
    let obj = {foo: 'bar', taco: 'cat'};
    let {foo, taco} = obj;
    return foo === 'bar' && taco === 'cat';
  }

  arrayDestructuring() {
    let [a, b] = [5, 9];
    return (a + b) === 14;
  }

  enhancedObjectLiterals() {
    let a = 1, b = 2, c = 3;
    let obj = {
      a,
      b,
      c
    }
    return (obj.a + obj.b + obj.c) === 6;
  }

  arrowFunctions() {
    let closure = () => {
      return this;
    }
    return closure() !== undefined;
  }

  promises() {
    var promise1 = new Promise(function(resolve, reject) {
      setTimeout(resolve, 100, 'Promises work!!');
    });

    return promise1
      .then( val => {
        console.log(val);
        return true;
      })
      .catch( e => {
        console.error("ERROR in promises!!!: ", e);
        return false;
      });
  }

  letKeyword() {
    let x = 1;
    if (x === 1) {
      let x = 2;
    }
    return x === 1
  }

  isInteger() {
    return Number.isInteger(8);
  }

  stringIncludes() {
    return 'sass'.includes('a');
  }

  forOf() {
    let iterable = [10, 20, 30];
    let sum = 0;
    for (let value of iterable) {
      sum += value;
    }
    return sum === 60;
  }

  maps() {
    var myMap = new Map();
    myMap.set('thisIsTheKey', "thisIsTheValue");
    return myMap.get('thisIsTheKey') === 'thisIsTheValue';
  }

  maps() {
    var myMap = new Map();
    myMap.set('thisIsTheKey', "thisIsTheValue");
    return myMap.get('thisIsTheKey') === 'thisIsTheValue';
  }

  sets() {
    let mySet = new Set([1, 2, 2, 3, 3]);
    let otherSet = new Set([1, 2, 3]);
    let has2 = mySet.has(2);
    return _.isEqual(mySet, otherSet) && has2;
  }

  arrayFrom() {
    function closure() {
      return Array.from(arguments);
    }
    let args = _.isEqual(closure(1, 2, 3), [1, 2, 3]);
    let fromString = Array.from('hi');
    let equalStrings = _.isEqual(fromString, ['h', 'i']);
    return args && equalStrings;
  }

  arrayIncludes() {
    return [1, 2, 3].includes(2);
  }

  exponentiation() {
    return (4**3) === 64;
  }

  asyncAwait() {
    function resolveAfter2Seconds() {
      return new Promise(resolve => {
        setTimeout(() => {
          resolve("asyncAwait resolved");
        }, 2000);
      });
    }

    async function asyncCall() {
      console.log('calling asyncAwait');
      var result = await resolveAfter2Seconds();
      console.log(result);
      // expected output: "resolved"
    }

    asyncCall();
  }

  asyncAwait() {
   function resolveAfter100milliSeconds() {
     return new Promise(resolve => {
       setTimeout(() => {
         resolve(true);
       }, 100);
     });
   }

   async function asyncCall() {
     console.log('calling');
     var result = await resolveAfter100milliSeconds();
     console.assert(result === true, 'AsyncAwait is broken!  Check your babel configuration.');
   }

   asyncCall(); 
  }

  objectValues() {
    const object1 = {
      a: 'somestring',
      b: 42,
      c: false
    };
    return _.isEqual(Object.values(object1), ["somestring", 42, false]);
  }

  // NOT TESTED
  // const keyword
  // asyncAwait

  render() {
    return (
      <div>
        Hello {this.props.name}
        <div className={this.defaultParams() ? '' : 'babel-error'}>Default parameters work: {this.defaultParams().toString()}</div>
        <div className={this.restParams() ? '' : 'babel-error'}>Rest parameters work: {this.restParams().toString()}</div>
        <div className={this.spreadOperator() ? '' : 'babel-error'}>Spread Operator works for array and objects (obj needs stage 2): {this.spreadOperator().toString()}</div>
        <div className={this.templateLiteralString() ? '' : 'babel-error'}>Template literal string works: {this.templateLiteralString().toString()}</div>
        <div className={this.objectDestructuring() ? '' : 'babel-error'}>Object destructuring works: {this.objectDestructuring().toString()}</div>
        <div className={this.arrayDestructuring() ? '' : 'babel-error'}>Array destructuring works: {this.arrayDestructuring().toString()}</div>
        <div className={this.enhancedObjectLiterals() ? '' : 'babel-error'}>Enhanced Object Literals work: {this.enhancedObjectLiterals().toString()}</div>
        <div className={this.arrowFunctions() ? '' : 'babel-error'}>Arrow functions: {this.arrowFunctions().toString()}</div>
        <div className={this.promises() ? '' : 'babel-error'}>Promises work: {this.promises().toString()}</div>
        <div className={this.letKeyword() ? '' : 'babel-error'}>'let' keywork works: {this.letKeyword().toString()}</div>
        <div className={this.isInteger() ? '' : 'babel-error'}>Number.isInteger works: {this.isInteger().toString()}</div>
        <div className={this.stringIncludes() ? '' : 'babel-error'}>String.prototype.includes works: {this.stringIncludes().toString()}</div>
        <div className={this.forOf() ? '' : 'babel-error'}>For of works: {this.forOf().toString()}</div>
        <div className={this.maps() ? '' : 'babel-error'}>Maps work: {this.maps().toString()}</div>
        <div className={this.sets() ? '' : 'babel-error'}>Sets work: {this.sets().toString()}</div>
        <div className={this.arrayFrom() ? '' : 'babel-error'}>Array.from() works: {this.arrayFrom().toString()}</div>
        <div className={this.arrayIncludes() ? '' : 'babel-error'}>Array.prototype.includes works: {this.arrayIncludes().toString()}</div>
        <div className={this.exponentiation() ? '' : 'babel-error'}>Exponentiation operator works: {this.exponentiation().toString()}</div>
        <div className={this.state.asyncAwaitWorks ? '' : 'babel-error'}>Async await: check console for AsyncAwait errors</div>
        <div className={this.objectValues() ? '' : 'babel-error'}>Object.values works: {this.objectValues().toString()}</div>
      </div>
    )
  }
}