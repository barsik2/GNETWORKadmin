import * as React from 'react';
import { List, Datagrid, TextField, EditButton, Edit, Create, SimpleForm, TextInput } from 'react-admin';

export const NodesList = (props) => (
    <List {...props}>
        <Datagrid>
            <TextField source="id" />
            <TextField source="graph_id" />
            <TextField source="type" />
            <TextField source="weight" />
            <EditButton />
        </Datagrid>
    </List>
);

export const NodesEdit = (props) => (
    <Edit {...props}>
        <SimpleForm>
            <TextInput source="graph_id" />
            <TextInput source="type" />
            <TextInput source="weight" />
        </SimpleForm>
    </Edit>
);

export const NodesCreate = (props) => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="graph_id" />
            <TextInput source="type" />
            <TextInput source="weight" />
        </SimpleForm>
    </Create>
);
