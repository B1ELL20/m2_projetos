import React from 'react'
import { 
    ThanksBox,
    ThanksImg,
    ThanksMensage
} from '../Components/Thanks/ThanksElements'

const Thanks = () => {

    let link = "https://wa.me/558592971562/"

    setTimeout(function() {

        window.open(link, '_blank');
        window.location.href = '#/';
    
      }, 3000);

  return (
    
    <ThanksBox>
        <ThanksImg/>
        <ThanksMensage>Agradecemos seu contato!</ThanksMensage>
    </ThanksBox>
  )
}

export default Thanks