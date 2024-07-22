let toastBox = document.getElementById("toast-box");

let successMsg = '<i class="fa-sharp fa-solid fa-circle-check"></i> Successfull';
let errorMsg = '<i class="fa-solid fa-circle-xmark"></i> Please Fix the error';
let invalidMsg = ' <i class="fa-sharp fa-solid fa-circle-exclamation"></i>Invaild, try again';
function showToast(msg){
    let toast = document.createElement('div');
    toast.classList.add('toast');
    toast.innerHTML = msg;
    toastBox.appendChild(toast);


    if(msg.includes('error')){
        toast.classList.add('error');
    }
    if(msg.includes('Invaild')){
        toast.classList.add('invalid');
    }


    setTimeout(()=>{
        toast.remove();
    }, 5000);
}