// Initialise scroll values
const height = document.documentElement
const body = document.body
const scrollTop = "scrollTop"
const scrollHeight = "scrollHeight"
const documentRoot = document.documentElement

document.addEventListener("scroll", function() {
    let scroll = (height[scrollTop] || body[scrollTop]) / ((height[scrollHeight] || body[scrollHeight]) - height.clientHeight) * 100
    documentRoot.style.setProperty("--scroll", scroll + "%")
    documentRoot.style.setProperty("--scroll-inverse", (100 / scroll) * 100 + "%")
})

// scroll triggers

const hanashi = () => {

    const triggers = document.querySelectorAll("[data-hanashi-trigger]")

    // Intersection observer

    const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0
    }

    let callback = (entries, observer) => {
        entries.forEach(entry => {
            const trigger = entry.target.dataset.hanashiTrigger
            const target = document.querySelector(`[data-hanashi-target="${trigger}"]`)
            if (entry.isIntersecting) {
                target.dataset.hanashiActive = true
            } else {
                delete target.dataset.hanashiActive
            }
        })
    }

    const scrollObserver = new IntersectionObserver(callback, options)

    triggers.forEach(trigger => {
        scrollObserver.observe(trigger)
    })

}