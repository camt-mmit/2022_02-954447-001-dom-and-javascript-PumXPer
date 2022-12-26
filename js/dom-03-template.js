function calculateTotal(inputsContainer, resultComponent) {
  const inputs = [...inputsContainer.querySelectorAll('input[type="number"]')];
  const total = inputs.reduce((carry, em) => carry + em.valueAsNumber, 0);

  resultComponent.value = total;
}

function add(inputsContainer, resultComponent, template) {
  const fragment = template.content.cloneNode(true);

  const title = fragment.querySelector('.cmp-input-title');
  const input = fragment.querySelector('input[type="number"]');

  inputsContainer.append(fragment);

  const nextN = inputsContainer.querySelectorAll('input[type="number"]').length;
  title.innerText = `Number ${nextN}`;

  calculateTotal(inputsContainer, resultComponent);

  input.addEventListener('change', () => {
    calculateTotal(inputsContainer, resultComponent);
  });
}

document.addEventListener('DOMContentLoaded', () => {
  const inputsContainer = document.querySelector('.cmp-inputs-container');
  const resultComponent = document.querySelector('.cmp-result');
  const template = document.querySelector('template#tmp-input');

  // console.debug(inputsContainer, resultComponent);
  document.querySelector('.cmd-add-input').addEventListener('click', () => {
    add(inputsContainer, resultComponent, template);
  });

  add(inputsContainer, resultComponent, template);
});
