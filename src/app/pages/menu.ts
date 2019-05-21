export let MENU_ITEM = [
  {
    path: 'manage-emplacement',
    title: 'Gestion emplacements',
    icon: 'dashboard',
    children: [
      {
        path: 'emp-list',
        title: 'List des emplacement'
      },
      {
        path: 'emp-add',
        title: 'Ajouter un emplacement'
      }
    ]
  },
  {
    path: 'manage-famille',
    title: 'Gestion familles',
    icon: 'dashboard',
    children: [
      {
        path: 'famille-list',
        title: 'List des familles'
      },
      {
        path: 'famille-add',
        title: 'Ajouter un famille'
      }
    ]
  },
  {
    path: 'manage-article',
    title: 'Gestion articles',
    icon: 'dashboard',
    children: [
      {
        path: 'article-list',
        title: 'List des articles'
      },
      {
        path: 'article-add',
        title: 'Ajouter un article'
      }
    ]
  },
  {
    path: 'manage-site',
    title: 'Gestion sites',
    icon: 'dashboard',
    children: [
      {
        path: 'site-list',
        title: 'List des sites'
      },
      {
        path: 'site-add',
        title: 'Ajouter un site'
      }
    ]
  },
  {
    path: 'manage-fournisseur',
    title: 'Gestion fournisseurs',
    icon: 'dashboard',
    children: [
      {
        path: 'fournisseur-list',
        title: 'List des fournisseurs'
      },
      {
        path: 'fournisseur-add',
        title: 'Ajouter un fournisseur'
      }
    ]
  },
{
    path: 'manage-reception',
    title: 'Bons de réception',
    icon: 'dashboard',
    children: [
      {
        path: 'reception-list',
        title: 'List des bons de réceptions'
      },
      {
        path: 'reception-add',
        title: 'Ajouter un bon de réception'
      }
    ]
  },
  {
    path: 'manage-immobilisation',
    title: 'Gestion Immobilisations',
    icon: 'dashboard',
    children: [
      {
        path: 'immobilisation-list',
        title: 'List des immobilisations'
      },
      {
        path: 'immobilisation-add',
        title: 'Ajouter une immobilisation'
      }
    ]
  },
  {
    path: 'managee-transfert',
    title: 'Transfert immobilisation',
    icon: 'dashboard',
    children: [
      {
        path: 'transfert-list',
        title: 'List des Transfert des immobilisations'
      },
      {
        path: 'transfert-add',
        title: 'Ajouter un Transfert'
      }
    ]
  },
  {
    path: 'manage-maintenances',
    title: 'Gestion maintenances',
    icon: 'dashboard',
    children: [
      {
        path: 'maintenances-list',
        title: 'List des opérations de maintenances'
      },
      {
        path: 'maintenances-sortie',
        title: 'Ajouter un sortie'
      },
      {
        path: 'maintenances-entree',
        title: 'Ajouter un entree'
      }
    ]
  },
  {
    path: 'manage-cession',
    title: 'Gestion cessions',
    icon: 'dashboard',
    children: [
      {
        path: 'cession-list',
        title: 'List des immobilisations en cession'
      },
      {
        path: 'cession-add',
        title: 'Ajouter une cession'
      }
    ]
  },
  {
    path: 'index',
    title: 'Dashboard',
    icon: 'dashboard'
  },
  {
    path: 'editor',
    title: 'Pell Editor',
    icon: 'pencil'
  },
  {
    path: 'icon',
    title: 'Icon',
    icon: 'diamond'
  },
  {
    path: 'profile',
    title: 'User Profile',
    icon: 'user'
  },
  {
    path: 'ui',
    title: 'UI Element',
    icon: 'paint-brush',
    children: [
      {
        path: 'grid',
        title: 'Bootstrap Grid'
      },
      {
        path: 'buttons',
        title: 'Buttons'
      },
      {
        path: 'notification',
        title: 'Notification'
      },
      {
        path: 'tabs',
        title: 'Tabs'
      },
      {
        path: 'file-tree',
        title: 'File Tree'
      },
      {
        path: 'modals',
        title: 'Modals'
      },
      {
        path: 'progress-bar',
        title: 'ProgressBar'
      },
      /*  {
           path: 'loading',
           title: 'Loading'
       }, */
    ]
  },
  {
    path: 'form',
    title: 'Forms',
    icon: 'check-square-o',
    children: [
      {
        path: 'form-inputs',
        title: 'Form Inputs'
      },
      {
        path: 'form-layouts',
        title: 'Form Layouts'
      },
      {
        path: 'file-upload',
        title: 'File Upload'
      },
      {
        path: 'ng2-select',
        title: 'Ng2-Select'
      }
    ]
  },
  {
    path: 'charts',
    title: 'Charts',
    icon: 'bar-chart',
    children: [
      {
        path: 'echarts',
        title: 'Echarts'
      }
    ]
  },
  {
    path: 'table',
    title: 'Tables',
    icon: 'table',
    children: [
      {
        path: 'basic-tables',
        title: 'Basic Tables'
      },
      {
        path: 'data-table',
        title: 'Data Table'
      }
    ]
  },
  {
    path: 'menu-levels',
    title: 'Menu Levels',
    icon: 'sitemap',
    children: [
      {
        path: 'levels1',
        title: 'Menu Level1',
        children: [
          {
            path: 'levels1-1',
            title: 'Menu Level1-1'
          }
        ]
      },
      {
        path: 'levels2',
        title: 'Menu Level2'
      }
    ]
  },
];
