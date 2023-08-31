
const loginForml = document.querySelector('.login-form');

loginForml.addEventListener('submit', onFormsSubmit);


function onFormsSubmit(event) {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value === "" || password.value === "") {
    return alert("Будь ласка заповніть всі поля!");
  }

  const userAcount = { email: email.value, password: password.value };
  console.log("userAcount", userAcount);

  event.currentTarget.reset();
}