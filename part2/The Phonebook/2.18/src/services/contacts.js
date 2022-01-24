import axios from "axios";

const baseUrl = "http://localhost:3001/persons";

const getAll = () => {
  return axios.get(baseUrl).then((response) => response.data);
};

const create = (newPerson) => {
  return axios.post(baseUrl, newPerson).then((response) => response.data);
};
const deleteOne = (deleteIt) => {
  return axios
    .delete(baseUrl + "/" + deleteIt)
    .then((response) => response.data);
};
const updateOne = (updating, persons) => {
  const finded = persons.find((person) => updating.name === person.name);
  return axios
    .put(`${baseUrl}/${finded.id}`, updating)
    .then((response) => response.data);
};
const exported = { getAll, create, deleteOne, updateOne };
export default exported;
