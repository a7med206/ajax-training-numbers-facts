let fact = document.getElementById('fact');
let factText = document.getElementById('factText');
let numberInput = document.getElementById('numberInput');
numberInput.addEventListener('input',getFactFetch);
let proxy = 'https://cors-anywhere.herokuapp.com/';
// Fetch with XHR
function getFactAjax(){
  let number = numberInput.value;
  if(number != ''){
    let xhr = new XMLHttpRequest();
    xhr.open('GET', `${proxy}http://numbersapi.com/${number}`);

    xhr.onload = function(){
      if(this.status == 200){
        fact.style.visibility = 'visible';
        factText.innerText = this.responseText;
      }
    }

    xhr.send(); 
    }
}

// Fetch with Fetch API
function getFactFetch(){
  let number = numberInput.value;

  if (number != '') {
      fetch(`${proxy}http://numbersapi.com/${number}`).then(res => res.text()).then(data => {
          fact.style.visibility = 'visible';
          factText.innerText = data;
      }).catch(error => console.error(error));
  }
}
