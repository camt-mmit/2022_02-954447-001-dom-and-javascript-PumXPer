function add(inputsContainer, inputTemplate) {
  const fragment = inputTemplate.content.cloneNode(true);

  inputsContainer.append(fragment);
}

export function assign(inputSection, inputTemplate) {
  const inputsContainer = inputSection.querySelector('.cmp-inputs-container');

  inputSection.addEventListener('click', (ev) => {
    if (ev.target.matches('.cmd-add-input')) {
      add(inputsContainer, inputTemplate);
    }
  });

  add(inputsContainer, inputTemplate);
}
