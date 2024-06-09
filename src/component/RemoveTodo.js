import React, { Component } from "react";
import { Button } from "@mui/material";


class RemoveTodo extends Component {
  handleSubmit = (event) => {
    this.props.RemoveTodo(this.state);
  };

  render() {
    return (
      <div>
        <Button
          style={{ marginLeft: "10px" }}
          onClick={this.handleSubmit}
          variant="contained"
          color="primary"
        >
          Remove
        </Button>
      </div>
    );
  }
}

export default RemoveTodo;
