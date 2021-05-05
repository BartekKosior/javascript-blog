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
    const articleSelector = clickedElement.getAttribute('href');   
    console.log('articleSelector:', articleSelector);

    /* [DONE] find the correct article using the selector (value of 'href' attribute) */
    const targetArticle = document.querySelector(articleSelector);      /*czy tu powinno być 'href' w nawiasie? */
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
  /* remove contents of titleList */
  const titleList = document.querySelector(optTitleListSelector);
  /* for each article */
    /* get the article id */   /*and right to const*/
    
    /* find the title element */  /*and right to const*/

    /* get the title from the title element */   

    /* create HTML of the link */

    /* insert link into titleList */


}

generateTitleLinks();


}