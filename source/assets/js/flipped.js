
function flipTile(tile) {
    tile.classList.add('flipped');
    tile.addEventListener('transitionend', function () {
        tile.classList.remove('flipped');
    }, { once: true });
}
