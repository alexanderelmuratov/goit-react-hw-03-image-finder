import { Component } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import { GrClose } from 'react-icons/gr';
import { ModalOverlay, ModalContent, CloseButton } from './Modal.styled';

const modalRoot = document.querySelector('#modal-root');

export class Modal extends Component {
  static propTypes = {
    onClose: PropTypes.func.isRequired,
    children: PropTypes.node.isRequired,
  };

  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = event => {
    if (event.code === 'Escape') {
      this.props.onClose();
    }
  };

  handleOverlayClick = event => {
    if (event.target === event.currentTarget) {
      this.props.onClose();
    }
  };

  render() {
    return createPortal(
      <ModalOverlay onClick={this.handleOverlayClick}>
        <CloseButton type="button" onClick={this.props.onClose}>
          <GrClose style={{ width: 30, height: 30 }} />
        </CloseButton>
        <ModalContent>{this.props.children}</ModalContent>
      </ModalOverlay>,
      modalRoot
    );
  }
}
