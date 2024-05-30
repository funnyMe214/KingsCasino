// pages/game.js
import { useRouter } from 'next/router';
import Layout from '../components/Layout';
import CopyableText from '../components/CopyableText';

import { useEffect, useState } from 'react';

const IMAGES_PATH = '/images/';


const GamePage = () => {
  const router = useRouter();
  const { id } = router.query;
  const [game, setGame] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch game details using id
    const gameData = [
      {
        id: "p09x1",
        title: "Juwa",
        description: "This is the description for Game 1",
        image: "https://play-lh.googleusercontent.com/50mRyUhvVKPxSlROnZRKFDctOu_D5VwXc4c68z5yYQobyvGT6a44iLTGEiU4f4LJFFE=w526-h296-rw",
        downloadLink: "https://dl.juwa777.com/",
        "offersImage": `${IMAGES_PATH}cashtag.jpg`,
        "cashoutRulesImage": `${IMAGES_PATH}cashout.jpg`,
        "Apple_code":"Kings-casino"
      },
      {
        id: "p09x3",
        title: "Orion-star",
        description: "This is the description for Game 1",
        image: "https://i.pinimg.com/736x/48/45/b8/4845b8cbbdbc2644c78e0346c9d572da.jpg",
        downloadLink: "http://start.orionstars.vip:8580/index.html",
        offersImage: "images/cashtag.jpg",
        cashoutRulesImage: "images/cashout.jpg",
        "Apple_code":"Kings-casino"

      },
      {
        id: "p09x2",
        title: "Game-vault",
        description: "This is the description for Game 1",
        image: "https://s.cafebazaar.ir/images/upload/screenshot/com.vaultgame.gameswe-3b62adf6-b043-4e05-b564-4459e53c60ae.jpeg?x-img=v1/resize,h_600,lossless_false/optimize",
        downloadLink: "http://download.gamevault999.com/",
        offersImage: "images/cashtag.jpg",
        cashoutRulesImage: "images/cashout.jpg",
        "Apple_code":"Kings-casino"

      },
      {
        id: "p09x4",
        title: "Milky-way",
        description: "This is the description for Game 1",
        image: "https://play-lh.googleusercontent.com/ul7ehYE0C7Pc5nnNfqPVzyhyG5g4vbzhvkoW-l-5CfqM6bKZX2m8WUCAz3Z6yhdvYQ=w2560-h1440-rw",
        downloadLink: "https://milkywayapp.xyz/",
        offersImage: "images/cashtag.jpg",
        cashoutRulesImage: "images/cashout.jpg",
        "Apple_code":"Kings-casino"

      },
      {
        id: "p09x5",
        title: "Game Room",
        description: "This is the description for Game 1",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsGs3uh3oNPd56V9gpstMIpguKuaa-rm5Umj-gTy68zw&s",
        downloadLink: "http://www.gameroom777.com/",
        offersImage: "images/cashtag.jpg",
        cashoutRulesImage: "images/cashout.jpg",
        "Apple_code":"Kings-casino"

      },
      {
        id: "p09x6",
        title: "Vegas Sweep",
        description: "This is the description for Game 1",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsGs3uh3oNPd56V9gpstMIpguKuaa-rm5Umj-gTy68zw&s",
        downloadLink: "http://m.lasvegassweeps.com/",
        offersImage: "images/cashtag.jpg",
        cashoutRulesImage: "images/cashout.jpg",
        "Apple_code":"Kings-casino"

      },
      {
        id: "p09x7",
        title: "Ultra-Panda",
        description: "This is the description for Game 1",
        image: "https://play-lh.googleusercontent.com/0m07XmxeR7R6PQ68j8YEYE79LrgX9KEghojmGEzt4cY61sS57TWjHeAxzQGBmYtiJoA=w540-h302-rw",
        downloadLink: "https://www.ultrapanda.mobi/",
        offersImage: "images/cashtag.jpg",
        cashoutRulesImage: "images/cashout.jpg",
        "Apple_code":"Kings-casino"

      },
      {
        id: "p09x8",
        title: "Panda- Master",
        description: "This is the description for Game 1",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQh8SVVeCB_peOf5DfnHtaC2B0EXQJZs-7o2FB1QK97IA&s",
        downloadLink: "https://pandamaster.vip:8888/",
        offersImage: "images/cashtag.jpg",
        cashoutRulesImage: "images/cashout.jpg",
        "Apple_code":"Kings-casino"

      },
      {
        id: "p09x9",
        title: "Fire-kirin",
        description: "This is the description for Game 1",
        image: "https://img1.wsimg.com/isteam/ip/578f383c-4377-4849-81d6-35049dfe3a72/play%20firekirin%20online.jpg/:/rs=w:388,h:194,cg:true,m/cr=w:388,h:194",
        downloadLink: "https://firekirin.com/download-fire-kirin-app.html",
        offersImage: "images/cashtag.jpg",
        cashoutRulesImage: "images/cashout.jpg",
        "Apple_code":"Kings-casino"

      },
      {
        id: "p09x10",
        title: "Vb link",
        description: "This is the description for Game 1",
        image: "https://play-lh.googleusercontent.com/-3zwUwbq7OhSByFj4WyfD565J5s1LLR1BBEb3uttqz60DHy-QNskzzcIQwjtRDZohg=w540-h302-rw",
        downloadLink: "https://www.vblink777.club/",
        offersImage: "images/cashtag.jpg",
        cashoutRulesImage: "images/cashout.jpg",
        "Apple_code":"Kings-casino"

      },
      {
        id: "p09x11",
        title: "Casino ignite",
        description: "This is the description for Game 1",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShwiV5uXRkdBpvTStyewzCs4VWlkz5plImmjk42EJvPw&s",
        downloadLink: "https://download.casinoignitee.vip/",
        offersImage: "images/cashtag.jpg",
        cashoutRulesImage: "images/cashout.jpg",
        "Apple_code":"Kings-casino"

      },
    ];

    if (id) {
      const selectedGame = gameData.find(game => game.id === id);
      setGame(selectedGame);
      setLoading(false);
    }
  }, [id]);

  if (loading) return <div>Loading...</div>;
  if (!game) return <div>Game not found</div>;

  return (
    <Layout>
      <section id="game-details" className="mb-5">
        <h2 className="text-center">{game.title}</h2>
        <div className="row">
          <div className="col-md-6">
            <img id="game-image" src={game.image} alt={game.title} className="img-fluid" />
          </div>
          <div className="col-md-6">
          <p id="game-description">{game.description}</p>

          <CopyableText text={game.Apple_code} />
            <a id="game-download" href={game.downloadLink} className="btn btn-info mb-3" target="_blank" rel="noopener noreferrer">Download Game</a>
            <div className="d-grid gap-2">
              <button id="create-account " className="btn btn-primary  btn-games">Create Account</button>
              <button id="deposit"  className="btn btn-primary  btn-games">Deposit on 
              Game</button>
              <button id="cashout " className="btn btn-primary  btn-games">Cashout/Redeem</button>
            </div>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-md-6">
            <h3 className="text-center">Offers</h3>
            <img id="offers-image" src={game.offersImage} alt="Offers" className="img-fluid" />
          </div>
          <div className="col-md-6">
            <h3 className="text-center">Cashout Rules</h3>
            <img id="cashout-rules-image" src={game.cashoutRulesImage} alt="Cashout Rules" className="img-fluid" />
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default GamePage;

