import { off } from "process";
import AppDataSource from "../data-source.js";
import { Font } from "../entity/font.js";

const respository = AppDataSource.getRepository(Font);

// Font database class for managing font data
export class fontdb {
  // Creates a new font entry in the database
  static async Create(font: Font) {
    const result = await respository.save(font);
    console.log(result);
    return result;
  }

  // Reads font data from the database with pagination and filtering
  static async Read(limit: number, offset: number, filter: string[]) {
    const db = await respository.createQueryBuilder("font");
    if (filter.length > 0) {
      console.log(filter);
    }

    console.log(limit, offset);
    const result = await db.limit(limit).offset(offset).getMany();
    console.log(result);
    return result;
  }
}


