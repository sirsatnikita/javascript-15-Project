document.addEventListener('DOMContentLoaded', function () {
    const alert = document.querySelector('.alert');
    const groceryForm = document.querySelector('.grocery-form');
    const groceryInput = document.getElementById('Grocery');
    const groceryContainer = document.querySelector('.grocery-container');
    const groceryList = document.querySelector('.grocery-list');
    const clearBtn = document.querySelector('.clear-btn');

    groceryForm.addEventListener('submit', addItem);
    clearBtn.addEventListener('click', clearItems);
    groceryList.addEventListener('click', modifyItem);

    function addItem(e) {
        e.preventDefault();
        const value = groceryInput.value.trim();
        if (value) {
            const item = document.createElement('article');
            item.classList.add('grocery-item');
            item.innerHTML = `
                <p class="title">${value}</p>
                <div class="btn-container">
                    <button type="button" class="edit-btn">
                        <i class="fas fa-edit"></i>
                    </button>
                    <button type="button" class="delete-btn">
                        <i class="fas fa-trash"></i>
                    </button>
                </div>
            `;
            groceryList.appendChild(item);
            displayAlert('Item added to the list', 'success');
            groceryContainer.style.display = 'block';
            groceryInput.value = '';
        } else {
            displayAlert('Please enter a value', 'danger');
        }
    }

    function clearItems() {
        const items = document.querySelectorAll('.grocery-item');
        if (items.length > 0) {
            items.forEach(item => {
                groceryList.removeChild(item);
            });
            groceryContainer.style.display = 'none';
            displayAlert('List cleared', 'success');
        }
    }

    function modifyItem(e) {
        if (e.target.closest('.delete-btn')) {
            const item = e.target.closest('.grocery-item');
            groceryList.removeChild(item);
            if (groceryList.children.length === 0) {
                groceryContainer.style.display = 'none';
            }
            displayAlert('Item removed', 'success');
        } else if (e.target.closest('.edit-btn')) {
            const item = e.target.closest('.grocery-item');
            groceryInput.value = item.querySelector('.title').textContent;
            groceryList.removeChild(item);
            if (groceryList.children.length === 0) {
                groceryContainer.style.display = 'none';
            }
        }
    }

    function displayAlert(text, action) {
        alert.textContent = text;
        alert.classList.add(`alert-${action}`);
        setTimeout(() => {
            alert.textContent = '';
            alert.classList.remove(`alert-${action}`);
        }, 2000);
    }
});
