/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateTodoListInput = {
  id?: string | null,
  name: string,
  date?: string | null,
  tasks?: Array< TodoItemInput | null > | null,
};

export type TodoItemInput = {
  value: string,
  completed?: boolean | null,
};

export type ModelTodoListConditionInput = {
  name?: ModelStringInput | null,
  date?: ModelStringInput | null,
  and?: Array< ModelTodoListConditionInput | null > | null,
  or?: Array< ModelTodoListConditionInput | null > | null,
  not?: ModelTodoListConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type UpdateTodoListInput = {
  id: string,
  name?: string | null,
  date?: string | null,
  tasks?: Array< TodoItemInput | null > | null,
};

export type DeleteTodoListInput = {
  id?: string | null,
};

export type ModelTodoListFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  date?: ModelStringInput | null,
  and?: Array< ModelTodoListFilterInput | null > | null,
  or?: Array< ModelTodoListFilterInput | null > | null,
  not?: ModelTodoListFilterInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type CreateTodoListMutationVariables = {
  input: CreateTodoListInput,
  condition?: ModelTodoListConditionInput | null,
};

export type CreateTodoListMutation = {
  createTodoList:  {
    __typename: "TodoList",
    id: string,
    name: string,
    date: string | null,
    tasks:  Array< {
      __typename: "TodoItem",
      value: string,
      completed: boolean | null,
    } | null > | null,
    createdAt: string,
    updatedAt: string,
    owner: string | null,
  } | null,
};

export type UpdateTodoListMutationVariables = {
  input: UpdateTodoListInput,
  condition?: ModelTodoListConditionInput | null,
};

export type UpdateTodoListMutation = {
  updateTodoList:  {
    __typename: "TodoList",
    id: string,
    name: string,
    date: string | null,
    tasks:  Array< {
      __typename: "TodoItem",
      value: string,
      completed: boolean | null,
    } | null > | null,
    createdAt: string,
    updatedAt: string,
    owner: string | null,
  } | null,
};

export type DeleteTodoListMutationVariables = {
  input: DeleteTodoListInput,
  condition?: ModelTodoListConditionInput | null,
};

export type DeleteTodoListMutation = {
  deleteTodoList:  {
    __typename: "TodoList",
    id: string,
    name: string,
    date: string | null,
    tasks:  Array< {
      __typename: "TodoItem",
      value: string,
      completed: boolean | null,
    } | null > | null,
    createdAt: string,
    updatedAt: string,
    owner: string | null,
  } | null,
};

export type GetTodoListQueryVariables = {
  id: string,
};

export type GetTodoListQuery = {
  getTodoList:  {
    __typename: "TodoList",
    id: string,
    name: string,
    date: string | null,
    tasks:  Array< {
      __typename: "TodoItem",
      value: string,
      completed: boolean | null,
    } | null > | null,
    createdAt: string,
    updatedAt: string,
    owner: string | null,
  } | null,
};

export type ListTodoListsQueryVariables = {
  filter?: ModelTodoListFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListTodoListsQuery = {
  listTodoLists:  {
    __typename: "ModelTodoListConnection",
    items:  Array< {
      __typename: "TodoList",
      id: string,
      name: string,
      date: string | null,
      tasks:  Array< {
        __typename: "TodoItem",
        value: string,
        completed: boolean | null,
      } | null > | null,
      createdAt: string,
      updatedAt: string,
      owner: string | null,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type OnCreateTodoListSubscriptionVariables = {
  owner: string,
};

export type OnCreateTodoListSubscription = {
  onCreateTodoList:  {
    __typename: "TodoList",
    id: string,
    name: string,
    date: string | null,
    tasks:  Array< {
      __typename: "TodoItem",
      value: string,
      completed: boolean | null,
    } | null > | null,
    createdAt: string,
    updatedAt: string,
    owner: string | null,
  } | null,
};

export type OnUpdateTodoListSubscriptionVariables = {
  owner: string,
};

export type OnUpdateTodoListSubscription = {
  onUpdateTodoList:  {
    __typename: "TodoList",
    id: string,
    name: string,
    date: string | null,
    tasks:  Array< {
      __typename: "TodoItem",
      value: string,
      completed: boolean | null,
    } | null > | null,
    createdAt: string,
    updatedAt: string,
    owner: string | null,
  } | null,
};

export type OnDeleteTodoListSubscriptionVariables = {
  owner: string,
};

export type OnDeleteTodoListSubscription = {
  onDeleteTodoList:  {
    __typename: "TodoList",
    id: string,
    name: string,
    date: string | null,
    tasks:  Array< {
      __typename: "TodoItem",
      value: string,
      completed: boolean | null,
    } | null > | null,
    createdAt: string,
    updatedAt: string,
    owner: string | null,
  } | null,
};
