import { Pipe, PipeTransform } from "@angular/core";
import { CONSTANTES } from "../../config/constantes.config";

@Pipe({
  name: "defaultImage",
  pure: true,
})
export class DefaultImagePipe implements PipeTransform {
  transform(path: string): string {
    console.log("applying pipe on ", path);

    return path.trim() ? path : CONSTANTES.defaultImage;
  }
}
