export type PromiseError = {
  promiseError: {
    message: string;
    error: unknown;
  };
};

export function promiseError(error: unknown): PromiseError {
  return {
    promiseError: {
      message: "unable to request the Database",
      error: error,
    },
  };
}

export type InvalidIdError = {
  invalidIdError: {
    message: string;
    id: string;
  };
};

export function invalidIdError(id: string): InvalidIdError {
  return {
    invalidIdError: {
      message: "invalid id on request, please submit a ObjectId",
      id: id,
    },
  };
}

export type InvalidAuthorError = {
  invalidAuthorError: {
    message: string;
    author: string;
  };
};



export type CustomErrors = PromiseError | InvalidIdError;
