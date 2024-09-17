
// const formData = {
//     email: "",
//     message: "",
//   };
// const form = document.querySelector('.feedback-form');
// const emailInput = document.querySelector('.input-email');
// const messageTextarea = document.querySelector('.message');

// const STORAGE_KEY = "feedback-form-state";
// const email = emailInput.value;

// const savedData = localStorage.getItem(STORAGE_KEY);
//     if (savedData) {
//         const parsedData = JSON.parse(savedData);
//         formData.email = parsedData.email || "";
//         formData.message = parsedData.message || "";

//         input.value = formData.email;
//         textarea.value = formData.message;
//     }

// form.addEventListener("input", handleInput);

//     function handleInput(event) {
//             formData[event.target.name] = event.target.value.trim();
//         const savedData = JSON.stringify(formData);
//             localStorage.setItem(STORAGE_KEY, savedData);
// }       

// form.addEventListener("submit", handleFormSubmit);
//     function handleFormSubmit(event) {
//             event.preventDefault();

//         if (!formData.email || !formData.message) {
//                 alert("Fill please all fields");
//                 return; }
//             else {
//                 console.log(formData);
//         }

//             localStorage.removeItem(STORAGE_KEY);

//             form.reset();

//             formData.email = "";

//             formData.message = "";
// };


const STORAGE_KEY = 'feedback-form-state';

const form = document.querySelector('.feedback-form');
const emailInput = document.querySelector('.input-email');
const messageTextarea = document.querySelector('.message');

const savedData = JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
if (savedData.email) {
  emailInput.value = savedData.email;
}
if (savedData.message) {
  messageTextarea.value = savedData.message;
}

form.addEventListener('input', () => {
  const formData = {
    email: emailInput.value,
    message: messageTextarea.value,
  };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
});

form.addEventListener('submit', event => {
  event.preventDefault();
  if (emailInput.value === '' || messageTextarea.value === '') {
    alert('Please fill out all fields.');
    return;
  }
  console.log('Form data:', {
    email: emailInput.value,
    message: messageTextarea.value,
  });
  localStorage.removeItem(STORAGE_KEY);
  form.reset();
});
