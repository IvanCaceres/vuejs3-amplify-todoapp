/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateTodoList = /* GraphQL */ `
  subscription OnCreateTodoList($owner: String!) {
    onCreateTodoList(owner: $owner) {
      id
      name
      date
      tasks {
        value
        completed
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onUpdateTodoList = /* GraphQL */ `
  subscription OnUpdateTodoList($owner: String!) {
    onUpdateTodoList(owner: $owner) {
      id
      name
      date
      tasks {
        value
        completed
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onDeleteTodoList = /* GraphQL */ `
  subscription OnDeleteTodoList($owner: String!) {
    onDeleteTodoList(owner: $owner) {
      id
      name
      date
      tasks {
        value
        completed
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
