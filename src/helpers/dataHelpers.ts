
// In a file named baseTypes.ts or similar
export type baseType<T> = {
  all: Record<number, T>; // Assuming ids are numbers
  recipe: number[];
  filteredIds: number[];
  filterQuery: string;
  selectedId?: number;
  editedId?: number;
};

// Define interfaces for the state and response data
export interface AuthState {
  token: string | null;
  ErrorMsg?: string;
}

export interface LoginResponse {
  seller: {
    token: string;
  };
}

export interface RegisterResponse {
  seller: {
    token: string;
  };
}


export function convertToDict(items: any[]): baseType<any> {
  const all: any = {};
  const order: number[] = [];

  items.forEach((item: any) => {
    all[item.id] = item;
    order.push(item.id);
  });

  return { all, recipe: order, filteredIds: order, filterQuery: "" };
}


export function validateEmail(email: string): boolean {
  // Implement email validation logic
  return true;
}
