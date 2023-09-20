import React from "react";

class FormInputNote extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      body: "",
    };

    this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
    this.onBodyChangeEventHandler = this.onBodyChangeEventHandler.bind(this);
    this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
  }

  onTitleChangeEventHandler(event) {
    if (event.target.value.length <= 50) {
      this.setState(() => {
        return {
          title: event.target.value,
        };
      });
    }
  }

  onBodyChangeEventHandler(event) {
    this.setState(() => {
      return {
        body: event.target.value,
      };
    });
  }

  onSubmitEventHandler(event) {
    event.preventDefault();

    this.props.addNote(this.state);
  }

  render() {
    return (
      <div className="form-input">
        <form onSubmit={this.onSubmitEventHandler}>
          <p className="input-title-count">
            {this.state.title.length < 50
              ? 50 - this.state.title.length + " chars left"
              : "Maxed!"}{" "}
          </p>
          <input
            className="input-title"
            type="text"
            name="title"
            placeholder="Insert note's title"
            required
            value={this.state.title}
            onChange={this.onTitleChangeEventHandler}
          />
          <textarea
            className="input-body"
            rows="5"
            cols="10"
            name="body"
            placeholder="Insert note"
            required
            value={this.state.body}
            onChange={this.onBodyChangeEventHandler}
          />
          <button type="submit" className="input-button">
            Add
          </button>
        </form>
      </div>
    );
  }
}

export default FormInputNote;
