// pages/game.js
import { useRouter } from 'next/router';
import Layout from '../components/Layout';
import CopyableText from '../components/CopyableText';
import Image from 'next/image'; // Import Image component

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
        description: "Create player account, Recharge , Reedem. Copy player link below.",
        image: "https://play-lh.googleusercontent.com/50mRyUhvVKPxSlROnZRKFDctOu_D5VwXc4c68z5yYQobyvGT6a44iLTGEiU4f4LJFFE=w526-h296-rw",
        downloadLink: "https://ht.juwa777.com/userManagement",
        "offersImage": `${IMAGES_PATH}cashtag.jpg`,
        "cashoutRulesImage": `${IMAGES_PATH}cashout.jpg`,
        "Apple_code":"https://dl.juwa777.com/"
      },
      {
        id: "p09x3",
        title: "Orion-star",
        description: "Create player account, Recharge , Reedem. Copy player link below.",
        image: "https://i.pinimg.com/736x/48/45/b8/4845b8cbbdbc2644c78e0346c9d572da.jpg",
        downloadLink: "https://orionstars.vip:8781/Cashier.aspx",
        offersImage: "images/cashtag.jpg",
        cashoutRulesImage: "images/cashout.jpg",
        "Apple_code":"http://start.orionstars.vip:8580/index.html"

      },
      {
        id: "p09x2",
        title: "Game-vault",
        description: "Create player account, Recharge , Reedem.Copy player link below.",
        image: "https://s.cafebazaar.ir/images/upload/screenshot/com.vaultgame.gameswe-3b62adf6-b043-4e05-b564-4459e53c60ae.jpeg?x-img=v1/resize,h_600,lossless_false/optimize",
        downloadLink: "https://agent.gamevault999.com/userManagement",
        offersImage: "images/cashtag.jpg",
        cashoutRulesImage: "images/cashout.jpg",
        "Apple_code":"http://download.gamevault999.com/"

      },
      {
        id: "p09x4",
        title: "Milky-way",
        description: "Create player account, Recharge , Reedem.Copy player link below.",
        image: "https://play-lh.googleusercontent.com/ul7ehYE0C7Pc5nnNfqPVzyhyG5g4vbzhvkoW-l-5CfqM6bKZX2m8WUCAz3Z6yhdvYQ=w2560-h1440-rw",
        downloadLink: "https://milkywayapp.xyz:8781/Store.aspx",
        offersImage: "images/cashtag.jpg",
        cashoutRulesImage: "images/cashout.jpg",
        "Apple_code":"https://milkywayapp.xyz/"

      },
      {
        id: "p09x5",
        title: "Game Room",
        description: "Create player account, Recharge , Reedem.Copy player link below.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsGs3uh3oNPd56V9gpstMIpguKuaa-rm5Umj-gTy68zw&s",
        downloadLink: "https://agentserver1.gameroom777.com/admin",
        offersImage: "images/cashtag.jpg",
        cashoutRulesImage: "images/cashout.jpg",
        "Apple_code":"http://www.gameroom777.com/"

      },
      {
        id: "p09x11",
        title: "Cash Machine",
        description: "Create player account, Recharge , Reedem.Copy player link below.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1A7KGDhhQzT47LKcXZUWvoQZUTam9-OXf5Q&s",
        downloadLink: "http://agentserver.cashmachine777.com:8003/admin",
        offersImage: "images/cashtag.jpg",
        cashoutRulesImage: "images/cashout.jpg",
        "Apple_code":" http://www.cashmachine777.com"

      },
      {
        id: "p09x6",
        title: "Vegas Sweep",
        description: "Create player account, Recharge , Reedem.Copy player link below.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsGs3uh3oNPd56V9gpstMIpguKuaa-rm5Umj-gTy68zw&s",
        downloadLink: " http://agent.lasvegassweeps.com/adminList",
        offersImage: "images/cashtag.jpg",
        cashoutRulesImage: "images/cashout.jpg",
        "Apple_code":"http://m.lasvegassweeps.com/"

      },
      {
        id: "p09x7",
        title: "Ultra-Panda",
        description: "Create player account, Recharge , Reedem.Copy player link below.",
        image: "https://play-lh.googleusercontent.com/0m07XmxeR7R6PQ68j8YEYE79LrgX9KEghojmGEzt4cY61sS57TWjHeAxzQGBmYtiJoA=w540-h302-rw",
        downloadLink: "https://ht.ultrapanda.mobi/#/manage-user/account",
        offersImage: "images/cashtag.jpg",
        cashoutRulesImage: "images/cashout.jpg",
        "Apple_code":"https://www.ultrapanda.mobi/"

      },
      {
        id: "p09x8",
        title: "Panda- Master",
        description: "Create player account, Recharge , Reedem. Copy player link below.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQh8SVVeCB_peOf5DfnHtaC2B0EXQJZs-7o2FB1QK97IA&s",
        downloadLink: "https://pandamaster.vip/Agent.aspx",
        offersImage: "images/cashtag.jpg",
        cashoutRulesImage: "images/cashout.jpg",
        "Apple_code":"https://pandamaster.vip:8888/"

      },
      {
        id: "p09x9",
        title: "Fire-kirin",
        description: "Create player account, Recharge , Reedem. Copy player link below.",
        image: "https://img1.wsimg.com/isteam/ip/578f383c-4377-4849-81d6-35049dfe3a72/play%20firekirin%20online.jpg/:/rs=w:388,h:194,cg:true,m/cr=w:388,h:194",
        downloadLink: "https://firekirin.xyz:8888",
        offersImage: "images/cashtag.jpg",
        cashoutRulesImage: "images/cashout.jpg",
        "Apple_code":"https://firekirin.com/download-fire-kirin-app.html"

      },
      {
        id: "p09x10",
        title: "Vb link",
        description: "Create player account, Recharge , Reedem. Copy player link below.",
        image: "https://play-lh.googleusercontent.com/-3zwUwbq7OhSByFj4WyfD565J5s1LLR1BBEb3uttqz60DHy-QNskzzcIQwjtRDZohg=w540-h302-rw",
        downloadLink: "https://gm.vblink777.club/#/manage-user/account",
        offersImage: "images/cashtag.jpg",
        cashoutRulesImage: "images/cashout.jpg",
        "Apple_code":"https://www.vblink777.club/"

      },
      {
        id: "p09x11",
        title: "Casino ignite",
        description: "Create player account, Recharge , Reedem. Copy player link below.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShwiV5uXRkdBpvTStyewzCs4VWlkz5plImmjk42EJvPw&s",
        downloadLink: "https://download.casinoignitee.vip/",
        offersImage: "images/cashtag.jpg",
        cashoutRulesImage: "images/cashout.jpg",
        "Apple_code":"https://download.casinoignitee.vip/"

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
        <Image id="game-image" src={game.image} alt={game.title} layout="responsive" width={600} height={300} />


          </div>
          <div className="col-md-6">
         <p id="game-description">{game.description}</p>



          <CopyableText text={game.Apple_code} />
            <div className="d-grid gap-2">
             
                          <a id="game-download" href={game.downloadLink} className="btn btn-info mb-3" target="_blank" rel="noopener noreferrer">Login to Game</a>


            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default GamePage;

