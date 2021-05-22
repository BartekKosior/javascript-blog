{
  'use strict';
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

  };
  
  /*const links = document.querySelectorAll('.titles a');
  console.log('links:', links);
  for(let link of links){
    link.addEventListener('click', titleClickHandler);
  }*/

  const optArticleSelector = '.post',
    optTitleSelector = '.post-title',
    optTitleListSelector = '.titles';
    optArticleTagsSelector = '.post-tags .list';

  function generateTitleLinks(){
    console.log('Function work !!!');
    /* [DONE] remove contents of titleList */
    const titleList = document.querySelector(optTitleListSelector);
    titleList.innerHTML = '';  /* usunięcie zawartości listy linków  */
  
    /* find all the articles and save them to variable: articles */
    const articles = document.querySelectorAll(optArticleSelector); /*zapisz do stałej articles odniesienie do wszystkich elementów pasujących do selektora zapisanego w stałej optArticleSelector */
      
    let html = '';
    for(let article of articles){
      /* [DONE] get the article id */
      const articleId = article.getAttribute('id');
    
      /* [DONE] find the title element */
      const articleTitle = article.querySelector(optTitleSelector).innerHTML;
    
      /* [DONE] create HTML of the link */
      const linkHTML = '<li><a href="#' + articleId + '"><span>' + articleTitle + '</span></a></li>';
      console.log('linkHTML:', linkHTML);

      /* [DONE] insert link into titleList */
      html = html + linkHTML;
      console.log('html:', html);
    }
    titleList.innerHTML = html;

    const links = document.querySelectorAll('.titles a');
    console.log('links:', links);
    for(let link of links){
      link.addEventListener('click', titleClickHandler);
    }
  }  
  generateTitleLinks();

  function generateTags(){
    console.log('Function generateTags work !!!');
    /* find all articles */
    const articles = document.querySelectorAll(optArticleSelector);

    /* START LOOP: for every article: */
    for(let article of articles){  
      /* find tags wrapper */ 
      const tagsList = article.querySelector(optArticleTagsSelector);
      /* make html variable with empty string */  /* stwórz zmienną html z pustym ciągiem */
      let html = '';
      /* get tags from data-tags attribute */
      const articleTags = article.getAttribute('data-tags');
      console.log(articleTags);
      /* split tags into array */  /* podziel tagi na tablicę */
      const tags = articleTags.split(' ') /*spacja - punkt podziału*/
      console.log(tags);

      /* START LOOP: for each tag */
      for(let tag of tags){
        /* generate HTML of the link */
        const linkHtml = '<li><a href = "#tag-'+tag+'">'+tag+'</a></li>';
        /* add generated code to html variable */
        html = html + linkHtml;
      }
      /* END LOOP: for each tag */
  
      /* insert HTML of all the links into the tags wrapper */
      tagsList.innerHTML = html;
    }
    /* END LOOP: for every article: */
  }
  
  generateTags();

}

