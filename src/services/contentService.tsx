
import { PLACEHOLDER_API_URL } from '../constants';
import { UserProfile } from '../types';

export const fetchUserProfile = async (userId: number): Promise<UserProfile> => {
  const response = await fetch(`${PLACEHOLDER_API_URL}/users/${userId}`);
  if (!response.ok) {
    throw new Error(`Failed to fetch user profile: ${response.statusText}`);
  }
  return response.json() as Promise<UserProfile>;
};
    
