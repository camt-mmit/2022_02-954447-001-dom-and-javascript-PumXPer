function add(inputsContainer) {
  const inputContainer = document.createElement('div');
  inputContainer.classList.add('cmp-input-container');

  const label = document.createElement('label');
  inputContainer.append(label);

  const title = document.createElement('b');
  const input = document.createElement('input');
  input.type = 'number';
  input.defaultValue = 0;
  input.required = true;

  label.append(title);
  label.append(input);

  console.debug(inputsContainer);
  inputsContainer.append(inputContainer);
}

document.addEventListener('DOMContentLoaded', () => {
  const inputsContainer = document.querySelector('.cmp-inputs-container');
  const resultComponent = document.querySelector('.cmp-result');

  document.querySelector('.cmd-add-input').addEventListener('click', () => {
    add(inputsContainer);
  });

  add(inputsContainer);
});
