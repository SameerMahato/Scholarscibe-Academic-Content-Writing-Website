document.addEventListener("DOMContentLoaded", function () {
  const root = document.getElementById('root');

  const loginForm = `
    <div class="login-page">
      <div class="login-box">
        <div class="illustration-wrapper">
          <img src="https://mixkit.imgix.net/art/preview/mixkit-left-handed-man-sitting-at-a-table-writing-in-a-notebook-27-original-large.png?q=80&auto=format%2Ccompress&h=700" alt="Login"/>
        </div>
        <form id="login-form">
          <p class="form-title">Welcome back</p>
          <div class="input-group">
            <input type="text" id="username" placeholder="Username" required>
          </div>
          <div class="input-group">
            <input type="password" id="password" placeholder="Password" required>
          </div>
          <div class="checkbox-group">
            <input type="checkbox" id="remember">
            <label for="remember">Remember me</label>
          </div>
          <div>
            <button type="submit" class="login-form-button">LOGIN</button>
          </div>
        </form>
      </div>
    </div>
  `;

  root.innerHTML = loginForm;

  const loginFormElement = document.getElementById('login-form');
  loginFormElement.addEventListener('submit', function (event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const rememberMe = document.getElementById('remember').checked;
    console.log('Username:', username);
    console.log('Password:', password);
    console.log('Remember me:', rememberMe);
    // Perform login logic here
  });
});
