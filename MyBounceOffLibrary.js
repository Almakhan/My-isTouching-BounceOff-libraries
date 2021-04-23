function bounceOff(jack,jill){
    if(jack.x-jill.x<jack.width/2+jill.width/2
    &&jill.x-jack.x<jack.width/2+jill.width/2){
    jack.velocityX=jack.velocityX*(-1);
    jill.velocityX=jill.velocityX*(-1);
    } 
    
    if( jack.y-jill.y<jack.height/2+jill.height/2
        &&jill.y-jack.y<jack.height/2+jill.height/2){
            jack.velocityY=jack.velocityY*(-1);
            jill.velocityY=jill.velocityY*(-1);     
        }
}