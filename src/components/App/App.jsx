import { Component } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { Searchbar } from 'components/Searchbar/Searchbar';
import { ImageGallery } from 'components/ImageGallery/ImageGallery';
import { Loader } from 'components/Loader/Loader';
import { Button } from 'components/Button/Button';
import { Modal } from 'components/Modal/Modal';
import { GlobalStyle } from './GlobalStyle';
import { Container } from './App.styled';
import { fetchData } from 'services/fetchData';
import 'react-toastify/dist/ReactToastify.css';

export class App extends Component {
  state = {
    images: [],
    loading: false,
    query: '',
    error: null,
    page: 1,
    total: 0,
    showModal: false,
    largeImage: { src: '', alt: '' },
  };

  componentDidUpdate(prevProps, prevState) {
    const prevQuery = prevState.query;
    const nextQuery = this.state.query;

    if (prevQuery !== nextQuery) {
      this.fetchImages();
    }
  }

  fetchImages = () => {
    const { query, page } = this.state;
    const perPage = 12;

    this.setState({ loading: true });

    fetchData(query, page, perPage)
      .then(({ hits, totalHits }) => {
        const totalPages = Math.ceil(totalHits / perPage);

        if (hits.length === 0) {
          return toast.error('Sorry, there are no images. Please try again!');
        }

        if (page === 1) {
          toast.success(`Hooray! We found ${totalHits} images.`);
        }

        if (page === totalPages) {
          toast.info("You've reached the end of search results.");
        }

        this.setState(({ images, page }) => ({
          images: [...images, ...hits],
          page: page + 1,
          total: totalHits,
        }));
      })
      .catch(error => this.setState({ error }))
      .finally(() => this.setState({ loading: false }));
  };

  handleSearch = query => {
    if (query === this.state.query) return;
    this.setState({
      images: [],
      query,
      page: 1,
      error: null,
    });
  };

  openModal = (src, alt) => {
    this.setState({
      showModal: true,
      largeImage: { src, alt },
    });
  };

  closeModal = () => {
    this.setState({
      showModal: false,
      largeImage: { src: '', alt: '' },
    });
  };

  render() {
    const { images, error, loading, total, showModal, largeImage } = this.state;
    const isImage = images.length !== 0;
    const isLastPage = images.length === total;
    const isLoadMoreBtn = isImage && !loading && !isLastPage;

    return (
      <Container>
        <GlobalStyle />
        <Searchbar onSubmit={this.handleSearch} />
        {isImage && (
          <ImageGallery images={images} onImageClick={this.openModal} />
        )}
        {loading && <Loader />}
        {isLoadMoreBtn && <Button onLoadMore={this.fetchImages} />}
        {showModal && (
          <Modal onClose={this.closeModal}>
            <img src={largeImage.src} alt={largeImage.alt} width="780" />
          </Modal>
        )}
        {error && toast.error(error.message)}
        <ToastContainer />
      </Container>
    );
  }
}
