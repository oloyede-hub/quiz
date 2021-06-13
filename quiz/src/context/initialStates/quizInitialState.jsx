const quizInitialState = {
    quiz: {
        quiz_title: "",
        total_point: "",
        deadline: "",
        time_allowed: "",
        questionList: []
    },
    addQuestion: {
        text: "",
        type: "",
        point: "",
        choiceList: [],
    },
    addChoice: {
        choice_body: "",
        isCorrect: false
    }
}

export default quizInitialState;