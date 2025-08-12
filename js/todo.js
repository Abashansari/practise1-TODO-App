function add() {
    const data = []
    const input = document.getElementById('inputfield').value
    const ul = document.getElementById('list')
    const value = input.trim()
    let li = document.createElement('li')
    li.innerHTML = value
    ul.append(li)
    data.push(li)
    console.log(data)
    localStorage.setItem(data)
    
}


