import { Controller } from '@hotwired/stimulus';

export default class extends Controller {
  // Will make this.linkTarget and this.buttonTarget available in the functions
  static targets = ['link', 'button'];

  // Will be triggered if my code finds a data-controller="disable-button" in HTML
  connect() {
    // console.log('Controller is connected');
    // console.log(this.buttonTarget);
    // console.log(this.linkTarget);
  }

  disable() {
    this.buttonTarget.innerText = 'Bingo!';
    this.buttonTarget.disabled = true;
    this.linkTarget.classList.remove('d-none');
  }

  renable() {
    this.buttonTarget.innerText = 'Click me!';
    this.buttonTarget.disabled = false;
    this.linkTarget.classList.add('d-none');
  }
}
