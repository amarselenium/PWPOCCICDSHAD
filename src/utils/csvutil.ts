import fs from "fs";
import path from "path";
import { parse } from "csv-parse/sync";

export class readCSVFile {
    static readCSVFile(filePath: string):Record<string, string>[] {
        const fileContent = fs.readFileSync(filePath, "utf-8");
        const records: Record<string, string>[] = parse<Record<string, string>>(fileContent, {
            columns: true,
            skip_empty_lines: true,
            trim: true,
        });
        return records;
    }
}