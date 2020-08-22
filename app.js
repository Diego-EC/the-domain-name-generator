// declare the arrays with the words to combine
const pronoun = ['the','our'];
const adj = ['great', 'big' ];
const noun = ['jogger','racoon'];

/* function invoke */
generateRandomDomainName();

/* function implementation */
function  generateRandomDomainName() {
    console.log("lol");
    for (let index = 0; index < pronoun.length; index++) {
        for (let j = 0; j < adj.length; j++) {
            for (let k = 0; k < noun.length; k++) {
                console.log(pronoun[index] + adj[j] + noun[k]+'.com'); 
            }
        }
    }
}

