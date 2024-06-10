import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // Home
  {
    path: '',
    loadChildren: () =>
      import('./components/pages/home-two/home-two.module').then((m) => m.HomeTwoModule),
    data: { breadcrumb: 'Homepage' },
  },  
  {
    path: 'naspo',
    loadChildren: () =>
      import('./components/pages/home-two/home-two.module').then(
        (m) => m.HomeTwoModule
      ),
    data: { breadcrumb: 'Homepage' },
  },
  {
    path: 'lowtahun',
    loadChildren: () =>
      import('./components/pages/low/lowtahun.module').then(
        (m) => m.lowtahunModule
      ),
    data: { breadcrumb: 'Daftar Pemenang' },
  },
  {
    path: 'kategori23',
    loadChildren: () =>
      import('./components/pages/low/2023/kategori/kategori23.module').then(
        (m) => m.Kategori23Module
      ),
    data: { breadcrumb: 'Daftar Pemenang' },
  },
  {
    path: 'jenjangofl23',
    loadChildren: () =>
      import('./components/pages/low/2023/jenjangofl/jenjangofl23.module').then(
        (m) => m.Jenjangofl23Module
      ),
    data: { breadcrumb: 'Daftar Pemenang' },
  },
  {
    path: 'jenjangonl23',
    loadChildren: () =>
      import('./components/pages/low/2023/jenjangonl/jenjangonl23.module').then(
        (m) => m.Jenjangonl23Module
      ),
    data: { breadcrumb: 'Daftar Pemenang' },
  },
  {
    path: 'gallery',
    loadChildren: () =>
      import('./components/pages/team/team.module').then((m) => m.TeamModule),
    data: { breadcrumb: 'Gallery' },
  },
  // {
  //   path: 'coming-soon',
  //   loadChildren: () =>
  //     import('./components/pages/coming-soon/coming-soon.module').then(
  //       (m) => m.ComingSoonModule
  //     ),
  //   data: { breadcrumb: 'Coming Soon' },
  // },
  // {
  //   path: 'error',
  //   loadChildren: () =>
  //     import('./components/pages/error-page/error-page.module').then(
  //       (m) => m.ErrorPageModule
  //     ),
  //   data: { breadcrumb: 'Error 404' },
  // },
  // // Blog
  // {
  //   path: 'blog/search/:query',
  //   loadChildren: () =>
  //     import('./components/pages/blog-grid/blog-grid.module').then(
  //       (m) => m.BlogGridModule
  //     ),
  //   data: { breadcrumb: 'Blog Grid' },
  // },
  // {
  //   path: 'blog/cat/:catId',
  //   loadChildren: () =>
  //     import('./components/pages/blog-grid/blog-grid.module').then(
  //       (m) => m.BlogGridModule
  //     ),
  //   data: { breadcrumb: 'Blog Grid' },
  // },
  // {
  //   path: 'blog/tag/:tagId',
  //   loadChildren: () =>
  //     import('./components/pages/blog-grid/blog-grid.module').then(
  //       (m) => m.BlogGridModule
  //     ),
  //   data: { breadcrumb: 'Blog Grid' },
  // },
  // {
  //   path: 'blog/author/:authorId',
  //   loadChildren: () =>
  //     import('./components/pages/blog-grid/blog-grid.module').then(
  //       (m) => m.BlogGridModule
  //     ),
  //   data: { breadcrumb: 'Blog Grid' },
  // },
  // {
  //   path: 'blog-grid',
  //   loadChildren: () =>
  //     import('./components/pages/blog-grid/blog-grid.module').then(
  //       (m) => m.BlogGridModule
  //     ),
  //   data: { breadcrumb: 'Blog Grid' },
  // },
  // {
  //   path: 'blog-standard',
  //   loadChildren: () =>
  //     import('./components/pages/blog-list/blog-list.module').then(
  //       (m) => m.BlogListModule
  //     ),
  //   data: { breadcrumb: 'Blog Standard' },
  // },
  // {
  //   path: 'blog-details/:id',
  //   loadChildren: () =>
  //     import('./components/pages/blog-details/blog-details.module').then(
  //       (m) => m.BlogDetailsModule
  //     ),
  //   data: { breadcrumb: 'Blog Details' },
  // },
  // Contact
  {
    path: 'contact',
    loadChildren: () =>
      import('./components/pages/contact/contact.module').then(
        (m) => m.ContactModule
      ),
    data: { breadcrumb: 'Contact Us' },
  },
  {
    path: 'contact2',
    loadChildren: () =>
      import('./components/pages/contact2/contact.module').then(
        (m) => m.Contact2Module
      ),
    data: { breadcrumb: 'Kontak Kami' },
  },
  {
    path: 'faq1',
    loadChildren: () =>
      import('./components/pages/faq1/faq1.module').then(
        (m) => m.Faq1Module
      ),
    data: { breadcrumb: 'FAQ' },
  },
  {
    path: 'faq2',
    loadChildren: () =>
      import('./components/pages/faq2/faq2.module').then(
        (m) => m.Faq2Module
      ),
    data: { breadcrumb: 'FAQ' },
  },
  {
    path: 'listnews',
    loadChildren: () =>
      import('./components/pages/news/listnews.module').then(
        (m) => m.ListNewsModule
      ),
    data: { breadcrumb: '' },
  },
  {
    path: 'listnews2',
    loadChildren: () =>
      import('./components/pages/listnews2/listnews2.module').then(
        (m) => m.ListNews2Module
      ),
    data: { breadcrumb: '' },
  },
  {
    path: 'news1',
    loadChildren: () =>
      import('./components/pages/news1/news1.module').then(
        (m) => m.News1Module
      ),
    data: { breadcrumb: '' },
  },
  {
    path: 'news2',
    loadChildren: () =>
      import('./components/pages/news2/news2.module').then(
        (m) => m.News2Module
      ),
    data: { breadcrumb: '' },
  },
  {
    path: 'news3',
    loadChildren: () =>
      import('./components/pages/news3/news3.module').then(
        (m) => m.News3Module
      ),
    data: { breadcrumb: '' },
  },
  {
    path: 'news4',
    loadChildren: () =>
      import('./components/pages/news4/news4.module').then(
        (m) => m.News4Module
      ),
    data: { breadcrumb: '' },
  },
  {
    path: 'news5',
    loadChildren: () =>
      import('./components/pages/news5/news5.module').then(
        (m) => m.News5Module
      ),
    data: { breadcrumb: '' },
  },
  {
    path: 'news6',
    loadChildren: () =>
      import('./components/pages/news6/news6.module').then(
        (m) => m.News6Module
      ),
    data: { breadcrumb: '' },
  },
  {
    path: 'news7',
    loadChildren: () =>
      import('./components/pages/news7/news7.module').then(
        (m) => m.News7Module
      ),
    data: { breadcrumb: '' },
  },
  {
    path: 'news8',
    loadChildren: () =>
      import('./components/pages/news8/news8.module').then(
        (m) => m.News8Module
      ),
    data: { breadcrumb: '' },
  },
  {
    path: 'news9',
    loadChildren: () =>
      import('./components/pages/news9/news9.module').then(
        (m) => m.News9Module
      ),
    data: { breadcrumb: '' },
  },
  {
    path: 'news10',
    loadChildren: () =>
      import('./components/pages/news10/news10.module').then(
        (m) => m.News10Module
      ),
    data: { breadcrumb: '' },
  },
  {
    path: 'news11',
    loadChildren: () =>
      import('./components/pages/news11/news11.module').then(
        (m) => m.News11Module
      ),
    data: { breadcrumb: '' },
  },
  {
    path: 'news12',
    loadChildren: () =>
      import('./components/pages/news12/news12.module').then(
        (m) => m.News12Module
      ),
    data: { breadcrumb: '' },
  },
  {
    path: '**',
    loadChildren: () =>
      import('./components/pages/error-page/error-page.module').then(
        (m) => m.ErrorPageModule
      ),
    data: { breadcrumb: 'Error 404' },
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
