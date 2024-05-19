import {
  Admin,
  Resource,
  ListGuesser,
  EditGuesser,
  ShowGuesser,
} from "react-admin";
import dataProvider from "./dataProvider";
import { GraphsList, GraphsEdit, GraphsCreate } from "./Graph";
import { UsersList, UsersEdit, UsersCreate } from "./Users";
import { NodesCreate, NodesEdit, NodesList } from "./Nodes";
import { EdgesCreate, EdgesEdit, EdgesList } from "./Edges";

export const App = () => <Admin dataProvider={dataProvider}>
  <Resource name="graphs" list={GraphsList} edit={GraphsEdit} create={GraphsCreate} />
  <Resource name="users" list={UsersList} edit={UsersEdit} create={UsersCreate} />
  <Resource name="nodes" list={NodesList} edit={NodesEdit} create={NodesCreate} />
  <Resource name="edges" list={EdgesList} edit={EdgesEdit} create={EdgesCreate} />
</Admin>;
