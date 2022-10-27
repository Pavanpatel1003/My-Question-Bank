var questionBank = {
    "Book": [{
            "Subject": "Maths",
            "Chapters": [{
                    "chapterName": "Integration1",
                    "questions": [{
                        "questionName": "Integration1 question 1",
                        "questionAnswer": "Integration2 answer 1",
                        "questionNote": "nt111"
                    }, {
                        "questionName": "Integration1 question 2",
                        "questionAnswer": "Integration1 answer 2",
                        "questionNote": "nt112"
                    }]
                },
                {
                    "chapterName": "Integration2",
                    "questions": [{
                        "questionName": "Integration2 question 1",
                        "questionAnswer": "Integration2 answer 1",
                        "questionNote": "HIHIHI"
                    }]
                }

            ]
        },
        {
            "Subject": "Gujarati",
            "Chapters": [{
                    "chapterName": "kavita",
                    "questions": [{
                        "questionName": "q111",
                        "questionAnswer": "an11",
                        "questionNote": "nt111"
                    }]
                }

            ]
        }
    ]
}

var subjectname = '';
var Chaptername = '';
var Subject = '';
var question = '';
var queNote = '';
var answer = '';
var subChapter = '';

var elementcha = '';

setBar();

function setBar() {
    var _ch = '';
    var element = '';
    for (let index = 0; index < questionBank.Book.length; index++) {
        var _s1 = '<div class="font-20">' + questionBank.Book[index].Subject + '<ul class="font-15">';
        console.log("index = " + index, "s1 = " + _s1);

        var _s2 = '';
        if (questionBank.Book[index].Chapters) {
            for (let j = 0; j < questionBank.Book[index].Chapters.length; j++) {
                _s2 = _s2 + '<li class="navChapter" name =" ' + index + ' " chName =' + j + ' >' + questionBank.Book[index].Chapters[j].chapterName + '</li>';
                console.log("j = " + j, "s2 = " + _s2);
            }
        }
        var _s3 = ' </ul></div>'
        _ch = _ch + _s1 + _s2 + _s3
        console.log("index = " + index, "_ch = " + _ch);
    }

    console.log(_ch)
    element = document.getElementById("id1");
    element.innerHTML = _ch;
}

setSubjectdll();
selectcha(0);

var q1 = '';
var q2 = '';

function setQue(bookindex, chapterIndex) {

    bookindex = parseInt(bookindex);
    var q2 = '';
    if (questionBank.Book[bookindex].Chapters[chapterIndex].questions) {
        for (let index = 0; index < questionBank.Book[bookindex].Chapters[chapterIndex].questions.length; index++) {
            q2 = q2 + ' <div id="accordion' + index + '"> <div class="card"> <div class="card-header">' +
                '<a class="card-link" data-toggle="collapse" href="#question' + index + '">' +
                '<div>Question : <span class="keyword" id="que">' + questionBank.Book[bookindex].Chapters[chapterIndex].questions[index].questionName + '</span></div> </a> </div>' +
                '<div id="#question' + index + '" class="collapse show" data-parent="#accordion' + index + '">' +
                '<div class="card-body"><div><div>Answer :</div><div id="ans1" class="keyword"> ' + questionBank.Book[bookindex].Chapters[chapterIndex].questions[index].questionAnswer + '</div></div>' +
                '<div><div>Note :</div><div id="note" class="keyword">' + questionBank.Book[bookindex].Chapters[chapterIndex].questions[index].questionNote + ' </div></div> </div> </div> </div></div>';
        }
    }

    element = document.getElementById("id2");
    element.innerHTML = q2;
}

function setSubjectdll() {
    debugger;
    var _s4 = '';
    for (let index = 0; index < questionBank.Book.length; index++) {
        _s4 = _s4 + '<option value="' + index + '">' + questionBank.Book[index].Subject + '</option>';
    }

    var _s5 = '<select name="Sub" id="Sub" class="pop" >' + _s4 + '</select>';

    element = document.getElementById("subject-dll");
    element.innerHTML = _s5;

    element1 = document.getElementById("Sub1");
    element1.innerHTML = _s4;
}

function selectcha(bookindex) {
    debugger;
    bookindex = parseInt(bookindex);
    var _s6 = '';

    for (let j = 0; j < questionBank.Book[bookindex].Chapters.length; j++) {

        _s6 = _s6 + '<option value="' + j + '">' + questionBank.Book[bookindex].Chapters[j].chapterName + '</option>';
    }

    var a = '<p>Select Chapter</p>'
    var _s9 = '<select name="chapter" id="chapter1" class="pop">' + _s6 + '</select>';

    elementcha = document.getElementById("chapter-dll");
    elementcha.innerHTML = _s9;
}

function addSubjectName() {
    debugger;
    subjectname = document.getElementById("subjectName").value;
    if (!subjectname) {
        return;
    }
    console.log(subjectname);
    var _addBook = {
        "Subject": subjectname
    }

    questionBank.Book.push(_addBook);
    setBar();
    setSubjectdll();
}


function addChapterName() {
    Chaptername = document.getElementById("Chaptername").value
    console.log(Chaptername);
    if (!Chaptername) {
        return;
    }

    Subject = document.getElementById("Sub").value

    console.log(Subject);
    var _chname = {
        'chapterName': Chaptername
    }
    if (questionBank.Book[Subject].Chapters) {
        questionBank.Book[Subject].Chapters.push(_chname);
    } else {
        let arr = [_chname];
        questionBank.Book[Subject].Chapters = arr;
    }
    setBar();
}

function addquestionName() {
    Subject = document.getElementById("Sub1").value
    console.log(Subject);

    subChapter = document.getElementById("chapter1").value
    console.log(subChapter)


    question = document.getElementById("que1").value
    if (!question) {
        return;
    }

    answer = document.getElementById("ans1").value

    queNote = document.getElementById("note").value

    console.log(question);
    console.log(answer);
    console.log(queNote);

    var qset = {
        'questionName': question,
        'questionAnswer': answer,
        'questionNote': queNote
    }
    if (questionBank.Book[Subject].Chapters[subChapter].questions) {
        questionBank.Book[Subject].Chapters[subChapter].questions.push(qset);

    } else {
        questionBank.Book[Subject].Chapters[subChapter].questions = [qset];

    }
}

$(document).ready(function() {

    $("#Sub1").change(function(e) {
        selectcha(e.target.value)
    });

    $("#id1").click(function(e) {

        let a = e.target.attributes[1].nodeValue;
        let b = e.target.attributes[2].nodeValue;
        setQue(a, b);
    });

});