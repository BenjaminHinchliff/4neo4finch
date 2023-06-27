import { GITHUB_API_TOKEN } from '$env/static/private';
import { Octokit } from 'octokit';
import type { PageServerLoad } from './$types';
import { getPage } from '$lib/utils/get-page';

const octokit = new Octokit({ auth: GITHUB_API_TOKEN });
octokit.rest.users
	.getAuthenticated()
	.then((user) => console.log(`Sucessfully created octokit instance: ${user.data.name}`));

export const load: PageServerLoad = async ({ url }) => {
	const PER_PAGE = 20;
	const page = getPage(url);
	const { data } = await octokit.rest.repos.listForUser({
		username: 'BenjaminHinchliff',
		sort: 'created',
		per_page: 20,
		page
	});

	return { repos: data, reposPerPage: PER_PAGE };
};
