// declare the arrays with the words to combine
const pronoun = ['the','our'];
const adj = ['great', 'big', 'perfect'];
const noun = ['jogger','racoon', 'us', 'net'];
const extension = ['com', 'net', 'us', 'io'];
const TLDSeparator = '.';

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
                for (let l = 0; l < extension.length; l++) {
                    const currentExtension = extension[l];
                    // domain hacks, for example: instead of lastOfUs.com you can use the .us domain like this: lastOf.us
                    if (currentNoun == currentExtension) {
                        console.log(currentPronoun + currentAdj + TLDSeparator + currentExtension);                         
                    } else {                        
                        console.log(currentPronoun + currentAdj + currentNoun + TLDSeparator + currentExtension); 
                    }
                }
            }
        }
    }
}
