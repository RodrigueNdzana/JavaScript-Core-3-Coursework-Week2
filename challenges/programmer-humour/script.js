let TheAPI_URL='https://xkcd.now.sh/?comic=latest';
let accessBody=document.getElementById('bodyPage');
let createImgElement=document.createElement('img');

// append
accessBody.appendChild(createImgElement);
//set attribute to the image
createImgElement.setAttribute('src','')
createImgElement.setAttribute('id','ImageId')
window.fetch(TheAPI_URL)
.then(function(response){
    if (response.status >= 200 && response.status <= 299) {
        return response.json();
      } else {
        throw new Error(
          `Whoops What Had you done ${response.status} ${response.statusText}`
        );
      }
})
.then(function(loadRandomImage){
  console.log(loadRandomImage);
    let accessImageEl=document.getElementById('ImageId');
    accessImageEl.src=loadRandomImage.img;
})
.catch(err =>{
    console.log(err)
})