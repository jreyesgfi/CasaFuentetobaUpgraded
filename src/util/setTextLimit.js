export default function limitText(text, maxSize=10, placeToCut=4){
    if (typeof text !== 'string'){
        return text;
    }
    const words = text.split(" ");
    const finalText = words.map((word) => {
        if (word.length > maxSize){
            return (text.slice(0,placeToCut)+".")
        }
        return word
    }).reduce((w1,w2)=>(w1+' '+w2));
    return finalText
}