import React from 'react';
import { render } from 'react-dom';

export default function contentEditable(WrappedComponent) {

  return class extends React.Component {

    state = {
      editing: false
    }

    toggleEdit = (e) => {
      e.stopPropagation();
      if (this.state.editing) {
        this.cancel();
      } else {
        this.edit();
      }
    };

    edit = () => {
      this.setState({
        editing: true
      }, () => {
        this.domElm.focus();
      });
    };

    save = () => {
      this.setState({
        editing: false
      }, () => {

        if (this.isValueChanged()) {
          this.props.updateFS(this.domElm.textContent,"Titulo");

        }
      });
    };

    cancel = () => {
      this.setState({
        editing: false
      });
    };

    isValueChanged = () => {
      return this.props.value !== this.domElm.textContent
    };

    handleKeyDown = (e) => {
      const { key } = e;
      switch (key) {
        case 'Enter':
        case 'Escape':
          this.save();
          break;
      }
    };

    render() {
      let editOnClick = true;
      const {editing} = this.state;
      if (this.props.editOnClick !== undefined) {
        editOnClick = this.props.editOnClick;
      }
      return (
        <WrappedComponent
          
          className={editing ? 'editing' : ''}
          onClick={!editing ? this.toggleEdit : undefined}
          contentEditable={editing}
          suppressContentEditableWarning = "true"
          ref={(domNode) => {
            this.domElm = domNode;
          }}
          onBlur={this.save}
          onKeyDown={this.handleKeyDown}
          {...this.props}
      >
        {this.props.value}
      </WrappedComponent>
      )
    }
  }
}



