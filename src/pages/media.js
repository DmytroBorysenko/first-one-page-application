
export const img = {
    createImg() {
        document.querySelector('.pages').innerHTML = 'media'
      fetch("https://jsonplaceholder.typicode.com/photos")
        .then(response => response.json())
        .then(response => {
          const bigger = document.createElement("div");
          bigger.className = "bigContainer";
          document.querySelector(".content-container").appendChild(bigger);
          let bigImg = document.createElement("img");
          bigImg.className = "bigImg";
          bigger.appendChild(bigImg);
          let title = document.createElement("p");
          bigger.appendChild(title);
          bigImg.setAttribute("src", response[0].url);
          title.innerHTML = response[0].title;
          let smallContent = document.createElement("div");
          let small = document.createElement("div");
          
          for (let i = 1; i <= 15; i++) {
            small.className = "smallContainer";
            let smallImg = document.createElement("img");
            smallImg.className = "smallImg";
            small.appendChild(smallImg);
            smallImg.setAttribute("src", response[i].url);
            let title = document.createElement("p");
            small.appendChild(title);
            title.innerHTML = response[i].title;
            smallContent.appendChild(small);
          }
          document.querySelector(".content-container").appendChild(small);
          const hintContainer = document.createElement('div');
          hintContainer.className = 'hintContainer'
          document.querySelector(".content-container").appendChild(hintContainer);
          const hint = document.createElement('h2');
          hint.className = 'hint'
          hint.innerHTML = "Hint";
          hintContainer.appendChild(hint);
          const hintText = document.createElement('p');
          hintText.className = 'hintText'
          hintText.innerHTML = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro consequatur quia ea officiis incidunt! Eius.";
          hintContainer.appendChild(hintText);
          hint.onclick = function(){
              if(hintText.classList.contains('hintActive')) {
                   hintText.classList.remove("hintActive")
              }
              else{
                  hintText.classList.add("hintActive")
              }
          }
        });
    }
  };
  