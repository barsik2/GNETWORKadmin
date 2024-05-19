import * as React from 'react';
import { List, Datagrid, TextField, EditButton, Edit, Create, SimpleForm, TextInput } from 'react-admin';

export const UsersList = (props) => (
    <List {...props}>
        <Datagrid>
            <TextField source="id" />
            <TextField source="username" />
            <TextField source="password" />
            <EditButton />
        </Datagrid>
    </List>
);

export const UsersEdit = (props) => (
    <Edit {...props}>
        <SimpleForm>
        <TextInput source="username" />
            <TextInput source="password" />
        </SimpleForm>
    </Edit>
);

export const UsersCreate = (props) => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="username" />
            <TextInput source="password" />
        </SimpleForm>
    </Create>
);
