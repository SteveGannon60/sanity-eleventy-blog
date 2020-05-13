export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-eleventy-blog'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5ebbfc40f2f1f9265d4dc6bb',
                  title: 'Sanity Studio',
                  name: 'sanity-eleventy-blog-studio-uypjw3ss',
                  apiId: 'fc7a1221-40ee-4ef3-a828-79fa4631779c'
                },
                {
                  buildHookId: '5ebbfc4066e83cc557bda43d',
                  title: 'Blog Website',
                  name: 'sanity-eleventy-blog-web-kea189ra',
                  apiId: 'c5bd07fa-f993-4932-8053-422599ffd5d0'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/SteveGannon60/sanity-eleventy-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-eleventy-blog-web-kea189ra.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
