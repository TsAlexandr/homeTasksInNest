export class Pagination {
  static getPaginationData(query) {
    const page = typeof query.pageNumber === 'string' ? +query.pageNumber : 1;
    const pageSize = typeof query.pageSize === 'string' ? +query.pageSize : 10;
    const searchNameTerm =
      typeof query.searchNameTerm === 'string' ? query.searchNameTerm : '';
    const sortBy =
      typeof query.sortBy === 'string' ? query.sortBy : 'createdAt';
    const sortDirection = query.sortDirection === 'asc' ? 1 : -1;
    return { page, pageSize, searchNameTerm, sortBy, sortDirection };
  }

  static getData(query) {
    const page = typeof query.PageNumber === 'string' ? +query.PageNumber : 1;
    const pageSize = typeof query.PageSize === 'string' ? +query.PageSize : 10;
    const sortBy =
      typeof query.sortBy === 'string' ? query.sortBy : 'createdAt';
    const sortDirection = query.sortDirection === 'asc' ? 1 : -1;
    return { page, pageSize, sortBy, sortDirection };
  }

  static getPaginationDataForUser(query) {
    const page = typeof query.pageNumber === 'string' ? +query.pageNumber : 1;
    const pageSize = typeof query.pageSize === 'string' ? +query.pageSize : 10;
    const searchLoginTerm =
      typeof query.searchNameTerm === 'string' ? query.searchNameTerm : '';
    const searchEmailTerm =
      typeof query.searchNameTerm === 'string' ? query.searchNameTerm : '';
    const sortBy =
      typeof query.sortBy === 'string' ? query.sortBy : 'createdAt';
    const sortDirection = query.sortDirection === 'asc' ? 1 : -1;
    return {
      page,
      pageSize,
      searchLoginTerm,
      searchEmailTerm,
      sortBy,
      sortDirection,
    };
  }
}
