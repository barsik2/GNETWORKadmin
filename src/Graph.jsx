import * as React from 'react';
import { List, Datagrid, TextField, EditButton, Edit, Create, SimpleForm, TextInput } from 'react-admin';

export const GraphsList = (props) => (
    <List {...props}>
        <Datagrid>
            <TextField source="id" />
            <TextField source="name" />
            <TextField source="user_id" />
            <EditButton />
        </Datagrid>
    </List>
);

export const GraphsEdit = (props) => (
    <Edit {...props}>
        <SimpleForm>
            <TextInput source="name" />
            <TextInput source="user_id" />
        </SimpleForm>
    </Edit>
);

export const GraphsCreate = (props) => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="name" />
            <TextInput source="user_id" />
        </SimpleForm>
    </Create>
);
