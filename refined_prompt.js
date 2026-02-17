/**
 * Converts a string to camelCase format with comprehensive error handling.
 * 
 * This function transforms various string formats into camelCase by:
 * - Splitting the input on common separators (spaces, hyphens, underscores, dots)
 * - Converting the first word to lowercase
 * - Capitalizing the first letter of each subsequent word
 * - Removing all separators and joining words together
 * 
 * The function includes robust error handling for edge cases including
 * null/undefined inputs, non-string types, and empty strings.
 * 
 * @param {string} str - The input string to convert to camelCase.
 *                       Can contain spaces, hyphens, underscores, or dots as separators.
 * @returns {string} The converted string in camelCase format.
 *                   Returns an empty string if input is empty or contains only separators.
 * 
 * @throws {Error} Throws "Input must be a non-null string" if input is null or undefined
 * @throws {Error} Throws "Input must be a string" if input is not of type string
 * 
 * @example
 * // Converting from space-separated
 * toCamelCase('first name'); // Returns 'firstName'
 * 
 * @example
 * // Converting from snake_case
 * toCamelCase('user_id'); // Returns 'userId'
 * 
 * @example
 * // Converting from SCREAMING_SNAKE_CASE
 * toCamelCase('SCREEN_NAME'); // Returns 'screenName'
 * 
 * @example
 * // Converting from kebab-case
 * toCamelCase('mobile-number'); // Returns 'mobileNumber'
 * 
 * @example
 * // Handling empty string
 * toCamelCase(''); // Returns ''
 * 
 * @example
 * // Handling multiple consecutive separators
 * toCamelCase('hello---world__test'); // Returns 'helloWorldTest'
 * 
 * @example
 * // Error handling for null input
 * toCamelCase(null); // Throws Error: "Input must be a non-null string"
 * 
 * @example
 * // Error handling for non-string input
 * toCamelCase(123); // Throws Error: "Input must be a string"
 * 
 * @see {@link toSnakeCase} for converting to snake_case
 * @see {@link toDotCase} for converting to dot.case
 */
function toCamelCase(str) {
  // Handle null and undefined
  if (str === null || str === undefined) {
    throw new Error("Input must be a non-null string");
  }
  
  // Validate input is a string
  if (typeof str !== 'string') {
    throw new Error("Input must be a string");
  }
  
  // Handle empty string
  if (str === '') {
    return '';
  }
  
  // Split by common separators (spaces, hyphens, underscores, dots)
  // and filter out empty strings from consecutive separators
  const words = str
    .split(/[\s\-_\.]+/)
    .filter(word => word.length > 0);
  
  // If no valid words after splitting, return empty string
  if (words.length === 0) {
    return '';
  }
  
  // Convert to camelCase
  return words
    .map((word, index) => {
      // Convert word to lowercase first
      const lowerWord = word.toLowerCase();
      
      // First word stays lowercase, subsequent words get capitalized
      if (index === 0) {
        return lowerWord;
      } else {
        return lowerWord.charAt(0).toUpperCase() + lowerWord.slice(1);
      }
    })
    .join('');
}

// Examples:
// toCamelCase("first name") // returns "firstName"
// toCamelCase("user_id") // returns "userId"
// toCamelCase("SCREEN_NAME") // returns "screenName"
// toCamelCase("mobile-number") // returns "mobileNumber"
// toCamelCase("") // returns ""
// toCamelCase(null) // throws Error: "Input must be a non-null string"
// toCamelCase(undefined) // throws Error: "Input must be a non-null string"
// toCamelCase(123) // throws Error: "Input must be a string"
// toCamelCase("hello---world__test") // returns "helloWorldTest"

module.exports = { toCamelCase };
