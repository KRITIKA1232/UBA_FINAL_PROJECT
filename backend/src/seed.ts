import "reflect-metadata";
import { readdir, readFile } from "fs/promises";
import { join } from "path";
import AppDataSource from "./data-source.js";
import { Font } from "./entity/font.js";

async function seedFonts() {
  try {
    // Initialize database connection
    await AppDataSource.initialize();
    console.log("Database connection established");

    // Get the font repository
    const fontRepository = AppDataSource.getRepository(Font);

    // Path to your downloaded fonts directory
    // Update this path to where you have downloaded your Google fonts
    const fontsDirectory = join(process.cwd(), "fonts");
    
    try {
      const fontFiles = await readdir(fontsDirectory);
      console.log(`Found ${fontFiles.length} font files`);

      for (const fileName of fontFiles) {
        // Skip non-font files
        if (!fileName.match(/\.(ttf|otf|woff|woff2)$/i)) {
          continue;
        }

        // Extract font name from filename (remove extension)
        const fontName = fileName.replace(/\.(ttf|otf|woff|woff2)$/i, "");

        // Check if font already exists
        const existingFont = await fontRepository.findOne({
          where: { name: fontName }
        });

        if (!existingFont) {
          // Create new font record
          const font = new Font();
          font.name = fontName;
          font.fileName = fileName;

          await fontRepository.save(font);
          console.log(`Added font: ${fontName}`);
        } else {
          console.log(`Font already exists: ${fontName}`);
        }
      }

      console.log("Font seeding completed successfully!");
    } catch (error) {
      console.error("Error reading fonts directory:", error);
      console.log("Please make sure you have a 'fonts' directory in the backend folder with your downloaded Google fonts.");
      console.log("You can also manually add fonts using the API endpoints.");
    }

  } catch (error) {
    console.error("Error during seeding:", error);
  } finally {
    await AppDataSource.destroy();
  }
}

// Run the seed function
seedFonts(); 