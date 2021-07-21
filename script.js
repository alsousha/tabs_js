document.querySelectorAll('.tabs-wrapper').forEach((e) => {
    let tabTabs = e.querySelectorAll('.tabs .tab');
    let tabItems = e.querySelectorAll('.tabs-items .item');
    
//       new syntax
//  for(let i =0;i<tabTabs.length;i++) {
//           tabTabs[0].click();
//           tabTabs[i].onclick = () => {
    //           tabTabs.forEach((e)  => { e.classList.remove('on') }); 
    //           tabItems.forEach((e)  => { e.classList.remove('on') });
    //           tabTabs[i].classList.add('on');
    //           tabItems[i].classList.add('on');
    //        }
//   }
    
       for (let i = 0; i < tabTabs.length; i++) {
           tabTabs[0].click(); //add function onclick (below) for all first tab
           
           //for all tabs assign (вешаем) function that removes class ON from all tabs
           tabTabs[i].onclick = function() {
                tabTabs.forEach(function(e) {
                    e.classList.remove('on') 
                });
                tabItems.forEach(function(e){
                    e.classList.remove('on') 
                });
               
               //for tab that was clicked add class ON
                tabTabs[i].classList.add('on');
                tabItems[i].classList.add('on');
            }
        }
     
   });
