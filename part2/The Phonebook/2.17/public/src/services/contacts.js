import axios from "axios";

const baseUrl = "http://localhost:3001/persons";

const getAll = () => {
  return axios.get(baseUrl).then((response) => response.data);
};

const create = (newPerson) => {
  return axios.post(baseUrl, newPerson).then((response) => response.data);
};
const deleteOne = (deleteIt) => {
    
  return axios.delete(baseUrl+ '/' + deleteIt).then((response) => response.data);
};
const exported = { getAll, create, deleteOne };
export default exported;
