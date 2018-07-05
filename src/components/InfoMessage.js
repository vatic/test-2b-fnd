import React from 'react';
import { Message } from 'semantic-ui-react';

class InfoMessage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { visible: true };
  }

  handleDismiss = () => {
    this.setState({ visible: false });
  }


  render() {
    const {
      timeout,
      header,
      content,
      color,
    } = this.props;

    setTimeout(() => {
      this.setState({ visible: false });
    }, timeout);
    if (this.state.visible) {
      return (
        <Message
          onDismiss={this.handleDismiss}
          header={header}
          content={content}
          color={color}
        />
      );
    }
    return null;
  }
}

export default InfoMessage;
