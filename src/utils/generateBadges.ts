/* eslint-disable @typescript-eslint/no-explicit-any */
export default function generateBadges(repo: string): any {
  const badges = [
    {
      name: 'Github Language Count',
      badge: `<img alt="GitHub Language Count" src="https://img.shields.io/github/languages/count/${repo}" />`,
      link: `https://img.shields.io/github/languages/count/${repo}`,
    },
    {
      name: 'Github Top Language',
      badge: `<img alt="GitHub Top Language" src="https://img.shields.io/github/languages/top/${repo}" />`,
      link: `https://img.shields.io/github/languages/top/${repo}`,
    },
    {
      name: 'Github Repo Size',
      badge: `<img alt="" src="https://img.shields.io/github/repo-size/${repo}" />`,
      link: `https://img.shields.io/github/repo-size/${repo}`,
    },
    {
      name: 'Github Issues',
      badge: `<img alt="GitHub Issues" src="https://img.shields.io/github/issues/${repo}" />`,
      link: `https://img.shields.io/github/issues/${repo}`,
    },
    {
      name: 'Github Closed Issues',
      badge: `<img alt="GitHub Closed Issues" src="https://img.shields.io/github/issues-closed/${repo}" />`,
      link: `https://img.shields.io/github/issues-closed/${repo}`,
    },
    {
      name: 'Github Pull Requests',
      badge: `<img alt="GitHub Pull Requests" src="https://img.shields.io/github/issues-pr/${repo}" />`,
      link: `https://img.shields.io/github/issues-pr/${repo}`,
    },
    {
      name: 'Github Closed Pull Requests',
      badge: `<img alt="GitHub Closed Pull Requests" src="https://img.shields.io/github/issues-pr-closed/${repo}" />`,
      link: `https://img.shields.io/github/issues-pr-closed/${repo}`,
    },
    {
      name: 'Github package.json Version',
      badge: `<img alt="GitHub Package.json Version" src="https://img.shields.io/github/package-json/v/${repo}" />`,
      link: `https://img.shields.io/github/package-json/v/${repo}`,
    },
    {
      name: 'Github Contributors',
      badge: `<img alt="GitHub Contributors" src="https://img.shields.io/github/contributors/${repo}" />`,
      link: `https://img.shields.io/github/contributors/${repo}`,
    },

    {
      name: 'Github Last Commit',
      badge: `<img alt="GitHub Last Commit" src="https://img.shields.io/github/last-commit/${repo}" />`,
      link: `https://img.shields.io/github/last-commit/${repo}`,
    },
    {
      name: 'Github Commit Activity (Week)',
      badge: `<img alt="GitHub Commit Activity (Week)" src="https://img.shields.io/github/commit-activity/w/${repo}" />`,
      link: `https://img.shields.io/github/commit-activity/w/${repo}`,
    },
    {
      name: 'Github Commit Activity (Month)',
      badge: `<img alt="GitHub Commit Activity (Month)" src="https://img.shields.io/github/commit-activity/m/${repo}" />`,
      link: `https://img.shields.io/github/commit-activity/m/${repo}`,
    },
    {
      name: 'Github Commit Activity (Year)',
      badge: `<img alt="GitHub Commit Activity (Year)" src="https://img.shields.io/github/commit-activity/y/${repo}" />`,
      link: `https://img.shields.io/github/commit-activity/y/${repo}`,
    },
  ];

  return badges;
}
