export interface TPagination<T> {
  data: T[];
  meta: {
    total: number;
    perPage: number;
    page: number;
    lastPage: number;
  };
}
