import { Link } from 'react-router-dom'
import Icon from '../components/Icons'

export default function NotFound() {
  return (
    <section className="container-x grid min-h-[60vh] place-items-center py-20 text-center">
      <div>
        <p className="font-display text-6xl font-bold text-brand-200">404</p>
        <h1 className="mt-4 font-display text-2xl font-bold sm:text-3xl">This page could not be found</h1>
        <p className="mx-auto mt-3 max-w-md text-sm text-slate-600">
          The page you were looking for may have been moved. Use the navigation above, or return to the home page.
        </p>
        <Link to="/" className="btn-primary mt-8">
          Back to home <Icon name="arrow" className="h-4 w-4" />
        </Link>
      </div>
    </section>
  )
}
