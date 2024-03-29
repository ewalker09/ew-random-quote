function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;} // 1. import React ReactDOM
// 2. Get API URL
// 3. Create layout
// 4. Add events
// 5. style
// 6. complete user stories

const API =
'https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json';

class App extends React.Component {constructor(...args) {super(...args);_defineProperty(this, "state",
    {
      quotes: [
      {
        quote: "Life isn’t about getting and having, it’s about giving and being.",
        author: "Kevin Kruse" }],


      index: 0 });_defineProperty(this, "getRandomIndex",













    () => {
      const { quotes } = this.state;

      if (quotes.length > 0) {
        const index = Math.floor(Math.random() * quotes.length);
        this.setState({
          index });

      }
    });}componentDidMount() {//call API
    fetch(API).then(res => res.json()).then(res => {this.setState({ quotes: res.quotes }, this.getRandomIndex);});}
  render() {
    const { quotes, index } = this.state;

    const quote = quotes[index];

    const tweetURL = `https://twitter.com/intent/tweet?text=${quote.quote} - ${quote.author}`;

    return /*#__PURE__*/(
      React.createElement("div", { className: "wrapper d-flex align-items-center justify-content-center" }, /*#__PURE__*/
      React.createElement("div", { className: "col-3 box p-4 rounded", id: "quote-box" },

      quote && /*#__PURE__*/
      React.createElement("div", { className: "mb-4" }, /*#__PURE__*/
      React.createElement("p", { id: "text" }, quote.quote), /*#__PURE__*/
      React.createElement("cite", { id: "author" }, "- ",
      quote.author)), /*#__PURE__*/





      React.createElement("div", { className: "d-flex justify-content-between" }, /*#__PURE__*/
      React.createElement("a", { className: "btn btn-primary", target: "_blank", href: tweetURL, id: "tweet-quote" }, /*#__PURE__*/
      React.createElement("i", { class: "fab fa-twitter" }), "Tweet"), /*#__PURE__*/

      React.createElement("button", { className: "btn btn-primary", onClick: this.getRandomIndex, id: "new-quote" }, /*#__PURE__*/
      React.createElement("i", { class: "fas fa-share" }), "Get Quote")))));





  }}


ReactDOM.render( /*#__PURE__*/React.createElement(App, null), document.getElementById("app"));