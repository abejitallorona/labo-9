
const cajatexto = document.querySelector('.cajatexto');
const modalContainer = document.querySelector('.container__modal');
const modalForm = document.querySelector('.modal__caja form');
const modalCerrar = document.querySelector('.modal__cerrar');
const cajaPublicaciones = document.querySelector('.caja-publicaciones');

// Abrir modal al hacer clic en la caja de texto
cajatexto.addEventListener('click', () => {
  modalContainer.style.display = 'flex';
});

modalCerrar.addEventListener('click', () => {
    modalContainer.style.display = 'none';
  });

  // Crear post al enviar el formulario
modalForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const textoInput = modalForm.texto.value;
    if (textoInput) {

      const postContainer = document.createElement('div');
      postContainer.classList.add('post');
      const postTexto = document.createElement('p');
      postTexto.textContent = textoInput;
      const postAutor = document.createElement('p');
      postAutor.textContent = 'Andrés Pepito';

      postContainer.appendChild(postTexto);
      postContainer.appendChild(postAutor);
      cajaPublicaciones.insertBefore(postContainer, cajaPublicaciones.firstChild);

      modalForm.reset();
      modalContainer.style.display = 'none';
    }
  });




modalForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const textoInput = modalForm.texto.value;
  if (textoInput) {

    modalContainer.style.display = 'none';
    modalForm.reset();
  }
});