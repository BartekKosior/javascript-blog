{
  'use strict';
  /*document.getElementById('test-button').addEventListener('click', function(){
    const links = document.querySelectorAll('.titles a');
    console.log('links:', links);
  });*/

  const titleClickHandler = function(event){
    event.preventDefault();                    /* zapobiec domyśnej akcji - przejscie do gory strony */  /* ????????????? po co ? */
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
    optTitleListSelector = '.titles',
    optArticleTagsSelector = '.post-tags .list',
    optArticleAuthorSelector = '.post-author',
    optTagsListSelector = '.tags.list',
    optCloudClassCount = '5',
    optCloudClassPrefix = 'tag-size-';


  function generateTitleLinks(customSelector = ''){    /*argument customSelector, który domyślnie jest pustym ciągiem znaków. */
    console.log('Function work !!!');
    /* [DONE] remove contents of titleList */
    const titleList = document.querySelector(optTitleListSelector);
    titleList.innerHTML = '';  /* usunięcie zawartości listy linków  */
    
    /* [DONE] find all the articles and save them to variable: articles */
    const articles = document.querySelectorAll(optArticleSelector + customSelector); /* ???????????????? po co customSelector  */  /*zapisz do stałej articles odniesienie do wszystkich elementów pasujących do selektora zapisanego w stałej optArticleSelector */
    console.log('articles:', articles);
    console.log('customSelector:', customSelector);
    let html = '';
    for(let article of articles){
      /* [DONE] get the article id */
      const articleId = article.getAttribute('id');
    
      /* [DONE] find the title element */
      const articleTitle = article.querySelector(optTitleSelector).innerHTML;
    
      /* [DONE] create HTML of the link */
      const linkHTML = '<li><a href="#' + articleId + '"><span>' + articleTitle + '</span></a></li>';  /* ??????????????  czemu span ? */
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



  /* Znalezienie skrajnych liczb wystąpien tagów */
  /* funk ma znalezc najmn i najw liczbę wystąpień. Te 2 liczby mają zostać zwrócone w post obiektu, który będzie zawierał dwa klucze: max i min */
  function calculateTagsParams(tags){
    const params = {'max':0,'min':999999}
    for(let tag in tags){
      console.log(tag + ' is used ' + tags[tag] + ' times');
      if(tags[tag] > params.max){
        params.max = tags[tag];
      }
      if(tags[tag] < params.min){
        params.min = tags[tag];
      }
    }
    return params;
  }


  function calculateTagClass(count,params){
    const normalizedCount = count - params.min; 
    const normalizedMax = params.max - params.min; 
    const percentage = normalizedCount / normalizedMax; 
    const classNumber = Math.floor( percentage * (optCloudClassCount - 1) + 1 );
    return('tag-size-'+classNumber); 
  }
  


  function generateTags(){
    console.log('Function generateTags work !!!');
    /* [NEW] create a new variable allTags with an empty /array/ object   */  /* utwórz nową zmienną allTags z pustą /tablicą/  obiektem  */
    let allTags = {};
       
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
        const linkHTML = '<li><a href = "#tag-'+tag+'">'+tag+'</a></li>';
        console.log('linkHTML - tag:', linkHTML);

        /* [DONE] add generated code to html variable */
        html = html + linkHTML;

        /* [NEW] check if this link is NOT already in allTags */
        /*if(allTags.indexOf(linkHTML) == -1){                               tablica */
        if(!allTags[tag]) { /* "jeśli allTags NIE MA klucza tag" */      /* zmiana na obiekt */   /* ????????????????????????????? */

          /* [NEW] add generated code to allTags /array/ object */
          /* allTags.push(linkHTML);                                     tablica  */
          allTags[tag] = 1; /* zmiana na obiekt */ /* w obiekcie allTags nie ma jeszcze danego tagu. Wtedy licznik wystąpień tego tagu ustawiony na 1 */
          } else {          /* dodanie else */
          allTags[tag]++; /* znaki ++ zwiększają liczbę o 1 - jesli tag już znajduje się w allTags, zwiększamy licznik wystąpień o 1  */
        }
      }
      /* END LOOP: for each tag */
  
      /* [DONE] insert HTML of all the links into the tags wrapper */
      tagsList.innerHTML = html;                                           /* ?????????? */
    }
    /* END LOOP: for every article: */
    /* [NEW] find list of tags in right column */
    const tagList = document.querySelector('.tags');
    
    /* [NEW] add html from allTags to tagList */
    // tagList.innerHTML = allTags.join(' ');
    /*console.log('allTags:', allTags); */

    const tagsParams = calculateTagsParams(allTags);
    console.log('tagsParams:', tagsParams)
    
    /* [NEW] create variable for all links HTML code */
    let allTagsHTML = '';

    /* [NEW] START LOOP: for each tag in allTags: */
    for(let tag in allTags){
      /* [NEW] generate code of a link and add it to allTagsHTML */
      /* allTagsHTML += tag + ' (' + allTags[tag] + ') '; */
      const tagLinkHTML = '<li> <a href="#tag-' + tag + '" class="' + calculateTagClass(allTags[tag], tagsParams) + '">' +tag+ ' (' +allTags[tag]+ ') </a></li>'; 
      console.log('tagLinkHTML:', tagLinkHTML);
      allTagsHTML += tagLinkHTML;
    }
    /* [NEW] END LOOP: for each tag in allTags: */

    /*[NEW] add HTML from allTagsHTML to tagList */
    tagList.innerHTML = allTagsHTML; 

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
    
    /* [DONE] make a new constant "tag" and extract tag from the "href" constant */ /*stwórz nową stałą „tag” i wyodrębnij tag ze stałej „href” */
    const tag = href.replace('#tag-', '');  /* funkcja replace otrzymuje dwa argumenty – szukaną frazę oraz ciąg znaków, którym ma ją zastąpić. */
    console.log('tag:', tag);
    
    /* [DONE] find all tag links with class active */
    const activeTagLinks = document.querySelectorAll('a.active[href^="#tag-"]'); /* [href^="#tag-"]- selektor atrybutu ; łącznik ^= oznacza "atrybut href zaczynający się od "#tag-" " */
    console.log('activeTagLinks:', activeTagLinks);
    
    /* START LOOP: for each active tag link */
    for (let activeTagLink of activeTagLinks){
        /* [DONE] remove class active */
        activeTagLink.classList.remove('active');
    }
    /* END LOOP: for each active tag link */
    /* [DONE] find all tag links with "href" attribute equal to the "href" constant */
    const links = document.querySelectorAll('a[href="'+href+'"]');
    
    /* START LOOP: for each found tag link */
    for(let tag of links){
      
      /* [DONE] add class active */
      tag.classList.add('active');
    }
    /* END LOOP: for each found tag link */
  
    /* [DONE] execute function "generateTitleLinks" with article selector as argument */
    generateTitleLinks('[data-tags~="' + tag + '"]'); /* łącznik ~=, który możemy odczytać jako "znajdź elementy, które mają atrybut data-tags, który ma w sobie słowo 'tag'".*/
  }
  


  function addClickListenersToTags(){
    /* [DONE] find all links to tags */
    const tagsLinks = document.querySelectorAll('[href^="#tag-"]');
    console.log('tagsLinks:', tagsLinks);
    
    /* START LOOP: for each link */
    for(let tagLink of tagsLinks ){
      
      /* [DONE] add tagClickHandler as event listener for that link */
      tagLink.addEventListener('click', tagClickHandler);
      
      /* END LOOP: for each link */
    }
  }
  addClickListenersToTags();



  function generateAuthors(){
    console.log('Function generateAuthors work !!!');
    
    let allAuthors = {};
    /* [DONE] find all authors */
    const articles = document.querySelectorAll(optArticleSelector);
    
    /* START LOOP: for every article: */
    for(let article of articles){  
      
      /* [DONE] find authors wrapper */ 
      const authorWrapper = article.querySelector(optArticleAuthorSelector);

      /* [DONE]      */
      const author = article.getAttribute('data-author');
      const linkHtml = 'by <a href = "#author-'+author+'">'+author+'</a>';
      console.log('linkHtml:', linkHtml);
      /* [DONE] add generated code to html variable */
      authorWrapper.innerHTML = linkHtml;

      if(!allAuthors[author]) { 

          allAuthors[author] = 1; 
          } else {          
          allAuthors[author]++;
        }
    }

    const authorList = document.querySelector('.authors');
    
    /* [NEW] add html from allTags to tagList */
    // tagList.innerHTML = allTags.join(' ');
    /*console.log('allTags:', allTags); */

      
    /* [NEW] create variable for all links HTML code */
    let allAuthorsHTML = '';

    /* [NEW] START LOOP: for each tag in allTags: */
    for(let author in allAuthors){
      /* [NEW] generate code of a link and add it to allTagsHTML */
      /* allTagsHTML += tag + ' (' + allTags[tag] + ') '; */
      const authorLinkHTML = '<li> <a href="#author-' + author + '">' +author+ ' (' +allAuthors[author]+ ') </a></li>'; 
      console.log('authorLinkHTML:', authorLinkHTML);
      allAuthorsHTML += authorLinkHTML;
    }
    /* [NEW] END LOOP: for each tag in allTags: */

    /*[NEW] add HTML from allTagsHTML to tagList */
    authorList.innerHTML = allAuthorsHTML; 


  }
  generateAuthors();



  function authorClickHandler(event){
    /* [DONE] prevent default action for this event */   /*zapobiegaj domyślnej akcji dla tego zdarzenia*/
    event.preventDefault();
    
    /* [DONE] make new constant named "clickedElement" and give it the value of "this" */
    const clickedElement = this;
    
    /* [DONE] make a new constant "href" and read the attribute "href" of the clicked element */
    const href = clickedElement.getAttribute('href');
    console.log('href:', href);
    
    /* [DONE] make a new constant "author" and extract author from the "href" constant */ /*stwórz nową stałą „author” i wyodrębnij autora ze stałej „href” */
    const author = href.replace('#author-', '');  /* funkcja replace otrzymuje dwa argumenty – szukaną frazę oraz ciąg znaków, którym ma ją zastąpić. */
    console.log('author:', author);
    
    /* [DONE] find all authors links with class active */
    const activeAuthorsLinks = document.querySelectorAll('a.active[href^="#author-"]'); /* [href^="#author-"]- selektor atrybutu ; łącznik ^= oznacza "atrybut href zaczynający się od "#tag-" " */
    console.log('activeAuthorsLinks:', activeAuthorsLinks);
    
    /* START LOOP: for each active tag link */
    for (let activeAuthorLink of activeAuthorsLinks){
        
      /* [DONE] remove class active */
        activeAuthorLink.classList.remove('active');
    }
    /* END LOOP: for each active tag link */
  
    /* [DONE] find all tag links with "href" attribute equal to the "links" constant */
    const links = document.querySelectorAll('a[href="'+href+'"]');
    
    /* START LOOP: for each found author link */
    for(let author of links){
      /* [DONE] add class active */
      author.classList.add('active');
    }
    /* END LOOP: for each found tag link */
  
    /* [DONE] execute function "generateTitleLinks" with article selector as argument */
    generateTitleLinks('[data-author="' + author + '"]'); /* łącznik ~=, który możemy odczytać jako "znajdź elementy, które mają atrybut data-tags, który ma w sobie słowo 'tag'".*/
  }



  function addClickListenersToAuthors(){
    /* [DONE] find all links to authors */
    const authorsLinks = document.querySelectorAll('[href^="#author-"]');
    
    /* START LOOP: for each link */
    for(let authorslink of authorsLinks ){
      
      /* [DONE] add tagClickHandler as event listener for that link */
      authorslink.addEventListener('click', authorClickHandler);
      
      /* END LOOP: for each link */
    }
  }
  addClickListenersToAuthors();


  

}

