export namespace ButtonNsModel {
  export interface ButtonInt {
    texto: string;
    color: string;
  }
  /**
      @param texto: string
      @param color: string
    */

  export class ButtonClass {
    texto: string;
    color: string;

    constructor(textop: string, colorp: string) {
      this.texto = textop;
      this.color = colorp;
    }
  }
}
