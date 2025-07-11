import { Extension } from '@tiptap/core';

export default Extension.create({
  name: 'slash-command',

  addKeyboardShortcuts() {
    return {
      '/': () => {
        console.log('Slash key pressed');
        return true;
      },
    };
  },
});
