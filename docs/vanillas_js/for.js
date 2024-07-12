const ulEl = document.querySelector('ul')

for (let i = 0 ; i < 3 ; i += 1){
    const li = document.createElement('li')
    li.textContent = `list-${i + 1}`
    if((i+1) % 2 === 0){
        li.addEventListener('click', function() { // click 이벤트 추가 해서 li가 담고 있는 text 출력
            console.log(li.textContent)
        })
    }
    ulEl.appendChild(li)
}

// ul 태그 밑에 li 태그 3개 생성 list-1, list-2, list-3