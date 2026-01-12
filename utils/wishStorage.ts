// Simple API endpoint to save wishes
// Note: This is a client-side only solution. In production, use a proper backend.

export const saveWishToJSON = async (wish: any) => {
  try {
    // In a real application, this would be a POST request to your backend
    // For now, we'll just log it and update localStorage as fallback
    
    const existingWishes = JSON.parse(localStorage.getItem('wedding-wishes') || '[]');
    const updatedWishes = [wish, ...existingWishes];
    localStorage.setItem('wedding-wishes', JSON.stringify(updatedWishes));
    
    console.log('Wish saved to localStorage:', wish);
    return true;
  } catch (error) {
    console.error('Failed to save wish:', error);
    return false;
  }
};

export const loadWishesFromStorage = () => {
  try {
    const stored = localStorage.getItem('wedding-wishes');
    return stored ? JSON.parse(stored) : [];
  } catch (error) {
    console.error('Failed to load wishes from storage:', error);
    return [];
  }
};