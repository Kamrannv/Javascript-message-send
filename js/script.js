const startMessage=()=> {
    starttime = setInterval(counter, 2000,);
   
}
let count =0;
const counter=(param1)=> {
    count +=1;
    document.getElementById("counter").innerHTML = count;
}
const pauseMessage=()=> {
    clearInterval(starttime);
}
// ================ Message List ======================

const startMessageList=()=> {
    starttimes = setInterval(counterList, 3000,);
    
}
let countlists =0;
const remove=(e)=> {
    let element = e;
    element.remove();
    countlists--;
}
const counterList=(param1)=> {
    countlists +=1;
    const postsContainer = document.querySelector('#message_lists');
    postsContainer.innerHTML += `
    <div onclick="remove(this)">
    <p><i class="fas fa-times"></i> Сообщения : ${countlists}</p>
    </div>
`
    postsContainer.innerHTML += '';
    document.getElementById('btn_count').innerHTML=countlists;

}
const pauseMessageList=()=> {
    clearInterval(starttimes);
}

