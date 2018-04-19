import React, { Component } from 'react';

class NavElement extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hover: false
    }
  }

  offHover = () => {
    this.setState({ hover: false });
  }

  onHover = () => {
    this.setState({ hover: true });
  }

  render() {
    return (
      <li
        style={this.state.hover ? styles.liHover : styles.li}
        onMouseEnter={this.onHover}
        onMouseLeave={this.offHover}
      >
        {this.props.children}
      </li>
    );
  }

}

const styles = {
  liHover: {
    listStyle: 'none',
    backgroundColor: 'red',
    padding: '20px',
  },
  li: {
    listStyle: 'none',
    backgroundColor: 'white',
    padding: '20px',
  },
}

export default NavElement;
