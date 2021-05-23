{
  'use strict';
  /*document.getElementById('test-button').addEventListener('click', function(){
    const links = document.querySelectorAll('.titles a');
    console.log('links:', links);
  });*/

  const titleClickHandler = function(event){
    event.preventDefault();                    /* zapobiec domyśnej akcji */
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

  function generateTitleLinks(customSelector = ''){    /*argument customSelector, który domyślnie jest pustym ciągiem znaków. */
    console.log('Function work !!!');
    /* [DONE] remove contents of titleList */
    const titleList = document.querySelector(optTitleListSelector);
    titleList.innerHTML = '';  /* usunięcie zawartości listy linków  */
  
    /* [DONE] find all the articles and save them to variable: articles */
    const articles = document.querySelectorAll(optArticleSelector + customSelector); /*zapisz do stałej articles odniesienie do wszystkich elementów pasujących do selektora zapisanego w stałej optArticleSelector */
    console.log('articles:', articles);
    console.log('customSelector:', customSelector);
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
    /* [DONE] find all articles */
    const articles = document.querySelectorAll(optArticleSelector);

    /* START LOOP: for every article: */
    for(let article of articles){  
      /* [DONE] find tags wrapper */ 
      const tagsList = article.querySelector(optArticleTagsSelector);
      /* [DONE] make html variable with empty string */  /* stwórz zmienną html z pustym ciągiem */
      let html = '';
      /* [DONE] get tags from data-tags attribute */
      const articleTags = article.getAttribute('data-tags');
      console.log('articleTags:', articleTags);
      /* [DONE] split tags into array */  /* podziel tagi na tablicę */
      const tags = articleTags.split(' ') /*spacja - punkt podziału*/
      console.log('tags:', tags);

      /* START LOOP: for each tag */
      for(let tag of tags){
        /* [DONE] generate HTML of the link */
        const linkHtml = '<li><a href = "#tag-'+tag+'">'+tag+'</a></li>';
        /* [DONE] add generated code to html variable */
        html = html + linkHtml;
      }
      /* END LOOP: for each tag */
  
      /* [DONE] insert HTML of all the links into the tags wrapper */
      tagsList.innerHTML = html;
    }
    /* END LOOP: for every article: */
  }
    generateTags();

  function tagClickHandler(event){
    /* [DONE] prevent default action for this event */   /*zapobiegaj domyślnej akcji dla tego zdarzenia*/
    event.preventDefault();
    /* [DONE] make new constant named "clickedElement" and give it the value of "this" */
    const clickedElement = this;
    /* [DONE] make a new constant "href" and read the attribute "href" of the clicked element */
    const href = clickedElement.getAttribute('href');
    console.log('href:', href);
    /* make a new constant "tag" and extract tag from the "href" constant */ /*stwórz nową stałą „tag” i wyodrębnij tag ze stałej „href” */
    /* const tag = href.querySelectorAll('a[href="' + href + '"]'); */
    const tag = href.replace('#tag-', '');  /* funkcja replace otrzymuje dwa argumenty – szukaną frazę oraz ciąg znaków, którym ma ją zastąpić. */
    console.log('tag:', tag);
    /* find all tag links with class active */
    const activeTagLinks = document.querySelectorAll('a.active[href^="#tag-"]') /* [href^="#tag-"]- selektor atrybutu ; łącznik ^= oznacza "atrybut href zaczynający się od "#tag-" " */
    console.log('activeTagLinks:', activeTagLinks);
    /* START LOOP: for each active tag link */
    for (let activeTagLink of activeTagLinks){
        /* remove class active */
        activeTagLink.remove('active');
    }
    /* END LOOP: for each active tag link */
  
    /* find all tag links with "href" attribute equal to the "href" constant */
    href = tag.getAttribute('href');
    /* START LOOP: for each found tag link */
    for(let tag of tags){
      /* add class active */
      activeTagLink.add('active');
    }
    /* END LOOP: for each found tag link */
  
    /* execute function "generateTitleLinks" with article selector as argument */
    generateTitleLinks('[data-tags~="' + tag + '"]'); /* łącznik ~=, który możemy odczytać jako "znajdź elementy, które mają atrybut data-tags, który ma w sobie słowo 'tag'".*/
  }
  
  function addClickListenersToTags(){
    /* find all links to tags */
    const tagsLinks = document.querySelectorAll('href')
    console.log('tagsLinks:', tagsLinks);
    /* START LOOP: for each link */
    
      /* add tagClickHandler as event listener for that link */
      
      /* END LOOP: for each link */
    
  }
  addClickListenersToTags();

}

