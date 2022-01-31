import PropTypes from 'prop-types';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { StyledImageGallery } from './ImageGallery.styled';

export const ImageGallery = ({ images, onImageClick }) => {
  return (
    <StyledImageGallery>
      {images.map(image => (
        <ImageGalleryItem
          key={image.id}
          image={image}
          onImageClick={onImageClick}
        />
      ))}
    </StyledImageGallery>
  );
};

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(PropTypes.object).isRequired,
  onImageClick: PropTypes.func.isRequired,
};
