import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'emojiFormat'
})
export class EmojiFormatPipe implements PipeTransform {

  transform(value: string): string {
    const emojiMap: { [key: string]: string } = {
      save: '💾 Save',
      delete: '🗑️ Delete',
      register: '✏️ Register',
      send: '📤 Send',
      cancel: '❌ Cancel',
      login: '🔐 Login',
      logout: '🔓 Logout'
    };

    return emojiMap[value.toLowerCase()] || value;
  }
}
