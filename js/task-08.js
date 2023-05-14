const formEl = document.querySelector(".login-form");

formEl.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();

  const formElements = event.currentTarget.elements;

  const email = formElements.email.value;
  const password = formElements.password.value;

  if (email === "" || password === "") {
    alert("Всі поля повинні бути заповнені!");
  } else {
    const formData = {
      email,
      password,
    };
    console.log(formData);
  }

  formEl.reset();
}
