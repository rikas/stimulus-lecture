import { Controller } from '@hotwired/stimulus';

// HTML                              ->           Controller
// data-controller="blah"                         blah_controller.js
// data-blah-target="bleh"                        this.blehTarget
// data-action="action->blah#func"                func()

export default class extends Controller {
  static targets = ['results', 'input'];

  // Will be triggered if my code finds a data-controller="disable-button" in HTML
  connect() {
    this.fetchMovies('harry potter'); // on 1st page load
  }

  insertMovies(data) {
    data.Search.forEach((result) => {
      const movieTag = `<li class="list-group-item border-0">
        <img src="${result.Poster}" alt="" width="100">
      </li>`;

      this.resultsTarget.insertAdjacentHTML('beforeend', movieTag);
    });
  }

  fetchMovies(query) {
    fetch(`http://www.omdbapi.com/?s=${query}&apikey=adf1f2d7`)
      .then((response) => response.json())
      .then((data) => this.insertMovies(data));
  }

  submit(event) {
    event.preventDefault();
    this.resultsTarget.innerHTML = '';
    this.fetchMovies(this.inputTarget.value);
  }
}
