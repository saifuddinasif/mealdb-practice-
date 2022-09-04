

const searchbtn =  document.getElementById('search-btn')

searchbtn.addEventListener('click', getmeal)


function getmeal(){

    const searchField = document.getElementById('search-field').value;
    

    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchField}`)
    .then(res => res.json())
    .then(data => displayfood(data.meals))


}


 function  displayfood(meals){

    console.log(meals)
     const foodcontainer = document.getElementById("food-container");
     meals.forEach(meal => {
        console.log(meal)
        const mealsdiv = document.createElement('div');

        mealsdiv.innerHTML =`
        
        <div class="card" style="width: 18rem;">
  <img src="" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
        
        `
        foodcontainer.innerHTML(mealsdiv)

     });

   




}