
const form = document.querySelector('.feedback-form');
const STORAGE_KEY = 'feedback-form-state';

let formData = {
  email: '',
  message: ''
};


document.addEventListener('DOMContentLoaded', populateForm);

form.addEventListener('input', onFormInput);
form.addEventListener('submit', onFormSubmit);


function onFormInput(event) {
  formData[event.target.name] = event.target.value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}


function populateForm() {
  const savedData = localStorage.getItem(STORAGE_KEY);
  
  if (savedData) {
    formData = JSON.parse(savedData);
    form.email.value = formData.email || '';
    form.message.value = formData.message || '';
  }
}

function onFormSubmit(event) {
  event.preventDefault();

  if (form.email.value === '' || form.message.value === '') {
    alert('Fill please all fields');
    return;
  }

  console.log('Submitted data:', formData);


  form.reset();
  formData = { email: '', message: '' };
  localStorage.removeItem(STORAGE_KEY);
}
