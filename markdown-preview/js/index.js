var _createClass = function () {function defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}return function (Constructor, protoProps, staticProps) {if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;};}();function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self, call) {if (!self) {throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call && (typeof call === "object" || typeof call === "function") ? call : self;}function _inherits(subClass, superClass) {if (typeof superClass !== "function" && superClass !== null) {throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;}var
Markapp = function (_React$Component) {_inherits(Markapp, _React$Component);
  function Markapp(props) {_classCallCheck(this, Markapp);var _this = _possibleConstructorReturn(this, (Markapp.__proto__ || Object.getPrototypeOf(Markapp)).call(this,
    props));
    _this.state = {
      markdown: placeholder };

    _this.handleChange = _this.handleChange.bind(_this);return _this;
  }_createClass(Markapp, [{ key: "handleChange", value: function handleChange(
    event) {
      this.setState({
        markdown: event.target.value });

    } }, { key: "render", value: function render()
    {
      var containerClass = 'container-class col-xs-12 col-md-6';

      return (
        React.createElement("div", null,

          React.createElement("div", { className: containerClass },
            React.createElement("h1", null, "MarkDown Editor"),
            React.createElement("hr", null),
            React.createElement("textarea", { id: "editor", type: "textarea", className: "Markdown-text", value: this.state.markdown, onChange: this.handleChange }),
            React.createElement("hr", null)),



          React.createElement("div", { className: containerClass },
            React.createElement("h1", null, "Markdown Preview"),
            React.createElement("hr", null),
            React.createElement("div", { id: "preview", dangerouslySetInnerHTML: { __html: marked(this.state.markdown) } }))));






    } }]);return Markapp;}(React.Component);


var placeholder = "# Welcome to my React Markdown Previewer!\n\n## This is a sub-heading...\n### And here's some other cool stuff:\n  \nHeres some code, `<div></div>`, between 2 backticks.\n\n```\n// this is multi-line code:\n\nfunction anotherExample(firstLine, lastLine) {\n  if (firstLine == '```' && lastLine == '```') {\n    return multiLineCode;\n  }\n}\n``\nThere's also [links](https://www.freecodecamp.com), and\n> Block Quotes!\n<ul>\n<li>monday</li>\n<li>tuesdau</li>\n<li>wendsday</li>\n\n\"monday is for work\"\n\n<i>tuesday isfor exersice</i>\n\n";



























ReactDOM.render(React.createElement(Markapp, null), document.getElementById('app'));