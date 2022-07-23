
const tabItems = document.querySelectorAll(".tab-item");
const tabContentItems = document.querySelectorAll(".tab-content-item");

function removeBorder() {
    tabItems.forEach(item => item.classList.remove("tab-border"));
}

function hide() {
    tabContentItems.forEach(item => item.classList.add('hidden'));
}

tabItems.forEach(item => item.addEventListener('click', function(){
    removeBorder();
    hide();
    this.classList.add('tab-border');
    document.querySelector(`#${this.id}-content`).classList.remove('hidden');
}));