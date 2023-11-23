const form = document.querySelector(".login-form");

const setForm = (e) => {
  e.preventDefault();

  const email = form.elements.email;
  const password = form.elements.password;

  if (email.value === "" || password.value === "") {
    return alert("All fields must be completed!");
  }

  const formData = new Object();
  formData.email = email.value;
  formData.password = password.value;
  console.log(formData);

  form.reset();
};

form.addEventListener("submit", setForm);
