import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopy } from '@fortawesome/free-solid-svg-icons';

const CopyableText = ({ text }) => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000); // Reset copied state after 2 seconds
    } catch (error) {
      console.error('Failed to copy:', error);
    }
  };

  return (
    <div className="copyable-text">
      <div className="input-group">
        <input
          type="text"
          className="form-control"
          value={text}
          readOnly
        />
        <button
          className="btn btn-outline-secondary"
          type="button"
          onClick={copyToClipboard}
          disabled={copied}
        >
          <FontAwesomeIcon icon={faCopy} />
        </button>
      </div>
      {copied && <span className="copied-message">Copied!</span>}
    </div>
  );
};

export default CopyableText;
