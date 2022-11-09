const img = document.querySelector("img");
const imageChange = () => {
    if(img.src === "https://images.unsplash.com/photo-1632395627760-72e6eca7f9c7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80") {
        img.src = "https://images.unsplash.com/photo-1479090793912-eb9929f4fdb2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bW9vbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=900&q=60";
    } else {
        img.src = "https://images.unsplash.com/photo-1632395627760-72e6eca7f9c7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
    }
}
img.addEventListener("click", imageChange);