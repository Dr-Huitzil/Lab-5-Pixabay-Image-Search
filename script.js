displayBackgroundImage();
document.querySelector("#searchButton").addEventListener("click", searchImage);
var randomNumber = Math.floor(Math.random() * 19) + 1;

async function searchImage() {

  const searchInput = document.querySelector("#searchBox").value;

 //there is a radio input that will determine if the user wants to see the image in a vertical or horizontal orientation
  let orientation = document.querySelector('input[name="orientation"]:checked').value;
  console.log(orientation);
  if(searchInput.length < 3 || searchInput.length == 0){
    document.querySelector("#errorMessages").innerHTML = "Please enter a search term with at least 3 characters";
  }else{

    if (orientation == "vertical") {
      for(let i = 0; i<5; i++){
        let url = `https://pixabay.com/api/?key=30216882-af8ba4f7377434af67d448f4e&q=${searchInput}&image_type=photo&orientation=vertical`;

        let response = await fetch(url);
        let data = await response.json();
        console.log(data);
        
        var randomNumber = Math.floor(Math.random() * 19) + 1;
        let image = data.hits[randomNumber].webformatURL;
        let likes = data.hits[randomNumber].likes;

        document.querySelector(`#caption${i}`).innerHTML = `Likes: ${likes}`;
        document.querySelector(`#image${i}`).innerHTML = `<img src="${image}">`;
        document.querySelector(`#image${i}`).style.height = "100%";
        document.querySelector(`#image${i}`).style.width = "auto";
      }
      
    } else {
      for(let i = 0; i<5; i++){
        let url = `https://pixabay.com/api/?key=30216882-af8ba4f7377434af67d448f4e&q=${searchInput}&image_type=photo&orientation=horizontal`;

        let response = await fetch(url);
        let data = await response.json();
        console.log(data);

        var randomNumber = Math.floor(Math.random() * 19) + 1;
        let image = data.hits[randomNumber].webformatURL;
        let likes = data.hits[randomNumber].likes;

        document.querySelector(`#caption${i}`).innerHTML = `Likes: ${likes}`;
        document.querySelector(`#image${i}`).innerHTML = `<img src="${image}">`;
        document.querySelector(`#image${i}`).style.height = "auto";
        document.querySelector(`#image${i}`).style.width = "100%";
      }
    }
  }

}


async function displayBackgroundImage() {
  //there will be an array with 5 words that will go into the link to get the images
  //the images and words will be randomly chosen
  let words = ["nature", "beach", "mountain", "city", "sky"];
  let randomWord = words[Math.floor(Math.random() * words.length)];
  let url = `https://pixabay.com/api/?key=30216882-af8ba4f7377434af67d448f4e&q=${randomWord}&image_type=photo`;

  let response = await fetch(url);
  let data = await response.json();
  console.log(data);
  //let image = data.hits[randomNumber].largeImageURL;
  let image = data.hits[randomNumber].fullHDURL;

  document.querySelector("body").style.backgroundImage = `url(${image})`;
}
