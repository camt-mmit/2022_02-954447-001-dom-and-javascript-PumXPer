import { assign as assignInput } from './input.js';

function AddSection(master) {
  const inputTemplate = document.querySelector('template#tmp-input');
  const inputSection = document.querySelector('.cmp-input-section');
  const Data = document.querySelector('.data');

  const section = document.createElement('section');
  section.classList.add('cmp-input-sec');

  section.append(Data);
  master.append(section);

  assignInput(inputSection, inputTemplate);
}

function AssignSec(master) {
  const outdata = master.querySelector('.output-data');

  console.debug(master);

  master.addEventListener('click', (rr) => {
    if (rr.target.matches('.cmd-add-section')) {
      AddSection(outdata, master);
    }
  });

  AddSection(outdata, master);
}

document.addEventListener('DOMContentLoaded', () => {
  const master = document.querySelector('.master');

  console.debug(master);

  AssignSec(master);
});
