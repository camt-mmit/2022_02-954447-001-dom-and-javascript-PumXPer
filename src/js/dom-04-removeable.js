function calculateTotal(inContainer, resultComponent) {
  const inputs = [...inContainer.querySelectorAll('input[type="number"]')];
  const total = inputs.reduce((carry, em) => carry + em.valueAsNumber, 0);

  resultComponent.value = total;
}

function add(inContainer, resultComponent, template) {
  const fragment = template.content.cloneNode(true);

  const title = fragment.querySelector('.cmp-input-title');
  const input = fragment.querySelector('input[type="number"]');

  inContainer.append(fragment);

  const nextN = inContainer.querySelectorAll('input[type="number"]').length;
  title.innerText = `Number ${nextN}`;

  calculateTotal(inContainer, resultComponent);
}

function remove(inContainer, resultComponent, inputContainer) {
  inputContainer.remove();

  calculateTotal(inContainer, resultComponent);
}

function assign(inContainer, template, inputContainer) {
  const inContainer = container.querySelector('.cmp-input-container');
  const resultComponent = container.querySelector('.cmp-result');

  container.addEventListener('click', (ev) => {
    if (ev.target.matches('.cmd-add-input')) {
      add(inContainer, resultComponent, template);
    }
  });

  inContainer.addEventListener('change', (ev) => {
    if (ev.target.matches('input[type="number"]')) {
      calculateTotal(inContainer, resultComponent);
    }
  });

  add(inContainer, resultComponent, template);

  inContainer.addEventListener('click', (ev) => {
    if (ev.target.matches('.cmd-remove-input')) {
      const inputContainer = ev.target.closest('.cmp-input-container');
      remove(inContainer, resultComponent, inputContainer);
    }
  });
}

document.addEventListener('DOMContentLoaded', () => {
  const inContainer = document.querySelector('.cmp-inputs-container');
  const resultComponent = document.querySelector('.cmp-result');
  const template = document.querySelector('template#tmp-input');

  // console.debug(inputsContainer, resultComponent);
});
