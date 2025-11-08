import { lazy, Suspense } from 'react';
import Categories from '../components/categories';
import Sort from '../components/Sort';
const LezyComponentFetch = lazy(() => import('../components/FetchPizzas'));
import FetchPizzas from '../components/FetchPizzas';

export default function Home(params) {
  return (
    <>
      <div className="content__top">
        <Categories />
        <Sort />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        <Suspense fallback={<p>Loading ...</p>}>
          <LezyComponentFetch />
        </Suspense>
      </div>
    </>
  );
}
