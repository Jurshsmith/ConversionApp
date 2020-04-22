
export const apiUrl = process.env.NODE_ENV === "development"? "http://localhost:3000" : "http://localhost:3000";

export const baseUrl = "api/v1";

export const conversionUrl = `${baseUrl}/convert`;