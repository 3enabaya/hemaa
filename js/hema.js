let a = document.getElementById('ar')
let kolo = document.querySelector('.menu')
let header = document.querySelector('.head1')
let headerr = document.querySelector('.head2')
let angle = document.querySelector('.fa-angle-down')
let table = document.querySelector('.table')
let ul = document.querySelector('.ul')
let baby = document.querySelector('.baby')
let second = document.querySelector('.second')
let kind = document.querySelector('.kind')
let third = document.querySelector('.third')
let damen = document.querySelector('.dames')
let forth = document.querySelector('.forth')
let wonen = document.querySelector('.wonen')
let fifth = document.querySelector('.fifth')
let bad = document.querySelector('.bad')
let six = document.querySelector('.six')
let seven = document.querySelector('.seven')
let koken = document.querySelector('.koken')
let slapen = document.querySelector('.slapen')
let eight = document.querySelector('.eight')
let nine = document.querySelector('.nine')
let ten = document.querySelector('.ten')
let eleven = document.querySelector('.eleven')
let twelve = document.querySelector('.twelve')
let thirteen = document.querySelector('.thirteen')
let forteen = document.querySelector('.forteen')
let mooi = document.querySelector('.mooi')
let neww = document.querySelector('.new')
let school = document.querySelector('.school')
let outlet = document.querySelector('.outlet')
let vrij = document.querySelector('.vrij')
let feest = document.querySelector('.feest')

   kolo.onmouseover= function(){
        header.style.backgroundColor='var(--color2)'
        header.style.animation='color'
        angle.style.animation='ani .5s '
        angle.style.transform='rotate( 180deg)'


      }

    kolo.onmouseout= function(){
        header.style.backgroundColor='white'
        header.style.animation='color '
        angle.style.animation='aniback .5s '
        angle.style.transform='rotate( 180deg)'
      }



document.body.onscroll= function(){
  console.log(window.pageYOffset)
  if(window.pageYOffset>0){
    header.style.display='none'

  }
  else{
    header.style.display='flex'

  }
}



baby.onmouseover= function(){
second.style.display ='block'
console.log('over')
}
 second.onmouseout= function(){
     second.style.display='none';
 } 
 baby.onmouseout= function(){
    second.style.display='none';
    console.log('msh over')
 } 
 second.onmouseover= function(){
   second.style.display ='block'
}


 kind.onmouseover= function(){
    third.style.display ='block'
    }
     kind.onmouseleave= function(){
        third.style.display='none';
     } 
     third.onmouseleave= function(){
        third.style.display='none';
     } 
    
     third.onmouseover= function(){
        third.style.display ='block'
     }

     
     

 damen.onmouseover= function(){
    forth.style.display ='block'
    }
    damen.onmouseleave= function(){
        forth.style.display='none';
     } 
     forth.onmouseleave= function(){
        forth.style.display='none';
     } 
    
     forth.onmouseover= function(){
        forth.style.display ='block'
     }
    
     

 wonen.onmouseover= function(){
   fifth.style.display ='block'
   }
   wonen.onmouseleave= function(){
       fifth.style.display='none';
    } 
    fifth.onmouseleave= function(){
       fifth.style.display='none';
    } 
   
    fifth.onmouseover= function(){
       fifth.style.display ='block'
    }
   
    

 bad.onmouseover= function(){
   six.style.display ='block'
   }
   bad.onmouseleave= function(){
      six.style.display='none';
    } 
    six.onmouseleave= function(){
      six.style.display='none';
    } 
   
    six.onmouseover= function(){
       six.style.display ='block'
    }
   


    slapen.onmouseover= function(){
      seven.style.display ='block'
      }
      slapen.onmouseleave= function(){
         seven.style.display='none';
       } 
       seven.onmouseleave= function(){
         seven.style.display='none';
       } 
      
       seven.onmouseover= function(){
          seven.style.display ='block'
       }
      

    koken.onmouseover= function(){
      eight.style.display ='block'
      

      }
      koken.onmouseleave= function(){
         eight.style.display='none';
       } 
       eight.onmouseleave= function(){
         eight.style.display='none';
       } 
      
       eight.onmouseover= function(){
         eight.style.display ='block'
       }
      

    feest.onmouseover= function(){
      nine.style.display ='block'
      }
      feest.onmouseleave= function(){
         nine.style.display='none';
       } 
       nine.onmouseleave= function(){
         nine.style.display='none';
       } 
      
       nine.onmouseover= function(){
         nine.style.display ='block'
       }
            

    school.onmouseover= function(){
      ten.style.display ='block'
      }
      school.onmouseleave= function(){
         ten.style.display='none';
       } 
       ten.onmouseleave= function(){
         ten.style.display='none';
       } 
      
       ten.onmouseover= function(){
         ten.style.display ='block'
       }
                  

    vrij.onmouseover= function(){
      eleven.style.display ='block'
      }
      vrij.onmouseleave= function(){
         eleven.style.display='none';
       } 
       eleven.onmouseleave= function(){
         eleven.style.display='none';
       } 
      
       eleven.onmouseover= function(){
         eleven.style.display ='block'
       }
                        

       mooi.onmouseover= function(){
      twelve.style.display ='block'
      }
      mooi.onmouseleave= function(){
         twelve.style.display='none';
       } 
       twelve.onmouseleave= function(){
         twelve.style.display='none';
       } 
      
       twelve.onmouseover= function(){
         twelve.style.display ='block'
       }                  



       outlet.onmouseover= function(){
         thirteen.style.display ='block'
         }
         outlet.onmouseleave= function(){
            thirteen.style.display='none';
          } 
          thirteen.onmouseleave= function(){
            thirteen.style.display='none';
          } 
         
          thirteen.onmouseover= function(){
            thirteen.style.display ='block'
          }
          

       neww.onmouseover= function(){
         forteen.style.display ='block'
         }
         neww.onmouseleave= function(){
            forteen.style.display='none';
          } 
          forteen.onmouseleave= function(){
            forteen.style.display='none';
          } 
         
          forteen.onmouseover= function(){
            forteen.style.display ='block'
          }
          let fa = document.querySelector('.fa-arrow-right')
          let sahm = document.querySelector('.sahm');
          let sahm1= document.querySelector('.sahm1');
let feesty = document.getElementById('feest')
let schools = document.getElementById('school')

          let scrolling = document.querySelector('.scrolling');
let lii = document.querySelectorAll('.scrolling li')

 

sahm.onclick= function(){
  schools.classList.remove('schooly');

    scrolling.style.animation='slider .5s '
  scrolling.style.marginLeft='-75%'
  scrolling.style.paddingRight='90%'
  sahm.style.right='90%'
  sahm.style.display='none';
  sahm1.style.display='block';
  sahm1.style.right='90%'
feesty.classList.add('feesty');

}
sahm1.onclick= function(){
  feesty.classList.remove('feesty');
  scrolling.style.animation='sliderback .5s '
  scrolling.style.marginLeft='5%'
  scrolling.style.marginRight='0px'
  sahm1.style.display='none';
  sahm.style.display='block';
  sahm.style.right='8%'
  schools.classList.add('schooly');

} 


let sahm2= document.querySelector('.sahm2')
let sahm3= document.querySelector('.sahm3')
let sahm4= document.querySelector('.sahm4')
let cards= document.querySelector('.cards')
let sahm5= document.querySelector('.sahm5')
let plants = document.querySelector('.plants')
let cream = document.querySelector('.cream')
let decore = document.querySelector('.decore')

//  awl mara
sahm2.onclick= function(){
  console.log(sahm3)
  cards.style.animation='sliderone .5s '
  cards.style.marginLeft='-100%'
  cards.style.paddingRight='90%'
  sahm2.style.right='2%'
  sahm3.style.right='1%'
  sahm3.style.backgroundColor='white';
  sahm3.style.display='block'
  sahm3.style.color='black';
  sahm4.style.display='block'
  sahm4.style.left='50%'
  sahm2.style.display='none'
  decore.parentElement.classList.add('hide');
  cream.parentElement.classList.add('hide')
  plants.parentElement.classList.remove('hide');

}


sahm3.onclick= function(){
  decore.parentElement.classList.remove('hide');
  cream.parentElement.classList.remove('hide')
  cards.style.marginLeft='-200%'
  cards.style.animation='slidertwo .5s '
  sahm5.style.display='block'
  sahm5.style.left='66%'
  sahm3.style.display='block';
  sahm3.style.backgroundColor='black';
  sahm3.style.color='white';
  sahm3.style.right='8%'
  

} 


sahm4.onclick= function(){
  cards.style.marginLeft='5%'
  cards.style.animation='sliderback .5s '
  sahm2.style.display='block';
  sahm3.style.display='none';
  sahm4.style.display='none';
  sahm5.style.display='none';
  cards.style.marginLeft='-1%'
  cards.style.paddingRight='90%'
} 



sahm5.onclick= function(){
  cards.style.marginLeft='-100%'
  cards.style.animation='sliderbacktwo .5s '
  sahm2.style.display='block';
  sahm3.style.display='none';
  sahm3.style.backgroundColor='white';
  sahm5.style.display='none';
} 

