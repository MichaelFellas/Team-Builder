//A function to generate HTML for Display
function generateHTML(managers, engineers, interns) {
  return `
  <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Team Generator</title>
        <link rel="stylesheet" href="./style.css" />
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-+0n0xVW2eSR5OomGNYDnhzAbDsOXxcvSN1TPprVMTNDbiYZCxYbOOl7+AMvyTG2x" crossorigin="anonymous" />
     </head>

     <body>
     <div class="containerz">   
       <div class="row d-flex bg-4">
          <h1>Your Team!</h1>
       </div>  

     <div class= "row d-flex bg-1">

        ${managers}  
    
    </div>

     <div class="row bg-2 d-flex">

        ${engineers}
     
     </div>

     <div class="row bg-3 d-flex">

        ${interns}

       
    </div>
   </div>
     
   

</body>
</html>
`;
}

function generateCSS() {
  return `

.bg-1 {
    background-color: rgb(59, 95, 255);
    display: flex;
    flex-basis: 90%;


}

.bg-2 {
    background-color: rgb(76, 151, 95);
    display: flex;
    flex-basis: 90%;

}

.bg-3 {
    background-color: rgb(240, 240, 136);
    display: flex;
    flex-basis: 100%;
}

.bg-4 {
    background-color: rgb(0, 0, 0);
    display: flex;
    flex-basis: 100%;
}

.containerz {
    width: 100%;    
}

.row {
    justify-content: center;
    align-items: center;
    width: 100%;
    flex-direction: row;
}

.card-outer-edge {
    
    width: 500px;

}

.card-edge{
    border: 5px black solid;
    border-radius: 5px;
    background-color: lightgray;
    height: 450px;
    flex-basis: 35%;
    margin: 50px;
    display: flex;
    margin-left: auto ;
    margin-right: auto ;
    justify-content: center;
    align-items: center;
    width: 450px;
}

.card-role {
    
    background-color: rgb(160, 160, 160);
    height: 50px;
    width: 100%;
    margin: 10px;
}

.card-info {    
    background-color: lightgray;
    height: 350px;
    flex-basis: 100%;
    margin: 10px;
}

.card-name {
    border: 1px black solid;
    background-color: lightgray;
    height: 50px;
    flex-basis: 100%;
    display: flex;
    margin: 5px;
    align-items: center;
    padding: 5px;
}

.card-id {
    border: 1px black solid;
    background-color: lightgray;
    height: 50px;
    flex-basis: 100%;
    margin: 5px;
    align-items: center;
    padding: 5px;
}

.card-email {
    border: 1px black solid;
    background-color: lightgray;
    height: 50px;
    flex-basis: 100%;
    margin: 5px;
    align-items: center;
    padding: 5px;

}

.card-officeNumber {
    border: 1px black solid;
    background-color: lightgray;
    height: 50px;
    flex-basis: 100%;
    margin: 5px;
    align-items: center;
    padding: 5px;
}

h1 {
    color: whitesmoke;
    text-align: center;   
}

h2 {
    text-align: center;
    font-size: 75px;
}

h4 {
    text-align: left;
    vertical-align: middle;
    font-size: 75px;
}

@media screen and (max-width: 768px) {
    .card-edge {
        flex-basis: 90%;
    }
    
}
`
}

module.exports = {
  generateHTML,
  generateCSS,
};