import './ItemListContainer.scss'

export const ItemListContainer = ({greeting}) => {
  return(
    <div className="body">
      <h1 className="titulo">{greeting}</h1>
    </div>
  )
}