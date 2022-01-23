const quotes = [
    {
        quote: "삶이 있는 한 희망은 있다",
        author: " by 키케로"
    },
    {
        quote: "신은 용기있는자를 결코 버리지 않는다",
        author: " by 켄러"
    },
    {
        quote: "피할수 없으면 즐겨라",
        author: " by 로버트 엘리엇"
    },
    {
        quote: "한번의 실패와 영원한 실패를 혼동하지 마라",
        author: " by F.스콧 핏제랄드"
    },
    {
        quote: "1퍼센트의 가능성, 그것이 나의 길이다",
        author: " by 나폴레옹"
    },
    {
        quote: "마음만을 가지고 있어서는 안된다. 반드시 실천하여야 한다.",
        author: " by 이소룡"
    },
    {
        quote: "진짜 문제는 사람들의 마음이다. 그것은 절대로 물리학이나 윤리학의 문제가 아니다",
        author: " by 아인슈타인"
    },
    {
        quote: "자신을 내보여라. 그러면 재능이 드러날 것이다.",
        author: " by 발타사르 그라시안"
    },
    {
        quote: "작은 기회로 부터 종종 위대한 업적이 시작된다",
        author: " by 데모스테네스"
    },
    {
        quote: "겨울이 오면 봄이 멀지 않으리",
        author: " by 셸리"
    }
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;