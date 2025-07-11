import React from 'react';

export default function Toolbar({ editor }) {
  if (!editor) return null;

  // 🔗 Copy Link to Highlight function
  function copyLinkToHighlight() {
    const selection = window.getSelection();
    const selectedText = selection?.toString().trim();

    if (!selectedText) {
      alert('❗ Please highlight some text first.');
      return;
    }

    const encoded = encodeURIComponent(selectedText);
    const fragmentUrl = `${window.location.origin}${window.location.pathname}#:~:text=${encoded}`;

    navigator.clipboard.writeText(fragmentUrl).then(() => {
      alert('🔗 Link to highlight copied to clipboard!');
    }).catch(err => {
      console.error('Clipboard copy failed:', err);
      alert('⚠️ Could not copy to clipboard.');
    });
  }

  return (
    <div className="toolbar">
      <button onClick={() => editor.chain().focus().toggleBold().run()}><b>B</b></button>
      <button onClick={() => editor.chain().focus().toggleItalic().run()}><i>I</i></button>
      <button onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}>H2</button>
      <button onClick={() => editor.chain().focus().toggleBulletList().run()}>• List</button>
      <button onClick={() => editor.chain().focus().toggleCodeBlock().run()}>{"</>"}</button>
      <button onClick={copyLinkToHighlight}>🔗 Copy Link</button>
    </div>
  );
}
