const loginForm = document.querySelector('.login-form');

  loginForm.addEventListener('submit', function (event) {
    event.preventDefault();  // не перезавантажувати

    const formData = new FormData(loginForm);

    const userData = {};

    formData.forEach((value, key) => {
      userData[key] = value;
    });

    if (userData.email && userData.password) {
      console.log(userData); 
      loginForm.reset(); // очищаємо поля форми 
    } else {
      alert('Заповніть, будь ласка, всі поля'); 
    }
  });
