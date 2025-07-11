import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import SlashCommand from '../extensions/SlashCommand';
import Toolbar from './Toolbar';
import DocStatusPanel from './DocStatusPanel';
import { useState } from 'react';

export default function Editor() {
  const [docMeta, setDocMeta] = useState({
    locked: false,
    isVerified: false,
    isPublic: false,
    verifiedBy: '',
    verifiedAt: null,
    expiresAt: null,
  });

  const editor = useEditor({
    editable: !docMeta.locked,
    extensions: [
      StarterKit,
      SlashCommand,
    ],
    content: '<p>Type <code>/</code> for commands or use the toolbar.</p>',
  });

  return (
    <div>
      <DocStatusPanel docMeta={docMeta} setDocMeta={setDocMeta} editor={editor} />
      <Toolbar editor={editor} />
      <EditorContent editor={editor} className="editor-box" />
    </div>
  );
}
