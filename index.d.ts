export interface IOptions {
  typeNumber?: number;
  errorCorrectLevel?: "H" | "Q" | "M" | "L";
  size?: number;
  /**
   * 二维码背景色，格式 #ffffff
   */
  backgroundColor?: string;
  /**
   * 二维码前景色，格式 #ffffff
   * 指方块的颜色
   */
  foregroundColor?: string;
  /**
   * 二维码白边宽度
   */
  codePadding?: number;
}
export function drawImg(text: string, options: IOptions): string;
