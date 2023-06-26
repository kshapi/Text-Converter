const input = document.querySelector('input');
const convertBtn = document.querySelector('.convertBtn button');
const btns = document.querySelectorAll('input[name=text]');
const copyBtn = document.querySelector('.fa-copy');

let text;

//AddEventListener to radio btns
btns.forEach(btn => {
  btn.addEventListener('click', () => {
    if (btn.labels[0].innerText == 'Decode Base 64') {
      convertBtn.disabled = false;
    };
    //get label text of checked btn
    text = btn.labels[0].innerText;
  });
});


//Check
const check = () => {
  const inputValue = input.value;
  
  
  if (text === 'Encode Base 64') {
    btns[0].disabled = true;
    btns[1].disabled = true;
    convertBtn.disabled = true;
  } else {
    btns[0].disabled = false;
    btns[1].disabled = false;
  };
  
  //If text have a value then go
  if (text) {
    
    if (text === 'UpperCase') {
      input.value = inputValue.toUpperCase();
    } else if (text === 'LowerCase') {
      input.value = inputValue.toLowerCase();
    } else if (text === 'Encode Base 64') {
      //Encode function
      input.value = btoa(inputValue);
    } else {
      //Decode function
      input.value = atob(inputValue);
    };
    
  };
  
};

convertBtn.addEventListener('click',check);


//Copy text to clipboard
const copyText = () => {
    //Input value
    const text = input.value;
    if (text.length > 0) {
      navigator.clipboard.writeText(text);
      
      input.select();
      input.setSelectionRange(0, 99999);
      
      setTimeout(() => {
        input.value = ''
      }, 300)
      
    };
};

copyBtn.addEventListener('click',copyText);

//Kshapi