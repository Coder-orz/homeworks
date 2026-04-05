document.addEventListener('DOMContentLoaded', function() {
  const usernameInput = document.getElementById('username');
  const passwordInput = document.getElementById('password');
  const loginBtn = document.getElementById('loginBtn');

  function validateUsername(value) {
    if (!value) {
      return '请输入用户名';
    }
    const phoneRegex = /^1[3-9]\d{9}$/;
    if (!phoneRegex.test(value)) {
      return '请输入有效的手机号';
    }
    return '';
  }

  function validatePassword(value) {
    if (!value) {
      return '请输入密码';
    }
    if (value.length < 6) {
      return '密码至少需要6个字符';
    }
    const alphanumericRegex = /^[a-zA-Z0-9]+$/;
    if (!alphanumericRegex.test(value)) {
      return '密码只能包含字母和数字';
    }
    return '';
  }

  function showError(input, message) {
    const formGroup = input.closest('.login-form-group');
    if (message) {
      formGroup.classList.remove('success');
      formGroup.classList.add('error');
    } else {
      formGroup.classList.remove('error');
      formGroup.classList.add('success');
    }
  }

  usernameInput.addEventListener('blur', function() {
    const error = validateUsername(this.value.trim());
    showError(usernameInput, error);
  });

  usernameInput.addEventListener('input', function() {
    const formGroup = this.closest('.login-form-group');
    if (formGroup.classList.contains('error')) {
      const error = validateUsername(this.value.trim());
      showError(usernameInput, error);
    }
  });

  passwordInput.addEventListener('blur', function() {
    const error = validatePassword(this.value);
    showError(passwordInput, error);
  });

  passwordInput.addEventListener('input', function() {
    const formGroup = this.closest('.login-form-group');
    if (formGroup.classList.contains('error')) {
      const error = validatePassword(this.value);
      showError(passwordInput, error);
    }
  });

  loginBtn.addEventListener('click', function(e) {
    e.preventDefault();

    const usernameValue = usernameInput.value.trim();
    const passwordValue = passwordInput.value;

    const usernameErr = validateUsername(usernameValue);
    const passwordErr = validatePassword(passwordValue);

    showError(usernameInput, usernameErr);
    showError(passwordInput, passwordErr);

    if (usernameErr) {
      alert(usernameErr);
      usernameInput.focus();
    } else if (passwordErr) {
      alert(passwordErr);
      passwordInput.focus();
    } else {
      alert('登录成功！');
    }
  });
});
