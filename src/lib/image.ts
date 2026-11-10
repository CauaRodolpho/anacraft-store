export function validateImage(file: { type: string; size: number }): string {
  if (!['image/jpeg', 'image/png', 'image/webp'].includes(file.type)) {
    return 'Escolha uma foto JPG, PNG ou WebP.';
  }
  if (file.size === 0 || file.size > 2 * 1024 * 1024) {
    return 'Escolha uma imagem válida de até 2 MB.';
  }
  return '';
}
