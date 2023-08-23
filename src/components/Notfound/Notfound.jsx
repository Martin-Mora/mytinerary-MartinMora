import notFound from '../../img/notFound.svg';
import './notFound.css'

export const Notfound = () => {
  return (
    <div className='notFoundCity-container'>
      <h2 className='notFoundCity-container--title'>Result not found</h2>
      <img src={notFound} className='notFoundCity' alt="Not found" />
    </div>
  )
}
