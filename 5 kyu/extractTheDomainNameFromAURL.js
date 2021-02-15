///////////////////////////////PROMPT//////////////////////////////////////////////

/*
Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:

domainName("http://github.com/carbonfive/raygun") == "github" 
domainName("http://www.zombie-bites.com") == "zombie-bites"
domainName("https://www.cnet.com") == "cnet"
*/

///////////////////////////////SOLUTION//////////////////////////////////////////////

function domainName(url){
  let str = ''
  for (let i = 0; i < url.length; i++) {
    if (url[i] === 'w' && url[i + 1] === 'w'){
      i += 4
      while(url[i] !== '.'){
        str += url[i]
        i++
      }
      return str
    } else if (url[i] === '/' && url[i + 1] === '/' && url[i + 2] !== 'w'){
      i += 2
      while(url[i] !== '.'){
        str += url[i]
        i++
      }
      return str
    }
  }
  for (let i = 0; i < url.length; i++) {
    if (url.slice(0,3)!== 'www' || url.slice(0,3) !== 'htt'){
      while(url[i] !== '.'){
        str += url[i]
        i++
      }
      return str
    }
  }
}

///////////////////////////////TEST CASES/////////////////////////////////////////

Test.assertEquals(domainName("http://google.com"), "google");
Test.assertEquals(domainName("http://google.co.jp"), "google");
Test.assertEquals(domainName("www.xakep.ru"), "xakep");
Test.assertEquals(domainName("https://youtube.com"), "youtube");
