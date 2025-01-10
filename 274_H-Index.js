/**
 * @param {number[]} citations
 * @return {number}
 */
var hIndex = function(citations) {
    let papers = citations.length;
    let citationBuck = new Array(papers + 1). fill(0);

    for (let citation of citations){
        citationBuck[Math.max(citation, papers)] += 1;
    }

    let cumulativePapers = 0;
    for (let h = papers; h >= 0; h--){
        cumulativePapers += citationBuck[h];
        if (cumulativePapers >= h){
            return h;
        }
    }
};

// let n = citations.length;

// citations.sort((a, b) => a - b);

// for (let i = 0; i < n; i++) {
//     if(citations[i] >= n - i) 
//         return n - i;
// }

// return 0;