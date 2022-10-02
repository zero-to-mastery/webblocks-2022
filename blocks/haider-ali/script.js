const input = document.getElementById("url")
const btn = document.getElementById("btn")
const pre = document.getElementById("json")
const state = {
    input: ""
}
input.addEventListener("change", (e) => {
    state.input = e.target.value
})


btn.addEventListener("click", (e) => {
    if (!state.input) {
        console.log("Error")
        return
    }
    fetch(state.input)
        .then((v) => v.json())
        .then((value) => {
            pre.innerText = JSON.stringify(value)

            input.value = ""
        })

})
