export function getPage(url: URL): number {
	const pageParam = url.searchParams.get('page');
	if (pageParam) {
		const pageNum = parseInt(pageParam);
		return !isNaN(pageNum) ? pageNum : 1;
	}
	return 1;
}
