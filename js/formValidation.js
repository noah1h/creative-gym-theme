  document.querySelector('.contact-form').addEventListener('submit', function (e) {
    e.preventDefault();

    const firstName = document.querySelector('.first-name-input');
    const lastName = document.querySelector('.last-name-input');
    const subject = document.querySelector('.subject-input');
    const email = document.querySelector('.email-input');
    const message = document.querySelector('textarea');

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    [firstName, lastName, subject, email, message].forEach(input => {
      input.style.border = '';
    });

    let isValid = true;

    if (firstName.value.trim() === '') {
      firstName.style.border = '1px solid red';
      isValid = false;
    }

    if (lastName.value.trim() === '') {
      lastName.style.border = '1px solid red';
      isValid = false;
    }

    if (subject.value.trim() === '') {
      subject.style.border = '1px solid red';
      isValid = false;
    }

    if (!emailPattern.test(email.value.trim())) {
      email.style.border = '1px solid red';
      isValid = false;
    }

    if (message.value.trim() === '') {
      message.style.border = '1px solid red';
      isValid = false;
    }

    if (isValid) {
      alert('Form submitted successfully!');
      e.target.submit(); 
    } else {
      alert('Please fill in all fields correctly.');
    }
  });
