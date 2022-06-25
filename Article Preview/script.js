const shareButton = document.querySelector('a .fa-share');
const speechBubble = document.querySelector('.bubble');

shareButton.addEventListener('click', function () {
    if (speechBubble.classList.contains('bubbleIn')) {
        speechBubble.classList.remove('bubbleIn');
        speechBubble.classList.add('bubbleOut');
        shareButton.style.backgroundColor = 'hsl(210, 46%, 95%)';
        shareButton.style.color = 'hsl(214, 17%, 51%)';

    } else {
        speechBubble.classList.add('bubbleIn');
        speechBubble.classList.remove('bubbleOut');
        shareButton.style.backgroundColor = 'hsl(214, 17%, 51%)';
        shareButton.style.color = 'hsl(210, 46%, 95%)';
    }
})