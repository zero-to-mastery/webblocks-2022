const obj = document.querySelector('.obj')
const empties = document.querySelectorAll('.empty')

obj.addEventListener('dragstart', dragStart)
obj.addEventListener('dragend', dragEnd)

for(const empty of empties) {
    empty.addEventListener('dragover', dragOver)
    empty.addEventListener('dragenter', dragEnter)
    empty.addEventListener('dragleave', dragLeave)
    empty.addEventListener('drop', dragDrop)
}

function dragStart() {
    this.className += ' hold' 
    setTimeout(() => this.className = 'invisible', 0)
}

function dragEnd() {
    this.className = 'obj'
}

function dragOver(e) {
    e.preventDefault()
}

function dragEnter(e) {
    e.preventDefault()
    this.className += ' hovered'
}

function dragLeave() {
    this.className = 'empty'
}

function dragDrop() {
    this.className = 'empty'
    this.append(obj)
}