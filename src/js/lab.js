import { assign as assignInput } from './section.js';

document.addEventListener('DOMContentLoaded', () => {
  const mainContainer = document.querySelector('.cmp-main-container');
  const sectionTemplate = document.querySelector('#tmp-section');
  const inputTemplate = document.querySelector('#tmp-input');
  const inputSection = document.querySelector('.cmp-input-section');

  assignInput(mainContainer, sectionTemplate, inputTemplate);
});
