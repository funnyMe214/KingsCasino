import CopyableText from './CopyableText';

const OfferCard = ({ imageSrc, offerCode, description }) => {
  return (
    <div className="offer-card col-md-6 mb-4 mx-10">
      <div className="offer-image-container">
        <img src={imageSrc} alt="Offer" className="offer-image img-thumbnail"/>
        <div className="copyable-text-bottom">
          <CopyableText text={offerCode} />
        </div>
      </div>
      <p className="offer-description">{description}</p>
    </div>
  );
};

export default OfferCard;
