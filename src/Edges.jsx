import * as React from 'react';
import { List, Datagrid, TextField, EditButton, Edit, Create, SimpleForm, TextInput } from 'react-admin';

export const EdgesList = (props) => (
    <List {...props}>
        <Datagrid>
            <TextField source="id" />
            <TextField source="graph_id" />
            <TextField source="node1_id" />
            <TextField source="node2_id" />
            <TextField source="weight" />
            <TextField source="Por" />
            <TextField source="Pt" />
            <TextField source="Pv" />
            <EditButton />
        </Datagrid>
    </List>
);

export const EdgesEdit = (props) => (
    <Edit {...props}>
        <SimpleForm>
            <TextInput source="node1_id" />
            <TextInput source="node2_id" />
            <TextInput source="weight" />
            <TextInput source="Por" />
            <TextInput source="Pt" />
            <TextInput source="Pv" />
        </SimpleForm>
    </Edit>
);

export const EdgesCreate = (props) => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="graph_id" />
            <TextInput source="node1_id" />
            <TextInput source="node2_id" />
            <TextInput source="weight" />
            <TextInput source="Por" />
            <TextInput source="Pt" />
            <TextInput source="Pv" />
        </SimpleForm>
    </Create>
);
