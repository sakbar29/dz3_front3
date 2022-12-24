const tabs = document.querySelectorAll(".tabheader__item")
const tabsParent = document.querySelector(".tabheader__items")
const tabContent = document.querySelectorAll(".tabcontent")
const tabContentImages = document.querySelectorAll('.tabcontent img')

const hideTabContent = () => {
    tabContent.forEach((item) => {
        item.style.display = "none"
    })
    tabs.forEach((item) => {
        item.classList.remove("tabheader__item_active")
    })
    tabContentImages.forEach((item) => {
        item.style.opacity = '0.5'
    })
}

const showTabContent = (i = 3) => {
    tabContent[i].style.display = "block"
    setTimeout(() => {
        tabContentImages[i].style.opacity = '1'
    },0)
    tabs[i].classList.add("tabheader__item_active")
}

hideTabContent()
showTabContent()

hideTabContent()
showTabContent()

tabsParent.addEventListener("click", (event) => {
    const target = event.target
    if(target.classList.contains("tabheader__item")){
        tabs.forEach((item, i) => {
            if(target === item){
                console.log(i)
                hideTabContent()
                showTabContent(i)
            }
        })
    }
})

let slider = 0;
setInterval(() => {
    if (slider <= 4) {
        slider++
        hideTabContent()
        showTabContent(slider)
    } else {
        slider = 0
        hideTabContent()
        showTabContent(slider)
    }
},2000);

const modal = document.querySelector(".modal")
const modalTrigger = document.querySelector(".btn_white")
const closeModalBtn = document.querySelector(".modal__close")

const openModal = () => {
    modal.classList.add("show")
    modal.classList.remove("hide")
    document.body.style.overflow = "hidden"

}

modalTrigger.addEventListener("click", openModal)

const closeModal = () => {
    modal.classList.add("hide")
    modal.classList.remove("show")
    document.body.style.overflow = ""
}
closeModalBtn.addEventListener('click',closeModal);

let ModalOpen = false
window.onscroll = () => {
    if (document.documentElement.scrollTop >= 3400 && ModalOpen === false) {
        ModalOpen = true
        openModal();
    }
}

document.body.addEventListener('click', (e) => {
    if (e.target.classList.contains('show')) {
        closeModal();
    }
});
