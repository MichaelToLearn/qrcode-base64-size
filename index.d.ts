export interface IOptions {
  typeNumber?: number;
  errorCorrectLevel?: 'H' | 'Q' | 'M' | 'L';
  size?: number;
}
export function drawImg(text: string, options: IOptions): string;