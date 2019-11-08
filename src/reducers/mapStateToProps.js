export const getPages = (taskCount, currentPage) => {
    let pageCount = Math.ceil(taskCount / 3);
    let prevPage = currentPage - 1 ? currentPage - 1 : undefined;
    let nextPage = currentPage + 1 <= pageCount ? currentPage + 1 : undefined;

    return {
        pageCount,
        prevPage,
        nextPage
    };
};