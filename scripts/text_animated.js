window.onload = function () {
    console.log('!');
    let h = document.getElementById('dynamic_text_1');
    h.innerHTML = '';
    let delay = 200;
    let words = ['python developer ', 'web developer ', 'designer '];
    let str = '';
    let number_of_word = 0;
    let letter = 0;
    let direction = 1;  // 1 - right, 0 - left
    setInterval(function () {
        if (direction === 1) {
            str += words[number_of_word][letter];
            h.innerHTML = str+'<br>';
            letter++;
            if (letter === words[number_of_word].length) {
                direction = 0;
                letter--;
            }
        } else {
            str = str.slice(0, -1);
            h.innerHTML = str+'<br>';
            letter--;
            if (letter === -1) {
                direction = 1;
                letter = 0;
                number_of_word++;
                if (number_of_word === words.length) {
                    number_of_word = 0;
                }
            }
        }
    }, delay);
}