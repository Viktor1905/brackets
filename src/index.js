module.exports = function check(str, bracketsConfig) {

    let brackets = new Map()
    for(let i = 0; i < bracketsConfig.length; i++){
        brackets.set(bracketsConfig[i][0], bracketsConfig[i][1])
    }
    let stack = [];

    for(let i = 0; i < str.length; i++){
        let topBracket = stack[stack.length-1]
        if(brackets.has(str[i])){
            if(str[i] === brackets.get(str[i]) && str[i] == topBracket){
                stack.pop()
            }
            else{
                stack.push(str[i])
            }
        } else{
            if(stack.length === 0){
                return false
            } else{
                if(brackets.get(topBracket) === str[i]){
                    stack.pop()
                } else {
                    stack.push(str[i])
                }
            }
        }
    }
    console.log(stack[0] === undefined)
    return stack[0] === undefined
}
