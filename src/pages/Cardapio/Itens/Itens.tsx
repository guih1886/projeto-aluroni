import Item from './Item/Item'
import itens from './itens.json'
import style from './Itens.module.scss'

export default function Itens() {
    return (
        <div className={style.itens}>
            {itens.map(item => (
                <Item key={item.id} {...item} />
            ))}
        </div>
    )
}