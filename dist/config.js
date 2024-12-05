"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
/**
 * Loads environment variables from a `.env` file depending on the environment.
 * If the environment is `development`, it loads a specific `.env` file for the development environment.
 *
 * The `dotenv.config()` method is used to load the environment variables from the appropriate file into `process.env`.
 *
 * @see https://www.npmjs.com/package/dotenv
 */
if (process.env.NODE_ENV === 'development') {
    /**
     * Configuration options for loading environment variables from a specific `.env` file.
     * The path is dynamically set based on the current `NODE_ENV` (in this case, `.env.development`).
     *
     * @type {dotenv.DotenvConfigOptions}
     */
    const options = { path: `.env.${process.env.NODE_ENV}` };
    // Load environment variables from the specified `.env` file
    dotenv_1.default.config(options);
}
