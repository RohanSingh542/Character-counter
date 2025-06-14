const textArea = document.getElementById('textarea');
const totalChar = document.getElementById('totalchar');
const remainChar = document.getElementById('remainingchar');

textArea.addEventListener('input', () => {
    updateCounter();
})
updateCounter();

function updateCounter(){
    totalChar.innerText = textArea.value.length;
    remainChar.innerText = textArea.getAttribute('maxlength') - textArea.value.length;
}