/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateTodoList = /* GraphQL */ `
  subscription OnCreateTodoList {
    onCreateTodoList {
      id
      name
      tasks {
        value
        order
        completed
        date
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateTodoList = /* GraphQL */ `
  subscription OnUpdateTodoList {
    onUpdateTodoList {
      id
      name
      tasks {
        value
        order
        completed
        date
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteTodoList = /* GraphQL */ `
  subscription OnDeleteTodoList {
    onDeleteTodoList {
      id
      name
      tasks {
        value
        order
        completed
        date
      }
      createdAt
      updatedAt
    }
  }
`;
