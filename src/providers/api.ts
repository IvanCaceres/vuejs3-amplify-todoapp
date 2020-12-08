import {
    createTodoList as createTodoListMutation,
    updateTodoList as updateTodoListMutation,
} from '@/graphql/mutations';

import {
    listTodoLists as listTodoListsQuery,
    getTodoList as getTodoListQuery
} from '@/graphql/queries';

import { API, graphqlOperation } from 'aws-amplify';

export const getTodoList = async (id: string) => {
    const record: any = await API.graphql(
        graphqlOperation(getTodoListQuery, {
            id
        })
    );
    return record.data.getTodoList
}

export const listTodoLists = async () => {
    const record: any = await API.graphql(
        graphqlOperation(listTodoListsQuery)
    );
    return record.data.listTodoLists.items
}

export const createTodoList = async (todoList: any) => {
    const record: any = await API.graphql(
        graphqlOperation(createTodoListMutation, {
            input: todoList,
        }),
    );
    return record.data.createTodoList
}

export const updateTodoList = async (todoList: any) => {
    const record: any = await API.graphql(
        graphqlOperation(updateTodoListMutation, {
            input: todoList,
        }),
    );
    return record.data.updateTodoList
}