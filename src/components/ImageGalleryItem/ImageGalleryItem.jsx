import PropTypes from 'prop-types';
import { GalleryItem, GalleryImage } from './ImageGalleryItem.styled';

export const ImageGalleryItem = ({
  image: { webformatURL, tags, largeImageURL },
  onImageClick,
}) => {
  return (
    <GalleryItem>
      <GalleryImage
        src={webformatURL}
        alt={tags}
        onClick={() => onImageClick(largeImageURL, tags)}
      />
    </GalleryItem>
  );
};

ImageGalleryItem.propTypes = {
  image: PropTypes.shape({
    webformatURL: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
    largeImageURL: PropTypes.string.isRequired,
  }),
  onImageClick: PropTypes.func.isRequired,
};
