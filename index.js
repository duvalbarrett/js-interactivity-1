{console.log('hello world')

const message = document.querySelector('#message')


const addMovie = (event) => {

    event.preventDefault()

    const inputField = document.querySelector('input')
    const movie = document.createElement('li')
    const movieTitle = document.createElement('span')
    const deleteBtn = document.createElement('button')

    movieTitle.textContent = inputField.value

    movieTitle.addEventListener('click', crossOffMovie)

    deleteBtn.textContent = ('X')

    movie.appendChild(deleteBtn)
    movie.appendChild(movieTitle)

    document.querySelector('ul').appendChild(movie)

    deleteBtn.addEventListener('click', deleteMovie)

    inputField.value = ''
}

const deleteMovie = (event) => {
    message.textContent = ('Movie deleted')
    revealMessage()
    event.target.parentNode.remove()
}

const crossOffMovie = (event) => {
    if (event.target.classList.toggle('checked') === true){
        message.textContent('Movie watched')
    }else{
        message.textContent('Movie added back!')
    }
    revealMessage()
}


function revealMessage() {
    // message.classList.remove('hide')
    
    setTimeout(() => {
        message.classList.add('hide')
    }, 1000)
}
}



document.querySelector('form').addEventListener('submit', addMovie)


// console.log(addMovie())

//addMovie()}