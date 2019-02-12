const voters = [
{name: "adam", ideology: "Liberal"},
{name: "kris", ideology: "Neutral"},
{name: "sarah", ideology: "Republican"},
{name: "john", ideology: "Liberal"}];

const democratCandidates = [ {candidate: {name: "jo", party: "Democrat", votes: 0}}];
const republicanCandidates = [{name: "josh", party: "Republican", votes: 0}];
const independentCandidates = [{name: "joshua", party: "Independent", votes: 0}];

const getRandom = () => Math.ceil(Math.random() * 100);
 
const determineLiberal = votePercentage => {
    if (votePercentage >= 1 && votePercentage <= 60) 
      { democratCandidates[0].votes++; }
    else if (votePercentage >= 61 && votePercentage <= 80) 
      { independentCandidates[0].votes++; }
    else 
       { republicanCandidates[0].votes++; }
}

const determineIndependent = votePercentage => {
    if (votePercentage >= 1 && votePercentage <= 50) 
        { democratCandidates[0].votes++; }
    else if (votePercentage >= 51 && votePercentage <= 75) 
        { independentCandidates[0].votes++; }
    else 
        { republicanCandidates[0].votes++; }
}

const determineConservative = votePercentage => {
    if (votePercentage >= 1 && votePercentage <= 60) 
        { democratCandidates[0].votes++; }
    else if (votePercentage >= 61 && votePercentage <= 80) 
        { independentCandidates[0].votes++; }
    else 
        { republicanCandidates[0].votes++; }
}

const vote = () => {
    voters.forEach(element => {
        const votePercentage = getRandom()
        if (element.ideology === 'liberal') {
            determineLiberal(votePercentage)
        } else if (element.ideology === 'neutral') {
            determineIndependent(votePercentage)   
        } else determineConservative(votePercentage);   
    });
}

class Person {
    constructor (name) {
    this.name = name
    }
}

class Voter extends Person {
    constructor (name, ideology) {
    super(name)
    this.ideology = ideology
    voters.push(this)
    }
}

class Candidate extends Person {
    constructor (name, party) {
        super(name)
        this.party = party
        this.votes = 0
            
        if(party === 'Independent'){
            independentCandidates.push(this)
        } else if (party === 'Democrat') {
            democratCandidates.push(this)
        } else if (party === 'Republican') {
            republicanCandidates.push(this)
        } 
    }
}

$("#voter-form").submit((e)=>{
    e.preventDefault()
    name = $("#voter-name").val()
    ideology = $("#voter-ideology").val()
    new Voter(name, ideology)
    $("#voter-list .list-group").append(
        `<li class = "list-group-item">${name}, ${ideology}</li>`
    )
});

$("#candidate-form").submit((e)=>{
    e.preventDefault()
    name = $("#candidate-name").val()
    party = $("#candidate-party").val()
    new Candidate(name, party)
    $("#candidate-list .list-group").append(
        `<li class = "list-group-item">${name}, ${party}</li>`
    )
});
// let randomDem = Math.floor(Math.random() * democratCandidates.length)
// console.log(randomDem);

function BubbleSort(arr) {
    const sortedArray = Array.from(arr);
    let swap;
    do {
      swap = false;
      for (let i = 1; i < sortedArray.length; ++i) {
        if (sortedArray[i - 1].votes > sortedArray[i].votes) {
          [sortedArray[i].votes, sortedArray[i - 1].votes] = [sortedArray[i - 1].votes, sortedArray[i].votes];
          swap = true;
        }
      }
    } while (swap)
    return sortedArray;
  }

console.log(BubbleSort(democratCandidates)[democratCandidates.length-1]);


$("#vote-btn-div").click((e)=>{
    e.preventDefault();
    vote();
});

// kev = new Voter("Kev", "Pasta")
// console.log(voters);

// John = new Candidate('John', 'independent')
// console.log(independentCandidates)


