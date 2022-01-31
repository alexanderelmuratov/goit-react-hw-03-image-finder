import PropTypes from 'prop-types';
import { LoadMoreButton } from './Button.styled';

export const Button = ({ onLoadMore }) => {
  return (
    <LoadMoreButton type="button" onClick={onLoadMore}>
      Load more
    </LoadMoreButton>
  );
};

Button.propTypes = {
  onLoadMore: PropTypes.func.isRequired,
};
