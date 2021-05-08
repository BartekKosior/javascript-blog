{
'use strict'
/*document.getElementById('test-button').addEventListener('click', function(){
    const links = document.querySelectorAll('.titles a');
    console.log('links:', links);
});*/

const titleClickHandler = function(event){
    event.preventDefault();
    const clickedElement = this; 
    console.log('Link was clicked!');
    console.log('clickedElement (with plus): ' + clickedElement);
        
    /* [DONE] remove class 'active' from all article links  */
    const activeLinks = document.querySelectorAll('.titles a.active');
    for(let activeLink of activeLinks){
      activeLink.classList.remove('active');
    }

    /* [DONE] add class 'active' to the clicked link */
    clickedElement.classList.add('active');
    console.log('clickedElement:', clickedElement);
    
    /* [DONE] remove class 'active' from all articles */
    const activeArticles = document.querySelectorAll('.post');
    for(let activeArticle of activeArticles){
      activeArticle.classList.remove('active');
    }

    /* [DONE] get 'href' attribute from the clicked link */
    const articleSelector = clickedElement.getAttribute('href');   /* przypisz do stałej articleselector to co wieźmiesz z atrybutu href elementu clickedElement */
    console.log('articleSelector:', articleSelector);

    /* [DONE] find the correct article using the selector (value of 'href' attribute) */
    const targetArticle = document.querySelector(articleSelector);
    console.log('targetArticle:', targetArticle);

    /* [DONE] add class 'active' to the correct article */
    targetArticle.classList.add('active');
    console.log('targetArticle:', targetArticle);

}
  
const links = document.querySelectorAll('.titles a');
for(let link of links){
    link.addEventListener('click', titleClickHandler);
}

const optArticleSelector = '.post',
  optTitleSelector = '.post-title',
  optTitleListSelector = '.titles'; 

function generateTitleLinks(){
  console.log('Function work !!!');
  /* [DONE] remove contents of titleList */
  const titleList = document.querySelector(optTitleListSelector);
  titleList.innerHTML = '';  /* usunięcie zawartości listy linków  */
  
  /* find all the articles and save them to variable: articles */
  const articles = document.querySelector(optArticleSelector); /*zapisz do stałej articles odniesienie do wszystkich elementów pasujących do selektora zapisanego w stałej optArticleSelector */
      
  let html = '';
  for(let article of articles){
    /* [IN PROGRESS] get the article id */
    const articleId = optArticleSelector.getAttribute('id');    /* ??????? */
    
    /* [DONE] find the title element */
    const articleTitle = article.querySelector(optTitleSelector).innerHTML;


    /* get the title from the title element */   

    /* create HTML of the link */
    const linkHTML = '<li><a href="#' + articleId + '"><span>' + articleTitle + '</span></a></li>';
    console.log('linkHTML:', linkHTML);

    /* insert link into titleList */
    html = html + linkHTML;
    
    console.log('const html:', html);
  }

  titleList.innerHTML = html; 
}

generateTitleLinks();


}