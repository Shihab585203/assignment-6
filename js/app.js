// Indicate Page Location
document.getElementById('news-menubar').addEventListener('click', function(){
    window.location.href = 'index.html';
})
document.getElementById('logo').addEventListener('click', function(){
    window.location.href = 'index.html';
})

document.getElementById('blog-menubar').addEventListener('click', function(){
    window.location.href = 'blog.html';
})

//Load Category API

const loadCategory = async () =>{
    
    const url = `https://openapi.programming-hero.com/api/news/categories`;
    const res = await fetch(url);
    const data = await res.json();
    try{
        if(data == "") throw "empty";
    } catch (error){
        console.log("error");
    }
    displayCategory(data.data.news_category);
}

const displayCategory = categories => {
    console.log(categories);
    const categoryContainer = document.getElementById('category-container');
    categories.forEach(category => {
        const categoryMenu = document.createElement('h5');
        categoryMenu.innerHTML = `
            <a onclick="loadNews(${category.category_id})" class="category-name text-decoration-none text-muted" href="#">${category.category_name}</a>
        `;
        categoryContainer.appendChild(categoryMenu);
    });
}

// Load News API


const loadNews = async (news_id) =>{
    
    const url = `https://openapi.programming-hero.com/api/news/${news_id}`;
    const res = await fetch(url);
    const data = await res.json();
    try{
        if(data == "") throw "empty";
    } catch (error){
        console.log("error");
    }
    displayNews(data.data[0]);
}


const displayNews = news => {
    console.log(news); 
}

loadNews();

loadCategory();