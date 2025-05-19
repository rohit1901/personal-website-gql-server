import { AppContext } from '@/types/interfaces/interfaces.common';
import { GITHUB_PUBLIC_REPOS_URL } from '../constants';
import { GitHubRepo } from '../graphql/resolvers-types';
import { transformGitHubData } from '@/utils/index';
import fetchMeta from '@/utils/fetch-meta-tags';

export const getGitHubRawData = async () => {
  const raw = await fetch(GITHUB_PUBLIC_REPOS_URL);
  return await raw.json();
};
export const getGitHubRepos = async (context: AppContext) => {
  const data = await getGitHubRawData();
  if (!data || 0 === data.length || data.message) {
    throw new Error(
      data.hasOwnProperty('message') ? data.message : 'No data found',
    );
  }
  const urls = data.map((repo: any) => repo.html_url);
  const rawMeta: Promise<GitHubRepo>[] = urls.map(async (url: string) =>
    fetchMeta(url),
  );
  const meta: GitHubRepo[] = await Promise.all(rawMeta);
  return transformGitHubData(meta, data[0].owner);
};
