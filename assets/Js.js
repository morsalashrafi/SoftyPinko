// LOADING 
window.addEventListener("load",function() {
  let loadScreen = document.querySelector(".preloader-container");
  document.body.removeChild(loadScreen);
})


// MENU
function menuOnClick() {
  document.getElementById("menu-bar").classList.toggle("change");
  document.getElementById("nav").classList.toggle("change");
  document.getElementById("menu-bg").classList.toggle("change-bg");
}


//ACTIVE COLOR LI MENU
let menuItems = document.querySelectorAll('.menu li a');

  menuItems.forEach(function(item) {
    item.addEventListener('click', function() {
      // Remove active class from all items
      menuItems.forEach(function(item) {
        item.classList.remove('active');
    });
  
      // Add active class to the clicked item
      this.classList.add('active');
    });
});





// Counter
function countNumberProject() {
  // ایجاد المان strong که شماره را نمایش می‌دهد
  let numberElement = document.querySelector("#numProject");
  
  let number = 0;
  // تابع بازگشتی برای شمارش اعداد
  function count() {
  // به روزرسانی مقدار شماره در المان strong
    numberElement.textContent = number;
    
  // بررسی شرط متوقف شدن
  if (number >= 126) {
      return; // متوقف کردن شمارش
  }
    number++;
    setTimeout(count, 10);
  }
  // شروع شمارش
  count();
}
// فراخوانی تابع برای شروع شمارش
countNumberProject();



function countNumberClients() {
  let numberElement = document.querySelector("#numClients");
  let number = 0;
  
  function count() {
    numberElement.textContent = number;
    
  if (number >= 63) {
      return;
  }
    number++;
    setTimeout(count, 10);
  }
  count();
}
countNumberClients();



function countNumberWins() {
  let numberElement = document.querySelector("#numWins");
  let number = 0;
  function count() {
    numberElement.textContent = number;
    
  if (number >= 18) {
      return; 
  }
    number++;
    setTimeout(count, 50);
  }
  count();
}
countNumberWins();



function countNumberCountries() {
  let numberElement = document.querySelector("#numCountries");
  let number = 0;
  
  function count() {
    numberElement.textContent = number;
    
  if (number >= 27) {
      return;
  }
    number++;
    setTimeout(count, 50);
  }
  
  count();
}
countNumberCountries();