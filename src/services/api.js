import axios from "axios";

const api = axios.create({
  baseURL: "https://std.bit-camp.ru",
  headers: {
    "Content-Type": "application/json",
  },
});

// Function to get contacts with optional search query
export const getContacts = async (query = "") => {
  try {
    const response = await api.get("/contacts", {
      params: { query },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching contacts:", error);
    throw error;
  }
};

export const addContact = async (newContact) => {
  try {
    const response = await api.post("/contacts", newContact);
    return response.data; // Возвращаем данные добавленного контакта
  } catch (error) {
    console.error("Error adding contact:", error);
    throw error;
  }
};

export const deleteContact = async (id) => {
  try {
    const response = await api.delete(`/contacts/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error deleting contact:", error);
    throw error;
  }
};

export default api;
