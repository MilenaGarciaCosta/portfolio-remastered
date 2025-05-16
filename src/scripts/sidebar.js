export function copiarEmail() {
    const emailElement = document.getElementById('email');
    const alertaHidden = document.getElementById('alerta_hidden'); // Assumindo que você tem isso no HTML
    const fecharButton = document.getElementById('fechar_alerta'); // Botão para fechar
  
    if (emailElement) {
      emailElement.addEventListener('click', () => {
        const input = document.createElement('input');
        input.setAttribute('value', emailElement.textContent);
        document.body.appendChild(input);
        input.select();
        document.execCommand('copy');
        document.body.removeChild(input);
  
        if (alertaHidden) {
          alertaHidden.classList.remove('hidden');
        }
  
        if (fecharButton && alertaHidden) {
          fecharButton.addEventListener('click', () => {
            alertaHidden.classList.add('hidden');
          });
        }
      });
    }
  }
  