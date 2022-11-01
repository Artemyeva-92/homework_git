const domContainer = document.querySelector("#root");
const root = ReactDOM.createRoot(domContainer);
const animals = [
  { type: `turtle`, icon: `🐢` },
  { type: `octopus`, icon: `🐙` },
  { type: `fish`, icon: `🐠` },
  { type: `flamingo`, icon: `🦩` },
  { type: `penguin`, icon: `🐧` },
];

const Every2Sec = {
  color: `green`,
  fontWeight: `bold`,
};

const HalfItems = { borderWidth: `10px` };
const AllItems = { borderWidth: `20px` };

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}

class List extends React.Component {
  constructor(props) {
    super(props);
    let intervalItems = setInterval(() => {
      let randomIndex = getRandomInt(0, this.state.listIndex.length);
      let randomItem = this.state.listIndex[randomIndex];
      this.state.list[randomItem].active = true;
      this.state.listIndex.splice(randomIndex, 1);
      if (
        this.state.listIndex.length === Math.ceil(this.state.list.length / 2)
      ) {
        this.state.borderWidth = HalfItems.borderWidth;
      }
      if (!this.state.listIndex.length) {
        clearInterval(intervalItems);
        this.state.borderWidth = AllItems.borderWidth;
      }
      this.setState({});
    }, 2000);
  }
  state = {
    list: this.props.list,
    listIndex: Object.keys(this.props.list),
    borderWidth: 0,
  };

  render() {
    return (
      this.props.list && (
        <table style={{ borderWidth: this.state.borderWidth }}>
          <tbody>
            {this.state.list.map((item, index) => (
              <tr style={item.active && Every2Sec} key={index}>
                <td>{item.type}</td>
                <td>{item.icon}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )
    );
  }
}

root.render(
  <React.Fragment>
    <List list={animals}></List>
  </React.Fragment>
);
