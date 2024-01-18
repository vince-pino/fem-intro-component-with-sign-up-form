const claimBtn = document.querySelector('button');
claimBtn.addEventListener('click', () => {
  const firtsNameEl = document.querySelector('#first-name');
  const lastNameEl = document.querySelector('#last-name');
  const emailEl = document.querySelector('#email');
  const passwordEl = document.querySelector('#password');

  const errorIconEl = document.querySelectorAll('.error-icon');
  const errorMessageEl = document.querySelectorAll('.error-message');

  if (firtsNameEl.value === '') {
    errorIconEl[0].style.display = 'block';
    errorMessageEl[0].style.display = 'block';
    errorMessageEl[0].textContent = 'First Name cannot be empty';
  } else {
    errorIconEl[0].style.display = 'none';
    errorMessageEl[0].style.display = 'none';
  }
  if (lastNameEl.value === '') {
    errorIconEl[1].style.display = 'block';
    errorMessageEl[1].style.display = 'block';
    errorMessageEl[1].textContent = 'Last Name cannot be empty';
  } else {
    errorIconEl[1].style.display = 'none';
    errorMessageEl[1].style.display = 'none';
  }
  if (emailEl.value === '') {
    errorIconEl[2].style.display = 'block';
    errorMessageEl[2].style.display = 'block';
    errorMessageEl[2].textContent = 'Email cannot be empty';
  } 
  else if (emailEl.value !== '' && checkEmail(emailEl.value) === true) {
    errorIconEl[2].style.display = 'none';
    errorMessageEl[2].style.display = 'none';
    
  } else {
    errorIconEl[2].style.display = 'block';
    errorMessageEl[2].style.display = 'block';
    errorMessageEl[2].textContent = 'Looks like this is not an email';
  }
  if (passwordEl.value === '') {
    errorIconEl[3].style.display = 'block';
    errorMessageEl[3].style.display = 'block';
    errorMessageEl[3].textContent = 'Password cannot be empty';
  } else {
    errorIconEl[3].style.display = 'none';
    errorMessageEl[3].style.display = 'none';
  }

});

function checkEmail(input) {
  const email = input.split('');

  for (let i = 0; i < email.length; i++) {
    if (email[i] === '@' && email[email.length - 1] === 'm' && email[email.length - 2] === 'o' && 
        email[email.length - 3] === 'c' && email[email.length - 4] === '.') {
      return true;
    }
  }
}