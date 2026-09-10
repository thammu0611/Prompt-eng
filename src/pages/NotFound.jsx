import { Link } from 'react-router-dom'
import Crest from '../components/Crest'
import Icon from '../components/Icons'

export default function NotFound() {
  return (
    <section className="wrap grid min-h-[64vh] place-items-center py-24 text-center">
      <div>
        <Crest className="mx-auto h-14 w-14" />
        <p className="num mt-8 text-[64px] font-light leading-none text-ink-300">404</p>
        <h1 className="display-lg mt-4">This page could not be found</h1>
        <p className="lede mx-auto mt-4">
          The page you were looking for may have been moved. Use the menu above, or return to the home page.
        </p>
        <Link to="/" className="btn-ink mt-10">
          Back to home <Icon name="arrow" className="h-3.5 w-3.5" />
        </Link>
      </div>
    </section>
  )
}
