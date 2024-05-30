import Layout from '../components/Layout';
import OfferCard from '../components/offerCard';

function Offers() {
    // Define offer data directly within the component
    const offersData = [
        {
            id: 1,
            image: 'https://img.freepik.com/premium-vector/dialog-casino-slots-games-game-interfaces-podium-special-offer-pop_474577-32.jpg',
            offerCode: 'OFFER123',
            description: 'Get 20% off on your first purchase!',
        },
        {
            id: 2,
            image: 'https://static.casino.guru/pict/42583/Golden-Offer.jpg?timestamp=1653388088000&width=838&imageDataId=14890',
            offerCode: 'DEAL456',
            description: 'Buy one, get one free on select items.',
        },
        {
            id: 3,
            image: 'https://www.keytocasinos.com/uploads/media/default/0001/29/thumb_28403_default_big.png',
            offerCode: 'SAVE789',
            description: 'Save $10 on orders over $50.',
        },
    ];

    return (
        <Layout>
            <div className="offers min-vh-100">
                <h1>Special Offers</h1>
                <div className="row  col-md-8">

                {offersData.map((offer) => (

                    <OfferCard
                        key={offer.id}
                        imageSrc={offer.image}
                        offerCode={offer.offerCode}
                        description={offer.description} />

                ))}
                                                    </div>

            </div>
        </Layout>
    );
}

export default Offers;
