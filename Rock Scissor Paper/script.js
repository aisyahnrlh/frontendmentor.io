const close_button = document.querySelector(".modal__close")
const modal = document.querySelector(".modal__rules")
const referee_desktop = document.querySelector(".referee-desktop")
const referee_phone = document.querySelector(".referee-phone")
const play_again_button_desktop = document.querySelector(".referee-desktop button")
const play_again_button_phone = document.querySelector(".referee-phone button")
const rules_button = document.querySelector(".rules")

const scissor_button = document.querySelector(".scissor")
const spock_button = document.querySelector(".spock")
const paper_button = document.querySelector(".paper")
const lizard_button = document.querySelector(".lizard")
const rock_button = document.querySelector(".rock")

import { scissor_svg, spock_svg, paper_svg, lizard_svg, rock_svg } from "./data.js"
import { handleGame, randomComputer, handleRefereeStatus, redirectToContest, redirectToHands, applyReferee } from "./utils.js"

const objects = [scissor_svg, spock_svg, paper_svg, lizard_svg, rock_svg]
let currentWidth = 0

rules_button.addEventListener("click", () => {
    modal.style.display = "flex"
    modal.style.animation = "fadeIn .3s ease-in-out forwards"
})

close_button.addEventListener("click", () => {
    modal.style.animation = "fadeOut .3s ease-in-out forwards"
    setTimeout(() => {
        modal.style.display = "none"
    }, 300);
})

scissor_button.addEventListener("click", () => {
    const index = randomComputer()
    redirectToContest({ human_picks_svg: scissor_svg, computer_picks_svg: objects[index] })
    const status = handleGame({ human_picks: 0, computer_picks: index })
    handleRefereeStatus({ human_picks: 0, computer_picks: index, status })
    applyReferee()
})

spock_button.addEventListener("click", () => {
    const index = randomComputer()
    redirectToContest({ human_picks_svg: spock_svg, computer_picks_svg: objects[index] })
    const status = handleGame({ human_picks: 1, computer_picks: index })
    handleRefereeStatus({ human_picks: 1, computer_picks: index, status })
    applyReferee()
})

paper_button.addEventListener("click", () => {
    const index = randomComputer()
    redirectToContest({ human_picks_svg: paper_svg, computer_picks_svg: objects[index] })
    const status = handleGame({ human_picks: 2, computer_picks: index })
    handleRefereeStatus({ human_picks: 2, computer_picks: index, status })
    applyReferee()
})

lizard_button.addEventListener("click", () => {
    const index = randomComputer()
    redirectToContest({ human_picks_svg: lizard_svg, computer_picks_svg: objects[index] })
    const status = handleGame({ human_picks: 3, computer_picks: index })
    handleRefereeStatus({ human_picks: 3, computer_picks: index, status })
    applyReferee()
})

rock_button.addEventListener("click", () => {
    const index = randomComputer()
    redirectToContest({ human_picks_svg: rock_svg, computer_picks_svg: objects[index] })
    const status = handleGame({ human_picks: 4, computer_picks: index })
    handleRefereeStatus({ human_picks: 4, computer_picks: index, status })
    applyReferee()
})

play_again_button_desktop.addEventListener("click", () => {
    redirectToHands()
})

play_again_button_phone.addEventListener("click", () => {
    redirectToHands()
})

window.addEventListener("load", () => {
    referee_desktop.classList.add("none")
    referee_phone.classList.add("none")
    currentWidth = window.innerWidth
})

window.addEventListener("resize", () => {
    if (currentWidth !== window.innerWidth) {
        applyReferee()
    }
})