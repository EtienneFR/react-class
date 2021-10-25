import { Component } from "react";

class Pagination extends Component {
  state = { array: [], numberOfResults: this.props.numberOfResults };
  updateArray = (arrayProps) => {
    this.setState((prevState) => {
      var tmpArr = [...prevState.array];
      for (let i = 0; i < arrayProps / 10; i++) {
        tmpArr.push(i);
      }
      return {
        array: tmpArr,
      };
    });
  };
  componentDidMount() {
    this.updateArray(this.props.numberOfResults);
  }

  componentDidUpdate(prevProps) {
    if (this.props.numberOfResults !== prevProps.numberOfResults) {
      this.setState({ numberOfResults: this.props.numberOfResults, array: [] });
      this.updateArray(this.state.numberOfResults);
    }
  }

  handleChangePage = (event) => {
    this.props.handleChangePage(event.target.dataset.index);
  };

  render() {
    const { array } = this.state;
    return (
      <div style={{ display: "flex" }}>
        {array.map((i) => (
          <button key={i} data-index={i} onClick={this.handleChangePage}>
            {++i}
          </button>
        ))}
      </div>
    );
  }
}

export default Pagination;
