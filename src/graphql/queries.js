/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
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
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getDream = /* GraphQL */ `
  query GetDream($id: ID!) {
    getDream(id: $id) {
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
export const listDreams = /* GraphQL */ `
  query ListDreams(
    $filter: ModelDreamFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listDreams(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
        }
        journalRefs {
          id
          title
          body
          keywords
          date
        }
      }
      nextToken
    }
  }
`;
export const getJournal = /* GraphQL */ `
  query GetJournal($id: ID!) {
    getJournal(id: $id) {
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
export const listJournals = /* GraphQL */ `
  query ListJournals(
    $filter: ModelJournalFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listJournals(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
