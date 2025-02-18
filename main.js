function task1(){
    let list=["Петров Петр","Кузьмин Иван","Федоров Иван"];
    let input=document.getElementById("1taskinput").value;
    alert("Масив до: "+ list);
    if(list.indexOf(input)===-1)
        alert("Ім'я не знайдено");
    else{
        
        list[list.indexOf(input)]="Иванов Иван";
        alert("Масив після: "+ list);
    }

}
function task2(){
    const str =document.getElementById("2taskinput").value;
    const numbers = [];
    let currentNumber = '';

    for (let i = 0; i < str.length; i++) {
        const char = str[i];
        if (char >= '0' && char <= '9') {
            currentNumber += char;
        } else if (currentNumber) {
            numbers.push(Number(currentNumber));
            currentNumber = '';
        }
    }

    if (currentNumber) {
        numbers.push(Number(currentNumber));
    }

    alert(numbers);
    
    
}
function task3(){
    let input=document.getElementById("3taskinput").value;
        const pattern = /^([А-ЯІЇЄҐ][а-яіїєґ']+) ([А-ЯІЇЄҐ][а-яіїєґ']+)$/;
        const match = input.match(pattern);
    
        if (match) {
            alert(`${match[2]} ${match[1]}`);
        } else {
            alert("Неправильний формат вводу.");
        }
    
    

}
function task4(){
    
        let input = document.getElementById("4taskinput").value;
        const pattern = /^(\d+)[.,]?(\d+)?$/;
        const match = input.match(pattern);
    
        if (match) {
            alert(`Integer part: ${match[1]}, Fractional part: ${match[2] || 'none'}`);
        } else {
            alert("Invalid input format.");
        }

}
function task5(){
    function task5() {
        let input = document.getElementById("5taskinput").value;
        const pattern = /[^\\/]+/g;
        const folders = input.match(pattern);
    
        if (folders) {
            alert(`Folders:\n${folders.slice(0, -1).join('\n')}`);
        } else {
            alert("Invalid file path.");
        }
    }

}
function task6(){
    let input = document.getElementById("6taskinput").value;
    const pattern = /^(?:\+?3?8)?\s?(?:\(?0\d{2}\)?|\d{3})\s?\d{3}[- ]?\d{2}[- ]?\d{2}$/;
    
    if (pattern.test(input)) {
        alert("Valid phone number.");
    } else {
        alert("Invalid phone number.");
    }

}
function task7(){
    let input = document.getElementById("7taskinput").value;
    const pattern = /\b(\w{7})\w{1,}(?=\w{7}\b)/g;
    const modifiedText = input.replace(pattern, '$1...');

    alert(modifiedText);

}
function task8(){
    let input = document.getElementById("8taskinput").value;
    const pattern = /\b(\w+[^аеєиіїоуюя])ик\b/g;
    const modifiedText = input.replace(pattern, '$1');

    alert(modifiedText);

}