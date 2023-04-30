class CyclicCountButton extends React.Component {
    constructor(props) {
      super(props);
      this.state = { count: 0 };
    }
  
    render() {
      let newCount = this.state.count - 1;
      if (newCount < 0) {
        newCount = 100;
      }
      return React.createElement(
        "button",
        { onClick: () => this.setState({ count: newCount }) },
        "カウント数：" + newCount
      );
    }
  }
  
  const domContainer = document.querySelector("#app");
  
  ReactDOM.render(
    React.createElement(CyclicCountButton),
    domContainer
  );