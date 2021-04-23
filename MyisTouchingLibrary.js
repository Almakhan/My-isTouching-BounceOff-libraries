function isTouching(jack,jill){
    if(jack.x-jill.x<jack.width/2+jill.width/2
      &&jill.x-jack.x<jack.width/2+jill.width/2
      &&jack.y-jill.y<jack.height/2+jill.height/2
      &&jill.y-jack.y<jack.height/2+jill.height/2){
        return true;
    }
    else{
      return false;
    }
  }