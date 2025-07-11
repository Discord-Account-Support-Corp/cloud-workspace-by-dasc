import { useState } from 'react';
import VerifyDocModal from './VerifyDocModal';

export default function DocStatusPanel({ docMeta, setDocMeta, editor }) {
  const [showVerifyModal, setShowVerifyModal] = useState(false);

  return (
    <div className="doc-status">
      <label>
        <input
          type="checkbox"
          checked={docMeta.locked}
          onChange={() => {
            setDocMeta(prev => {
              editor?.setEditable(prev.locked);
              return { ...prev, locked: !prev.locked };
            });
          }}
        />
        🔒 Lock Page
      </label>

      <label>
        <input
          type="checkbox"
          checked={docMeta.isPublic}
          onChange={() => setDocMeta(prev => ({ ...prev, isPublic: !prev.isPublic }))}
        />
        🌐 Public Share
      </label>

      <button onClick={() => setShowVerifyModal(true)}>✅ Verify Doc</button>

      {showVerifyModal && (
        <VerifyDocModal
          setDocMeta={setDocMeta}
          closeModal={() => setShowVerifyModal(false)}
        />
      )}
    </div>
  );
}
