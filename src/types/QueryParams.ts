export type OrderDir = 'DESC' | 'ASC';

export interface BrowseParams {
  page?: number;
  pageSize?: number;
  orderBy?: string;
  orderDir?: OrderDir;
}
