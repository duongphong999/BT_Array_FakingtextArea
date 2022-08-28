const textArea = document.getElementById("formText");
let str = 'AHIHI ĐÔ` NGỐK ẠK !!';
let arr = str.split('');
let text = '';
textArea.oninput = function(){
    let valueLength = textArea.value.length
    for(let i = 0; i < valueLength; i++){
        text += arr[i];
        if(i > arr.length - 1){
            textArea.value = '';
            text = '';
            break;
        }
    }
    textArea.value = text;
    text = '';
}