//create The Button and append it to the body
let accessBody=document.getElementById('bodyPage');
let createButtonEl=document.createElement('button');
createButtonEl.textContent='Click The Button to View the Next Image';

// create <ul> and append it in the body
let createUlElement=document.createElement('ul');
let createLiElement=document.createElement('li');
let createImgElement=document.createElement('img');
//adding attribute
createImgElement.setAttribute("src","")
createImgElement.setAttribute("id","ImagesId")
createButtonEl.setAttribute('class','buttonStyle');
createImgElement.setAttribute('class','imgCss')
//append element
accessBody.appendChild(createButtonEl);
createUlElement.appendChild(createLiElement);
createLiElement.appendChild(createImgElement)
accessBody.appendChild(createUlElement);

//addEventListener
function ChangeImage(){
    window.fetch('https://dog.ceo/api/breeds/image/random')
    .then(response =>{
        if (response.status >= 200 && response.status <= 299) {
            return response.json();
          } else {
            throw new Error(
              `Whoops What Had you done ${response.status} ${response.statusText}`
            );
          }
    })
    .then(DisplayImage =>{
        let accessImageId=document.getElementById('ImagesId')
        accessImageId.src=DisplayImage.message;
    })
    .catch(err =>{
        console.log(err)
    })
}
createButtonEl.addEventListener('click',ChangeImage);
