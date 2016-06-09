// Import React
import React from "react";

// Import Spectacle Core tags
import {
  Appear,
  BlockQuote,
  Cite,
  CodePane,
  Deck,
  Fill,
  Heading,
  Image,
  Layout,
  Link,
  ListItem,
  List,
  Markdown,
  Quote,
  Slide,
  Spectacle,
  Text
} from "spectacle";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Import custom component
import Interactive from "../assets/interactive";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");


const images = {
  crispin: require("../assets/crispin.jpg"),
  city: require("../assets/city.jpg"),
  kat: require("../assets/kat.png"),
  logo: require("../assets/formidable-logo.svg"),
  markdown: require("../assets/markdown.png")
};

preloader(images);

const theme = createTheme({
  primary: "#ff4081"
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Spectacle theme={theme}>
        <Deck transition={["zoom", "slide"]} transitionDuration={500}>
          <Slide transition={["zoom"]} bgColor="primary">

            <Heading size={1} fit caps lineHeight={1} textColor="black">
              ES2015
            </Heading>
            <Heading size={1} caps>
              (TAFKA ES6)
            </Heading>
            <Markdown>
            {`
It sounds so _last year_, but is still **so fresh**
            `}
            </Markdown>

          </Slide>
          <Slide transition={["slide"]} bgColor="black" notes="You can even put notes on your slide. How awesome is that?">

            <Image src={images.kat.replace("/", "")} margin="0px auto 40px" height="293px"/>
            <Heading size={2} caps fit textColor="primary" textFont="primary">
              Do I know you?
            </Heading>

          </Slide>
          <Slide transition={["slide"]} bgImage={images.city.replace("/", "")} bgDarken={0.75}>

            <Appear fid="1">
              <Heading size={1} caps fit textColor="primary">
                Joe Sepi
              </Heading>
            </Appear>
            <Appear fid="2">
              <Heading size={1} caps textColor="tertiary">
                @joe_sepi
              </Heading>
            </Appear>
            <Appear fid="3">
              <Heading size={1} caps fit textColor="primary">
                Dev Evangelist @Strongloop -- an amazing team within IBM
              </Heading>
            </Appear>

          </Slide>
          <Slide transition={["slide"]} bgImage={images.city.replace("/", "")} bgDarken={0.90}>

            <Heading size={1} caps fit textColor="primary">
              What is ES2015
            </Heading>
            <List textColor="primary" margin="0 0 0 150px">
              <Appear><ListItem>ES == JS</ListItem></Appear>
              <Appear><ListItem>ES3 => ES5 (1999 - 2009)</ListItem></Appear>
              <Appear><ListItem>ES6 ("Harmony")</ListItem></Appear>
              <Appear><ListItem>ES alive! => ES2015</ListItem></Appear>
              <Appear><ListItem>ES2016/ES7/ESNext</ListItem></Appear>
            </List>

          </Slide>
          <Slide transition={["spin", "slide"]} bgColor="tertiary">
            <Heading size={1} caps fit lineHeight={1.5} textColor="primary">
              Let's look at some code!
            </Heading>
          </Slide>
          <Slide transition={["slide"]} bgImage={images.city.replace("/", "")} bgDarken={0.75}>

            <Heading size={1} caps fit textColor="primary">
              Thanks!
            </Heading>
            <Heading size={5} caps textColor="tertiary">
              @joe_sepi
            </Heading>

          </Slide>
        </Deck>
      </Spectacle>
    );
  }
}


/* ----------------------------------------------- */



/*
 * const / let
 *
 */

// single assignment; reassignment fails
// const thing1 = 'red';
// thing1 = 'blue';

// console.warn('thing1:', thing1);


// const obj = { foo: 'bar' };
// obj['hello'] = 'world';

// console.warn('obj: ', obj);


// const arr = [ 'tom', 'dick' ];
// arr.push('harry');

// console.warn('arr:', arr);


// for (const i = 1; i < arr.length; i++) {
//   console.log(arr[i]);
// }

// use let for variables that will change
// let thing2 = 'red';
// thing2 = 'blue';

// console.warn('thing2:', thing2);



/* ----------------------------------------------- */



/*
 * string templates
 *
 */

// const name = 'Joe';
// const town = 'Peekskill';
// const person = { name: 'Tom', age: 25 };

// const sentence1 = `${name} lives in ${town}`;
// const sentence2 = `${person.name} is ${person.age} years old`;

// console.warn(sentence1);
// console.warn(sentence2);



/* ----------------------------------------------- */




/*
 * object destructuring
 *
 */

// <div id="some-id" data-value="999" data-id="DR350R"></div>

// const { id, value } = $('#some-id').data();

// import { jsonMiddleware } from 'body-parser';
// hey, look modules!



/* ----------------------------------------------- */



/*
 * arrow functions
 *
 */

// $('.some-element').click(function(data) {
//   return handleResponse(data);
// });

// $('.some-element').click((data) => handleResponse(data));


/* ----------------------------------------------- */


/*
 * method shorthand
 *
 // */

// const obj = {
 //  foo: function() {},
 //  bar: function() {}
// };

// const obj = {
 //  foo() {},
 //  bar() {}
// };

// const View = require('viewClass');
// const mustache = require('some-mustache');

// const cardView = View.extend({
 //  mustache,

 //  render() {
 //    $('body').html(mustache);
 //  }
// })

