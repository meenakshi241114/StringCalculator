export const stringCalculator = input => {
  try {
    // Replace commas with plus sign (optional based on your requirements)
    const formattedInput = input.replace(/,/g, '+');

    // Use eval() to calculate the result (be careful with eval in real applications)
    const result = eval(formattedInput);

    // Return result if valid
    if (isNaN(result)) {
      throw new Error('Invalid Expression');
    }

    return result;
  } catch (error) {
    return 'Error: Invalid Expression';
  }
};
