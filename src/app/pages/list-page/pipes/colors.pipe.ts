import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "colors",
  pure: true
})
export class ColorsPipe implements PipeTransform {
  transform(value: string): string {
    let color: string;

    switch (true) {
      case value === "0":
        console.log("value", value);
        color = "#2dd36f";
        break;
      case value === "1":
        color = "#2dd36f";
        break;
      case value === "2":
        color = "#ffc409";
        break;
      case value === "3":
        color = "#eb445a";
        break;
      default:
        color = "#eb445a";
        break;
    }
    return color;
  }
}
