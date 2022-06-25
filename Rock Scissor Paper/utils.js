// 0 = scissor
// 1 = spock
// 2 = paper
// 3 = lizard
// 4 = rock

let score = 0
const human_picks = document.querySelector(".human_picks")
const computer_picks = document.querySelector(".computer_picks")
const referee_desktop = document.querySelector(".referee-desktop")
const referee_phone = document.querySelector(".referee-phone")
const section_hand = document.querySelector(".hands")
const section_contest = document.querySelector(".contest")

const handleScissor = (human_picks, computer_picks) => {
    if (human_picks !== 0) {
        return false
    }

    if (human_picks === 0 && computer_picks === 0) {
        return false
    }

    if (human_picks === 0 && computer_picks === 1) {
        return false
    }

    if (human_picks === 0 && computer_picks === 2) {
        return true
    }

    if (human_picks === 0 && computer_picks === 3) {
        return true
    }

    if (human_picks === 0 && computer_picks === 4) {
        return false
    }
}

const handleSpock = (human_picks, computer_picks) => {
    if (human_picks !== 1) {
        return false
    }

    if (human_picks === 1 && computer_picks === 0) {
        return true
    }

    if (human_picks === 1 && computer_picks === 1) {
        return false
    }

    if (human_picks === 1 && computer_picks === 2) {
        return false
    }

    if (human_picks === 1 && computer_picks === 3) {
        return false
    }

    if (human_picks === 1 && computer_picks === 4) {
        return true
    }
}

const handlePaper = (human_picks, computer_picks) => {
    if (human_picks !== 2) {
        return false
    }

    if (human_picks === 2 && computer_picks === 0) {
        return false
    }

    if (human_picks === 2 && computer_picks === 1) {
        return true
    }

    if (human_picks === 2 && computer_picks === 2) {
        return false
    }

    if (human_picks === 2 && computer_picks === 3) {
        return false
    }

    if (human_picks === 2 && computer_picks === 4) {
        return true
    }
}

const handleLizard = (human_picks, computer_picks) => {
    if (human_picks !== 3) {
        return false
    }

    if (human_picks === 3 && computer_picks === 0) {
        return false
    }

    if (human_picks === 3 && computer_picks === 1) {
        return true
    }

    if (human_picks === 3 && computer_picks === 2) {
        return true
    }

    if (human_picks === 3 && computer_picks === 3) {
        return false
    }

    if (human_picks === 3 && computer_picks === 4) {
        return false
    }
}

const handleRock = (human_picks, computer_picks) => {
    if (human_picks !== 4) {
        return false
    }

    if (human_picks === 4 && computer_picks === 0) {
        return true
    }

    if (human_picks === 4 && computer_picks === 1) {
        return false
    }

    if (human_picks === 4 && computer_picks === 2) {
        return false
    }

    if (human_picks === 4 && computer_picks === 3) {
        return true
    }

    if (human_picks === 4 && computer_picks === 4) {
        return false
    }
}

const handleGame = ({ human_picks, computer_picks }) => {
    return handleScissor(human_picks, computer_picks)
        || handleSpock(human_picks, computer_picks)
        || handlePaper(human_picks, computer_picks)
        || handleLizard(human_picks, computer_picks)
        || handleRock(human_picks, computer_picks)
}

const randomComputer = () => {
    const number = Math.floor(Math.random() * 4)
    return number
}

const handleRefereeStatus = ({ human_picks, computer_picks, status }) => {
    const referee_status_phone = document.querySelector(".referee-phone h1")
    const referee_status_desktop = document.querySelector(".referee-desktop h1")

    if (status) {
        referee_status_phone.innerText = "YOU WIN!"
        referee_status_desktop.innerText = "YOU WIN!"
        document.querySelector(".human_picks .icon").classList.add("win")
        setScore(score + 1)
    } else if (status === false && human_picks === computer_picks) {
        referee_status_phone.innerText = "IT'S A TIE!"
        referee_status_desktop.innerText = "IT'S A TIE!"
    } else {
        referee_status_phone.innerText = "YOU LOSE!"
        referee_status_desktop.innerText = "YOU LOSE!"
        document.querySelector(".computer_picks .icon").classList.add("win")
    }
}

const setScore = (newScore) => {
    score = newScore
    document.querySelector(".header__score h2").innerText = newScore
}

const redirectToContest = ({ human_picks_svg, computer_picks_svg }) => {
    section_hand.classList.replace("flex", "none")
    section_contest.classList.replace("none", "flex")
    human_picks.innerHTML += `
        ${human_picks_svg}
        <p>YOU PICKED</p>
    `
    computer_picks.innerHTML += `
        ${computer_picks_svg}
        <p>THE HOUSE PICKED</p>
    `
}

const redirectToHands = () => {
    section_hand.classList.replace("none", "flex")
    section_contest.classList.replace("flex", "none")

    if (referee_phone.classList.contains("flex")) {
        referee_phone.classList.replace("flex", "none")
    }

    if (referee_desktop.classList.contains("flex")) {
        referee_desktop.classList.replace("flex", "none")
    }

    human_picks.innerHTML = ""
    computer_picks.innerHTML = ""
}

const checkWindowInnerWidth = () => {
    if (window.innerWidth > 1024) {
        return true
    } else {
        return false
    }
}

const applyReferee = () => {
    if (checkWindowInnerWidth() && section_hand.classList.contains("none")) {
        referee_phone.classList.replace("flex", "none")
        referee_desktop.classList.replace("none", "flex")
    }

    if (!checkWindowInnerWidth() && section_hand.classList.contains("none")) {
        referee_desktop.classList.replace("flex", "none")
        referee_phone.classList.replace("none", "flex")
    }

    if (checkWindowInnerWidth() && section_contest.classList.contains("flex")) {
        referee_phone.classList.replace("flex", "none")
        referee_desktop.classList.replace("none", "flex")
    }

    if (!checkWindowInnerWidth() && section_contest.classList.contains("flex")) {
        referee_desktop.classList.replace("flex", "none")
        referee_phone.classList.replace("none", "flex")
    }
}

export { randomComputer, handleGame, handleRefereeStatus, redirectToContest, redirectToHands, checkWindowInnerWidth, applyReferee }