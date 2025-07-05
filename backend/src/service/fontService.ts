import { Font } from "../entity/font";
import { fontdb } from "../respository/font.db";


export class FontService {
  // Creates a new font entry in the database
  async CreateFont(font: Font) {
    const result = await fontdb.Create(font);
    return result;
  }

  // Reads font data from the database with pagination and filtering
  async ReadFont(limit: number, offset: number, filter: string[]) {
    console.log(limit, offset, filter);
    const result = await fontdb.Read(limit, offset, filter);
    return result;
  }
}


