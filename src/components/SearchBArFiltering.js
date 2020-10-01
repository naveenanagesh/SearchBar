import React, { Component } from "react";

class Champions extends Component {
  constructor(props) {
    super(props);

    this.state = {
      champions: [],
      text: "",
    };
  }

  componentWillMount() {
    fetch("http://localhost:3000/data.json")
      .then((response) => response.json())
      .then((champions) => {
        this.setState({ champions });
      });
  }

  filter(e) {
    this.setState({ filter: e.target.value, text: e.target.value });
  }

  suggestionSelected(value) {
    this.setState(() => ({
      text: value,
      champions: [],
    }));
  }
  renderSuggestionsc(champions, text) {
    if (text.length === 0) {
      return null;
    }
    if (champions.length === 0) {
      return (
        <ul className="no-card">
          <li>No User Found</li>
        </ul>
      );
    }
    return (
      <ul>
        {champions.map((item) => {
          return (
            <li key={item.id} onClick={() => this.suggestionSelected(item)}>
              <b>{item.name} </b> <br />
              <span>{item.company}</span> <br />
              <span>{item.email}</span>
            </li>
          );
        })}
      </ul>
    );
  }
  render() {
    let champions = this.state.champions;
    const { text } = this.state;

    if (this.state.filter) {
      champions = champions.filter((champion) =>
        (
          champion.name.toLowerCase() &&
          champion.company.toLowerCase() &&
          champion.email.toLowerCase()
        ).includes(this.state.filter.toLowerCase())
      );
    }

    return (
      <div className="AutoCompleteText">
        <input
          value={text}
          type="text"
          placeholder="Search users by Names,email...."
          onChange={this.filter.bind(this)}
        />
        {this.renderSuggestionsc(champions, text)}
      </div>
    );
  }
}

export default Champions;
