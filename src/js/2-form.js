
const formData = {
    email: "",
    message: "",
  };
const form = document.querySelector('.feedback-form');
const emailInput = document.querySelector('.input-email');
const messageTextarea = document.querySelector('.message');

// const form = document.querySelector(".feedback-form");
// const input = document.querySelector(".input-field");
// const textarea = document.querySelector(".textarea-field");
const STORAGE_KEY = "feedback-form-state";
const email = emailInput.value;
const message = messageTextarea.value;
  if (email === '' || message === '') {
    alert('Please fill out all fields.');
    return;
  }
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



