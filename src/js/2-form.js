
// const form = document.querySelector('.feedback-form');
// const STORAGE_KEY = 'feedback-form-state';

// let formData = {
//   email: '',
//   message: ''
// };


// document.addEventListener('DOMContentLoaded', populateForm);

// form.addEventListener('input', onFormInput);
// form.addEventListener('submit', onFormSubmit);


// function onFormInput(event) {
//   formData[event.target.name] = event.target.value;
//   localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
// }


// function populateForm() {
//   const savedData = localStorage.getItem(STORAGE_KEY);
  
//   if (savedData) {
//     formData = JSON.parse(savedData);
//     form.email.value = formData.email || '';
//     form.message.value = formData.message || '';
//   }
// }


// function onFormSubmit(event) {
//   event.preventDefault();

//   if (form.email.value === '' || form.message.value === '') {
//     alert('Fill please all fields');
//     return;
//   }

//   console.log('Submitted data:', formData);


//   form.reset();
//   formData = { email: '', message: '' };
//   localStorage.removeItem(STORAGE_KEY);
// }

const formData = {
    email: "",
    message: "",
  };

const form = document.querySelector(".feedback-form");
const input = document.querySelector(".input-field");
const textarea = document.querySelector(".textarea-field");
const STORAGE_KEY = "feedback-form-state";

const savedData = localStorage.getItem(STORAGE_KEY);
    if (savedData) {
        const parsedData = JSON.parse(savedData);
        formData.email = parsedData.email || "";
        formData.message = parsedData.message || "";

        input.value = formData.email;
        textarea.value = formData.message;
    }

form.addEventListener("input", handleInput);

    function handleInput(event) {
            formData[event.target.name] = event.target.value.trim();
        const savedData = JSON.stringify(formData);
            localStorage.setItem(STORAGE_KEY, savedData);
}       

form.addEventListener("submit", handleFormSubmit);
    function handleFormSubmit(event) {
            event.preventDefault();

        if (!formData.email || !formData.message) {
                alert("Fill please all fields");
                return; }
            else {
                console.log(formData);
        }

            localStorage.removeItem(STORAGE_KEY);

            form.reset();

            formData.email = "";

            formData.message = "";
};
