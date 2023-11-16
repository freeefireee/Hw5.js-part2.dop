document.getElementById('button').addEventListener('click', function() {
    var colorValue = document.getElementById('text').value;

    document.getElementById('color-box').style.backgroundColor = colorValue;
});