const STATE_FILTERS = {
    city: false,
    forest: false,
    painting: false,
}


const areFiltersClear = function() {
    for (key in STATE_FILTERS) {
        if (STATE_FILTERS[key]) {
            return false
        }
    }

    return true
}


const handleLogoClick = function() {
    window.location.reload()
}


const handleButtonFiltersClick = function(buttonFiltersContainer) {
    buttonFiltersContainer.classList.toggle("control_panel__container_filters--show")
}


const handleButtonFiltersApply = function(imageList) {
    if (areFiltersClear()) {
        imageList.forEach((image) => {
            image.classList.add("gallery__container_image--show")
        })
    } else {
        imageList.forEach((image) => {
            const imageTeg = image.querySelector(".gallery__button_teg")
            const imageTegName = imageTeg.textContent.slice(1)
            if (STATE_FILTERS[imageTegName]) {
                image.classList.add("gallery__container_image--show")
            } else {
                image.classList.remove("gallery__container_image--show")
            }
        })
    }
}


const handleCheckboxClick = function(checbox, buttonFilters) {
    STATE_FILTERS[checbox.id] = checbox.checked
    if (!areFiltersClear()) {
        buttonFilters.classList.add("control_panel__button_filters--active")
    } else {
        buttonFilters.classList.remove("control_panel__button_filters--active")
    }
}


const handleImageTegClick = function(imageTegClicked, imageList) {
    imageList.forEach((image) => {
        const imageTeg = image.querySelector(".gallery__button_teg")
        const imageTegName = imageTeg.textContent
        const imageTegClickedName = imageTegClicked.textContent
        if (imageTegName !== imageTegClickedName) {
            image.classList.remove("gallery__container_image--show")
        }
    })
}


const logo = document.querySelector(".header__logo")
const buttonFilters = document.querySelector(".control_panel__button_filters")
const buttonFiltersContainer = document.querySelector(".control_panel__container_filters")
const buttonFiltersApply = document.querySelector(".control_panel__button_apply")
const checkboxList = document.querySelectorAll(".control_panel__checkbox")
const imageList = document.querySelectorAll(".gallery__container_image")
const imageTegList = document.querySelectorAll(".gallery__button_teg")

logo.addEventListener("click", handleLogoClick)
buttonFilters.addEventListener("click", () => {handleButtonFiltersClick(buttonFiltersContainer)})
buttonFiltersApply.addEventListener("click", () => {handleButtonFiltersApply(imageList)})

checkboxList.forEach((checkbox) => {
    checkbox.addEventListener("click", () => {handleCheckboxClick(checkbox, buttonFilters)})
})
imageTegList.forEach((imageTeg) => {
    imageTeg.addEventListener("click", () => {handleImageTegClick(imageTeg, imageList)})
})