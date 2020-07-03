const totalItemsPerPage = 10;
var totalListElements = document.getElementsByClassName("student-list")[0].getElementsByTagName("li");
var totalStudents = totalListElements.length;

showPage(totalListElements, 1);
appendPageLinks(totalListElements);S

/* Display 10 items per page*/

function showPage(totalListElements, page) {
   var startIndex = (page * totalItemsPerPage) - totalItemsPerPage;
   var endIndex = page * totalItemsPerPage;
   for (i = 0; i < totalStudents; i++) {
      if (i >= startIndex && i < endIndex) {
         totalListElements[i].setAttribute("style", "display:");
      }
      else {
         totalListElements[i].setAttribute("style", "display:none");
      }
   }
}



 /* Adding functionality to Pagination buttons.*/

function appendPageLinks(totalListElements) {
   var totalPages = Math.ceil(totalStudents / totalItemsPerPage);
   var div = document.createElement("div");
   div.setAttribute("class", "pagination");
   document.getElementsByClassName("page")[0].appendChild(div);
   var ul = document.createElement("ul");
   document.getElementsByClassName("pagination")[0].appendChild(ul);
   for (var i = 0; i < totalPages; i++) {
      var pageIndex = i + 1;

      var li = document.createElement('li');
      if (i == 0) {

         li.innerHTML = `<a href="#" class="active">${pageIndex}</a>`;
      }
      else {

         li.innerHTML = `<a href="#">${pageIndex}</a>`;
      }
      ul.appendChild(li);
   }

   var anchorTags = document.getElementsByTagName("a");
   for (var i = 0; i < anchorTags.length; i++) {
      anchorTags[i].addEventListener('click', function (event) {
         var element = document.getElementsByClassName('active');
         element[0].classList.remove('active');
         event.target.className += 'active';
         showPage(totalListElements, event.target.innerHTML);
      });
   }

}
