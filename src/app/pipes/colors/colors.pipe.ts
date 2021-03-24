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
        color = "success";
        break;
      case value === "1":
        color = "warning";
        break;
      case value === "2":
        color = "danger";
        break;
      case value === "3":
        color = "danger";
        break;
      default:
        color = "danger";
        break;
    }
    return color;
  }
}
