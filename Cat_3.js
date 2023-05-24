const questions = [
   
    {
        question: "1",
        optionA: "Полеты во сне и на яву",
        optionB: "Иван Васильевич меняет профессию",
        optionC: "Полоса препятствий",
        optionD: "Чародеи",
        correctOption: "optionB"
    },

    {
        question: "2",
        optionA: "Бриллиантовая рука",
        optionB: "Три плюс два",
        optionC: "Веселые ребята",
        optionD: "Юнармейцы",
        correctOption: "optionA"
    },
    
    {
        question: "3",
        optionA: "Ищите женщину",
        optionB: "Чародеи",
        optionC: "Джентельмены удачи",
        optionD: "Волшебство",
        correctOption: "optionC"
    },

    {
        question: "4",
        optionA: "Любовь и голуби",
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
        optionD: "Кавказская пленница, или Новые приключения Шурика",
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
        correctOption: "optionD"
    },

    {
        question: "8",
        optionA: "Москва слезам не верит",
        optionB: "Самая обаятельная и привлекательная",
        optionC: "Карнавал",
        optionD: "В бой идут одни «старики»",
        correctOption: "optionD"
    },
    
    {
        question: "9",
        optionA: "Ирония судьбы, или С легким паром!",
        optionB: "Самая обаятельная и привлекательная",
        optionC: "В августе 1943",
        optionD: "Чародеи",
        correctOption: "optionA"
    },

    {
        question: "10",
        optionA: "Девчата",
        optionB: "Обыкновенное чудо",
        optionC: "Афоня",
        optionD: "Джентельмены удачи",
        correctOption: "optionA"
    },

    {
        question: "10",
        optionA: "Они сразались за Родину",
        optionB: "Обыкновенное чудо",
        optionC: "Афоня",
        optionD: "В августе 1943",
        correctOption: "optionA"
    },

    {
        question: "12",
        optionA: "Москва слезам не верит",
        optionB: "Чародеи",
        optionC: "Чудо",
        optionD: "Любовь и голуби",
        correctOption: "optionB"
    },

    {
        question: "13",
        optionA: "Пустыня",
        optionB: "Гюльчитай",
        optionC: "Белое солнце пустыни",
        optionD: "Приключения под солнцем",
        correctOption: "optionC"
    },

    {
        question: "14",
        optionA: "Приключения итальянцев",
        optionB: "Бриллиантовая рука",
        optionC: "Джентельмены",
        optionD: "Полосатый рейс",
        correctOption: "optionD"
    },

    {
        question: "15",
        optionA: "Джентельмены",
        optionB: "Неудержимый",
        optionC: "Берегись автомобиля",
        optionD: "не знаю",
        correctOption: "optionC"
    },
   
]

let shuffledQuestions = []

function handleQuestions() {
    
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

function NextQuestion(index) {
    handleQuestions()

    const images = [
        '3/1-hard.jpg',
        '3/2-hard.jpg',
        '3/3-hard.jpg',
        '3/4-hard.jpg',
        '3/5-hard.jpg',
        '3/6-hard.jpg',
        '3/7-hard.jpg',
        '3/8-hard.jpg',
        '3/9-hard.jpg',
        '3/10-hard.jpg',
        '3/11-hard.jpg',
        '3/12-hard.jpg',
        '3/13-hard.jpg',
        '3/14-hard.jpg',
        '3/15-hard.jpg',  
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
        case "11":
            Image.setAttribute('src',  images[10])
            break;
        
        case "12":
            Image.setAttribute('src',  images[11])
            break;
        case "13":
            Image.setAttribute('src',  images[12])
            break;
        case "14":
            Image.setAttribute('src',  images[13])
            break;  
        case "15":
            Image.setAttribute('src',  images[14])
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
    const currentQuestion = shuffledQuestions[indexNumber]
    const currentQuestionAnswer = currentQuestion.correctOption
    const options = document.getElementsByName("option");
    let correctOption = null

    options.forEach((option) => {
        if (option.value === currentQuestionAnswer) {
            correctOption = option.labels[0].id
        }
    })

    if (options[0].checked === false && options[1].checked === false && options[2].checked === false && options[3].checked == false) {
        document.getElementById('option-modal').style.display = "flex"
    }

    options.forEach((option) => {
        document.getElementById("option-one").disabled = true;
        document.getElementById("option-two").disabled = true;
        document.getElementById("option-three").disabled = true;
        document.getElementById("option-four").disabled = true;
        

        if (option.checked === true && option.value === currentQuestionAnswer) {
            document.getElementById(correctOption).style.backgroundColor = "#92CD64"
            playerScore++
            indexNumber++
            setTimeout(() => {
                questionNumber++
                document.getElementById("option-one").disabled=false;
                document.getElementById("option-two").disabled  =false;
                document.getElementById("option-three").disabled  =false;
                document.getElementById("option-four").disabled  =false;
            }, 1000)
        }

        else if (option.checked && option.value !== currentQuestionAnswer) {
            const wrongLabelId = option.labels[0].id
            document.getElementById(wrongLabelId).style.backgroundColor = "#F25C3B"
            document.getElementById(correctOption).style.backgroundColor = "#92CD64"
            indexNumber++
            setTimeout(() => {
                document.getElementById("option-one").disabled = false;
                document.getElementById("option-two").disabled = false;
                document.getElementById("option-three").disabled = false;
                document.getElementById("option-four").disabled = false;
                questionNumber++
            }, 1000)
        }
    })
}

function handleNextQuestion() {
    checkForAnswer()
    unCheckRadioButtons()
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

function resetOptionBackground() {
    const options = document.getElementsByName("option");
    options.forEach((option) => {
        document.getElementById(option.labels[0].id).style.backgroundColor = ""
    })
}

function unCheckRadioButtons() {
    const options = document.getElementsByName("option");
    for (let i = 0; i < options.length; i++) {
        options[i].checked = false;
    }
}

function handleEndGame() {
    let remark = null
    let remarkColor = null

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

    document.getElementById('remarks').innerHTML = remark
    document.getElementById('remarks').style.color = remarkColor
    document.getElementById('number-of-points').innerHTML = playerScore
    document.getElementById('score-modal').style.display = "flex"
}

function closeScoreModal() {
    questionNumber = 1
    playerScore = 0
    indexNumber = 0
    shuffledQuestions = []
    NextQuestion(indexNumber)
    document.getElementById('score-modal').style.display = "none"
}
    
const submit1 = document.getElementById("submit1");
submit1.addEventListener("click", function() {
    window.location.href = "Glavnaya.html";
});