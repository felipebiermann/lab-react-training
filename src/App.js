import { IdCard } from './components/IdCard';
import { Greetings } from './components/Greetings';
import { Random } from './components/Random';
import { BoxColor } from './components/BoxColor';
import { CreditCard } from './components/CreditCard';
import { Rating } from './components/Rating';
import { DriverCard } from './components/DriverCard';
import { LikeButton } from './components/LikeButton';
import { ClickablePicture } from './components/ClickablePicture';
import { useState } from 'react';
import { Dice } from './components/Dice';
import { Carousel } from './components/Carousel';

import Dice0 from './assets/images/dice-empty.png';
import Dice1 from './assets/images/dice1.png';
import Dice2 from './assets/images/dice2.png';
import Dice3 from './assets/images/dice3.png';
import Dice4 from './assets/images/dice4.png';
import Dice5 from './assets/images/dice5.png';
import Dice6 from './assets/images/dice6.png';

import img from './assets/images/maxence.png';

import imgClicked from './assets/images/maxence-glasses.png';
// import react from 'react';

function App() {
  const [src, setImgClick] = useState(img);

  function imgClick() {
    src === img ? setImgClick(imgClicked) : setImgClick(img);
  }

  //Dice
  const diceList = [Dice1, Dice2, Dice3, Dice4, Dice5, Dice6];
  const [dice, setDice] = useState(Dice0);

  function rollDice() {
    setDice(Dice0);
    setTimeout(() => {
      setDice(diceList[Math.floor(Math.random() * diceList.length)]);
    }, 1000);
  }

  return (
    <div className="App">
      <IdCard
        lastName="Doe"
        firstName="John"
        gender="male"
        height={1.78}
        birth={new Date('1992-07-14')}
        picture="https://randomuser.me/api/portraits/men/44.jpg"
      />

      {
        <IdCard
          lastName="Delores "
          firstName="Obrien"
          gender="female"
          height={1.72}
          birth={new Date('1988-05-11')}
          picture="https://randomuser.me/api/portraits/women/44.jpg"
        />
      }
      <div>
        <Greetings lang="de">Ludwig</Greetings>
        <Greetings lang="fr">François</Greetings>
        <Greetings lang="es">Daniel</Greetings>
        <Greetings lang="en">Josh</Greetings>
      </div>
      <div>
        <Random min={1} max={6} />
        <Random min={1} max={100} />
      </div>
      <div>
        <BoxColor r={255} g={0} b={0} />
        <BoxColor r={128} g={255} b={0} />
      </div>
      <div>
        <CreditCard
          type="Visa"
          number="0123456789018845"
          expirationMonth={3}
          expirationYear={2021}
          bank="BNP"
          owner="Maxence Bouret"
          bgColor="#11aa99"
          color="white"
        />

        <CreditCard
          type="Master Card"
          number="0123456789010995"
          expirationMonth={3}
          expirationYear={2021}
          bank="N26"
          owner="Maxence Bouret"
          bgColor="#eeeeee"
          color="#222222"
        />

        <CreditCard
          type="Visa"
          number="0123456789016984"
          expirationMonth={12}
          expirationYear={2019}
          bank="Name of the Bank"
          owner="Firstname Lastname"
          bgColor="#ddbb55"
          color="white"
        />
      </div>
      <div>
        <Rating>0</Rating>
        <Rating>1.49</Rating>
        <Rating>1.5</Rating>
        <Rating>3</Rating>
        <Rating>4</Rating>
        <Rating>5</Rating>
      </div>
      <div>
        <DriverCard
          name="Travis Kalanick"
          rating={4.2}
          img="https://si.wsj.net/public/resources/images/BN-TY647_37gql_OR_20170621052140.jpg?width=620&height=428"
          car={{
            model: 'Toyota Corolla Altis',
            licensePlate: 'CO42DE',
          }}
        />

        <DriverCard
          name="Dara Khosrowshahi"
          rating={4.9}
          img="https://ubernewsroomapi.10upcdn.com/wp-content/uploads/2017/09/Dara_ELT_Newsroom_1000px.jpg"
          car={{
            model: 'Audi A3',
            licensePlate: 'BE33ER',
          }}
        />
      </div>
      <div>
        <LikeButton />
      </div>
      <div>
        <ClickablePicture
          src={src}
          // imgClicked={imgClicked}
          onClickFunction={imgClick}
        />
      </div>
      <div>
        <Dice src={dice} theFunction={rollDice} />
      </div>
      <div>
        <Carousel
          images={[
            'https://randomuser.me/api/portraits/women/1.jpg',
            'https://randomuser.me/api/portraits/men/1.jpg',
            'https://randomuser.me/api/portraits/women/2.jpg',
            'https://randomuser.me/api/portraits/men/2.jpg',
          ]}
        />
      </div>
    </div>
  );
}

export default App;
