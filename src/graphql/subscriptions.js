/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser {
    onCreateUser {
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser {
    onUpdateUser {
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser {
    onDeleteUser {
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
export const onCreateDream = /* GraphQL */ `
  subscription OnCreateDream {
    onCreateDream {
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
export const onUpdateDream = /* GraphQL */ `
  subscription OnUpdateDream {
    onUpdateDream {
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
export const onDeleteDream = /* GraphQL */ `
  subscription OnDeleteDream {
    onDeleteDream {
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
export const onCreateJournal = /* GraphQL */ `
  subscription OnCreateJournal {
    onCreateJournal {
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
export const onUpdateJournal = /* GraphQL */ `
  subscription OnUpdateJournal {
    onUpdateJournal {
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
export const onDeleteJournal = /* GraphQL */ `
  subscription OnDeleteJournal {
    onDeleteJournal {
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
