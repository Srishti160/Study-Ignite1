document.getElementById('add-note').addEventListener('click', () => {
    const noteText = document.getElementById('note-input').value.trim();
    if (noteText) {
        const noteElement = document.createElement('div');
        noteElement.classList.add('note');
        noteElement.textContent = noteText;

        const deleteButton = document.createElement('button');
        deleteButton.classList.add('delete-button');
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', () => {
            noteElement.remove();
        });

        noteElement.appendChild(deleteButton);
        document.getElementById('notes-list').appendChild(noteElement);
        document.getElementById('note-input').value = '';
    }
});