// pages/index.js
import Layout from '../components/Layout';
import Link from 'next/link';
import Image from 'next/image'; // Import Image component

const Home = () => {
  return (
    <Layout>
      <section className="games-section min-vh-100">
        <h2 className="text-center">Our Games</h2>
        <div className="row">
          {/* Repeat this block for each game */}
          <div className="col-md-4 mb-4">
            <div className="card" id="p09x1">
              <Link href="/game?id=p09x1">
              <a>
                <Image src="https://play-lh.googleusercontent.com/50mRyUhvVKPxSlROnZRKFDctOu_D5VwXc4c68z5yYQobyvGT6a44iLTGEiU4f4LJFFE=w526-h296-rw" className="card-img-top" alt="Juwa" width={526} height={296}/>
                <div className="card-body">
                  <h5 className="card-title">Juwa</h5>
                </div>
              </a>
              </Link>
            </div>
          </div>
          <div className="col-md-4 mb-4">
                    <div className="card" id="p09x2">
                        <Link href="/game?id=p09x2">
    <a>
                        <Image src="https://s.cafebazaar.ir/images/upload/screenshot/com.vaultgame.gameswe-3b62adf6-b043-4e05-b564-4459e53c60ae.jpeg?x-img=v1/resize,h_600,lossless_false/optimize" width={526} height={296} className="card-img-top" alt="Game Vault" id="game-image"/>
                        <div className="card-body">
                            <h5 className="card-title" >Game Vault</h5>
                        </div>
                        </a>
    </Link>
                    </div>
                </div>
                <div className="col-md-4 mb-4">
                    <div className="card" id="p09x3">
                        <Link href="/game?id=p09x3">
    <a>
                        <Image src="https://i.pinimg.com/736x/48/45/b8/4845b8cbbdbc2644c78e0346c9d572da.jpg" className="card-img-top" alt="Orion star" id="game-image"/>
                        <div className="card-body">
                            <h5 className="card-title" >Orion Star 777</h5>
                        </div>
                        </a>
    </Link>
                    </div>
                </div>
                <div className="col-md-4 mb-4">
                    <div className="card" id="p09x4">
                        <Link href="/game?id=p09x4">
    <a>
                        <Image src="https://play-lh.googleusercontent.com/ul7ehYE0C7Pc5nnNfqPVzyhyG5g4vbzhvkoW-l-5CfqM6bKZX2m8WUCAz3Z6yhdvYQ=w2560-h1440-rw" width={526} height={296} className="card-img-top" alt="Milkyway" id="game-image"/>
                        <div className="card-body">
                            <h5 className="card-title" >Milky way </h5>
                        </div>
                        </a>
    </Link>
                    </div>
                </div>
                <div className="col-md-4 mb-4">
                    <div className="card" id="p09x5">
                        <Link href="/game?id=p09x5">
    <a>
                        <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4fYNOk5pwRa8AQWjTXPMp1hTJ-zEv4ViKKiJB1FDpvA&s" width={526} height={296} className="card-img-top" alt="Game Room" id="game-image"/>
                        <div className="card-body">
                            <h5 className="card-title" >Game Room</h5>
                        </div>
                        </a>
    </Link>
                    </div>
                </div>

    
                <div className="col-md-4 mb-4">
                    <div className="card" id="p09x11">
                        <Link href="/game?id=p09x11">
    <a>
                        <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1A7KGDhhQzT47LKcXZUWvoQZUTam9-OXf5Q&s" width={526} height={296} className="card-img-top" alt="Game Room" id="game-image"/>
                        <div className="card-body">
                            <h5 className="card-title" >Cash Machine</h5>
                        </div>
                        </a>
    </Link>
                    </div>
                </div>
    
                <div className="col-md-4 mb-4">
                    <div className="card" id="p09x6">
                        <Link href="/game?id=p09x6">
    <a>
                        <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsGs3uh3oNPd56V9gpstMIpguKuaa-rm5Umj-gTy68zw&s" width={526} height={296} className="card-img-top" alt="Vegas Sweep" id="game-image"/>
                        <div className="card-body">
                            <h5 className="card-title" >Vegas sweep</h5>
                        </div>
                        </a>
    </Link>
                    </div>
                </div>
                <div className="col-md-4 mb-4">
                    <div className="card" id="p09x7">
                        <Link href="/game?id=p09x7">
    <a>
                        <Image src="https://play-lh.googleusercontent.com/0m07XmxeR7R6PQ68j8YEYE79LrgX9KEghojmGEzt4cY61sS57TWjHeAxzQGBmYtiJoA=w540-h302-rw" width={526} height={296} className="card-img-top" alt="Ultra panda" id="game-image"/>
                        <div className="card-body">
                            <h5 className="card-title" >Ultra Panda</h5>
                        </div>
                        </a>
    </Link>
                    </div>
                </div>
                <div className="col-md-4 mb-4">
                    <div className="card" id="p09x8">
                        <Link href="/game?id=p09x8">
    <a>
                        <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQh8SVVeCB_peOf5DfnHtaC2B0EXQJZs-7o2FB1QK97IA&s" width={526} height={296} className="card-img-top" alt="Panda Master" id="game-image"/>
                        <div className="card-body">
                            <h5 className="card-title" >Pandamaster</h5>
                        </div>
                        </a>
    </Link>
                    </div>
                </div>
                
                <div className="col-md-4 mb-4">
                    <div className="card" id="p09x9">
                        <Link href="/game?id=p09x9">
    <a>
                        <Image src="https://img1.wsimg.com/isteam/ip/578f383c-4377-4849-81d6-35049dfe3a72/play%20firekirin%20online.jpg/:/rs=w:388,h:194,cg:true,m/cr=w:388,h:194" width={526} height={296} className="card-img-top" alt="Fire Kirin" id="game-image"/>
                        <div className="card-body">
                            <h5 className="card-title" >Fire Kirin</h5>
                        </div>
                        </a>
    </Link>
                    </div>
                </div>

                <div className="col-md-4 mb-4">
                    <div className="card" id="p09x10">
                        <Link href="/game?id=p09x10">
    <a>
                        <Image src="https://play-lh.googleusercontent.com/-3zwUwbq7OhSByFj4WyfD565J5s1LLR1BBEb3uttqz60DHy-QNskzzcIQwjtRDZohg=w540-h302-rw" width={526} height={296} className="card-img-top" alt="Vb link" id="game-image"/>
                        <div className="card-body">
                            <h5 className="card-title" >Vb link</h5>
                        </div>
                        </a>
    </Link>
                    </div>
                </div>
                <div className="col-md-4 mb-4">
                    <div className="card" id="p09x11">
                        <Link href="/game?id=p09x11">
    <a>
                        <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShwiV5uXRkdBpvTStyewzCs4VWlkz5plImmjk42EJvPw&s" width={526} height={296} className="card-img-top" alt="Casino ignite" id="game-image"/>
                        <div className="card-body">
                            <h5 className="card-title" >Casino ignite</h5>
                        </div>
                        </a>
    </Link>
                    </div>
                </div>


          
          
        </div>
      </section>
      <section className="countdown-section mt-5">
        <h2 className="text-center">Stats</h2>
        <div className="row text-center">
          <div className="col-md-4 mb-4">
            <div className="card">
              <div className="card-body">
                <h3 className="card-title">Cashouts Made Today</h3>
                <p id="cashouts-today" className="card-text">0</p>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card">
              <div className="card-body">
                <h3 className="card-title">Players with Us</h3>
                <p id="players-count" className="card-text">0</p>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card">
              <div className="card-body">
                <h3 className="card-title">Total Cashouts</h3>
                <p id="total-cashouts" className="card-text">0</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Home;
