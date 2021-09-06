export default {
  widgets: [
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
                  buildHookId: '6135d14341a38581bdfc4473',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-inzo9rax',
                  apiId: '5747ce13-5b46-487c-8bc3-bdca6475a058'
                },
                {
                  buildHookId: '6135d143dea4e25636197e08',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-iympzf3r',
                  apiId: 'df096e90-c4ed-4d56-8c73-1f2d476dfdb3'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/N4Mchin/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-iympzf3r.netlify.app', category: 'apps'}
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
