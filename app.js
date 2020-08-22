// declare the arrays with the words to combine
const pronoun = ['the','our'];
const adj = ['great', 'big', 'perfect'];
const noun = ['jogger','racoon'];

/* function invoke */
generateDomainName();

/* function implementation */
function  generateDomainName() {
    for (let i = 0; i < pronoun.length; i++) {
        const currentPronoun = pronoun[i];
        for (let j = 0; j < adj.length; j++) {
            const currentAdj = adj[j];
            for (let k = 0; k < noun.length; k++) {
                const currentNoun = noun[k];
                console.log(currentPronoun + currentAdj + currentNoun + '.com'); 
            }
        }
    }

    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        
    }
}

