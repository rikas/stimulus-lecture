import { Controller } from '@hotwired/stimulus';
import Sortable from 'sortablejs'; // like the require 'Date'

export default class extends Controller {
  // Will be triggered if my code finds a data-controller="disable-button" in HTML
  connect() {
    // this.element is the DOM element that has data-controller=""
    Sortable.create(this.element, {
      ghostClass: 'ghost',
      animation: 150,
    });
  }
}
