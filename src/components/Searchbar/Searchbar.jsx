import { Component } from 'react';
import PropTypes from 'prop-types';
import { MdImageSearch } from 'react-icons/md';
import { toast } from 'react-toastify';
import {
  StyledSearchbar,
  SearchForm,
  SearchButton,
  SearchInput,
} from './Searchbar.styled';

export class Searchbar extends Component {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
  };

  state = {
    query: '',
  };

  handleChange = event => {
    this.setState({ query: event.currentTarget.value.toLowerCase() });
  };

  handleSubmit = event => {
    event.preventDefault();

    if (this.state.query.trim() === '') {
      return toast.warn('Please fill in the search field!');
    }

    this.props.onSubmit(this.state.query);
    this.setState({ query: '' });
  };

  render() {
    const { query } = this.state;

    return (
      <StyledSearchbar>
        <SearchForm onSubmit={this.handleSubmit}>
          <SearchButton type="submit">
            <MdImageSearch style={{ width: 30, height: 30 }} />
          </SearchButton>
          <SearchInput
            type="text"
            name="query"
            value={query}
            onChange={this.handleChange}
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </SearchForm>
      </StyledSearchbar>
    );
  }
}
