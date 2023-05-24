const questions = [
   
    {
        question: "1",
        optionA: "Полеты во сне и на яву",
        optionB: "Покровские ворота",
        optionC: "Полоса препятствий",
        optionD: "Чародеи",
        correctOption: "optionB"
    },

    {
        question: "2",
        optionA: "Иван Васильевич меняет профессию",
        optionB: "Три плюс два",
        optionC: "Веселые ребята",
        optionD: "Юнармейци",
        correctOption: "optionA"
    },
    {
        question: "3",
        optionA: "Ищите женщину",
        optionB: "Чародеи",
        optionC: "Самая обаятельная и привлекательная",
        optionD: "Волшебство",
        correctOption: "optionC"
    },

    {
        question: "4",
        optionA: "Джентельмены удачи",
        optionB: "Большая перемена",
        optionC: "Гонщики",
        optionD: "Бриллиантовая рука",
        correctOption: "optionA"
    },
    {
        question: "5",
        optionA: "Бриллиантовая рука",
        optionB: "Наваждение",
        optionC: "Операция ы и другие приключения Шурика",
        optionD: "Пальма де Майорка",
        correctOption: "optionC"
    },

    {
        question: "6",
        optionA: "Служебный роман",
        optionB: "Ирония судьбы или с легким паром",
        optionC: "Жестокий романс",
        optionD: "Самогонщики",
        correctOption: "optionA"
    },
    {
        question: "7",
        optionA: "Я шагаю по Москве",
        optionB: "Любовь и голуби",
        optionC: "Мужики!!",
        optionD: "Москва слезам не верит",
        correctOption: "optionB"
    },

    {
        question: "8",
        optionA: "Москва слезам не верит",
        optionB: "Самая обаятельная и привлекательная",
        optionC: "Карнавал",
        optionD: "Пять минут",
        correctOption: "optionA"
    },
    {
        question: "9",
        optionA: "Иван Васильевич меняет профессию",
        optionB: "Самая обаятельная и привлекательная",
        optionC: "Мужики",
        optionD: "Чародеи",
        correctOption: "optionA"
    },
    {
        question: "10",
        optionA: "Полосатый рейс",
        optionB: "Обыкновенное чудо",
        optionC: "Афоня",
        optionD: "Джентельмены удачи",
        correctOption: "optionA"
    },
    
]

let shuffledQuestions = [] // создание массива для хранения перетасованных выбранных вопросов

function handleQuestions() {
    // функция для перетасовки и добавления 10 вопросов в массив перетасованных вопросов
    while (shuffledQuestions.length <= 9) {
        const random = questions[Math.floor(Math.random() * questions.length)]
        if (!shuffledQuestions.includes(random)) {
            shuffledQuestions.push(random)
        }
    }
}

let questionNumber = 1
let playerScore = 0
let indexNumber = 0

// функция для отображения следующего вопроса в массиве в DOM (Document Object Model)
function NextQuestion(index) {
    handleQuestions()

    const images = [
        // добавление пути к изображениям
        '1/1-easy.jpeg',
        '1/2-easy.jpeg',
        '1/3-easy.jpeg',
        '1/4-easy.jpeg',
        '1/5-easy.jpeg',
        '1/6-easy.jpeg',
        '1/7-easy.jpeg',
        '1/8-easy.jpeg',
        '1/9-easy.jpeg',
        '1/10-easy.jpeg',
        ];
        const currentQuestion = shuffledQuestions[index]
        const Image = document.getElementById('display-question');
        Image.setAttribute('src', '')
        gol = currentQuestion.question;
        switch (gol) {

            case "1":
                Image.setAttribute('src',  images[0])
                break;
            
            case "2":
                Image.setAttribute('src',  images[1])
                break;
            case "3":
                Image.setAttribute('src',  images[2])
                break;
                
            case "4":
                Image.setAttribute('src',  images[3])
                break;     
            case "5":
                Image.setAttribute('src',  images[4])
                break;
            
            case "6":
                Image.setAttribute('src',  images[5])
                break;    
            case "7":
                Image.setAttribute('src',  images[6])
                break;     
            case "8":
                Image.setAttribute('src',  images[7])
                break;
            case "9":
                Image.setAttribute('src',  images[8])
                break;    
            case "10":
                Image.setAttribute('src',  images[9])
                break;  
            default:
            
            break;
        }
      
    document.getElementById("option-one-label").innerHTML = currentQuestion.optionA;
    document.getElementById("option-two-label").innerHTML = currentQuestion.optionB;
    document.getElementById("option-three-label").innerHTML = currentQuestion.optionC;
    document.getElementById("option-four-label").innerHTML = currentQuestion.optionD;

}


function checkForAnswer() {
    const currentQuestion = shuffledQuestions[indexNumber] // получение текущего вопроса
    const currentQuestionAnswer = currentQuestion.correctOption // получение ответа на текущий вопрос
    const options = document.getElementsByName("option"); // получение всех элементов в dom с именем 'option'
    let correctOption = null

    options.forEach((option) => {
        if (option.value === currentQuestionAnswer) {
            correctOption = option.labels[0].id
        }
    })


    // проверка на совпадение установленного переключателя с ответом
    options.forEach((option) => {
    
        document.getElementById("option-one").disabled = true;
        document.getElementById("option-two").disabled = true;
        document.getElementById("option-three").disabled = true;
        document.getElementById("option-four").disabled = true;
    
        if (option.checked === true && option.value === currentQuestionAnswer) {
        document.getElementById(correctOption).style.backgroundColor = "#92CD64"
        playerScore++
        indexNumber++
        // задержка + блокировка остальных ответов до загрузки следующего вопроса
        setTimeout(() => {
            questionNumber++
            document.getElementById("option-one").disabled = false;
            document.getElementById("option-two").disabled = false;
            document.getElementById("option-three").disabled = false;
            document.getElementById("option-four").disabled = false;
        }, 1000)
    }

    else if (option.checked && option.value !== currentQuestionAnswer) {
        const wrongLabelId = option.labels[0].id
        document.getElementById(wrongLabelId).style.backgroundColor = "#F25C3B"
        document.getElementById(correctOption).style.backgroundColor = "#92CD64"
        indexNumber++
        // задержка + блокировка остальных ответов до загрузки следующего вопроса
        setTimeout(() => {
            questionNumber++
            document.getElementById("option-one").disabled = false;
            document.getElementById("option-two").disabled = false;
            document.getElementById("option-three").disabled = false;
            document.getElementById("option-four").disabled = false;
        }, 1000)
    }
})
}


// вызов при вызове следующей кнопки
function handleNextQuestion() {
    checkForAnswer()
    unCheckRadioButtons()
    // задержка отображения следующего вопроса на секунду
    setTimeout(() => {
        if (indexNumber <= 9) {
            NextQuestion(indexNumber)
        }
        else {
            handleEndGame()
        }
        resetOptionBackground()
    }, 1000);
}

// устанавка параметров фона обратно в значение null после отображения правильных/неправильных цветов
function resetOptionBackground() {
    const options = document.getElementsByName("option");
    options.forEach((option) => {
        document.getElementById(option.labels[0].id).style.backgroundColor = ""
    })
}

// снятие всех переключателей для следующего вопроса
function unCheckRadioButtons() {
    const options = document.getElementsByName("option");
    for (let i = 0; i < options.length; i++) {
        options[i].checked = false;
    }
}

// функция для получения ответов на все вопросы
function handleEndGame() {
    let remark = null
    let remarkColor = null

    // проверка состояния ремарки игрока и цвета ремарки
    if (playerScore <= 3) {
        remark = "Это никуда не годится... Тебе следует изучить материал и больше практиковаться!"
        remarkColor = "#F25C3B"
    }
    else if (playerScore >= 4 && playerScore < 7) {
        remark = "Неплохо, однако стоит немного подучить материал"
        remarkColor = "#D9DF63"
    }
    else if (playerScore >= 7) {
        remark = "Good job! Ты справился с вопросами, продолжай в том же духе!"
        remarkColor = "#92CD64"
    }
    const playerGrade = (playerScore / 10) * 100

    // данные для отображения в окне результатов
    document.getElementById('remarks').innerHTML = remark
    document.getElementById('remarks').style.color = remarkColor
    document.getElementById('number-of-points').innerHTML = playerScore
    document.getElementById('score-modal').style.display = "flex"

}

// закрытие окна результатов и перезапуск игры
function closeScoreModal() {
    questionNumber = 1
    playerScore = 0
    indexNumber = 0
    shuffledQuestions = []
    NextQuestion(indexNumber)
    document.getElementById('score-modal').style.display = "none"
}

    const submit1 = document.getElementById("submit1");

    // Добавляем обработчик события на нажатие кнопки
submit1.addEventListener("click", function() {
    // Переходим на другую страницу
    window.location.href = "Glavnaya.html";
});