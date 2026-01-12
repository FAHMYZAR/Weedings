// XSS Protection utility
export const sanitizeInput = (input: string): string => {
  return input
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;')
    .replace(/\//g, '&#x2F;')
    .trim();
};

export const validateInput = (name: string, message: string): boolean => {
  // Check for minimum length
  if (name.length < 2 || message.length < 5) return false;
  
  // Check for maximum length
  if (name.length > 50 || message.length > 500) return false;
  
  // Check for suspicious patterns
  const suspiciousPatterns = [
    /<script/i,
    /javascript:/i,
    /on\w+=/i,
    /<iframe/i,
    /<object/i,
    /<embed/i,
    /eval\(/i,
    /expression\(/i
  ];
  
  const combinedText = name + ' ' + message;
  return !suspiciousPatterns.some(pattern => pattern.test(combinedText));
};