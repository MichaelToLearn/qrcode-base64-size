export interface IOptions {
  typeNumber?: number;
  errorCorrectLevel?: 'H' | 'Q' | 'M' | 'L';
  size?: number;
  backgroundColor?: string;
  foregroundColor?: string;
}
export function drawImg(text: string, options: IOptions): string;