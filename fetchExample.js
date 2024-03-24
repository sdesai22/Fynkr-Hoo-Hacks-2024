//Fetch call to the your API 


// fetch("http://localhost:5000/demo").then(res => {
//     console.log(res);
// })


window.latePenalty = ""
window.creditcardlength = ""
window.creditcardowner = ""
window.creditcardusage = ""
window.billall = ""
window.missedpay = ""
window.creditlimit = ""
window.income = ""
window.jointacc = ""

window.totalscore = 0

window.ExcellentScore = false
window.VeryGoodScore = false
window.GoodScore = false
window.FairScore = false
window.poorScore = false
window.resulta = ""
window.tippa = ""

const onclickyes = () => {
    let latePenalty = "no"
    console.log ("YOU CLICKED YES");
    totalscore = totalscore + 1;
    console.log(totalscore);
}

const onClickno = () => {
    let latePenalty = "yes"
    console.log ("YOU CLICKED NO");
    totalscore = totalscore - 1;
    console.log(totalscore);
    tippa = tippa + "\n our calculations show that your credit score may be suffering because you have a habit of not paying your bills on time, if you would like to improve your credit score, you should aim to regulate your credit card use in order to make you bills more managable."
    console.log(tippa);

}

const onclickzero = () => {
    let creditcardlength = "zerototwo" //maybe change this to novice
    console.log ("YOU CLICKED 0-2 years");
    console.log(totalscore);

}

const onclicktwo = () => {
    let creditcardlength = "experienced" 
    console.log ("YOU CLICKED 2-4 years");
    totalscore = totalscore + 1;
    console.log(totalscore);

}

const onclickthree = () => {
    let creditcardlength = "Master"
    console.log("YOU CLICKED 5+ years");
    totalscore = totalscore + 2;
    console.log(totalscore);

}
const onclickown = () => {
    let creditcardowner = "onecard"
    console.log("YOU CLICKED 1");
    console.log(totalscore);
    totalscore = totalscore + 1;

}

const onclickowntwo = () => {
    let creditcardowner = "twocard"
    console.log("YOU CLICKED 2-3");
    totalscore = totalscore + 2;
    console.log(totalscore);

}
const onclickownfour = () => {
    let creditcardowner = "toomanycard"
    console.log("YOU CLICKED 4-5");
    totalscore = totalscore - 1;
    console.log(totalscore);
    tippa = tippa + "\n our calculations show that you may have too many cards open that affect your credit card score: did you know that having too many credit cards open actually affects your credit score? Try to close some of your cards that you may not be using in order to see an increase in your credit score.\n"
    console.log(tippa);

}

const onclickownsix = () => {
    let creditcardowner = "waytoomanycard"
    console.log("YOU CLICKED 6+");
    totalscore = totalscore - 2;
    console.log(totalscore);
    tippa = tippa + "\n our calculations show that you have too many cards open that affect your credit card score: did you know that having too many credit cards open actually affects your credit score? Try to close some of your cards that you may not be using in order to see an increase in your credit score.\n"
    console.log(tippa);


}

const onclicklimit = () => { //30% limit usage question
    let creditcardusage = "Good"
    console.log("YOU CLICKED Yes");
    totalscore = totalscore + 1;
    console.log(totalscore);

}

const onclicklimitno = () => {
    let creditcardusage = "questionable"
    console.log("YOU CLICKED No");
    console.log(totalscore);

}

const onclickbillonceyes = () => { //How often do you pay bills
    let billall = "payonce"
    console.log("YOU CLICKED YES");
    totalscore = totalscore + 1;
    console.log(totalscore);

}

const onclickbillonceno = () => {
    let bilall = "paysep"
    console.log("YOU CLICKED NO");
    console.log(totalscore);

}

const onclickfailpayment = () => { //Have you missed a payment
    let missedpay = "failedtopay"
    console.log("YOU CLICKED YES");
    totalscore = totalscore - 1;
    console.log(totalscore);
    tippa = tippa + "\n our calculations show that your credit score may be suffering because you have some missed or failed payments. Don't worry! Try to increase your use of your credit card while paying your bills on time in order to slowly build up your credit score, a few missed payments can be made up by using your credit card more frequesntly while paying your bills on time."
    console.log(tippa);

}

const onclicknomissedpayment = () => { 
    let missedpay = "ontime"
    console.log("YOU CLICKED NO");
    totalscore = totalscore + 1;
    console.log(totalscore);

}

const onclickcreditlimitdol = () => { //$30,000 limit
    let creditlimit = "abovelim"
    console.log("YOU CLICKED YES");
    console.log(totalscore);

}

const onclickcreditlimitdolno = () => {
    let creditlimit = "belowlim"
    console.log("YOU CLICKED NO");
    console.log(totalscore);

}

const onclickincome = () => { //what's your income
    let income = "lowclass"
    console.log("YOU CLICKED Less than 50K");
    console.log(totalscore);

}

const onclickmidincome = () => { 
    let income = "midclass"
    console.log("YOU CLICKED 50K-100K");
    console.log(totalscore);

}

const onclickupmidincome = () => {
    let income = "uppermidclass"
    console.log("YOU CLICKED 100K-250K");
    console.log(totalscore);

}

const onclickhighincome = () => {
    let income = "upperclass"
    console.log("YOU CLICKED 250K PLUS");
    console.log(totalscore);

}

const onclickjointyes = () => { // DO you own a joint account
    let jointacc = "joint"
    console.log("YOU CLICKED YES");
    console.log(totalscore);

}

const onclickjointno = () => {
    let jointacc = "notjoint"
    console.log("YOU CLICKED NO");
    console.log(totalscore);

}



const farf = () => {
    if (totalscore >= 7){
        resulta = "Congratulations! It is estimated that you have an excellent score within the range of 800-850!"
        console.log("works");
        console.log(resulta);
        console.log(tippa)

    
    
    }
    
    if(totalscore == 6 || totalscore == 5){
        VeryGoodScore = true;
        resulta = "Congratulations! It is estimated that you have a very good score within the range of 740-799!"
        console.log(resulta);
        console.log(tippa)

    
    
    }
    
    if(totalscore == 4){
        GoodScore = true;
        resulta = "it is estimated that you have a good score within the range of 670-739!"
        console.log(resulta);
        console.log(tippa)

    
    }
    
    if(totalscore == 3){
        GoodScore = true;
        resulta = "it is estimated that you have a fair score within the range of 580-669!"
        console.log(resulta);
        console.log(tippa)

    
    }
    
    if(totalscore <= 2 || totalscore == 1){
        FairScore = true;
        resulta = "Uh Oh! it is estimated that you have a poor score within the range of 300-579!"
        console.log(resulta);
        console.log(tippa)
    }
}

