const element = document.getElementById("main");
const body = document.getElementById("body");
const time = () => {
    var curt = new Date();
    let h = curt.getHours();
    let m = curt.getMinutes();
    let s = curt.getSeconds();
    if (h > 0 && h < 12) {
        body.setAttribute("style",
            "background:url('https://images.unsplash.com/photo-1415750465391-51ed29b1e610?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8bW9ybmluZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=4000&q=60');height:100vh;px;width:100vw;background-repeat:no-repeat;background-size: cover;"
        );
    }
    else if (h >= 12 && h < 16) {
        body.setAttribute("style",
            "background:url('https://images.unsplash.com/photo-1619006219373-ee04a2139db1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fG5vb24lMjBzdW58ZW58MHx8MHx8&auto=format&fit=crop&w=4000&q=60');height:100vh;px;width:100vw;background-repeat:no-repeat;background-size: cover;"
        );
    }
    else if (h >= 16 && h <= 19) {
        body.setAttribute("style",
            "background:url('https://images.unsplash.com/photo-1495616811223-4d98c6e9c869?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8c3Vuc2V0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=4000&q=60');height:100vh;px;width:100vw;background-repeat:no-repeat;background-size: cover;"
        );
    }
    else {
        body.setAttribute("style",
            "background:url('https://images.unsplash.com/photo-1515966306809-37aaff37a72f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8bmlnaHR8ZW58MHwyfDB8fA%3D%3D&auto=format&fit=crop&w=4000&q=60');height:100vh;px;width:100vw;background-repeat:no-repeat;background-size: cover;"
        );
    }
    if (m < 10) m = "0" + m;
    if (h < 10) h = "0" + h;
    if (s < 10) s = "0" + s;

    element.innerHTML = h + " <span>:</span> " + m + " <span>:</span> " + s;
}

setInterval(time, 1000);

