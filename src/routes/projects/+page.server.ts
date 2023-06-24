import { GITHUB_API_TOKEN } from '$env/static/private';
import { Octokit } from 'octokit';
import type { PageServerLoad } from './$types';

function getPage(url: URL): number {
  const pageParam = url.searchParams.get("page");
  if (pageParam) {
    const pageNum = parseInt(pageParam);
    return !isNaN(pageNum) ? pageNum : 1;
  }
  return 1;
}

const octokit = new Octokit({ auth: GITHUB_API_TOKEN })

export const load: PageServerLoad = async ({ url }) => {
    const page = getPage(url);
    const { data } = await octokit.rest.repos.listForUser({
        username: "BenjaminHinchliff",
        sort: 'created',
        per_page: 20,
        page
    })

    return { repos: data }
};