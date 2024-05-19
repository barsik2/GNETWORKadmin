import {
  Admin,
  Resource,
  ListGuesser,
  EditGuesser,
  ShowGuesser,
} from "react-admin";
import simpleRestProvider from 'ra-data-simple-rest';
import { UserList } from "./users";

const dataProvider = simpleRestProvider('http://localhost:5000');

export const App = () => <Admin dataProvider={dataProvider}>
  <Resource name="users" list={UserList} />
</Admin>;
