var list = document.querySelectorAll('img');// 0, 1
//list[0] -- user 1 Image
//list[1] -- user 2 Image
//Math.random() 0 and 1 -- 0.12, 0.56, 0.40
//0 and 1
//0.1 and 0.9
//0.1 * 6 = 0.6 = 0 + 1 = 1
//0.9 * 6 = 5.4 = 5 + 1 = 6
//0.5 * 6 = 3.0 = 3 + 1 = 4
//0.6 * 6 = 3.6 = 3 + 1 = 4
const first = Math.floor(Math.random() * 6) + 1; // 1 2 3 4 5 6
const imageFirst = 'assets/dice'+first+'.jpg';
list[0].setAttribute('src', imageFirst);
const second = Math.floor(Math.random() * 6) + 1; // 1 2 3 4 5 6
const imageSecond = 'assets/dice'+second+'.jpg';
list[1].setAttribute('src', imageSecond);
if (first > second) {
    document.querySelector('h1').innerHTML = "The winner is User 1";
}
else if (first < second) {
    document.querySelector('h1').innerHTML = "The winner is User 2";
}
else {
    document.querySelector('h1').innerHTML = "It's a tie/draw!!";
}