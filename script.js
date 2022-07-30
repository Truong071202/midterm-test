document.getElementById('random').onclick
= () => {
    let x = Math.floor((Math.random() * 3) + 1);
    document.getElementById("demo").innerHTML = x;
    if (x === 1) alert('1 là số thứ tự của Trường, xin mời bạn trình bày');
    else if (x === 2) alert('2 là số thứ tự của Thục, xin mời bạn trình bày')
    else if (x === 3) alert('3 là số thứ tự của Thủy, xin mời bạn trình bày')  
}

