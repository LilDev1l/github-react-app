export function formattedNumber(number) {
    if (number < 1000) {
        return number;
    }

    return `${Math.round(number / 100) / 10}k`;
}

export function getPageCount(totalRepos, countReposOnPage) {
    return Math.ceil(totalRepos / countReposOnPage);
}

export function getPaginationInfo(currentPage, countReposOnPage, totalRepos) {
    const from = currentPage * countReposOnPage - countReposOnPage + 1;
    const to = currentPage * countReposOnPage > totalRepos ? totalRepos : currentPage * countReposOnPage;

    return `${from}-${to} of ${totalRepos} items`;
}