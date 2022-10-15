/*

- Type Speeding Testing Game

*/

// دا اول تطبيق لينا على الجافاسكربت و الحمد لله عملناه تمام و كويس جدا بفضل الله عز و جل

// ممكن نقول ان الفكره فى التطبيق هنا كلها انك تعمل فانكشنز علشان تسهل علينا الاستخدام و كمان منعاً لتداخل الاكواد فى بعض يعنى مثلا فى المثال او التطبيق الى قدامنا احنا اما نضغط على الزرار بتاع الاسترت المفروض ان الكلمه الى هنكتبها ف الاينبوت تظهر و كمان الكلمات الى عليها الدور تظهر و بعدين العداد بتاع الثوانى يقل لحد ما يوصل ل صفر لو كانت الكلمه الى ف الاينبوت صح يزود الاسكور واحد و كمان يتاكد ان لسه فى ف الاراى كلمات لو كان لسه موجود يروح تانى يكريت كلمه من الاراى و يجدد الكلمات الى فى الاب كونمنج وردس تمام لحد ما نوصل اننا نخلص الكلمات الى ف الاراى و بعدين نطبع كونجراتس او اى حاجه و لو كانت الكلمه الى ف الاينوب غلط و مش بتطابق الكلمه بتاع الوورد ساعتها نطبع جيم اووفر تمام

// تعالا بقى نحول الكلام دا كله الى فانكشنز لان من غير انك تعمل فانكشنز مش هتعرف تعمل الحركه بتاع ان العداد بتاع الثوانى يرجع يشتغل من تانى (الا بانك تكتب الكوود نفسه كله عند اما تيجى تكريت الكلمه الجديده و بالتالى كدا هتكرر الكوود كتير جدا و برضو مش هتعرف تظبطه) يبقى الحل لازم تستعمل الفانكشنز

// اول فانكشن و هى (الكرييت) بتاع انك تكريت الكلمه الراندم من الاراى و تطبع ال اب كونمنج وردس و تستبعد الكلمه بتاع الورد ب الاسبلايس و  نستدعى الفانكشن بتاع ال (بلاى) الى هنفصصها تحت
// تانى فانكشن و هى (البلاى)  بتاع انك تشغل العداد انه يقل ثانيه بثانيه و يقف عندالزيرو و يتاكد بقى هل الكلمه نفس الاينبوت و لا لا و لو كانت نفسها يروح يجدد الكلمه تانى و دا بانك تستدعى الفانكشن بتاع (الكرييت) الى هى نفسها جواها استدعاء للفانكشن (بلاى)
// يبقى الى نفهمه من هنا ان الفانكشن كرييت بتكريت العناصر و بعدين تجيب الفانكشن بلاى الى بتتاكد عند اما العداد يوصل ل زيرو هل الكلمه الى فى الاينوب مطابقه او لا لو كانت لا يبقى كدا جيم اوفر و الفانكشن (بلاى) اتطبقت مره و خلصت اللعبه.. و لو كانت  الكلمه بتاع الاينبوت مطابقه بيتاكد الاول ان لسه فى عناصر ف الاراى لو كان لسه فى عناصر موجوده لازم يروح يجدد و يجيب الفانكشن (كرييت) تانى و الى بدورها بتجيب الفانكشن (بلاى) الى بتستدعيها هى كمان و (هنا كانك بتعمل لووبنج على كلمات الاراى بحيث ان كل ما تكتب الكلمه صح يتعمل ريست للعداد و كمان الكلمه تتغير و معاها ال اب كومنج وردس و دا لحد ما الكلمات تخلص ام تكتب الكلمه غلط ) يبقى الحل علشان كل الاستدعاءت دى تخلص هو ان الكلمات بتاع الاراى تكون خلصت و بالتالى (الفانكشن بلاى) مش هتروح تستدعى (الفانكشن كرييت) تانى و بكدا يكون المستخدم كسب او الكلمه من اول مره متكونش مطابقه و بكدا يكون خسر و دا كله الى جانب شويه شغل علشان نخلى اللعبه اكثر ديناميكيه و اكثر دقه

// Design Of The Game

// Array Of NormalWords
let wordsNormal = [
    "Hello",
    "Code",
    "Town",
    "Country",
    "Testing",
    "Youtube",
    "Twitter",
    "Github",
    "Python",
    "Scala",
    "Styling",
    "Coding",
    "Funny",
    "Task",
    "Runner",
    "Roles",
    "Test",
    "Rust",
    "Playing",
];
// Array Of EasyWords
let wordsEasy = [
    "Working",
    "Internet",
    "Javascript",
    "Leetcode",
    "Paradigm",
    "Linkedin",
];
// Array Of HardWords
let wordsHard = [
    "Programming",
    "Destructuring",
    "Documentation",
    "Dependencies",
    "algrothims",
    "data-structure",
    "Cascade",
];

// Setting Levls and time for each one
let lvls = {
    Normal: 5,
    Easy: 4,
    Hard: 2,
};

// catching Selectors
let StartButton = document.querySelector(".start");
let lvlNameSpan = document.querySelector(".message .lvl");
let lvlSecondsSpan = document.querySelector(".message .seconds");
let word = document.querySelector(".word");
let input = document.querySelector(".input");
let UpcomingWords = document.querySelector(".upcoming-words");
let TimeLeftSpan = document.querySelector(".control .time span");
let ScoreSpan = document.querySelector(".control .score .got");
let TotalScoreSpan = document.querySelector(".control .score .total");
let Finish = document.querySelector(".finish");
let selsectLevel = document.querySelector(".choose");
let reomvedLvl = document.querySelector(".thelvl");

let counter = 0;

// default  --- > Normal lvl
let DefaultLvlSeconds = lvls[selsectLevel.value];
let array = wordsNormal;
// Setting LvlName + LvlSeconds + TotalScore
TotalScoreSpan.innerHTML = array.length;
TimeLeftSpan.innerHTML = DefaultLvlSeconds;
lvlNameSpan.innerHTML = selsectLevel.value;
lvlSecondsSpan.innerHTML = DefaultLvlSeconds;

// pressing on selection box for levels
selsectLevel.onclick = function() {
    // Default lvl
    DefaultLvlSeconds = lvls[selsectLevel.value];
    // Setting LvlName + LvlSeconds + TotalScore
    lvlNameSpan.innerHTML = selsectLevel.value;
    lvlSecondsSpan.innerHTML = DefaultLvlSeconds;
    if (selsectLevel.value === "Easy") {
        array = wordsEasy;
    } else if (selsectLevel.value === "Hard") {
        array = wordsHard;
    } else {
        array = wordsNormal;
    }
    TotalScoreSpan.innerHTML = array.length;
    TimeLeftSpan.innerHTML = DefaultLvlSeconds;
};

// disable paste event
input.onpaste = function() {
    return false;
};

// Start Game
StartButton.onclick = function() {
    this.remove();
    input.focus();
    // Generate word and Upcoming words
    generating();
    // remove lvl box
    reomvedLvl.remove();
    // change the counter to reset the time left span
    counter++;
};

// generating words function
function generating() {
    word.innerHTML = array[parseInt(Math.random() * array.length)];
    array.splice(array.indexOf(word.innerHTML), 1);
    for (i = 0; i < array.length; i++) {
        let div = document.createElement("div");
        div.innerHTML = array[i];
        UpcomingWords.append(div);
    }
    play();
}

// play function
function play() {
    if (counter == 0) {
        TimeLeftSpan.innerHTML = DefaultLvlSeconds + 3;
    } else {
        TimeLeftSpan.innerHTML = DefaultLvlSeconds;
    }

    let startTime = setInterval(function() {
        TimeLeftSpan.innerHTML--;
        if (TimeLeftSpan.innerHTML === "0") {
            clearInterval(startTime);
            if (word.innerHTML.toLowerCase() === input.value.toLowerCase()) {
                ScoreSpan.innerHTML++;
                if (array.length > 0) {
                    input.value = "";
                    UpcomingWords.innerHTML = "";
                    generating();
                } else {
                    let divy = document.createElement("div");
                    divy.innerHTML = "good! you win";
                    divy.style.color = "green";
                    Finish.appendChild(divy);
                    UpcomingWords.remove();
                    window.localStorage.setItem(
                        " Your Score Is : ",
                        `${ScoreSpan.innerHTML} From ${TotalScoreSpan.innerHTML} `
                    );
                }
            } else {
                let div = document.createElement("div");
                div.innerHTML = "Game Over";
                div.style.color = "red";
                let btn = document.createElement("button");
                btn.innerHTML = "Refresh";
                Finish.append(div, btn);
                window.localStorage.setItem(
                    " Your Score Is : ",
                    `${ScoreSpan.innerHTML} From ${TotalScoreSpan.innerHTML} `
                );
                // refresh the page
                btn.onclick = function() {
                    location.reload();
                };
            }
        }
    }, 1000);
}

// plaing the audio and control it
let audiooo = document.querySelector(".aud");
let para = document.querySelector(".music");
let gname = document.querySelector(".game-name");
para.onmouseenter = function() {
    para.style.display = "none";
    audiooo.style.display = "inline-block";
    // gname.style.cssText = "background:transparent;color:red";
};

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////