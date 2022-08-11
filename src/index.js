import { Application } from '@hotwired/stimulus';
import { definitionsFromContext } from '@hotwired/stimulus-webpack-helpers';
// import { initSortable } from './plugins/init_sortable'; // require_relative

window.Stimulus = Application.start();
const context = require.context('./controllers', true, /\.js$/);
Stimulus.load(definitionsFromContext(context));

// initSortable();
