export default function VerifyDocModal({ setDocMeta, closeModal }) {
  const handleVerify = (expiresAt) => {
    setDocMeta(prev => ({
      ...prev,
      isVerified: true,
      verifiedBy: 'admin',
      verifiedAt: new Date(),
      expiresAt,
    }));
    closeModal();
  };

  return (
    <div className="modal">
      <h3>✅ Verify Document</h3>
      <button onClick={() => handleVerify(null)}>Never Expires</button>
      <input
        type="date"
        onChange={e => handleVerify(new Date(e.target.value))}
      />
      <button onClick={closeModal}>Cancel</button>
    </div>
  );
}
