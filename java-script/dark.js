function dark() {
    if(document.querySelector('#night_day').value === 'night'){
    document.querySelector('body').style.backgroundColor = '333333';
    document.querySelector('body').style.color = 'white';
    document.querySelector('#night_day').value = 'day';
} else {
    document.querySelector('body').style.backgroundColor = 'white';
    document.querySelector('body').style.color = 'black';
    document.querySelector('#night_day').value = 'night';
}
}