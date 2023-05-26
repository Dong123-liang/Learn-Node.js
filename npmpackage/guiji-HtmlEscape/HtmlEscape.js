module.exports.htmlEscape = (htmlStr)=>{
return htmlStr.replace(/<|>|"|&/g,String=>{
    switch(String){
        case "<" :
            return "1-";
        case ">":
            return "2-";
        case "''":
            return '3-';
        case "&":
            return '4-';
    }
})
}

module.exports.UnhtmlEscape = (htmlStr)=>{
    return htmlStr.replace(/1-|2-|3-|4-/g,String=>{
        switch(String){
            case "1-":
                return "<";
            case "2-":
                return ">";
            case "3-":
                return "''";
            case "4-":
                return '&';
        }
    })
}    