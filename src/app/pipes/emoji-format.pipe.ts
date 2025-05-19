import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'emojiFormat'
})
export class EmojiFormatPipe implements PipeTransform {

  transform(value: string): string {
    const emojiMap: { [key: string]: string } = {
      save: '💾 Save',
      shop: '🛒 Shop now!',
      bye: '🖐️ Bye',
      register: '✏️ Register',
      send: '📤 Send',
      login: '🔐 Login',
      logout: '🔓 Logout'
    };

    return emojiMap[value.toLowerCase()] || value;
  }
}
