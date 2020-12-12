var url;

if (!process.env.NODE_ENV || process.env.NODE_ENV === "development") {
  url = "http://localhost:8000/api";
} else {
  url = "https://simpledoc.utm.utoronto.ca:8000/api";
}

export const API_URL = url;
