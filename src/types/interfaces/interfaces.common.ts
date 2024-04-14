// Interface for custom class ApiError
export interface ApiError extends Error {
  success: boolean;
  message: string;
  statusCode: number;
  data: [] | {};
}

// Example User interface
export interface User {
  name: string;
}

export interface AppContext {
  // You can optionally create a TS interface to set up types
  // for your contextValue
  authorized?: boolean;
}