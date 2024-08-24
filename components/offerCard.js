import CopyableText from './CopyableText';
import Image from 'next/image';
const OfferCard = ({ imageSrc, offerCode, description }) => {
  return (
    <div className="offer-card col-md-6 mb-4 mx-10">
      <div className="offer-image-container">
        <Image src={imageSrc} alt="Offer" width={526} height={296} className="offer-image img-thumbnail"/>
        <div className="copyable-text-bottom">
          <CopyableText text={offerCode} />
        </div>
      </div>
      <p className="offer-description">{description}</p>
    </div>
  );
};

export default OfferCard;
