/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
      id
      name
      bio
      dreams {
        items {
          id
          title
          date
          details
          rating
          keywords
          star
        }
        nextToken
      }
      journals {
        items {
          id
          title
          body
          keywords
          date
        }
        nextToken
      }
    }
  }
`;
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
      id
      name
      bio
      dreams {
        items {
          id
          title
          date
          details
          rating
          keywords
          star
        }
        nextToken
      }
      journals {
        items {
          id
          title
          body
          keywords
          date
        }
        nextToken
      }
    }
  }
`;
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
      id
      name
      bio
      dreams {
        items {
          id
          title
          date
          details
          rating
          keywords
          star
        }
        nextToken
      }
      journals {
        items {
          id
          title
          body
          keywords
          date
        }
        nextToken
      }
    }
  }
`;
export const createDream = /* GraphQL */ `
  mutation CreateDream(
    $input: CreateDreamInput!
    $condition: ModelDreamConditionInput
  ) {
    createDream(input: $input, condition: $condition) {
      id
      title
      date
      details
      rating
      keywords
      star
      user {
        id
        name
        bio
        dreams {
          nextToken
        }
        journals {
          nextToken
        }
      }
      journalRefs {
        id
        owner {
          id
          name
          bio
        }
        title
        body
        keywords
        dreamRef {
          nextToken
        }
        date
      }
    }
  }
`;
export const updateDream = /* GraphQL */ `
  mutation UpdateDream(
    $input: UpdateDreamInput!
    $condition: ModelDreamConditionInput
  ) {
    updateDream(input: $input, condition: $condition) {
      id
      title
      date
      details
      rating
      keywords
      star
      user {
        id
        name
        bio
        dreams {
          nextToken
        }
        journals {
          nextToken
        }
      }
      journalRefs {
        id
        owner {
          id
          name
          bio
        }
        title
        body
        keywords
        dreamRef {
          nextToken
        }
        date
      }
    }
  }
`;
export const deleteDream = /* GraphQL */ `
  mutation DeleteDream(
    $input: DeleteDreamInput!
    $condition: ModelDreamConditionInput
  ) {
    deleteDream(input: $input, condition: $condition) {
      id
      title
      date
      details
      rating
      keywords
      star
      user {
        id
        name
        bio
        dreams {
          nextToken
        }
        journals {
          nextToken
        }
      }
      journalRefs {
        id
        owner {
          id
          name
          bio
        }
        title
        body
        keywords
        dreamRef {
          nextToken
        }
        date
      }
    }
  }
`;
export const createJournal = /* GraphQL */ `
  mutation CreateJournal(
    $input: CreateJournalInput!
    $condition: ModelJournalConditionInput
  ) {
    createJournal(input: $input, condition: $condition) {
      id
      owner {
        id
        name
        bio
        dreams {
          nextToken
        }
        journals {
          nextToken
        }
      }
      title
      body
      keywords
      dreamRef {
        items {
          id
          title
          date
          details
          rating
          keywords
          star
        }
        nextToken
      }
      date
    }
  }
`;
export const updateJournal = /* GraphQL */ `
  mutation UpdateJournal(
    $input: UpdateJournalInput!
    $condition: ModelJournalConditionInput
  ) {
    updateJournal(input: $input, condition: $condition) {
      id
      owner {
        id
        name
        bio
        dreams {
          nextToken
        }
        journals {
          nextToken
        }
      }
      title
      body
      keywords
      dreamRef {
        items {
          id
          title
          date
          details
          rating
          keywords
          star
        }
        nextToken
      }
      date
    }
  }
`;
export const deleteJournal = /* GraphQL */ `
  mutation DeleteJournal(
    $input: DeleteJournalInput!
    $condition: ModelJournalConditionInput
  ) {
    deleteJournal(input: $input, condition: $condition) {
      id
      owner {
        id
        name
        bio
        dreams {
          nextToken
        }
        journals {
          nextToken
        }
      }
      title
      body
      keywords
      dreamRef {
        items {
          id
          title
          date
          details
          rating
          keywords
          star
        }
        nextToken
      }
      date
    }
  }
`;
