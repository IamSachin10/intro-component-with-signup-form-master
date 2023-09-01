 const App = {
  $: {
    firstName: document.querySelector('[data-id="first-name"]'),
    lastName: document.querySelector('[data-id="last-name"]'),
    email: document.querySelector('[data-id="email"]'),
    password: document.querySelector('[data-id="password"]'),
    form: document.querySelector('[data-id="form"]'),
  },

  init() {
    App.$.form.addEventListener('submit', (e) => {
      e.preventDefault();
      this.validation();
    });
  },

  setError(element, message) {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('[data-id="error"]');
    errorDisplay.innerHTML = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success');
  },

  setSuccess(element) {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('[data-id="error"]');
    errorDisplay.innerHTML = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
  },

  validateEmail(email) {
    let regex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regex.test(email);
  },

  validation() {
    const fName = App.$.firstName.value.trim();
    const lName = App.$.lastName.value.trim();
    const emailVal = App.$.email.value.trim();
    const pass = App.$.password.value.trim();
// first name
    if (fName === '') {
      this.setError(App.$.firstName, 'First Name cannot be empty');
    } else {
      this.setSuccess(App.$.firstName);
    }
// last name
    if (lName === ''){
      this.setError(App.$.lastName, 'Last Name cannot be empty')
    } else {
      this.setSuccess(App.$.lastName)
    }
    // email
    if (emailVal === ''){
      this.setError(App.$.email, 'looks like this not an email')
    } else {
      this.setSuccess(App.$.email)
    }
    // pass
    if (pass === ''){
      this.setError(App.$.password, 'password cannot be empty')
    } else {
      this.setSuccess(App.$.password)
    }
  }

}

window.addEventListener('load', App.init.bind(App));

