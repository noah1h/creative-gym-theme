document.querySelector('.contact-form').addEventListener('submit', function (e) {
  e.preventDefault();

  const firstName = document.querySelector('.first-name-input');
  const lastName = document.querySelector('.last-name-input');
  const subject = document.querySelector('.subject-input');
  const email = document.querySelector('.email-input');
  const message = document.querySelector('textarea');

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Helper to show error
  function showError(input, message) {
    const errorDiv = input.parentElement.querySelector('.error-message');
    errorDiv.textContent = message;
    input.style.border = '2px solid red';
  }

  // Helper to clear error
  function clearError(input) {
    const errorDiv = input.parentElement.querySelector('.error-message');
    errorDiv.textContent = '';
    input.style.border = '';
  }

  let isValid = true;

  // First Name
  if (firstName.value.trim() === '') {
    showError(firstName, 'First name is required.');
    isValid = false;
  } else {
    clearError(firstName);
  }

  // Last Name
  if (lastName.value.trim() === '') {
    showError(lastName, 'Last name is required.');
    isValid = false;
  } else {
    clearError(lastName);
  }

  // Subject
  if (subject.value.trim() === '') {
    showError(subject, 'Please enter a subject.');
    isValid = false;
  } else {
    clearError(subject);
  }

  // Email
  if (!emailPattern.test(email.value.trim())) {
    showError(email, 'Please enter a valid email address.');
    isValid = false;
  } else {
    clearError(email);
  }

  // Message
  if (message.value.trim() === '') {
    showError(message, 'Message cannot be empty.');
    isValid = false;
  } else {
    clearError(message);
  }

  if (isValid) {
    const submitBtn = document.querySelector('.form-submit');
    const btnText = submitBtn.querySelector('.submit-btn-text');
  
    // Custom inline SVG spinner
    btnText.innerHTML = `
      <svg class="custom-spinner" width="20" height="20" viewBox="0 0 50 50">
        <circle cx="25" cy="25" r="20" fill="none" stroke="white" stroke-width="5" stroke-linecap="round"
          stroke-dasharray="100" stroke-dashoffset="60">
          <animateTransform attributeName="transform" type="rotate" from="0 25 25" to="360 25 25"
            dur="1s" repeatCount="indefinite" />
        </circle>
      </svg>
    `;
  
    submitBtn.disabled = true;
  
    // After 2 seconds, restore
    setTimeout(() => {
      btnText.textContent = 'Submit';
      submitBtn.disabled = false;
    }, 1000);
  }
  
  
});