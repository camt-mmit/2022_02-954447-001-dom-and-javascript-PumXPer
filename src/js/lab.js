function computeTotal(inputsContainer, resultComponent) {
  const total = [...inputsContainer.querySelectorAll('.cmp-input-container')]
    .map((elem) => elem.querySelector('.cmp-input'))
    .reduce((carry, elem) => carry + elem.valueAsNumber, 0);

  resultComponent.value = total;
}

function rebuildIndex(inputsContainer) {
  const inputContainer = [
    ...inputsContainer.querySelectorAll('.cmp-input-container'),
  ];

  inputContainer.forEach((elem, i) => {
    [...elem.querySelectorAll('.cmp-input-no')].forEach((elem) => {
      elem.innerText = i + 1;
    });
  });

  [...inputsContainer.querySelectorAll('.cmd-remove-input')].forEach((elem) => {
    elem.disabled = !(inputContainer.length > 1);
  });
}

function add(inputsContainer, resultComponent, inputTemplate) {
  const fragment = inputTemplate.content.cloneNode(true);

  inputsContainer.append(fragment);

  rebuildIndex(inputsContainer);
  computeTotal(inputsContainer, resultComponent);
}

function remove(inputsContainer, resultComponent, inputContainer) {
  inputContainer.remove();

  rebuildIndex(inputsContainer);
  computeTotal(inputsContainer, resultComponent);
}

function assign(inputSection, inputTemplate) {
  const inputsContainer = inputSection.querySelector('.cmp-inputs-container');
  const resultComponent = inputSection.querySelector('.cmp-result');

  inputSection.addEventListener('click', (ev) => {
    if (ev.target.matches('.cmd-add-input')) {
      add(inputsContainer, resultComponent, inputTemplate);
    }
  });

  inputsContainer.addEventListener('change', (ev) => {
    if (ev.target.matches('input[type="number"]')) {
      computeTotal(inputsContainer, resultComponent);
    }
  });

  inputsContainer.addEventListener('click', (ev) => {
    if (ev.target.matches('.cmd-remove-input')) {
      const inputContainer = ev.target.closest('.cmp-input-container');
      remove(inputsContainer, resultComponent, inputContainer);
    }
  });

  add(inputsContainer, resultComponent, inputTemplate);
}

document.addEventListener('DOMContentLoaded', () => {
  const inputTemplate = document.querySelector('template#tmp-input');
  const inputSection = document.querySelector('.cmp-input-section');

  assign(inputSection, inputTemplate);
});
