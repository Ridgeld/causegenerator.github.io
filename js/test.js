const button = document.getElementById('button');
const input = document.getElementById('input');
const message = document.getElementById('message');

let request = axios.create({
    headers: {
        Authorization: `Bearer ${apiKey}`
    }
});
const requestFunc = () => {
    let textForRequest = {
        "role" : "user",
        "content" : `${input.value}`
    }
    let params = {
        "model" : "gpt-3.5-turbo",
        "messages" : [textForRequest] 
    };
    request.post('https://api.openai.com/v1/chat/completions', params)
    .then(response => {
            message.innerText = response.data.choices[0].message.content;
            console.log(response.data.choices[0].message.content);
    });
}

button.addEventListener('click', function() {
    if (input.value){
        // message.innerText = input.value
        requestFunc()
    }
    else{
        message.innerText = "Введите текст!"
    }
});