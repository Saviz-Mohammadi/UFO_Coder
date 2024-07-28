function copyCode()
{
  const codeContainer = document.querySelector('.code-container');
  const code = codeContainer.querySelector('code');

  const textarea = document.createElement('textarea');
  textarea.value = code.textContent;
  document.body.appendChild(textarea);

  textarea.select();
  document.execCommand('copy');
  textarea.remove();

  alert('Code copied to clipboard!');
}


function copyEmail()
{
  const email = 'savizmohammadi@yahoo.com';

  // Use the Clipboard API to copy the email address
  navigator.clipboard.writeText(email).then(() =>
  {
    alert('Email copied to clipboard!');
  });
}
