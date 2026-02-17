/**
 * CHAIN PROMPT EXAMPLE: Building a toKebabCase function step by step
 * 
 * This file demonstrates the chain prompting technique, where we break down
 * a complex task into sequential steps that build upon each other.
 * 
 * ============================================================================
 * STEP 1: Create the basic function structure
 * ============================================================================
 * 
 * Create a JavaScript function called toKebabCase that takes a string parameter
 * and returns the string converted to kebab-case format. The function should:
 * - Accept a string input
 * - Convert the string to lowercase
 * - Replace spaces with hyphens
 * - Return the result
 * 
 * Example: toKebabCase("Hello World") should return "hello-world"
 * 
 * ============================================================================
 * STEP 2: Enhance to handle multiple input formats
 * ============================================================================
 * 
 * Now enhance the toKebabCase function to handle different input formats:
 * - camelCase strings (e.g., "helloWorld" → "hello-world")
 * - snake_case strings (e.g., "hello_world" → "hello-world")
 * - PascalCase strings (e.g., "HelloWorld" → "hello-world")
 * - Strings with multiple separators (e.g., "hello___world" → "hello-world")
 * 
 * The function should detect uppercase letters and insert hyphens before them,
 * replace all underscores and dots with hyphens, and handle multiple consecutive
 * separators by collapsing them into a single hyphen.
 * 
 * Examples:
 * toKebabCase("firstName") should return "first-name"
 * toKebabCase("user_id") should return "user-id"
 * toKebabCase("SCREEN_NAME") should return "screen-name"
 * 
 * ============================================================================
 * STEP 3: Add comprehensive error handling and edge cases
 * ============================================================================
 * 
 * Finally, add robust error handling and edge case management to toKebabCase:
 * - Validate that the input is a string (throw error if not)
 * - Handle null and undefined inputs (throw error with descriptive message)
 * - Handle empty strings (return empty string)
 * - Handle strings with only separators (return empty string)
 * - Add JSDoc documentation with parameter types, return type, and examples
 * 
 * Error handling requirements:
 * - toKebabCase(null) should throw Error: "Input must be a non-null string"
 * - toKebabCase(undefined) should throw Error: "Input must be a non-null string"
 * - toKebabCase(123) should throw Error: "Input must be a string"
 * - toKebabCase("") should return ""
 * - toKebabCase("---___") should return ""
 * 
 * Add comprehensive JSDoc documentation including:
 * - Function description
 * - @param with type and description
 * - @returns with type and description
 * - @throws for each error condition
 * - @example tags showing various use cases
 */
