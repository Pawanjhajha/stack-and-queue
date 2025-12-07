let s="()[{}()]"
// let s=' (){[}]'

//condtion 1. every opening shoud have a same closing brekit ()[]{}
//condtion 2. every closing brekit shoud have the same opening brekit(),{},[]
//constion 3. it should follow the order (){[}]==false
// ()[{}()]=true  ,({}==false ,)) =false

//logic : -when ever i show closing brekit  we will checking out the last opening berkit that i show is it same time

function balancedParentheses(str) {
    let stack = [];

    for (let i = 0; i < str.length; i++) {
        let ch = str[i];

        // Opening brackets → push
        if (ch === "(" || ch === "{" || ch === "[") {
            stack.push(ch);
        }

        // Closing brackets → check
        else if (ch === ")" || ch === "}" || ch === "]") {

            if (stack.length === 0) return false;

            let last = stack.pop();   // only one pop

            if (ch === ")" && last !== "(") return false;
            if (ch === "}" && last !== "{") return false;
            if (ch === "]" && last !== "[") return false;
        }
    }

    return stack.length === 0; // must be empty if balanced
}

result=blanedPranthese(s)
console.log(result,"result")
