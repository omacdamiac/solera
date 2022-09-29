export namespace InputNsModel {
  export interface InputInt {
    text: string;
    place: string;
    required: boolean;
    name: string;
    type: string;
  }
  /**
        @param text: string
        @param place: string
        @param required: boolean
        @param name: string
        @param type: string
     */

  export class InputClass {
    text: string;
    place: string;
    required: boolean;
    name: string;
    type: string;

    constructor(
      textp: string,
      placep: string,
      required: boolean,
      namep: string,
      typep: string
    ) {
      this.text = textp;
      this.place = placep;
      this.required = required;
      this.name = namep;
      this.type = typep;
    }
  }
}
